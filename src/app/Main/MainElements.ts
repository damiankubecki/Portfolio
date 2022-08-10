import styled from 'styled-components';
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
  padding: 30px 0;
`;

export { Wrapper, MainTitle as Title, MainProjects as Projects };
