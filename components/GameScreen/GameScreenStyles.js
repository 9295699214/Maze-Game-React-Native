// MazeGameStyles.js

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    maze: {
        borderWidth: 1,
        borderColor: 'gray',
    },
    row: {
        flexDirection: 'row',
    },
    cell: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: 'gray',
    },
    controls: {
        marginTop: 20,
        alignItems: 'center',
    },
    button: {
        padding: 10,
        backgroundColor: 'blue',
        borderRadius: 5,
        margin: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default styles;
