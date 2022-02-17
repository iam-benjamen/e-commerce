import { Box, Heading } from "@chakra-ui/react";

const FeaturedProject = () => {
  return (
    <Box
      bgColor="#F1F5F8"
      py="5rem"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
        <Box>
            <Heading color="#102A42" fontSize="2.5rem" lineHeight="1" pb="5rem">
            Featured Products
            </Heading>
            <Box
                width="6rem"
                height="0.25rem"
                bgColor="#ab7a5f"
                marginLeft="auto"
                marginRight="auto"
            ></Box>
        </Box>
    </Box>
  );
};

export default FeaturedProject;
