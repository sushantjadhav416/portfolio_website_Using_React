import React from 'react'

const Nav_Header = () => {
  return (
 <header>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="/">Hi, i am Sushant Vikas Jadhav</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="About">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="projects">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</header>

  )
}

export default Nav_Header
