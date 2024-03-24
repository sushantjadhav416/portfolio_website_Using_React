import React from 'react'

const Contact = () => {
  return (
    <div class="Mycontact">

    <section class="ftco-section">
       <div class="container">
    <div class="row justify-content-center">
    <div class="col-md-6 text-center mb-5">
    <h2 class="heading-section"></h2>
    </div>
    </div>
    <div class="row justify-content-center">
    <div class="col-lg-10 col-md-12">
    <div class="wrapper">
    <div class="row justify-content-center">
    <div class="col-lg-8 mb-5">
    <div class="row">
    <div class="col-md-4">
    <div class="dbox w-100 text-center">
    <div class="icon d-flex align-items-center justify-content-center">
    <span class="fa fa-map-marker"></span>
    </div>
    <div class="text">
    <p><span>Address:</span> Pune , Maharashtra </p>
    </div>
    </div>
    </div>
    <div class="col-md-4">
    <div class="dbox w-100 text-center">
    <div class="icon d-flex align-items-center justify-content-center">
    <span class="fa fa-phone"></span>
    </div>
    <div class="text">
    <p><span>Phone:</span> <a href="tel://919373730950">+919373730950</a></p>
    </div>
    </div>
    </div>
    <div class="col-md-4">
    <div class="dbox w-100 text-center">
    <div class="icon d-flex align-items-center justify-content-center">
    <span class="fa fa-paper-plane"></span>
    </div>
    <div class="text">
    <p><span>Email:</span> <a href="/cdn-cgi/l/email-protection#50393e363f10293f2522233924357e333f3d"><span class="__cf_email__" data-cfemail="e28b8c848da29b8d9790918b9687cc818d8f">sushantjadhav416@gmail.com</span></a></p>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div class="col-lg-8">
    <div class="contact-wrap">
    <h3 class="mb-4 text-center">Get in touch with me</h3>
    <div id="form-message-warning" class="mb-4 w-100 text-center"></div>
    {/* <div id="form-message-success" class="mb-4 w-100 text-center">
    Your message was sent, thank you!
    </div> */}
    <form method="POST" id="contactForm" name="contactForm" class="contactForm">
    <div class="row">
    <div class="col-md-12">
    <div class="form-group">
    <input type="text" class="form-control" name="name" id="name" placeholder="Name"/>
    </div>
    </div>
    <div class="col-md-12">
    <div class="form-group">
    <input type="email" class="form-control" name="email" id="email" placeholder="Email"/>
    </div>
    </div>
    <div class="col-md-12">
    <div class="form-group">
    <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"/>
    </div>
    </div>
    <div class="col-md-12">
    <div class="form-group">
    <textarea name="message" class="form-control" id="message" cols="30" rows="8" placeholder="Message"></textarea>
    </div>
    </div>
    <div class="col-md-12">
    <div class="form-group">
    <input type="submit" value="Send Message" class="btn btn-primary"/>
    <div class="submitting"></div>
    </div>
    </div>
    </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script src="js/jquery.min.js"></script>
    <script src="js/popper.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.validate.min.js"></script>
    <script src="js/main.js"></script>
    <script defer src="https://static.cloudflareinsights.com/beacon.min.js/v84a3a4012de94ce1a686ba8c167c359c1696973893317" integrity="sha512-euoFGowhlaLqXsPWQ48qSkBSCFs3DPRyiwVu3FjR96cMPx+Fr+gpWRhIafcHwqwCqWS42RZhIudOvEI+Ckf6MA==" data-cf-beacon='{"rayId":"854c80e0c919a73f","version":"2024.2.0","token":"cd0b4b3a733644fc843ef0b185f98241"}' crossorigin="anonymous"></script>
    
    
   </div>
  )
}

export default Contact

