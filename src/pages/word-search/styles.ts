import styled from 'styled-components';

export const Main = styled.main`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 10rem;

  & nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & svg {
      font-size: 3rem;
    }
  }
`;

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 4rem;
`;

export const Div = styled.div`
  border-radius: 0.5rem;
  background-color: inherit;
  border: 1px solid #f5f5f5;
  color: #f5f5f5;
  padding: 1.5rem;
  cursor: pointer;
`;
