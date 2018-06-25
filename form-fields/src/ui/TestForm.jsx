import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Select, MenuItem, Checkbox, Radio, RadioGroup } from '@material-ui/core'

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
        <button type="submit" disabled={pristine || submitting}>Submit</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'MaterialUiForm',
})(MaterialUiForm)
