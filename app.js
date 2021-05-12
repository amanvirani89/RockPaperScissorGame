const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  const startGame = () => {
    const btnPlay = document.querySelector('.introView button');
    const gameStart = document.querySelector('.startGame');
    const intro = document.querySelector('.introView');
    btnPlay.addEventListener('click', () => {
      intro.classList.add('fadeOut');
      gameStart.classList.add('fadeIn');
    });
  };
  const PlayGame = () => {
    const btnOptions = document.querySelectorAll('.options button');
    const playerChoice = document.querySelector('.firstImg');
    const computerChoice = document.querySelector('.secondImg');

    const computerOptions = ['rock', 'paper', 'scissors'];

    btnOptions.forEach((option) => {
      //console.log(this.textContent);
      option.addEventListener('click', () => {
        const randomNumber = Math.floor(Math.random() * 3);
        const computerMove = computerOptions[randomNumber];
        console.log(option.textContent);
        compareChoice(option.textContent, computerMove);
        playerChoice.src = `./images/${option.textContent}.png`;
        computerChoice.src = `./images/${computerMove}.png`;
      });
    });

    const updateScore = () => {
      const player = document.querySelector('.Player h4');
      const computer = document.querySelector('.Computer h4');
      player.textContent = playerScore;
      computer.textContent = computerScore;
    };

    const compareChoice = (playerMoves, computerMoves) => {
      const winner = document.querySelector('.winner');
      if (playerMoves === computerMoves) {
        winner.textContent = "It's a tie";
        return;
      }
      if (playerMoves === 'rock') {
        if (computerMoves === 'scissors') {
          winner.textContent = 'Player Win';

          playerScore++;
          updateScore();
          return;
        } else {
          winner.textContent = 'Computer Win';
          computerScore++;

          updateScore();

          return;
        }
      }
      if (playerMoves === 'paper') {
        if (computerMoves === 'rock') {
          winner.textContent = 'Player Win';

          playerScore++;
          updateScore();

          return;
        } else {
          winner.textContent = 'Computer Win';
          computerScore++;
          updateScore();

          return;
        }
      }
      if (playerMoves === 'scissors') {
        if (computerMoves === 'paper') {
          winner.textContent = 'Player Win';
          playerScore++;
          updateScore();

          return;
        } else {
          winner.textContent = 'Computer Win';
          computerScore++;

          updateScore();

          return;
        }
      }
    };
  };
  startGame();
  PlayGame();
};
game();
