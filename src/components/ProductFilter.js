import { Box, Spinner } from "@chakra-ui/react";
import useFetch from "../useFetch";
import Productie from "./Productie";

const ProductFilter = () => {
  const { isPending, error, data } = useFetch(
    "https://fakestoreapi.com/products"
  );

  return (
    <Box>
      {error && (
        <Box fontSize="2xl" mt={["5rem", "5rem", "10%"]} textAlign="center">
          There was an error!
          <br /> Please check your connection:(
        </Box>
      )}
      {isPending && <Spinner size="xl" my="10rem" mx="40%" />}
      {data && <Productie products={data} />}
    </Box>
  );
};

export default ProductFilter;
