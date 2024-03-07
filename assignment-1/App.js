import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';

export default function App() {
  let btnTextArr = [
    'Trying New Things',
    'Art Galleries',
    'Rave',
    'Cafe Hopping',
    'Boxing',
    'Sake',
    'Fencing',
    'Gin Tonic',
    'Baking',
    'Environmentalism',
    'League of Legends',
    'Road Trips',
    'Hockey',
    'Raggeaton',
    'DIY',
    'Virtual Reality',
    'Equestrian',
    'Art',
    'Tea',
    'Tarot',
    'Theater',
    'Pride',
    'Climbing',
    'VR Room',
    'Online Shopping',
    'Indoor Activities',
    'Social Development',
    'Astrology',
    'Pimms',
    'Blogging',
    'Couchsurfing',
    'Online Broker',
    'Choir',
  ];

  const [selectedButtons, setSelectedButtons] = useState([]);

  const toggleSelection = (text) => {
    if (selectedButtons.includes(text)) {
      setSelectedButtons(selectedButtons.filter((item) => item !== text));
    } else {
      setSelectedButtons([...selectedButtons, text]);
    }
  };

  return (
    <>
      <ScrollView>
        <View style={styles.topContainer}>
          <Text style={styles.heading}>Interests</Text>
          <Text style={styles.para}>
            Let everyone know what you're passionate about, by adding it to your
            profile.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          {btnTextArr.map((text, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.buttonWrapper,
                {
                  backgroundColor: selectedButtons.includes(text)
                    ? 'pink'
                    : 'transparent',
                  borderRadius: 50,
                  margin: 2,
                },
              ]}
              onPress={() => toggleSelection(text)}
              disabled={
                selectedButtons.length === 5 && !selectedButtons.includes(text)
              }>
              <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.continueButtonContainer}>
        <Button
          title={`Continue (${selectedButtons.length}/5)`}
          color={selectedButtons.length !== 5 ? 'grey' : 'green'}
          disabled={selectedButtons.length !== 5}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    marginTop: Platform.select({
      ios: 40,
      android: 40,
      default: 0,
    }),
    padding: 25,
  },

  heading: {
    fontSize: Platform.select({
      ios: 60,
      default: 40,
    }),
    fontWeight: 'bold',
    marginBottom: 24,
  },

  para: {
    color: 'grey',
  },

  buttonContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

  buttonWrapper: {
    padding: Platform.select({
      ios: 2,
      default: 0,
    }),
  },

  buttonText: {
    margin: 3,
    borderRadius: 16,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    color: 'grey',
    borderColor: 'grey',
    borderWidth: 2,
    fontSize: 15,
  },

  continueButtonContainer: {
    padding: 20,
  },
});
