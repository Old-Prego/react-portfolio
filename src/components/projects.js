import React from 'react';
import allProjects from './allProjects';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const allProjects = [
    {
        title: 'Pet Adoption',
    }
];

export function projects() 
{
    return allProjects.map((project, index) => {
        return(
            <Card style={{ width: '18rem' }} id={index}>
                <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src={project.image} />
                <Card.Link href={project.deployLink}>Link to Deployed Site</Card.Link>
                <Card.Link href={project.repoLink}>Link to Project Repo</Card.Link>
            </Card>
        )
    })
}