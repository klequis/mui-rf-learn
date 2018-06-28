import React from 'react'
import { reduxForm } from 'redux-form'
import { Typography } from '@material-ui/core'
/* User */
import TextFieldRedux from 'ui/TextFieldRedux'
import ShowValues from 'ui/ShowValues'

class TextFieldForm extends React.Component {
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
        <Typography variant='display1'>Text Fields</Typography>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <TextFieldRedux
              fieldName="firstName"
              fieldLabel="First Name"
            />
          </div>
          <div>
            <TextFieldRedux
              fieldName="notes"
              fieldLabel="Notes"
              rows={2}
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
  form: 'TextFields',
})(TextFieldForm)