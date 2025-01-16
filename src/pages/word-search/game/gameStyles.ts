import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  gap: 4rem;

  & svg {
    font-size: 3rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin: 0 auto;
`;

export const Section = styled.section`
  display: flex;
  gap: 4rem;

  & div {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(14, 1fr);
    grid-column-gap: 0px;
    border: 1px solid #f5f5f5;

    & span {
      border: 1px solid #5555;
      padding: 1rem;
      font-size: 1.8rem;
      font-weight: 600;
    }
  }

  & ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    align-items: flex-start;
    gap: 1rem;

    & li {
      font-size: 1.7rem;
    }

    & li.selectedWord {
      color: #5555;
    }
  }
`;

export const RestartBtn = styled.button`
  padding: 1rem;
  font-size: 1.7rem;
  border-radius: 0.5rem;
  background-color: inherit;
  color: #f5f5f5;
  border: 1px solid #f5f5f5;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;
