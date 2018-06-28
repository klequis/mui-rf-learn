import React from 'react'
import { reduxForm } from 'redux-form'
import { Typography } from '@material-ui/core'
/* User */
import DateTimeRedux from 'ui/DateTimeRedux'
import ShowValues from 'ui/ShowValues'

class DateTimeForm extends React.Component {
  state = {
    values: ''
  }

  onSubmit = (values) => {
    console.log('onSubmit: values', values)
    this.setState({ values: values })
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <div>
        <Typography variant='display1'>DateTime</Typography>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <DateTimeRedux
              fieldName="startDateTime"
              fieldLabel="Start Date & Time"
            />
          </div>
          
          <div>
            <button type="submit" disabled={pristine || submitting}>Submit</button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
              Clear Values
            </button>
          </div>
        </form>
        <ShowValues values={this.state.values} />
      </div>
    )
  }
}

export default reduxForm({
  form: 'DateTime',
})(DateTimeForm)