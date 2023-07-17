import React from 'react';
import { render} from '@testing-library/react';
import Apprendre from './Apprendre'; 
import Home from '../pages/Home';

test('renders Apprendre component with correct elements', () => {
  const data = [
    { id: 1, digit: 1, stage: 'LOW', value: '1' },
    { id: 2, digit: 2, stage: 'LOW', value: '2' },
    { id: 3, digit: 3, stage: 'LOW', value: 'Fizz' },
  ];

    render(
            <Home>
              <Apprendre data={data} id="test-id" />
            </Home>
          )
});