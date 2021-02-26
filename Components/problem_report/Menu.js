import React from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';

import {faFire, faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import Card from './Card';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    let propsCity = props.route.params ? props.route.params.city : 'Loznica';
    let emailVanredne = 'vanrednesituacije@loznica.rs';
    let emailKomunalne = 'acoobrenovic1@gmail.com';
    switch (propsCity) {
      case 'Ljubovija':
        emailVanredne = 'nemanja.jovanovic93@hotmail.rs';
        emailKomunalne = 'standard.ljubovija@gmail.com';
        break;
      case 'Krupanj':
        emailVanredne = 'krupanjso@ptt.rs';
        emailKomunalne = '1.maj@mts.rs';
        break;
      case 'Mali Zvornik':
        emailVanredne = 'rakicdragan.mz@gmail.com';
        emailKomunalne = 'uprava@jkpdrina.rs';
        break;
    }
    this.state = {
      city: propsCity,
      emailKomunalne: emailKomunalne,
      emailVanredne: emailVanredne,
    };
  }

  render() {
    return (
      <ScrollView>
        <View
          style={{marginBottom: '20%', marginLeft: '10%', marginRight: '10%'}}>
          <Card
            title={'Vanredne Situacije - prijava'}
            text={'Prijavite vanrednu situaciju'}
            icon={faFire}
            color={'red'}
            emailVanredne={this.state.emailVanredne}
            emailKomunalne={this.state.emailKomunalne}
            navigation={this.props.navigation}
            navigateTo="Form"
          />
          <Card
            title={'Komunalni problemi - prijava'}
            text={'Prijavite komunalni problem'}
            icon={faCalendarAlt}
            color={'blue'}
            emailVanredne={this.state.emailVanredne}
            emailKomunalne={this.state.emailKomunalne}
            navigation={this.props.navigation}
            navigateTo="Form"
          />
        </View>
      </ScrollView>
    );
  }
}

export default Menu;
