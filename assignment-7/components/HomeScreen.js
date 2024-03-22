import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Platform,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  Alert,
} from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const dimensions = Dimensions.get('window');

const formatDate = (dateString) => {
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options);
};

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('New Delhi');
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?q=${encodeURIComponent(
          searchText
        )}&key=8e88a0f2035249fd955145543242103`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeatherData(data);
      setSearchText('');
    } catch (error) {
      console.error('Error fetching weather data:', error);
      Alert.alert('Something went wrong!');
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleSearch = () => {
    fetchWeatherData();
  };

  const formattedDate = weatherData
    ? formatDate(weatherData.location.localtime)
    : '';

  return (
    <View style={styles.mainContainer}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Enter the city or country name..."
          style={styles.searchBox}
          value={searchText}
          onChangeText={setSearchText}
          onSubmitEditing={handleSearch}
        />
        <TouchableOpacity
          style={styles.searchIconContainer}
          onPress={handleSearch}>
          <FontAwesome name="search" size={24} color="grey" />
        </TouchableOpacity>
      </View>

      <View style={styles.liveWeatherContainer}>
        {weatherData && (
          <>
            <View style={styles.location}>
              <MaterialIcons name="location-pin" size={21} color="grey" />
              <Text style={styles.dateText}>
                {weatherData.location.name +
                  ', ' +
                  weatherData.location.country}
              </Text>
            </View>
            <Image
              source={require('../assets/RainWithSun.png')}
              style={styles.weatherImage}
            />
            <View style={styles.temperatureContainer}>
              <Text style={styles.temperatureText}>
                {weatherData.current.temp_c}
              </Text>
              <Text style={styles.degreeSymbol}>°C</Text>
            </View>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
              {weatherData.current.condition.text}
            </Text>
            <Text style={styles.dateText}>{formattedDate}</Text>
          </>
        )}
      </View>

      <View style={styles.extraWeatherDetails}>
        {weatherData && (
          <>
            <View style={styles.extraTop}>
              <View style={styles.extraDetail}>
                <Image
                  source={require('../assets/Mist.png')}
                  style={styles.icon}
                />
                <Text style={styles.detailTitle}>Real Feel</Text>
                <Text style={styles.detailValue}>
                  {weatherData.current.feelslike_c}°C
                </Text>
              </View>
              <View style={styles.extraDetail}>
                <Image
                  source={require('../assets/Wind.png')}
                  style={styles.icon}
                />
                <Text style={styles.detailTitle}>Wind</Text>
                <Text style={styles.detailValue}>
                  {weatherData.current.wind_kph} km/h
                </Text>
              </View>
            </View>
            <View style={styles.extraBottom}>
              <View style={styles.extraDetail}>
                <Image
                  source={require('../assets/Humidity.png')}
                  style={styles.icon}
                />
                <Text style={styles.detailTitle}>Humidity</Text>
                <Text style={styles.detailValue}>
                  {weatherData.current.humidity}%
                </Text>
              </View>
              <View style={styles.extraDetail}>
                <Image
                  source={require('../assets/Mist.png')}
                  style={styles.icon}
                />
                <Text style={styles.detailTitle}>Pressure</Text>
                <Text style={styles.detailValue}>
                  {weatherData.current.pressure_in} mb
                </Text>
              </View>
            </View>
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#050914',
    flex: 1,
    alignItems: 'center',
    paddingTop: Platform.select({
      android: 24,
      ios: 50,
      default: 10,
    }),
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: 'white',
    padding: 10,
  },
  searchIconContainer: {
    padding: 5,
    backgroundColor: 'white',
  },
  searchBox: {
    height: 30,
    width: dimensions.width * 0.8,
  },
  liveWeatherContainer: {
    width: dimensions.width * 0.8,
    alignItems: 'center',
    marginTop: 20,
  },
  weatherImage: {
    height: 150,
    width: 150,
  },
  temperatureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  temperatureText: {
    color: 'white',
    fontSize: 80,
  },
  degreeSymbol: {
    color: 'white',
    fontSize: 30,
  },
  dateText: {
    color: 'white',
    fontSize: 15,
    marginRight: 5,
  },
  location: {
    flexDirection: 'row',
    padding: 10,
  },
  extraWeatherDetails: {
    marginTop: 20,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  extraTop: {
    alignItems: 'center',
  },
  extraBottom: {
    alignItems: 'center',
  },
  extraDetail: {
    alignItems: 'center',
  },
  icon: {
    height: 80,
    width: 80,
  },
  detailTitle: {
    color: 'white',
    fontSize: 18,
  },
  detailValue: {
    color: 'white',
    fontSize: 16,
  },
});

export default HomeScreen;
