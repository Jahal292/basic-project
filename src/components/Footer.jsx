import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box w="100%" h="10rem" bg={"gray.600"} p="2rem">
      <Box
        w="80%"
        h="7rem"
        m="auto"
        color={"green.200"}
        textAlign="Center"
        p="3rem"
      >
        <Text>Winc Recipes App</Text>
        <Text>Copyright © 2023 All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Footer;