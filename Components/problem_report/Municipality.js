import React from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';

import {faCity} from '@fortawesome/free-solid-svg-icons';
import Card from './Card';

const loznica_grb = require('../Icons/loznica.png');
const krupanj_grb = require('../Icons/krupanj.png');
const ljubovija_grb = require('../Icons/ljubovija.png');
const mali_zvornik_grb = require('../Icons/mali_zvornik.png');

class Municipality extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <View
          style={{marginBottom: '20%', marginLeft: '10%', marginRight: '10%'}}>
          <Card
            title={'Loznica'}
            text={'Prijavite problem'}
            color={'red'}
            image={loznica_grb}
            navigation={this.props.navigation}
            navigateTo="Warning"
          />
          <Card
            title={'Ljubovija'}
            text={'Prijavite problem'}
            image={ljubovija_grb}
            color={'blue'}
            navigation={this.props.navigation}
            navigateTo="Warning"
          />
          <Card
            title={'Krupanj'}
            text={'Prijavite problem'}
            image={krupanj_grb}
            color={'red'}
            navigation={this.props.navigation}
            navigateTo="Warning"
          />
          <Card
            title={'Mali Zvornik'}
            text={'Prijavite problem'}
            image={mali_zvornik_grb}
            color={'blue'}
            navigation={this.props.navigation}
            navigateTo="Warning"
          />
        </View>
      </ScrollView>
    );
  }
}

export default Municipality;
