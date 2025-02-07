import React, { useState } from 'react';
import styles from './MultiStepRegistrationForm.module.css';

function MultiStepRegistrationForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    termsAgreed: false,
  });

  const handleNext = () => {
    // Handle next step logic
    if (step === 1) {
      setFormData((prevData) => ({
        ...prevData,
        name: formData.name.trim(),
      }));
    } else if (step === 2) {
      setFormData((prevData) => ({
        ...prevData,
        email: formData.email.trim(),
      }));
    } else if (step === 3) {
      // Password validation
      if (!formData.password) {
        alert('Please enter a password');
        return;
      }
      // Terms agreement validation
      if (!formData.termsAgreed) {
        alert('You must agree to the terms and conditions');
        return;
      }
      setFormData((prevData) => ({
        ...prevData,
        password: formData.password.trim(),
        termsAgreed: true,
      }));
      setStep(4);
    }
  };

  const handleBack = () => {
    // Handle back step logic
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    alert('Form submitted successfully!');
    // Reset form data or clear state
    setFormData({
      name: '',
      email: '',
      password: '',
      termsAgreed: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10">
      {/* Step 1 */}
      {step === 1 && (
        <div className="mb-5">
          <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-3 py-2 border-gray-400 rounded-lg shadow-sm focus:border-blue-500 focus:outline-none focus:bg-white`}
          />
        </div>
      )}

      {/* Step 2 */}
      {step === 2 && (
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-3 py-2 border-gray-400 rounded-lg shadow-sm focus:border-blue-500 focus:outline-none focus:bg-white`}
          />
        </div>
      )}

      {/* Step 3 */}
      {step === 3 && (
        <div className="mb-5">
          <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className={`w-full px-3 py-2 border-gray-400 rounded-lg shadow-sm focus:border-blue-500 focus:outline-none focus:bg-white`}
          />
        </div>
      )}

      {/* Step 4 */}
      {step === 4 && (
        <div className="mb-5">
          <label htmlFor="termsAgreed" className="block text-gray-700 text-sm font-medium mb-2">
            I agree to the terms and conditions
          </label>
          <input
            type="checkbox"
            id="termsAgreed"
            name="termsAgreed"
            checked={formData.termsAgreed}
            onChange={(e) => setFormData({ ...formData, termsAgreed: e.target.checked })}
            className={`w-full px-3 py-2 border-gray-400 rounded-lg shadow-sm focus:border-blue-500 focus:outline-none focus:bg-white`}
          />
        </div>
      )}

      {/* Progress bar */}
      <div className="mt-10">
        <div className={`${styles.progressBar} ${step === 1 ? 'bg-green-500' : ''}`}>
          {step}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-10">
        {step > 1 && (
          <button onClick={handleBack} type="button" className="px-4 py-2 border bg-gray-300 rounded-lg shadow-sm text-blue-500 hover:bg-blue-400 focus:outline-none focus:bg-white">
            Back
          </button>
        )}
        {step < 4 && (
          <button onClick={handleNext} type="button" className="px-4 py-2 border bg-gray-300 rounded-lg shadow-sm text-green-500 hover:bg-blue-400 focus:outline-none focus:bg-white">
            Next
          </button>
        )}
        {step === 4 && (
          <button onClick={handleSubmit} type="submit" className="px-4 py-2 border bg-green-500 rounded-lg shadow-sm text-white hover:bg-blue-400 focus:outline-none focus:bg-white">
            Submit
          </button>
        )}
      </div>
    </form>
  );
}

export default MultiStepRegistrationForm;