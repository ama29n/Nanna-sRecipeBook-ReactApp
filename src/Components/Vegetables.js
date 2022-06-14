// Component to show popular recepies

import { useState, useEffect } from "react";
import Card from "./SubComponents/Card";
import styles from "./Vegetables.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import data from './Data';
import {Link} from 'react-router-dom';

function Vegetables() {
  const [recipes, setRecipes] = useState([]);
  const KEY = "f214196873d94844bdac6ce439db977a";

  const veggies = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${KEY}&number=10&tags=vegetarian`
    );
    const data = await response.json();
    setRecipes(data.recipes);
    console.log(data.recipes);
    
    // setRecipes(data);
  };

  // To load popular recepies whenever the page loads
  useEffect(() => {
    veggies();
  }, []);

  const list = recipes.map((item) => {
    return (
      <SplideSlide>
        <Link to = {'/recipe/' + item.id} style={{ textDecoration: 'none' }}>
          <Card>
            <p>{item.title}</p>
            <img src={item.image} className={styles.img} alt="" />
          </Card>
        </Link>
      </SplideSlide>
    );
  });

  return (
    <div className = {styles.box}>

        <h2 className = {styles.title}>Veggies</h2>

        <div className = {styles.splide}>
        <Splide
            options={{
            perPage: 3,
            // arrows: false,
            // pagination: false,
            // drag: "free",
            gap: '1rem'
            }}
        >
            {list}
        </Splide>
        </div>
    </div>
  );
}

export default Vegetables;

