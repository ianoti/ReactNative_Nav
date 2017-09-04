import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import firebase from 'firebase';

import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBkngPHTh2poy7TidEn3tZtbtmns8bO4uM',
      authDomain: 'navapp-242b6.firebaseapp.com',
      databaseURL: 'https://navapp-242b6.firebaseio.com',
      projectId: 'navapp-242b6',
      storageBucket: 'navapp-242b6.appspot.com',
      messagingSenderId: '356158180084'
    };
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
