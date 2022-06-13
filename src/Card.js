import React, {useEffect,useState} from "react";
import Header from "./Header";
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import {MdTimer} from 'react-icons/md';
import {GiWireframeGlobe} from 'react-icons/gi';
import {MdOutlineIncompleteCircle} from 'react-icons/md';
import {TiTick} from 'react-icons/ti';
import './App.css';


export default function Cards(){
    const [courses, setCourses] = useState([]);
    const [missions, setMissions] = useState([]);
    const [course, setCourse] = useState({});

    const [allUnits, setAllUnits] = useState(true);
    const [toDo, setToDo] = useState(false);
    const [completed, setCompleted] = useState(false);
    
    let params = useParams();

    let arr = missions.filter(el => el.completedsteps < el.totalsteps)
    let arr2 = missions.filter(el => el.completedsteps === el.totalsteps)

    useEffect(() => {
        fetch("https://proxima.grifomultimedia.it/wp-json/gamification/v2/get_courses_data")
        .then(res => res.json()).then(json => setCourses(json.courses));
        }, []);

    useEffect(() => {
      //setCourse(courses.find(el => el.course_id === params))
        courses.map(async el => {
          const res = await fetch("https://proxima.grifomultimedia.it/wp-json/gamification/v2/get_missions_data?course_id", {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(el)
          });
          const json = await res.json();
          setMissions(json.missions);
          setCourse(courses.find(el => el.course_id === parseInt(params.id))); //il metodo find() restituisce il primo elemento nell'array fornito che soddisfa la funzione di test fornita. Se nessun valore soddisfa la funzione di test, viene restituito undefined.
        })}, [courses]);
        
      
return(
    <div className="mission">
        <Header />

<div className="card-header">
        <Card>
  
  <Card.Body>

    <Card.Title> 
      <h5>{course.name}</h5>
    </Card.Title>

    <Card.Text>
    <h5>{course.description}</h5>
    </Card.Text>
    <button onClick={() => console.log(course)}>courses</button>
    <div className="bottom-header">
    <h5><MdTimer/> {course.coursetime} <span className="minutes"> minutes </span> </h5>
    <h5 > <GiWireframeGlobe/> <span className="mission">{course.completedmissions} </span> / {course.totalmissions} <span className="units">units</span></h5>
    </div>
  </Card.Body>

        </Card>
</div>


        <div className="mision" >
          
          <div className="links">
          <button className="link-button" onClick={() => {setAllUnits(true); setToDo(false); setCompleted(false)}} style={{"borderRadius":"4px"}}>All Units</button>
          <button className="link-button" onClick={() => {setAllUnits(false); setToDo(true); setCompleted(false)}} style={{"borderRadius":"4px"}}>To do</button>
          <button className="link-button" onClick={() => {setAllUnits(false); setToDo(false); setCompleted(true)}} style={{"borderRadius":"4px"}}>Completed</button>
          <button className="link-button" onClick={() => console.log(missions, arr, arr2)}>test</button>
          </div>
         <div className="cardsss">   
     { allUnits &&
         missions.map(el => 
            <div key={el.id} className="card" >
              
                <img src={el.coverimageurl} alt="default" style={{width:'100%'}}/>
                <h5  className="mission-title">{el.name}</h5>
                <h5>{el.description}</h5>
                <div className="bottom-mission">
                <h5><MdOutlineIncompleteCircle/>{el.completionpercentage}%</h5>
                <h5><TiTick/>{el.completedsteps}/{el.totalsteps}</h5>
                </div>
            </div>
            )
          }
        { toDo &&
          arr.map(el => 
            <div key={el.id} className="card">
              <img src={el.coverimageurl} alt="default" style={{width: '100%'}} />
              <h5  className="mission-title">{el.name}</h5>
                <h5>{el.description}</h5>
                <div className="bottom-mission">
                <h5><MdOutlineIncompleteCircle/>{el.completionpercentage}%</h5>
                <h5><TiTick/>{el.completedsteps}/{el.totalsteps}</h5>
                </div>
            </div>)
        }
        { completed &&
          arr2.map(el =>
            <div>
              <img src={el.coverimageurl} alt="default" style={{width: '100%'}} />
              <h5  className="mission-title">{el.name}</h5>
                <h5>{el.description}</h5>
                <div className="bottom-mission">
                <h5><MdOutlineIncompleteCircle/>{el.completionpercentage}%</h5>
                <h5><TiTick/>{el.completedsteps}/{el.totalsteps}</h5>
                </div>
            </div>)
        } </div>
    </div>
    </div>
)
}