import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  ImageBackground,
  FlatList,
} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import {STATUSBAR_HEIGHT} from '../constants';
import {normalizeX} from '../constants';
import NavigationService from '../navigation/NavigationService';

const data = [{id: 1}, {id: 2}];

export default class BookLogsScreen extends Component {
  state = {index: 0, modalVisible: false, showBokking: false};

  render() {
    return (
      <ScreenWrapper colors={['#F8F8FA', '#F8F8FA']} doubleTapExit>
        {/* ******** Header View ******** */}
        <View
          style={{
            paddingTop: STATUSBAR_HEIGHT * 1.2,
            backgroundColor: '#F3DB6D',
          }}>
          <Text style={{fontFamily: 'OpenSans-Bold', textAlign: 'center'}}>
            Bookings
          </Text>

          <View
            style={{
              width: Dimensions.get('screen').width,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              alignSelf: 'center',
              marginBottom: 5,
              marginTop: 15,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({index: 0});
              }}>
              <View>
                <Text
                  style={{
                    fontFamily: 'OpenSans-Regular',
                    fontSize: 14,
                    color: this.state.index == '0' ? '#008677' : 'black',
                  }}>
                  Bookings
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.setState({index: 1});
              }}
              style={{marginLeft: 20}}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'OpenSans-Regular',
                  color: this.state.index == '1' ? '#008677' : 'black',
                }}>
                Request
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.setState({index: 2});
              }}
              style={{marginLeft: 20}}>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: 'OpenSans-Regular',
                  color: this.state.index == '2' ? '#008677' : 'black',
                }}>
                History
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              borderColor: '#008677',
              borderWidth: 2,
              width: '33%',
              alignSelf:
                this.state.index == '1'
                  ? 'center'
                  : this.state.index == '2'
                  ? 'flex-end'
                  : 'flex-start',
            }}
          />
        </View>

        {/* ********** Body View ********** */}

        {this.state.index == '0' ? (
          this.state.showBokking ? (
            <FlatList
              data={data}
              contentContainerStyle={{paddingBottom: 20}}
              ListHeaderComponent={
                <Text
                  style={{
                    paddingHorizontal: 20,
                    marginTop: 20,
                    fontFamily: 'OpenSans-Bold',
                  }}>
                  Upcoming
                </Text>
              }
              keyExtractor={item => item.id}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      backgroundColor: 'white',
                      marginHorizontal: 20,
                      marginTop: 20,
                      elevation: 5,
                      borderRadius: 5,
                    }}>
                    <View
                      style={{
                        backgroundColor: '#008677',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: 5,
                      }}>
                      <Text
                        style={{
                          fontSize: 12,
                          color: 'white',
                          fontFamily: 'OpenSans-Bold',
                        }}>
                        Helper: ABC Cleaning - Addie Ang
                      </Text>
                      <TouchableOpacity>
                        <Image
                          source={require('../Assets/BookLogsScreen/notifyMsg.png')}
                        />
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        paddingVertical: 15,
                        paddingHorizontal: 5,
                      }}>
                      <Text
                        style={{
                          fontSize: 12,
                          paddingVertical: 5,
                          fontFamily: 'OpenSans-Bold',
                        }}>
                        Deep Cleaning{' '}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                          paddingVertical: 5,
                          fontFamily: 'OpenSans-Bold',
                        }}>
                        Friday, 10 June 2021{' '}
                      </Text>
                      <Text
                        style={{fontSize: 12, fontFamily: 'OpenSans-Regular'}}>
                        9:00 AM - 1:00 PM (4 hours){' '}
                      </Text>
                      <Text
                        style={{fontSize: 12, fontFamily: 'OpenSans-Regular'}}>
                        15 Woodland Drive, Singapore, 353015{' '}
                      </Text>
                    </View>

                    {index == '1' ? (
                      <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() =>
                          NavigationService.navigate('BookingDetail')
                        }
                        style={{
                          backgroundColor: '#9CD2B9',
                          paddingVertical: 5,
                        }}>
                        <Text
                          style={{
                            fontSize: 10,
                            fontFamily: 'OpenSans-Bold',
                            color: 'black',
                            textAlign: 'center',
                          }}>
                          Amend{' '}
                        </Text>
                      </TouchableOpacity>
                    ) : null}
                  </View>
                );
              }}
            />
          ) : (
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
              }}>
              <ImageBackground
                style={{
                  width: 200,
                  height: 200,
                  alignItems: 'center',
                }}
                source={require('../Assets/BookLogsScreen/Ellipse314.png')}>
                <Image
                  style={{width: 60, height: 180}}
                  source={require('../Assets/BookLogsScreen/boy.png')}
                />
              </ImageBackground>

              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 13, fontFamily: 'OpenSans-Bold'}}>
                  You have no bookings currently
                </Text>
                <Text style={{fontSize: 12, fontFamily: 'OpenSans-Regular'}}>
                  After you have a confirmed bookings, it will appear here.
                </Text>
              </View>

              <TouchableWithoutFeedback
                onPress={() => {
                  NavigationService.navigate('SearchScreen');
                  setTimeout(() => {
                    this.setState({showBokking: true});
                  }, 1000);
                }}>
                <View
                  style={{
                    marginTop: '10%',
                    backgroundColor: '#9CD2B9',
                    width: normalizeX(200),
                    height: 41,
                    borderRadius: 5,
                    justifyContent: 'space-evenly',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../Assets/HomeScreen/searchIcon.png')}
                    style={{
                      height: 15,
                      width: 15,
                      tintColor: 'black',
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 14,
                      color: 'black',
                    }}>
                    Search for a service
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          )
        ) : this.state.index == '1' ? (
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <ImageBackground
              style={{
                width: 250,
                height: 250,
                alignItems: 'center',
              }}
              source={require('../Assets/BookLogsScreen/Ellipse314.png')}>
              <Image
                style={{width: 90, height: 240}}
                source={require('../Assets/BookLogsScreen/boy.png')}
              />
            </ImageBackground>

            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 13, fontFamily: 'OpenSans-Bold'}}>
                You have no booking requests currently
              </Text>
            </View>
          </View>
        ) : (
          <FlatList
            data={data}
            contentContainerStyle={{paddingBottom: 20}}
            ListHeaderComponent={
              <Text
                style={{
                  paddingHorizontal: 20,
                  marginTop: 20,
                  fontFamily: 'OpenSans-Bold',
                }}>
                Upcoming
              </Text>
            }
            keyExtractor={item => item.id}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    backgroundColor: 'white',
                    marginHorizontal: 20,
                    marginTop: 20,
                    elevation: 5,
                    borderRadius: 5,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#008677',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'white',
                        fontFamily: 'OpenSans-Bold',
                      }}>
                      Helper: ABC Cleaning - Addie Ang
                    </Text>
                    <TouchableOpacity>
                      <Image
                        source={require('../Assets/BookLogsScreen/notifyMsg.png')}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      paddingVertical: 15,
                      paddingHorizontal: 5,
                    }}>
                    <Text
                      style={{
                        fontSize: 12,
                        paddingVertical: 5,
                        fontFamily: 'OpenSans-Bold',
                      }}>
                      Deep Cleaning{' '}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        paddingVertical: 5,
                        fontFamily: 'OpenSans-Bold',
                      }}>
                      Friday, 10 June 2021{' '}
                    </Text>
                    <Text
                      style={{fontSize: 10, fontFamily: 'OpenSans-Regular'}}>
                      9:00 AM - 1:00 PM (4 hours){' '}
                    </Text>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}>
                      <Text
                        style={{fontSize: 10, fontFamily: 'OpenSans-Regular'}}>
                        15 Woodland Drive, Singapore, 353015{' '}
                      </Text>

                      <Text
                        style={{
                          fontSize: 10,
                          fontFamily: 'OpenSans-Bold',
                          color: index == 0 ? 'red' : '#008677',
                        }}>
                        {index == 0 ? ' No review yet' : 'Review submitted'}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        )}

        {/* ********** Behind Images View ********** */}
        <Image
          source={require('../Assets/HomeScreen/sideImageHome.png')}
          style={{position: 'absolute', top: 120, right: -40}}
        />

        <Image
          source={require('../Assets/ProfileScreen/profileYellow.png')}
          style={{position: 'absolute', bottom: -20, left: -40}}
        />
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 22,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#9CD2B9',
  },
  textStyle: {
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Montserrat-Medium',
  },
});
