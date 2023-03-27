import { render, screen, getByRole, fireEvent, Stack } from "@testing-library/react";
import QA from "./index.js";


describe('QA', () => {
    function renderComponent() {
        render(<QA />)
    }

    it("it should describe the introductory statement", () => {
        renderComponent();
        expect(screen.getByText(`Want to share your thoughts?`)).toBeInTheDocument();
    })
})