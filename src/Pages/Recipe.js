import { useState, useEffect } from "react";
import styles from "./Recipe.module.css";
import { useParams } from "react-router-dom";

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

  const fetchDetails = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information/?apiKey=${KEY}`
    );
    const d = await response.json();
    setData(d);
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <div className={styles.outerBox}>
      <h1 className={styles.title}>{data.title}</h1>
      <div className={styles.innerBox}>
        <img className={styles.image} src={data.image} alt="" />
        <div className={styles.contentBox}>
          <p dangerouslySetInnerHTML={{ __html: data.summary }}></p>
          <div className={styles.buttons}>
            <button onClick={ingrediantsHandler} className={styles.button}>
              Ingrediants
            </button>
            <button onClick={instructionsHandler} className={styles.button}>
              Instructions
            </button>
          </div>
        </div>
      </div>

      {ingrediants && (
        <div className={styles.nextBox}>
          <h1>Ingrediants</h1>
          <ol>
            {data.extendedIngredients.map((item) => {
              return <li>{item.original}</li>;
            })}
          </ol>
        </div>
      )}

      {instructions && (
        <div className={styles.nextBox}>
          <h1>Instructions</h1>
          <p dangerouslySetInnerHTML={{ __html: data.instructions }}></p>
        </div>
      )}
    </div>
  );
}

export default Recipe;
