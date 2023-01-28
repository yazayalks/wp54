import React from "react";
import "@testing-library/react";
import {render, screen} from "@testing-library/react";
import WorkingMode from "@components/WorkingMode/WorkingMode";

describe('Компонент WorkingMode', () => {

    beforeEach(() => {
        render(<WorkingMode/>);
    });
    test('Рендер компонента WorkingMode', () => {

    });
    test('Наличие класса у  компонента WorkingMode', () => {
        const element = screen.getByTestId("working_mode");
        expect(element).toHaveClass("working_mode__inner");
    });
    test('Наличие 4 параграфов', () => {
        const paragraphs = screen.getAllByTestId("paragraph");
        expect(paragraphs.length).toBe(4)
    });
    test('Снэпшот WorkingMode', () => {
        const element = screen.getByTestId("working_mode");
        expect(element).toMatchSnapshot();
    });
});