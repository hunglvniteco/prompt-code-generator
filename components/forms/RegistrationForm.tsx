import { useState } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';

const MultiStepRegistrationForm = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      // Simulate server-side validation
      if (!formData.name || !formData.email || formData.password !== formData.confirmPassword) {
        throw new Error('Validation failed');
      }

      // Simulate form submission
      console.log(formData);
      await router.push('/success');

      // Reset form data on success
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      alert('Error:', error.message);
    }
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800">Register</h1>
      <div className="mt-8 max-w-md w-full p-6 space-y-4 rounded-lg shadow-lg bg-white border border-gray-200">
        {currentStep === 1 && (
          <>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="block w-full pr-12 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none py-2 px-3 sm:text-sm"
              />
              <label htmlFor="name" className="absolute top-2 right-0 text-xs font-medium leading-6 text-gray-900">
                Required
              </label>
            </div>
          </>
        )}
        {currentStep === 2 && (
          <>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="block w-full pr-12 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none py-2 px-3 sm:text-sm"
              />
              <label htmlFor="email" className="absolute top-2 right-0 text-xs font-medium leading-6 text-gray-900">
                Required
              </label>
            </div>
          </>
        )}
        {currentStep === 3 && (
          <>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="block w-full pr-12 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none py-2 px-3 sm:text-sm"
              />
            </div>
          </>
        )}
        {currentStep === 4 && (
          <>
            <label htmlFor="confirmPassword" className="block text-sm font-medium leading-6 text-gray-900">
              Confirm Password
            </label>
            <div className="relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
                className="block w-full pr-12 rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none py-2 px-3 sm:text-sm"
              />
            </div>
          </>
        )}
      </div>
      {currentStep === 4 && (
        <button
          onClick={handleSubmit}
          disabled={!formData.name || !formData.email || formData.password !== formData.confirmPassword}
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-3 rounded-md focus:outline-none focus-visible:border-indigo-700 focus:border-lime-400"
        >
          Register
        </button>
      )}
    </div>
  );
};

export default MultiStepRegistrationForm;