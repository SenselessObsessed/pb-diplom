let players = ['x', 'o'];
let activePlayer = 0;
let board = [];
function startGame() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  activePlayer = 0;
  renderBoard(board);
}

function click(numStr, numStr2) {
  let num = Number(numStr);
  let num2 = Number(numStr2);
  board[num][num2] = players[activePlayer];
  renderBoard(board);
  if (checkWinner(board, players[activePlayer])) {
    showWinner(activePlayer);
  }
  activePlayer = (activePlayer + 1) % 2;
}

function checkWinner(board, players) {
  let winner = false;
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] === players && board[i][1] === players && board[i][2] === players) {
      winner = true;
    }
    if (board[0][i] === players && board[1][i] === players && board[2][i] === players) {
      winner = true;
    }
  }
  if (board[0][0] === players && board[1][1] === players && board[2][2] === players) {
    winner = true;
  }
  if (board[0][2] === players && board[1][1] === players && board[2][0] === players) {
    winner = true;
  }
  return winner
}