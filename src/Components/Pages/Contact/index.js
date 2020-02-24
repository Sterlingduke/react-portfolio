import React from "react";
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Row, Col, NavLink
} from 'reactstrap';
import emailIcon from "../../Pictures/email-logo.png";
import githubIcon from "../../Pictures/github-logo.png";
import linkedInIcon from "../../Pictures/linkedin-logo.png";
import headshot from "../../Pictures/selfie.jpg";
import resume from "../../Pictures/Web-Dev-Resume.pdf"
import "./style.css";

const Contact = (props) => {
    return (
        <div>
            <h3 className="m-5 text-center">Contact Information</h3>
            <hr className="my-4" />
            <Row className="d-flex justify-content-center">
            <Card className="w-50 mt-3">
                <CardHeader tag="h3" >
                    <Row>
                        <Col className="ml-4">
                            Joseph Young
                        </Col>
                        <Button color="secondary" className="mr-5" href={resume} target="_blank">Resume</Button>
                    </Row>
                
                </CardHeader>
                <CardBody>
                    <Row>
                    <Col xs="5"><img className="headshot shadow bg-white rounded mt-3" src={headshot} alt="Headshot"/></Col>
                    <Col className="text-Left m-3">
                    <CardTitle className="lead text-center font-weight-bold">Software Engineer</CardTitle>
                    <hr className="m-3" />
                    <NavLink href="mailto:Joseph.Young.Dev@gmail.com"><img className="logo" src={emailIcon} alt="Logo"/> : Joseph Young</NavLink>
                    <NavLink href="https://www.linkedin.com/in/joe-young-8a499a18a/"><img className="logo" src={linkedInIcon} alt="Logo"/> : Joseph Young</NavLink>
                    <NavLink href="https://github.com/JYoung32"><img className="logo" src={githubIcon} alt="Logo"/> : JYoung32</NavLink>                
                    </Col>
                    </Row>
                </CardBody>
            </Card>
            </Row>
            </div>
    );
}

export default Contact;