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

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 46.5rem;
  max-height: 15rem;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 0.5rem;
  transition: all 0.2s ease-in;
  overflow-y: scroll;

  padding: 2rem;
  color: #1d1d1d;
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  line-height: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  & div {
    display: flex;
    gap: 2rem;

    & button {
      padding: 0.8rem 2rem;
      border-radius: 0.8rem;
      font-weight: 1.8rem;
      cursor: pointer;
      border: 1px solid #f5f5f5;
      color: #f5f5f5;
      background-color: inherit;

      display: flex;
      align-items: center;
      gap: 0.5rem;
      border: 1px solid #1d1d1d;
      color: #1d1d1d;
    }
  }
`;
