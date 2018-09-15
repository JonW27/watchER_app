/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
import { createStackNavigator } from 'react-navigation';

{/*}
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
*/}

type Props = {};
export class SplashScreen extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./hospital.png')} />
        {/* TODO: Give creds to guy who created that image*/}
        <Text style={styles.title}>watchER</Text>
        <Text style={styles.instructions}>There for you, just in case</Text>
        <Button
          onPress={() => {
            this.props.navigation.navigate('Dashboard')
          }}
          title="Open"
        />
        {/*}<Text style={styles.instructions}>{instructions}</Text> */}
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

class DashboardScreen extends Component {
  render() {
    return(
      <Text>Lol</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 48,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const RootStack = createStackNavigator({
  Home: SplashScreen,
  Dashboard : DashboardScreen,
},
{
  initialRouteName: 'Home',
}
);
