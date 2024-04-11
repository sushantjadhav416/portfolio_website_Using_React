import React from 'react';

import './style.css';


const About = () => {


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
  return (
    <div class="AboutMe"> 
      <header id="header">
         <h1>About Me</h1>
     </header>
  <main>
    <section class="intro">
      <div class="container">
        <h2>Hi, I'm Sushant Vikas jadhav</h2>
        <p>A seasoned IT professional with strong knowledge, teamwork skills, and coordination capabilities, passionate about achieving goals. Experienced in developing web applications using C#, OOP, ASP.Net, Visual Studio, and ASP.NET MVC Web APIs. Additionally, I have a keen interest in implementing DevOps practices using tools like Docker, Kubernetes, and Jenkins. I am currently seeking a challenging position to leverage my skills and contribute to the success of an innovative organization.</p>
      </div>
    </section>
    <section class="details">
      <div class="container">
        <h2>Personal Information</h2>
        <p class="text-left">
              Name: Sushant Vikas Jadhav
            </p>
            <p class="text-left">
              Age: 23
            </p>
            <p class="text-left">
              Address: Pune Maharashtra, India.
            </p>
            <p class="text-left">
              Contact: +919373730950
            </p>
      </div>
    </section>
    <section class="details">
      <div class="container">
        <h2>More About Me</h2>
        <p>I specialize in Devops practices with Microsoft Azure Cloud and Backend API development and have 1+ years of experience in the field.</p>
        <p>Feel free to explore my portfolio and get in touch!</p>
      </div>
    </section>
  </main>
    </div>
  )
}

export default About
