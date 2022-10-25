import React from "react";
import {Link} from 'react-router-dom';
import "./Header.css";

function Header() {


      return (
        <header>
            <button class='some-button'>
                <Link to='/'> Категории </Link>
            </button>
            <button class='some-button'>
                <Link to='/api'> API </Link>
            </button>

        </header>
      );
    }

export default Header;