import React, { useState } from 'react';

import './Register.scss';

const Register = () => {
  const [value, setValue] = useState('coconut');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>Pick your gender:</label>
        <select value={value} onChange={handleChange}>
          <option value="man">Man</option>
          <option value="woman">Woman</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Register;
