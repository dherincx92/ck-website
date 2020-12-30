/**
 * The overall page layout that will remain consistent throughout
 * the app, regardless of the URL slug (i.e. stuff like the navigation bar)
 */

import React from "react";
import Carousel from "../components/templates/Carousel";
import Header from "../components/templates/Header";
import SpotifyPlayer from '../components/Player';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

const Main = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline>
            <Header />
            {/* <Carousel />
            <SpotifyPlayer /> */}
        </CssBaseline>
    </ThemeProvider>
)

export default Main;