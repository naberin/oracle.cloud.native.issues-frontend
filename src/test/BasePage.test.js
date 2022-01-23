
import { render, screen } from "@testing-library/react";
import BasePage from "../pages/MainPage";

it('Root renders', () => {
    render(<BasePage />)
    const mainDivFound = screen.getAllByTestId('main');
    expect(mainDivFound).toBeTruthy();
});