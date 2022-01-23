
import { render, screen } from "@testing-library/react";
import BasePage from "../pages/BasePage";

it('Root renders', () => {
    render(<BasePage />)
    const rootDivFound = screen.getAllByTestId('base');
    expect(rootDivFound).toBeTruthy();
});