import React from 'react'

const Nav_Header = () => {
  return (
 <header className="Mynev">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <a className="navbar-brand" href="/">Hi, i am Sushant Vikas Jadhav</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="About">About Me</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="Skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

  )
}

export default Nav_Header
