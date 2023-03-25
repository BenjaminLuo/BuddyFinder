import { render, screen, getByRole, fireEvent } from "@testing-library/react";
import Discussion from "./index.js";


describe ('Discussion', () => {
    function renderComponent() {
        render(<Discussion/>)
    }

    it("should render a textfield asking to post a status update", () => {
        renderComponent();
        expect(screen.getByText(`Post your latest feed!`)).toBeInTheDocument()
    })
})