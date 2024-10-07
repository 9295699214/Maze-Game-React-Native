import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MazeGame from './mazegame'; // Import your MazeGame component
import HomeScreen from './components/HomeScreen/HomeScreen'; // Create a simple HomeScreen component
import { View, Text, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{
                        headerTitle: () => <Text style={styles.headerTitle}>Home</Text>, // Centered title for Home
                        headerStyle: styles.headerStyle, // Apply custom styles to header
                    }} 
                />
                 <Stack.Screen 
                    name="MazeGame" 
                    component={MazeGame} 
                    options={{
                        headerStyle: styles.headerStyle, // Apply custom styles to header
                        headerShown: false, // Hide header for Maze Game
                    }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: '#f8f8f8', // Background color for the header
        height: 60, // Set the height of the header
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
});

export default App;
