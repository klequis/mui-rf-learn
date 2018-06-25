import React, { Fragment } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
// User
import * as eventActions from 'store/actions/event-actions'
import AppBar from 'ui/AppBar'
import TestForm from './TestForm'
import RadioGroupForm from './RadioGroupForm'
import RadioGroupExportForm from './RadioGroupExportForm'
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
        {/* <Route path='/select' component={SelectTest} /> */}
        <Route path='/a' component={TestForm} />
        <Route path='/b' component={RadioGroupForm} />
        <Route path='/' component={RadioGroupExportForm} />
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return { }
}

export default connect(mapStateToProps, eventActions)(withRoot(App))
