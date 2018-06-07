import React, { Component } from 'react';
import {
    Container,
    Header,
    Content,
    Item,
    Input,
    Icon,
    Text,
    Body,
    Form,
    Left,
    Right,
    Button,

} from 'native-base';
import { connect } from 'react-redux';

import { nameChanged } from './actions';


class UserLogin extends Component {
  constructor(props) {
      super(props);
      this.state = {
          userTypes: [{ usrType: 'admin', userName: 'Admin User' },
            { userType: 'employee', userName: 'Employee User' },
            { UserType: 'dev', userName: 'Developer User' }
        ],
        selectedUserType: '',
      };

  };

    onChangeText(text) {
        this.props.nameChanged(text);
    }
    

    render() {
        return (
            <Container>
                <Header style={{backgroundColor: 'green' }}>
                <Left style={{ flex: 1 }}/>
                    <Body style={{ flex: 1 }}>
                    <Text> User Form</Text>
                    </Body>
                    <Right style={{ flex: 1 }} />
                </Header>

                <Content padder>
                    <Form>
                        <Item >
                            <Icon name='user' type='Entypo' />
                            <Input 
                            placeholder="Enter your name"
                            onChangeText={this.onChangeText.bind(this)}
                            value={this.props.name}
                            />
                        </Item>
                            
                        <Item>
                            <Icon name="ios-mail" />
                            <Input
                             placeholder="Enter your Email"
                             />
                        </Item>
                        <Item>
                            <Icon name="ios-lock" />
                            <Input 
                             placeholder="Enter your password"
                              secureTextEntry={true}
                             />
                        </Item>
                         <Item>
                            <Icon name="ios-call" />
                            <Input
                                placeholder="Enter your phone"
                            />
                        </Item>

                         <Button block primary >
                            <Text>Submit</Text>
                        </Button>
                    </Form>
                    <Text>{this.props.name}</Text>

                </Content>
            </Container>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        name: state.user.name,
        nameError: state.user.nameError,
    };
};

export default connect(mapStateToProps, { nameChanged })(UserLogin);
