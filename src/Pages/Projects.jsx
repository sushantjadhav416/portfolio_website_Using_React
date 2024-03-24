import React from 'react'

const Projects = () => {
  return (
    <div className='projectSlides'>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
           <div class="container">
            <h1>E commerce Web Applications Development and Deployment using Automation Workflows</h1>
            <h2>Description:</h2>
            <p></p>
            <div className="Box_main">
              <img class="mblock" src={require('../Images/Project1_e-shop.png')} alt="E commerce Web Applications"/>
            </div>
           </div>
        </div>
        <div class="carousel-item">
          <div class="container">
          <h1>Bank management System </h1>
          <h2>Description:</h2>
          <p> The java-based Bank Management System is a robust software application built using SWing, AWT, and JDBC Java FramWorks. This System is responsible for optimizing various banking operations. Providing a user-friendly interface for efficient management of customer accounts, transactions, and financial processes.</p>
            <div className="Box_main">
              <img class="mblock" src={require('../Images/Project1_e-shop.png')} alt="E commerce Web Applications"/>
            </div>
           </div>
          </div>
        <div class="carousel-item">
          <div class="container">
            <h1>Fantacy Cricket Game Using python Qt Framwork and SQL-Lite as Backend</h1>
            <div className="Box_main">
              <img class="mblock" src={require('../Images/MY_Fantacy_app.jpg')} alt=""/>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
         <span class="carousel-control-prev-icon" aria-hidden="false"></span>
         <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
         <span class="carousel-control-next-icon" aria-hidden="false"></span>
          <span class="sr-only">Next</span>
      </a>
   </div>
   </div>
  )
}

export default Projects
