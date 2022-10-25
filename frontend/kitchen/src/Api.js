import React, {useState, useEffect} from "react";
import axios from "axios";
import "./Api.css";



function Api() {


    const [api, setApi] = useState([]);

    useEffect(() => {
    axios.get('http://127.0.0.1:8000/openapi')
    .then(res =>{console.log(res);
    setApi(res.data);
    });
    }, []);

      return (
        <div class='grid'>
            {api}
        </div>
      );
    }

export default Api;