import { render, screen, getByRole, fireEvent, Stack } from "@testing-library/react";
import Matching from "./index.js";


describe('Matching', () => {
    function renderComponent() {
        render(<Matching />)
    }

    it("it should describe the select function", () => {
        renderComponent();
        expect(screen.getByText(`Match`)).toBeInTheDocument();
    })
})