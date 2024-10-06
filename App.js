import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MazeGame from './mazegame'; // Import your MazeGame component
import HomeScreen from './components/HomeScreen/HomeScreen'; // Create a simple HomeScreen component

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="MazeGame" component={MazeGame} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
