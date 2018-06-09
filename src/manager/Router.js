import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" tabs>
                    <Scene key="login" component={LoginForm} title="Please Login" hideTabBar />
                <Scene key="main">
                    <Scene 
                     onRight={() => Actions.employeeCreate()}
                    rightTitle="Add"
                     key="employeeList"
                     component={EmployeeList}
                      title="Employee List" 
                      hideTabBar 
                      initial 
                      />

                      <Scene 
                      key="employeeCreate"
                      title="Employee Create"
                      component={EmployeeCreate}
                      hideTabBar
                      />

                      <Scene 
                      key="employeeEdit"
                      title="Employee Edit"
                      component={EmployeeEdit}
                      hideTabBar
                      />

                </Scene>
            </Scene>
        </Router>
    ); 
};

export default RouterComponent;
