import {Box, Text, HStack} from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box display="flex" 
            flexDirection={{base:"column", md:"row", lg:"row"}} 
            justifyContent="center" bgColor="#222222" gap="2" 
            height="5rem" alignItems="center"
            position="fixed"
            bottom="0"
            width="100%"
        >
            <HStack>
                <Text color="white">
                    &copy; 2022 
                </Text>
                <Text color="#ab7a5f">ComfySloth</Text>
            </HStack>
            <Text color="white">All right reserved</Text>
        </Box>
    )
}
 
export default Footer;
