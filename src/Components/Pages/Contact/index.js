import React from "react";
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Row, Col
} from 'reactstrap';
import emailIcon from "../../Pictures/email-logo.png";
import githubIcon from "../../Pictures/github-logo.png";
import linkedInIcon from "../../Pictures/linkedin-logo.png";
import headshot from "../../Pictures/headshot.png";
import "./style.css";

const Contact = (props) => {
    return (
        <div>
            <h3 className="m-5 text-center">Contact Information</h3>
            <hr className="my-4" />
            <Row className="d-flex justify-content-center">
            <Card className="w-50 mt-3">
                <CardHeader tag="h3" className="text-left">Joseph Young</CardHeader>
                <CardBody>
                    <CardTitle className="lead text-left">Software Engineer</CardTitle>
                    <Row>
                    <Col xs="5"><img className="headshot" src={headshot} alt="Headshot"/></Col>
                    <Col className="text-Left m-3">
                    <CardText><img className="logo" src={emailIcon} alt="Logo"/> : <a href="mailto:Joseph.Young32@yahoo.com">Joseph.Young32@yahoo.com</a></CardText>
                    <CardText><img className="logo" src={githubIcon} alt="Logo"/> : <a href="https://github.com/JYoung32">JYoung32</a></CardText>
                    <CardText><img className="logo" src={linkedInIcon} alt="Logo"/> : <a href="https://www.linkedin.com/in/joe-young-8a499a18a/">Joseph Young</a></CardText>
                    </Col>
                    </Row>
                </CardBody>
            </Card>
            </Row>
            </div>
    );
}

export default Contact;