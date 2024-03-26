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

export const Text = styled.p`
  font-size: 2rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #1d1d1d;
`;

export const Button = styled.button`
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

export const Container = styled.div`
  padding: 2rem;
  background-color: #f5f5f5;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  align-items: flex-end;
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

export const InsideContainer = styled.div`
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
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9;
`;
