import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Logos from '../components/svgIcons';
import {useCallback, useState} from 'react';
import {Calendar} from 'react-native-calendars';
import {BarChart} from 'react-native-chart-kit';
import ProgressCircle from 'react-native-progress-circle';
export function Dashboard() {
  const [selected, setSelected] = useState('3m');
  const data = {
    labels:
      selected === '3m'
        ? ['January', 'February', 'March']
        : selected === '6m'
        ? ['January', 'February', 'March', 'April', 'May', 'June']
        : selected === '9m'
        ? [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'july',
            'August',
            'September',
          ]
        : [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'july',
            'August',
            'September',
            'October',
            'november',
            'December',
          ],
    datasets:
      selected === '3m'
        ? [
            {
              data: [37, 36, 35],
            },
          ]
        : selected === '6m'
        ? [
            {
              data: [15, 30, 25, 13, 40, 16],
            },
          ]
        : selected === '9m'
        ? [
            {
              data: [15, 30, 25, 13, 40, 16, 30, 13, 37],
            },
          ]
        : [
            {
              data: [15, 30, 25, 13, 40, 16, 30, 13, 37, 43, 23, 29],
            },
          ],
  };
  const crouselData = [
    {
      name: 'Bohemia Rapper',
      coverLine: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      bookedDates: ['12/09/23', '14/09/23'],
      image: 'bohemia',
    },
    {
      name: 'Anjunadeep',
      coverLine: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
      bookedDates: ['15/09/23', '18/10/23'],
      image: 'crousel2',
    },
  ]; // for discover crousel
  const currentDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    return today;
  };
  const topFilters = [
    'ALL',
    '3034',
    '3030',
    '3011',
    '3012',
    '3013',
    '3014',
    '3015',
    '3016',
  ]; // for top filters
  console.log('current date ', currentDate());
  const renderCrousel = useCallback(({item}) => {
    return (
      <View style={style.crouselStyle}>
        <Logos icon={item?.image} />
        {console.log('itm is ...', item?.bookedDates)}
        <View style={{flexDirection: 'row', marginTop: 5}}>
          {item?.bookedDates?.map(date => {
            return (
              <View
                style={{
                  borderRadius: 3,
                  padding: 3,
                  backgroundColor: 'rgba(251, 222, 181, 1)',
                  marginHorizontal: 3,
                }}>
                <Text
                  style={{
                    fontFamily: 'TT Norms',
                    fontSize: 10,
                    fontWeight: '500',
                    lineHeight: 12,
                    color: 'black',
                  }}>
                  {date}
                </Text>
              </View>
            );
          })}
        </View>
        <Text
          style={{
            fontFamily: 'TT Norms',
            fontWeight: '400',
            fontSize: 10,
            color: ' rgba(0, 0, 0, 1)',
          }}
          numberOfLines={2}>
          {item?.coverLine}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 12,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'TT Norms',
              fontWeight: '400',
              fontSize: 10,
              color: 'rgba(243, 104, 33, 1)',
              marginRight: 5,
            }}>
            Details
          </Text>
          <Logos icon="arrow"></Logos>
        </View>
      </View>
    );
  }); // usecallback for discover crousel
  return (
    <View style={style.topWrapper}>
      <Text
        style={{
          fontWeight: '700',
          fontSize: 18,
          lineHeight: 25,
          alignItems: 'center',
          alignSelf: 'center',
          color: 'rgba(5, 32, 39, 1)',
        }}>
        Dashboard
      </Text>
      <FlatList
        style={{maxHeight: 50}}
        horizontal
        data={topFilters}
        renderItem={({item}) => {
          return (
            <View style={style.TopFilterstyle}>
              <TouchableOpacity
                onPress={() => console.log('action to be performed')}>
                <Text
                  style={{
                    fontWeight: '500',
                    fontSize: 16,
                    color: 'rgba(0, 0, 0, 1)',
                    fontFamily: 'TT Norms',
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <FlatList
        data={[1]}
        renderItem={() => {
          return (
            <View>
              <View
                style={{
                  padding: 20,
                  backgroundColor: 'white',
                  marginBottom: 5,
                  marginTop: 15,
                  maxHeight: 400,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontWeight: '700',
                      justifyContent: 'center',
                      fontSize: 16,
                      color: 'rgba(5, 32, 39, 1)',
                    }}>
                    Stats
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 12,
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'TT Norms',
                        fontWeight: '500',
                        fontSize: 12,

                        color: 'rgba(243, 104, 33, 1)',
                        marginRight: 5,
                      }}>
                      Details
                    </Text>
                    <Logos icon="arrow"></Logos>
                  </View>
                </View>

                <BarChart
                  data={data}
                  width={350}
                  height={200}
                  withHorizontalLabels={false}
                  chartConfig={{
                    labelColor: (opacity = 10) => `black`,
                    backgroundGradientFrom: '#fff',
                    backgroundGradientFromOpacity: 1,
                    backgroundGradientTo: '#fff',
                    backgroundGradientToOpacity: 1,
                    strokeWidth: 1,

                    color: () => 'white',
                    propsForLabels: {
                      fontSize: 7,
                      color: 'black',
                      padding: 1,
                    },

                    barRadius: 12,
                    fillShadowGradientToOpacity: 1,
                    fillShadowGradientTo: 'rgba(255, 182, 39, 1)',
                    fillShadowGradient: 'rgba(255, 182, 39, 1)',
                    fillShadowGradientOpacity: 1,
                  }}
                  style={{paddingRight: 0}}
                />
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    style={[
                      style.lowFilterStyle,
                      {
                        backgroundColor:
                          selected === '3m'
                            ? 'white'
                            : 'rgba(251, 222, 181, 0.3)',
                      },
                    ]}
                    onPress={() => setSelected('3m')}>
                    <Text
                      style={[
                        style.labelStyle,
                        {color: selected === '3m' ? 'red' : 'black'},
                      ]}>
                      3m
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      style.lowFilterStyle,
                      {
                        backgroundColor:
                          selected === '6m'
                            ? 'white'
                            : 'rgba(251, 222, 181, 0.3)',
                      },
                    ]}
                    onPress={() => setSelected('6m')}>
                    <Text
                      style={[
                        style.labelStyle,
                        {color: selected === '6m' ? 'red' : 'black'},
                      ]}>
                      6m
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      style.lowFilterStyle,
                      {
                        backgroundColor:
                          selected === '9m'
                            ? 'white'
                            : 'rgba(251, 222, 181, 0.3)',
                      },
                    ]}
                    onPress={() => setSelected('9m')}>
                    <Text
                      style={[
                        style.labelStyle,
                        {color: selected === '9m' ? 'red' : 'black'},
                      ]}>
                      9m
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[
                      style.lowFilterStyle,
                      {
                        backgroundColor:
                          selected === '1yr'
                            ? 'white'
                            : 'rgba(251, 222, 181, 0.3)',
                      },
                    ]}
                    onPress={() => setSelected('1yr')}>
                    <Text
                      style={[
                        style.labelStyle,
                        {color: selected === '1yr' ? 'red' : 'black'},
                      ]}>
                      1 yr
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: 8,
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <ProgressCircle
                      percent={
                        selected === '3m'
                          ? 30
                          : selected === '6m'
                          ? 50
                          : selected === '9m'
                          ? 70
                          : 90
                      }
                      radius={30}
                      borderWidth={8}
                      color="rgba(255, 182, 39, 1)"
                      shadowColor="rgba(251, 222, 181, 1)"
                      bgColor="#fff">
                      <Text style={{fontSize: 18}}>
                        {selected === '3m'
                          ? 30
                          : selected === '6m'
                          ? 50
                          : selected === '9m'
                          ? 70
                          : 90}
                      </Text>
                    </ProgressCircle>
                    <Text style={{color: 'black'}}>Occupancy</Text>
                  </View>
                  <View style={{marginTop: 10}}>
                    <Text
                      style={{
                        color: 'rgba(245, 180, 43, 1)',
                        fontWeight: '700',
                        fontSize: 21,
                      }}>
                      9400
                    </Text>
                    <Text style={{color: 'black'}}>Avg Room Rate</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  padding: 20,
                  backgroundColor: 'white',
                  marginVertical: 5,
                  maxHeight: 340,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontWeight: '700',
                      justifyContent: 'center',
                      fontSize: 16,
                      color: 'rgba(5, 32, 39, 1)',
                    }}>
                    Bookings
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 12,
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: 'TT Norms',
                        fontWeight: '500',
                        fontSize: 12,

                        color: 'rgba(243, 104, 33, 1)',
                        marginRight: 5,
                      }}>
                      Details
                    </Text>
                    <Logos icon="arrow"></Logos>
                  </View>
                </View>
                <Calendar
                  style={{
                    maxHeight: 300,
                  }}
                  theme={{
                    textDayFontSize: 12,
                    textMonthFontSize: 14,
                    weekVerticalMargin: 1,
                  }}
                  current={currentDate()}
                  minDate={currentDate()}
                  markedDates={{
                    '2023-09-15': {
                      marked: true,
                      dotColor: 'red',
                    },
                    '2023-09-18': {marked: true, dotColor: 'green'},
                    '2023-09-09': {
                      marked: true,
                      dotColor: 'red',
                    },
                    '2023-10-09': {
                      marked: true,
                      dotColor: 'red',
                    },
                  }}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 5,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: 'red',
                        fontSize: 30,
                        marginTop: -20,
                      }}>
                      .
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: '500',
                        fontSize: 14,
                      }}>
                      Nights Booked
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', marginLeft: 10}}>
                    <Text
                      style={{
                        color: 'green',
                        fontSize: 30,
                        marginTop: -20,
                      }}>
                      .
                    </Text>
                    <Text
                      style={{
                        color: 'black',
                        fontWeight: '500',
                        fontSize: 14,
                      }}>
                      Nights Booked
                    </Text>
                  </View>
                </View>
              </View>
              <Text
                style={{
                  fontFamily: 'TT Norms',
                  fontWeight: '700',
                  fontSize: 16,
                  lineHeight: 22.4,
                  color: 'rgba(0, 0, 0, 1)',
                  marginLeft: 50,
                  marginVertical: 5,
                }}>
                Discover
              </Text>
              <FlatList
                horizontal
                data={crouselData}
                renderItem={renderCrousel}
              />
            </View>
          );
        }}
      />
    </View>
  );
}
const style = StyleSheet.create({
  topWrapper: {
    flex: 1,

    padding: 8,
  },
  crouselStyle: {
    paddingHorizontal: 10,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 5,
    maxWidth: 210,
  },
  TopFilterstyle: {
    marginHorizontal: 5,
    borderRadius: 2,
    marginVertical: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    height: 43,
    width: 88,
    justifyContent: 'center',
  },
  lowFilterStyle: {
    padding: 8,
    marginHorizontal: 8,
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: 'rgba(251, 222, 181, 0.3)',
  },
  labelStyle: {
    fontWeight: '500',
    fontSize: 16,
    color: 'black',
    lineHeight: 22,
  },
});
