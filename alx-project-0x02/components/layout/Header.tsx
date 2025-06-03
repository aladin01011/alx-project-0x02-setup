// components/layout/Header.tsx
import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <h1>Welcome to My Next.js Project</h1>
      <nav>
        <ul>
          <li><Link href="/">Home (Root)</Link></li>
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;