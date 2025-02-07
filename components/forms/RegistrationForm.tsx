import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Card from '@/components/Card';
import ProgressBar from '@/components/ProgressBar';

const RegistrationForm = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePreviousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      alert('Registration successful!');
      setIsLoading(false);
    } catch (error) {
      console.error('Registration failed:', error);
      setIsLoading(false);
    }
  };

  const handleFieldChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-xl font-bold mb-8">Registration</h1>
      {step === 1 && (
        <Card className="bg-white rounded shadow-lg p-6">
          <form onSubmit={handleSubmit}>
            <Input
              name="name"
              label="Name"
              type="text"
              value={formValues.name || ''}
              onChange={handleFieldChange}
              required
            />
            <Input
              name="email"
              label="Email"
              type="email"
              value={formValues.email || ''}
              onChange={handleFieldChange}
              required
            />
            <Button className="mt-4" onClick={handleNextStep}>
              Next Step
            </Button>
          </form>
        </Card>
      )}
      {step === 2 && (
        <Card className="bg-white rounded shadow-lg p-6">
          {/* Add more form fields */}
          <Button className="mt-4">Previous Step</Button>
          <Button className="mt-4" onClick={handleNextStep}>
            Next Step
          </Button>
        </Card>
      )}
      {step === 3 && (
        <Card className="bg-white rounded shadow-lg p-6">
          {/* Add more form fields */}
          <Button className="mt-4">Previous Step</Button>
          <Button className="mt-4 bg-blue-500 text-white" onClick={handleSubmit}>
            Register
          </Button>
        </Card>
      )}
      {isLoading && (
        <div className="my-8 flex justify-center items-center">
          <svg className="animate-spin text-xl text-gray-600" viewBox="0 0 24 24">
            <path d="M12 2L3 17v-5c0 .89.199 1.78 4.14 1.78h1.2c.89 0 1.78-.199 1.78-1.78V7h11z" />
            <path d="M3 17l9.25-5H12z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;