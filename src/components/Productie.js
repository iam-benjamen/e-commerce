import { Box, Image, Text, Heading, HStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
const Productie = (props) => {
  const products = props.products;

  const options = [
    {
      name: "Price(Lowest)",
      value: "lowest",
    },
    {
      name: "Price(Highest)",
      value: "highest",
    },
    {
      name: "Name(A-Z)",
      value: "az",
    },
    {
      name: "Name(Z-A)",
      value: "za",
    },
  ];
  const [selectedOption, setSelectedOption] = useState(options[0].value);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

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
        <Text color="#795744">Products</Text>
      </Heading>
      <HStack justifyContent="flex-end" mt="2.5" pr="10rem" gap="10rem">
        <Text>{`${products.length} Products found`}</Text>
        <hr color="black" />
        <form>
          <label htmlFor="sort">Sort by</label>
          <select value={selectedOption} onChange={handleChange}>
            {options.map((o) => (
              <option key={o.value} value={o.value}>
                {o.name}
              </option>
            ))}
          </select>
        </form>
      </HStack>
      <Box
        display="flex"
        margin="4rem auto"
        gap="2.5rem"
        fontSize="1rem"
        flexWrap="wrap"
        justifyContent="center"
      >
        {products.map((product) => (
          <Box
            as={Link}
            to={`/products/${product.id}`}
            key={product.id}
            width="20rem"
          >
            <Image
              height="20rem"
              width="100%"
              borderRadius="0.5rem"
              src={product.image}
              cursor="pointer"
              transitionDuration="0.15s"
              _hover={{ boxShadow: "-4px 0px 7px 3px rgb(0 0 0 / 31%)" }}
            />
            <Box
              display="flex"
              pt="1rem"
              alignItems="center"
              justifyContent="space-between"
            >
              <Text color="102A42">{product.title}</Text>
              <Text color="#ab7a5f">{`$${product.price}`}</Text>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

Productie.propTypes = {
  products: PropTypes.any,
};
export default Productie;
