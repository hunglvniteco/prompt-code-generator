import React from 'react';
import { useState } from 'react';

function RegistrationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [errorMessages, setErrorMessages] = useState({});

  const handleNextStep = () => {
    if (step === 1) {
      // Step 1 validation
      if (!formData.username || !formData.email) {
        setErrorMessages({ username: 'Username is required', email: 'Email is required' });
      } else {
        setFormData({ ...formData, step: 2 });
      }
    } else if (step === 2) {
      // Step 2 validation
      if (!formData.age || formData.age < 18) {
        setErrorMessages({ age: 'Age must be at least 18' });
      } else {
        setFormData({ ...formData, step: 3 });
      }
    } else {
      // Form submitted
      console.log(formData);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setFormData({ ...formData, step: step - 1 });
    }
  };

  return (
    <div className="container mx-auto">
      {step === 1 && (
        <form onSubmit={handleNextStep}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="username"
              required
              onChange={(e) => setFormData({ ...formData, username: e.target.value })} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </div>
          <button type="submit" disabled={errorMessages.username || errorMessages.email}>
            Next
          </button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleNextStep}>
          <div>
            <label htmlFor="age">Age</label>
            <input
              id="age"
              type="number"
              name="age"
              required
              onChange={(e) => setFormData({ ...formData, age: e.target.value })} />
          </div>
          <button type="submit" disabled={errorMessages.age}>
            Next
          </button>
        </form>
      )}
      {step === 3 && (
        <form onSubmit={handleNextStep}>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              required
              onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default RegistrationForm;