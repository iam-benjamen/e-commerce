import { Box, VStack, Heading, Text, Button, Image } from "@chakra-ui/react";
import herobg from "../asset/herobg.jpeg";
import herobgs from "../asset/herobg2.jpeg";

const IntroSection = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      gap={{ md: "5rem", lg: "8rem" }}
      px={{ base: "1rem", md: "5rem", lg: "7rem" }}
      mt="5rem"
      mb="10rem"
      fontFamily="cursive"
    >
      <VStack alignItems="flex-start" alignSelf="center" gap="1rem">
        <Heading
          lineHeight={{ base: "3rem", md: "3rem", lg: "3rem" }}
          wordBreak="break-word"
          fontSize="3rem"
        >
          Design Your <br /> Comfort Zone
        </Heading>
        <Text maxWidth="34rem" lineHeight="9" fontSize="1.25rem">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </Text>
        <Button bgColor="#ab7a5f">
          <Text color="white" fontSize="0.8rem">
            SHOP NOW
          </Text>
        </Button>
      </VStack>
      <Box display={{ base: "none", md: "none", lg: "block" }} pl="5rem">
        <Box
          position="relative"
          _before={{
            content: '""',
            width: "10%",
            height: "80%",
            bgColor: "#DECBC0",
            position: "absolute",
            bottom: "0%",
            left: "-8%",
            borderRadius: "0.2rem",
            zIndex: "-2",
          }}
        >
          <Image src={herobg} width="30rem" height="100%" borderRadius="5px" />
          <Box position="absolute" transform="translateX(-50%)" bottom="0">
            <Image
              src={herobgs}
              boxSize="15rem"
              height="auto"
              borderRadius="5px"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default IntroSection;
