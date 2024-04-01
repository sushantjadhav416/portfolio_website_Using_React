import React from 'react';


const Myprojects = () => {

  return (

    <div>

      <h1>My Projects</h1>

      <div className="project-grid">

        <div className="project-item">

          <h2>E-commerce Web Application</h2>

          <p>Description of the project goes here.</p>

          <img src={require('../Images/Project1_e-shop.png')} alt="E-commerce Web Application" />

        </div>

        <div className="project-item">

          <h2>Bank Management System</h2>

          <p>Description of the project goes here.</p>

          <img src={require('../Images/BankManagement_sys.png')} alt="Bank Management System" />

        </div>

        <div className="project-item">

          <h2>Fantasy Cricket Game</h2>

          <p>Description of the project goes here.</p>

          <img src={require('../Images/MY_Fantacy_app.jpg')} alt="Fantasy Cricket Game" />

        </div>

      </div>

    </div>

  );

};


export default Myprojects;