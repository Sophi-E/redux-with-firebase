import React from 'react';

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-contact'>
          <span className='card-title'>Project Title - {id}</span>
          <p>
            lorem james ius hshoas hshdbs kellyu isyydwsoy hsqoueyei uydguedu
          </p>
        </div>
        <div className='card-action grey lighten-4 grey text'>
          <div>Posted by sophia</div>
          <div>23rd september</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
