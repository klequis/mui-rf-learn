import React from "react";

import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import DatePickerInput from "./DatePickerInput";

let MyForm = () => (
  <form>
    <Field
      name='startDate'
      component={DatePickerInput}
      label='Start date'
      // placeholder="Data"
      autoOk
      animateYearScrolling={false}
    />
  </form>
);

const validate = values => [];

//redux-form
MyForm = reduxForm({
  form: "form",
  validate
})(MyForm);

const mapStateToProps = state => ({});
MyForm = connect(mapStateToProps)(MyForm);

export default MyForm;
