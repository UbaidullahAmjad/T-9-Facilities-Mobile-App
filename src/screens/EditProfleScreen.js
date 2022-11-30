import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  TextInput,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import ProfileHeader from '../components/ProfileHeader';
import ScreenWrapper from '../components/ScreenWrapper';
import {normalizeX} from '../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Entypo from 'react-native-vector-icons/Entypo';

export default class EditProfileScreen extends Component {
  state = {
    hidecurrentPassword: false,
    hidepassword: false,
    hideConfirmpassword: false,
  };

  render() {
    return (
      <ScreenWrapper colors={['#F8F8FA', '#F8F8FA']}>
        <ProfileHeader title="Profile" navigation={this.props.navigation} />

        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{alignItems: 'center'}}
          keyboardShouldPersistTaps="handled">
          <ScrollView>
            <View style={{paddingVertical: 20}}>
              <View style={{flex: 1.5, marginTop: '2%'}}>
                <View>
                  <Text
                    style={{
                      paddingVertical: 5,
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 12,
                    }}>
                    Name:
                  </Text>
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
                      source={require('../Assets/SignUpScreen/nameIcon.png')}
                      style={{
                        height: 17,
                        width: 17,
                        tintColor: '#9CD2B9',
                      }}
                    />
                    <TextInput
                      placeholder=" Your name"
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
                  <Text
                    style={{
                      paddingVertical: 5,
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 12,
                    }}>
                    Username:
                  </Text>
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
                      source={require('../Assets/LoginScreen/emailIcon.png')}
                      style={{
                        height: 14,
                        width: 17,
                        tintColor: '#9CD2B9',
                      }}
                    />
                    <TextInput
                      keyboardType="email-address"
                      placeholder=" Your e-mail"
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
                  <Text
                    style={{
                      paddingVertical: 5,
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 12,
                    }}>
                    Current Password:
                  </Text>
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
                      source={require('../Assets/ProfileScreen/password.png')}
                      style={{
                        height: 15,
                        width: 15,
                        tintColor: '#9CD2B9',
                        resizeMode: 'contain',
                      }}
                    />
                    <TextInput
                      secureTextEntry={this.state.hidecurrentPassword}
                      placeholder="  Current password"
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
                  {this.state.hidecurrentPassword ? (
                    <Entypo
                      onPress={() =>
                        this.setState({hidecurrentPassword: false})
                      }
                      color="#DFDFDF"
                      name="eye-with-line"
                      size={20}
                      style={{
                        position: 'absolute',
                        bottom: 5,
                        right: 10,
                        padding: 5,
                      }}
                    />
                  ) : (
                    <Entypo
                      onPress={() => this.setState({hidecurrentPassword: true})}
                      name="eye"
                      color="#DFDFDF"
                      size={20}
                      style={{
                        position: 'absolute',
                        bottom: 5,
                        right: 12,
                        padding: 5,
                      }}
                    />
                  )}
                </View>
                <TouchableOpacity activeOpacity={0.7}>
                  <Text
                    style={{
                      fontSize: 10,
                      paddingTop: 5,
                      textAlign: 'right',
                      marginRight: 5,
                      color: '#7CB0A8',
                      fontFamily: 'OpenSans-Bold',
                    }}>
                    Forget Password
                  </Text>
                </TouchableOpacity>

                <View style={{marginTop: '2%'}}>
                  <Text
                    style={{
                      paddingVertical: 5,
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 12,
                    }}>
                    New Password:
                  </Text>
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
                      source={require('../Assets/ProfileScreen/password.png')}
                      style={{
                        height: 15,
                        width: 15,
                        tintColor: '#9CD2B9',
                        resizeMode: 'contain',
                      }}
                    />
                    <TextInput
                      secureTextEntry={this.state.hidepassword}
                      placeholder=" Type your password"
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
                  {this.state.hidepassword ? (
                    <Entypo
                      onPress={() => this.setState({hidepassword: false})}
                      color="#DFDFDF"
                      name="eye-with-line"
                      size={20}
                      style={{
                        position: 'absolute',
                        bottom: 5,
                        right: 10,
                        padding: 5,
                      }}
                    />
                  ) : (
                    <Entypo
                      onPress={() => this.setState({hidepassword: true})}
                      name="eye"
                      color="#DFDFDF"
                      size={20}
                      style={{
                        position: 'absolute',
                        bottom: 5,
                        right: 12,
                        padding: 5,
                      }}
                    />
                  )}
                </View>

                <View style={{marginTop: '2%'}}>
                  <Text
                    style={{
                      paddingVertical: 5,
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 12,
                    }}>
                    Confirm New Password:
                  </Text>
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
                      source={require('../Assets/ProfileScreen/password.png')}
                      style={{
                        height: 15,
                        width: 15,
                        tintColor: '#9CD2B9',
                        resizeMode: 'contain',
                      }}
                    />
                    <TextInput
                      secureTextEntry={this.state.hideConfirmpassword}
                      placeholder=" Re-type your password"
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
                  {this.state.hideConfirmpassword ? (
                    <Entypo
                      onPress={() =>
                        this.setState({hideConfirmpassword: false})
                      }
                      color="#DFDFDF"
                      name="eye-with-line"
                      size={20}
                      style={{
                        position: 'absolute',
                        bottom: 5,
                        right: 10,
                        padding: 5,
                      }}
                    />
                  ) : (
                    <Entypo
                      onPress={() => this.setState({hideConfirmpassword: true})}
                      name="eye"
                      color="#DFDFDF"
                      size={20}
                      style={{
                        position: 'absolute',
                        bottom: 5,
                        right: 12,
                        padding: 5,
                      }}
                    />
                  )}
                </View>

                <View style={{marginTop: '2%'}}>
                  <Text
                    style={{
                      paddingVertical: 5,
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 12,
                    }}>
                    Address:
                  </Text>
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
                        height: 17,
                        width: 12,
                      }}
                    />
                    <TextInput
                      placeholder=" 18 Dunearn Road"
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
                  <Text
                    style={{
                      paddingVertical: 5,
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 12,
                    }}>
                    Unit Number:
                  </Text>
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
                        height: 17,
                        width: 12,
                      }}
                    />
                    <TextInput
                      placeholder=" Singapore 55218"
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
                  <Text
                    style={{
                      paddingVertical: 5,
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 12,
                    }}>
                    Postal Code:
                  </Text>
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
                        height: 17,
                        width: 12,
                      }}
                    />
                    <TextInput
                      placeholder=" Singapore 55218"
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
                  <Text
                    style={{
                      paddingVertical: 5,
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 12,
                    }}>
                    Phone:
                  </Text>

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
                      source={require('../Assets/SignUpScreen/PhoneIcon.png')}
                      style={{
                        height: 17,
                        tintColor: '#9CD2B9',
                        width: 17,
                      }}
                    />
                    <TextInput
                      keyboardType="phone-pad"
                      placeholder=" Phone"
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

                <TouchableWithoutFeedback>
                  <View
                    style={{
                      marginTop: '10%',
                      backgroundColor: '#9CD2B9',
                      width: Dimensions.get('screen').width / 1.13,
                      height: 41,
                      borderRadius: 5,
                      margin: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'OpenSans-Regular',
                        fontSize: 14,
                        color: 'white',
                      }}>
                      Save
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
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
});
