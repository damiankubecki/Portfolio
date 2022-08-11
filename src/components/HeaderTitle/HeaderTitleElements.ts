import styled from 'styled-components';
import { media } from 'theme/media';

const Title = styled.h1`
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  font-weight: ${({ theme }) => theme.semiFont};

  @media (max-width: ${media.tablet_S}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    text-align: center;
  }
`;

const Subtitle = styled.h2`
  margin: 5px 5px;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.semiFont};

  @media (max-width: ${media.tablet_S}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    text-align: center;
  }
`;

export { Title, Subtitle };
