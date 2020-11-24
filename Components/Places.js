import React from "react";
import {ScrollView, View} from "react-native";
import TouristObject from "./TouristObject";
const crkva1 = require('./crkva1.jpg');
class Places extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView>
                <View style={{ marginBottom: '5%',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',}}>
                    <TouristObject navigation={this.props.navigation} title='HELLO WORLD' img={crkva1} desc='The idea with React Native Elements is more about component structure than actual design.'/>
                    <TouristObject navigation={this.props.navigation} title='HELLO WORLD' img={crkva1} desc='The idea with React Native Elements is more about component structure than actual design.'/>
                    <TouristObject navigation={this.props.navigation} title='HELLO WORLD' img={crkva1} desc='The idea with React Native Elements is more about component structure than actual design.'/>
                    <TouristObject navigation={this.props.navigation} title='HELLO WORLD' img={crkva1} desc='The idea with React Native Elements is more about component structure than actual design.'/>
                    <TouristObject navigation={this.props.navigation} title='HELLO WORLD' img={crkva1} desc='The idea with React Native Elements is more about component structure than actual design.'/>
                    <TouristObject navigation={this.props.navigation} title='HELLO WORLD' img={crkva1} desc='The idea with React Native Elements is more about component structure than actual design.'/>
                    <TouristObject navigation={this.props.navigation} title='HELLO WORLD' img={crkva1} desc='The idea with React Native Elements is more about component structure than actual design.'/>
                    <TouristObject navigation={this.props.navigation} title='HELLO WORLD' img={crkva1} desc='The idea with React Native Elements is more about component structure than actual design.'/>
                </View>
            </ScrollView>
        );
    }
}

export default Places;
