import styled from 'styled-components';

const Wrapper = styled.footer``;

const Text = styled.p`
  padding: 5px 0;
  color: ${({ theme }) => theme.additional};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.boldFont};
  text-align: center;
  font-style: italic;
`;

export { Wrapper, Text };
