import React from "react";
import {Link} from "react-router-dom";
import "./Navigator.css";

function Navigator(){
    return(
        <div className="navigator"> 
            <Link to={{
                pathname: '/',
                }} className="home">home</Link>
            <Link to='/about' className="about">about</Link>
        </div>
        
    )
}


export default Navigator;