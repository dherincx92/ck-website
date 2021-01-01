/**
 * The overall page layout that will remain consistent throughout
 * the app, regardless of the URL slug (i.e. stuff like the navigation bar)
 */

import React from "react";
import ImageCarousel from "../components/Home/Carousel";
import Header from "../components/templates/Header";
import SpotifyPlayer from '../components/Home/Player';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Footer from '../components/templates/Footer';
import theme from './theme';


const Main = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline>
            <Header />
            <ImageCarousel />
            <SpotifyPlayer />
            {/* <Footer /> */}
        </CssBaseline>
    </ThemeProvider>
)

export default Main;