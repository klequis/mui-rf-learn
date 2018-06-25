import React from 'react'
import { reduxForm } from 'redux-form'
import { Radio, FormControlLabel } from '@material-ui/core'
import RadioGroupExport from './RadioGroupExport'

const RadioButtons = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <RadioGroupExport
        formLabel='RadioGroupExportForm'
        fieldName='sex'
      >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Make" />
      </RadioGroupExport>
      <div>
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'RadioButtons', 
})(RadioButtons)
