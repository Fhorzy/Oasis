import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import DisplayScreen from '../screens/DisplayScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import { createAppContainer } from 'react-navigation';

class SignOut extends React.Component {
    SignOutScreen = createStackNavigator({
        // DisplayScreen: {
        //   screen: DisplayScreen,
        //   navigationOptions: {
        //     title: 'Sign In',
        //   }
        // },
        SignInScreen: {
          screen: SignInScreen,
          navigationOptions: {
            title: 'Sign In',
          }
        },
        SignUpScreen: {
          screen: SignUpScreen,
          navigationOptions: {
            title: 'Sign Out',
          }
        }
      });
      
      render() {
          return (
              <SignOutScreen/ >
          );
      }
}

export default createAppContainer(SignOut);