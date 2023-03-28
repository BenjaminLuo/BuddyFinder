import { render, screen, getByRole, fireEvent } from "@testing-library/react";
import Landing from "./index.js";
import { MemoryRouter } from "react-router-dom";
import AuthDetails from '../Authentication/AuthDetails'

jest.mock('firebase/auth', () => ({
    getAuth: jest.fn().mockReturnValue({}),
    onAuthStateChanged: jest.fn().mockReturnValue({})
}));

describe('Landing', () => {
    function renderComponent() {
        render(
            <AuthDetails>
                <Landing />
            </AuthDetails>,
            { wrapper: MemoryRouter }
        );
    }
    it("should render the sign-in/registration menu", () => {
        renderComponent();
        expect(screen.getByTestId('auth')).toBeTruthy();
        fireEvent.click(screen.getByTestId("auth"));
        expect(screen.getByTestId('auth-modal')).toBeTruthy();
    })

})