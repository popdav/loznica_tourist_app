import React from 'react';
import {PermissionsAndroid, ScrollView, Text, View} from 'react-native';
import TouristObject from './TouristObject';
import {Header} from 'react-native-elements';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBars,
  faBed,
  faHeart,
  faStar,
  faUser,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';

import MapScreen from './Map';

import krupanj from '../Data/krupanj.js';
import ljubovija from '../Data/ljubovija';
import loznica from '../Data/loznica';
import mali_zvornik from '../Data/mali_zvornik';

class Places extends React.Component {
  constructor(props) {
    super(props);
    let data = [];
    props.navigation.setOptions({title: props.route.params.title});
    switch (props.route.params.title) {
      case 'Loznica':
        data = loznica;
        break;
      case 'Krupanj':
        data = krupanj;
        break;
      case 'Ljubovija':
        data = ljubovija;
        break;

      case 'Mali Zvornik':
        data = mali_zvornik;
        break;
    }
    this.state = {
      fineLocation: false,
      coarseLocation: false,
      data: data,
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'lightgrey',
        }}>
        <ScrollView style={{backgroundColor: 'white'}}>
          <View style={{marginLeft: '2%', marginRight: '2%'}}>

            <View
              style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 1,
              }}
            />
          </View>

          <MapScreen
            navigation={this.props.navigation}
            data={this.state.data}
          />

          <View
            style={{
              marginTop: '5%',
              marginLeft: '2%',
              marginRight: '2%',
              borderBottomColor: 'grey',
              borderBottomWidth: 1,
            }}
          />
          <View
            style={{
              marginBottom: '5%',
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ScrollView style={{flex: 1}}>
              {this.state.data.map((e, i) => {
                let img;
                if (e.img && e.img !== '') {
                  img = e.img;
                } else {
                  img = null;
                }
                return (
                  <TouristObject
                    key={i}
                    navigation={this.props.navigation}
                    img={img}
                    title={e.name}
                    desc={e.description}
                    object={e}
                  />
                );
              })}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Places;
