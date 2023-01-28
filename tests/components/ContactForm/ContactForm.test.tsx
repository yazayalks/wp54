import React from "react";
import "@testing-library/react";
import {fireEvent, render, screen} from "@testing-library/react";
import ContactForm from "@components/Contact/ContactForm";

describe('Компонент ContactForm', () => {

    beforeEach(() => {
        render(<ContactForm/>);
    });
    test('Рендер компонента ContactForm', () => {

    });
    test('Разблокирование кнопки после принятия политики конфиденциальности', () => {
        const button = screen.getByRole("button");
        const checkbox = screen.getByRole("checkbox");
        expect(button).toBeDisabled();
        fireEvent.click(checkbox)
        expect(button).not.toBeDisabled();
        fireEvent.click(checkbox);
        expect(button).toBeDisabled();
    });
});