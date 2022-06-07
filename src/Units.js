import React from "react";
import Header from "./Header";
import { Link } from 'react-router-dom';


export default function Leaderboards(){
    return(
        <div>
            <Header/>
        <div style={{"marginTop":"100px"}}>
            </div><h1> All units </h1>
            <Link to = "/Allunits" style={{ color: 'inherit', textDecoration: 'inherit'}}> <button className="button" type="button" style={{color:'orange',outline:'none'}}> <span className="gap"> <span className="logo"></span>Courses</span></button></Link>
        </div>
    )
}