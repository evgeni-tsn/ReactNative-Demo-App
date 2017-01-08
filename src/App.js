import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import Router from './Router'

class App extends Component {
  componentWillMount () {
    const config = {
      apiKey: 'AIzaSyAtRlWYJsrSM4D2wtn9kyKk2Ez7uQb9slk',
      authDomain: 'employees-3e6a4.firebaseapp.com',
      databaseURL: 'https://employees-3e6a4.firebaseio.com',
      storageBucket: 'employees-3e6a4.appspot.com',
      messagingSenderId: '951355245513'
    }
    firebase.initializeApp(config)
  }

  render () {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    )
  }
}

export default App
