import styles from './registrationForm.module.css';

const RegistrationForm = () => {
  const [step, setStep] = React.useState(1);
  const [formData, setFormData] = React.useState({});

  const handleNextStep = (data) => {
    setFormData(data);
    if (step < 3) {
      setStep(step + 1);
    }