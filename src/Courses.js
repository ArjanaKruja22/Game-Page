import React, { useEffect, useState } from "react";
import Header from "./Header";
import SocialFollow from "./SocialFollow";
import { VscLocation } from "react-icons/vsc";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdTimer } from "react-icons/md";
import { GiWireframeGlobe } from "react-icons/gi";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [missions, setMissions] = useState([]);
  const [steps, setSteps] = useState([]);

  const [arr1, setArr1] = useState([]);
  const [arr2, setArr2] = useState([]);

  useEffect(() => {
    fetch(
      "https://proxima.grifomultimedia.it/wp-json/gamification/v2/get_courses_data"
    )
      .then((res) => res.json())
      .then((json) => setCourses(json.courses));
  }, []);

  useEffect(() => {
    courses.map((el) => {
      fetch(
        "https://proxima.grifomultimedia.it/wp-json/gamification/v2/get_missions_data?course_id",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(el),
        }
      )
        .then((res) => res.json())
        .then((json) => setMissions(json.missions));
    });
  }, [courses]);

  /*useEffect(() => {
      missions.map(el => {
        fetch("https://proxima.grifomultimedia.it/wp-json/gamification/v2/mission_id/" + el.mission_id)
        .then(res => res.json()).then(json => setSteps(json.steps));
      })
    }, [missions]);*/

  useEffect(() => {
    const tempArr1 = courses.slice(0, 4); //cut the array slice()
    setArr1(tempArr1);
    const tempArr2 = courses.slice(3, 7);
    setArr2(tempArr2);
  }, [courses]);

  return (
    <div className="main">
      <Header />

      <Carousel interval={null}>
        <Carousel.Item>
          <div className="cards">
            {arr1.map((el) => (
              <div key={el.id} className="card" style={{ width: "20rem" }}>
                <Link
                  to={"courses/" + el.course_id}
                  className="btn btn-primary streched-link"
                >
                  <img
                    src={el.coverimageurl}
                    alt="default"
                    style={{ width: "100%" }}
                  />
                </Link>

                <h5>{el.name}</h5>
                <h5>{el.description}</h5>
                <div className="course">
                  <h5>
                    <MdTimer /> {el.coursetime}
                    <span className="minutes"> minutes </span>
                  </h5>
                  <h5>
                    <GiWireframeGlobe />
                    <span className="mission">
                      {el.completedmissions}
                    </span> / {el.totalmissions}
                    <span className="units">units</span>
                  </h5>
                </div>

                <h5 className="acquirable">Acquirable skills</h5>
                <div className="test">
                  {el.skills.map((el) => (
                    <div key={el.id} className="skills">
                      <img src={el.imageurl} alt="default" className="skill" />
                      <h5 className="skillname">{el.name}</h5>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="cards">
            {arr2.map((el) => (
              <div key={el.id} class="card" style={{ width: "20rem" }}>
                <Link
                  to={"courses/" + el.course_id}
                  className="btn btn-primary streched-link"
                >
                  <img
                    src={el.coverimageurl}
                    alt="default"
                    style={{ width: "100%" }}
                  />
                </Link>

                <h5>{el.name}</h5>
                <h5>{el.description}</h5>
                <div className="course">
                  <h5>
                    <MdTimer /> {el.coursetime}{" "}
                    <span className="minutes"> minutes </span>{" "}
                  </h5>
                  <h5>
                    {" "}
                    <GiWireframeGlobe />{" "}
                    <span className="mission">
                      {el.completedmissions}{" "}
                    </span> / {el.totalmissions}{" "}
                    <span className="units">units</span>
                  </h5>
                </div>

                <h5 className="acquirable">Acquirable skills</h5>
                <div className="test">
                  {el.skills.map((el) => (
                    <div key={el.id} className="skills">
                      <img src={el.imageurl} alt="default" className="skill" />
                      <h5 className="skillname">{el.name}</h5>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="Bottom">
        <p>
          <b>GAME4SKILL - Grifo Multimedia</b>
          <br />
          <b className="location">
            <VscLocation /> Via Bruno Zaccaro, 17/19 - 70126 - Bari
          </b>{" "}
          <br />
          <BsFillTelephoneFill /> +39 0804602093
          <br />
          <b className="email">
            <MdEmail />
            info@grifomultimedia.it
          </b>
        </p>
        <div className="image">
          <img
            src="https://game4skill.it/wp-content/themes/sito%20Game4Skill/images/logo-g4s-white.png"
            alt="default"
          />
        </div>
        <div className="social">
          <p>Follow us on:</p>

          <SocialFollow />

          <p> www.game4skill.it</p>
        </div>
      </div>
      <div className="end">
        <hr className="line" />
        <p className="footer">Powered by Game4Skill</p>
      </div>
    </div>
  );
};

export default Courses;
