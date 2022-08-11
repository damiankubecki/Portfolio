import styled from 'styled-components';
import { media } from 'theme/media';

const Wrapper = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  animation: move 2s linear infinite;
  cursor: pointer;

  @keyframes move {
    0% {
      transform: translate(-50%, 0);
    }
    90% {
      transform: translate(-50%, 15px);
    }
    100% {
      transform: translate(-50%, 0);
    }
  }

  @media (max-width: ${media.tablet_M}) {
    bottom: 25px;
  }
`;

export { Wrapper };
