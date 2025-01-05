/* eslint-disable no-catch-shadow */
/* eslint-disable @typescript-eslint/no-shadow */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Icons} from '../../assets';
import {vh, vw} from '../../utils/dimension';

interface Hotel {
  id: string;
  name: string;
  locationDescription: string;
  city: string;
  countryCode: string;
  tripAdvisorRating: number;
  image: string;
}

const Hotel = () => {
  const navigation = useNavigation();
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/Lemoncode/simple-hotels-mock-rest-api/refs/heads/master/mock-data/hotels-data.json',
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setHotels(data.hotels);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
        Alert.alert('Error', 'Failed to load data.');
      }
    };

    fetchHotels();
  }, []);

  const renderHotel = ({item}: {item: Hotel}) => (
    <View style={styles.card}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.address}>
          {item.locationDescription}, {item.city}, {item.countryCode}
        </Text>
        <Text style={styles.rating}>Rating: {item.tripAdvisorRating}/5</Text>
      </View>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Failed to load data. Please try again later.
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: vw(20)}}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={Icons.back} style={styles.Left} />
        </TouchableOpacity>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Here are your Hotels</Text>
        </View>
      </View>
      <FlatList
        data={hotels}
        keyExtractor={item => item.id}
        renderItem={renderHotel}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {
    marginTop:Platform.OS === 'android' ? vh(40) : vh(5),
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
    paddingVertical: vh(10),
  },
  headingText: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: vh(10),
    marginHorizontal: 20,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  image: {
    width: vw(100),
    height: vw(100),
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  info: {
    flex: 1,
    padding: vw(10),
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  address: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  rating: {
    fontSize: 14,
    color: '#ff8c00',
  },
  loaderContainer: {
    flex: 1,
    backgroundColor: '#E7E7E7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default Hotel;
