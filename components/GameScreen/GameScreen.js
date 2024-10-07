// GameScreen.js

import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MazeGame from '../../mazegame'; 
import styles from './GameScreenStyles';

const GameScreen = () => {
    const [gameOver, setGameOver] = useState(false);
    const [won, setWon] = useState(false);
    const navigation = useNavigation();

    const resetGame = () => {
        setGameOver(false);
        setWon(false);
    };

    useEffect(() => {
        if (gameOver || won) {
            const timeoutId = setTimeout(() => {
                navigation.navigate('Home');
                resetGame(); 
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