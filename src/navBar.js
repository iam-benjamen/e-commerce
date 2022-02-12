import { HStack, Box, Text, Image, Link, Circle} from "@chakra-ui/react";
import mainlogo from "./asset/mainlogo.svg";
import carticon from "./asset/carticon.svg";
import logicon from "./asset/logicon.svg";
import triplebar from "./asset/triplebar.svg";
import { useState } from "react";

const navBar = () => {
    const [ordernum] = useState(0);

    return (
        <HStack justifyContent="space-between" px={{base:"2rem", md:"3rem", lg:"4rem"}} fontFamily="consolas">
            <Box><Image src={mainlogo} alt="main logo" width="15rem"/></Box>
            <Box><Image src={triplebar} alt="triple bar" display={{ base: "block", md:"block", lg:"none"}} boxSize="1.7rem"/></Box>
            <HStack spacing="7" pt="4" fontSize="larger" display={{base:"none", md:"none", lg:"flex"}}>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Products</a>
            </HStack>
            <HStack gap="4" display={{base:"none", md:"none", lg:"flex"}}>
                <Link bgColor="transparent" gap="2" display="flex">
                    <Text fontSize="2xl">Cart</Text>
                    <Box pt="1" position="relative">
                        <Image src={carticon} alt="cart icon" boxSize="1.5rem" />
                        <Circle size="25px" color="white" bgColor="#ab7a5f" position="absolute" bottom="4" left="3">{ordernum}</Circle>
                    </Box>
                </Link>
                
                <Link bgColor="transparent" display="flex" gap="2">
                    <Text fontSize="2xl">Login</Text>
                    <Box pt="1"><Image src={logicon} alt="cart icon" boxSize="1.5rem"/></Box>
                </Link>
            </HStack>
        
        </HStack>
    );
}

export default navBar;