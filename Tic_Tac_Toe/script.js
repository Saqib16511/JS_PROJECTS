const board = document.querySelector('.board');
const squares = document.querySelectorAll('.square');
const message = document.querySelector('.message');
const players = ['X', 'O'];
const restartbtn = document.querySelector('.restart-btn')

let currentplayer = players[0];

const winningpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', () => {
        const myBox = squares[i];
        console.log(myBox);
        if (myBox.textContent !== '' || checkwinner(currentplayer)) {
            return;
        }
        squares[i].textContent = currentplayer;
        if (checkwinner(currentplayer)) {
            message.textContent = `Game Over,${currentplayer}wins the game ! Please restart the game`
            return
        }
        if (chechtie(currentplayer)) {
            message.textContent = `Game Tied! Please restart the game`
            return
        }
        currentplayer = currentplayer === players[0] ? players[1] : players[0];
        if (currentplayer === players[0]) {
            message.textContent = `X's Turn`;
        } else {
            message.textContent = `O's Turn`;
        }
    })
    function checkwinner(currentplayer) {
        for (let j = 0; j < winningpatterns.length; j++) {
            const [a, b, c] = winningpatterns[j]
            if (squares[a].textContent == currentplayer &&
                squares[b].textContent == currentplayer &&
                squares[c].textContent == currentplayer) {
                return true
            }
        }
        return false
    }
};

function chechtie(){
    for(let a = 0; a < squares.length;a++){
        if(squares[a].textContent == ''){
            return false;
        }
    }
    return true;
}
function restart(){
    for(let i = 0; i < squares.length;i++){
        squares[i].textContent = ''
    }
    message.textContent = `X's Turn`
    currentplayer = players[0]
};

restartbtn.addEventListener('click',()=>{
    restart()
})