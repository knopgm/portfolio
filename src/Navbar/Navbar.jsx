import React from 'react';

import  './style.scss';

export function Navbar() {
    return (
        <div className="nav-wrapper">
            <nav id="navbar" className="nav">
                <ul className="nav-list">
                    <li>
                        <a href="#welcome-section">About</a>
                    </li>
                    <li>
                        <a href="#projects">Work</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}