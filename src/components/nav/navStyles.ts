import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  gap: 2rem;

  & button {
    padding: 1rem;
    font-size: 2.5rem;
    cursor: pointer;
    border-radius: 0.5rem;
    background-color: inherit;
    border: 1px solid #f5f5f5;
    color: #f5f5f5;
    transition: all 0.2s;
  }

  & button:hover {
    transform: translateY(-3px);
    box-shadow: 0px 0px 8px 4px rgba(231, 166, 26, 1);
  }
`;
