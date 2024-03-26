import styled from 'styled-components';

export const Container = styled.main`
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
`;
