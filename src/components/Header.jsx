import React from 'react';

export default function Header() {
  return (
    <>
      <nav className="navbar fixed-top bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-center">
          <div className="d-flex align-items-center justify-content-center">
            {/* Image */}
            <img
              src="/icon.svg"
              alt="Logo"
              width="70"
              height="50"
              className="d-inline-block me-2"
            />
            {/* Text */}
            <a className="navbar-brand" href="#" style={{ fontSize: '1.5rem' }}>LogicLagoon</a>
          </div>
        </div>
      </nav>
    </>
  );
}
