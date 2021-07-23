import React from 'react';
import portrait from '../assets/img/portrait.jpg';
import '../css/aboutme.css';

export function AboutMe() {
    return(
        <div>
            <div>
                <img src={portrait} alt="Portrait of Luke Perrine" />
            </div>
            <p>Hi! I'm a junior developer currently focused on improving my web development skills, but I have experience in other programming languages as well. I work mostly in javascript, but I have been learning some PHP frameworks along with C#. I am currently working on becoming proficient with React and Laravel for my main frameworks.</p>
            <br />
            <p>I also have experience in the manufacturing world, with logistics and planning being my focus. I have worked in warehousing, purchasing, process improvement, and IT. I have used various amounts of programming in each of these positions, in either VBA or GAB.</p>
        </div>
    )
}