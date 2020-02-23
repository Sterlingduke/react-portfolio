import React from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Row, Col 
} from 'reactstrap';

const ProjectCard = (props) => {
    return (
        <Card className="m-4">
            <CardHeader tag="h3" className="p-3">{props.projectName}</CardHeader>
            <Row>
                <Col>
                    <img width="75%" className="m-5"src={props.exampleGif} alt="Project Pic" />
                </Col>
                <Col>
                <CardBody>
                <CardText className="mt-3">{props.summary}</CardText>
                <br />
                <CardText>{props.techUsed}</CardText>
                </CardBody>
                </Col>
            </Row>
            <CardFooter className="d-flex justify-content-end p-2">
                <Button href={props.githubLink} className="mr-5" target="_blank">Github Link</Button>
                <Button href={props.deployedLink} className="mr-5" target="_blank">Deployed Link</Button>
            </CardFooter>
        </Card>
    )
}

export default ProjectCard;