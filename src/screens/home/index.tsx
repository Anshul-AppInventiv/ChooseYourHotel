import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {Icons} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {CalendarList} from 'react-native-calendars';

const Home = () => {
  const navigation = useNavigation();
  const [isStartDatePickerVisible, setStartDatePickerVisible] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisible] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const openStartDatePicker = () => {
    setStartDatePickerVisible(true);
  };

  const openEndDatePicker = () => {
    setEndDatePickerVisible(true);
  };

  const closeDatePicker = () => {
    setStartDatePickerVisible(false);
    setEndDatePickerVisible(false);
  };

  const handleStartDateSelect = (day: any) => {
    setStartDate(day.dateString);
    closeDatePicker();
  };

  const handleEndDateSelect = (day: any) => {
    setEndDate(day.dateString);
    closeDatePicker();
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <TouchableOpacity style={styles.backButton}>
          <Image source={Icons.back} style={styles.Left} />
        </TouchableOpacity>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>All rooms</Text>
        </View>
        <View style={styles.bookContainer}>
          <TouchableOpacity
            style={styles.inputContainer}
            onPress={() => {
              navigation.navigate('Location');
            }}>
            <Image source={Icons.search} style={styles.searchIcon} />
            <Text style={styles.inputText}>Where would you like to go?</Text>
            <Image source={Icons.gps} style={styles.gpsIcon} />
          </TouchableOpacity>
          <View style={styles.dateContainer}>
            <TouchableOpacity
              style={styles.startDateContainer}
              onPress={openStartDatePicker}>
              <Image source={Icons.calendar} style={styles.calendarImg} />
              <Text style={styles.date}>{startDate || '2025-01-03'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.endDateContainer}
              onPress={openEndDatePicker}>
              <Image source={Icons.calendar} style={styles.calendarImg} />
              <Text style={styles.date}>{endDate || '2025-01-03'}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.guestDetailsContainer}>
            <Image source={Icons.person} style={styles.calendarImg} />
            <Text style={styles.date}>1 room 2 adults</Text>
          </TouchableOpacity>
          <View style={styles.locationContainer}>
            <TouchableOpacity
              style={styles.location}
              onPress={() => {
                navigation.navigate('Maps');
              }}>
              <Image source={Icons.googleMaps} style={styles.mapsIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.search} onPress={()=>{navigation.navigate('Hotel')}}>
              <Text style={styles.searchText}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Modal visible={isStartDatePickerVisible} animationType="slide">
          <SafeAreaView style={{flex: 1}}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select Start Date</Text>
              <CalendarList
                onDayPress={handleStartDateSelect}
                markedDates={{
                  [startDate]: {
                    selected: true,
                    marked: true,
                    selectedColor: 'blue',
                  },
                }}
                pastScrollRange={0}
                futureScrollRange={12}
                scrollEnabled={true}
                showScrollIndicator={false}
              />
              <TouchableOpacity
                onPress={closeDatePicker}
                style={styles.closeButton}>
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </Modal>

        {/* End Date Modal */}
        <Modal visible={isEndDatePickerVisible} animationType="slide">
          <SafeAreaView style={{flex: 1}}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Select End Date</Text>
              <CalendarList
                onDayPress={handleEndDateSelect}
                markedDates={{
                  [endDate]: {
                    selected: true,
                    marked: true,
                    selectedColor: 'blue',
                  },
                }}
                pastScrollRange={0}
                futureScrollRange={12}
                scrollEnabled={true}
                showScrollIndicator={true} // Show scroll bar
              />
              <TouchableOpacity
                onPress={closeDatePicker}
                style={styles.closeButton}>
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default Home;
