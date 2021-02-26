import React from 'react';
import {
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Card} from 'react-native-elements';

import MapScreen from './Map';

class TouristPage extends React.Component {
  constructor(props) {
    super(props);
    props.navigation.setOptions({title: props.route.params.title});
  }

  render() {
    return (
      <ScrollView style={{marginLeft: '3%', marginRight: '3%', backgroundColor: 'white'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={this.props.route.params.img} />
          <Card.Title style={{color: '#ff4500'}}>
            {this.props.route.params.title}
          </Card.Title>
          <MapScreen
            navigation={this.props.navigation}
            data={[this.props.route.params.object]}
          />

          <TouchableOpacity
            style={{
              height: 25,
              width: 150,
              margin: 20,
              backgroundColor: '#1e90ff',
              borderRadius: 10,
            }}
            onPress={() => {
              Linking.openURL(
                'http://maps.google.com/maps?daddr=' +
                  this.props.route.params.object.latitude +
                  ',' +
                  this.props.route.params.object.longitude,
              );
            }}>
            <Text style={{color: 'white', marginLeft: 16}}>
              otvori u mapama
            </Text>
          </TouchableOpacity>

          <Text style={{textAlign: 'center'}}>
            {this.props.route.params.object.address + '\n\n'}
            {this.props.route.params.desc}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default TouristPage;
