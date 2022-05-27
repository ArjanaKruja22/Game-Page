import "./App.css";
import {AppBar}  from "@mui/material";
import {Link} from "react-router-dom";
import {FaGraduationCap} from 'react-icons/fa';
import {GiTrophyCup} from 'react-icons/gi';
import {CgProfile} from 'react-icons/cg';
import {SiGoogleclassroom} from 'react-icons/si';
import {VscCircuitBoard} from 'react-icons/vsc';


export default function Header(){
    return(
        <AppBar>
            
            <div className="d">
            <div className='title'>
            <img src="https://game4skill.it/wp-content/uploads/2021/04/cropped-logo-g4s.png" alt="default"/>
            </div>
            <div className='link'>
                <Link to = "/Courses"> <button className="button" type="button" style={{color:'orange'}}> <FaGraduationCap/> Courses</button></Link>
                <Link to ="/Leaderboards"><button className="button" type="button" style={{color:'orange'}}> <GiTrophyCup/> Leaderboards</button></Link>
                <Link to ="/Profile"><button className="button" type="button" style={{color:'orange'}}><CgProfile/> Profile</button></Link>
                <Link to ="/Classrooms"><button className="button" type="button" style={{color:'orange'}}><SiGoogleclassroom/> Classrooms</button></Link>
                <Link to="/BulletinBoard"><button className="button" type="button" style={{color:'orange'}}><VscCircuitBoard/> BulletinBoard</button></Link>

            </div>

            </div>
            
        </AppBar>
    )
}