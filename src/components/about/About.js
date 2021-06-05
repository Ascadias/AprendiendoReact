import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about">
            <div className="about__desc">
                <h3>Déjame Hablarte Sobre Mi</h3>
                <p>Soy un Desarrollador Web FullStack Junior, Especializado en Javascript</p>
                <a href=""target="_blank" className="about__a">
                    <button classname="about__button">
                        <h6>Descarga mi CV</h6>
                    </button>
                </a>
            </div>
            <div className="about__img">
                <img
                    src="https://cdn.pixabay.com/photo/2017/08/10/08/47/laptop-2620118_960_720.jpg"
                    alt="about"
                    />
            </div>
        </div>
    )
}

export default About
