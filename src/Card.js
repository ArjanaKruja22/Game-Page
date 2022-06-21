import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { MdTimer } from "react-icons/md";
import { GiWireframeGlobe } from "react-icons/gi";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { MdTaskAlt } from "react-icons/md";
import "./App.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Accordion from "react-bootstrap/Accordion";

export default function Cards() {
  const [courses, setCourses] = useState([]);
  const [missions, setMissions] = useState([]);
  const [course, setCourse] = useState({});
  const [steps, setSteps] = useState([]);

  const [allUnits, setAllUnits] = useState(true);
  const [toDo, setToDo] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [show, setShow] = useState(false);

  let params = useParams();

  let arr = missions.filter((el) => el.completedsteps < el.totalsteps);
  let arr2 = missions.filter((el) => el.completedsteps === el.totalsteps);

  useEffect(() => {
    fetch(
      "https://proxima.grifomultimedia.it/wp-json/gamification/v2/get_courses_data"
    )
      .then((res) => res.json())
      .then((json) => setCourses(json.courses));
  }, []);

  useEffect(() => {
    //setCourse(courses.find(el => el.course_id === params))
    courses.map(async (el) => {
      const res = await fetch(
        "https://proxima.grifomultimedia.it/wp-json/gamification/v2/get_missions_data?course_id",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(el),
        }
      );
      const json = await res.json();
      setMissions(json.missions);
      setCourse(courses.find((el) => el.course_id === parseInt(params.id))); //il metodo find() restituisce il primo elemento nell'array fornito che soddisfa la funzione di test fornita. Se nessun valore soddisfa la funzione di test, viene restituito undefined.
    });
  }, [courses]);

  useEffect(() => {
    missions.map(async (el) => {
      const res = await fetch(
        "https://proxima.grifomultimedia.it/wp-json/gamification/v2/get_steps_data?mission_id",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(el),
        }
      );
      const json = await res.json();
      //let arr = steps;
      //arr.push(json.activities);
      setSteps(json.activities);
    });
  }, [missions]);

  return (
    <div className="mission">
      <Header />

      <div className="card-header">
        <Card>
          <Card.Body>
            <Card.Title>
              <h5 style={{ color: "black" }}>{course.name}</h5>
            </Card.Title>

            <Card.Text>
              <h5 style={{ color: "black" }}>
                {course.description}Lorem Ipsum...
              </h5>
            </Card.Text>
            <div className="bottom-header">
              <h5 style={{ color: "black" }}>
                <MdTimer /> {course.coursetime}{" "}
                <span className="minutes"> minutes </span>{" "}
              </h5>
              <h5>
                {" "}
                <GiWireframeGlobe />{" "}
                <span className="mission">
                  {course.completedmissions}{" "}
                </span> / {course.totalmissions}{" "}
                <span className="units">units</span>
              </h5>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div className="mision">
        <div className="links">
          <button
            className="link-button"
            onClick={() => {
              setAllUnits(true);
              setToDo(false);
              setCompleted(false);
            }}
          >
            All Units
          </button>
          <button
            className="link-button"
            onClick={() => {
              setAllUnits(false);
              setToDo(true);
              setCompleted(false);
            }}
          >
            To do
          </button>
          <button
            className="link-button"
            onClick={() => {
              setAllUnits(false);
              setToDo(false);
              setCompleted(true);
            }}
          >
            Completed
          </button>
        </div>

        <div className="cardsss">
          {allUnits &&
            missions.map((el) => (
              <div key={el.id} className="card">
                <Button variant="primary" onClick={() => setShow(true)}>
                  {" "}
                  <img
                    src={el.coverimageurl}
                    alt="default"
                    style={{ width: "100%" }}
                  />
                </Button>
                <h5 className="mission-title">{el.name}</h5>
                <h5>{el.description}</h5>
                <div className="bottom-mission">
                  <h5>
                    <MdOutlineIncompleteCircle />
                    {el.completionpercentage}%
                  </h5>
                  <h5>
                    <TiTick />
                    {el.completedsteps}/{el.totalsteps}
                  </h5>
                </div>
              </div>
            ))}
          {toDo &&
            arr.map((el) => (
              <div key={el.id} className="card">
                <img
                  src={el.coverimageurl}
                  alt="default"
                  style={{ width: "100%" }}
                />
                <h5 className="mission-title">{el.name}</h5>
                <h5>{el.description}</h5>
                <div className="bottom-mission">
                  <h5>
                    <MdOutlineIncompleteCircle />
                    {el.completionpercentage}%
                  </h5>
                  <h5>
                    <TiTick />
                    {el.completedsteps}/{el.totalsteps}
                  </h5>
                </div>
              </div>
            ))}

          {completed &&
            arr2.map((el) => (
              <div>
                <img
                  src={el.coverimageurl}
                  alt="default"
                  style={{ width: "100%" }}
                />
                <h5 className="mission-title">{el.name}</h5>
                <h5>{el.description}</h5>
                <div className="bottom-mission">
                  <h5>
                    <MdOutlineIncompleteCircle />
                    {el.completionpercentage}%
                  </h5>
                  <h5>
                    <TiTick />
                    {el.completedsteps}/{el.totalsteps}
                  </h5>
                </div>
              </div>
            ))}
        </div>
        {
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            className="window"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                <div className="activities">
                  <h5>Title</h5>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="activity">
                <p className="paragraph">
                  This is the third learning unit of the Digital Contents
                  course, open and take on the activities below to complete this
                  unit and progress though this course.
                </p>
                <Accordion>
                  <Accordion.Item>
                    <Accordion.Header>Activity </Accordion.Header>
                    <Accordion.Body>
                      {steps.map((el) => (
                        <div key={el.activity_id} className="activity-info">
                          <h5 className="mission-title">{el.name}</h5>
                          <h5>{el.description}</h5>
                          <div className="bottom-mission">
                            <h5>
                              <TiTick />
                              {el.completedtasks}/{el.totaltasks}
                            </h5>
                          </div>

                          <div className="test1">
                            {el.tasks.map((el) => (
                              <div key={el.task_id} className="activities">
                                <h5 className="activity-name">{el.name}</h5>
                                <h5>
                                  {" "}
                                  <MdTaskAlt /> {el.completed}
                                </h5>{" "}
                                <Button>Open</Button>
                                <h5>{el.type}</h5>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Modal.Body>
          </Modal>
        }
      </div>
    </div>
  );
}
