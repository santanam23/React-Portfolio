import React from 'react';

function Resume() {
  const first = ['HTML', 'CSS', 'Javascript', 'responsive design', 'react']
  const firstList = first.map(first => <ul>{first}</ul>)
  const second = ['APIs', 'Node', 'Express', 'MySQL, Sequeulze', 'MongoDB', 'Rest']
  const secondList = second.map(second => <ul>{second}</ul>)
    return (
    <section>
    <div>
      <h1 className="Resume" id="resume">Front-End Proficiency</h1>
    {firstList}
    </div>
    <div>
      <h1 className="Resume" id="resume">Back-End Proficiency</h1>
    {secondList}
    </div>
    </section>
    );
}

export default Resume;