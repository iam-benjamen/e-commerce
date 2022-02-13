import { Box, Heading, Text,Circle, Image } from "@chakra-ui/react";
import icon1 from "./asset/icon1.svg";
import icon2 from "./asset/icon2.svg";
import icon3 from "./asset/icon3.svg";

const BriefSection = () => {
    return (
        <Box bgColor="#EADED7" mb="30rem" height="lg" position={{lg:"relative"}}>
            <Box display="flex" flexDirection={{base: "column", md:"column", lg:"row"}} gap="2rem" justifyContent="space-between" pt="5rem" px="7rem">
                <Heading fontSize="2rem" color="#453227">
                    Custom Furniture<br/> Built Only For You
                </Heading>
                <Text maxWidth={{base:"80%", md:"80%", lg:"40%"}} lineHeight="1.8" color="#795744">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.
                </Text>
            </Box>
            <Box display={{base:"grid",md:"grid",lg:"flex"}} flexDirection={{base:"column", md:"column", lg:"row"}} justifyContent="center" gap="2.5rem" pt="5rem" transform="translateY(10%)">
                <Box bgColor="#C5A491" borderRadius="5px" width="25%" display="flex" flexDirection="column" alignItems="center" px="2rem" py="2rem" gap="1rem">
                    <Circle size="4rem" bgColor="#EADED7"><Image src={icon1} boxSize="2rem"/></Circle>
                    <Heading color="#453227" fontSize="1.5rem">Mission</Heading>
                    <Text fontSize="1rem" lineHeight="1.8" color="#5F4435">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</Text>
                </Box>

                <Box bgColor="#C5A491" borderRadius="5px" width="25%" display="flex" flexDirection="column" alignItems="center" px="2rem" py="2rem" gap="1rem">
                    <Circle size="4rem" bgColor="#EADED7"><Image src={icon2} boxSize="2rem"/></Circle>
                    <Heading color="#453227" fontSize="1.5rem">Vision</Heading>
                    <Text fontSize="1rem" lineHeight="1.8" color="#5F4435">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</Text>
                </Box>

                <Box bgColor="#C5A491" borderRadius="5px" width="25%" display="flex" flexDirection="column" alignItems="center" px="2rem" py="2rem" gap="1rem">
                    <Circle size="4rem" bgColor="#EADED7"><Image src={icon3} boxSize="2rem"/></Circle>
                    <Heading color="#453227" fontSize="1.5rem">History</Heading>
                    <Text fontSize="1rem" lineHeight="1.8" color="#5F4435">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</Text>
                </Box>
            </Box>
        </Box>
    );
}
 
export default BriefSection;