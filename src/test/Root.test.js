
import { render, screen } from "@testing-library/react";

import Root from "../pages/Root/Root";

it('Root renders', () => {
    render(<Root />)
    const rootDivFound = screen.getAllByTestId('app-root');
    expect(rootDivFound).toBeTruthy();
});