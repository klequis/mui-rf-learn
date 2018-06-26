import React from 'react'
import { reduxForm } from 'redux-form'
import SelectRedux from './SelectRedux'
import { MenuItem } from '@material-ui/core'

const SelectForm = ({ handleSubmit, pristine, reset, submitting }) => {

  const onSubmit = values => {
    console.log('onSubmit: values', values)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <SelectRedux
            fieldName='favoriteColor'
            fieldLabel='Favorite Color'
          >
            <MenuItem value="ff0000">Red</MenuItem>
            <MenuItem value="00ff00">Green</MenuItem>
            <MenuItem value="0000ff">Blue</MenuItem>
          </SelectRedux>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'Select',
})(SelectForm)