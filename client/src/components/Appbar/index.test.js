import { render, screen, fireEvent, getByTitle } from "@testing-library/react";
import NavBar from "./index.js";

describe('Appbar', () => {

    function renderComponent() {
        render(<NavBar />);
    }

    // Tests if the dropdown is functional and its elements exist
    it('dropdown', () => {

        renderComponent();
        expect(screen.getByTestId('dropdownButton')).toBeTruthy();
        fireEvent.click(screen.getByTitle("dropbutton"));
        expect(screen.getByTestId('profile')).toBeTruthy();
        expect(screen.getByTestId('settings')).toBeTruthy();
        expect(screen.getByTestId('contact')).toBeTruthy();
        expect(screen.getByTestId('faq')).toBeTruthy();
    });
})