import styled from 'styled-components';
import { media } from 'theme/media';
import MainProjectButton from 'components/MainProjectButton/MainProjectButton';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 50px 0 100px;

  @media (max-width: ${media.tablet_S}) {
    margin: 30px 0 75px;
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  flex-basis: 50%;
  display: flex;
  align-items: center;
  order: 3;

  & > img {
    width: 100%;
  }

  &.odd {
    order: 1;
  }

  @media (max-width: ${media.tablet_M}) {
    flex-basis: 45%;
  }
  @media (max-width: ${media.tablet_S}) {
    flex-direction: column;

    & > img {
      width: 80%;
    }

    &.odd {
      order: 3;
    }
  }
`;

const DescriptionContainer = styled.div`
  padding: 10px 50px;
  flex-basis: 50%;
  order: 2;

  @media (max-width: ${media.tablet_M}) {
    padding: 5px 15px;
    flex-basis: 55%;
  }
  @media (max-width: ${media.tablet_S}) {
    text-align: center;
  }
`;

const Title = styled.h3`
  margin: 0 0 15px;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.boldFont};
  font-style: italic;
  text-align: center;
`;

const Note = styled.p`
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.semiFont};
`;

const TechnologiesContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const TechnologyItem = styled.img`
  height: 45px;
  margin: 0 2px;
  filter: grayscale(30%);
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;

export {
  Wrapper,
  ImageContainer,
  DescriptionContainer,
  Title,
  Note,
  TechnologiesContainer,
  TechnologyItem,
  ButtonsContainer,
  MainProjectButton as Button,
};
