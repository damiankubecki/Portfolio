import styled from 'styled-components';

const Wrapper = styled.p`
  width: 850px;
  margin: 10px 0 0;
  padding-left: 5px;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.semiFont};
`;

export { Wrapper };
