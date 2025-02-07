import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSWR } from 'swr';

const RegistrationForm = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const { data, error, isLoading } = useSWR(
    `/api/registration?step=${currentStep}`,
    {
      initialData: null,
      revalidateOnMount: true,
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await fetch(`/api/registration`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      router.push('/success');
    } catch (error) {
      console.error('Error submitting registration:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold text-white mb-8">Registration Form</h1>
      <form onSubmit={handleSubmit}>
        {data ? (
          <>
            <div className="mb-4">
              <label htmlFor="firstName" className="block mb-2 text-gray-700 text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                className={`w-full py-2 px-4 border rounded-md focus:border-blue-500 focus:outline-none ${
                  formData.firstName === '' ? 'border-red-500' : ''
                }`}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block mb-2 text-gray-700 text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                className={`w-full py-2 px-4 border rounded-md focus:border-blue-500 focus:outline-none ${
                  formData.lastName === '' ? 'border-red-500' : ''
                }`}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-gray-700 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full py-2 px-4 border rounded-md focus:border-blue-500 focus:outline-none ${
                  formData.email === '' ? 'border-red-500' : ''
                }`}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-gray-700 text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className={`w-full py-2 px-4 border rounded-md focus:border-blue-500 focus:outline-none ${
                  formData.password === '' ? 'border-red-500' : ''
                }`}
              />
            </div>
          </>
        ) : (
          <>
            <div className="mb-4">
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-2 px-4 rounded-md bg-blue-500 text-white font-medium ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {currentStep === 1 ? 'Next' : 'Previous'}
              </button>
            </div>
          </>
        )}
      </form>

      <div className="mt-8">
        {data && (
          <>
            <div className="mb-4">
              <p className="text-gray-700 text-sm font-medium">Step {currentStep}</p>
            </div>
            <div className="progress-bar bg-blue-500 rounded-full w-full mb-8">
              <span className={`flex justify-center items-center w-full px-4 py-2 text-white text-lg font-bold ${
                isLoading ? 'opacity-50' : ''
              }`}>{currentStep}</span>
            </div>
          </>
        )}
      </div>

      {data && (
        <>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 rounded-md bg-green-500 text-white font-medium ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
};

export default RegistrationForm;