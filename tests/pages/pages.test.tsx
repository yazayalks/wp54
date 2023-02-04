import React from "react";
import "@testing-library/react";
import { render } from "@testing-library/react";
import HallIndexPage from '@pages/hall/index';
import MainIndexPage from '@pages/index';
import AboutIndexPage from '@pages/about';
import GameIndexPage from '@pages/game';
import BasicPricesIndexPage from '@pages/basic-prices';
import NotFoundIndexPage from '@pages/404';
import BirthdaysIndexPage from '@pages/birthdays';
import CorporateIndexPage from '@pages/corporate';
import DiscosIndexPage from '@pages/discos';
import EquipmentIndexPage from '@pages/equipment';
import HookahIndexPage from '@pages/hookah';
import KaraokeIndexPage from '@pages/karaoke';
import MoviesIndexPage from '@pages/movies';
import NewYearPricesIndexPage from '@pages/new-year-prices';
import PartiesIndexPage from '@pages/parties';
import PersonalDataPolicyIndexPage from '@pages/personal-data-policy';
import ProjectorIndexPage from '@pages/projector';
import StockIndexPage from '@pages/stock';

describe('Рендер страниц', () => {
    test('Рендер страницы main', () => {
        render(<MainIndexPage/>);
    });
    test('Рендер страницы hall', () => {
        render(<HallIndexPage/>);
    });
    test('Рендер страницы about', () => {
        render(<AboutIndexPage/>);
    });
    test('Рендер страницы about', () => {
        render(<GameIndexPage/>);
    });
    test('Рендер страницы basic-prices', () => {
        render(<BasicPricesIndexPage/>);
    });
    test('Рендер страницы 404', () => {
        render(<NotFoundIndexPage/>);
    });
    test('Рендер страницы birthdays', () => {
        render(<BirthdaysIndexPage/>);
    });
    test('Рендер страницы corporate', () => {
        render(<CorporateIndexPage/>);
    });
    test('Рендер страницы discos', () => {
        render(<DiscosIndexPage/>);
    });
    test('Рендер страницы equipment', () => {
        render(<EquipmentIndexPage/>);
    });
    test('Рендер страницы hookah', () => {
        render(<HookahIndexPage/>);
    });
    test('Рендер страницы karaoke', () => {
        render(<KaraokeIndexPage/>);
    });
    test('Рендер страницы movies', () => {
        render(<MoviesIndexPage/>);
    });
    test('Рендер страницы new-year-prices', () => {
        render(<NewYearPricesIndexPage/>);
    });
    test('Рендер страницы parties', () => {
        render(<PartiesIndexPage/>);
    });
    test('Рендер страницы personal-data-policy', () => {
        render(<PersonalDataPolicyIndexPage/>);
    });
    test('Рендер страницы projector', () => {
        render(<ProjectorIndexPage/>);
    });
    test('Рендер страницы stock', () => {
        render(<StockIndexPage/>);
    });
})