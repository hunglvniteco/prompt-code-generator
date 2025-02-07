import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './RegisterForm.module.css';

const RegisterForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ step: 1 });
  const [loading, setLoading] = useState(false);

  const handleStepSubmit = async (step) => {
    setLoading(true);
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      router.push(`/profile/${step}`);
    } catch (error) {
      console.error('Registration failed:', error);
    }
    setLoading(false);
  };

  const handleFormSubmit = async () => {
    if (!formData.username || !formData.password) return;

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Registration successful!');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const handleNextStep = () => {
    setFormData({ step: formData.step + 1 });
  };

  const handlePreviousStep = () => {
    if (formData.step > 1) setFormData({ step: formData.step - 1 });
  };

  return (
    <div className={styles.container}>
      {loading && <p>Loading...</p>}
      {formData.step === 1 && (
        <form onSubmit={handleFormSubmit} className={styles.form}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className={styles.input}
          />
          <button className={styles.button}>Next</button>
        </form>
      )}
      {formData.step === 2 && (
        <form onSubmit={handleFormSubmit} className={styles.form}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.input}
          />
          <button className={styles.button}>Next</button>
        </form>
      )}
      {formData.step === 3 && (
        <div className={styles.progressContainer}>
          <div
            className={`${styles.progress} ${styles.success}`}
            style={{ width: `${(formData.step + 1) / 3 * 100}%` }}
          />
        </div>
        <form onSubmit={handleFormSubmit} className={styles.form}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className={styles.input}
          />
          <button className={styles.button}>Finish</button>
        </form>
      )}
    </div>
  );
};

export default RegisterForm;