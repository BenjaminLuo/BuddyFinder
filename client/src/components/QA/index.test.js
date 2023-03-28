import { render, screen, fireEvent, getByText } from "@testing-library/react";
import AuthDetails from "../Authentication/AuthDetails";
import QA from "./index.js";
import { MemoryRouter } from "react-router-dom";
import React from "react";

jest.mock('firebase/auth', () => ({
    getAuth: jest.fn().mockReturnValue({}),
    onAuthStateChanged: jest.fn().mockReturnValue({})
}));

describe('QA', () => {

    function renderComponent() {
        render(
            <AuthDetails>
                <QA />
            </AuthDetails>,
            { wrapper: MemoryRouter }
        );
    }

    it('Tests if the Textfield description is shown', () => {
        renderComponent();
        expect(screen.getByText(`Add your status update`)).toBeInTheDocument();
    });
})