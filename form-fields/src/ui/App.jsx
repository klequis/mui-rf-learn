import React, { Fragment } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
// User
import AppBar from 'ui/AppBar'
import Home from 'ui/Home'
import TestForm from './TestForm'
import RadioButtons from './RadioButtons'
import withRoot from './withRoot'
import TextField from './TextField'
import Checkboxes from './Checkboxes'

class App extends React.Component {
  componentDidMount() {
    // this.props.requestReadEvents()
  }

  render() {
    return (
      <Router>
        <Fragment>
          <AppBar />
          <Route path='/test-form' component={TestForm} />
          <Route path='/radio-buttons' component={RadioButtons} />
          <Route path='/text-field' component={TextField} />
          <Route path='/checkboxes' component={Checkboxes} />
          <Route exact path='/' component={Home} />
        </Fragment>
      </Router>
    )
  }
}

export default withRoot(App)
