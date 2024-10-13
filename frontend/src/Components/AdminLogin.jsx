// AdminLogin.jsx
import { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Heading } from "@chakra-ui/react";
import { useLoginMutation } from '../Redux/Service/adminService';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [login, { isLoading, isSuccess, isError, error }] = useLoginMutation();
  const [token, setToken] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(credentials).unwrap(); // Unwrap to access the result or error
      setToken(response.token); // Save the token if the login is successful
      console.log('Login successful, token:', response.token);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <Box maxWidth="400px" mx="auto" mt="100px" p={6} bg="white" borderRadius="md" boxShadow="md">
      <Heading as="h2" size="lg" mb={6} textAlign="center">Admin Login</Heading>

      {isError && <Box color="red" mb={4}>{error.data?.message || "Login failed"}</Box>}
      {isSuccess && <Box color="green" mb={4}>Login successful! Token: {token}</Box>}

      <form onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" width="full" isLoading={isLoading}>
          Login
        </Button>
      </form>
    </Box>
  );
};

export default AdminLogin;
