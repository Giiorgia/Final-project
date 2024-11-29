import React from 'react';

const Header = () => {
  return (
    <header className="app_header">
        <div className='fitness_header'>
        <div className="logo">
        <a href="" alt="logo"><img className='app_logo' src="../logo.jpeg" alt='logo'/></a>
      </div>
      <nav>
        <ul className='header_info'>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
        </div>
        <h1 className='header_title'>What muscle do you want to train?</h1>
    </header>
  );
};

export default Header;