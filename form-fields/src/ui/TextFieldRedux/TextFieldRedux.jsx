import React from 'react'
import { Field } from 'redux-form'
import { TextField } from '@material-ui/core'

const renderTextField = (
  { input, label, meta: { touched, error, warning }, ...custom },
) => {
  console.log('touched', touched)
  console.log('error', error)
  console.log('warning', warning)
  return (
    <div>
      <TextField
        placeholder={label}
        label={label}
        error={touched && error}
        {...input}
        {...custom}
      />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  )
}

const TextFieldRedux = props => {
  const { fieldName, fieldLabel, required, rows=0 } = props
  const multilineField = rows > 1
  return multilineField
    ? <Field 
        name={fieldName} 
        component={renderTextField}
        label={fieldLabel}
        multiline={rows > 1}
        required={required}
        rows={rows}
      />
    : <Field 
        name={fieldName} 
        component={renderTextField}
        label={fieldLabel}
        required={required}
      />
}

export default TextFieldRedux