import {StyleSheet} from 'react-native';
import {vw, vh} from '../../utils/dimension';

export const Styles = (theme: any) =>
  StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: vh(16),
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#ccc',
      width: '100%',
    },
    iconButton: {
      paddingHorizontal: vw(14),
      borderColor: '#ccc',
      borderRightWidth: 1,
      marginRight: vw(4),
    },
    iconStyle: {
      width: vw(20),
      height: vw(20),
      resizeMode: 'contain',
    },
    phoneInput: {
      width: '70%',
      //   width: '95%',
      fontSize: 15,
      backgroundColor: theme === 'dark' ? '#000' : '#FFF',
      // backgroundColor:'red',
      // marginHorizontal: 8,
      overflow: 'hidden',
    },
    eyeImg: {
      width: vw(24),
      height: vw(24),
      resizeMode: 'contain',
      marginTop: vh(7),
    },
    errorContainer: {
      borderColor: 'red',
    },
    errorText: {
      color: 'red',
      fontSize: 14,
      marginTop: vw(4),
      textAlign: 'left',
    },
  });
