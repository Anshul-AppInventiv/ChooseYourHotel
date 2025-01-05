import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  Modal,
  StyleSheet,
  SafeAreaView,
  View,
} from 'react-native';
import {CalendarList} from 'react-native-calendars';

const ScrollableCalendarExample = () => {
  const [isStartDatePickerVisible, setStartDatePickerVisible] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisible] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const openStartDatePicker = () => {
    setStartDatePickerVisible(true);
  };

  // Function to open end date picker
  const openEndDatePicker = () => {
    setEndDatePickerVisible(true);
  };

  // Function to close the date pickers
  const closeDatePicker = () => {
    setStartDatePickerVisible(false);
    setEndDatePickerVisible(false);
  };

  // Function to handle date selection for start and end date
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
      <View style={styles.dateContainer}>
        {/* Start Date Touchable */}
        <TouchableOpacity
          style={styles.startDateContainer}
          onPress={openStartDatePicker}>
          <Text style={styles.date}>{startDate || 'Select Start Date'}</Text>
        </TouchableOpacity>

        {/* End Date Touchable */}
        <TouchableOpacity
          style={styles.endDateContainer}
          onPress={openEndDatePicker}>
          <Text style={styles.date}>{endDate || 'Select End Date'}</Text>
        </TouchableOpacity>

        {/* Start Date Modal */}
        <Modal visible={isStartDatePickerVisible} animationType="slide">
          <SafeAreaView style={{flex:1}}>
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
          <SafeAreaView style={{flex:1}}>
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

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  startDateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  endDateContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  date: {
    fontSize: 16,
  },
  modalContent: {
    flex:0.9,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    width:'70%',
    padding: 12,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'blue',
    borderRadius: 5,
    alignSelf: 'center',
  },
  closeText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ScrollableCalendarExample;
