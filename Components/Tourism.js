import React from 'react';
import {
  PermissionsAndroid,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Header} from 'react-native-elements';

import {
  faBars,
  faBed,
  faGlassMartini,
  faHeart,
  faStar,
  faTicketAlt,
  faUser,
  faUtensils,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import ButtonGoTo from './ButtonGoTo';
import MapScreen from './Map';
import TouristObject from './TouristObject';
import utf8 from 'utf8';

import krupanj from '../Data/krupanj.js';
import ljubovija from '../Data/ljubovija';
import loznica from '../Data/loznica';
import mali_zvornik from '../Data/mali_zvornik';

const loznica_grb = require('./Icons/loznica.png');
const krupanj_grb = require('./Icons/krupanj.png');
const ljubovija_grb = require('./Icons/ljubovija.png');
const mali_zvornik_grb = require('./Icons/mali_zvornik.png');

const data = krupanj.concat(ljubovija).concat(loznica).concat(mali_zvornik);

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
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'lightgrey',
        }}>
        <Header
          backgroundColor="dimgray"
          placement="center"
          // leftComponent={
          //   <FontAwesomeIcon style={{color: 'white'}} icon={faUser} />
          // }
          centerComponent={{text: 'TURIZAM PODRINJE', style: {color: '#fff'}}}
          // rightComponent={
          //   <FontAwesomeIcon style={{color: 'white'}} icon={faBars} />
          // }
        />
        <ScrollView style={{backgroundColor: 'white'}}>
          <View style={{marginLeft: '2%', marginRight: '2%'}}>
            <Text style={{color: 'grey', marginTop: '2%', marginBottom: '2%'}}>
              Loznica
            </Text>
            <View
              style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 1,
              }}
            />
          </View>
          <View
            style={{
              marginTop: '5%',
              marginLeft: '2%',
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              // alignItems: 'center',
            }}>
            <ButtonGoTo
              navigation={this.props.navigation}
              bgColor="#62ab43"
              icon={loznica_grb}
              text="Loznica"
              number={loznica.length}
            />

            <ButtonGoTo
              navigation={this.props.navigation}
              bgColor="#008972"
              icon={krupanj_grb}
              text="Krupanj"
              number={krupanj.length}
            />

            <ButtonGoTo
              navigation={this.props.navigation}
              bgColor="#bc2b15"
              icon={ljubovija_grb}
              text="Ljubovija"
              number={ljubovija.length}
            />

            <ButtonGoTo
              navigation={this.props.navigation}
              bgColor="#ef7337"
              icon={mali_zvornik_grb}
              text="Mali Zvornik"
              number={mali_zvornik.length}
            />
          </View>

          <MapScreen navigation={this.props.navigation} data={data} />

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
              {data.map((e, i) => {
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
        <View
          style={{
            height: 50,
            width: '100%',
            backgroundColor: 'dimgray',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>FOOTER</Text>
        </View>
      </View>
    );
  }
}

export default Tourism;
