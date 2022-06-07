import React, {useEffect,useState} from "react";
import Header from "./Header";
import { useParams } from 'react-router-dom';
import './App.css';


export default function Card(){
    const [courses, setCourses] = useState([]);
    const [missions, setMissions] = useState([]);

    

    useEffect(() => {
        fetch("https://proxima.grifomultimedia.it/wp-json/gamification/v2/get_courses_data")
        .then(res => res.json()).then(json => setCourses(json.courses));
        }, []);

    useEffect(() => {
        courses.map(el => {
          fetch("https://proxima.grifomultimedia.it/wp-json/gamification/v2/get_missions_data?course_id", {
            method: 'POST',
            headers: { 'Content-Type' : 'application/json'},
            body: JSON.stringify(el)
          })
          .then(res => res.json()).then(json => setMissions(json.missions));
          
        })
      }, [courses]);

      

    let params = useParams();

return(
    <div className="mission">
        <Header />
        <div className="mision" style={{"paddingTop" : "500px"}}>
            
     {
         missions.map(el => 
            <div class="card" >
              
                <img src={el.coverimageurl} alt="default" style={{width:'100%'}}/>
                <h5>{el.name}</h5>
                <h5>{el.description}</h5>
                <h5>{el.unittime}</h5>
                <h5>{el.completed}</h5>
                <h5>{el.completionpercentage}</h5>
                <h5>{el.completedsteps}</h5>
                <h5>{el.totalsteps}</h5>
                <h5>{el.active}</h5>
     
        <div className="test">
                {el.skills.map(el =>
                
                < div className="skills">
                  
                <img src={el.imageurl} alt="default" className="skill" />
                <h5 className="skillname">{el.name}</h5>
                </div>
              )}
            </div>
            </div>
            )
          }
    </div>
    </div>
)
}