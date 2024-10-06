// HomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './HomeScreenStyles'; // Styles specific to home screen

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Maze Game</Text>
      <Text style={styles.description}>
        Navigate through the maze to reach the goal, avoid traps, and beat the clock!
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Game')}
        style={styles.playButton}
      >
        <Text style={styles.playButtonText}>Play Now</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
