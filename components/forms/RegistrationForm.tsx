import React, { useState } from 'react';
import cx from 'classnames';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    step: 1,
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simulate API call
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setFormData({ ...formData, step: 2 });
      alert('Registration successful!');
    } else {
      console.error('Registration failed:', response.statusText);
      alert('Please try again later.');
    }
  };

  const renderStep = () => {
    switch (formData.step) {
      case 1:
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              {getError('firstName')}
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
              {getError('lastName')}
            </div>
            <button type="submit">Next</button>
          </form>
        );
      case 2:
        return (
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              {getError('email')}
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              {getError('password')}
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              {getError('confirmPassword')}
            </div>
            <button type="submit">Submit</button>
          </form>
        );
      default:
        return 'Loading...';
    }
  };

  const getError = (field) => {
    if (!formData[field]) return '';
    return formData[field].error || '';
  };

  return (
    <div className={cx('container', { 'md:grid md:grid-cols-2': !isMobile })}>
      <div className="md:hidden">
        <h1>Registration</h1>
      </div>
      <div className="flex flex-col space-y-8 mt-8 md:flex-row justify-center items-center">
        <div className="w-full max-w-md bg-white shadow-lg rounded-md p-6 md:p-8">
          {renderStep()}
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;