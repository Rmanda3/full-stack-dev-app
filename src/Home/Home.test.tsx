import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Page Test Suite', ()=>{
  test('renders learn react link', () => {
    render(<Home/>);
    const linkElement = screen.getByLabelText(/Name1:/i);
    expect(linkElement).toBeInTheDocument();
  });
});
