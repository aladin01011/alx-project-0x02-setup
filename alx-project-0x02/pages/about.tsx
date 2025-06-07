import React from 'react';
import Button from '@/components/common/Button';
import Header from '@/components/layout/Header';

export default function About() {
  return (
    <>
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">About Page</h1>

        <Button size="small" shape="rounded-sm">Small Rounded-sm</Button>
        <Button size="medium" shape="rounded-md">Medium Rounded-md</Button>
        <Button size="large" shape="rounded-full">Large Rounded-full</Button>
      </div>
    </>
  );
}
