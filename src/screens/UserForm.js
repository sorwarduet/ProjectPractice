import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Container, Header, Content, Item, Input, Icon, Body, Text } from 'native-base';
import reducers from '../reducers';

//import SimpleForm from './SimpleForm';

import SimpleForm from './UserValid';

class UserForm extends Component {
	render() {
		return (
      
            <Provider store={createStore(reducers)}>
              <SimpleForm />
            </Provider>
         
		);
	}
}

export default UserForm;
