import React from 'react';

import './style.scss';

export function Welcome(props) {
    return (
        <div id="welcome-section" className="container welcome-section">
            <div className="welcome-section-inner-wrapper">
            <div id="img-div" className="avatar">
                    <img className="perfil-img" src="https://avatars.githubusercontent.com/u/65956162?s=460&u=c5917df6504b0e86dfd3ca3d3c2de6841fed43e4&v=4" id="image" alt="perfil image"/>
                </div>
                <div className="welcome-avatar">
                    <h1>Hey! I am <span className="highlighted">{props.name}</span></h1>
                    <p className="font-light">A Web Developer, Frontend aspiring / entusiastic</p>
                </div>
            </div>
        </div>
    );
}