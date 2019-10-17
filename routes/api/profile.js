const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route   GET api/profile/me
// @desc    Get current users profile
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    );

    if (!profile) {
      res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/profile/
// @desc    Create or update a user profile
// @access  Private

router.post('/', auth, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { website, location } = req.body;

  // Build profile object
  const profileFields = {};
  profileFields.user = req.user.id;
  if (website) profileFields.website = website;
  if (location) profileFields.location = location;

  try {
    let profile = await Profile.findOne({ user: req.user.id });
    // Update
    if (profile) {
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );

      return res.json(profile);
    }
    // Create
    profile = new Profile(profileFields);

    await profile.save();
    res.json(profile);
  } catch (error) {
    console.error(console.error(error.message));
    res.status(500).send('Server error');
  }
});

// @route   GET api/profile/
// @desc    Get all profiles
// @access  Public
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name']);
    res.json(profiles);
  } catch (error) {
    console.error(console.error(error.message));
    res.status(500).send('Server error');
  }
});

// @route   GET api/profile/user/:userID
// @desc    Get profile by user ID
// @access  Public
router.get('/user/:userID', async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.params.userID }).populate(
      'user',
      ['name']
    );

    if (!profile) return res.status(400).json({ msg: 'Profile not found' });

    res.json(profile);
  } catch (error) {
    console.error(error.message);
    if (error.kind === 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server error');
  }
});

module.exports = router;
