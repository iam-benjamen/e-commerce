import { Box, Heading, Button } from "@chakra-ui/react";
import useFetch from "./useFetch";
import SampleProduct from "./SampleProduct";

const FeaturedProject = () => {
  const { isLoading, error, data } = useFetch(
    "https://fakestoreapi.com/products?limit=3"
  );
  
  return (
    <Box
      bgColor="gray.100"
      py="5rem"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box>
        <Heading color="#102A42" fontSize="2.5rem" lineHeight="1">
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
      <Box display="flex" gap="1rem">
        {error && <div>{error}</div>}
        {isLoading && <div>Loading...</div>}
        {data && <div><SampleProduct items = {data}/></div>}
      </Box>
      <Button bgColor="#ab7a5f" color="white">Load more</Button>
    </Box>
  );
};

export default FeaturedProject;
