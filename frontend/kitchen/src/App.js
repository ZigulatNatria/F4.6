import React, {useState, useEffect} from "react";
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import Category from './Category';
import Recipes from './Recipes';
import Recipe from './Recipe';
import Header from './Header';
import Api from './Api';
import {Route, Routes, Link} from 'react-router-dom'; //для роутинга


function App() {

      return (
        <React.Fragment>
            <Header>

            </Header>
            <Routes>
                <Route path='/' element={ <Category />} />
                <Route path='/:id' element={ <Recipes />} />
                <Route path='/rec/:id' element={ <Recipe />} />
                <Route path='/api' element={ <Api />} />
            </Routes>
        </React.Fragment>
      );
    }

export default App;
