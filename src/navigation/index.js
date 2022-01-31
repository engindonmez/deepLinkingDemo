import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../screens/Home'
import Details from '../screens/Details'

const AppNavigator = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: 'Home'
        },
        path: 'home'
    },
    Details: {
        screen: Details,
        navigationOptions: {
            headerTitle: 'Details'
        },
        path: 'details/:userId'
    }
});

const AppContainer = createAppContainer(AppNavigator);

export default () => {
    const config = {
        screens: {
          Home: 'home',
          Details: 'details/:userId',
        },
      };
    const prefix = 'myapp://'
    const linking = {
        prefixes: ['myapp://home'],
        config
    };
    return <AppContainer linking={linking} />
}