import React from 'react'
import { reduxForm } from 'redux-form'
import { Radio, FormControlLabel } from '@material-ui/core'
/* User */
import RadioGroupRedux from 'ui/RadioGroupRedux'
import ShowValues from 'ui/ShowValues'

class RadioGroupForm extends React.Component {
  state = {
    values: ''
  }

  onSubmit = (values) => {
    console.log('onSubmit: values', values)
    this.setState({ values: values })
  }
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
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
        <ShowValues values={this.state.values} />
      </form>
    )
  }
  
}

export default reduxForm({
  form: 'RadioGroup', 
})(RadioGroupForm)
