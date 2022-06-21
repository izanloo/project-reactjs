import React from 'react'
import './Assest/Style/abstracts/css/App.css'
import AppRouter from './Routes/App.router'
import {Provider} from 'react-redux';
import {store} from './Redux/Store'
import {Appstyle} from './Assest/Style/abstracts/Stylecomponent';
import Toastcontainer from "./Components/Toastcontainer";






function App() {
  return (
    <Appstyle>
      <Provider store={store}>

        <AppRouter />
      <Toastcontainer/>
      </Provider>

    </Appstyle>
  );
}

export default App;
