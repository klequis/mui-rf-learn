import React, { Component } from 'react'
import { DateTimePicker } from 'material-ui-pickers'

// const styles = theme => {}

class DTPCustomized extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedDate: new Date() }
  }

  handleDateChange = date => {
    console.log(date)
    this.setState({ selectedDate: date })
  }

  render() {
    const { input, ...rest } = this.props
    const { selectedDate } = this.state
    console.log('input', input)
    console.log('rest', rest)
    return (
      <DateTimePicker
        // format="YYYY/MM/DD hh:mm A"
        format='MMM, DD YYYY     hh:mm A'
        onChange={this.handleDateChange}
        value={selectedDate}
        {...input}
        {...rest}
      />
    )
  }
}

export default DTPCustomized
