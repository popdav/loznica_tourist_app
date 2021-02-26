import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Card} from 'react-native-elements';
import Stars from 'react-native-stars';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar, faStarHalfAlt} from '@fortawesome/free-solid-svg-icons';
const crkva1 = require('./crkva1.jpg');
class TouristObject extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity
        style={{width: '100%'}}
        onPress={() =>
          this.props.navigation.navigate('Hello World', {
            title: this.props.title,
            img: this.props.img,
            desc: this.props.desc,
            object: this.props.object,
          })
        }>
        <Card containerStyle={{width: '80%'}}>
          {this.props.img ? <Card.Image source={this.props.img} /> : <Text />}
          <Card.Title
            style={{color: '#ff4500', textAlign: 'left', alignSelf: 'stretch'}}>
            {this.props.title}
          </Card.Title>
          <View
            style={{
              alignItems: 'flex-start',
              flexDirection: 'row',
              marginBottom: '2%',
            }}>
            {/*<Stars*/}
            {/*    default={0}*/}
            {/*    count={5}*/}
            {/*    half={true}*/}
            {/*    starSize={16}*/}
            {/*    disabled={true}*/}
            {/*    fullStar={<FontAwesomeIcon size={ 20 } style={{color:'#ffd700'}} icon={faStar}/>}*/}
            {/*    emptyStar={<FontAwesomeIcon size={ 20 } style={{color:'grey'}} icon={faStar}/>}*/}
            {/*    halfStar={<FontAwesomeIcon size={ 20 } style={{color:'#ffd700'}} icon={faStarHalfAlt}/>}*/}
            {/*/>*/}
            {/*<Text style={{color: '#ff4500'}}> No reviews</Text>*/}
          </View>
          {/*<Text style={{marginBottom: 10}}>*/}
          {/*    {this.props.desc}*/}
          {/*</Text>*/}
        </Card>
      </TouchableOpacity>
    );
  }
}

export default TouristObject;
