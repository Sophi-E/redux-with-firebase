import React from 'react';

function ProjectSummary({ project }) {
  return (
    <>
      <div className='card z-depth-0 project-summary'>
        <div className='card-content grey-text text-darken-3'>
          <span className='card-title'>{project.title}</span>
          <p>Posted ny Sophia</p>
          <p className='grey-text'>#rd September, 2am</p>
        </div>
      </div>
    </>
  );
}

export default ProjectSummary;
