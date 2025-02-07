// src/components/RegistrationForm.tsx

import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

const RegistrationForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);

  const { register, handleSubmit } = useForm();

  const handleNextStep = () => {
    if (step === 4) {
      return router.push('/register-success');
    }
    setStep(step + 1);
  };

  const handleBackStep = () => {
    setStep(step - 1);
  };

  const validateForm = (data: any) => {
    if (!data.firstName || !data.lastName || !data.email || !data.password) {
      setFormError('Please fill in all fields.');
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      setFormError('Invalid email address.');
      return false;
    }
    // Add more validation rules as needed
    return true;
  };

  const handleSubmitForm = async (data: any) => {
    setIsSubmitting(true);
    if (!validateForm(data)) {
      setIsSubmitting(false);
      return;
    }
    // Simulate API call for registration
    try {
      await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      });
      setFormError('');
      handleNextStep();
    } catch (error) {
      console.error('Registration failed:', error);
      setFormError('There was an error registering. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Register</h2>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        {step === 1 && (
          <div className="w-full max-w-md p-6 rounded-md shadow-md bg-white dark:bg-gray-900">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Step 1</h3>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-sm font-medium leading-none text-gray-700 dark:text-gray-200">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="bg-white border border-gray-400 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500"
                {...register('firstName', { required: true })}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-sm font-medium leading-none text-gray-700 dark:text-gray-200">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="bg-white border border-gray-400 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500"
                {...register('lastName', { required: true })}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white font-bold rounded-md px-6 py-2 hover:bg-blue-600 focus:outline-none focus:border-blue-700 transition duration-300 ease-in-out"
            >
              Next
            </button>
          </div>
        )}
        {step === 2 && (
          <div className="w-full max-w-md p-6 rounded-md shadow-md bg-white dark:bg-gray-900">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Step 2</h3>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium leading-none text-gray-700 dark:text-gray-200">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="bg-white border border-gray-400 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500"
                {...register('email', { required: true })}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white font-bold rounded-md px-6 py-2 hover:bg-blue-600 focus:outline-none focus:border-blue-700 transition duration-300 ease-in-out"
            >
              Next
            </button>
          </div>
        )}
        {step === 3 && (
          <div className="w-full max-w-md p-6 rounded-md shadow-md bg-white dark:bg-gray-900">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Step 3</h3>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium leading-none text-gray-700 dark:text-gray-200">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="bg-white border border-gray-400 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500"
                {...register('password', { required: true })}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-500 text-white font-bold rounded-md px-6 py-2 hover:bg-blue-600 focus:outline-none focus:border-blue-700 transition duration-300 ease-in-out"
            >
              Next
            </button>
          </div>
        )}
        {step === 4 && (
          <div className="w-full max-w-md p-6 rounded-md shadow-md bg-white dark:bg-gray-900">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Step 4</h3>
            <div className="mb-4">
              <p>Form submitted successfully!</p>
            </div>
          </div>
        )}
        {formError && (
          <div className="bg-red-500 text-white font-bold rounded-md px-6 py-2 mt-2">
            {formError}
          </div>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;