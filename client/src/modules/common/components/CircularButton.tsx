import React from 'react';
import { Button } from 'react-bootstrap';
import classNames from 'classnames';

interface IProps {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}

const CircularButton: React.FC<IProps> = ({ children, className, onClick }) => {
  return (
    <Button className={classNames('btn btn-primary btn-circle', className)} onClick={onClick}>
      {children}
    </Button>
  );
};

export default CircularButton;
