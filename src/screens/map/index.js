/* eslint-disable no-unused-vars */
import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Platform,
  PermissionsAndroid,
  Alert,
  ActivityIndicator,
  Button,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import {Icons} from '../../assets';
import {vh, vw} from '../../utils/dimension';
import { useNavigation } from '@react-navigation/native';

const Maps = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState(null);
  const [isChoosingSource, setIsChoosingSource] = useState(false);
  const mapRef = useRef(null);
  const navigation = useNavigation();

  const defaultLocation = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
        setLoading(false);
      },
      error => {
        Alert.alert(
          'Error',
          `Failed to get your location: ${error.message}` +
            ' Make sure your location is enabled.',
        );
        setLocation(defaultLocation);
        setLoading(false);
      },
    );
  };

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'android') {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getCurrentLocation();
          } else {
            Alert.alert(
              'Permission Denied',
              'Location permission is required to show your current location on the map.',
            );
            setLocation(defaultLocation);
            setLoading(false);
          }
        } catch (err) {
          console.warn(err);
          setLocation(defaultLocation);
          setLoading(false);
        }
      } else {
        getCurrentLocation();
      }
    };

    requestLocationPermission();
  }, []);

  const handleMapPress = e => {
    const coordinate = e.nativeEvent.coordinate;
    if (isChoosingSource) {
      setSource(coordinate);
      setIsChoosingSource(false);
    }
  };
  const showCoordinates = () => {
    if (source) {
      Alert.alert(
        'Source Coordinates',
        `Source: \nLatitude: ${source.latitude}, Longitude: ${source.longitude}`,
      );
    } else {
      Alert.alert('Error', 'Please select the source coordinates.');
    }
  };

  const removeSource = () => {
    setSource(null);
  };

  const zoomToMarker = marker => {
    if (mapRef.current && marker) {
      mapRef.current.animateToRegion({
        latitude: marker.latitude,
        longitude: marker.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }, 1000);
    }
  };
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Image source={Icons.back} style={styles.Left} />
          </TouchableOpacity>
          <MapView
            ref={mapRef}
            style={styles.map}
            showsUserLocation={true}
            region={location}
            onPress={handleMapPress}>
            <Marker coordinate={location} />
            {source && (
              <Marker
                coordinate={source}
                title={'Source'}
                description={'Your source location'}
                pinColor={'green'}
                onPress={() => zoomToMarker(source)}
              />
            )}
          </MapView>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonGroup}>
              {source ? (
                <Button title="Remove Source" onPress={removeSource} />
              ) : (
                <Button
                  title={
                    isChoosingSource ? 'Please Choose Source' : 'Choose Source'
                  }
                  onPress={() => setIsChoosingSource(true)}
                />
              )}
            </View>
            <Button title="Show Coordinates" onPress={showCoordinates} />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};
export default Maps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 20,
    width: vw(40),
    height: vw(40),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E7E7E7',
    borderRadius: 50,
    zIndex: 1,
    marginTop: Platform.OS === 'android' ? vh(40) : vh(5),
  },
  Left: {
    width: vw(24),
    height: vw(24),
    resizeMode: 'contain',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    marginTop: Platform.OS === 'android' ? vh(40) : vh(5),
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: vh(10),
  },
});
