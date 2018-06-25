import React from "react";
import ReactDOM from "react-dom";

import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { connect, Provider } from "react-redux";
import { reducer as formReducer } from "redux-form";

import MyForm from "./MyForm";
import NoRedux from './NoRedux'

import { MuiPickersUtilsProvider } from "material-ui-pickers";
import DatePickerInput from "./DatePickerInput";

import MomentUtils from "material-ui-pickers/utils/moment-utils";
import moment from "moment";
// import "moment/locale/pt-br";
import "./styles.css";

// add
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//



const store = createStore(
  combineReducers({
    form: formReducer
  }),
  /* initial state */ composeEnhancers()
);

let App = props => (
  <div className="App">
    <Provider store={store}>
      <MuiPickersUtilsProvider
        utils={MomentUtils}
        moment={moment}
      >
        <MyForm />
        <NoRedux />
      </MuiPickersUtilsProvider>
    </Provider>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
