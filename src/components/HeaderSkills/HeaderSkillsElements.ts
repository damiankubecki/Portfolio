import styled from 'styled-components';
import { media } from 'theme/media';
import HeaderSkillsItem from 'components/HeaderSkillsItem/HeaderSkillsItem';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
  width: 75vw;
  max-width: 1400px;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0px 0px 8px -1px rgba(0, 0, 0, 1);
  border-radius: 10px;

  @media (max-width: ${media.laptop}) {
    height: 100px;
    width: 80vw;
  }
  @media (max-width: ${media.tablet_L}) {
    height: 90px;
    width: 90vw;
  }
  @media (max-width: ${media.tablet_S}) {
    height: 70px;
    width: 100vw;
    border-radius: 0;
  }
`;

export { Wrapper, HeaderSkillsItem as Item };
