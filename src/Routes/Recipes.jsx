import { useNavigate } from "react-router-dom";
import "../style/Recipes.css";
import { Box } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Recipes = ({ recipe }) => {
  const navigate = useNavigate();

  return (
    <div className="recipe-card" onClick={() => navigate(`/post/${recipe.id}`)}>
      <img className="avatar" src="https://picsum.photos/200" alt="recipe" />
      <div className="info">
        <div className="title">{recipe.title}</div>
        <p>{recipe.body}</p>
        <Box display="flex" mt="15" alignItems="center">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={i < 4 ? "teal.500" : "	#C0C0C0"} />
            ))}
          <Box as="span" ml="10" color="gray.600" fontSize="sm">
            86 reviews
          </Box>
        </Box>
      </div>
    </div>
  );
};
export default Recipes;
