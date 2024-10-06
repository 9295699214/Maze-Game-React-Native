// utils.js
export const generateMaze = (rows, cols) => {
    const maze = Array.from({ length: rows }, () => Array(cols).fill(0));
    
    // Add some traps and a goal (randomized)
    const traps = [];
    for (let i = 0; i < 5; i++) {
      const trapX = Math.floor(Math.random() * cols);
      const trapY = Math.floor(Math.random() * rows);
      maze[trapY][trapX] = 2; // 2 represents a trap
      traps.push({ x: trapX, y: trapY });
    }
  
    // Set goal position
    const goalX = Math.floor(Math.random() * cols);
    const goalY = Math.floor(Math.random() * rows);
    maze[goalY][goalX] = 3; // 3 represents the goal
  
    return { maze, goalPosition: { x: goalX, y: goalY }, traps };
  };
  
  export const playSound = (type) => {
    const sounds = {
      win: new Audio('./sounds/win.mp3'),
      trap: new Audio('./sounds/trap.mp3'),
      move: new Audio('./sounds/move.mp3'),
    };
    
    if (sounds[type]) {
      sounds[type].play();
    }
  };
  
  export const checkForNoMoves = (maze, playerPosition) => {
    const { x, y } = playerPosition;
    const possibleMoves = [
      { x: x - 1, y },
      { x: x + 1, y },
      { x, y: y - 1 },
      { x, y: y + 1 },
    ];
    
    return possibleMoves.every(
      (move) => maze[move.y]?.[move.x] === undefined || maze[move.y][move.x] === 1
    );
  };  