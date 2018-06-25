import React, { Component } from 'react'
import { DateTimePicker } from 'material-ui-pickers'

// const styles = theme => {}

class DateTimePick extends Component {
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
    return (
      <DateTimePicker
      value={selectedDate}
      onChange={this.handleDateChange}
      {...input}
      {...rest}
    />
    )
  }
}

export default DateTimePick
