import React from 'react';
import { useState } from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

const RegistrationForm = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState({});

  const schema = Yup.object().shape({
    username: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
  });

  const handleSubmit = async (data) => {
    try {
      await schema.validate(data);
      setStep(step + 1);
    } catch (error) {
      console.error('Validation error:', error.message);
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleNext = () => {
    handleSubmit(formState);
  };

  const fields = [
    { id: 'username', name: 'username', label: 'Username' },
    { id: 'email', name: 'email', label: 'Email' },
    { id: 'password', name: 'password', label: 'Password' },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden sm:max-w-xl mx-auto px-4 py-6">
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} className="mb-8">
            <label
              htmlFor={field.id}
              className="block text-gray-700 dark:text-gray-200 font-medium"
            >
              {field.label}
              {(step === 1 || step === 2) && field.required && (
                <span className="text-red-500">*</span>
              )}
            </label>
            <div className="mt-1">
              <input
                id={field.id}
                name={field.name}
                type="text"
                autoComplete="off"
                required
                className={clsx(
                  'w-full px-4 py-2 border rounded-lg shadow-md focus:outline-none',
                  step === 1 && !formState[field.id] ? 'border-red-500' : '',
                  step === 2 && !formState[field.id] ? 'border-yellow-300' : ''
                )}
              />
            </div>
            {step > 1 && field.error && (
              <span className="text-red-500 mt-2">{field.error}</span>
            )}
          </div>
        ))}
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={step === 1}
            className="px-4 py-2 border rounded-lg shadow-md focus:outline-none bg-gray-500 text-white dark:bg-blue-600 dark:text-white disabled:bg-gray-300 disabled:text-gray-700"
          >
            Previous
          </button>
          <button
            type="submit"
            className="px-4 py-2 border rounded-lg shadow-md focus:outline-none bg-primary text-white dark:bg-blue-600 dark:text-white"
          >
            Next
          </button>
        </div>
      </form>

      {step === 3 && (
        <div className="mt-8">
          <h1 className="text-gray-700 dark:text-gray-200 font-medium text-center">Success!</h1>
          <p className="text-gray-700 dark:text-gray-200 text-center">Your account has been created successfully.</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;