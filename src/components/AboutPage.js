import { Box, Text, Heading, Image } from "@chakra-ui/react";
import herobg from "../asset/herobg.jpeg";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Box>
      <Box bgColor="#EADED7" minHeight="15vh" py="4rem" pl="7rem" pr="3rem">
        <Heading display="flex" gap="2" fontSize="2rem">
          <Link
            to="/"
            pr="0.5rem"
            color="#795744"
            cursor="pointer"
            _hover={{ fontStyle: "none" }}
          >
            Home{" "}
          </Link>
          <Text color="#453227">| About</Text>
        </Heading>
      </Box>
      <Box
        display="flex"
        flexDirection={["column", "column", "row"]}
        py="5rem"
        px={["3rem", "5rem", "7rem"]}
        gap="3rem"
      >
        <Box width={["90%", "90%", "50%"]}>
          <Image src={herobg} height="100%" minWidth="100%" />
        </Box>
        <Box width={["90%", "90%", "50%"]}>
          <Heading lineHeight="1.5" fontSize="2.5rem" color="#102A42">
            Our Story
          </Heading>
          <Box width="6rem" height="0.25rem" bgColor="#ab7a5f"></Box>
          <Text pt="2rem" color="#617D98" lineHeight="2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;
