import React from 'react'
import { reduxForm } from 'redux-form'
import TextFieldExport from './TextFieldExport'
import { Typography } from '@material-ui/core'

const TextFieldEx = ({ handleSubmit, pristine, reset, submitting }) => {
  
  const onSubmit = (values) => {
    console.log('onSubmit: values', values)
  }
  return (
    <div>
      <Typography variant='display1'>Text Fields</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextFieldExport
            fieldName="firstName"
            fieldLabel="First Name"
          />
        </div>
        <div>
          <TextFieldExport
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
    </div>
  )
}

export default reduxForm({
  form: 'TextFields',
})(TextFieldEx)