import React from 'react';
import { render} from '@testing-library/react';
import Home from '../pages/Home';
import Play from './Play';

test('renders Play component with correct elements', () => {
  const data = [
    { id: 1, digit: 1, stage: 'LOW', value: '1' },
    { id: 2, digit: 2, stage: 'LOW', value: '2' },
    { id: 3, digit: 3, stage: 'LOW', value: 'Fizz' },
  ];

    render(
            <Home>
              <Play data={data} id="test-id" />
            </Home>
          )
});