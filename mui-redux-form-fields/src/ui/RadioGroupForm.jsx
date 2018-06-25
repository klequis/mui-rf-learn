import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Select, MenuItem, Checkbox, TextField, Radio, RadioGroup, FormHelperText, FormControlLabel, FormControl, FormLabel } from '@material-ui/core'
// import asyncValidate from './asyncValidate'
// import validate from './validate'

const renderRadioGroup = ({ input, ...rest }) => {
  console.log('input', input)
  console.log('rest', rest)
  return (
    <RadioGroup
      {...input}
      {...rest}
      value={input.value}
      onChange={(event, value) => input.onChange(value)}
    />
  )
}

const MaterialUiForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <FormControl component='fieldset' required>
          <FormLabel component='legend'>Some Form Label</FormLabel>
        </FormControl>
        <Field name="sex" component={renderRadioGroup}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Make" />
        </Field>
      </div>
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
