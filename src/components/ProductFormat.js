import { Box, Image, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

const productFormat = (props) => {
  const product = props.product;
  const [activeImage, setActiveImage] = useState(product.image);
  const imageLinks = [
    product.image,
    "https://dl.airtable.com/.attachments/ee3ed75c53f1a352c45e18fcde8f7390/d00187fb/extra-1.jpeg",
    "https://dl.airtable.com/.attachments/8972b8b6245c3b6be2530797beb426bd/db3ddba9/extra-2.jpeg",
    "https://dl.airtable.com/.attachments/a2848c44d624f22e092426d0f85e45a8/e5c860b5/extra-3.jpeg",
    "https://dl.airtable.com/.attachments/946256810a22dc7cb0ecad4e3e2faac4/1d3cd5e7/extra-4.jpeg",
  ];
  return (
    <Box display="flex">
      <Box display="flex" flexDirection="column" objectFit="cover">
        <Box>
          <Image height="600px" src={activeImage} />
        </Box>
        <Box display="flex" width="100%" justifyContent="space-between">
          <Image
            height="75px"
            width="5rem"
            src={imageLinks[0]}
            onClick={(e) => setActiveImage(e.target.src)}
          />
          <Image
            height="75px"
            src={imageLinks[1]}
            onClick={(e) => setActiveImage(e.target.src)}
          />
          <Image
            height="75px"
            src={imageLinks[2]}
            onClick={(e) => setActiveImage(e.target.src)}
          />
          <Image
            height="75px"
            src={imageLinks[3]}
            onClick={(e) => setActiveImage(e.target.src)}
          />
          <Image
            height="75px"
            src={imageLinks[4]}
            onClick={(e) => setActiveImage(e.target.src)}
          />
        </Box>
      </Box>
      <Box display="flex" flexDirection="column">
        <Heading
          fontSize={["1rem", "1.5", "2rem"]}
          textTransform="capitalize"
          color="#102A42"
        >
          {product.title}
        </Heading>
        <Text fontSize="1.25rem" color="#ab7a5f">{`$${product.price}`}</Text>
        <Text lineHeight="2" color="#324d67" maxWidth="45em">
          {product.description}
        </Text>
        <Text>{`Category: ${product.category}`}</Text>
        <Text>Available: In Stock</Text>
      </Box>
    </Box>
  );
};

export default productFormat;
