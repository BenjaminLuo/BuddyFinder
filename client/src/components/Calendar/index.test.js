import { render, screen, getByRole, fireEvent } from "@testing-library/react";
import Calendar from "./index.js";


describe ('Calendar', () => {
    function renderComponent() {
        render(<Calendar/>)
    }

    it("should render calendar", () => {
        renderComponent();
        expect(screen.getByText(`month`)).toBeInTheDocument()
        expect(screen.getByText(`day`)).toBeInTheDocument()
        expect(screen.getByText(`week`)).toBeInTheDocument()
    })
    it("should click button", () =>{
        renderComponent();
        const addEvent = screen.getByRole('button', { name: 'Add Event' })
        fireEvent.click(addEvent);
        expect(screen.getByText('Enter your event name:')).toBeInTheDocument();


        
    })

})