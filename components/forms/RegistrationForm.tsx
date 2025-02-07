import React, { useState } from 'react';
import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [activeStep, setActiveStep] = useState(1);

  const handleInputChange = (e) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  const handleNextStep = () => {
    if (form.name && form.email && form.password) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevStep = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className={styles.registrationForm}>
      <h2>Register</h2>
      {activeStep === 1 && (
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleInputChange}
            />
            {form.name && form.email && form.password ? (
              <p className={styles.successMessage}>Form submitted successfully!</p>
            ) : null}
          </div>
          <button type="submit" disabled={!form.name || !form.email || !form.password}>
            Next
          </button>
        </form>
      )}
      {activeStep === 2 && (
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
            />
            {form.name && form.email && form.password ? (
              <p className={styles.successMessage}>Form submitted successfully!</p>
            ) : null}
          </div>
          <button type="submit" disabled={!form.name || !form.email || !form.password}>
            Next
          </button>
        </form>
      )}
      {activeStep === 3 && (
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleInputChange}
            />
            {form.name && form.email && form.password ? (
              <p className={styles.successMessage}>Form submitted successfully!</p>
            ) : null}
          </div>
          <button type="submit" disabled={!form.name || !form.email || !form.password}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;