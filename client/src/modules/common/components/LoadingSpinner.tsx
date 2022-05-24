import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
