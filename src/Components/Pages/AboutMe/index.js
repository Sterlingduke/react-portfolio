import React from "react"
import { Jumbotron, Row, Col } from 'reactstrap';
import './style.css';
import skills from "../../Info/skills.js";

class About extends React.Component {

  state = {
    skills
  };

  render() {
    return (
      <Jumbotron className="m-5 text-center">
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">I'm Joseph Young, a software developer.</p>
        <hr className="my-4" />
        <Row className="justify-content-center">
          <Col xs="8">
            <p className="">Passionate about approaching programming challenges from multiple viewpoints, and collaborating with others, to provide purposeful and memorable web applications. Proven capacity in any given situation to remain calm, collected, and aid those who need it. Experienced in coordinating diverse teams, that work toward separate but collective goals. Refined eye for details. Eager to join a fast-paced, quality-driven team in order to build innovative web applications and continue to gain further experience.</p>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row className="justify-content-center">
          <Col xs="8">
            <p className="">Technical Skills</p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {this.state.skills.map(skill => (
            <Col>
              <img className="logo" src={skill.src} alt="Logo"/>
            </Col>
          ))}
        </Row>
      </Jumbotron>
    );
  }

};

export default About;