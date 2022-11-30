import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
  FlatList,
  TextInput,
  ImageBackground,
} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import BookLogsHeader from '../components/BookLogsHeader';
import ScrollBottomSheet from 'react-native-scroll-bottom-sheet';

const windowHeight = Dimensions.get('window').height;
const data = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}];
export default class BookingDetail extends Component {
  render() {
    return (
      <ScreenWrapper colors={['#FFFFFF', '#FFFFFF']}>
        <BookLogsHeader
          title="My Bookings"
          navigation={this.props.navigation}
        />

        <ImageBackground
          source={require('../Assets/BookLogsScreen/mapImage.png')}
          style={[styles.container]}>
          <ScrollBottomSheet
            componentType="FlatList"
            snapPoints={[128, '50%', windowHeight - 500]}
            initialSnapIndex={2}
            renderHandle={() => (
              <View style={styles.header}>
                <View style={styles.panelHandle} />
              </View>
            )}
            data={Array.from({length: 1}).map((_, i) => String(i))}
            keyExtractor={i => i}
            renderItem={({item}) => (
              <View
                style={{
                  marginBottom: 30,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}>
                <View style={{padding: 20}}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontFamily: 'OpenSans-Bold',
                      width: Dimensions.get('screen').width / 1.5,
                    }}>
                    {'Katherine Wong - Disinfection & Sanitization'}
                  </Text>
                  <Text style={{fontSize: 12, fontFamily: 'OpenSans-Regular'}}>
                    Order number - DC0123
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderTopWidth: 2,
                    borderTopColor: '#F8F8FA',
                    padding: 15,
                  }}>
                  <Image
                    source={require('../Assets/BookLogsScreen/metro-location.png')}
                  />

                  <Text
                    style={{
                      marginLeft: 15,
                      fontSize: 12,
                      fontFamily: 'OpenSans-Regular',
                      color: '#358677',
                    }}>
                    Blk 56 Dawson Place street 22 , #16-121 S(640056)
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderTopWidth: 2,
                    borderTopColor: '#F8F8FA',
                    padding: 15,
                  }}>
                  <Image
                    source={require('../Assets/BookLogsScreen/feather-calendar.png')}
                  />

                  <Text
                    style={{
                      marginLeft: 15,
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 12,
                    }}>
                    15 June 2021 , 09:00 AM - 12:00 PM ( 3 Hours )
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderTopWidth: 2,
                    borderTopColor: '#F8F8FA',
                    padding: 15,
                  }}>
                  <Image
                    source={require('../Assets/BookLogsScreen/material-person.png')}
                  />

                  <Text
                    style={{
                      marginLeft: 15,
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 12,
                    }}>
                    Joyce Tan (You)
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderTopWidth: 2,
                    borderTopColor: '#F8F8FA',
                    padding: 15,
                  }}>
                  <Image
                    source={require('../Assets/BookLogsScreen/metro-location.png')}
                  />

                  <Text
                    style={{
                      marginLeft: 15,
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 12,
                    }}>
                    Blk 56 Dawson Place street 22 , #16-121 S(640056)
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderTopWidth: 2,
                    borderTopColor: '#F8F8FA',
                    padding: 15,
                  }}>
                  <Image
                    source={require('../Assets/BookLogsScreen/awesome-building.png')}
                  />

                  <Text
                    style={{
                      marginLeft: 13,
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 12,
                    }}>
                    HDB
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderTopWidth: 2,
                    borderTopColor: '#F8F8FA',
                    padding: 15,
                  }}>
                  <Image
                    source={require('../Assets/BookLogsScreen/material-photo-size-select-small.png')}
                  />

                  <Text
                    style={{
                      marginLeft: 13,
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 12,
                    }}>
                    5 Room
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderTopWidth: 2,
                    borderTopColor: '#F8F8FA',
                    padding: 15,
                  }}>
                  <Image
                    source={require('../Assets/BookLogsScreen/120sqft.png')}
                  />

                  <Text
                    style={{
                      marginLeft: 10,
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 12,
                    }}>
                    120 Sqft
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderTopWidth: 2,
                    borderTopColor: '#F8F8FA',
                    padding: 15,
                  }}>
                  <Image
                    source={require('../Assets/BookLogsScreen/apartment.png')}
                  />

                  <Text
                    style={{
                      marginLeft: 15,
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 12,
                    }}>
                    Residence
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderTopWidth: 2,
                    borderTopColor: '#F8F8FA',
                    padding: 15,
                  }}>
                  <Image
                    source={require('../Assets/BookLogsScreen/ionic-md-repeat.png')}
                  />

                  <Text
                    style={{
                      marginLeft: 15,
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 12,
                    }}>
                    Just Once
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderTopWidth: 2,
                    borderTopColor: '#F8F8FA',
                    padding: 15,
                  }}>
                  <Image
                    source={require('../Assets/BookLogsScreen/material-chat-bubble.png')}
                  />

                  <Text
                    style={{
                      marginLeft: 15,
                      fontFamily: 'OpenSans-Regular',
                      fontSize: 12,
                    }}>
                    Please take note of the living room table, It’s quite
                    fragile.
                  </Text>
                </View>

                <View
                  style={{
                    backgroundColor: 'white',
                    borderTopWidth: 2,
                    borderTopColor: '#F8F8FA',
                    padding: 15,
                  }}>
                  <Text style={{fontSize: 12, fontFamily: 'OpenSans-Bold'}}>
                    Price
                  </Text>
                  <View
                    style={{
                      paddingVertical: 5,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text
                      style={{fontSize: 12, fontFamily: 'OpenSans-Regular'}}>
                      Customer Price
                    </Text>
                    <Text
                      style={{fontSize: 12, fontFamily: 'OpenSans-Regular'}}>
                      $300.00
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: 'white',
                    borderTopWidth: 2,
                    borderTopColor: '#F8F8FA',
                    padding: 15,
                  }}>
                  <Text style={{fontSize: 12, fontFamily: 'OpenSans-Bold'}}>
                    {'Completion photo upload (if any)'}
                  </Text>
                  <View style={styles.resumeView}>
                    <Image
                      source={require('../Assets/BookLogsScreen/UploadImage.png')}
                      style={{height: 30, width: 30}}
                    />
                    <Text style={styles.resumeViewText}>
                      {'Drag & Drop or capture image'}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: 'white',
                    borderTopWidth: 2,
                    borderTopColor: '#F8F8FA',
                    padding: 15,
                    paddingBottom: 20,
                  }}>
                  <Text style={{fontSize: 12, fontFamily: 'OpenSans-Bold'}}>
                    {'Additional Remarks'}
                  </Text>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingVertical: 5,
                      marginTop: '5%',
                    }}>
                    <Text
                      style={{
                        marginLeft: 10,
                        fontSize: 12,
                        fontFamily: 'OpenSans-Regular',
                      }}>
                      All Rating
                    </Text>

                    <FlatList
                      data={data}
                      horizontal
                      keyExtractor={item => item.id}
                      renderItem={({item, index}) => {
                        return (
                          <View key={index} style={{marginLeft: 20}}>
                            <Image
                              source={require('../Assets/BookLogsScreen/Star.png')}
                            />
                          </View>
                        );
                      }}
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingVertical: 5,
                    }}>
                    <Text
                      style={{fontSize: 12, fontFamily: 'OpenSans-Regular'}}>
                      Remarks
                    </Text>
                    <TextInput
                      style={{
                        marginLeft: 10,
                        borderColor: '#E2E2E2',
                        borderWidth: 1,
                        borderRadius: 5,
                        width: Dimensions.get('screen').width / 1.5,
                        height: 30,
                      }}
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingVertical: 5,
                    }}>
                    <Text
                      style={{fontSize: 12, fontFamily: 'OpenSans-Regular'}}>
                      Durations
                    </Text>
                    <TextInput
                      style={{
                        marginLeft: 10,
                        borderColor: '#E2E2E2',
                        borderWidth: 1,
                        borderRadius: 5,
                        width: Dimensions.get('screen').width / 1.5,
                        height: 30,
                      }}
                    />
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingVertical: 5,
                    }}>
                    <Text
                      style={{fontSize: 12, fontFamily: 'OpenSans-Regular'}}>
                      All Tasks
                    </Text>
                    <TextInput
                      style={{
                        marginLeft: 10,
                        borderColor: '#E2E2E2',
                        borderWidth: 1,
                        borderRadius: 5,
                        width: Dimensions.get('screen').width / 1.5,
                        height: 30,
                      }}
                    />
                  </View>
                </View>
              </View>
            )}
            contentContainerStyle={styles.contentContainerStyle}
          />
        </ImageBackground>

        <TouchableWithoutFeedback>
          <View
            style={{
              backgroundColor: '#008677',
              width: Dimensions.get('screen').width,
              height: 41,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
            }}>
            <Text
              style={{
                fontFamily: 'OpenSans-Bold',
                fontSize: 13,
                color: 'white',
              }}>
              Submit a Review
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </ScreenWrapper>
    );
  }
}

const styles = StyleSheet.create({
  resumeView: {
    marginTop: 5,
    padding: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#C6C9CE',
    borderStyle: 'dotted',
    justifyContent: 'center',
    alignItems: 'center',
  },
  resumeViewText: {
    fontSize: 10,
    marginTop: 5,
    color: '#9CD2B9',
    fontFamily: 'OpenSans-Regular',
  },
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    backgroundColor: 'white',
    borderRadius: 20,
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'white',
    // paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHandle: {
    width: 40,
    // height: 2,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 4,
  },
  item: {
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems: 'center',
    marginVertical: 10,
  },
});
