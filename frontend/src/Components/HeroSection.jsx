import {Heading, SimpleGrid } from "@chakra-ui/react"


const HeroSection = () => {
  
  return (
    <div>
      {/* Hero Section */}
      <SimpleGrid
        bg="black"
        color="#0B1523"
        justifyContent="center"
        spacing={'.625rem'}
        alignItems={"end"}
        bgImage={"url('/public/images/banner-2.jpg')"}
        bgSize={"cover"}
        h={["20vh", "20vh", "70vh", "92vh"]}
        // opacity={0.9}
      >
        <Heading bgColor={"white"} p={"10px"} borderRadius={"5px 5px 0 0"}>SKA Divine</Heading>
      </SimpleGrid>
    </div>

  )
};

export default HeroSection;
