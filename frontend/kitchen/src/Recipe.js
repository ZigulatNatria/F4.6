import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';
//import './App.css';

function Recipe() {

    const [recipe, setRecipe] = useState([]);
    const params = useParams();

    useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/v1/rec/${params.id}`)
    .then(res =>{console.log(res);
    setRecipe(res.data);

    });
    }, []);

      return (
        <div class="block">
            <p>{recipe.name}</p>
            <p>{recipe.discription}</p>

        </div>
      );
    }

export default Recipe;