// import { screen, fireEvent } from '../../../setupTests'; 
// import React from 'react';
// import AuthForm from '../components/AuthForm';
// import { renderWithProviders } from '../../../test/app-test';

// describe('AuthForm tests', () => {
//   it('should render the email input field', () => {
//     renderWithProviders(<AuthForm />);
//     const emailInput = screen.getByPlaceholderText('Enter email');
//     expect(emailInput).toBeInTheDocument();
//   });

//   it('should allow entering an email address', () => {
//     renderWithProviders(<AuthForm />);
//     const emailInput = screen.getByPlaceholderText('Enter email');
//     const email = 'test@example.com';

//     fireEvent.change(emailInput, { target: { value: email } });

//     expect(emailInput).toHaveValue(email);
//   });
// });

// describe('AuthForm tests password', () => {
//   it('should render the password input field', () => {
//     renderWithProviders(<AuthForm />);
//     const passwordInput = screen.getByPlaceholderText('Enter password');
//     expect(passwordInput).toBeInTheDocument();
//   });

//   it('should allow entering an password', () => {
//     renderWithProviders(<AuthForm />);
//     const passwordInput = screen.getByPlaceholderText('Enter password');
//     const password = 'Gokul@123';
//     fireEvent.change(passwordInput, { target: { value: password } });
//     expect(passwordInput).toHaveValue(password);
//   });
// });
