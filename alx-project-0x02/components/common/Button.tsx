import React from 'react';
import { type ButtonProps } from '@/interfaces';

const sizeClasses = {
  small: 'px-2 py-1 text-sm',
  medium: 'px-4 py-2 text-base',
  large: 'px-6 py-3 text-lg',
};

const shapeClasses = {
  'rounded-sm': 'rounded-sm',
  'rounded-md': 'rounded-md',
  'rounded-full': 'rounded-full',
};

export default function Button({ size, shape, children }: ButtonProps) {
  return (
    <button className={`${sizeClasses[size]} ${shapeClasses[shape]} bg-blue-500 text-white`}>
      {children}
    </button>
  );
}
