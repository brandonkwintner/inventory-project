import React from 'react';

import LoadingSpinner from '../components/LoadingSpinner';

import { Status } from '../../../lib/constants';

interface IProps {
  children: React.ReactNode;
  error?: unknown;
  status: Status;
}
const UseViewState: React.FC<IProps> = ({ children, error, status }) => {
  if (status === Status.LOADING) return <LoadingSpinner />;
  if (status === Status.ERROR) return <>Something went wrong... {error}</>;
  return <>{children}</>;
};

export { UseViewState };
