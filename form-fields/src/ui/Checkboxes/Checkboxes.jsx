import React from 'react'
import { reduxForm } from 'redux-form'
import CheckboxExport from './CheckboxExport'
import { Typography } from '@material-ui/core'

const Checkboxes = ({ handleSubmit, pristine, reset, submitting }) => {
  const onSubmit = (values) => {
    console.log('onSubmit: values', values)
  }

  return (
    <div>
      <Typography variant='display1'>Checkboxe(s)</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <CheckboxExport
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
    </div>
  )
}

export default reduxForm({
  form: 'Checkboxes',
})(Checkboxes)