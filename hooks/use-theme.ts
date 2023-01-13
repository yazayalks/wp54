import {useLayoutEffect, useState} from 'react'
import {useEffect} from "react";


const defaultTheme = 'dark';

const getAppTheme = () => {

    return typeof localStorage !== 'undefined'
        ? localStorage.getItem('app-theme')
        : defaultTheme
}
export const useTheme = () => {

    const [theme, setTheme] = useState(getAppTheme())
    useEffect(() => {

        const theme = localStorage.getItem('app-theme')
        setTheme(theme || 'light');
    }, [])

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme || defaultTheme)
        localStorage.setItem('app-theme', theme || defaultTheme)
    }, [theme])

    return {theme, setTheme}
}