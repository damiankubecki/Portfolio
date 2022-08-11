import styled from 'styled-components';
import { media } from 'theme/media';

const Wrapper = styled.div`
  margin: 20px 5px;

  @media (max-width: ${media.tablet_S}) {
    margin: 20px 15px;
    padding: 0 0 25px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    flex-grow: 1;
  }
`;

const Item = styled.a`
  margin-right: 25px;

  @media (max-width: ${media.tablet_S}) {
    margin: 10px 0;
  }
`;

export { Wrapper, Item };
