import { Flex, Heading, Link } from '@chakra-ui/react'
import { useRef } from 'react';


const Header = () => {
    const propertyRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
         <Flex as="nav" p={4} justify="space-between" align="center" bg="#0B1523">
        <Heading size="md">Property Dealing</Heading>
        <Flex gap={4}>
          <Link href="#home">Home</Link>
          <Link onClick={() => scrollToSection(propertyRef)}>Property</Link>
          <Link onClick={() => scrollToSection(contactRef)}>Contact Us</Link>
        </Flex>
      </Flex>
    </div>
  )
}

export default Header