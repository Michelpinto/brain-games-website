import styled from 'styled-components';

interface DivProps {
  columns: number;
}

export const Main = styled.main`
  display: flex;

  & svg {
    font-size: 3rem;
  }

  & section {
    margin: 0 auto;
  }
`;

export const Div = styled.div<DivProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-top: 4rem;
  perspective: 1000px;
`;

export const CardWrapper = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 1rem;
  background-color: #f5f5f5;
  cursor: pointer;
  font-size: 4rem;
  transform-style: preserve-3d;
  transition: 0.5s;
  position: relative;

  &.matched {
    background-color: #5555;
  }
`;

export const Button = styled.button`
  margin-top: 3rem;
  text-align: center;
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  font-weight: 1.8rem;
  cursor: pointer;
  border: 1px solid #1d1d1d;
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  backface-visibility: hidden;
  transition: 0.5s;
`;

export const FrontFace = styled(CardFace)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: #8d8d8d;
`;

export const BackFace = styled(CardFace)`
  transform: rotateY(180deg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
`;
