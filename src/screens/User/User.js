import React, { Component } from 'react';
import { View } from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Container } from 'native-base';

import UserLogin from './UserLogin';
import reducers from './reducers';

class User extends Component {
	render() {
		return (
            <Provider store={createStore(reducers)}>
            <Container>
              <UserLogin />
            </Container>
            </Provider>
		);
	}
}

export default User;
