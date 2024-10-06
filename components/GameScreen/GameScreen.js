// GameScreen.js

import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MazeGame from '../../mazegame'; 
import styles from './GameScreenStyles'; // Import merged styles

const GameScreen = () => {
    const [gameOver, setGameOver] = useState(false);
    const [won, setWon] = useState(false);
    const navigation = useNavigation();

    const resetGame = () => {
        setGameOver(false);
        setWon(false);
        // Reset other game state here, if necessary
    };

    useEffect(() => {
        if (gameOver || won) {
            const timeoutId = setTimeout(() => {
                navigation.navigate('Home'); // Return to home screen after 5 seconds
                resetGame(); // Reset game state
            }, 5000);
            return () => clearTimeout(timeoutId);
        }
    }, [gameOver, won, navigation]);

    return (
        <View style={styles.container}>
            <MazeGame setGameOver={setGameOver} setWon={setWon} />
            <TouchableOpacity onPress={resetGame} style={styles.restartButton}>
                <Text style={styles.buttonText}>Restart</Text>
            </TouchableOpacity>
        </View>
    );
};

export default GameScreen;