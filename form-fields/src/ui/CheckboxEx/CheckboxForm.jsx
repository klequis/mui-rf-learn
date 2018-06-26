import React from 'react'
import { reduxForm } from 'redux-form'
import CheckboxRedux from './CheckboxRedux'
import { Typography } from '@material-ui/core'

const CheckboxEx = ({ handleSubmit, pristine, reset, submitting }) => {
  const onSubmit = (values) => {
    console.log('onSubmit: values', values)
  }

  return (
    <div>
      <Typography variant='display1'>Checkbox Group</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
    </div>
  )
}

export default reduxForm({
  form: 'CheckboxRedux',
})(CheckboxEx)