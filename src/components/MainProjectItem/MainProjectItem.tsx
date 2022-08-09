import React from 'react';
import { IProject } from 'types/types';
import {
  Wrapper,
  ImageContainer,
  DescriptionContainer,
  Title,
  Note,
  ButtonsContainer,
  Button,
} from './MainProjectItemElements';

interface Props extends IProject {
  odd?: boolean;
}

const MainProjectItem = ({ name, note, image, liveLink, codeLink, odd = false }: Props) => {
  return (
    <Wrapper>
      <DescriptionContainer>
        <Title>{name}</Title>
        <Note>{note}</Note>
        <ButtonsContainer>
          {liveLink && <Button type="live" link={liveLink} />}
          {codeLink && <Button type="code" link={codeLink} />}
        </ButtonsContainer>
      </DescriptionContainer>
      <ImageContainer className={odd ? 'odd' : ''}>
        <img src={image} alt={`Obraz dla ${name}`} />{' '}
      </ImageContainer>
    </Wrapper>
  );
};

export default MainProjectItem;
