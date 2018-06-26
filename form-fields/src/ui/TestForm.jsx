import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Select, MenuItem, Radio, RadioGroup } from '@material-ui/core'

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioGroup
    {...input}
    {...rest}
    value={input.value}
    onChange={(event, value) => input.onChange(value)}
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
