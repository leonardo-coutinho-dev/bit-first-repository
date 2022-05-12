import React from 'react';

export interface ButtonProps {
  text: string,
};

export function Button ({text}: ButtonProps) {
  return <button>{text}</button>;
} 