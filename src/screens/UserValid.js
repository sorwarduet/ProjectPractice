import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Container } from 'native-base';
import { Field, reduxForm } from 'redux-form';

import { Input, CardSection, Button } from '../common';

//define validation

const validate = values => {
    const errors = {};

    if (!values.username) {
        errors.username = 'please fill the username';
    } else if (values.username.length > 10) {
        errors.username = 'Maximum 10 Character';
    }
    if (!values.email) {
        errors.email = 'please fill the email';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.phone) {
        errors.phone = 'please fill the phone number';
    }

    return errors;
};

//render item
const   myField = ({ label, placeholder, meta: { error, touched, warning }, input: { onChange } }) => {
    return (
        <View>
        <CardSection>
           <Input label={label} placeholder={placeholder} onChangeText={onChange} />
        </CardSection>
            
            {touched && ((error && <Text style={styles.errorTextStyle}>{error}</Text>) ||
            (warning && <Text style={styles.errorTextStyle}>{warning}</Text>))}
        </View>
    );
};

//for submit 
const submit = values => {
    alert(values);
};

const SimpleForm = props => {
    const { handleSubmit } = props;
        return (
            <View>
                    <Field
                        name="username"
                        component={myField}
                        label="username"
                        placeholder="Enter your username"
                       
                     />
                     <Field
                        name="email"
                        component={myField}
                        label="E-mail"
                        placeholder="Enter your email"
                        
                     />
                     <Field
                        name="phone"
                        component={myField}
                        label="Phone"
                        placeholder="Enter your phone number"
                     />

                <CardSection>
                     <Button onPress={handleSubmit(submit)}>
                        Submit
                     </Button>
                 </CardSection>
            
             </View>
                     
        );
    };

export default reduxForm({
    form: 'test',
    validate
})(SimpleForm);

const styles = {
    errorTextStyle: {
        fontSize: 14,
        alignSelf: 'center',
        color: 'red',
    }
};
