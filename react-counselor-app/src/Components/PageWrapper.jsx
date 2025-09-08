import React from 'react';

export default function PageWrapper({ children }) {
  return (
    <div className="container page" style={{ padding: '2rem 1rem' }}>
      {children}
    </div>
  );
}
