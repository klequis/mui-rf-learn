import React, { Fragment } from 'react'
import { 
  withStyles,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

const styles = {}

const Home = () => {
  return (
    <Fragment>
      <Typography variant='display1'>Choose an example</Typography>
      <List>
        <ListItem>
          <Link to='/radio-buttons'>
            <ListItemText>Radio buttons</ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <Link to='/text-field'>
            <ListItemText>Text field</ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <Link to='/checkboxes'>
            <ListItemText>Checkbox</ListItemText>
          </Link>
        </ListItem>
        <ListItem>
          <Link to='/select'>
            <ListItemText>Select</ListItemText>
          </Link>
        </ListItem>
      </List>
    </Fragment>
  )
}

export default withStyles(styles)(Home)