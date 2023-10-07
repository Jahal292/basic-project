import { Heading, Center } from "@chakra-ui/react";

export const Header = (props) => {
  const navigateToHomepage = () => {
    window.location.href = "/";
  };
  return (
    <>
      <Center bg="green.500">
        <Heading
          p="1rem"
          color="white"
          fontSize="3xl"
          onClick={navigateToHomepage}
          cursor="pointer"
          _hover={{ color: "orange.200" }}
        >
          Winc Recipe App
        </Heading>
      </Center>
      {props.children}
    </>
  );
};