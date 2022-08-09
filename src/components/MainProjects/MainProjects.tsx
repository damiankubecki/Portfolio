import React from 'react';
import { projectsList } from 'config';
import { Wrapper, ProjectItem } from './MainProjectsElements';

const MainProjects = () => (
  <Wrapper>
    {projectsList.map((item, index) => (
      <ProjectItem
        key={item.name}
        name={item.name}
        note={item.note}
        liveLink={item.liveLink}
        codeLink={item.codeLink}
        image={item.image}
        odd={!!(index % 2)}
      />
    ))}
  </Wrapper>
);

export default MainProjects;
