import styled from "styled-components";

export const CategoryViewContainer = styled.div`
  padding: 0 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px;
  h1 {
    font-size: 20px;
  }
`;

export const CategoryAddBtn = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  font-weight: bold;
  font-size: 24px;
  transform: translateX(2px);
  cursor: pointer;

  :active {
    transform: scale(0.95);
  }

  svg {
    fill: ${(props) => props.theme.text.content};
  }
`;

export const ListWrapper = styled.div`
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .loading-container {
    height: 30vh;
  }
`;

export const ListContainer = styled.ul`
  padding: 5px 0;
`;
