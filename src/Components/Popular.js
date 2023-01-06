import { useState, useEffect } from "react";
import Card from "./SubComponents/Card";
import styles from "./Popular.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
// import data from "./Data";

function Popular() {
  const [recipes, setRecipes] = useState([]);
  const KEY = "f214196873d94844bdac6ce439db977a";
  const popularRecipes = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${KEY}&number=10`
    );
    const data = await response.json();
    setRecipes(data.recipes);
    console.log(data.recipes);
    // setRecipes(data);
  };
  // To load popular recepies whenever the page loads
  useEffect(() => {
    popularRecipes();
  }, []);
  // List
  const list = recipes.map((item) => {
    return (
      <SplideSlide>
        <Link to={"/recipe/" + item.id} style={{ textDecoration: "none" }}>
          <Card>
            <p>{item.title}</p>
            <img src={item.image} className={styles.img} alt="" />
          </Card>
        </Link>
      </SplideSlide>
    );
  });
  // JSX
  return (
    <div className={styles.box}>
      <h2 className={styles.title}>POPULAR RECIPES</h2>
      <div className={styles.splide}>
        <Splide
          options={{
            perPage: 4,
            // arrows: false,
            pagination: false,
            drag: "free",
            gap: "1rem",
            rewind: true,
          }}
        >
          {list}
        </Splide>
      </div>
    </div>
  );
}

export default Popular;
