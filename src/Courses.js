import React, {useEffect,useState} from "react";
import Header from "./Header";
import SocialFollow from "./SocialFollow";
import {VscLocation} from 'react-icons/vsc';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md';
import {MdTimer} from 'react-icons/md';
import {GiWireframeGlobe} from 'react-icons/gi';



const Courses = () => {
    const [courses, setCourses] = useState([]);
    const [arr1, setArr1] = useState([]);
    const [arr2, setArr2] = useState([]);
  
    useEffect(() => {
    fetch("https://proxima.grifomultimedia.it/wp-json/gamification/v2/get_courses_data")
    .then(res => res.json()).then(json => setCourses(json.courses));
    }, []);

    useEffect(() => {
      const tempArr1 = courses.slice(0, 4); //cut the array slice()
      setArr1(tempArr1);
      const tempArr2 = courses.slice(3, 7);
      setArr2(tempArr2);
    }, [courses]);

    return(
        <div className="main">
           
            <Header/>
            <div className="slider" >
            <div id="carouselExampleControls" class="carousel slide" >
            <div id="carouselExampleIndicators" class="carousel slide" >

    <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    </ol>
  
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="cards">
     {
         arr1.map(el => 
            <div class="card" style={{width: '20rem'}}>
                <img src={el.coverimageurl} alt="default"/>
                <h5>{el.name}</h5>
                <h5>{el.description}</h5>
                <div className="course">
                <h5><MdTimer/> {el.coursetime} <span className="minutes"> minutes </span> </h5>
                <h5 > <GiWireframeGlobe/> <span className="mission">{el.completedmissions} </span> / {el.totalmissions} <span className="units">units</span></h5>
        </div>


        <h5 className="acquirable">Acquirable skills</h5>
        <div className="test">
                {el.skills.map(el =>
                
                < div className="skills">
                  
                <img src={el.imageurl} alt="default" className="skill"/>
                <h5 className="skillname">{el.name}</h5>
                </div>
              )}
            </div>
            </div>
            )
     }
    </div>
  </div>

  <div class="carousel-item">
 <div className="cards">
     {
         arr2.map(el => 
            <div class="card" style={{width: '20rem'}}>
                <img src={el.coverimageurl} alt="default"/>
                <h5>{el.name}</h5>
                <h5>{el.description}</h5>
                <div className="courses">
                <h5> <MdTimer/>{el.coursetime} <span className="minutes"> minutes </span></h5>
                <h5> <GiWireframeGlobe/> <span className="mission">{el.completedmissions} </span> / {el.totalmissions} <span className="units">units</span> </h5>
                </div>

                <h5 className="acquirable">Acquirable skills</h5>

                <div className="test">
                {el.skills.map(el =>
                <div className="skills">
                <img src={el.imageurl} alt="default" className="skill"/>
                <h5 className="skillname">{el.name}</h5>
                </div>
              )}
            </div>
            </div>
            )
     }
    </div>
  </div>

  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" >
    <span class="carousel-control-prev-icon" aria-hidden="true" ></span>
    <span class="sr-only">Previous</span>
  </a>

  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  
</div>
            </div>     
        </div> 
       </div>
       <div className='Bottom'>
        <p>
          <b>GAME4SKILL - Grifo Multimedia</b>
          <br/>
          <b className="location"><VscLocation/> Via Bruno Zaccaro, 17/19 - 70126 - Bari</b> <br/>
           <BsFillTelephoneFill/> +39 0804602093
          <br/>
          <b className="email"><MdEmail/>info@grifomultimedia.it</b>
        </p>
       <div className="image">
       <img src="https://game4skill.it/wp-content/themes/sito%20Game4Skill/images/logo-g4s-white.png" alt="default"/>
       </div>
        <div className="social">
          <p>Follow us on:</p>
         
       <SocialFollow/>
      
       <p> www.game4skill.it</p>
       </div>
       
     </div>
     <div className="end">
     <hr className="line"/>
     <p className="footer">Powered by Game4Skill</p>
     </div>
        </div>
    )
};

export default Courses;