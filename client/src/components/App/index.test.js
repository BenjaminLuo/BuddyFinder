import { render, screen, fireEvent, getByText } from "@testing-library/react";
import AuthDetails from '../Authentication/AuthDetails'
import App from "./index.js";
import { MemoryRouter } from "react-router-dom";
import React from 'react'

jest.mock('firebase/auth', () => ({
    getAuth: jest.fn().mockReturnValue({}),
    onAuthStateChanged: jest.fn().mockReturnValue({})
}));


describe('App', () => {

    function renderComponent() {
        render(
            <AuthDetails>
                <App />
            </AuthDetails>,
            { wrapper: MemoryRouter }
        );
    }

    // Tests if the dropdown is functional and its elements exist
    it('dropdown', () => {
        renderComponent();
        expect(screen.getByTestId('dropdownButton')).toBeTruthy();
        fireEvent.click(screen.getByTitle("dropbutton"));
        expect(screen.getByTestId('contact')).toBeTruthy();
        expect(screen.getByTestId('faq')).toBeTruthy();
    });
})