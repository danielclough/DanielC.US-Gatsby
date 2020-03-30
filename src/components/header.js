import React from 'react';
import Contact from './contact';

const Header = ({ name, role }) => (
  <header className="md:flex items-center justify-between">
    <div>
      <h1 className="text-primary-500 text-4xl md:text-5xl font-bold tracking-wide leading-tight">
        {name}
      </h1>
      <h2 className="font-light text-lg md:text-2xl text-primary-500 leading-relaxed tracking-widest">
        {role}
      </h2>
    </div>
  </header>
);

export default Header;
