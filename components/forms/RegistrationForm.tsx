import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ step: 1 });
  const router = useRouter();

  const handleNext = async (data) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log('Form submitted:', data);
    // Update form state and proceed to the next step or redirect
    setFormData({ ...formData, step: 2 });
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <motion.section className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-700">Registration Form</h2>
        {step === 1 && (
          <form onSubmit={handleNext}>
            <div>
              <label htmlFor="name" className="block mb-2 text-gray-600 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-2 border rounded-lg shadow-md focus:border-blue-500 focus:bg-gray-100 ${error?.message ? 'border-red-500' : ''}`}
              />
              <span id="name-error" className="block mt-2 text-xs font-medium text-red-500"></span>
            </div>
            {/* Add more fields as needed */}
            <button type="submit" disabled={error?.message} className="mt-6 w-full py-3 bg-blue-500 rounded-lg shadow-md hover:bg-blue-700">
              Next
            </button>
          </form>
        )}
        {step === 2 && (
          <div className="flex flex-col space-y-4">
            {/* Add form fields for the second step */}
            <input
              type="text"
              id="email"
              name="email"
              required
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={`w-full px-4 py-2 border rounded-lg shadow-md focus:border-blue-500 focus:bg-gray-100 ${error?.message ? 'border-red-500' : ''}`}
            />
            <span id="email-error" className="block mt-2 text-xs font-medium text-red-500"></span>
            {/* Add more fields as needed */}
            <button type="submit" disabled={error?.message} className="mt-6 w-full py-3 bg-blue-500 rounded-lg shadow-md hover:bg-blue-700">
              Submit
            </button>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default RegistrationForm;