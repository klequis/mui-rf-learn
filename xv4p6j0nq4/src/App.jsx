import React from 'react'
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import MyForm from "./MyForm";
import moment from "moment";
import MomentUtils from "material-ui-pickers/utils/moment-utils";

const App = () => {
  return (
    <MuiPickersUtilsProvider
      utils={MomentUtils}
      moment={moment}
    >
      <MyForm />
    </MuiPickersUtilsProvider>
  )
}

export default App
