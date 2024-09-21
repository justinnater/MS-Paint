/* @refresh reload */
import { render } from 'solid-js/web'
import { ThemeProvider } from "solid-styled-components";
import App from './App'
import { theme } from "./Theme/Theme.ts";

const root = document.getElementById('root')

render(() =>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
, root!)
