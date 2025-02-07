import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import { useSWRClient } from 'swr';
import { FieldValues, useForm } from '@hookform/react-hook-form';

const RegistrationForm: React.FC = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<FieldValues>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const submitForm = async () => {
    setLoading(true);

    try {
      await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      toast.success('Registration successful!');
      router.push('/');
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleNextStep = () => setStep(step + 1);
  const handleBackStep = () => setStep(step - 1);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Progress Bar */}
      <div className="bg-gray-300 h-4 rounded-full my-4 w-80 mx-auto">
        {step === 1 && (
          <div className="w-full bg-green-700 rounded-md h-4" style={{ width: '50%' }} />
        )}
        {step === 2 && (
          <div className="w-full bg-green-700 rounded-md h-4" style={{ width: '100%' }} />
        )}
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit(submitForm)}>
        {step === 1 && (
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              className="border border-gray-300 rounded-md px-4 py-2 mt-2"
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              className="border border-gray-300 rounded-md px-4 py-2 mt-2"
            />
          </div>
        )}

        {step === 2 && (
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="border border-gray-300 rounded-md px-4 py-2 mt-2"
            />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="border border-gray-300 rounded-md px-4 py-2 mt-2"
            />
          </div>
        )}

        {/* Actions */}
        {step === 1 && (
          <button type="submit" disabled={loading} className="bg-green-700 text-white p-2 rounded-md mt-2">
            Continue
          </button>
        )}
        {step === 2 && (
          <>
            <button type="submit" disabled={loading} className="bg-green-700 text-white p-2 rounded-md mt-2">
              Register
            </button>
            <button onClick={handleBackStep} className="bg-gray-300 text-black p-2 rounded-md mt-2 mr-4">
              Back
            </button>
          </>
        )}
      </form>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center my-8">
          <div className="w-full bg-gray-300 h-16 rounded-full animate-pulse"></div>
        </div>
      )}

      {/* Success/Error States */}
      {data.success && (
        <div className="flex items-center justify-center my-8">
          <p className="text-green-700">Registration successful!</p>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;