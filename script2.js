
// Computer's move
function computerMove() {
  let availableCells = gameState.map((val, idx) => val === '' ? idx : null).filter(val => val !== null);
  const randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
  gameState[randomCell] = 'O';
  document.querySelector(.cell[data-index="${randomCell}"]).textContent = 'O';
  checkForWinner();
}

// Reset the game
function resetGame() {
  gameState = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  currentPlayer = 'X';
  statusText.textContent = It's ${currentPlayer}'s turn;
  cells.forEach(cell => cell.textContent = '');
}

// Event listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
vsHumanButton.addEventListener('click', () => {
  vsComputer = false;
  resetGame();
});
vsComputerButton.addEventListener('click', () => {
  vsComputer = true;
  resetGame();
});

// Initialize game
resetGame();
