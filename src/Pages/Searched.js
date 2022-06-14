import React from 'react';
import {motion} from 'framer-motion';
import {useParams, NavLink} from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from "./Cuisine.module.css";
import Card from "../Components/SubComponents/CuisineCard";

function Searched() {
    const [recipes, setRecipes] = useState([]);
    const KEY = "f214196873d94844bdac6ce439db977a";
    const params = useParams();

    const getRecipes = async (name) => {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/complexSearch?apiKey=${KEY}&number=30&query=${name}`
        );
        const data = await response.json();
        console.log(data);
        setRecipes(data.results);
    };

    useEffect(() => {
        getRecipes(params.search);
        }, [params.search]);

        const list = recipes.map((item) => {
        return (
            <NavLink to = {'/recipe/' + item.id} style={{ textDecoration: 'none' }}>
                <Card>
                    <p>{item.title}</p>
                    <img src={item.image} className={styles.img} alt="" />
                </Card>
            </NavLink>
        );
        });

        return (
        <div className = {styles.box}>

            <h2 className = {styles.title}>{params.search} Dishes</h2>

            <div className = {styles.innerBox}>
                {list}
            </div>
        </div>
        );
}

export default Searched;