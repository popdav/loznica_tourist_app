import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

class Card extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          marginTop: '15%',
          borderWidth: 1,
          borderColor: 'lightgrey',
          height: 150,
        }}
        onPress={() =>
          this.props.navigation.navigate(this.props.navigateTo, {
            color: this.props.color,
            city: this.props.title,
            emailKomunalne: this.props.emailKomunalne,
            emailVanredne: this.props.emailVanredne,
          })
        }>
        <View
          style={{
            backgroundColor: this.props.color,
          }}>
          <Text
            style={{
              marginLeft: '2%',
              marginTop: '1%',
              marginBottom: '1%',
              color: 'white',
            }}>
            {this.props.image ? (
              <Image
                style={{width: 20, height: 26}}
                source={this.props.image}
              />
            ) : (
              <FontAwesomeIcon color="white" icon={this.props.icon} />
            )}{' '}
            {this.props.title}
          </Text>
        </View>
        <Text style={{marginLeft: '5%', marginTop: '5%'}}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default Card;
