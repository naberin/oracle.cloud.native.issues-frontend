
import { render, screen } from "@testing-library/react";

import Root from "../pages/Root";

it('Root renders', () => {
    render(<Root />)
    const rootDivFound = screen.getAllByTestId('root');
    expect(rootDivFound).toBeTruthy();
});