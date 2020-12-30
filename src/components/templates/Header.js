/**
 * Navigation header bar for site
 *
 * author: derek663@gmail.com
 * last_updated: 12/30/2020
 */

import React, { useState } from "react"

// 3rd party imports
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import Menu from "@material-ui/core/Menu"
import MenuIcon from "@material-ui/icons/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"

import Tooltip from "@material-ui/core/Tooltip"

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

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Chris Kim
          </Typography>
          <div>
            {isMobile
              ?
                <>
                  <IconButton
                    aria-label="mobile-hamburger-menu"
                    aria-controls="hamburger-menu"
                    aria-haspopup="true"
                    onClick={handleMenu}
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
                      <MenuItem>
                        {route.label}
                      </MenuItem>
                    ))}
                  </Menu>
                </>
              :
                <>
                  {routes.map(route =>
                    route.active == false
                      ?
                        <Tooltip title="Under construction">
                          <span>
                            <Button className="nav__button" disabled>
                              {route.label}
                            </Button>
                          </span>
                        </Tooltip>
                      :
                        <Button className="nav__buttton">{route.label}</Button>
                  )}
                </>
            }
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
