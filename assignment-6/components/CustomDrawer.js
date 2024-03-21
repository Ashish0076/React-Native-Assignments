import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const CustomDrawer = () => {
  return (
    <View>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: 'https://avatars.githubusercontent.com/u/115460698?v=4',
          }}
          style={styles.profilePicture}
        />
        <Text style={styles.profileName}>Ashish Kumar</Text>
        <Text style={styles.viewProfile}>View Profile</Text>
        <Text style={styles.profileViews}>
          <Text style={styles.profileViewsNumber}>640</Text> profile views
        </Text>
      </View>
      <View style={styles.line} />
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Groups</Text>
        <Text style={styles.sectionTitle}>Events</Text>
      </View>
      <View style={styles.line} />
      <View style={styles.premiumContainer}>
        <View style={styles.iconTextContainer}>
          <MaterialIcons
            name="workspace-premium"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>Try Premium for Free</Text>
        </View>
        <View style={styles.iconTextContainer}>
          <Ionicons
            name="settings"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.text}>Settings</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    padding: 20,
    marginTop: 40,
  },
  profilePicture: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  profileName: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  viewProfile: {
    color: '#9da19f',
  },
  profileViews: {
    paddingTop: 25,
    paddingBottom: 25,
    color: '#9da19f',
  },
  profileViewsNumber: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  line: {
    height: 1,
    backgroundColor: '#d9dedb',
  },
  sectionContainer: {
    height: 300,
    padding: 20,
  },
  sectionTitle: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  premiumContainer: {
    height: 150,
    padding: 20,
    marginTop: 10,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CustomDrawer;
