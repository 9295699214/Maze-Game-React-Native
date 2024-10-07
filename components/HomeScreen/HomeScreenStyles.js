import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8', // Background color for the home screen
    },
    logo: {
        width: 200,  // Adjust the width of the logo as needed
        height: 200, // Adjust the height of the logo as needed
        marginBottom: 20, // Space between the image and title
        opacity: 0.8, // Slightly transparent
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
        textAlign: 'center',
    },
    description: {
        fontSize: 18,
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 40,
        color: '#666',
        paddingHorizontal: 10, // Padding to the left and right
    },
    playButton: {
        backgroundColor: '#007BFF',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
    },
    playButtonText: {
        fontSize: 20,
        color: '#fff',
    },
});

export default styles;