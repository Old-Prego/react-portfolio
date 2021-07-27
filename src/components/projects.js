import React from 'react';
import AllProjects from './allProjects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import '../css/projects.css';
import pets from '../assets/img/petAdoption.png';
import quiz from '../assets/img/quiz.png';

export function Projects() 
{
    var imgArray = [pets, quiz];
    return AllProjects.map((project, index,) => {
        return(
            <Card style={{ width: '18rem' }} id="cardWrap" key={index} class="col-3">
                <Card.Body id="cardBody">
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <div>
                        <Card.Link class="cardLink" href={project.deployLink}>Link to Deployed Site</Card.Link>
                        <Card.Link class="cardLink" href={project.repoLink}>Link to Project Repo</Card.Link>
                    </div>
                </Card.Body>
                <Card.Img variant="bottom" src={imgArray[index]} />
            </Card>
        )
    })
}