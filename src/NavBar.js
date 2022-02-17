import {
  HStack,
  Box,
  Text,
  Image,
  Circle,
  Link as ChakraLink,
} from "@chakra-ui/react";
import mainlogo from "./asset/mainlogo.svg";
import carticon from "./asset/carticon.svg";
import logicon from "./asset/logicon.svg";
import triplebar from "./asset/triplebar.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [ordernum] = useState(0);

  return (
    <HStack
      justifyContent="space-between"
      px={{ base: "1rem", md: "2rem", lg: "5rem" }}
      fontFamily="monospace"
    >
      <Box>
        <Image src={mainlogo} alt="main logo" width="15rem" />
      </Box>
      <Box>
        <Image
          src={triplebar}
          alt="triple bar"
          display={{ base: "block", md: "block", lg: "none" }}
          boxSize="1.7rem"
        />
      </Box>
      <HStack
        spacing="7"
        pt="4"
        pr="7rem"
        fontSize="larger"
        display={{ base: "none", md: "none", lg: "flex" }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <a href="#">Products</a>
      </HStack>
      <HStack gap="2" display={{ base: "none", md: "none", lg: "flex" }}>
        <ChakraLink
          as={Link}
          to="#"
          bgColor="transparent"
          display="inline-flex"
        >
          <Text fontSize="2xl">Cart</Text>
          <Box pt="1" position="relative">
            <Image src={carticon} alt="cart icon" boxSize="1.5rem" />
            <Circle
              size="25px"
              color="white"
              bgColor="#ab7a5f"
              position="absolute"
              bottom="4"
              left="3"
            >
              {ordernum}
            </Circle>
          </Box>
        </ChakraLink>

        <ChakraLink as= {Link} bgColor="transparent" display="flex" gap="2">
          <Text fontSize="2xl">Login</Text>
          <Box pt="1">
            <Image src={logicon} alt="cart icon" boxSize="1.5rem" />
          </Box>
        </ChakraLink>
      </HStack>
    </HStack>
  );
};

export default NavBar;
