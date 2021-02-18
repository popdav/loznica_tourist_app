import React from 'react';
import {Image, Text, View, ScrollView} from 'react-native';
import {Card} from 'react-native-elements';

import MapScreen from './Map';

class TouristPage extends React.Component {
  constructor(props) {
    super(props);
    props.navigation.setOptions({title: props.route.params.title});
  }

  render() {
    return (
      <ScrollView style={{marginLeft: '3%', marginRight: '3%'}}>
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
          {/*<View style={{alignItems:'flex-start', flexDirection:'row', marginBottom: '2%'}}>*/}
          {/*    <Stars*/}
          {/*        default={0}*/}
          {/*        count={5}*/}
          {/*        half={true}*/}
          {/*        starSize={16}*/}
          {/*        disabled={true}*/}
          {/*        fullStar={<FontAwesomeIcon size={ 20 } style={{color:'#ffd700'}} icon={faStar}/>}*/}
          {/*        emptyStar={<FontAwesomeIcon size={ 20 } style={{color:'grey'}} icon={faStar}/>}*/}
          {/*        halfStar={<FontAwesomeIcon size={ 20 } style={{color:'#ffd700'}} icon={faStarHalfAlt}/>}*/}
          {/*    />*/}
          {/*    <Text style={{color: '#ff4500'}}> No reviews</Text>*/}
          {/*</View>*/}

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
