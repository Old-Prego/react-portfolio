import React from 'react';
import PDF from '../assets/pdf/Luke Perrine Resume.docx.pdf';
import '../css/resume.css';

export function Resume() {
    return (
        
        <div id="resumeWrapper">
            <h4><a href={PDF} download="luke-perrine-resume">Download Full Resume</a></h4>
            <h4 id="languages">Proficient in the following Languages and Tools:</h4>
            <ul id="languages-list">
                <li>Javascript</li>
                <li>CSS</li>
                <li>HTML5</li>
                <li>Node</li>
                <li>Express</li>
                <li>React</li>
                <li>SQL</li>
                <li>Microsoft VBA</li>
                <li>Global Application Scripting Language</li>
            </ul>
            <h4 id="background">I also have professional experience in the following backgrounds:</h4>
            <ul id="background-list">
                <li>IT Administration and Support</li>
                <li>Purchasing and Logistics</li>
                <li>Manufacturing Process Improvement</li>
                <li>Warehousing</li>
            </ul>
        </div>
    )
}