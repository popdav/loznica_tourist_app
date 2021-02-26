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
const Church = require('./Icons/Church.png');
const Running = require('./Icons/Running.png');
const Book = require('./Icons/Book.png');
const Parking = require('./Icons/Parking.png');

class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    let data = [];
    if (props.data) {
      data = props.data;
    } else if (props.route.params.data) {
      data = props.route.params.data;
    }
    this.state = {
      data: data,
      position: {
        latitude: 44.4,
        longitude: 19.5,
      },
      region: {
        latitude: 44.4,
        longitude: 19.5,
        latitudeDelta: 0.8,
        longitudeDelta: 0.1,
      },
      isChurchesSelected: true,
      isRestaurantsSelected: true,
      isHotelsSelected: true,
      isSportSelected: true,
      isCultureSelected: true,
      isParkingSelected: true,
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

  hotelsSelected = () => {
    this.setState({isHotelsSelected: !this.state.isHotelsSelected});
  };

  sportSelected = () => {
    this.setState({isSportSelected: !this.state.isSportSelected});
  };

  cultureSelected = () => {
    this.setState({isCultureSelected: !this.state.isCultureSelected});
  };

  parkingSelected = () => {
    this.setState({isParkingSelected: !this.state.isParkingSelected});
  };

  returnMarker = (e, image, i) => {
    return (
      <Marker
        key={i}
        coordinate={{latitude: e.latitude, longitude: e.longitude}}
        image={image}>
        <Callout>
          <View
            style={{
              width: 100,
              height: 100,
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
            <Text>{e.name}</Text>
          </View>
        </Callout>
      </Marker>
    );
  };

  render() {
    return (
      <View
        style={
          this.state.fullScreen ? styles.fullScreenContainer : styles.container
        }>
        <MapView initialRegion={this.state.region} style={styles.map}>
          {this.state.data.map((e, i) => {
            if (
              e.type === 'Crkve i Manastiri' &&
              this.state.isChurchesSelected
            ) {
              return this.returnMarker(e, Church, i);
            } else if (
              e.type === 'Restoran' &&
              this.state.isRestaurantsSelected
            ) {
              return this.returnMarker(e, Restaurant, i);
            } else if (e.type === 'Kultura' && this.state.isCultureSelected) {
              return this.returnMarker(e, Book, i);
            } else if (e.type === 'Smeštaj' && this.state.isHotelsSelected) {
              return this.returnMarker(e, Hotel, i);
            } else if (
              e.type === 'Sport i rekreacija' &&
              this.state.isSportSelected
            ) {
              return this.returnMarker(e, Running, i);
            } else if (e.type === 'Parking' && this.state.isParkingSelected) {
              return this.returnMarker(e, Parking, i);
            }
          })}
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
                    <Image style={{width: 8, height: 10}} source={Church} />{' '}
                    Crkve i manastiri
                  </Text>
                }
                iconType="font-awesome"
                size={16}
                containerStyle={styles.checkBoxContainer}
              />
              <CheckBox
                checked={this.state.isHotelsSelected}
                onPress={this.hotelsSelected}
                title={
                  <Text style={{color: 'white', fontSize: 8}}>
                    <Image style={{width: 8, height: 10}} source={Hotel} />{' '}
                    Smeštaj
                  </Text>
                }
                iconType="font-awesome"
                size={16}
                containerStyle={styles.checkBoxContainer}
                textStyle={{color: 'white', fontSize: 8}}
              />
              <CheckBox
                checked={this.state.isRestaurantsSelected}
                onPress={this.restaurantsSelected}
                title={
                  <Text style={{color: 'white', fontSize: 8}}>
                    <Image style={{width: 8, height: 10}} source={Restaurant} />{' '}
                    Restorani
                  </Text>
                }
                iconType="font-awesome"
                size={16}
                containerStyle={styles.checkBoxContainer}
                textStyle={{color: 'white', fontSize: 8}}
              />
              <CheckBox
                checked={this.state.isCultureSelected}
                onPress={this.cultureSelected}
                title={
                  <Text style={{color: 'white', fontSize: 8}}>
                    <Image style={{width: 8, height: 10}} source={Book} />{' '}
                    Kultura
                  </Text>
                }
                iconType="font-awesome"
                size={16}
                containerStyle={styles.checkBoxContainer}
                textStyle={{color: 'white', fontSize: 8}}
              />
              <CheckBox
                checked={this.state.isSportSelected}
                onPress={this.sportSelected}
                title={
                  <Text style={{color: 'white', fontSize: 8}}>
                    <Image style={{width: 8, height: 10}} source={Running} />{' '}
                    Sport i rekreacija
                  </Text>
                }
                iconType="font-awesome"
                size={16}
                containerStyle={styles.checkBoxContainer}
                textStyle={{color: 'white', fontSize: 8}}
              />
              <CheckBox
                checked={this.state.isParkingSelected}
                onPress={this.parkingSelected}
                title={
                  <Text style={{color: 'white', fontSize: 8}}>
                    <Image style={{width: 8, height: 10}} source={Parking} />{' '}
                    Parking
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
