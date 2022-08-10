import React from 'react';
import { skillsList } from 'config';
import { IProject } from 'types/types';
import {
  Wrapper,
  ImageContainer,
  DescriptionContainer,
  Title,
  Note,
  TechnologiesContainer,
  TechnologyItem,
  ButtonsContainer,
  Button,
} from './MainProjectItemElements';

interface Props extends IProject {
  odd?: boolean;
}

const MainProjectItem = ({
  name,
  note,
  image,
  liveLink,
  codeLink,
  technologies,
  odd = false,
}: Props) => {
  return (
    <Wrapper>
      <DescriptionContainer>
        <Title>{name}</Title>
        <Note>{note}</Note>
        <ButtonsContainer>
          {liveLink && <Button type="live" link={liveLink} />}
          {codeLink && <Button type="code" link={codeLink} />}
        </ButtonsContainer>
        <TechnologiesContainer>
          {technologies?.map(item => {
            const icon = skillsList.find(skill => skill.name === item);

            return icon ? <TechnologyItem key={item} src={icon.src} alt={icon.name} /> : undefined;
          })}
        </TechnologiesContainer>
      </DescriptionContainer>

      <ImageContainer className={odd ? 'odd' : ''}>
        <img src={image} alt={`Obraz dla ${name}`} />{' '}
      </ImageContainer>
    </Wrapper>
  );
};

export default MainProjectItem;
