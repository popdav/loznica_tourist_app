import React from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

class ButtonGoTo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: 'row',
          marginBottom: '2%',
          backgroundColor: 'lightgrey',
          width: '100%',
          height: 35,
        }}
        onPress={() =>
          this.props.navigation.navigate('Places', {
            title: this.props.text,
          })
        }>
        <View
          style={{
            width: '20%',
          }}>
          <View style={{marginTop: '5%', marginLeft: '10%'}}>
            <Image style={{width: 25, height: 26}} source={this.props.icon} />
          </View>
        </View>
        <Text style={{marginTop: '2%', marginLeft: '5%'}}>
          {' '}
          {this.props.text}
        </Text>
        <View
          style={{
            marginTop: '3%',
            marginLeft: '10%',
            textAlign: 'right',
            backgroundColor: 'grey',
            borderRadius: 10,
            width: 30,
            height: 20,
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>
            {this.props.number}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default ButtonGoTo;
