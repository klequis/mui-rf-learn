import React from 'react'
import { reduxForm } from 'redux-form'
import { Typography } from '@material-ui/core'


/* User */
import DateTimeRedux from './DateTimeRedux'

const DateTimeForm = ({ handleSubmit, pristine, reset, submitting }) => {
  
  const onSubmit = (values) => {
    console.log('onSubmit: values', values)
  }
  return (
    <div>
      <Typography variant='display1'>DateTime</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
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
    </div>
  )
}

export default reduxForm({
  form: 'DateTime',
})(DateTimeForm)