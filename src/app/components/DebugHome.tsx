import React from 'react';

export function DebugHome() {
  return (
    <div
      style={{
        backgroundColor: 'red',
        color: 'white',
        fontSize: '40px',
        padding: '100px',
        zIndex: 9999,
        position: 'relative',
      }}
    >
      <h1>DEBUG HOME ACTIVE</h1>
      <p>If you see this, the Router and Layout are working.</p>
    </div>
  );
}
