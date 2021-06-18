import React from 'react';
import ProjectCard from './projectcard.jsx';

export default function Projects({ showModule }) {
    return (
        <div className="projects-container">
            <ProjectCard id={"card1"}
            title={"Reset"}
            description={`Full-stack, dynamic, single-page React app that allows users to effortlessly set, track, and achieve their meditation goals through an intuitive front-end UI.`}
            techUsed={['HTML|CSS', 'React', 'Redux', 'SCSS', 'Node.js|Express', 'MySQL']}
            showModule={showModule}
            />
            <ProjectCard id={"card2"}
            title={"Cryptocurrency Charting Tool"}
            description={`Single-page application for viewing customized charts of Bitcoin historical price data by date range.`}
            techUsed={['HTML|CSS', 'React', 'SCSS', 'Node.js|Express']}
            showModule={showModule}
            />
            {/* <ProjectCard id={"card3"}
            title={"Roomshare 2.0"}
            description={"Front end ‘Photos’ microservice showing product photos in grid and carousel style."}
            techUsed={['HTML|CSS', 'React', 'SCSS', 'Node.js|Express', 'MySQL']}
            showModule={showModule}
            /> */}
            <ProjectCard id={"card4"}
            title={"The Success Factory"}
            description={"Front end single-page application to help users adopt succesful habits and rituals."}
            techUsed={['HTML|CSS', 'React', 'SCSS', 'Node.js|Express']}
            showModule={showModule}
            />
        </div>
    )
};