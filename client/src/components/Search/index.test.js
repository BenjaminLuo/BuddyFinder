import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./index.js";
import * as React from 'react';

describe('Search', () => {

    function renderComponent() {
        render(<Search />);
    }

    // Checks if users with the 'private' account privacy setting cannot be accessed
    it('private', () => {
        renderComponent();
        expect(screen.getByTestId('profile_12345678').closest('button')).toBeDisabled();
    });

    // Checks if users with the 'searchable' account privacy setting appear in the search results
    it('searchable', () => {
        renderComponent();
        expect(screen.queryByTestId('nyephe_87654321')).toBeNull();
    });

})