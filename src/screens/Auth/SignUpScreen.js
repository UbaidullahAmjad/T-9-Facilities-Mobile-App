import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import ScreenWrapper from '../../components/ScreenWrapper';
import {normalizeX} from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Entypo from 'react-native-vector-icons/Entypo';
import NavigationService from '../../navigation/NavigationService';

export default class SignUpScreen extends Component {
  state = {
    hidepassword: false,
    hideConfirmpassword: false,
  };

  componentDidMount() {
    console.log('SignUp Screen');
  }
  componentWillUnmount() {
    this.setState = (state, callback) => {
      return;
    };
  }

  render() {
    return (
      <ScreenWrapper doubleTapExit>
        <KeyboardAwareScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{alignItems: 'center'}}
          keyboardShouldPersistTaps="handled">
          <ScrollView>
            <View style={{paddingVertical: 20}}>
              <View
                style={{
                  flex: 0.5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 20, fontFamily: 'OpenSans-Regular'}}>
                  SIGN UP WITH
                </Text>
                <Image
                  source={require('../../Assets/LoginScreen/loginLogo.png')}
                  style={{
                    marginTop: '5%',
                    height: 150,
                    width: 150,
                    resizeMode: 'contain',
                  }}
                />
              </View>
              <View style={{flex: 1.5, marginTop: '10%'}}>
                <View>
                  <TextInput
                    placeholder=" Your name"
                    placeholderTextColor={'#DFDFDF'}
                    style={styles.inputtEXT}></TextInput>

                  <Image
                    source={require('../../Assets/SignUpScreen/nameIcon.png')}
                    style={{
                      height: 17,
                      width: 17,
                      position: 'absolute',
                      bottom: 10,
                      right: 20,
                    }}
                  />
                </View>

                <View style={{marginTop: '8%'}}>
                  <TextInput
                    keyboardType="email-address"
                    placeholder=" Your e-mail"
                    placeholderTextColor={'#DFDFDF'}
                    style={styles.inputtEXT}></TextInput>

                  <Image
                    source={require('../../Assets/LoginScreen/emailIcon.png')}
                    style={{
                      height: 14,
                      width: 17,
                      position: 'absolute',
                      bottom: 10,
                      right: 20,
                    }}
                  />
                </View>
                <View>
                  <TextInput
                    secureTextEntry={this.state.hidepassword}
                    placeholder=" Type your password"
                    placeholderTextColor={'#DFDFDF'}
                    style={[styles.inputtEXT, {marginTop: '8%'}]}></TextInput>

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

                <View>
                  <TextInput
                    secureTextEntry={this.state.hideConfirmpassword}
                    placeholder=" Re-type your password"
                    placeholderTextColor={'#DFDFDF'}
                    style={[styles.inputtEXT, {marginTop: '8%'}]}></TextInput>

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

                <View style={{marginTop: '8%'}}>
                  <TextInput
                    keyboardType="phone-pad"
                    placeholder=" Phone"
                    placeholderTextColor={'#DFDFDF'}
                    style={styles.inputtEXT}></TextInput>

                  <Image
                    source={require('../../Assets/SignUpScreen/PhoneIcon.png')}
                    style={{
                      height: 17,
                      width: 17,
                      position: 'absolute',
                      bottom: 10,
                      right: 20,
                    }}
                  />
                </View>

                <TouchableWithoutFeedback
                  onPress={() => NavigationService.navigate('LoginScreen')}>
                  <View
                    style={{
                      marginTop: '10%',
                      backgroundColor: '#9CD2B9',
                      width: normalizeX(350),
                      height: 41,
                      borderRadius: 5,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'OpenSans-Regular',
                        fontSize: 14,
                        color: 'black',
                      }}>
                      Sign Up
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
    borderColor: '#F2F4F5',
    borderWidth: 2,
    borderRadius: 5,
    height: 42,
    backgroundColor: 'white',
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
  },
});
