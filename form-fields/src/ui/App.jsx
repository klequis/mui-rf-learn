import React, { Fragment } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
// User
import AppBar from 'ui/AppBar'
import withRoot from './withRoot'
import CheckboxForm from 'ui/CheckboxForm'
import DateTimeForm from './DateTimeForm'
import RadioGroupForm from './RadioGroupForm'
import SelectForm from './SelectForm'
import TextFieldForm from './TextFieldForm'
import NewEvent from './NewEvent'

const style = {
  padding: '20px',
}
class App extends React.Component {

  render() {
    return (
      <Router>
        <Fragment>
          <AppBar />
          <div style={style}>
            <Route path='/checkbox' component={CheckboxForm} />
            <Route path='/radio' component={RadioGroupForm} />
            <Route path='/select' component={SelectForm} />
            <Route path='/text' component={TextFieldForm} />
            <Route path='/time' component={DateTimeForm} />
            <Route path='/new-event' component={NewEvent} />
          </div>
        </Fragment>
      </Router>
    )
  }
}

export default withRoot(App)
