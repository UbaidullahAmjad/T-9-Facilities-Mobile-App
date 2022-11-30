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

export default class LoginScreen extends Component {
  state = {
    hidepassword: false,
  };

  componentDidMount() {
    console.log('Login Screen');
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
                  WELCOME TO
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
                    keyboardType="email-address"
                    placeholder=" Your e-mail"
                    placeholderTextColor={'#DFDFDF'}
                    onChange={phone => this.setState({phone, phoneError: null})}
                    style={styles.inputtEXT}
                  />

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
                    onChangeText={password =>
                      this.setState({password, passwordError: null})
                    }
                    style={[styles.inputtEXT, {marginTop: 10}]}></TextInput>

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

                <TouchableOpacity activeOpacity={0.7}>
                  <Text
                    style={{
                      marginTop: 20,
                      fontSize: 12,
                      textAlign: 'right',
                      marginRight: 5,
                      color: '#7CB0A8',
                      fontFamily: 'OpenSans-Regular',
                    }}>
                    Forget Password?
                  </Text>
                </TouchableOpacity>

                <TouchableWithoutFeedback
                  onPress={() => NavigationService.navigate('Home')}>
                  <View
                    style={{
                      marginTop: 10,
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
                      Log In
                    </Text>
                  </View>
                </TouchableWithoutFeedback>

                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Mulish-Regular',
                    marginVertical: '8%',
                    fontSize: 13,
                  }}>
                  Or
                </Text>

                <TouchableWithoutFeedback>
                  <View
                    style={{
                      backgroundColor: '#4E6EAA',
                      width: normalizeX(350),
                      height: 41,
                      borderRadius: 5,
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        textAlign: 'center',
                        fontFamily: 'OpenSans-Regular',
                        fontSize: 14,
                      }}>
                      Log in with Facebook
                    </Text>
                  </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback>
                  <View
                    style={{
                      marginTop: 10,
                      backgroundColor: '#DD5E45',
                      width: normalizeX(350),
                      height: 41,
                      borderRadius: 5,
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'OpenSans-Regular',
                        fontSize: 14,
                        color: 'white',
                        textAlign: 'center',
                      }}>
                      Login with Google
                    </Text>
                  </View>
                </TouchableWithoutFeedback>

                <TouchableOpacity
                  onPress={() => NavigationService.navigate('SignUpScreen')}
                  style={{
                    marginTop: '10%',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 12,
                      color: '#AAAAAA',
                    }}>
                    Don't have an account?{' '}
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 12,
                      color: '#7CB0A8',
                      fontWeight: 'bold',
                    }}>
                    SignUp
                  </Text>
                </TouchableOpacity>
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
    fontSize: 14,
    backgroundColor: 'white',
    fontFamily: 'OpenSans-Regular',
  },
});
