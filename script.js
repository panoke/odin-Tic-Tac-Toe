function createBoardArray (size) {
    const max = size === undefined ? 3 : size;
    const boardArray = [];

    for (let x = 0; x < max; x++) {
        boardArray[x] = [];
        for (let y = 0; y < max; y++) {
            boardArray[x][y] = null;
        }
    }

    return boardArray
}

function checkWinner (boardArray) {
    const size = boardArray.length

    // check vertically
    for (let x = 0; x < size; x++) {
        const startPlayer = boardArray[x][0]
        if (startPlayer === null) {
            continue;
        }
        
        for (let y = 1; y < size; y++) {
            if (boardArray[x][y] === startPlayer)
            {
                if (y === size - 1) {
                    return boardArray[x][y];
                }
            }
            else {
                break;  
            }

        }
    }

    // check horizontally
    for (let y = 0; y < size; y++) {
        const startPlayer = boardArray[0][y]
        if (startPlayer === null) {
            continue;
        }

        for (let x = 1; x < size; x++) {
            if (boardArray[x][y] === startPlayer)
            {
                if (x === size - 1) {
                    return boardArray[x][y];
                }
            }
            else {
                break;  
            }

        }
    }

    // check diagonally 
    const Start00 = boardArray[0][0]
    if (startPlayer !== null) {
        for (let z = 1; z < size; z++) {
            if (boardArray[z][z] === Start00)
            {
                if (z === size - 1) {
                    return boardArray[z][z];
                }
            }
            else {
                break;  
            }
        }
    }

    const StartZ0 = boardArray[size-1][0]
    if (startPlayer !== null) {
        for (let z = 1; z < size; z++) {
            if (StartZ0 === boardArray[size - 1 - z][z]) {
                if (z == size - 1) {
                    return boardArray[size - 1 - z][z];
                }
            }
            else {
                break;
            }

            
        }
    }
}

function setPlayer1 (game, player) {
    game.player1name = player;
}

function setPlayer2 (game, player) {
    game.player2name = player;
}

function takeTurn (game, x, y) {
    if (game.gameBoard[x][y] === null) {
        game.gameBoard[x][y] = game.next;
        game.next = game.next === game.player1 ? game.player2 : game.player1;
    }
    else {
        console.error(`Place already taken, x: ${x}, y: ${y}`)
    }
}

function consoleDrawBoard (board) {
    const boardRotated = board[0].map((_, x) => board.map(row => row[x]));
    console.table(boardRotated)
}

function game () {
    const board = createBoardArray();
    const player1 = X;
    const player2 = Y;

}

