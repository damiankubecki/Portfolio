import styled, { css } from 'styled-components';

const Button = styled.a`
  margin: 0 20px;
  width: 125px;
  padding: 8px 0;
  border-radius: 6px;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.m};
  text-decoration: none;
  text-align: center;
  transition: 0.1s;
  cursor: pointer;

  ${({ type }) =>
    type === 'live'
      ? css`
          border: 2px solid ${({ theme }) => theme.additional};
          background-color: ${({ theme }) => theme.additional};

          &:hover {
            background-color: transparent;
          }
        `
      : css`
          border: 2px solid ${({ theme }) => theme.fontColor};
          color: ${({ theme }) => theme.fontColor};

          &:hover {
            border-color: ${({ theme }) => theme.additional};
          }
        `}
`;

export { Button };
