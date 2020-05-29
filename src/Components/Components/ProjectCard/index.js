import React from 'react';
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Row, Col 
} from 'reactstrap';
import MediaQuery, { useMediaQuery } from 'react-responsive';

const ProjectCard = (props) => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });

    const isTablet = useMediaQuery({
        query: '(max-device-width: 1224px)'
    })

    return (
        <div>
        {isDesktopOrLaptop && <>
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
                <CardText><b>Tech Used:</b> {props.techUsed}</CardText>
                </CardBody>
                </Col>
            </Row>
            <CardFooter className="d-flex justify-content-end p-2">
                <Button href={props.githubLink} className="mr-5" target="_blank">Github Link</Button>
                <Button href={props.deployedLink} className="mr-5" target="_blank">Deployed Link</Button>
            </CardFooter>
        </Card>
        </>}
        {isTablet && <>
            <p>Tablet view</p>
        </>}
        </div>
    )
}

export default ProjectCard;