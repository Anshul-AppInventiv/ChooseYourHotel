import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Icons} from '../../assets';
import {vh, vw} from '../../utils/dimension';
import {useNavigation} from '@react-navigation/native';

const Location = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={Icons.close} style={styles.closeImg} />
        </TouchableOpacity>
        <View style={styles.newPostContainer}>
          <Text style={styles.newPostText}>Select Destination</Text>
        </View>
      </View>
      <View style={styles.subContainer}>
        <View style={styles.inputContainer}>
          <Image source={Icons.search} style={styles.searchIcon} />
          <TextInput
            placeholder="Location, landmark, or property"
            placeholderTextColor={'gray'}
            autoFocus
            style={styles.inputText}
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
        </View>
        <View style={styles.separator} />
        <TouchableOpacity
          style={styles.nearMeContainer}
          onPress={() => {
            navigation.navigate('Maps');
          }}>
          <Image source={Icons.gps} style={styles.gpsImg} />
          <Text style={styles.nearMeText}>Near me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nearMeContainer}
         onPress={() => {
          navigation.navigate('Maps');
        }}>
          <Image source={Icons.location} style={styles.gpsImg} />
          <Text style={styles.nearMeText}>Choose on map</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Location;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: vh(10),
    paddingHorizontal: vw(15),
  },
  closeImg: {
    width: vw(22),
    height: vw(22),
    resizeMode: 'contain',
  },
  newPostContainer: {
    alignItems: 'center',
    marginLeft: vw(20),
  },
  newPostText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
  },
  subContainer: {
    // paddingHorizontal:vw(20),
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 2,
    marginTop: vh(15),
    alignItems: 'center',
    borderColor: '#E2E2E2',
    backgroundColor: '#E8E8E8',
    borderRadius: 30,
    paddingHorizontal: vw(10),
    marginHorizontal: vw(20),
  },
  searchIcon: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
  inputText: {
    color: '#000',
    width: '93%',
    height: vh(44),
    marginLeft: vw(4),
    fontSize: 16,
  },
  separator: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: vh(15),
  },
  nearMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: vw(18),
    paddingVertical: vh(15),
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  gpsImg: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
    tintColor: '#000',
  },
  nearMeText: {
    marginLeft: vw(15),
    fontSize: 18,
    color: 'blue',
    fontWeight: '300',
  },
});
