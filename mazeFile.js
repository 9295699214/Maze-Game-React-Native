import { Audio } from 'expo-av';

// Function to generate a maze with traps and a goal position
export const generateMaze = (width, height) => {
    const maze = Array.from({ length: height }, () => Array(width).fill(0)); // Initialize maze
    const goalPosition = { x: Math.floor(Math.random() * width), y: Math.floor(Math.random() * height) };
    const traps = [];
    const trapCount = Math.floor((width * height) / 10); // Adjust number of traps

    // Generate traps, ensuring they do not overlap with the goal position
    while (traps.length < trapCount) {
        const trap = { x: Math.floor(Math.random() * width), y: Math.floor(Math.random() * height) };

        // Check if trap position overlaps with goal position
        if (trap.x !== goalPosition.x || trap.y !== goalPosition.y) {
            traps.push(trap);
            maze[trap.y][trap.x] = 2; // Assuming 2 represents a trap in the maze
        }
    }

    // Set the goal position in the maze
    maze[goalPosition.y][goalPosition.x] = 1; // Assuming 1 represents the goal

    // Set walls (1) around the maze randomly (this is just a simple example)
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            // Randomly set some walls
            if (Math.random() < 0.2 && maze[y][x] === 0) { // Ensure we don't overwrite traps or the goal
                maze[y][x] = 1; // Set as wall
            }
        }
    }

    return { maze, goalPosition, traps };
};

// Function to initialize audio resources
export const initializeAudio = async () => {
    await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        staysActiveInBackground: true,
    });
};

// Function to play sound based on the game event
export const playSound = async (sound) => {
    const soundMap = {
        move: require('./sounds/move.mp3'),      // Ensure this sound file exists
        trap: require('./sounds/trap.mp3'),      // Ensure this sound file exists
        win: require('./sounds/win.mp3'),        // Ensure this sound file exists
    };

    if (!soundMap[sound]) {
        console.warn(`Sound ${sound} does not exist!`);
        return; // Early return if sound does not exist
    }

    const { sound: audio } = await Audio.Sound.createAsync(soundMap[sound]);
    await audio.playAsync();
};

// Function to check if the player has no valid moves left
export const checkForNoMoves = (playerPosition, traps, maze) => {
    const directions = [
        { x: 0, y: -1 }, // Up
        { x: 0, y: 1 },  // Down
        { x: -1, y: 0 }, // Left
        { x: 1, y: 0 }   // Right
    ];

    return directions.every(dir => {
        const newX = playerPosition.x + dir.x;
        const newY = playerPosition.y + dir.y;

        // Boundary checks
        if (newX < 0 || newY < 0 || newX >= maze[0].length || newY >= maze.length) return true;

        // Check if the new position is either a trap or a wall (0 indicates an open path)
        return maze[newY][newX] !== 0;
    });
};