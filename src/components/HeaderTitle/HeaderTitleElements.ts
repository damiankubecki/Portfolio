import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  font-weight: ${({ theme }) => theme.boldFont};
`;

const Subtitle = styled.h2`
  margin: 5px 5px;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.lightFont};
`;

export { Title, Subtitle };
