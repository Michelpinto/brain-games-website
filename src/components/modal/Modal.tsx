import React from 'react';

import { Container } from './modalStyles';

interface IProps {
  children: React.ReactNode;
}

const Modal: React.FC<IProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Modal;
