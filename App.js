import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import firebase from 'firebase'
import thunk from 'redux-thunk'
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASR_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
} from 'react-native-dotenv'
import reducers from './src/reducers'
import RouterC from './src/Router'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABASR_URL,
      projectId: PROJECT_ID,
      storageBucket: STORAGE_BUCKET,
      messagingSenderId: MESSAGING_SENDER_ID,
    }

    firebase.initializeApp(config)
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk))

    return (
      <Provider store={store}>
        <RouterC />
      </Provider>
    )
  }
}

export default App
