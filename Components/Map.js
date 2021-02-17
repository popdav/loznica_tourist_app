import * as React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import {CheckBox} from 'react-native-elements';
import {
  faExpand,
  faCompress,
  faExpandArrowsAlt,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const Attraction = require('./Icons/Attractions.png');
const Feature = require('./Icons/Feature.png');
const Food_Nightlife = require('./Icons/Food_Nightlife.png');
const Hotel = require('./Icons/Hotels.png');
const Restaurant = require('./Icons/Restaurants.png');
const Pin = require('./Icons/pin.png');

const churches = [
  {
    coordinate: {latitude: 44.532116, longitude: 19.219862},
    img: require('./crkva1.jpg'),
  },
  {
    coordinate: {latitude: 44.5348, longitude: 19.233316},
    img: require('./crkva2.jpg'),
  },
];
const restaurants = [
  {coordinate: {latitude: 44.533442, longitude: 19.224122}},
  {coordinate: {latitude: 44.534264, longitude: 19.228961}},
];

class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    let data = [];
    if (props.data){
      data = props.data;
    } else if (props.route.params.data) {
      data = props.route.params.data
    }
    this.state = {
      data: data,
      position: {
        latitude: 44.5334,
        longitude: 19.223848,
      },
      region: {
        latitude: 44.5334,
        longitude: 19.223848,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      isChurchesSelected: true,
      isRestaurantsSelected: true,
      showCarousel: true,
      fullScreen:
        props.route === undefined ? false : props.route.params.fullScreen,
    };
  }

  churchesSelected = () => {
    this.setState({isChurchesSelected: !this.state.isChurchesSelected});
  };

  restaurantsSelected = () => {
    this.setState({isRestaurantsSelected: !this.state.isRestaurantsSelected});
  };

  render() {
    return (
      <View
        style={
          this.state.fullScreen ? styles.fullScreenContainer : styles.container
        }>
        <MapView initialRegion={this.state.region} style={styles.map}>
          {this.state.data.map((e, i) => {
            return (
              <Marker
                key={i}
                coordinate={{latitude: e.latitude, longitude: e.longitude}}
                image={Attraction}>
                <Callout>
                  <View
                    style={{
                      width: 100,
                      height: 100,
                      flex: 1,
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}>
                    <Text>Neki opis</Text>
                  </View>
                </Callout>
              </Marker>
            );
          })}
          {/*{this.state.isChurchesSelected*/}
          {/*  ? churches.map((e, i) => {*/}
          {/*      return (*/}
          {/*        <Marker key={i} coordinate={e.coordinate} image={Attraction}>*/}
          {/*          /!*<Image source={Attraction} style={{height: 45, width:36 }} />*!/*/}
          {/*          <Callout>*/}
          {/*            <View*/}
          {/*              style={{*/}
          {/*                width: 100,*/}
          {/*                height: 100,*/}
          {/*                flex: 1,*/}
          {/*                flexDirection: 'column',*/}
          {/*                justifyContent: 'center',*/}
          {/*              }}>*/}
          {/*              /!*<Text>*!/*/}
          {/*              /!*    <Image style={styles.cardImage} source={e.img} resizeMode="cover"/>*!/*/}
          {/*              /!*</Text>*!/*/}
          {/*              <Text>Neki opis</Text>*/}
          {/*            </View>*/}
          {/*          </Callout>*/}
          {/*        </Marker>*/}
          {/*      );*/}
          {/*    })*/}
          {/*  : false}*/}

          {/*{this.state.isRestaurantsSelected*/}
          {/*  ? restaurants.map((e, i) => {*/}
          {/*      return (*/}
          {/*        <Marker*/}
          {/*          key={i}*/}
          {/*          coordinate={e.coordinate}*/}
          {/*          title={'Neki restoran'}*/}
          {/*          description={'opis restorana'}*/}
          {/*          image={Restaurant}>*/}
          {/*          /!*<Image source={Restaurant} style={{height: 45, width:36 }} />*!/*/}
          {/*        </Marker>*/}
          {/*      );*/}
          {/*    })*/}
          {/*  : false}*/}
        </MapView>
        <TouchableOpacity
          onPress={async () => {
            const navigateName = !this.state.fullScreen ? 'FullMap' : 'Home';
            await this.props.navigation.navigate(navigateName, {
              fullScreen: !this.state.fullScreen,
              data: this.props.data,
            });
          }}>
          <FontAwesomeIcon
            size={20}
            style={{color: 'white'}}
            icon={faExpandArrowsAlt}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 0,
            marginBottom: 20,
            right: this.state.showCarousel ? 135 : 5,
          }}
          onPress={() => {
            this.setState({showCarousel: !this.state.showCarousel});
          }}>
          <FontAwesomeIcon
            size={20}
            style={{color: 'white'}}
            icon={this.state.showCarousel ? faCompress : faExpand}
          />
        </TouchableOpacity>
        {this.state.showCarousel ? (
          <View style={styles.carousel}>
            <View style={styles.cardContainer}>
              <CheckBox
                checked={this.state.isChurchesSelected}
                onPress={this.churchesSelected}
                title={
                  <Text style={{color: 'white', fontSize: 8}}>
                    <Image style={{width: 8, height: 10}} source={Attraction} />{' '}
                    Attractions
                  </Text>
                }
                iconType="font-awesome"
                size={16}
                containerStyle={styles.checkBoxContainer}
              />
              <CheckBox
                checked={this.state.isRestaurantsSelected}
                onPress={this.restaurantsSelected}
                title={
                  <Text style={{color: 'white', fontSize: 8}}>
                    <Image style={{width: 8, height: 10}} source={Hotel} />{' '}
                    Hotels
                  </Text>
                }
                iconType="font-awesome"
                size={16}
                containerStyle={styles.checkBoxContainer}
                textStyle={{color: 'white', fontSize: 8}}
              />
              <CheckBox
                checked={false}
                // onPress={this.churchesSelected}
                title={
                  <Text style={{color: 'white', fontSize: 8}}>
                    <Image style={{width: 8, height: 10}} source={Restaurant} />{' '}
                    Restaurants
                  </Text>
                }
                iconType="font-awesome"
                size={16}
                containerStyle={styles.checkBoxContainer}
                textStyle={{color: 'white', fontSize: 8}}
              />
              <CheckBox
                checked={false}
                // onPress={this.churchesSelected}
                title={
                  <Text style={{color: 'white', fontSize: 8}}>
                    <Image style={{width: 8, height: 10}} source={Feature} />{' '}
                    Feature
                  </Text>
                }
                iconType="font-awesome"
                size={16}
                containerStyle={styles.checkBoxContainer}
                textStyle={{color: 'white', fontSize: 8}}
              />
              <CheckBox
                checked={false}
                // onPress={this.churchesSelected}
                title={
                  <Text style={{color: 'white', fontSize: 8}}>
                    <Image
                      style={{width: 8, height: 10}}
                      source={Food_Nightlife}
                    />{' '}
                    Food Nightlife
                  </Text>
                }
                iconType="font-awesome"
                size={16}
                containerStyle={styles.checkBoxContainer}
                textStyle={{color: 'white', fontSize: 8}}
              />
              <CheckBox
                checked={false}
                // onPress={this.churchesSelected}
                title={
                  <Text style={{color: 'white', fontSize: 8}}>
                    <Image style={{width: 8, height: 10}} source={Pin} />{' '}
                    Uncategorized
                  </Text>
                }
                iconType="font-awesome"
                size={16}
                containerStyle={styles.checkBoxContainer}
                textStyle={{color: 'white', fontSize: 8}}
              />
            </View>
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerFullScreen: {
    position: 'absolute',
    top: 0,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
  container: {
    height: 250,
    width: 350,
    marginLeft: '2%',
    marginRight: '2%',
  },
  fullScreenContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  carousel: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
    right: 0,
  },
  cardContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  cardImage: {
    width: 50,
    height: 80,
    resizeMode: 'cover',
    marginTop: 0,
  },
  cardTitle: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center',
  },
  checkBoxContainer: {
    backgroundColor: 'transparent',
    height: 15,
    borderColor: 'transparent',
    margin: 0,
  },
});

export default MapScreen;
