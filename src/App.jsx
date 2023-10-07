import { data } from "./utils/data";
import { RecipeListPage } from "./pages/RecipeListPage";
import { Center, SimpleGrid, Box } from "@chakra-ui/react";
import RecipePage from "./pages/RecipePage";
import { useState } from "react";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
export const App = () => {
  const [selectedItem, setSelectedItem] = useState();

  const recipes = data.hits.map((hit) => hit.recipe);

  return (
    <Header>
      <Box w="100%" h="100%">
        <Center>
          <SimpleGrid w="100%">
            {selectedItem ? (
              <RecipePage recipes={selectedItem} clickFn={setSelectedItem} />
            ) : (
              <RecipeListPage recipes={recipes} clickFn={setSelectedItem} />
            )}
          </SimpleGrid>
        </Center>
      </Box>
      <Footer />
    </Header>
  );
};