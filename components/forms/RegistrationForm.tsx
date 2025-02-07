import React, { useState } from 'react';
import clsx from 'clsx';
import styles from './registrationForm.module.css';

const RegistrationForm = () => {
  const [steps, setSteps] = useState(['Step 1', 'Step 2']);
  const [stepIndex, setStepIndex] = useState(0);
  const [formData, setFormData] = useState({ step: '', field1: '', field2: '' });
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert('Form submitted successfully!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {steps.map((step, index) => (
        <form key={index} onSubmit={handleSubmit} className={styles.form}>
          {stepIndex === index && (
            <>
              <h2>{step}</h2>
              <input
                type="text"
                name="field1"
                placeholder="Field 1"
                value={formData[field1]}
                onChange={(e) => setFormData({ ...formData, field1: e.target.value })}
              />
              <input
                type="text"
                name="field2"
                placeholder="Field 2"
                value={formData[field2]}
                onChange={(e) => setFormData({ ...formData, field2: e.target.value })}
              />
            </>
          )}
          {stepIndex === steps.length - 1 && (
            <>
              <button
                type="submit"
                className={clsx(styles.button, loading ? styles.loading : undefined)}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
              <button onClick={handlePrevious}>Back</button>
            </>
          )}
        </form>
      ))}
    </div>
  );
};

export default RegistrationForm;