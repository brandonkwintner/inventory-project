import React from 'react';
import { Container } from 'react-bootstrap';

interface IProps {
  children: React.ReactNode;
}

const GridContainer: React.FC<IProps> = ({ children }) => {
  return <Container className="p-3">{children}</Container>;
};

export default GridContainer;
