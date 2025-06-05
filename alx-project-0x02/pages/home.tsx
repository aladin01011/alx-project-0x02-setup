import React from 'react';
import Card from '../components/common/Card.tsx;

export default function Home() {
  return (
    <div className="p-4">
      <Card title="Card One" content="This is the first card." />
      <Card title="Card Two" content="This is the second card." />
    </div>
  );
}
