import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import AppIntroSlider from 'react-native-app-intro-slider';
import ScreenWrapper from '../components/ScreenWrapper';
import NavigationService from '../navigation/NavigationService';

const IntroScreen = () => {
  const onDone = () => {
    NavigationService.navigate('authStack');
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: 100,
          paddingVertical: 20,
        }}>
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Image
          resizeMode="contain"
          style={styles.introImageStyle}
          source={item.image}
        />
      </View>
    );
  };

  const _renderNextButton = () => {
    return (
      <View
        style={{
          backgroundColor: '#9CD2B9',
          justifyContent: 'center',
          borderRadius: 5,
          alignItems: 'center',
          width: '100%',
          height: 40,
          marginBottom: '30%',
        }}>
        <Text style={{textAlign: 'center', fontFamily: 'OpenSans-Bold'}}>
          Next
        </Text>
      </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <View
        style={{
          backgroundColor: '#9CD2B9',
          justifyContent: 'center',
          borderRadius: 5,
          alignItems: 'center',
          width: '100%',
          height: 40,
          marginBottom: '30%',
        }}>
        <Text style={{textAlign: 'center', fontFamily: 'OpenSans-Bold'}}>
          Next
        </Text>
      </View>
    );
  };

  React.useEffect(() => {
    SplashScreen.hide();

    return () => {
      null;
    };
  }, []);

  return (
    <ScreenWrapper>
      <AppIntroSlider
        data={slides}
        onDone={onDone}
        renderItem={renderItem}
        bottomButton
        renderNextButton={_renderNextButton}
        renderDoneButton={_renderDoneButton}
        activeDotStyle={{backgroundColor: '#F0CF55'}}
        dotStyle={{backgroundColor: '#9CD2B9'}}
      />
    </ScreenWrapper>
  );
};

export default IntroScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  introTitleStyle: {
    fontSize: 12,
    color: 'black',
    textAlign: 'justify',
    marginBottom: 30,
    marginHorizontal: 30,
    fontFamily: 'OpenSans-Regular',
  },
  introImageStyle: {
    marginTop: '15%',
    width: 200,
    height: 200,
  },
});

const slides = [
  {
    key: 's1',
    title: 'Get help from a lot of professional services for your daily needs.',

    image: require('../Assets/ScreenWrapper/1st.png'),
  },
  {
    key: 's2',
    title:
      'Browse through several services from home cleaning, beauty services or even engage a fitness trainer!',
    image: require('../Assets/ScreenWrapper/2nd.png'),
  },
  {
    key: 's3',
    title:
      'Just search for the service you require, book a slot and wait for your service to arrive!',
    image: require('../Assets/ScreenWrapper/3rd.png'),
  },
  {
    key: 's4',
    title:
      'Rate your service whenever required or engage the same service again!',
    image: require('../Assets/ScreenWrapper/4th.png'),
  },
];
