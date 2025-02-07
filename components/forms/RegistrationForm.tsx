import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();
  const { data: session, status } = useSession();

  const register = async (e) => {
    e.preventDefault();
    try {
      const result = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (result.ok) {
        router.push('/success');
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      console.error(error);
      setErrors({ global: error.message });
    }
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md px-4 py-6 mt-8 mb-24 lg:px-8 lg:py-10">
      <h2 className="text-center text-xl font-bold">Register</h2>
      {steps.map((step, index) => (
        <div key={index}>
          <h3 className="text-lg font-semibold mt-8 mb-2">{step.title}</h3>
          {step.formFields.map((field, fieldIndex) => {
            const { id, label, type } = field;
            const fieldName = `step-${currentStep}-${fieldIndex}`;
            return (
              <div key={fieldIndex} className="space-y-4">
                <label htmlFor={fieldName} className="block text-gray-700 font-medium">
                  {label}
                  {type === 'input' && (
                    <span
                      id={fieldName + '-error'}
                      aria-invalid={!!errors[fieldName]}
                      className={`text-xs text-red-500 mt-1 ${
                        !!errors[fieldName] ? 'block' : 'hidden'
                      }`}
                    >
                      {errors[fieldName]?.message}
                    </span>
                  )}
                </label>
                <input
                  type={type}
                  id={fieldName}
                  name={fieldName}
                  className="w-full px-4 py-2 rounded-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  {...register(fieldName)}
                />
              </div>
            );
          })}
        </div>
      ))}
      <div className="flex justify-end space-x-4 mt-8">
        {currentStep > 1 && (
          <button
            onClick={handlePrevStep}
            disabled={status !== 'loading'}
            className="bg-blue-500 text-white rounded-lg px-4 py-2 font-semibold hover:bg-blue-600"
          >
            Previous
          </button>
        )}
        {currentStep < steps.length - 1 && (
          <button
            onClick={handleNextStep}
            disabled={status !== 'loading'}
            className="bg-blue-500 text-white rounded-lg px-4 py-2 font-semibold hover:bg-blue-600"
          >
            Next
          </button>
        )}
      </div>
      {currentStep === steps.length && (
        <button
          onClick={register}
          disabled={!Object.values(errors).every((error) => error === undefined)}
          className="bg-blue-500 text-white rounded-lg px-4 py-2 font-semibold hover:bg-blue-600"
        >
          Register
        </button>
      )}
    </div>
  );
};

export default RegistrationForm;