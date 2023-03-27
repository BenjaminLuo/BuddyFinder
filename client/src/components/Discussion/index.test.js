import { render, screen, getByRole, fireEvent } from "@testing-library/react";
import Discussion from "./index.js";


describe ('Discussion', () => {
    function renderComponent() {
        render(<Discussion/>)
    }

    it("should render an area for adding a post", () => {
        renderComponent();
        expect(screen.getByText(`Add your status update`)).toBeInTheDocument()
    })

    it("should render a section for search", () => {
        renderComponent();
        expect(screen.getByText(`Search`)).toBeInTheDocument()
    })

    it("should render a textfield asking to search", () => {
        renderComponent();
        expect(screen.getByText(`Search`)).toBeInTheDocument()
    })

    it("should render a discussion area", () => {
        renderComponent();
        expect(screen.getByText(`Discussion`)).toBeInTheDocument()
    })

    it("should render an area for general posts", () => {
        renderComponent();
        expect(screen.getByText(`GENERAL`)).toBeInTheDocument()
    })

    it("should render an area for social event posts", () => {
        renderComponent();
        expect(screen.getByText(`SOCIAL EVENTS`)).toBeInTheDocument()
    })

    it("should render an area for physical activity posts", () => {
        renderComponent();
        expect(screen.getByText(`PHYSICAL ACTIVITY`)).toBeInTheDocument()
    })
})
