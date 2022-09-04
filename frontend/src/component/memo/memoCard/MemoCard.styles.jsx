import styled from "styled-components";

export const MemoCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  padding: 15px;
  width: 100%;
  min-width: 250px;
  height: 230px;
  border-radius: 20px;

  background-color: ${({ bgcolor }) => `${bgcolor}7f`};

  cursor: pointer;

  transition: all 0.3s ease-in-out;
  overflow: hidden;
  :hover {
    background-color: ${({ bgcolor }) => `${bgcolor}b3`};
    transform: translate(-1px, -2px);
    box-shadow: 3px 3px 5px rgba(98, 57, 51, 0.5);
    transition: transform 0.2s ease-in;
  }
  :active {
    transform: translate(0, 0);
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 100%;
    background-color: ${({ bgcolor }) => `${bgcolor}`};
  }
  @media screen and (max-width: 767px) {
    width: 100%;
    min-width: 200px;
    height: 180px;
  }
`;
