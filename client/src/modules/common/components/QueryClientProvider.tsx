import React from 'react';
import { QueryClient, QueryClientProvider as Provider } from 'react-query';

interface IProps {
  children: React.ReactNode;
}
const QueryClientProvider: React.FC<IProps> = ({ children }) => {
  const queryClient = new QueryClient();
  return <Provider client={queryClient}>{children}</Provider>;
};

export default QueryClientProvider;
