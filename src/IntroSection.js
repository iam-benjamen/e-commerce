import { Box, VStack, Heading, Text, Button, Image } from "@chakra-ui/react";
import herobg from "./asset/herobg.jpeg";
import herobgs from "./asset/herobg2.jpeg";

const IntroSection = () => {
    return ( 
        <Box display="flex" flexDirection="row" gap= {{md:"5rem",lg:"8rem"}}  px={{base:"3rem", md:"5rem",lg:"7rem"}} mt="5rem" mb="10rem" fontFamily="cursive">
            <VStack alignItems="flex-start" alignSelf="center">
                <Heading lineHeight={{base:"3rem", md:"3rem", lg:"3rem"}} wordBreak="break-word" fontSize="3rem">
                    Design Your <br/> Comfort Zone
                </Heading>
                <Text maxWidth="34rem" lineHeight="9" fontSize="1.25rem">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
                </Text>
                <Button bgColor="#ab7a5f"><Text color="white" fontSize="0.8rem">SHOP NOW</Text></Button>
            </VStack>
            <Box display={{base:"none", md:"none", lg:"block"}} pl="5rem">
                <Box position="relative">
                    <Image src={herobg} boxSize="md" borderRadius="5px"/>
                    <Box position="absolute" transform="translateX(-50%)" bottom="0"><Image src={herobgs} w="15rem" height="auto" borderRadius="5px"/></Box>
                </Box>
            </Box>
        </Box>
    );
}
 
export default IntroSection;