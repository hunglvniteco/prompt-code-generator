import { useState } from 'react';
import classNames from 'classnames';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 1) {
      validateForm('name', 'email');
    } else if (step === 2) {
      validateForm('password');
    }
  };

  const validateForm = async (fieldName, fieldValue) => {
    setFormData({ ...formData, [fieldName]: fieldValue });
    setLoading(true);

    // Simulate API request
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
    } catch (error) {
      console.error('Error validating form:', error);
      return;
    }

    if (step === 1) {
      setFormData({ ...formData, [fieldName]: fieldValue });
    } else if (step === 2) {
      setFormData({ ...formData, [fieldName]: fieldValue });
    }

    setLoading(false);
    setStep(step + 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleNextStep}>
        {step === 1 && (
          <>
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={classNames(
                'block w-full rounded-md border-2 border-gray-300 focus:border-indigo-600 focus:text-gray-900 sm:text-sm p-1.5',
                {'focus-visible:bg-indigo-100': step === 2}
              )}
            />
            <div className="mt-4 text-sm font-medium leading-6 text-red-500" role="alert">
              Invalid name
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className={classNames(
                'block w-full rounded-md border-2 border-gray-300 focus:border-indigo-600 focus:text-gray-900 sm:text-sm p-1.5',
                {'focus-visible:bg-indigo-100': step === 3}
              )}
            />
            <div className="mt-4 text-sm font-medium leading-6 text-red-500" role="alert">
              Invalid email
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className={classNames(
                'block w-full rounded-md border-2 border-gray-300 focus:border-indigo-600 focus:text-gray-900 sm:text-sm p-1.5',
                {'focus-visible:bg-indigo-100': step === 4}
              )}
            />
          </>
        )}

        {step === 4 && (
          <>
            <div className="mt-8 flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className={classNames(
                  'inline-flex items-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus-visible:bg-indigo-900',
                  loading && 'opacity-50 cursor-not-allowed'
                )}
              >
                Submit
              </button>
            </div>
          </>
        )}

        {loading && (
          <div className="mt-8 flex justify-center">
            <div className="inline-block w-full px-6 py-4 bg-gray-700 rounded-lg shadow-lg animate-pulse text-white font-medium">
              Loading...
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;