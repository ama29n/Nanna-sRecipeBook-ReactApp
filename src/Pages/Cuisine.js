import React from 'react';
import {motion} from 'framer-motion';
import {useParams, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from "./Cuisine.module.css";
import Card from "../Components/SubComponents/CuisineCard";
import Data from '../Components/Data';

export default function Cuisine() {

    const [recipes, setRecipes] = useState([]);
    const KEY = "f214196873d94844bdac6ce439db977a";
    const params = useParams();

    const getRecipes = async (name) => {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&number=30&cuisine=${name}`
      );
      const data = await response.json();
      setRecipes(data.results);
      console.log(data.recipes);

      // setRecipes(Data);
    };

    useEffect(() => {
        getRecipes(params.type);
      }, [params.type]);

      const list = recipes.map((item) => {
        return (
            <Link to = {'/recipe/' + item.id} style={{ textDecoration: 'none' }}>
              <Card>
                <p>{item.title}</p>
                <img src={item.image} className={styles.img} alt="" />
              </Card>
            </Link>
        );
      });
    
      return (
        <div className = {styles.box}>
    
            <h2 className = {styles.title}>{params.type} Dishes</h2>
    
            <div className = {styles.innerBox}>
              {list}
            </div>
        </div>
      );
}

