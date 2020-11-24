import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
const crkva1 = require('./crkva1.jpg');
class ButtonGoTo extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={{flex: 1, flexDirection:'row', marginBottom: '2%', backgroundColor: 'lightgrey', width: '55%', height: 30}}
                              onPress={() => this.props.navigation.navigate('Places')}>
                <View style={{
                    backgroundColor:this.props.bgColor,
                    width:'20%'
                }}
                >
                    <View style={{marginTop: '5%', marginLeft:'10%'}}>
                        <FontAwesomeIcon size={ 26 } style={{color:'white'}} icon={this.props.icon}/>
                    </View>
                </View>
                <Text style={{marginTop: '2%', marginLeft:'5%'}}> {this.props.text}</Text>
                <View style={{
                    marginTop: '3%',
                    marginLeft:'5%',
                    backgroundColor: 'grey' ,
                    borderRadius: 10,
                    width: 30,
                    height: 20,
                    alignItems: 'center'
                }}>
                    <Text style={{color: 'white'}}>0</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default ButtonGoTo;
