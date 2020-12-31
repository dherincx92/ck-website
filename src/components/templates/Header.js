/**
 * Navigation header bar for site. To dynamically add new routes to this bar,
 * simply go to "data/routes.js" and modify that object.
 *
 * author: derek663@gmail.com
 * last_updated: 12/30/2020
 */

import React, { useState } from "react"

// 3rd party imports
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Box from "@material-ui/core/Box"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuIcon from "@material-ui/icons/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Toolbar from "@material-ui/core/Toolbar"
import Tooltip from "@material-ui/core/Tooltip"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"

// local imports
import routes from "../../data/routes"
import "../../../static/css/header.css"

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black",
  },
  title: {
    flexGrow: 1,
    color: "white",
  },
}))

const Header = () => {
  const classes = useStyles()

  // where the "hamburger" menu will be anchored on the page
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  // theme is used in `usedMediaQuery` hook to determine our page size
  // and to automatically have React handle menu --> hamburger
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"))

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  /**
   * Dynamically creates flexbox items for our navigation tabs. To add a new
   * navigation button, simply go to "/data/routes.js" and append an object
   * to either "position:right" or "position:left" to determine it's placement
   * @param {str} position - either "left" or "right"
   */
  const createNavButtons = position => {
    let filteredRoutes = routes
                          .filter(arr => arr.position === position)[0]
                          .routes

    return filteredRoutes.map(route =>
      route.active === false ? (
        <Box p={1}>
          <Tooltip title="Coming soon!">
            <span>
              <Button className="nav__button" disabled>
                {route.label}
              </Button>
            </span>
          </Tooltip>
        </Box>
      ) : (
        <Box p={1}>
          <Button className="nav__button" disabled={!route.active}>
            {route.label}
          </Button>
        </Box>
      )
    )
  }

  // Generic function to create Chris Kim title text.
  const titleText = (text) => {
    return (
      <Typography
        variant="h6"
        className={classes.title}
        style={{ fontWeight: "bold", fontSize: "85px" }}
      >
        {text}
      </Typography>
    )
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ paddingLeft: "0px", paddingRight: "0px" }}>
          <Grid container>
            {isMobile ? (
              <>
              <Box p={1}>
                {titleText("Chris Kim")}
              </Box>
                  <IconButton
                    aria-label="mobile-hamburger-menu"
                    aria-controls="hamburger-menu"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    disabled
                  >
                    <MenuIcon color="primary" />
                  </IconButton>
                <Menu
                  id="hamburger-menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  {routes.map(route => (
                    <MenuItem>{route.label}</MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <>
                <Grid item xs={12}>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                  >
                    {createNavButtons("left")}
                    <Box p={1}>
                      {titleText("Chris Kim")}
                    </Box>
                    {createNavButtons("right")}
                  </Box>
                </Grid>
              </>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
