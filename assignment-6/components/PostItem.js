import { View, Text, Image, TouchableOpacity } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import React, { useState } from 'react';

const PostItem = ({ item }) => {
  const [showFullText, setShowFullText] = useState(false);
  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };
  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image
          source={{ uri: item.profilePicture }}
          style={styles.postProfilePicture}
        />
        <Text style={styles.postTitle}>{item.title}</Text>
        <TouchableOpacity style={styles.connectButton}>
          <Text>Connect</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.itemText}>
        {showFullText ? item.text : item.text.slice(0, 60)}
        {!showFullText && item.text.length > 60 && (
          <Text onPress={handleToggleText}>
            ... <Text style={styles.seeMore}>See More</Text>
          </Text>
        )}
      </Text>
      <Image source={{ uri: item.image }} style={styles.postImage} resizeMode="cover" />
      <View style={styles.postFooter}>
        <TouchableOpacity style={styles.icon}>
          <AntDesign name="like2" size={20} color="black" />
          <Text>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <AntDesign name="message1" size={20} color="black" />
          <Text>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Feather name="repeat" size={20} color="black" />
          <Text>Repost</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Feather name="send" size={20} color="black" />
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  postContainer: {
    marginBottom: 10,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  postProfilePicture: {
    width: 30,
    height: 30,
    borderRadius: 15,
    
  },
  postTitle: {
    flex: 1,
    marginLeft: 10,
    fontSize: 25,
  },
  connectButton: {
    padding: 5,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  postImage: {
    width: '100%',
    height: 240,
    marginBottom: 10,
    marginTop: 10,
  },
  itemText: {
    paddingLeft: 10,
  },
  seeMore: {
    color: 'grey',
    textDecorationLine: 'underline',
    marginLeft: 5,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  icon: {
    alignItems: 'center',
  },
};

export default PostItem;
