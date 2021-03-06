import { Box, Heading,Button, Spinner } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import ProductFormat from "./ProductFormat";


const ProductDetail = () => {
  const { id } = useParams();
  const { isPending, error, data } = useFetch(
    `https://fakestoreapi.com/products/${id}`
  );

  return (
    <Box>
      <Heading
        bgColor="#eaded7"
        w="100%"
        display="flex"
        minHeight="20vh"
        alignItems="center"
        fontSize={["1rem", "1rem", "1.5rem"]}
        gap={["0.3rem", "0.5rem", "1rem"]}
        pl="5rem"
      >
        <Link to="/" color="#795744" cursor="pointer">
          Home /
        </Link>
        <Link to="/products" color="#795744">
          Products /
        </Link>
        <Box color="#453227">
          {error && "..."}
          {isPending && <Spinner size="sm"/>}
          {data && data.title}
        </Box>
      </Heading>
      <Button
        as={Link}
        to="/products"
        color="#eaded7"
        bgColor="#ab7a5f"
        cursor="pointer"
        mt="5rem"
        ml="5rem"
      >
        Back to Products
      </Button>
      <Box>
        {error && (
          <Box fontSize="2xl" mt={["5rem", "5rem", "10%"]} textAlign="center">
            There was an error!
            <br /> Please check your connection:(
          </Box>
        )} 
        {isPending && <Spinner size="xl" my="10rem" mx="40%"/>}
        {data && <ProductFormat product={data} />}
      </Box>
    </Box>
  );
};
export default ProductDetail;
