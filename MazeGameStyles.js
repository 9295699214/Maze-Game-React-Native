import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20, // Add some margin at the bottom of the title
    },
    maze: {
        marginBottom: 20, // Space between the grid and buttons
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        width: 38, // Increase cell width
        height: 38, // Increase cell height
        borderWidth: 1,
        borderColor: 'gray',
    },
    button: {
        padding: 10,
        backgroundColor: 'blue', // Change button color to blue
        margin: 5,
        borderRadius: 5,
    },
    upButton: {
        padding: 8, // Decrease padding for the Up button
        backgroundColor: 'blue', // Ensure the Up button is also blue
        borderRadius: 5,
        width: 80, // Set a fixed width for the Up button if needed
    },
    buttonText: {
        fontSize: 16,
        color: 'white', // Ensure button text color is white for visibility
    },
    restartButton: {
        padding: 10,
        backgroundColor: 'orange', // Color of the restart button
        margin: 5,
        borderRadius: 5,
    },
    restartButtonText: {
        fontSize: 16,
        color: 'white', // Text color for the restart button
    },
});

export default styles;
