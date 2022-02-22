import { Box, Heading, Button, Spinner} from "@chakra-ui/react";
import useFetch from "../useFetch";
import SampleProduct from "./SampleProduct";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  const { isPending, error, data } = useFetch(
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
        <Heading color="#102A42" fontSize={["2rem","2rem","2.5rem"]} lineHeight="1">
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
        {error && <Box fontSize="2xl" my="10rem">Could not fetch products! <br/>Please check your connection :(</Box>}
        {isPending && <Spinner size="xl" my="10rem"/>}
        {data && <div><SampleProduct items = {data}/></div>}
      </Box>
      <Button as={Link} to="/products" bgColor="#ab7a5f" color="white">Load more</Button>
    </Box>
  );
};

export default FeaturedProducts;
