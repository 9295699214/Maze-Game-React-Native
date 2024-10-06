// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Maze Game</Text>
            <Text style={styles.description}>
                Navigate through the maze to reach the goal, avoid traps, and beat the clock!
            </Text>
            <Button title="Start Game" onPress={() => navigation.navigate('MazeGame')} />
        </View>
    );
};

// Styles for HomeScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Light background color
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 20, // Add some padding
    },
});

export default HomeScreen;
