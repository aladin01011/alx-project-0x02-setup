import React from 'react';
import Card from '../components/common/card';

const HomePage = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Home Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card title="Card 1" content="This is the first card." />
        <Card title="Card 2" content="This is the second card with more content." />
        <Card title="Card 3" content="You can reuse this card anywhere!" />
      </div>
    </div>
  );
};

export default HomePage;