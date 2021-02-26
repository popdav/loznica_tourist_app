import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View} from 'react-native';

import MapScreen from './Map';
import TouristPage from './TouristPage';
import Places from './Places';
import Tourism from './Tourism';
import Home from './Home';
import Form from './problem_report/Form';
import Menu from './problem_report/Menu';
import Municipality from './problem_report/Municipality';

const Stack = createStackNavigator();

function HomeScreen({navigation, route}) {
  return (
    <View>
      <Menu navigation={navigation} route={route} />
    </View>
  );
}

function FormScreen({navigation, route}) {
  return <Form navigation={navigation} route={route} />;
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{
              title: 'Turizam Podrinje',
              headerStyle: {
                backgroundColor: 'dimgray',
              },
              headerTintColor: '#fff',
            }}
            name="Tourism"
            component={Tourism}
          />
          <Stack.Screen
            options={{
              title: 'Prijava',
            }}
            name="Warning"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{
              title: 'Opština',
            }}
            name="Municipality"
            component={Municipality}
          />
          <Stack.Screen
            options={{
              title: 'Prijava',
            }}
            name="Form"
            component={FormScreen}
          />
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: 'dimgray',
              },
              headerTintColor: '#fff',
            }}
            name="Hello World"
            component={TouristPage}
          />
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: 'dimgray',
              },
              headerTintColor: '#fff',
            }}
            name="Places"
            component={Places}
          />
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: 'dimgray',
              },
              headerTintColor: '#fff',
            }}
            name="FullMap"
            component={MapScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
