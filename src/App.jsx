import React from 'react';

import {Navbar} from './Navbar/Navbar';
import {Welcome} from './Welcome/Welcome';
import {Projects} from './Projects/Projects';
import {Contact} from './Contact/Contact';
import {drumMachineCoverImage, quoteMachineCoverImage} from './images';

import './styles.scss';

const projectList = [
    {
        url: "https://lh3.googleusercontent.com/ElL7ucayvm359Oafl5s--vQmnSCaEdji9wTLoD1k45YHHHxBs9s5YEFd5JIlEYF1oYuOTVF7mzOLhaGJtyfajGavR8iaezdYnxSEZ8TxxZ_8kAK3ClsP0uXtaHkZnb2JowQwKK-6bl0=w2400?source=screenshot.guru",
        imgUrl: "https://lh3.googleusercontent.com/ElL7ucayvm359Oafl5s--vQmnSCaEdji9wTLoD1k45YHHHxBs9s5YEFd5JIlEYF1oYuOTVF7mzOLhaGJtyfajGavR8iaezdYnxSEZ8TxxZ_8kAK3ClsP0uXtaHkZnb2JowQwKK-6bl0=w423-h315-p-k",
        title: "Tribute Page"
    },
    {
        url: "https://lh3.googleusercontent.com/sacxFEOYc3lNRunhN_Krq2Yeuuea7Y3Mrq1nJrHIMGt4Rmcb5UO4iDr02IVTdyivfbMWvG2u6CDSyWj-UQQ-biCAYh4xYdDDkYng3vBeOOmy4_0YKWBR20hXhUTgeffKIUBY3RMjT3M=w2400?source=screenshot.guru",
        imgUrl: "https://lh3.googleusercontent.com/sacxFEOYc3lNRunhN_Krq2Yeuuea7Y3Mrq1nJrHIMGt4Rmcb5UO4iDr02IVTdyivfbMWvG2u6CDSyWj-UQQ-biCAYh4xYdDDkYng3vBeOOmy4_0YKWBR20hXhUTgeffKIUBY3RMjT3M=w453-h315-p-k",
        title: "Traveling Survey"
    },
    {
        url: "https://lh3.googleusercontent.com/YZDAH3Vy_HCHSaH3e0gDSprAkxvot3-7eUiqyoe20DpRkRxPR5k-QfhkpDOsen9okhYPDVW_PQw0NSvxzy6LVl-ueetGUlUSo7D19FKJdmzBdUTK7V8vhp9mTFbYjIXdDx76L8ZgXTc=w2400?source=screenshot.guru",
        imgUrl: "https://lh3.googleusercontent.com/YZDAH3Vy_HCHSaH3e0gDSprAkxvot3-7eUiqyoe20DpRkRxPR5k-QfhkpDOsen9okhYPDVW_PQw0NSvxzy6LVl-ueetGUlUSo7D19FKJdmzBdUTK7V8vhp9mTFbYjIXdDx76L8ZgXTc=w575-h315-p-k",
        title: "Product Landing Page"
    },
    {
        url: "https://lh3.googleusercontent.com/Oh8zgf6FU50I3BbL3XzdnvJrg1eGglMA_0WuF1mXRoUFvMrgIgis8bhXZTSVMRAft7olUUNzaI5CX5p-qZ2JhtNLqY1D7o4zZBlNqghbTBe61tWmVKEo7UszrP9iAFFSeeBg3ZW2hqY=w2400?source=screenshot.guru",
        imgUrl: "https://lh3.googleusercontent.com/Oh8zgf6FU50I3BbL3XzdnvJrg1eGglMA_0WuF1mXRoUFvMrgIgis8bhXZTSVMRAft7olUUNzaI5CX5p-qZ2JhtNLqY1D7o4zZBlNqghbTBe61tWmVKEo7UszrP9iAFFSeeBg3ZW2hqY=w411-h308-p-k",
        title: "Documentation Page"
    },
    {
        url: "",
        imgUrl: drumMachineCoverImage,
        title: "Drum Machine"
    },
    {
        url: "",
        imgUrl: quoteMachineCoverImage,
        title: "Quote Machine"
    },

];

export function App() {
    return (
        <div className='outer-container' id='portfolio'>
            <Navbar />
            <Welcome name='Gabriela'/>
            <Projects projects={projectList} />
            <Contact />
        </div>
    );
}