import styled from 'styled-components';
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
`;

const TopSection = styled.div`
  padding: 125px 150px 0;
  height: 75vh;
  background-color: ${({ theme }) => theme.secondary};
  opacity: 0.95;
`;

const BottomSection = styled.div`
  position: relative;
  height: 25vh;
  background-color: ${({ theme }) => theme.primary};
`;

const MyPhoto = styled.div`
  height: 600px;
  width: 550px;
  position: absolute;
  bottom: 25vh;
  left: calc(50% + 200px);
  background-image: url(${meIMG});
  background-position: top center;
  background-size: cover;
  transform: scaleX(-1);
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
