import styled from 'styled-components';

const Title = styled.h2`
  position: relative;
  padding: 0 6px 3px;
  border-bottom: 3px solid ${({ theme }) => theme.additional};
  color: ${({ theme }) => theme.fontColor};
  font-weight: ${({ theme }) => theme.semiFont};
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;

export { Title };
