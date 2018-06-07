import React, { Component } from 'react';
import { View } from 'react-native';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Container, Header, Content, Item, Input, Icon, Body, Text } from 'native-base';
import firebase from 'firebase';
import reducers from './reducers';
//import LoginForm from './components/LoginForm';
import Router from './Router';


class Manager extends Component {
    componentWillMount = () => {
        const config = {
            apiKey: 'AIzaSyDVXssRUMm6afu_qG0joQP01ZFjqvDxR8M',
            authDomain: 'manager-8a70e.firebaseapp.com',
            databaseURL: 'https://manager-8a70e.firebaseio.com',
            projectId: 'manager-8a70e',
            storageBucket: 'manager-8a70e.appspot.com',
            messagingSenderId: '9054489616'
        };
        firebase.initializeApp(config);
    };
    

    render() {
        const store = createStore(reducers, { }, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
            <Container>
                  <Router />
                </Container>
            </Provider>
        );
    }
}

export default Manager;
