import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { generateMaze, initializeAudio, playSound, checkForNoMoves } from './mazeFile'; // Assume these functions are defined in mazeFile
import styles from './MazeGameStyles'; // Import your styles

const MazeGame = () => {
    const width = 10; // Set the maze width
    const height = 10; // Set the maze height
    const [maze, setMaze] = useState([]);
    const [playerPosition, setPlayerPosition] = useState({ x: 0, y: 0 }); // Start position at (0, 0)
    const [goalPosition, setGoalPosition] = useState({});
    const [traps, setTraps] = useState([]);
    const [visibleTraps, setVisibleTraps] = useState([]); // Track visible traps
    const [gameOver, setGameOver] = useState(false);
    const [won, setWon] = useState(false); // State to track if the player has won

    useEffect(() => {
        const initAudio = async () => {
            await initializeAudio();
        };
        initAudio();

        resetGame(); // Call resetGame to initialize the game
    }, []);

    const resetGame = () => {
        const { maze, goalPosition, traps } = generateMaze(width, height);
        setMaze(maze);
        setPlayerPosition({ x: 0, y: 0 }); // Reset player position to (0, 0)
        setGoalPosition(goalPosition);
        setVisibleTraps([]);
        setGameOver(false);
        setWon(false); // Reset win state
    };

    const movePlayer = async (direction) => {
        if (gameOver || won) return;

        let newX = playerPosition.x;
        let newY = playerPosition.y;

        switch (direction) {
            case 'up':
                newY -= 1;
                break;
            case 'down':
                newY += 1;
                break;
            case 'left':
                newX -= 1;
                break;
            case 'right':
                newX += 1;
                break;
            default:
                break;
        }

        // Check for boundaries
        if (newX < 0 || newY < 0 || newX >= width || newY >= height) {
            return; // Out of bounds
        }

        // Check if the new position is a wall (1)
        if (maze[newY][newX] === 1) {
            return; // Collided with a wall
        }

        // Check if the new position is a trap (2)
        if (maze[newY][newX] === 2) {
            await playSound('trap'); // Play trap sound
            Alert.alert("You hit a trap!");
            setVisibleTraps(prev => [...prev, { x: newX, y: newY }]); // Make trap visible
            setGameOver(true);
            return;
        }

        // Update the player position
        setPlayerPosition({ x: newX, y: newY });

        // Check if the player has reached the goal
        if (newX === goalPosition.x && newY === goalPosition.y) {
            await playSound('success'); // Play success sound
            setWon(true); // Update win state
            Alert.alert("You won!"); // Display winning message
            return; // Stop further movement
        }

        // Check if the player has no valid moves left
        if (checkForNoMoves({ x: newX, y: newY }, traps, maze)) {
            await playSound('gameOver'); // Play game over sound
            Alert.alert("Game Over! No valid moves left.");
            setGameOver(true);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Maze Game</Text>
            <View style={styles.maze}>
                {maze.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.row}>
                        {row.map((cell, cellIndex) => {
                            let cellStyle = styles.cell;

                            // Render player, goal, walls, traps, and empty space
                            if (won && playerPosition && playerPosition.x === cellIndex && playerPosition.y === rowIndex) {
                                return null; // Player is hidden when won
                            } else if (playerPosition.x === cellIndex && playerPosition.y === rowIndex) {
                                cellStyle = { ...cellStyle, backgroundColor: 'blue' }; // Player
                            } else if (cellIndex === goalPosition.x && rowIndex === goalPosition.y) {
                                cellStyle = { ...cellStyle, backgroundColor: 'green' }; // Goal
                            } else if (cell === 1) {
                                cellStyle = { ...cellStyle, backgroundColor: 'black' }; // Wall
                            } else if (visibleTraps.some(trap => trap.x === cellIndex && trap.y === rowIndex)) {
                                cellStyle = { ...cellStyle, backgroundColor: 'red' }; // Visible trap
                            } else {
                                cellStyle = { ...cellStyle, backgroundColor: 'white' }; // Empty space
                            }

                            return <View key={cellIndex} style={cellStyle} />;
                        })}
                    </View>
                ))}
            </View>
            <View style={styles.controls}>
                <TouchableOpacity onPress={() => movePlayer('up')} style={[styles.button, styles.upButton]}>
                    <Text style={styles.buttonText}>Up</Text>
                </TouchableOpacity>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => movePlayer('left')} style={styles.button}>
                        <Text style={styles.buttonText}>Left</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => movePlayer('down')} style={styles.button}>
                        <Text style={styles.buttonText}>Down</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => movePlayer('right')} style={styles.button}>
                        <Text style={styles.buttonText}>Right</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={resetGame} style={styles.restartButton}>
                <Text style={styles.restartButtonText}>Restart</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MazeGame;
