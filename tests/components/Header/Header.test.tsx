
import "@testing-library/react";
import {fireEvent, render, screen} from "@testing-library/react";
import Header from "@components/Header/Header";

describe('Компонент Header', () => {

    beforeEach(() => {
        render(<Header/>);
    });
    test('Рендер компонента Header', () => {

    });
    test('Открытие меню при нажатии на кнопку бургер меню', () => {
        const nav = screen.getByRole("navigation");
        expect(nav).not.toHaveClass("open");
        const button = screen.getByRole("button");
        fireEvent.click(button)
        expect(nav).toHaveClass("open");
        fireEvent.click(button);
        expect(nav).not.toHaveClass("open");
    });
});