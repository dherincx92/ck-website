import React from "react"
import { Helmet } from "react-helmet"

import Main from "../layouts/Main"


function Index() {
    return (
        <>
            <Helmet>
                <title>Chris Kim | Chris Kim</title>
                <link href="/assets/favicon_io/favicon.ico" rel="shortcut icon" type="image/x-icon" />
                <meta
                name="description"
                content="Chris Kim's personal website. Virginia/Washington, DC based.
                Christ follower, worship leader, Creative Director at Restoration City Church in Arlington, VA"
                />
            </Helmet>
            <Main />
        </>
    )
}

export default Index
