import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MapScreen from "./Map";
import TouristPage from "./TouristPage";
import Places from "./Places";
import Tourism from "./Tourism";

const Stack = createStackNavigator();


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen options={{headerShown: false}} name="Home" component={Tourism} />
                    <Stack.Screen options={{
                        headerStyle: {
                            backgroundColor: 'dimgray',
                        },
                        headerTintColor: '#fff',

                    }} name="Hello World" component={TouristPage} />
                    <Stack.Screen options={{
                        headerStyle: {
                            backgroundColor: 'dimgray',
                        },
                        headerTintColor: '#fff',

                    }} name="Places" component={Places} />
                    <Stack.Screen options={{
                        headerStyle: {
                            backgroundColor: 'dimgray',
                        },
                        headerTintColor: '#fff',

                    }} name="FullMap" component={MapScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;


