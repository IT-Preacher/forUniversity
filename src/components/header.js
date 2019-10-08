import React from 'react';

function Header() {
  return(
    <Navbar />
  );
}

function Navbar(){
  return(
    <div className="header">
      <header>
        <div className="Logo text-logo"><span>Avia-Tickets</span></div>
      </header>
    </div>
  );
}

export default Header;
