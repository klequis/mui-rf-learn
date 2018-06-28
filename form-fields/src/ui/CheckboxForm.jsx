import React from 'react'
import { reduxForm } from 'redux-form'
import { Typography } from '@material-ui/core'
/* User */
import CheckboxRedux from 'ui/CheckboxRedux'
import ShowValues from 'ui/ShowValues'

class CheckboxEx extends React.Component {
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
        <Typography variant='display1'>Checkbox Group</Typography>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <CheckboxRedux
              fieldName='employed'
              fieldLabel='Employed'
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
  form: 'CheckboxRedux',
})(CheckboxEx)