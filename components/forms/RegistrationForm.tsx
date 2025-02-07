import { useState } from 'react';
import Link from 'next/link';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step < 4) {
      setStep(step + 1);
    } else {
      // Form submission logic here
    }
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  const handleFieldChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={handleNextStep}>
      {step === 1 && (
        <>
          <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Step 1</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleFieldChange}
                required
                className="block mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="button"
              onClick={() => handleNextStep()}
              disabled={formData.name === ''}
              className={`${
                formData.name === '' ? 'bg-gray-200' : ''
              } text-sm font-medium text-blue-700 hover:bg-blue-100 focus:outline-none focus:bg-blue-200`}
            >
              Next
            </button>
          </div>
        </>
      )}

      {step === 2 && (
        <>
          <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Step 2</h2>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleFieldChange}
                required
                className="block mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="button"
              onClick={() => handleNextStep()}
              disabled={formData.email === ''}
              className={`${
                formData.email === '' ? 'bg-gray-200' : ''
              } text-sm font-medium text-blue-700 hover:bg-blue-100 focus:outline-none focus:bg-blue-200`}
            >
              Next
            </button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">Step 3</h2>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleFieldChange}
                required
                className="block mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              onClick={() => handleNextStep()}
              disabled={formData.password === ''}
              className={`${
                formData.password === '' ? 'bg-gray-200' : ''
              } text-sm font-medium text-blue-700 hover:bg-blue-100 focus:outline-none focus:bg-blue-200`}
            >
              Submit
            </button>
          </div>
        </>
      )}

      {step === 4 && (
        <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Step 4</h2>
          <p>Your registration was successful!</p>
          <Link href="/" className="mt-4 text-blue-700 hover:text-blue-900">
            Home
          </Link>
        </div>
      )}

      <button
        type="button"
        onClick={handlePreviousStep}
        disabled={step === 1}
        className={`${
          step === 1 ? 'bg-gray-200' : ''
        } text-sm font-medium text-blue-700 hover:bg-blue-100 focus:outline-none focus:bg-blue-200`}
      >
        Previous
      </button>
    </form>
  );
};

export default RegistrationForm;