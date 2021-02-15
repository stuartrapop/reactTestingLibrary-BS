import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App />);
  // find an element with a role of button and text of 'Change to Blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});

  //expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red'});

  //click button
  fireEvent.click(colorButton);

  // expect the background color to be blue
  expect(colorButton).toHaveStyle({backgroundColor : 'blue'});

  // exptect the button text to be change to red
  expect(colorButton.textContent).toBe('Change to red');


});


test('initial conditions', () => {
  render(<App />);
  // check the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue'});
  expect(colorButton).toBeEnabled();

  // check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();

   //click checkbox
   fireEvent.click(checkbox);
   expect(checkbox).toBeChecked();

    // check the button is disabled
    expect(colorButton).not.toBeEnabled();

       //click checkbox
   fireEvent.click(checkbox);
   expect(checkbox).not.toBeChecked();

    // check the button is not disabled
    expect(colorButton).toBeEnabled();


});
