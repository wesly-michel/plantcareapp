import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Plant from './Plant';
import { BrowserRouter } from 'react-router-dom'; // <-- Import the BrowserRouter

test('it displays the plant name and care details', () => {
  const mockPlant = {
    name: 'Test Plant',
    care: {
      q1: 'Water once a week',
      q2: 'Keep in indirect sunlight',
    },
  };

  const { getByText } = render(
    <BrowserRouter> 
      <Plant plant={mockPlant} />
    </BrowserRouter>
  );

  expect(getByText('Test Plant')).toBeInTheDocument();
  expect(getByText('Water once a week')).toBeInTheDocument();
  expect(getByText('Keep in indirect sunlight')).toBeInTheDocument();
});
