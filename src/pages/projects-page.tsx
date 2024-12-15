import React from 'react';
import ProjectCard from '../components/project-card';
import PROJECTS from '../data/project-data';

function ProjectsPage() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">My Projects</h1>
      <div className="row">
        {PROJECTS.map(project => (
          <ProjectCard 
            key={project.id} 
            project={project} 
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
