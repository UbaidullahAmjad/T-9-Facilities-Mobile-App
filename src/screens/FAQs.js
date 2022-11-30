import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import BookLogsHeader from '../components/BookLogsHeader';

const data = [
  {id: 1},
  {id: 2},
  {id: 3},
  {id: 4},
  {id: 5},
  {id: 6},
  {id: 7},
  {id: 8},
  {id: 9},
  {id: 10},
];

export default class BookingDetail extends Component {
  render() {
    return (
      <ScreenWrapper colors={['#FFFFFF', '#FFFFFF']}>
        <BookLogsHeader title="FAQs" navigation={this.props.navigation} />

        <FlatList
          data={data}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingHorizontal: 20, paddingVertical: 10}}
          ListHeaderComponent={
            <Text style={{fontFamily: 'OpenSans-Bold', marginBottom: 10}}>
              Frequently Asked Questions
            </Text>
          }
          renderItem={({item, index}) => {
            return (
              <View style={{flexDirection: 'row'}} key={index}>
                <Text
                  style={{
                    fontFamily: 'OpenSans-Bold',
                    fontSize: 8,
                    marginTop: 3,
                  }}>
                  {'⚫'}
                </Text>
                <View style={{marginLeft: 10}}>
                  <Text style={{fontSize: 12, fontFamily: 'OpenSans-Bold'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                  </Text>

                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: 'OpenSans-Regular',
                      paddingVertical: 10,
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({});
