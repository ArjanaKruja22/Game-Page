import "./App.css";
import {AppBar}  from "@mui/material";
import {Link} from "react-router-dom";
import {FaGraduationCap} from 'react-icons/fa';
import {GiTrophyCup} from 'react-icons/gi';
import {CgProfile} from 'react-icons/cg';
import {SiGoogleclassroom} from 'react-icons/si';
import {VscCircuitBoard} from 'react-icons/vsc';
import {AiOutlineBell} from 'react-icons/ai';
import ReactRoundedImage from "react-rounded-image";
import { Form } from "react-bootstrap";



export default function Header(){
    return(
        <AppBar>
            
            <div className="d">
            <div className='title'>
            <img src="https://game4skill.it/wp-content/uploads/2021/04/cropped-logo-g4s.png" alt="default"/>
            </div>
            <div className='link'>
                
                <Link to = "/Courses" style={{ color: 'inherit', textDecoration: 'inherit'}}> <button className="button" type="button" style={{color:'orange',outline:'none'}}> <FaGraduationCap /> Courses</button></Link>
                <Link to ="/Leaderboards" style={{ color: 'inherit', textDecoration: 'inherit'}}><button className="button" type="button" style={{color:'orange',outline:'none'}}> <GiTrophyCup /> Leaderboards</button></Link>
                <Link to ="/Profile" style={{ color: 'inherit', textDecoration: 'inherit'}}><button className="button" type="button" style={{color:'orange',outline:'none'}}><CgProfile/> Profile</button></Link>
                <Link to ="/Classrooms" style={{ color: 'inherit', textDecoration: 'inherit'}}><button className="button" type="button" style={{color:'orange',outline:'none'}}><SiGoogleclassroom/> Classrooms</button></Link>
                <Link to="/BulletinBoard" style={{ color: 'inherit', textDecoration: 'inherit'}}><button className="button" type="button" style={{color:'orange',outline:'none'}}><VscCircuitBoard/> BulletinBoard</button></Link>
                <Link to="/Notification" style={{ color: 'inherit', textDecoration: 'inherit',outline:'none'}}><button className="bell" type="button" ><AiOutlineBell/></button></Link>
                <div className="photo" style={{ color: 'inherit', textDecoration: 'inherit'}}> <ReactRoundedImage roundedSize="0" imageWidth="70" imageHeight="70" />
                </div>
                
                <div className="select">
                <Form.Select style={{outline:'none'}}>
                <option >Name Surname</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
                </div>
            </div>
            
            </div>
            
        </AppBar>
    )
}