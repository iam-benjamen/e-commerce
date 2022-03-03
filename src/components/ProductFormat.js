import { Box, Image, Heading, Text, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const productFormat = (props) => {
  const [orderNum, setOrderNum] = useState(1);
  const product = props.product;
  const [activeImage, setActiveImage] = useState(product.image);
  const imageLinks = [
    product.image,
    "https://dl.airtable.com/.attachments/ee3ed75c53f1a352c45e18fcde8f7390/d00187fb/extra-1.jpeg",
    "https://dl.airtable.com/.attachments/8972b8b6245c3b6be2530797beb426bd/db3ddba9/extra-2.jpeg",
    "https://dl.airtable.com/.attachments/a2848c44d624f22e092426d0f85e45a8/e5c860b5/extra-3.jpeg",
    "https://dl.airtable.com/.attachments/946256810a22dc7cb0ecad4e3e2faac4/1d3cd5e7/extra-4.jpeg",
  ];
  
  const handleClickMinus = () => {
    if (orderNum > 1) {
      setOrderNum(orderNum - 1);
    }
  };


  return (
    <Box
      display="flex"
      flexDirection={["column", "column", "row"]}
      py="4rem"
      gap="2rem"
    >
      <Box
        display="flex"
        flexDirection="column"
        pl="5rem"
        justifyContent="center"
        gap="2rem"
        width={["80%", "80%", "50rem"]}
      >
        <Box>
          <Image
            height="600px"
            src={activeImage}
            ml="auto"
            borderRadius=".5rem"
          />
        </Box>
        <Box
          display="flex"
          width="100%"
          justifyContent="center"
          gap=".5rem"
          cursor="pointer"
          borderRadius="0.25rem"
        >
          <Image
            height="75px"
            width="5rem"
            src={imageLinks[0]}
            onClick={(e) => setActiveImage(e.target.src)}
            borderRadius=".25rem"
            outline="1px solid"
          />
          <Image
            height="75px"
            src={imageLinks[1]}
            onClick={(e) => setActiveImage(e.target.src)}
            borderRadius=".25rem"
          />
          <Image
            height="75px"
            src={imageLinks[2]}
            onClick={(e) => setActiveImage(e.target.src)}
            borderRadius=".25rem"
          />
          <Image
            height="75px"
            src={imageLinks[3]}
            onClick={(e) => setActiveImage(e.target.src)}
            borderRadius=".25rem"
          />
          <Image
            height="75px"
            src={imageLinks[4]}
            onClick={(e) => setActiveImage(e.target.src)}
            borderRadius=".25rem"
          />
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        px="2rem"
        gap="1rem"
        justifyContent="center"
      >
        <Heading
          fontSize={["1rem", "1.5", "2rem"]}
          textTransform="capitalize"
          color="#102A42"
          lineHeight="1.5"
        >
          {product.title}
        </Heading>
        <Text fontSize="1.25rem" color="#ab7a5f">{`$${product.price}`}</Text>
        <Text lineHeight="2" color="#324d67" maxWidth="45em">
          {product.description}
        </Text>
        <Text fontWeight="700">{`Category: ${product.category}`}</Text>
        <Text fontWeight="700">Available: In Stock</Text>
        <hr color="gray.200" />
        <Box>
          <Flex gap="2rem">
            <MinusIcon
              onClick={handleClickMinus}
              bgColor="transparent"
              cursor="pointer"
              alignSelf="center"
            />
            <Text fontSize="2xl" fontWeight="bold">
              {orderNum}
            </Text>
            <AddIcon
              onClick={() => setOrderNum(orderNum + 1)}
              bgColor="transparent"
              cursor="pointer"
              alignSelf="center"
            />
          </Flex>
          <Button as={Link} to="/cart" color="white" bgColor="#ab7a5f" mt="1rem">
            ADD TO CART
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default productFormat;
