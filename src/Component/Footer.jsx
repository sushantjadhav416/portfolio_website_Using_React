import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-dark text-white py-4">
       <div class="container">
          <div class="row">
              <div class="col-md-6 text-center text-md-left">
                  <p>&copy; 2024 John Doe. All rights reserved.</p>
              </div>
               <div class="col-md-6 text-center text-md-right">
                  <ul class="list-inline mb-0">
                     <li class="list-inline-item"><a href="https://github.com/sushantjadhav416"><img alt="GitHub"/></a></li>
                     <li class="list-inline-item"><a href="https://www.linkedin.com/in/sushant-jadhav-3209a521a/"><img alt="LinkedIn"/></a></li>
                  </ul>
              </div>
         </div>
      </div>
   </footer>

  )
}

export default Footer
