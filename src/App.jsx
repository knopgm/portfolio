import React from 'react';

import {Navbar} from './Navbar/Navbar'
import {Welcome} from './Welcome/Welcome'
import {Projects} from './Projects/Projects'
import {Contact} from './Contact/Contact'

import './styles.scss';

export function App() {
    return (
        <div className='outer-container' id='portfolio'>
            <Navbar />
            <Welcome />
            <Projects />
            <Contact />
        </div>
    );
}