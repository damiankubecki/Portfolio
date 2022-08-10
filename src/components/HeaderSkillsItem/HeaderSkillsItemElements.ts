import styled from 'styled-components';

const Wrapper = styled.div`
  height: 60%;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  height: 100%;
  filter: grayscale(30%);
  animation: show 0.25s linear both;
  cursor: pointer;

  @keyframes show {
    0% {
      transform: scale(0.3);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Text = styled.p`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.fontColor};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.boldFont};
  font-style: italic;
  transform: rotate(-15deg);
  cursor: default;
`;

export { Wrapper, Img, Text };
