import React from 'react';

function HomePage() {
  return (
    <div className="container my-5">
      <header className="text-center mb-5">
        <h1 className="display-4 text-dark">Abdullah Hussain</h1>
        <p className="lead text-secondary">Software Engineer</p>
      </header>

      <section className="mb-5">
        <h2 className="h3 border-bottom pb-2 mb-4">Personal Information</h2>
        <div className="text-center mb-4">
          <img 
            src="./portrait.png"
            width="200" 
            height="200" 
            className="rounded-circle img-thumbnail" 
            alt="Portrait of Abdullah Hussain" 
          />
          <figcaption className="text-muted mt-2">Fig. - This is me in 2022.</figcaption>
        </div>
        <ul className="list-unstyled text-center">
          <li className="mb-2">Bachelor of Software Engineering, NUST-SEECS.</li>
          <li>Self-proclaimed disciple of Hidetaka Miyazaki.</li>
        </ul>
      </section>

      <section className="mb-5">
        <h2 className="h3 border-bottom pb-2 mb-4">Who am I?</h2>
        <p>Aspiring programmer, hailing from Bahawalpur.</p>
        <p>I've always had a love for the visual arts, particularly film, animation and video games.</p>
        <p>I'm not particularly fond of coding... But I am interested in interdisciplinary fields that marry art or biology with programming.</p>
        <p>Massive cartography and music nerd too.</p>
      </section>

      <section className="mb-5">
        <h2 className="h3 border-bottom pb-2 mb-4">Personal Skills</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Programming Languages</h5>
                <p>Competent in, or at least familiar with, programming in C, C++, C#, Python, MATLAB, and SQL.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Conversational Languages</h5>
                <p>Fluent in Urdu, English, and Punjabi.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Technical Tools</h5>
                <p>Knowledge of AutoCAD and the Unity Game Engine.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center mt-5 py-3 border-top">
        <small className="text-muted">&copy; Abdullah Hussain</small>
      </footer>
    </div>
  );
}

export default HomePage;
