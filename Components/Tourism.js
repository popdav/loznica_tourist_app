import React from "react";
import {PermissionsAndroid, ScrollView, StyleSheet, Text, View} from "react-native";
import {Header} from "react-native-elements";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
    faBars,
    faBed,
    faGlassMartini,
    faHeart,
    faStar,
    faTicketAlt,
    faUser,
    faUtensils, faVideo
} from "@fortawesome/free-solid-svg-icons";
import ButtonGoTo from "./ButtonGoTo";
import MapScreen from "./Map";
import TouristObject from "./TouristObject";

const crkva1 = require('./crkva1.jpg');

class Tourism extends React.Component {
    constructor() {
        super();
        this.state = {
            fineLocation: false,
            coarseLocation: false,
        };
    }
    componentDidMount() {
        const requestFineLocationPermission = async () => {
            try {
                return await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: 'Location Permission',
                        message: 'App needs fine location permission ',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    },
                );
            } catch (err) {
                console.warn(err);
                return false;
            }
        };

        const requestCoarseLocationPermission = async () => {
            try {
                return await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
                    {
                        title: 'Location Permission',
                        message: 'App needs coarse location permission ',
                        buttonNeutral: 'Ask Me Later',
                        buttonNegative: 'Cancel',
                        buttonPositive: 'OK',
                    },
                );
            } catch (err) {
                console.warn(err);
                return false;
            }
        };

        const fineLocation = requestFineLocationPermission();
        const coarseLocation = requestCoarseLocationPermission();
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'lightgrey',
            }}
            >
                <Header
                    backgroundColor='dimgray'
                    placement="center"
                    leftComponent={<FontAwesomeIcon style={{color:'white'}} icon={faUser}/>}
                    centerComponent={{ text: 'TURIZAM LOZNICA', style: { color: '#fff' } }}
                    rightComponent={<FontAwesomeIcon style={{color:'white'}} icon={faBars}/>}
                />
                <ScrollView style={{backgroundColor: 'white'}}>
                    <View style={{marginLeft:'2%', marginRight:'2%'}}>
                        <Text style={{color:'grey', marginTop: '2%', marginBottom: '2%'}}>Loznica</Text>
                        <View
                            style={{
                                borderBottomColor: 'grey',
                                borderBottomWidth: 1,
                            }}
                        />
                    </View>
                    <View style={{
                        marginTop: '5%',
                        marginLeft: '2%',
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        // alignItems: 'center',
                    }}>
                        <ButtonGoTo navigation={this.props.navigation} bgColor='#62ab43' icon={faStar} text='Attractions'/>

                        <ButtonGoTo navigation={this.props.navigation} bgColor='#008972' icon={faBed} text='Hotels'/>

                        <ButtonGoTo navigation={this.props.navigation} bgColor='#bc2b15' icon={faUtensils} text='Restaurants'/>

                        <ButtonGoTo navigation={this.props.navigation} bgColor='#ef7337' icon={faHeart} text='Feature'/>

                        <ButtonGoTo navigation={this.props.navigation} bgColor='#803fc7' icon={faGlassMartini} text='Food Nightlife'/>

                        <ButtonGoTo navigation={this.props.navigation} bgColor='#20abce' icon={faTicketAlt} text='Festival'/>

                        <ButtonGoTo navigation={this.props.navigation} bgColor='#ff3e27' icon={faVideo} text='Videos'/>
                    </View>

                    <MapScreen navigation={this.props.navigation}/>

                    <View
                        style={{
                            marginTop: '5%',
                            marginLeft:'2%',
                            marginRight:'2%',
                            borderBottomColor: 'grey',
                            borderBottomWidth: 1,
                        }}
                    />
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
                <View style={{height: 50, width: '100%',backgroundColor: 'dimgray',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',}}><Text style={{color:'white'}}>FOOTER</Text></View>
            </View>
        );
    }
}

export default Tourism;
