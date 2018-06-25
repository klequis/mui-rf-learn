import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Select, MenuItem, Checkbox, TextField, Radio, RadioGroup, FormHelperText, FormControlLabel, FormControl, FormLabel } from '@material-ui/core'
// import asyncValidate from './asyncValidate'
// import validate from './validate'

const renderTextField = (
  { input, label, meta: { touched, error }, ...custom },
) => (
  <TextField
    placeholder={label}
    label={label}
    error={touched && error}
    {...input}
    {...custom}
  />
)

const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onChange={input.onChange}
  />
)

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    value={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
)

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

const MaterialUiForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="firstName"
          component={renderTextField}
          label="First Name"
        />
      </div>
      <div>
        <Field name="lastName" component={renderTextField} label="Last Name" />
      </div>
      <div>
        <Field name="email" component={renderTextField} label="Email" />
      </div>
      <div>
        <Field name="sex" component={renderRadioGroup}>
          <Radio value="male">Make</Radio>
          <Radio value="female">Female</Radio>
        </Field>
      </div>
      <div>
        <Field
          name="favoriteColor"
          component={renderSelect}
          label="Favorite Color"
        >
          <MenuItem value="ff0000" primaryText="Red" />
          <MenuItem value="00ff00" primaryText="Green" />
          <MenuItem value="0000ff" primaryText="Blue" />
        </Field>
      </div>
      <div>
        <Field name="employed" component={renderCheckbox} label="Employed" />
      </div>
      <div>
        <Field
          name="notes"
          component={renderTextField}
          label="Notes"
          multiline={true}
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
  )
}

export default reduxForm({
  form: 'MaterialUiForm', // a unique identifier for this form
})(MaterialUiForm)
