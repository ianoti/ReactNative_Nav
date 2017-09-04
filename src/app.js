import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import {
  apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId
} from 'react-native-dotenv';

import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    // move the config to a .env file and import it back in.
    const config = { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId };
  firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
