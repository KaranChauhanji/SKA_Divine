import { Box, Button, FormControl, FormLabel, Heading, Input, SimpleGrid, Textarea } from "@chakra-ui/react"
import { useState } from "react";
import { useSendDetailsMutation } from '../Redux/Service/contactService'; // Assuming this is the correct path

const InputBox = ({ label, type, placeholder, value, onChange, name }) => {
  return (
    <FormControl mb={4}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        value={value} // Added the value prop to control the input
        onChange={onChange}
        name={name} // Ensure the name prop is passed correctly
        bg="white"
        p={"10px"}
        border={"1px solid rgba(0,0,0,0.4)"}
        borderRadius={"5px"}
      />
    </FormControl>
  );
};

const HeroSection = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
    address: ""
  });

  const [sendDetails] = useSendDetailsMutation();

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await sendDetails(formData);
      console.log('Form submitted successfully', response);
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <SimpleGrid
        gridTemplateColumns={'2fr 1fr'}
        p={6}
        bg="white"
        color="#0B1523"
        justifyContent="center"
        alignItems="center"
        spacing={'.625rem'}
      >
        <Box>
          <img
            src="https://via.placeholder.com/600x400" // Replace with actual property image
            alt="Property"
            style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
          />
        </Box>

        {/* Contact Form */}
        <Box bg="#F9F9F9" borderRadius="md" boxShadow="xl">
          <Heading as="h3" size="lg" mb={6} color="#0B1523" textAlign={"center"}>Contact Us</Heading>
          <form onSubmit={handleSubmit}>
            <InputBox
              label="Name"
              type="text"
              placeholder="Your Name"
              value={formData.username} // Added value
              onChange={handleChange}
              name="username" // Ensure the correct name prop is passed
            />
            <InputBox
              label="Email"
              type="email"
              placeholder="Enter Your Email"
              value={formData.email} // Added value
              onChange={handleChange}
              name="email" // Ensure the correct name prop is passed
            />
            <InputBox
              label="Phone"
              type="text"
              placeholder="Enter Your Mobile Number"
              value={formData.phone} // Added value
              onChange={handleChange}
              name="phone" // Ensure the correct name prop is passed
            />
            <InputBox
              label="Address"
              type="text"
              placeholder="Enter Your Address"
              value={formData.address} // Added value
              onChange={handleChange}
              name="address" // Ensure the correct name prop is passed
            />
            <Textarea
              placeholder="Your Message"
              value={formData.message} // Added value
              onChange={handleChange}
              name="message"
              bg="white"
              p={"10px"}
              mb={4}
            />
            <Button colorScheme="blue" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default HeroSection;
