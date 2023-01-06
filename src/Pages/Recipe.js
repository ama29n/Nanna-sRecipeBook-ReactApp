import { useState, useEffect, useCallback } from "react";
import styles from "./Recipe.module.css";
import { useParams } from "react-router-dom";
import { Button, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const MyButton = styled(Button)(({ theme }) => ({
  color: "#111111",
  backgroundColor: "white",
  padding: "1rem 1.5rem",
  "&:hover": {
    backgroundColor: "white",
  },
}));

function Recipe() {
  const [data, setData] = useState({});
  const [instructions, setInstructions] = useState(false);
  const [ingrediants, setIngrediants] = useState(false);
  const ingrediantsHandler = (e) => {
    e.preventDefault();
    setIngrediants(true);
    setInstructions(false);
  };
  const instructionsHandler = (e) => {
    e.preventDefault();
    setInstructions(true);
    setIngrediants(false);
  };
  const params = useParams();
  const KEY = "f214196873d94844bdac6ce439db977a";
  const fetchDetails = useCallback(async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information/?apiKey=${KEY}`
    );
    const d = await response.json();
    setData(d);
  }, [params.id]);
  // useEffect to fetch recipe details
  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);
  // JSX
  return (
    <div className={styles.outerBox}>
      <h1 className={styles.title}>{data.title}</h1>
      <div className={styles.innerBox}>
        <img className={styles.image} src={data.image} alt="" />
        <div className={styles.contentBox}>
          <p dangerouslySetInnerHTML={{ __html: data.summary }}></p>
          <Box display="flex" gap="1rem">
            <MyButton size="large" variant="contained" onClick={ingrediantsHandler}>Ingrediants</MyButton>
            <MyButton size="large" variant="contained" onClick={instructionsHandler}>Instructions</MyButton>
          </Box>
        </div>
      </div>

      {ingrediants && (
        <div className={styles.nextBox}>
          <h1 style={{ marginBottom: "1rem" }}>Ingrediants</h1>
          <ol>
            {data.extendedIngredients.map((item) => {
              return <li>{item.original}</li>;
            })}
          </ol>
        </div>
      )}

      {instructions && (
        <div className={styles.nextBox}>
          <h1 style={{ marginBottom: "1rem" }}>Instructions</h1>
          <p dangerouslySetInnerHTML={{ __html: data.instructions }}></p>
        </div>
      )}
    </div>
  );
}

export default Recipe;
