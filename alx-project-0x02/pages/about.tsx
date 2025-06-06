import React from 'react';
import Button from '@/components/common/Button';

export default function About() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>

      <Button size="small" shape="rounded-sm">Small Rounded-sm</Button>
      <Button size="medium" shape="rounded-md">Medium Rounded-md</Button>
      <Button size="large" shape="rounded-full">Large Rounded-full</Button>
    </div>
  );
}