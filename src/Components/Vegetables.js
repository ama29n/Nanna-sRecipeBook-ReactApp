import { useState, useEffect } from "react";
import Card from "./SubComponents/Card";
import styles from "./Vegetables.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import data from "./Data";

function Vegetables() {
  const [recipes, setRecipes] = useState(data);
  const KEY = "f214196873d94844bdac6ce439db977a";
  const veggies = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${KEY}&number=10&tags=vegetarian`
      );
      const jsonData = await response.json();
      if(jsonData.recipes) {
        setRecipes(jsonData.recipes);
      } else {
        setRecipes(data);
      }
    } catch(error) {
      setRecipes(data);
      console.log(error);
    }
  };
  // To load popular recepies whenever the page loads
  useEffect(() => {
    veggies();
  }, []);
  // List
  const list = recipes.map((item) => {
    return (
      <SplideSlide key={item.id} id={item.id}>
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
      <h2 className={styles.title}>VEGGIES</h2>
      <div className={styles.splide}>
        <Splide
          options={{
            perPage: 4,
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

export default Vegetables;
