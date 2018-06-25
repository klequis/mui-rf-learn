import React, { Fragment } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
// User
import AppBar from 'ui/AppBar'
import Home from 'ui/Home'
import TestForm from './TestForm'
import RadioGroupForm from './RadioGroupForm'
import withRoot from './withRoot'

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
          <Route path='/radio-buttons' component={RadioGroupForm} />
          <Route exact path='/' component={Home} />
        </Fragment>
      </Router>
    )
  }
}

export default withRoot(App)
