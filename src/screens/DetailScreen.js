import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import HomeDetailHeader from '../components/HomeDetailHeader';
import ScreenWrapper from '../components/ScreenWrapper';
import NavigationService from '../navigation/NavigationService';

const Professional_Services = [
  {
    id: 1,
    name: 'Disinfection Sanitization',
    image: require('../Assets/SearchSecreen/007-spray.png'),
  },
  {
    id: 2,
    name: 'Upholstery Cleaning',
    image: require('../Assets/SearchSecreen/010-couch.png'),
  },
  {
    id: 3,
    name: 'Deep Cleaning',
    image: require('../Assets/SearchSecreen/005-vacuum.png'),
  },
  {
    id: 4,
    name: 'Regular Cleaning',
    image: require('../Assets/SearchSecreen/001-maid.png'),
  },
  {
    id: 5,
    name: 'Laundry',
    image: require('../Assets/SearchSecreen/008-washing-machine.png'),
  },
  {
    id: 6,
    name: 'Aircon Service',
    image: require('../Assets/SearchSecreen/012-air-conditioner.png'),
  },
  {
    id: 7,
    name: 'Plumber',
    image: require('../Assets/SearchSecreen/001-plumber.png'),
  },
  {
    id: 8,
    name: 'Electrician',
    image: require('../Assets/SearchSecreen/003-electrician.png'),
  },
  {
    id: 9,
    name: 'Pest Control',
    image: require('../Assets/SearchSecreen/bus.png'),
  },
];

export default class DetailScreen extends Component {
  render() {
    return (
      <ScreenWrapper colors={['#FFFFFF', '#FFFFFF']}>
        <HomeDetailHeader navigation={this.props.navigation} />

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignSelf: 'center',
            alignItems: 'center',
            paddingVertical: 10,
          }}>
          {Professional_Services.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  NavigationService.navigate('ServiceWorkingComments')
                }
                key={index}
                activeOpacity={1}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: Dimensions.get('screen').width / 4,
                  marginVertical: 10,
                }}>
                <View
                  style={{
                    backgroundColor: 'white',
                    elevation: 1.5,
                    borderRadius: 70,
                    padding: 20,
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{height: 35, width: 35}}
                    source={item.image}
                  />
                </View>
                <Text
                  style={{
                    fontSize: 12,
                    textAlign: 'center',
                    paddingVertical: 5,
                    fontFamily: 'OpenSans-Regular',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <Image
          source={require('../Assets/HomeScreen/sideImageHome.png')}
          style={{position: 'absolute', bottom: 10, right: -40}}
        />
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({});
