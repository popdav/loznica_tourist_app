import React from 'react';
import {
  View,
  Button,
  Linking,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

const tourist = require('./Icons/tourist.png');
const warning = require('./Icons/warning.png');

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#00bfff',
            alignItems: 'center',
            height: '50%',
          }}
          onPress={() => this.props.navigation.navigate('Tourism')}>
          <Image style={{marginTop: 15, width: 260, height: 260}} source={tourist} />
          <Text style={{color: 'white', marginLeft: 16, fontSize: 30}}>
            Turizam
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#b22222',
            alignItems: 'center',
            height: '50%',
          }}
          onPress={() => this.props.navigation.navigate('Municipality')}>
          <Image style={{width: 220, height: 260}} source={warning} />
          <Text style={{color: 'white', marginLeft: 16, fontSize: 30}}>
            Prijavi problem
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;
