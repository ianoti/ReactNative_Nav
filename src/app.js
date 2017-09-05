import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import {
  apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId
} from 'react-native-dotenv';
import LoginForm from './components/login-form';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    // move the config to a .env file and import it back in.
    const config = {
      apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId
    };
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
