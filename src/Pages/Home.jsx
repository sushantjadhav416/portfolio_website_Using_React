import React from 'react';

const Home = () => {
  const handleDownloadResume = () => {
    const resumeUrl = process.env.PUBLIC_URL + '/Jadhav_Sushant_Resume.pdf'; // Assuming your resume is in the public folder
    const anchor = document.createElement('a');
    anchor.href = resumeUrl;
    anchor.download = 'Jadhav_Sushant_Resume'; // Set the download filename
    anchor.click();
  };
  return (
    <div className="MHome">
        <section id="hero" >
          <div className="container text-center">
            <h1 className="display-4">Software Engineer at HCL Technologies</h1>
            <p className="lead">Passionate about creating innovative solutions.</p>
          </div>
       </section>
       <button onClick={handleDownloadResume}>Download Resume</button>
   </div>
  )
}

export default Home

