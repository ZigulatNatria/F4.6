import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import axios from "axios";
//import './App.css';

function Category() {


    const [category, setCategory] = useState([]);

    useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/v1/cat/')
    .then(res =>{console.log(res);
    setCategory(res.data);
    });
    }, []);

      return (
        <div>
          {category.map(cat => <p><Link key={cat.id} to={`/${cat.id}`}>{cat.name_category}</Link></p>)}
        </div>
      );
    }

export default Category;