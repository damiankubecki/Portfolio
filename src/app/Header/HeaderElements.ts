import styled from 'styled-components';
import { media } from 'theme/media';
import backgroundIMG from 'images/headerBackground.jpg';
import meIMG from 'images/me.png';
import HeaderTitle from 'components/HeaderTitle/HeaderTitle';
import HeaderDescription from 'components/HeaderDescription/HeaderDescription';
import HeaderLinks from 'components/HeaderLinks/HeaderLinks';
import HeaderSkills from 'components/HeaderSkills/HeaderSkills';
import HeaderArrowDown from 'components/HeaderArrowDown/HeaderArrowDown';

const Wrapper = styled.header`
  position: relative;
  height: 100vh;
  background-image: url(${backgroundIMG});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: ${media.tablet_S}) {
    height: auto;
  }
`;

const TopSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 125px 150px 0;
  height: calc(100vh - 160px);
  background-color: ${({ theme }) => theme.secondary};
  opacity: 0.95;

  @media (max-width: ${media.laptop}) {
    padding: 125px 50px 0;
  }
  @media (max-width: ${media.tablet_L}) {
    padding: 50px 50px 0;
  }
  @media (max-width: ${media.tablet_S}) {
    padding: 20px 10px 100px;
    height: auto;
  }
`;

const BottomSection = styled.div`
  position: relative;
  height: 160px;
  background-color: ${({ theme }) => theme.primary};

  @media (max-width: ${media.tablet_S}) {
    height: 35px;
  }
`;

const MyPhoto = styled.div`
  height: 600px;
  width: 550px;
  position: absolute;
  bottom: calc(160px + 110px / 2);
  left: calc(50% + 110px);
  background-image: url(${meIMG});
  background-position: top center;
  background-size: cover;
  transform: scaleX(-1);

  @media (max-width: ${media.laptop}) {
    bottom: calc(160px + 100px / 2);
    left: calc(50% + 70px);
  }
  @media (max-width: ${media.tablet_L}) {
    height: 400px;
    width: 370px;
    left: calc(50% + 150px);
    bottom: calc(160px + 90px / 2);
  }
  @media (max-width: ${media.tablet_M}) {
    left: 50%;
  }
  @media (max-width: ${media.tablet_S}) {
    left: auto;
    right: 0;
    height: 290px;
    width: 260px;
    bottom: 60px;
  }
`;

export {
  Wrapper,
  TopSection,
  BottomSection,
  MyPhoto,
  HeaderTitle as Title,
  HeaderDescription as Description,
  HeaderLinks as Links,
  HeaderSkills as Skills,
  HeaderArrowDown as ArrowDown,
};
