import "./App.css";
import {AppBar}  from "@mui/material";
import {Link} from "react-router-dom";

export default function Header(){
    return(
        <AppBar>
            <div className="d">
            <div className='title'>
            <img src="https://game4skill.it/wp-content/uploads/2021/04/cropped-logo-g4s.png" alt="default"/>
            </div>
            <div className='link'>
                <Link to = "/Courses">Courses</Link>
                <Link to ="/Leaderboards">Leaderboards</Link>
                <Link to ="/Profile">Profile</Link>
                <Link to ="/Classrooms">Classrooms</Link>
                <Link to="/BulletinBoard">BulletinBoard</Link>

            </div>

           
            </div>
            
        </AppBar>
    )
}