import React from 'react'
import { Field } from 'redux-form'
import { Select } from '@material-ui/core'

const renderSelect = (
  { input, label, meta: { touched, error }, children, ...custom },
) => (
  <Select
    label={label}
    error={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom}
  />
)

const SelectRedux = props => {
  const { children, fieldName, fieldLabel } = props
  return (
    <Field
      children={children}
      component={renderSelect}
      label={fieldLabel}
      name={fieldName}
    >
      {children}
    </Field>
  )
}

export default SelectRedux