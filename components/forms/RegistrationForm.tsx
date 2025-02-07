import { useState } from 'react';
import {
  AppShell,
  Box,
  Button,
  Card,
  Container,
  Flex,
  Input,
  Label,
  Link,
  Pressable,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useAuth } from '@auth0/auth0-react';

const RegistrationForm: React.FC = () => {
  const { loginWithRedirect, logout } = useAuth();
  const [steps, setSteps] = useState(0);
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNextStep = () => {
    if (steps < 2) {
      setSteps(steps + 1);
    }
  };

  const handlePreviousStep = () => {
    if (steps > 0) {
      setSteps(steps - 1);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate server-side form submission
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      setIsSubmitting(false);
    } catch (error) {
      console.error(error);
      setIsSubmitting(false);
    }
  };

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  return (
    <AppShell>
      <Container maxW="container.lg">
        <Box mb="24">
          <Text fontWeight="bold" fontSize="3xl">
            Multi-Step Registration Form
          </Text>
        </Box>

        {steps === 0 && (
          <>
            <Card w="full" shadow="md" padding={8} rounded="lg">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                onChange={handleFieldChange}
                placeholder="Enter your first name"
                required
              />
            </Card>

            <Button
              onClick={handleNextStep}
              colorScheme="blue"
              mt="12"
              isLoading={isSubmitting}
            >
              Next
            </Button>
          </>
        )}

        {steps === 1 && (
          <>
            <Card w="full" shadow="md" padding={8} rounded="lg">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                onChange={handleFieldChange}
                placeholder="Enter your last name"
                required
              />
            </Card>

            <Button
              onClick={handleNextStep}
              colorScheme="blue"
              mt="12"
              isLoading={isSubmitting}
            >
              Next
            </Button>
          </>
        )}

        {steps === 2 && (
          <>
            <Card w="full" shadow="md" padding={8} rounded="lg">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                onChange={handleFieldChange}
                placeholder="Enter your email address"
                required
              />
            </Card>

            <Button
              onClick={handleSubmit}
              colorScheme="blue"
              mt="12"
              isLoading={isSubmitting}
            >
              Register
            </Button>
          </>
        )}

        {steps === 3 && (
          <>
            <Text fontWeight="bold" fontSize="3xl">
              Success!
            </Text>
            <Pressable onPress={() => logout()}>
              Log Out
            </Pressable>
          </>
        )}
      </Container>
    </AppShell>
  );
};

export default RegistrationForm;