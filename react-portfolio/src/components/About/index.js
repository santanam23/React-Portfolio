import React from 'react';
// import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className='my-5'>
      <h1 id="about">Who am I?</h1>
      <div className="my-2">
        <p>
        I graduated from the University of Houston with a BA in Communications in 2015. After college, I decided to stay in my line of work and become a General Manager for Chipotle Mexican Grill. I was a General Manager for six years. During the pandemic, I realized I wanted to go back to school and focus on my passion for tech. In May 2020, I placed my resignation and decided to enroll in a coding boot camp. Rice University had a program starting in November so I decided to wait until Novenmber to start school. 
        </p>
      </div>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
    </section>
  );
}

export default About;
