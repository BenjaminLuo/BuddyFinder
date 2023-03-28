import { render, screen, fireEvent, getByText } from "@testing-library/react";
import AuthDetails from "../Authentication/AuthDetails";
import Matching from "./index.js";
import { MemoryRouter } from "react-router-dom";
import React from "react";

jest.mock('firebase/auth', () => ({
    getAuth: jest.fn().mockReturnValue({}),
    onAuthStateChanged: jest.fn().mockReturnValue({})
}));

describe('Matching', () => {

    function renderComponent() {
        render(
            <AuthDetails>
                <Matching />
            </AuthDetails>,
            { wrapper: MemoryRouter }
        );
    }

    it('Tests if on of the option is ', () => {
        renderComponent();
        expect(screen.getByText(`PAC`)).toBeInTheDocument();
    });
})