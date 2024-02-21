import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  gap: 50rem;

  & svg {
    font-size: 3rem;
  }
`;

export const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-top: 4rem;

  & span {
    width: 8rem;
    height: 8rem;
    border-radius: 1rem;
    background-color: #f5f5f5;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 4rem;
  }
`;
