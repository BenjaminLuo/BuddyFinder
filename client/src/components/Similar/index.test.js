import { render, screen, getByRole, fireEvent, Stack } from "@testing-library/react";
import Similar from "./index.js";


describe('Similar', () => {
    function renderComponent() {
        render(<Similar />)
    }

    it("it should describe the introductory statement", () => {
        renderComponent();
        expect(screen.getByText(`Spare some time to fill out the following questionaire to hopefully find some like minded people`)).toBeInTheDocument();
    })
})