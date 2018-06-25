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

const RadioGroupExport = props => {
  const { formLabel, fieldName, children } = props
  return (
    <div>
      <FormControl component='fieldset' required>
        <FormLabel component='legend'>{formLabel}</FormLabel>
      </FormControl>
      <Field name={fieldName} component={renderRadioGroup}>
        {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Make" /> */}
        {children}
      </Field>
    </div>
      
  )
}

export default RadioGroupExport
