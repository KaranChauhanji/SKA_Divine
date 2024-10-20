import { Box, Flex, Link, Text } from '@chakra-ui/react'

const Header = () => {
  return (
    <Box px={"20px"} bg="#0B1523">
         <Flex as="nav" p={'10px'} justify="space-between" alignItems="center" >
        <Text color={'white'}  fontSize={"24px"}>SKA Divine
          <Text fontSize={"10px"} fontWeight={300} textAlign={'right'}> Elevating Living</Text>
        </Text>
        <Flex gap={'15px'} color={"white"} cursor={'pointer'} >
          <Link _hover={{color:"#2D6095"}} transition={"all .5s"}>Home</Link>
          <Link _hover={{color:"#2D6095"}} transition={"all .5s"}>Property</Link>
          <Link _hover={{color:"#2D6095"}} transition={"all .5s"}>Contact Us</Link>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Header