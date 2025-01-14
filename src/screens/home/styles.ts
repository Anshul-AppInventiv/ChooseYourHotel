import {StyleSheet, Platform} from 'react-native';
import {vw, vh} from '../../utils/dimension';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor:'#E7E7E7',
  },
  subContainer: {
    marginTop: Platform.OS === 'android' ? vh(40) : vh(5),
    marginHorizontal: vw(16),
  },
  backButton: {
    width: vw(40),
    height: vw(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
    borderRadius: 50,
  },
  Left: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
  headingContainer: {
    marginTop: vh(5),
    paddingLeft: vw(10),
  },
  headingText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  bookContainer: {
    borderRadius: vw(20),
    padding: vh(15),
    marginTop: vh(26),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C7D0EE',
    borderRadius: 30,
    paddingHorizontal: vw(15),
    paddingVertical: vh(12),
  },
  searchIcon: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
    tintColor: '#000',
  },
  inputText: {
    // color: theme === 'dark' ? '#FFF' : '#000',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: vw(6),
  },
  gpsIcon: {
    width: vw(24),
    height: vw(24),
    marginLeft: Platform.OS === 'android' ? vw(40) : vw(24),
    resizeMode: 'contain',
    tintColor: '#000',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vh(14),
  },
  startDateContainer: {
    flexDirection: 'row',
    paddingVertical: vh(12),
    paddingHorizontal: vw(17),
    borderRadius: vw(30),
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#C7D0EE',
  },
  endDateContainer: {
    flexDirection: 'row',
    paddingVertical: vh(12),
    paddingHorizontal: vw(17),
    borderRadius: vw(30),
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#C7D0EE',
  },
  calendarImg: {
    width: vw(22),
    height: vw(24),
    resizeMode: 'contain',
  },
  date: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: vw(8),
  },
  guestDetailsContainer: {
    flexDirection: 'row',
    backgroundColor: '#C7D0EE',
    alignItems: 'center',
    paddingVertical: vh(12),
    paddingHorizontal: vw(20),
    borderRadius: vw(30),
    marginTop: vh(14),
  },
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingVertical: vh(20),
    marginTop: vh(22),
  },
  location: {
    width: vw(40),
    height: vw(40),
    padding: vw(10),
    borderRadius: vw(50),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'grey',
    borderWidth: 1,
  },
  mapsIcon: {
    width: vw(24),
    height: vw(24),
    resizeMode:'contain',
  },
  search: {
    backgroundColor: '#0000FF',
    borderWidth: 1,
    paddingHorizontal: vw(104),
    paddingVertical: vh(10),
    borderRadius: vw(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: '500',
  },
  modalContent: {
    flex: 0.9,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
  closeButton: {
    width: '70%',
    padding: vh(10),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom:vh(10),
  },
  closeText: {
    color: 'white',
    fontSize: 16,
  },
});
