import React from 'react';
import { useParams } from 'react-router-dom';
import PROJECTS from '../data/project-data';

function ProjectDetailPage() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) return <div className="container mt-5">Project not found</div>;

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h2>{project.name}</h2>
        </div>
        <div className="card-body">
          <p>{project.fullDescription}</p>
          <div className="row">
            <div className="col-md-6">
              <h4>Technologies Used</h4>
              <ul className="list-group">
                {project.technologies.map((tech, index) => (
                  <li key={index} className="list-group-item">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-6">
              <h4>Project Details</h4>
              <p><strong>Date:</strong> {project.date}</p>
              <p><strong>Role:</strong> {project.role}</p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPage;
