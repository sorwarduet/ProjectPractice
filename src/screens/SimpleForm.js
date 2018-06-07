import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Item, Input, Header, Body, Content, Title, Button, Text, Icon } from 'native-base';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
    const error = {};
    error.email = '';
    error.name = '';
    var ema = values.email;
    var nm = values.name;

    if (values.email === undefined) {
        ema = '';
    }
    if (values.name === undefined){
        nm = '';
    }
    if (ema.length < 8 && ema !== '') {
        error.email = 'too short';
    }
    if (!ema.includes('@') && ema !== '') {
        error.email = '@ not included';
    }
    if (nm.length > 8) {
        error.name = 'max 8 characters';
    }

    return error;
};

class SimpleForm extends Component {

    renderInput({input, label, type, icon, meta: { touched, error, warning }}) {
        var hasError = false;
        if (error !== undefined) {
            hasError = true;
        }

        return (

            <Item>
                <Icon name={icon} />
                <Input {...input} placeholder={label} type={type} />
                {hasError ? <Text>{error}</Text> : <Text />}
            </Item>
        )
    }

    render() {
        const { handleSubmit, reset } = this.props;

        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Redux Form</Title>
                    </Body>
                </Header>
                <Content padder>
                    <Field 
                        icon="ios-mail"
                        name="email"
                        component={this.renderInput} 
                        label="E-mail"
                     /> 

                    <Field 
                        icon="ios-lock"
                        name="name"
                        component={this.renderInput} 
                        label="Name"
                     />

                    <Field
                        icon="ios-call"
                        name="phone"
                        component={this.renderInput}
                        label="Phone Name"
                    />



                    <Button block primary onPress={handleSubmit}>
                        <Text>Submit</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default reduxForm({
    form: 'test',
    validate
})(SimpleForm)

