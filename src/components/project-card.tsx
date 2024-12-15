import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">{project.shortDescription}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="badge bg-primary">{project.technologies.join(', ')}</span>
            <Link 
              to={`/projects/${project.id}`} 
              className="btn btn-outline-secondary btn-sm"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
