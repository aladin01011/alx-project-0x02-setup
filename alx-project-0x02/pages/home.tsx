import React from 'react';
import Card from '../components/common/card';

const HomePage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
      <Card title="Card 1" content="This is the content of the first card." />
      <Card title="Card 2" content="Here is some content for the second card." />
      <Card title="Card 3" content="Third card's content goes here." />
    </div>
  );
};

export default HomePage;