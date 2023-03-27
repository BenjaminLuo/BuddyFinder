import { render, screen, getByRole, fireEvent, Stack } from "@testing-library/react";
import FAQ from "./index.js";

describe('FAQ', () => {
    function renderComponent() {
        render(<FAQ />)
    }

    it("it should describe the page", () => {
        renderComponent();
        expect(screen.getByText(`FAQ`)).toBeInTheDocument();
    })

})