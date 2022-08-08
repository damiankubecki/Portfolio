import styled from 'styled-components';
import HeaderSkillsItem from 'components/HeaderSkillsItem/HeaderSkillsItem';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 75vw;
  max-width: 1400px;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.primary};
  box-shadow: 0px 0px 8px -1px rgba(0, 0, 0, 1);
  border-radius: 10px;
`;

export { Wrapper, HeaderSkillsItem as Item };
