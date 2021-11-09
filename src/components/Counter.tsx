import React from 'react';

interface CounterProps {
  message: string;
}

const Counter: React.FC<CounterProps> = ({ message }) => {
  return (
    <>
      Message is {message}
    </>
  );
};

export default Counter;