import React, { useState } from 'react';

const NameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    } else {
      alert('Please fill in both first and last name.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h2>Full Name Display</h2>
        <lable>First Name: </lable>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br />
        <br />
        <lable>Last Name: </lable>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      
      { fullName && <p> <label>Full Name: </label> {fullName}</p>}
    </div>
  );
};

export default NameForm;