import React, { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { AiOutlineArrowRight } from 'react-icons/ai';

const RegistrationForm = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleNextStep = (e) => {
    e.preventDefault();
    // Logic to move to the next step
    if (formStep === 1) {
      // Validate name field
      if (!formData.name.trim()) {
        alert('Name is required.');
        return;
      }
      setFormData(prevData => ({ ...prevData, name: formData.name }));
      setFormStep(2);
    } else if (formStep === 2) {
      // Validate email field
      if (!formData.email.trim() || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,}$/.test(formData.email)) {
        alert('Invalid email address.');
        return;
      }
      setFormData(prevData => ({ ...prevData, email: formData.email }));
      setFormStep(3);
    } else if (formStep === 3) {
      // Validate password field
      if (!formData.password.trim() || formData.password.length < 8) {
        alert('Password must be at least 8 characters.');
        return;
      }
      setFormData(prevData => ({ ...prevData, password: formData.password }));
    }
  };

  const handlePrevStep = () => {
    // Logic to move to the previous step
    if (formStep > 1) {
      setFormStep(formStep - 1);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // Logic to submit the form
    alert('Registration successful!');
    // Persist data or send a POST request here
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Registration Form</h2>
      {formStep === 1 && (
        <form onSubmit={handleNextStep} className="space-y-6 w-full max-w-md p-8 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-800 dark:text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData(prevData => ({ ...prevData, name: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className={clsx('w-full px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600', formStep !== 1 && 'opacity-75')}
          >
            Next
          </button>
        </form>
      )}
      {formStep === 2 && (
        <form onSubmit={handleNextStep} className="space-y-6 w-full max-w-md p-8 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-800 dark:text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData(prevData => ({ ...prevData, email: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className={clsx('w-full px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600', formStep !== 2 && 'opacity-75')}
          >
            Next
          </button>
        </form>
      )}
      {formStep === 3 && (
        <form onSubmit={handleNextStep} className="space-y-6 w-full max-w-md p-8 bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-800 dark:text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) => setFormData(prevData => ({ ...prevData, password: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 dark:bg-gray-800 dark:text-white dark:focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className={clsx('w-full px-4 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-600', formStep !== 3 && 'opacity-75')}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default RegistrationForm;