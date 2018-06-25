import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { BrowserRouter as Router } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import * as eventActions from 'store/actions/event-actions'
import AppBar from 'elements/AppBar'
import Typography from '@material-ui/core/Typography'

import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider'
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils'
import QuickStart from './QuickStart'
import DateTimePicker from './DateTimePicker'
import Customization from './Customization'
import DTPCustomized from './DTPCustomized'

const styles = theme => ({
  router: {
    margin: '30px'
  },
  root: {
    flexGrow: 1,
    fontSize: '2em',
  },
  blue: {
    color: 'blue',
  }
})

class App extends React.Component {
  componentDidMount() {
    this.props.requestReadEvents()
  }
  render() {
    const { classes } = this.props
    return (
      <Router>
        <Fragment>
          <AppBar title='Events' />
          <div  className={classes.router}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              
                <Typography variant='title' gutterBottom>
                  QuickStart
                </Typography>
                <QuickStart />
                <br /> <br />
                <Typography variant='title' gutterBottom>
                  DateTimePicker
                </Typography>
                <DateTimePicker />
                <br /> <br />
                <Typography variant='title' gutterBottom>
                  Customization
                </Typography>
                <Customization />
                <br /> <br />
                <Typography variant='title' className={classes.blue} gutterBottom>
                  DTCCustomized
                </Typography>
                <DTPCustomized
                  testProp='test'
                />
            </MuiPickersUtilsProvider>
          </div>
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // events: eventSelectors.getAllEvents(state)
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, eventActions)
)(App)