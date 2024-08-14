//
// This is only a SKELETON file for the 'State of Tic Tac Toe' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function getColumn(grid, colIdx) {
  const column = [];

  for (let i = 0; i < 3; i++) {
    column.push(grid[i][colIdx]);
  }

  return column;
}

function getRow(grid, rowIdx) {
  const row = [];

  for (let i = 0; i < 3; i++) {
    row.push(grid[rowIdx][i]);
  }

  return row;
}

function getDiagonal(grid, invert) {
  const diagonal = [];

  for (let i = 0; i < 3; i++) {
    diagonal.push(grid[i][invert ? 2 - i : i]);
  }

  return diagonal;
}

function isFinished(grid) {
  for (const row of grid) {
    if (row.includes(' ')) return false;
  }

  return true;
}

function getLineWinner(line) {
  if ([...line].filter((l) => l === 'X').length === 3) return 'X';
  if ([...line].filter((l) => l === 'O').length === 3) return 'O';
  return null;
}

function countX(grid) {
  let count = 0;

  for (let i = 0; i < 3; i++) {
    const row = getRow(grid, i);
    count += row.reduce((acc, cur) => acc + Number(cur === 'X'), 0);
  }

  return count;
}

function countO(grid) {
  let count = 0;

  for (let i = 0; i < 3; i++) {
    const row = getRow(grid, i);
    count += row.reduce((acc, cur) => acc + Number(cur === 'O'), 0);
  }

  return count;
}

function findWinners(grid) {
  const winners = [];

  for (let i = 0; i < 3; i++) {
    const col = getColumn(grid, i);
    if (getLineWinner(col)) winners.push(getLineWinner(col));

    const row = getRow(grid, i);
    if (getLineWinner(row)) winners.push(getLineWinner(row));
  }

  if (getLineWinner(getDiagonal(grid, false)))
    winners.push(getLineWinner(getDiagonal(grid, false)));
  if (getLineWinner(getDiagonal(grid, true)))
    winners.push(getLineWinner(getDiagonal(grid, true)));

  return winners;
}

function checkInvalid(board) {
  let x = countX(board);
  let o = countO(board);

  if (x < o) throw new Error('Wrong turn order: O started');
  if (x - 1 > o) throw new Error('Wrong turn order: X went twice');
  if (findWinners(board).length === 2)
    if (findWinners(board).at(0) !== findWinners(board).at(1))
      throw new Error(
        'Impossible board: game should have ended after the game was won'
      );
}

export const gamestate = (board) => {
  checkInvalid(board);
  if (isFinished(board) && findWinners(board).length === 0) return 'draw';

  const winner = findWinners(board).at(0);
  if (winner) {
    if (winner === 'X') {
      if (countX(board) === countO(board))
        throw new Error(
          'Impossible board: game should have ended after the game was won'
        );
      return 'win';
    } else {
      if (countX(board) !== countO(board))
        throw new Error(
          'Impossible board: game should have ended after the game was won'
        );
      return 'win';
    }
  }

  return 'ongoing';
};
