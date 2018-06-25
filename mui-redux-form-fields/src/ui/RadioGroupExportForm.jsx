import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Select, MenuItem, Checkbox, TextField, Radio, RadioGroup, FormHelperText, FormControlLabel, FormControl, FormLabel } from '@material-ui/core'
// import asyncValidate from './asyncValidate'
// import validate from './validate'
import RadioGroupExport from './RadioGroupExport'


const MaterialUiForm = props => {
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
  form: 'MaterialUiForm', // a unique identifier for this form
})(MaterialUiForm)
