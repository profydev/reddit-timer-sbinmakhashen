import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// eslint-disable-next-line import/no-extraneous-dependencies
import { MemoryRouter } from 'react-router';
import App from './App';

function setup() {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
  );
}
describe('Header', () => {
  test('logo should point to the home page when clicked', () => {
    setup();
    const logoLink = screen.getByRole('link', { name: /logo/i });
    userEvent.click(logoLink);
    /*
    **Personal note: continue the header testing when there is
    content to test for in the home page later
    */
    // expect()
  });
});
