import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import BookLogsHeader from '../components/BookLogsHeader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import NavigationService from '../navigation/NavigationService';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}];

export default class BookNowScreen extends Component {
  state = {
    isDatePickerVisible: false,
    modalVisible: false,
    checkBox: 0,
  };

  showDatePicker = () => {
    this.setState({isDatePickerVisible: true});
  };

  hideDatePicker = () => {
    this.setState({isDatePickerVisible: false});
  };

  handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    this.hideDatePicker();
  };
  render() {
    return (
      <ScreenWrapper colors={['#F8F8FA', '#F8F8FA']}>
        <BookLogsHeader
          title={'Disinfection & Sanitization'}
          navigation={this.props.navigation}
        />

        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{alignItems: 'center'}}
          keyboardShouldPersistTaps="handled">
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{padding: 20}}>
              <Text style={{fontFamily: 'OpenSans-Bold'}}>Enter Details</Text>
              <View style={{marginTop: '2%'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderColor: '#F2F4F5',
                    borderWidth: 2,
                    borderRadius: 5,
                    paddingHorizontal: 5,
                  }}>
                  <Image
                    source={require('../Assets/ProfileScreen/location.png')}
                    style={{
                      tintColor: '#9CD2B9',
                    }}
                  />
                  <TextInput
                    placeholder=" Enter your address"
                    placeholderTextColor={'#DFDFDF'}
                    style={[
                      styles.inputtEXT,
                      {
                        width: Dimensions.get('screen').width / 1.2,
                        marginLeft: 5,
                      },
                    ]}
                  />
                </View>
              </View>

              {/* *********************** Calender Date and Time *********************** */}
              <DateTimePickerModal
                isVisible={this.state.isDatePickerVisible}
                mode="time"
                locale="en_GB"
                onConfirm={this.handleConfirm}
                onCancel={this.hideDatePicker}
              />

              <TouchableWithoutFeedback onPress={this.showDatePicker}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderColor: '#F2F4F5',
                    borderWidth: 2,
                    borderRadius: 5,
                    paddingHorizontal: 5,
                    marginTop: '2%',
                  }}>
                  <Image
                    source={require('../Assets/BookLogsScreen/feather-calendar.png')}
                    style={{
                      tintColor: '#9CD2B9',
                    }}
                  />
                  <TextInput
                    editable={false}
                    placeholder={' Enter booking date & time'}
                    placeholderTextColor={'#DFDFDF'}
                    style={[
                      styles.inputtEXT,
                      {
                        width: Dimensions.get('screen').width / 1.2,
                        marginLeft: 5,
                      },
                    ]}
                  />
                </View>
              </TouchableWithoutFeedback>
              {/* *********************** Calender Date and Time *********************** */}

              <TouchableWithoutFeedback
                onPress={() =>
                  this.setState({modalVisible: !this.state.modalVisible})
                }>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderColor: '#F2F4F5',
                    borderWidth: 2,
                    borderRadius: 5,
                    paddingHorizontal: 5,
                    marginTop: '2%',
                  }}>
                  <Image
                    source={require('../Assets/BookLogsScreen/material-person.png')}
                    style={{
                      tintColor: '#9CD2B9',
                    }}
                  />
                  <TextInput
                    editable={false}
                    placeholder=" Choose your helper"
                    placeholderTextColor={'#DFDFDF'}
                    style={[
                      styles.inputtEXT,
                      {
                        width: Dimensions.get('screen').width / 1.2,
                        marginLeft: 5,
                      },
                    ]}
                  />
                </View>
              </TouchableWithoutFeedback>

              <View style={{marginTop: '2%'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderColor: '#F2F4F5',
                    borderWidth: 2,
                    borderRadius: 5,
                    paddingHorizontal: 5,
                  }}>
                  <Image
                    source={require('../Assets/BookLogsScreen/awesome-building.png')}
                    style={{
                      tintColor: '#9CD2B9',
                    }}
                  />
                  <TextInput
                    placeholder=" Enter types of House"
                    placeholderTextColor={'#DFDFDF'}
                    style={[
                      styles.inputtEXT,
                      {
                        width: Dimensions.get('screen').width / 1.2,
                        marginLeft: 5,
                      },
                    ]}
                  />
                </View>
              </View>

              <View style={{marginTop: '2%'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderColor: '#F2F4F5',
                    borderWidth: 2,
                    borderRadius: 5,
                    paddingHorizontal: 5,
                  }}>
                  <Image
                    source={require('../Assets/BookLogsScreen/material-photo-size-select-small.png')}
                    style={{
                      tintColor: '#9CD2B9',
                    }}
                  />
                  <TextInput
                    placeholder=" Enter no. of Room"
                    placeholderTextColor={'#DFDFDF'}
                    style={[
                      styles.inputtEXT,
                      {
                        width: Dimensions.get('screen').width / 1.2,
                        marginLeft: 5,
                      },
                    ]}
                  />
                </View>
              </View>

              <View style={{marginTop: '2%'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderColor: '#F2F4F5',
                    borderWidth: 2,
                    borderRadius: 5,
                    paddingHorizontal: 5,
                  }}>
                  <Image
                    source={require('../Assets/BookLogsScreen/ionic-md-repeat.png')}
                    style={{
                      tintColor: '#9CD2B9',
                    }}
                  />
                  <TextInput
                    placeholder=" Enter no. of service required"
                    placeholderTextColor={'#DFDFDF'}
                    style={[
                      styles.inputtEXT,
                      {
                        width: Dimensions.get('screen').width / 1.2,
                        marginLeft: 5,
                      },
                    ]}
                  />
                </View>
              </View>

              <TouchableWithoutFeedback
                onPress={() => NavigationService.navigate('paymentMethod')}>
                <View
                  style={{
                    marginTop: '10%',
                    backgroundColor: '#9CD2B9',
                    width: Dimensions.get('screen').width / 1.13,
                    height: 41,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'OpenSans-Bold',
                      fontSize: 13,
                      color: 'white',
                    }}>
                    Next
                  </Text>
                </View>
              </TouchableWithoutFeedback>

              <Text
                style={{
                  textAlign: 'center',
                  color: '#008677',
                  fontSize: 10,
                  fontFamily: 'OpenSans-Bold',
                  marginVertical: 10,
                }}>
                Estimated turn around time - 5 days
              </Text>

              <Text
                style={{
                  textAlign: 'justify',
                  fontSize: 10,
                  marginVertical: 10,
                  marginRight: 10,
                  fontFamily: 'OpenSans-Regular',
                }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Text>

              <View style={{marginVertical: 10}}>
                <Text style={{fontSize: 12, fontFamily: 'OpenSans-Regular'}}>
                  Surcharges:
                </Text>
                <Text
                  style={{
                    textAlign: 'justify',
                    fontFamily: 'OpenSans-Regular',

                    fontSize: 10,
                  }}>
                  There is no additional weekend surcharge, admin fee or surge
                  pricing.
                </Text>
              </View>
            </View>

            {/* ****************** Modal View ****************** */}
            <Modal
              animationType="slide"
              transparent={true}
              visible={this.state.modalVisible}
              onRequestClose={() => {
                this.setState({modalVisible: !this.state.modalVisible});
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#F3DB6D',
                      padding: 20,
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        this.setState({modalVisible: !this.state.modalVisible})
                      }
                      style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        alignSelf: 'center',
                      }}>
                      <Image
                        source={require('../Assets/NotificationScreen/cross.png')}
                      />
                    </TouchableOpacity>
                    <Text
                      style={{
                        textAlign: 'center',
                        fontFamily: 'OpenSans-Regular',
                      }}>
                      {'Please select your desired helper for '}
                      <Text style={{fontFamily: 'OpenSans-Bold'}}>
                        {'Disinfection & Sanitization'}
                      </Text>
                    </Text>
                  </View>

                  <View style={{margin: 10}}>
                    <Text
                      style={{fontSize: 12, fontFamily: 'OpenSans-Regular'}}>
                      Available on 5 May 2021 1:30PM
                    </Text>

                    <View style={{marginTop: 10}}>
                      {data.map((item, index) => {
                        return (
                          <View
                            key={index}
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              padding: 5,
                              marginTop: 5,
                            }}>
                            <Text
                              style={{
                                fontSize: 12,
                                fontFamily: 'OpenSans-Regular',
                              }}>
                              Samantha Peh
                            </Text>
                            <Text
                              style={{
                                fontSize: 12,
                                fontFamily: 'OpenSans-Regular',
                              }}>
                              1.2km away
                            </Text>
                            <Text
                              style={{
                                fontSize: 12,
                                fontFamily: 'OpenSans-Regular',
                              }}>
                              4.2 Stars
                            </Text>

                            <Image
                              source={require('../Assets/BookNow/material-rate-review.png')}
                            />

                            {this.state.checkBox === index ? (
                              <TouchableOpacity
                                onPress={() => {
                                  this.setState({checkBox: index});
                                }}
                                style={{
                                  backgroundColor: 'white',
                                  elevation: 5,
                                  padding: 5,
                                  borderRadius: 20,
                                }}>
                                <View
                                  style={{
                                    backgroundColor: '#9CD2B9',
                                    padding: 5,
                                    borderRadius: 20,
                                  }}></View>
                              </TouchableOpacity>
                            ) : (
                              <TouchableOpacity
                                onPress={() => {
                                  this.setState({checkBox: index});
                                }}
                                style={{
                                  backgroundColor: 'white',
                                  elevation: 5,
                                  padding: 5,
                                  borderRadius: 20,
                                }}>
                                <View
                                  style={{
                                    backgroundColor: 'white',
                                    padding: 5,
                                    borderRadius: 20,
                                  }}></View>
                              </TouchableOpacity>
                            )}
                          </View>
                        );
                      })}
                    </View>

                    <View style={{paddingVertical: 20}}>
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: 'OpenSans-Bold',
                          paddingVertical: 5,
                        }}>
                        Preferred
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          width: Dimensions.get('screen').width / 2,
                        }}>
                        <TextInput
                          placeholder=" search"
                          placeholderTextColor={'#DFDFDF'}
                          style={[
                            styles.inputtEXT,
                            {
                              width: Dimensions.get('screen').width / 2,
                              height: 35,
                              textAlignVertical: 'bottom',
                              borderColor: '#E1E1E1',
                              borderWidth: 1,
                              borderRadius: 5,
                            },
                          ]}
                        />
                        <Image
                          source={require('../Assets/BookLogsScreen/notifyMsg.png')}
                          style={{
                            height: 22,
                            width: 22,
                            marginLeft: 8,
                          }}
                        />
                        <Image
                          source={require('../Assets/HomeScreen/searchIcon.png')}
                          style={{
                            height: 12,
                            width: 12,
                            position: 'absolute',
                            tintColor: '#DFDFDF',
                            bottom: 10,
                            right: 10,
                          }}
                        />
                      </View>
                    </View>

                    <Text
                      style={{
                        fontSize: 10,
                        fontFamily: 'OpenSans-Regular',
                        paddingVertical: 10,
                      }}>
                      If the selected helper does not accept the job offer
                      within 24hours, the job will be listed under public job
                      (any other helpers can accept the job on a first come
                      first serve basis)
                    </Text>
                  </View>

                  <TouchableOpacity
                    style={[styles.button]}
                    onPress={() =>
                      this.setState({modalVisible: !this.state.modalVisible})
                    }>
                    <Text style={[styles.textStyle]}>Request</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </ScrollView>
        </KeyboardAwareScrollView>

        <Image
          source={require('../Assets/BookNow/BookNow.png')}
          style={{position: 'absolute', bottom: 10, right: 10, zIndex: -1}}
        />
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({
  inputtEXT: {
    height: 42,
    fontSize: 12,
    fontFamily: 'OpenSans-Regular',
  },
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
    fontFamily: 'OpenSans-Bold',
  },
});
