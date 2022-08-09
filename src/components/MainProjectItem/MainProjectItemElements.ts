import styled from 'styled-components';
import MainProjectButton from 'components/MainProjectButton/MainProjectButton';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin: 50px 0 100px;
`;

const ImageContainer = styled.div`
  flex-basis: 50%;
  order: 3;

  & > img {
    width: 100%;
  }

  &.odd {
    order: 1;
  }
`;

const DescriptionContainer = styled.div`
  padding: 10px 50px;
  flex-basis: 50%;
  order: 2;
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

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 0;
`;

export {
  Wrapper,
  ImageContainer,
  DescriptionContainer,
  Title,
  Note,
  ButtonsContainer,
  MainProjectButton as Button,
};
