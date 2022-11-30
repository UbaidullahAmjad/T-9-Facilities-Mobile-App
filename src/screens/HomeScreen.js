import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import ScreenWrapper from '../components/ScreenWrapper';
import {STATUSBAR_HEIGHT} from '../constants';
import {FlatGrid} from 'react-native-super-grid';
import {normalizeX} from '../constants';
import NavigationService from '../navigation/NavigationService';

const {height, width} = Dimensions.get('screen');
const itemWidth = (width / 3) * 2.5;
const gap = (width - itemWidth) / 4;

const Category_Data1 = [
  {id: 1, image: require('../Assets/HomeScreen/booknow.png')},
  {id: 2, image: require('../Assets/HomeScreen/booknow.png')},
];

const Recommended = [
  {
    id: 1,
    name: 'Disinfection & Sanitisation',
    desc: 'In lieu of Covid 19, it will be helpful to do a thorough disinfecting of your house to protect your family.',
    image: require('../Assets/HomeScreen/recommended1.png'),
  },
  {
    id: 2,
    name: 'Home Cleaning',
    desc: 'A one time clean before the rise of any occasion.',
    image: require('../Assets/HomeScreen/recommended2.png'),
  },
  {
    id: 3,
    name: 'Laundry',
    desc: 'A one time clean before the rise of any occasion',
    image: require('../Assets/HomeScreen/laundry123.png'),
  },
];

const endSLider = [
  {
    id: 1,
    name: 'Sandy Lim (Laundry)',
    desc: 'Sandy is an expert in laundry cleaning from daily wear to curtain with different cleaning care methods. She is one of the favourite booked by our consumers.',
    image: require('../Assets/HomeScreen/laundry.png'),
  },
  {
    id: 2,
    name: 'Ali Mohammad (Handy Man)',
    desc: 'Ali is not only experienced in drilling and mounting of furniture, but has a vast knowledge of all electrical and installations.',
    image: require('../Assets/HomeScreen/laundry2.png'),
  },
];

const Professional_Services = [
  {
    id: 1,
    name: 'Home Cleaning',
    image: require('../Assets/HomeScreen/004-house-cleaning.png'),
  },
  {
    id: 2,
    name: 'Fitness Trainer',
    image: require('../Assets/HomeScreen/001-lotus.png'),
  },
  {
    id: 3,
    name: 'Beauty Services',
    image: require('../Assets/HomeScreen/003-makeup.png'),
  },
  {
    id: 4,
    name: 'Workforce manpower',
    image: require('../Assets/HomeScreen/005-team.png'),
  },
];

export default class HomeScreen extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  render() {
    return (
      <ScreenWrapper colors={['#FFFFFF', '#FFFFFF']} doubleTapExit>
        <ScrollView>
          <ImageBackground
            source={require('../Assets/HomeScreen/HomeHeaderImage.png')}
            style={{
              height: width / 1.5,
              width: width,
              paddingTop: STATUSBAR_HEIGHT,
              paddingHorizontal: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../Assets/HomeScreen/location.png')} />
                <Text style={{fontSize: 12, fontFamily: 'OpenSans-Light'}}>
                  {' 18 Dunearn Road  '}
                </Text>
                <Image
                  style={{marginTop: 5}}
                  source={require('../Assets/HomeScreen/dropdown.png')}
                />
              </View>
              <TextInput
                // placeholder=" search"
                placeholderTextColor={'#DFDFDF'}
                style={[styles.inputtEXT, {width: 150}]}></TextInput>

              <Image
                source={require('../Assets/HomeScreen/searchIcon.png')}
                style={{
                  height: 12,
                  width: 12,
                  position: 'absolute',
                  tintColor: '#DFDFDF',
                  bottom: 10,
                  right: 20,
                }}
              />
            </View>
            <View style={{marginVertical: 20}}>
              <Text
                style={{
                  color: '#008677',
                  fontSize: 24,
                  width: '50%',
                  fontFamily: 'OpenSans-Bold',
                }}>
                Hi Lukas,
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'OpenSans-Bold',
                  fontSize: 16,
                }}>
                Discover
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'OpenSans-Bold',
                  fontSize: 16,
                }}>
                Home Helper Services
              </Text>
            </View>
          </ImageBackground>

          {/* **************** Promotions View **************** */}
          <View style={{paddingHorizontal: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{fontFamily: 'OpenSans-Bold'}}>Promotions</Text>
              <Text
                style={{
                  fontSize: 12,
                  color: '#358677',
                  fontFamily: 'OpenSans-Regular',
                }}>
                View more
              </Text>
            </View>

            <ScrollView
              nestedScrollEnabled
              horizontal
              pagingEnabled
              decelerationRate="fast"
              style={{alignSelf: 'center', paddingTop: 10}}
              showsHorizontalScrollIndicator={false}
              snapToInterval={itemWidth + gap}>
              {Category_Data1.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={{marginHorizontal: 5, width: itemWidth / 2}}
                    key={index}
                    activeOpacity={0.9}>
                    <Image
                      resizeMode="contain"
                      source={item.image}
                      style={{
                        height: (width / 2.2) * 0.7,
                        width: width / 2.4,
                      }}
                    />
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>

          <View
            style={{
              borderColor: '#F8F8FA',
              borderWidth: 1,
              marginTop: 10,
            }}
          />

          {/* **************** Our Professional services  View **************** */}

          <FlatGrid
            nestedScrollEnabled={true}
            data={Professional_Services}
            ListHeaderComponent={
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 10,
                  marginHorizontal: 20,
                  marginBottom: 20,
                }}>
                <Text style={{fontFamily: 'OpenSans-Bold'}}>
                  Our Professional services
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#358677',
                    fontFamily: 'OpenSans-Regular',
                  }}>
                  View all services
                </Text>
              </View>
            }
            itemDimension={normalizeX(150)}
            spacing={10}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => NavigationService.navigate('DetailScreen')}
                  activeOpacity={1}
                  style={{justifyContent: 'center', alignItems: 'center'}}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      elevation: 2,
                      borderRadius: 70,
                      padding: 30,
                    }}>
                    <Image
                      resizeMode="contain"
                      style={{height: 60, width: 60}}
                      source={item.image}
                    />
                  </View>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'OpenSans-Regular',
                      marginVertical: 10,
                    }}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />

          <View
            style={{
              borderColor: '#F8F8FA',
              borderWidth: 1,
              marginVertical: 10,
            }}
          />

          {/* **************** Recommended View **************** */}
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
              }}>
              <Text style={{fontFamily: 'OpenSans-Bold'}}>Recommended</Text>
              <Text
                style={{
                  fontSize: 12,
                  color: '#358677',
                  fontFamily: 'OpenSans-Regular',
                }}>
                View more
              </Text>
            </View>

            <ScrollView
              nestedScrollEnabled
              horizontal
              pagingEnabled
              decelerationRate="fast"
              style={{paddingHorizontal: 10}}
              showsHorizontalScrollIndicator={false}
              snapToInterval={itemWidth + gap}>
              {Recommended.map((item, index) => {
                return (
                  <TouchableOpacity
                    style={{marginLeft: 10, width: itemWidth / 2}}
                    key={index}
                    activeOpacity={0.9}>
                    <Image
                      resizeMode="contain"
                      source={item.image}
                      style={{
                        height: (width / 2.2) * 0.7,
                        width: width / 2.4,
                      }}
                    />
                    <View>
                      <Text style={{fontSize: 12, fontFamily: 'OpenSans-Bold'}}>
                        {item.name}
                      </Text>

                      <Text
                        style={{fontSize: 8, fontFamily: 'OpenSans-Regular'}}>
                        {item.desc}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>

          <View
            style={{
              borderColor: '#F8F8FA',
              borderWidth: 1,
              marginTop: 10,
            }}
          />

          {/* **************** Your Featured Vendor this month View **************** */}

          <View style={{marginTop: 20}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 20,
              }}>
              <Text style={{fontFamily: 'OpenSans-Bold'}}>
                Your Featured Vendor this month
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'OpenSans-Regular',
                  color: '#358677',
                }}>
                View more
              </Text>
            </View>

            <ScrollView
              nestedScrollEnabled
              horizontal
              pagingEnabled
              decelerationRate="fast"
              style={{
                paddingTop: 10,
                paddingHorizontal: 10,
              }}
              showsHorizontalScrollIndicator={false}
              snapToInterval={itemWidth + gap}>
              {endSLider.map((item, index) => {
                return (
                  <View
                    style={{marginLeft: 10, width: itemWidth / 2}}
                    key={index}>
                    <Image
                      resizeMode="contain"
                      source={item.image}
                      style={{
                        height: (width / 2.2) * 0.7,
                        width: width / 2.4,
                      }}
                    />
                    <View>
                      <Text style={{fontSize: 12, fontFamily: 'OpenSans-Bold'}}>
                        {item.name}
                      </Text>

                      <Text
                        style={{fontSize: 8, fontFamily: 'OpenSans-Regular'}}>
                        {item.desc}
                      </Text>
                    </View>

                    <TouchableOpacity
                      style={{
                        backgroundColor: '#9CD2B9',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 2,
                        marginVertical: 5,
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          paddingVertical: 2,
                          fontSize: 12,
                          fontFamily: 'OpenSans-Bold',
                        }}>
                        Book now
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </View>

          <Image
            source={require('../Assets/HomeScreen/sideImageHome.png')}
            style={{position: 'absolute', bottom: 10, right: -40}}
          />
        </ScrollView>
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({
  inputtEXT: {
    borderColor: '#F2F4F5',
    borderWidth: 2,
    borderRadius: 5,
    height: 35,
    fontSize: 12,
    backgroundColor: 'white',
    fontFamily: 'Mulish-Regular',
  },
});
