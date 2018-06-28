import React from 'react'
import { reduxForm } from 'redux-form'
import { MenuItem } from '@material-ui/core'
/* User */
import SelectRedux from 'ui/SelectRedux'
import ShowValues from 'ui/ShowValues'

class SelectForm extends React.Component {
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
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
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
        <ShowValues values={this.state.values} />
      </div>
    )
  }
}

export default reduxForm({
  form: 'Select',
})(SelectForm)