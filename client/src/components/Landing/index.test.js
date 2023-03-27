import { render, screen, getByRole, fireEvent } from "@testing-library/react";
import Landing from "./index.js";


describe ('Landing', () => {
    function renderComponent() {
        render(<Landing/>)
    }

    it("should render the home page", () => {
        renderComponent();
        expect(screen.getByText(`Buddy Finder`)).toBeInTheDocument()
    })
    it("should render the home page 2", () => {
        renderComponent();
        expect(screen.getByText(`Buddy Finder`)).toBeInTheDocument()
    })

})