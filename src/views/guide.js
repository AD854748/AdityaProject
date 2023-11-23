import {useNavigation} from '@react-navigation/native';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Logos from '../components/svgIcons';

import {useState} from 'react';
export function Guide() {
  const navigation = useNavigation();
  const currentTime = new Date();
  const [selected, setSelected] = useState('Today');
  const formattedDate = currentTime.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
  });
  const yesterdayDate = new Date(currentTime);
  yesterdayDate.setDate(currentTime.getDate() - 1);
  const tomorrowDate = new Date(currentTime);
  tomorrowDate.setDate(currentTime.getDate() + 1);
  const formattedDateYesterday = yesterdayDate.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
  });

  const formattedDateTomorrow = tomorrowDate.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
  });
  const currentHour = currentTime.getHours();
  const progress = (currentHour / 24) * 100;
  const stopHours = [
    {
      progress: 0,
      time: '00:00',
      title: 'Maldives',
      subtitle: 'Save the turtles',
      image: 'one',
    },
    {
      progress: 33.33,
      time: '08:00',
      title: 'Golden Beach',
      subtitle: 'Surfing on the sea',
      image: 'two',
    },
    {
      progress: 66.66,
      time: '16:00',
      title: 'Coconut Grove',
      subtitle: 'BBQ party by the sea',
      image: 'three',
    },
    {
      progress: 100,
      time: '23:59',
      title: 'Maldives Islands',
      subtitle: 'Sea blowing',
      image: 'four',
    },
  ];
  const RenderDate = ({date, day}) => {
    return (
      <TouchableOpacity
        onPress={() => setSelected(day)}
        style={{alignItems: 'center'}}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 18,
            color: 'rgba(0, 0, 0, 1)',
            alignItems: 'center',
          }}>
          {day}
        </Text>
        <Text
          style={{
            fontWeight: '400',
            fontSize: 16,
            color: 'rgba(177, 177, 177, 1)',
            alignItems: 'center',
          }}>
          {date}
        </Text>
        {selected === day && (
          <View
            style={{
              width: '100%',
              height: 3,
              marginTop: 5,
              backgroundColor: 'rgba(3, 115, 243, 1)',
            }}></View>
        )}
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.topView}>
      <View style={styles.headerView}>
        <TouchableOpacity
          style={{flex: 0.2}}
          onPress={() => navigation.navigate('dashBoard')}>
          <Logos icon="backbutton" />
        </TouchableOpacity>
        <View style={{flex: 0.6, alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '600',
              color: 'rgba(0, 0, 0, 1)',
            }}>
            Itinerary Form
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 30,
        }}>
        <RenderDate date={formattedDateYesterday} day={'Yesterday'} />
        <RenderDate date={formattedDate} day={'Today'} />
        <RenderDate date={formattedDateTomorrow} day={'Tomorrow'} />
      </View>

      <View style={{padding: 5, marginTop: 30}}>
        {stopHours.map(hour => (
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <View style={{flex: 0.19}}>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 18,
                  color: 'rgba(0, 0, 0, 1)',
                }}>
                {hour.time}
              </Text>
            </View>

            <View>
              <Logos
                icon={
                  progress > hour.progress || selected === 'Yesterday'
                    ? selected === 'Tomorrow'
                      ? 'blankCircle'
                      : 'filledCircle'
                    : 'blankCircle'
                }
              />
              {hour.progress !== 100 && (
                <View
                  style={[
                    styles.progressContainer,
                    {
                      backgroundColor:
                        selected === 'Yesterday'
                          ? 'rgba(3, 115, 243, 1)'
                          : '#ccc',
                    },
                  ]}>
                  {selected === 'Today' && (
                    <View
                      style={{
                        ...styles.progressBar,
                        height: `${
                          progress - hour.progress > 33.33
                            ? '100'
                            : 66.66 - (progress - hour.progress) > 100
                            ? '0'
                            : (progress - hour.progress) * 3
                        }%`,
                      }}></View>
                  )}
                </View>
              )}
            </View>
            <View style={{flex: 0.5}}>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 16,
                  color: 'rgba(0, 0, 0, 1)',
                }}>
                {hour.title}
              </Text>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 16,
                  color: 'rgba(177, 177, 177, 1)',
                }}>
                {hour.subtitle}
              </Text>
            </View>
            <Logos icon={hour.image} />
          </View>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  topView: {padding: 10, backgroundColor: '#fff', flex: 1},
  headerView: {
    marginTop: 20,
    flexDirection: 'row',
  },
  progressContainer: {
    height: 75,
    width: 3,

    alignSelf: 'center',
  },
  progressBar: {
    height: '100%',
    backgroundColor: 'rgba(3, 115, 243, 1)',
  },
});
