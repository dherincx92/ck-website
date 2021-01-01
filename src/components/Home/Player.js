/**
 * Spotify player section with album work adjacent to it
 */
import React from "react"
import { Link } from "gatsby"

// 3rd party imports
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"

// local imports
import CKWaymakerArt from "../../../static/assets/ck_artisan.jpg"
import icons from "../../data/icons"
import "../../../static/css/spotify.css"

import Box from "@material-ui/core/Box"

const SpotifyPlayer = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const getRoute = alias => {
    let route = icons.filter(i => i.alias === alias)[0].route
    return route
  }

  return (
    <>
      {isMobile ? (
        <Box mt={2} style={{height: '100%'}}>
          <Box display="flex" mb={3}>
            <img className="spotify__image" src={CKWaymakerArt}></img>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <Box style={{ color: "white", backgroundColor: 'black'}}>
              <h2 style={{ textAlign: "center", marginBottom: "0px", fontSize: "3vh" }}>
                WAY MAKER
              </h2>
              <h2 style={{wordWrap: "break-word", textAlign: "center", fontSize: "3vh"}}>
                Now available on
                <Link to={getRoute("spotify")} target="_blank">
                  {" "}
                  Spotify &{" "}
                </Link>
                <Link to={getRoute("apple")} target="_blank">
                  Apple Music
                </Link>
              </h2>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ height: "100%" }}
            mb={5}
          >
            <iframe
              src="https://open.spotify.com/embed/artist/1GhVaT8gelrWGHImqOdKex"
              width="75%"
              height="300vh"
              allowtransparency="true"
              allow="encrypted-media"
            />
          </Box>
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="row"
          style={{ backgroundColor: "black" }}
        >
          <Box width="50%">
            <img className="spotify__image" src={CKWaymakerArt}></img>
          </Box>
          <Box
            className="outer"
            width="50%"
            style={{ position: "relative" }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              width="90%"
              height="70%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Box style={{ color: "white" }} mb={3}>
                <h2
                  style={{
                    textAlign: "center",
                    marginBottom: "0px",
                    fontSize: "3vh",
                  }}
                >
                  WAY MAKER
                </h2>
                <h2
                  style={{
                    wordWrap: "break-word",
                    textAlign: "center",
                    fontSize: "3vh",
                  }}
                >
                  Now available on
                  <Link to={getRoute("spotify")} target="_blank">
                    {" "}Spotify
                  </Link>{" "}
                  &{" "}
                  <Link to={getRoute("apple")} target="_blank">
                    Apple Music
                  </Link>
                </h2>
              </Box>
              <iframe
                src="https://open.spotify.com/embed/artist/1GhVaT8gelrWGHImqOdKex"
                width="100%"
                height="100%"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </Box>
          </Box>
        </Box>
      )}
    </>
  )
}

export default SpotifyPlayer
