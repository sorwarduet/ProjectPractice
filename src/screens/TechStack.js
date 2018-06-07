import React, { Component } from 'react';
import {
    View
} from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from '../reducers';
import { Header } from '../common';
import LibraryList from '../components/LibraryList';

import data from '../reducers/LibraryList.json';

class TechStack extends Component {
    render() {
        console.log(data);
        return (
            <Provider store={createStore(reducers)}>
                <View style={{ flex: 1 }}>
                    <Header headerText="Tech Stack" />
                    <LibraryList />
                </View>
            </Provider>
        );
    }
}

export default TechStack;
