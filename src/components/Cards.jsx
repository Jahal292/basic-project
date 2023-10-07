import { Image, Text, CardHeader, CardBody, Card, Tag } from "@chakra-ui/react";
import { Suspense } from "react";

const LazyImage = ({ src, alt }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Image
      src={src}
      alt={alt}
      w="550px"
      h="260px"
      m="0"
      p="0"
      objectFit="cover"
    />
  </Suspense>
);
export default function Cards({ recipe, clickFn }) {
  const handleClick = () => {
    clickFn(recipe);
    window.scrollTo(0, 0);
  };

  return (
    <Card
      overflow="hidden"
      w="100%"
      gap={1}
      bg="white"
      cursor="pointer"
      onClick={handleClick}
      _hover={{ transform: "scale(1.03)" }}
    >
      <CardHeader m="0" p="0">
        <LazyImage src={recipe.image} alt={recipe.label} />
      </CardHeader>

      <CardBody textAlign="center">
        <Text
          textTransform="uppercase"
          color="gray.400"
          fontSize={16}
          mt=".1rem"
          fontWeight="bold"
        >
          {recipe.mealType}
        </Text>
        <Text fontStyle="normal" fontSize={25} fontWeight="bold">
          {recipe.label}
        </Text>

        {recipe.healthLabels.includes("Vegan") &&
        recipe.healthLabels.includes("Vegetarian") ? (
          <Text p={1.5} mt={1} textTransform="uppercase">
            <Tag fontWeight="bold" colorScheme="purple">
              Vegan
            </Tag>
            <Tag fontWeight="bold" colorScheme="purple" ml={1}>
              Vegetarian
            </Tag>
          </Text>
        ) : recipe.healthLabels.includes("Vegan") ? (
          <Text p={1.5} mt={1} textTransform="uppercase">
            <Tag fontWeight="bold" colorScheme="purple">
              Vegan
            </Tag>
          </Text>
        ) : recipe.healthLabels.includes("Vegetarian") ? (
          <Text p={1.5} mt={1} textTransform="uppercase">
            <Tag fontWeight="bold" colorScheme="purple">
              Vegetarian
            </Tag>
          </Text>
        ) : null}

        {recipe.dietLabels && recipe.dietLabels.length > 0 ? (
          <Text fontWeight={"bold"} textTransform="uppercase" p={1.5} m={0}>
            {recipe.dietLabels.map((label, index) => (
              <Tag
                key={index}
                fontWeight="bold"
                colorScheme="green"
                mr={index < recipe.dietLabels.length - 1 ? 1 : 0}
              >
                {label}
              </Tag>
            ))}
          </Text>
        ) : null}

        <Text
          p={1.5}
          m={0}
          color="gray.800"
          fontWeight="bold"
          textTransform="capitalize"
        >
          Dish: {recipe.dishType}
        </Text>

        {recipe.cautions.length > 0 && (
          <>
            <Text m="0 " p="1" fontWeight="normal">
              Cautions:
            </Text>
            <Text textTransform="uppercase">
              {recipe.cautions.map((caution) => (
                <Tag
                  fontWeight="bold"
                  colorScheme="red"
                  key={caution}
                  marginRight="0.5rem"
                  mt="0.5rem"
                >
                  {caution}
                </Tag>
              ))}
            </Text>
          </>
        )}
      </CardBody>
    </Card>
  );
}