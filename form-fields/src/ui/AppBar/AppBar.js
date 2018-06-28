import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import { AppBar }from '@material-ui/core'
import { Toolbar } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

function MainAppBar(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Material UI w/ Redux Form
          </Typography>
          <Link to='/'><Button colro='inherit'>Home</Button></Link>
          <Link to='/checkbox'><Button colro='inherit'>Checkbox</Button></Link>
          <Link to='/radio'><Button colro='inherit'>Radio</Button></Link>
          <Link to='/select'><Button colro='inherit'>Select</Button></Link>
          <Link to='/text'><Button colro='inherit'>Text</Button></Link>
          <Link to='/time'><Button colro='inherit'>Time</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

MainAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MainAppBar)
