function newGame (player1, player2, size) {

    const size = size === undefined ? 3 : size;

    const players = {
        "player1": {
            name: player1,
            token: "X"
        },
        "player2": {
            name: player2,
            token: "O"
        }
    }

    let nextPlayer = "X"

    const gameBoard = (() => {
        const boardArray = [];

        for (let x = 0; x < size; x++) {
            boardArray[x] = [];
            for (let y = 0; y < size; y++) {
                boardArray[x][y] = null;
            }
        }

        return boardArray
    })()

    let returnPlayerName = (token) => {
        for (const player in players) {
            if(players[player].token === token)
            {
                return players[player].name
            }
        }
    }

    const checkWinner = () => {
        // check vertically
        for (let x = 0; x < size; x++) {
            const startPlayer = gameBoard[x][0]
            if (startPlayer === null) {
                continue;
            }
            
            for (let y = 1; y < size; y++) {
                if (gameBoard[x][y] === startPlayer)
                {
                    if (y === size - 1) {
                        return returnPlayerName(gameBoard[x][y]);
                    }
                }
                else {
                    break;  
                }

            }
        }

        // check horizontally
        for (let y = 0; y < size; y++) {
            const startPlayer = gameBoard[0][y]
            if (startPlayer === null) {
                continue;
            }

            for (let x = 1; x < size; x++) {
                if (gameBoard[x][y] === startPlayer)
                {
                    if (x === size - 1) {
                        return returnPlayerName(gameBoard[x][y]);
                    }
                }
                else {
                    break;  
                }

            }
        }

        // check diagonally 
        const Start00 = gameBoard[0][0]
        if (startPlayer !== null) {
            for (let z = 1; z < size; z++) {
                if (gameBoard[z][z] === Start00)
                {
                    if (z === size - 1) {
                        return returnPlayerName(gameBoard[z][z]);
                    }
                }
                else {
                    break;  
                }
            }
        }

        const StartZ0 = gameBoard[size-1][0]
        if (startPlayer !== null) {
            for (let z = 1; z < size; z++) {
                if (StartZ0 === gameBoard[size - 1 - z][z]) {
                    if (z == size - 1) {
                        return returnPlayerName(gameBoard[size - 1 - z][z]);
                    }
                }
                else {
                    break;
                }

                
            }
        }
    }

    const takeTurn = (x, y) => {
        if (gameBoard[x][y] === null) {
            gameBoard[x][y] = nextPlayer;
            nextPlayer = nextPlayer === players.player1.token ? players.player2.token : players.player1.token;
        }
        else {
            console.error(`Place already taken, x: ${x}, y: ${y}`)
        }
    }

    const consoleDrawBoard = () => {
        const boardRotated = gameBoard[0].map((_, x) => gameBoard.map(row => row[x]));
        console.table(boardRotated);
    }

    const checkDraw = () => {
        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                if (gameBoard[x][y] !== null) {
                    return false;
                }
            }
        }
        return true;
    }

    return(players, gameBoard, takeTurn, checkWinner, checkDraw, consoleDrawBoard);
}