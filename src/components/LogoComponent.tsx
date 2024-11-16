import React from 'react';

const LogoComponent = () => {
  return (
    <img
      src="/protege.png" // Path relative to the `public` folder
      alt="Protégé Logo"
      style={{
        width: '120px', // Adjust size as needed
        height: 'auto',
      }}
    />
  );
};

export default LogoComponent;
