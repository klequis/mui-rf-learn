import React, { Fragment } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
// User
import AppBar from 'ui/AppBar'
import Home from 'ui/Home'
import TestForm from './TestForm'
import RadioGroupEx from './RadioGroupEx'
import withRoot from './withRoot'
import TextFieldEx from './TextFieldEx'
import CheckboxEx from './CheckboxEx'
import SelectEx from './SelectEx'

class App extends React.Component {

  render() {
    return (
      <Router>
        <Fragment>
          <AppBar />
          <Route path='/test-form' component={TestForm} />
          <Route path='/radio-buttons' component={RadioGroupEx} />
          <Route path='/text-field' component={TextFieldEx} />
          <Route path='/checkboxes' component={CheckboxEx} />
          <Route path='/select' component={SelectEx} />
          <Route exact path='/' component={Home} />
        </Fragment>
      </Router>
    )
  }
}

export default withRoot(App)
