import React from 'react';

import './style.scss';

export function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-section-header">
                    <h2>Let's work <span className="highlighted">together</span>...</h2>
                    <p className="font-thin">Just send me a message</p>
                </div>
                <div className="contact-links">
                    <a href="" target="_blank" className="btn contact-details">
                    <i className="fab fa-linkedin"></i>
                    Linkedin
                    </a>
                    <a id="profile-link" href="https://github.com/knopgm" target="_blank" className="btn contact-details">
                    <i className="fab fa-github"></i>
                    Github
                    </a>
                    <a href="mailto:knop.gm@gmail.com" target="_blank" className="btn contact-details">
                    <i className="fas fa-at"></i>
                    Send a mail
                    </a>
                    <a href="tel:176-3659-5273" className="btn contact-details">
                    <i className="fas fa-mobile-alt"></i>
                    Call me
                    </a>
                </div>
            </div>
        </section>
    );
}