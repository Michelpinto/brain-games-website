import styled from 'styled-components';

export const Main = styled.main`
  display: flex;

  & svg {
    font-size: 3rem;
  }

  & section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;

    margin: 0 auto;
  }

  & ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 2rem;

    & li {
      font-size: 1.8rem;
      padding: 1rem 4rem;
      background-color: inherit;
      border: 1px solid #f5f5f5;
      border-radius: 0.5rem;
    }
  }
`;
