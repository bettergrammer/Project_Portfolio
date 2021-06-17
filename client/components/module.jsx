import React from 'react';
import ProjectInfo from './projectinfo.jsx';
import ResetGiphy from './resetgiphy.jsx';
import SuccessFactoryGiphy from './successfactorygiphy.jsx';
import CryptoCurrencyGiphy from './cryptocurrencygiphy.jsx';
import RoomShareGiphy from './roomsharegiphy.jsx';

export default function Module({ project, removeModule }) {
    const giphys = {
        'reset': <ResetGiphy />,
        'theSuccessFactory': <SuccessFactoryGiphy />,
        'cryptoCurrencyChartingTool': <CryptoCurrencyGiphy />,
        'roomShare2.0': <RoomShareGiphy />
    }
    return (
        <div className="module-wrapper">
            <div className="module">
                <div className="close-module" onClick={removeModule}>x</div>
                {giphys[project.name]}
                <ProjectInfo project={project} />
            </div>
        </div>
    )
};