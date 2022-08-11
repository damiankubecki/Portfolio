import styled from 'styled-components';
import { media } from 'theme/media';

const Wrapper = styled.p`
  width: 750px;
  margin: 10px 0 0;
  padding-left: 5px;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.semiFont};

  @media (max-width: ${media.tablet_M}) {
    width: 500px;
  }
  @media (max-width: ${media.tablet_S}) {
    width: 90vw;
    text-align: center;
  }
`;

export { Wrapper };
