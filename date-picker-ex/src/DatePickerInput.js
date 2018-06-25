import React, { Component } from "react";
import { DatePicker } from "material-ui-pickers";

const styles = theme => {};

class DatePickerInput extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedDate: new Date() };
  }

  handleDateChange = date => {
    console.log(date);
    this.setState({ selectedDate: date });
  };

  render() {
    const { input, ...rest } = this.props
    const { selectedDate } = this.state
    return (
      <DatePicker
        keyboardIcon
        leftArrowIcon
        animateYearScrolling={false}
        disableOpenOnEnter
        format="DD/MM/YYYY"
        keyboard
        label='Masked input'
        mask={value => (value ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/] : [])}
        onChange={this.handleDateChange}
        placeholder="10/10/2018"
        value={selectedDate}
        {...input}
        {...rest}
      />
    );
  }
}

export default DatePickerInput;
