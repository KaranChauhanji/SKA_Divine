import { Box, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react"

const Property = () => {

  return (
    <div>
         {/* Property Section */}
      <VStack p={10} align="center">
        <Heading as="h2" size="xl" mb={6}>Our Properties</Heading>
        <Text>Discover the best properties available for you.</Text>
      </VStack>
  {/* Grid with 3 images per row */}
  <SimpleGrid columns={{ base: 1, md: 3, lg:3 }} spacing={10}>
          <Box>
            <Image src="\public\images\ska.jpg" alt="Property 1" />
            <Text mt={4}>Property 1</Text>
          </Box>
          <Box>
            <Image src="property2.jpg" alt="Property 2" />
            <Text mt={4}>Property 2</Text>
          </Box>
          <Box>
            <Image src="property3.jpg" alt="Property 3" />
            <Text mt={4}>Property 3</Text>
          </Box>
        </SimpleGrid>,
    </div>
  )
}

export default Property 