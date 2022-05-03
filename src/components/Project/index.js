import React from 'react';
import foodFest from '../../assets/images/foodFest.png';
import notetaker from '../../assets/images/notetaker.png';
import passwordGen from '../../assets/images/passwordGen.png';
import weatherDash from '../../assets/images/weatherDash.png';
import houstonVolleyballSocial from '../../assets/images/houstonVolleyballSocial.png';

function Project() {
    return (
    <section className="mx-5" id="project">
        <h2>Projects</h2>
            <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href="https://santanam23.github.io/food-festival/">
                <img src={foodFest} alt="Food Festival" width="600" height="400" />
            </a>
            <div className="desc">This is a link to my Food Fest PWA</div>
            </div>

            <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href="https://gentle-atoll-41675.herokuapp.com/">
                <img src={notetaker} alt="Notetaker" width="600" height="400" /> 
            </a>
            <div className="desc">This is a link to Notetaker app</div>
            </div>

            <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href="https://santanam23.github.io/Password-Generator/">
                <img src={passwordGen} alt="Password Generator" width="600" height="400" />
            </a>
            <div className="desc">This is a link to Password Generator website</div>
            </div>

            <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href="https://santanam23.github.io/Weather-Dashboard/">
                <img src={weatherDash} alt="Weather Dashboard" width="600" height="400" />
            </a>
            <div className="desc">This is a link to the Weather Dashboard</div>
            </div>

            <div className="gallery">
            <a target="_blank" rel="noopener noreferrer" href="https://secret-beyond-82045.herokuapp.com/">
                <img src={houstonVolleyballSocial} alt="Houston Volleyball Social" width="600" height="400" /> 
            </a>
            <div className="desc">This is a link to my Project</div>
            </div>
    </section>
    )
}
export default Project;