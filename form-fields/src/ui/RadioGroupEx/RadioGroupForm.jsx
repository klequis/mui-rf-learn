import React from 'react'
import { reduxForm } from 'redux-form'
import { Radio, FormControlLabel } from '@material-ui/core'
import RadioGroupRedux from './RadioGroupRedux'

const RadioGroupForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <RadioGroupRedux
        formLabel='RadioGroupReduxForm'
        fieldName='sex'
      >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Make" />
      </RadioGroupRedux>
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
  form: 'RadioGroup', 
})(RadioGroupForm)
