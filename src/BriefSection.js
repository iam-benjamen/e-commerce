import { Box, Heading, Text,Circle, Image } from "@chakra-ui/react";
import icon1 from "./asset/icon1.svg";
import icon2 from "./asset/icon2.svg";
import icon3 from "./asset/icon3.svg";

const BriefSection = () => {
    return (
        <Box bgColor="#EADED7" mb="20rem" height="max-content">
            <Box display="flex" flexDirection={{base: "column", md:"column", lg:"row"}} gap="1rem" justifyContent="space-between" pt="5rem" px={["1rem","3rem","8rem"]} pb="4">
                <Heading fontSize="2rem" color="#453227">
                    Custom Furniture<br/> Built Only For You
                </Heading>
                <Text maxWidth={{base:"100%", md:"25rem", lg:"25rem"}} lineHeight="1.8" color="#795744">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.
                </Text>
            </Box>
            <Box display="flex" flexDirection={{base:"column", md:"row", lg:"row"}} alignItems="center" flexWrap="wrap" justifyContent={["center","center","center"]} gap="2.5rem" transform="auto" mt={[0, 0, -8]} translateY={[0, 0, "7rem"]}>
                <Box bgColor="#C5A491" borderRadius="5px" width={["80%","80%","20rem"]} display="flex" flexDirection="column" alignItems="center" px="2rem" py="2rem" gap="1rem">
                    <Circle size="4rem" bgColor="#EADED7"><Image src={icon1} boxSize="2rem"/></Circle>
                    <Heading color="#453227" fontSize="1.5rem">Mission</Heading>
                    <Text fontSize="1rem" lineHeight="1.8" color="#5F4435">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</Text>
                </Box>

                <Box bgColor="#C5A491" borderRadius="5px" width={["80%","80%","20rem"]} display="flex" flexDirection="column" alignItems="center" px="2rem" py="2rem" gap="1rem">
                    <Circle size="4rem" bgColor="#EADED7"><Image src={icon2} boxSize="2rem"/></Circle>
                    <Heading color="#453227" fontSize="1.5rem">Vision</Heading>
                    <Text fontSize="1rem" lineHeight="1.8" color="#5F4435">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</Text>
                </Box>

                <Box bgColor="#C5A491" borderRadius="5px" width={["80%","80%","20rem"]} display="flex" flexDirection="column" alignItems="center" px="2rem" py="2rem" gap="1rem">
                    <Circle size="4rem" bgColor="#EADED7"><Image src={icon3} boxSize="2rem"/></Circle>
                    <Heading color="#453227" fontSize="1.5rem">History</Heading>
                    <Text fontSize="1rem" lineHeight="1.8" color="#5F4435">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</Text>
                </Box>
            </Box>
        </Box>
    );
}
 
export default BriefSection;