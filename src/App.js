import React from 'react'
import './Assest/Style/abstracts/css/App.css'
import AppRouter from './Routes/App.router'
import {Provider} from 'react-redux';
import {store} from './Redux/Store'
// import Contexts from './Context/Contexts';




function App() {
  return (
    <div className='app'>
      <Provider store={store}>

        <AppRouter />
      </Provider>

    </div>
  );
}

export default App;
