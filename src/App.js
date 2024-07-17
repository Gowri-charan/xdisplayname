import React, { useState } from 'react';

const FullNameForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setFullName(`${firstName} ${lastName}`);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} required /><br /><br />

                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} required /><br /><br />

                <button type="submit" disabled={!firstName || !lastName}>Submit</button>
            </form>

            {fullName && (
                <p>Full Name: {fullName}</p>
            )}
        </div>
    );
};

export default FullNameForm;