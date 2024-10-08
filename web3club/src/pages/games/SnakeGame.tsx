import React, { useState, useEffect, useRef } from 'react';

const GAME_WIDTH = 700;
const GAME_HEIGHT = 600;
const SPEED = 150;  // Slower speed
const SPACE_SIZE = 50;
const BODY_PARTS = 3;
const SNAKE_COLOR = "green";
const FOOD_COLOR = "red";
const BACKGROUND_COLOR = "black";

interface Coordinate {
  x: number;
  y: number;
}

const SnakeGame: React.FC = () => {
  const [snake, setSnake] = useState<Coordinate[]>([]);
  const [food, setFood] = useState<Coordinate | null>(null);
  const [direction, setDirection] = useState<string>('down');
  const [score, setScore] = useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    initializeGame();
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  useEffect(() => {
    if (snake.length > 0 && food) {
      const interval = setInterval(() => {
        moveSnake();
      }, SPEED);
      return () => clearInterval(interval);
    }
  }, [snake, direction, food]);

  const initializeGame = () => {
    setScore(0);
    setDirection('down');
    const initialSnake = Array.from({ length: BODY_PARTS }, (_, index) => ({
      x: 0,
      y: index * SPACE_SIZE
    }));
    setSnake(initialSnake);
    generateFood();
  };

  const generateFood = () => {
    const x = Math.floor(Math.random() * (GAME_WIDTH / SPACE_SIZE)) * SPACE_SIZE;
    const y = Math.floor(Math.random() * (GAME_HEIGHT / SPACE_SIZE)) * SPACE_SIZE;
    setFood({ x, y });
  };

  const moveSnake = () => {
    const head = { ...snake[0] };
    if (direction === 'up') head.y -= SPACE_SIZE;
    if (direction === 'down') head.y += SPACE_SIZE;
    if (direction === 'left') head.x -= SPACE_SIZE;
    if (direction === 'right') head.x += SPACE_SIZE;

    const newSnake = [head, ...snake.slice(0, -1)];

    if (food && head.x === food.x && head.y === food.y) {
      setScore(score + 1);
      setSnake([head, ...snake]);
      generateFood();
    }

    if (checkCollision(newSnake)) {
      alert('Game Over!');
      initializeGame();
    } else {
      setSnake(newSnake);
    }
  };

  const checkCollision = (snake: Coordinate[]) => {
    const head = snake[0];
    if (head.x < 0 || head.x >= GAME_WIDTH || head.y < 0 || head.y >= GAME_HEIGHT) return true;
    return snake.slice(1).some(part => part.x === head.x && part.y === head.y);
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowUp':
        if (direction !== 'down') setDirection('up');
        break;
      case 'ArrowDown':
        if (direction !== 'up') setDirection('down');
        break;
      case 'ArrowLeft':
        if (direction !== 'right') setDirection('left');
        break;
      case 'ArrowRight':
        if (direction !== 'left') setDirection('right');
        break;
    }
  };

  const drawGame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    ctx.fillStyle = BACKGROUND_COLOR;
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    ctx.fillStyle = SNAKE_COLOR;
    snake.forEach(part => {
      ctx.fillRect(part.x, part.y, SPACE_SIZE, SPACE_SIZE);
    });

    if (food) {
      ctx.fillStyle = FOOD_COLOR;
      ctx.fillRect(food.x, food.y, SPACE_SIZE, SPACE_SIZE);
    }
  };

  useEffect(() => {
    drawGame();
  }, [snake, food]);

  return (
    <div>
      <h1>Score: {score}</h1>
      <canvas
        ref={canvasRef}
        width={GAME_WIDTH}
        height={GAME_HEIGHT}
        style={{ border: '1px solid black', backgroundColor: BACKGROUND_COLOR }}
      />
      <button onClick={initializeGame}>Start Game</button>
    </div>
  );
};

export default SnakeGame;
