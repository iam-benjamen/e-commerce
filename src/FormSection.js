import { Box, InputGroup,InputRightElement, Button, Input, Heading, Text } from "@chakra-ui/react";

const FormSection = () => {
    return (
        <Box display="flex" px="3rem" pb="20rem" flexDirection={["column", "column", "row"]} gap="2rem">
            <Box display= "flex" flexDirection="column" gap="2rem">
                <Heading color="#102A42">Join our newsletter and get 20% off</Heading>
                <Text color="#617D98" maxWidth="35rem" lineHeight="2" fontSize="1rem">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?
                </Text>
            </Box>
            <InputGroup width={["100%","100%","50%"]} alignSelf="flex-end" outline = "2px solid #222">
                <Input placeholder="Enter Email" _placeholder={{fontSize:"1rem"}} focusBorderColor="transparent"/>
                <InputRightElement width="max-content">
                    <Button bgColor="#ab7a5f" borderRadius="0">
                        Subscribe
                    </Button>
                </InputRightElement>
            </InputGroup>
        </Box>
    );
}
 
export default FormSection;