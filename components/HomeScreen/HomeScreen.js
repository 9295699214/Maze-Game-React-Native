import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import styles from './HomeScreenStyles'; // Adjust the path accordingly

const HomeScreen = () => {
    const scaleValue = useRef(new Animated.Value(0)).current; // Initial scale value
    const buttonScale = useRef(new Animated.Value(1)).current; // Initial button scale value
    const navigation = useNavigation(); // Use the hook to get navigation

    useEffect(() => {
        // Start the animation when the component mounts
        Animated.timing(scaleValue, {
            toValue: 1, // Scale to full size
            duration: 1000, // Animation duration in milliseconds
            useNativeDriver: true, // Use native driver for better performance
        }).start();
    }, [scaleValue]);

    const animateButton = () => {
        Animated.sequence([
            Animated.timing(buttonScale, {
                toValue: 0.9, // Scale down
                duration: 150,
                useNativeDriver: true,
            }),
            Animated.timing(buttonScale, {
                toValue: 1, // Scale back to normal
                duration: 150,
                useNativeDriver: true,
            }),
        ]).start(() => {
            navigation.navigate('MazeGame');
        });
    };

    return (
        <View style={styles.container}>
            <Animated.Image 
                source={require('../../assets/logo.png')}
                style={[styles.logo, { transform: [{ scale: scaleValue }] }]} // Apply the scale transformation
            />
            <Text style={styles.title}>Welcome to the Maze Game!</Text>
            <Text style={styles.description}>
                Navigate through the maze to reach the goal, avoid traps, and beat the clock!
            </Text>
            <TouchableOpacity onPress={animateButton} activeOpacity={0.7}>
                <Animated.View style={{ transform: [{ scale: buttonScale }] }}>
                    <View style={styles.playButton}>
                        <Text style={styles.playButtonText}>Start Game</Text>
                    </View>
                </Animated.View>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;