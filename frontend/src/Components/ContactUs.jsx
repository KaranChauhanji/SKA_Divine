import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, SimpleGrid, Text, Textarea } from "@chakra-ui/react"
import { useSendDetailsMutation } from '../Redux/Service/contactService';
import { useState } from "react";

const InputBox = ({ label, type, placeholder, value, onChange, name }) => {

  return (
    <FormControl mb={4}>
      <FormLabel mb={"5px"}>{label}</FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        bg="white"
        p={"10px"}
        border={"1px solid rgba(0,0,0,0.4)"}
        borderRadius={"5px"}
        w={'100%'}
      />
    </FormControl>
  );
};

const ContactUs = () => {

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
    <Box>
      <SimpleGrid
        my={"30px"}
        justifyContent="center"
        h={"100vh"}
        px={"60px"}
      >


        <SimpleGrid gridTemplateColumns={["1fr","1fr","1fr","1fr 1fr"]} spacing={"20px"} alignItems={"center"} padding={"40px"}>

          <SimpleGrid textAlign={"center"} spacing={"20px"}>
            <Text fontWeight={700} fontSize={"30px"} lineHeight={"36px"}>Get In Touch</Text>
            <Text fontWeight={300} fontSize={"18px"} lineHeight={"28px"}>Discover your perfect home—get in touch with us and make your property dreams a reality.</Text>

            <Box border={"1px solid black"} p={"10px"}>
              <Text fontWeight={700} fontSize={"18px"} lineHeight={"28px"}>Address</Text>
              <Text fontWeight={400} fontSize={"16px"} lineHeight={"24px"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at dolores consectetur accusamus iste reiciendis ea enim, porro vitae perferendis alias sequi ex nostrum</Text>
            </Box>

            <Box border={"1px solid black"} p={"10px"}>
              <Text fontWeight={700} fontSize={"18px"} lineHeight={"28px"}>Mobile:-</Text>
              <Text fontWeight={400} fontSize={"16px"} lineHeight={"24px"}>12345678901</Text>
            </Box>

            <Box border={"1px solid black"} p={"10px"}>
              <Text fontWeight={700} fontSize={"18px"} lineHeight={"28px"}>Email:-</Text>
              <Text fontWeight={400} fontSize={"16px"} lineHeight={"24px"}>info@example.com</Text>
            </Box>
          </SimpleGrid>

          <SimpleGrid>
            <form onSubmit={handleSubmit} style={{
              display: "flex", flexDirection: "column",
              width: "80%",
              margin: "auto",
              padding: "50px",
              boxShadow: "rgba(99, 99, 99, 0.4) 0px 2px 8px 0px",
              borderRadius: "5px"
            }}>
              <Heading
                fontSize={"34px"}
                textAlign="center"
                mb={"20px"}
              >
                Contact Us
              </Heading>

              <Flex justifyContent={"space-between"}>

                <FormControl isRequired>
                  <InputBox
                    type="text"
                    placeholder="Your Name"
                    value={formData.username}
                    onChange={handleChange}
                    name="username" label={"Name"} />
                </FormControl>

                <FormControl isRequired>
                  <InputBox type="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    name="email" label={"Email"} />
                </FormControl>

              </Flex>


              <Flex justifyContent={"space-between"}>

                <FormControl>
                  <InputBox type="text"
                    placeholder="Enter Your Mobile Number"
                    value={formData.phone}
                    onChange={handleChange}
                    name="phone" label={"Phone"} />
                </FormControl>

                <FormControl>
                  <InputBox type="text"
                    placeholder="Enter Your Address"
                    value={formData.address}
                    onChange={handleChange}
                    name="address" label={"Address"} />
                </FormControl>
              </Flex>

              <FormControl mt="4">
                <FormLabel>Message</FormLabel>
                <Textarea value={formData.message}
                  onChange={handleChange}
                  name="message"
                  bg="white"
                  width={'100%'}
                  p={"10px"}
                  border={"1px solid rgba(0,0,0,0.4)"}
                  borderRadius={"5px"}
                  mb={4} />
              </FormControl>

              <Button
                type="submit"
                _hover={{ bg: 'black', }}
                padding={'10px'}
                transition={"all .5s"}
                bgColor={"#00254B"}
                color={"white"}
                border={"1px solid rgba(0,0,0,0.4)"}
                borderRadius={"5px"}
                mt={"5px"}
                cursor={"pointer"}
              >
                Submit
              </Button>
            </form>
          </SimpleGrid>

        </SimpleGrid>

      </SimpleGrid>
    </Box>
  )
}

export default ContactUs