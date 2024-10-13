import { Heading, Text, VStack } from "@chakra-ui/react"
import { useRef } from "react";

const Property = () => {
    const propertyRef = useRef(null);

  return (
    <div>
         {/* Property Section */}
      <VStack p={10} ref={propertyRef} align="center">
        <Heading as="h2" size="xl" mb={6}>Our Properties</Heading>
        <Text color="#C6DDB2">Discover the best properties available for you.</Text>
        {/* Property list will be here */}
      </VStack>
    </div>
  )
}

export default Property 