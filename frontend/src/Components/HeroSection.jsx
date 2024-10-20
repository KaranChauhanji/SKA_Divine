// import {Heading, SimpleGrid } from "@chakra-ui/react"

// const HeroSection = () => {

//   return (
//     <div>
//       {/* Hero Section */}
//       <SimpleGrid
//         bg="black"
//         color="#0B1523"
//         justifyContent="center"
//         spacing={'.625rem'}
//         alignItems={"end"}
//         bgImage={"url('/public/images/banner-2.jpg')"}
//         bgSize={"cover"}
//         h={["20vh", "20vh", "70vh", "92vh"]}
//         // opacity={0.9}
//       >
//         <Heading bgColor={"white"} p={"10px"} borderRadius={"5px 5px 0 0"}>SKA Divine</Heading>
//       </SimpleGrid>
//     </div>

//   )
// };

// export default HeroSection;

"use client";

import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "url(https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Text
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor
          </Text>
          <Stack direction={"row"}>
            <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
            >
              Contact Us
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default HeroSection;
