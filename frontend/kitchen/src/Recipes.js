import React, {useState, useEffect} from "react";
import axios from "axios";
import {Route, Routes, Link, useParams} from 'react-router-dom';
import Recipe from './Recipe';
//import './App.css';

function Recipes() {


    const [recipes, setRecipes] = useState([]);
    const params = useParams();

    useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/v1/cat/${params.id}`)
    .then(res =>{console.log(res);
    setRecipes(res.data);
    });
    }, []);

      return (
        <div>
            {recipes.map(recipe => <p><Link key={recipe.id} to={`/rec/${recipe.id}`}>{recipe.name}</Link></p>)}

        </div>
      );
    }

export default Recipes;