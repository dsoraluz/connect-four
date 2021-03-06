
//Constructor for connect-four game.
function ConnectFour(player1Name, player2Name){
  //6 x 7 array to represent checkers grid.
this.board = [
  // 0       1     2    3     4     5     6
    [null, null, null, null, null, null, null], //0
    [null, null, null, null, null, null, null], //1
    [null, null, null, null, null, null, null], //2
    [null, null, null, null, null, null, null], //3
    [null, null, null, null, null, null, null], //4
    [null, null, null, null, null, null, null]  //5
];


  this.player1 = player1Name;
  this.player2 = player2Name;
  this. winner = null;

// 50/50 chance for either player to start.
  if (Math.random() < 0.5){
    this.currentPlayer = this.player1;
  }
  else{
    this.currentPlayer = this.player2;
  }

}

//Function that will check available slots for players to play
//For checkers, we want to check from the bottom up.
ConnectFour.prototype.playChecker= function (columnNumber) {

  //To check
  if (this.winner !== null){
    return false;
  }
  var playerPositionFound = "not found";

  //Checks bottom most row and moves up vertically.
  for (var i = (this.board.length - 1); i > 0 ; i -= 1)
  {
    //As soon as we find an empty position, break.
    if (this.board[i][columnNumber] === null){
      playerPositionFound = i;
      break;
    }
  }

  //if never found position (still equals not found) => column is full
  //INVALID MOVE

  if(playerPositionFound === 'not found'){
    return false;
  }


  if (this.currentPlayer === this.player1){
    //If Active player is 1, fill position with a 1;
    this.board[playerPositionFound][columnNumber] = 1;
    //switch turn
    this.currentPlayer = this.player2;
  }
  else{
    //If active player is 2, fill position 2.
    this.board[playerPositionFound][columnNumber] = 2;
    //switch turns
    this.currentPlayer = this.player1;
  }

  this._checkWinner();

  console.log("Winner", this.winner);

  return true;

};


ConnectFour.prototype._checkWinner = function () {
  var row, col, current;

  // Horizontal
  //   rows: all
  //   cols: 0-3
  for (row = 0; row < this.board.length; row += 1) {
    for (col = 0; col <= 3; col += 1) {
      current = this.board[row][col];

      if (current !== null &&
          current === this.board[row][col + 1] &&
          current === this.board[row][col + 2] &&
          current === this.board[row][col + 3]) {
        if (current === 1) {
          this.winner = this.player1;
        } else {
          this.winner = this.player2;
        }
        break;
      }
    }

    if (this.winner !== null) {
      break;
    }
  }


  // Vertical
  //   rows: 0-2
  //   cols: all
  for (row = 0; row <= 2; row += 1) {
    var currentRow = this.board[row];

    for (col = 0; col < currentRow.length; col += 1) {
      current = this.board[row][col];

      if (current !== null &&
          current === this.board[row + 1][col] &&
          current === this.board[row + 2][col] &&
          current === this.board[row + 3][col]) {
        if (current === 1) {
          this.winner = this.player1;
        } else {
          this.winner = this.player2;
        }
        break;
      }
    }

    if (this.winner !== null) {
      break;
    }
  }


  // Down-Right / Up-Left
  //   rows: 0-2
  //   cols: 0-3
  for (row = 0; row <= 2; row += 1) {
    for (col = 0; col <= 3; col += 1) {
      current = this.board[row][col];

      if (current !== null &&
          current === this.board[row + 1][col + 1] &&
          current === this.board[row + 2][col + 2] &&
          current === this.board[row + 3][col + 3]) {
        if (current === 1) {
          this.winner = this.player1;
        } else {
          this.winner = this.player2;
        }
        break;
      }
    }

    if (this.winner !== null) {
      break;
    }
  }


  // Down-Left / Up-Right
  //   rows: 0-2
  //   cols: 3-6
  for (row = 0; row <= 2; row += 1) {
    for (col = 3; col <= 6; col += 1) {
      current = this.board[row][col];

      if (current !== null &&
          current === this.board[row + 1][col - 1] &&
          current === this.board[row + 2][col - 2] &&
          current === this.board[row + 3][col - 3]) {
        if (current === 1) {
          this.winner = this.player1;
        } else {
          this.winner = this.player2;
        }
        break;
      }
    }

    if (this.winner !== null) {
      break;
    }
  }
};
