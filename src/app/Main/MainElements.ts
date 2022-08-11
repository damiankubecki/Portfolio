import styled from 'styled-components';
import { media } from 'theme/media';
import MainTitle from 'components/MainTitle/MainTitle';
import MainProjects from 'components/MainProjects/MainProjects';

const Wrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  min-height: 100vh;
  width: 100%;
  max-width: 1200px;
  padding: 30px 0 0;

  @media (max-width: ${media.laptop}) {
    width: 80vw;
  }
  @media (max-width: ${media.tablet_M}) {
    width: 93vw;
  }
`;

export { Wrapper, MainTitle as Title, MainProjects as Projects };
