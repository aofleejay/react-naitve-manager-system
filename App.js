import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASR_URL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
} from 'react-native-dotenv'
import reducers from './src/reducers'
import LoginForm from './src/components/LoginForm'

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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App
