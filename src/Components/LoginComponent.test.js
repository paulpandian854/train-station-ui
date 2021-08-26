import { render, screen, cleanup } from '@testing-library/react';
import LoginComponent from './LoginComponent'
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from "react-redux";

import configureStore from '../Redux/store';
test('Test Login Component', () => {
    expect(1).toBe(1);
})

test('Should Render Login Component', () => {
    render(
        <Provider store={configureStore()}>
            <BrowserRouter>
                <LoginComponent />
            </BrowserRouter>
        </Provider>
    );
    const loginElement = screen.getByTestId('login-1');
    expect(loginElement).toBeInTheDocument();
    expect(loginElement).toHaveClass('container-fluid');
})