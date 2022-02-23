import { Box, Text, Image } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SampleProduct = (props) => {
  const items = props.items;

  return (
    <Box
      display="flex"
      margin="4rem auto"
      gap="2.5rem"
      fontSize="1rem"
      flexWrap="wrap"
      justifyContent="center"
    >
      {items.map((item) => (
        <Box as={Link} to={`/products/${item.id}`} key={item.id} width="25rem">
          <Image
            height="25rem"
            width="100%"
            borderRadius="0.5rem"
            src={item.image}
            cursor="pointer"
            transitionDuration="0.15s"
            _hover={{boxShadow:"-4px 0px 7px 3px rgb(0 0 0 / 31%)"}}
          />
          <Box
            display="flex"
            pt="1rem"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text color="102A42">{item.title}</Text>
            <Text color="#ab7a5f">{`$${item.price}`}</Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

SampleProduct.propTypes = {
  items: PropTypes.any,
};

export default SampleProduct;
