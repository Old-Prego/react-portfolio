import React from 'react';
import AllProjects from './allProjects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import '../css/projects.css';
import pets from '../assets/img/petAdoption.png';
import quiz from '../assets/img/quiz.png';
import budget from '../assets/img/budget.png';
import tank from '../assets/img/tank.png';
import workout from '../assets/img/workout.png';
import travel from '../assets/img/portrait.jpg';

export function Projects() 
{
    var imgArray = [pets, quiz, budget, tank, travel, workout];
    return AllProjects.map((project, index,) => {
        return(
            <Card style={{ width: '25rem' }} id="cardWrap" key={index}>
                <Card.Title id="cardTitle">{project.title}</Card.Title>
                <Card.Body id="cardBody">
                    <Card.Text class="cardText">{project.description}</Card.Text>
                    <div class="linkWrapper">
                        <Card.Link class="cardLink" href={project.deployLink} target="_blank">Link to Deployed Site</Card.Link>
                        <Card.Link class="cardLink" href={project.repoLink} target="_blank">Link to Project Repo</Card.Link>
                    </div>
                </Card.Body>
                <Card.Img id="cardImg" variant="bottom" src={imgArray[index]} />
            </Card>
        )
    })
}