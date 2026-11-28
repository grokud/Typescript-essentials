function createGame(gameName) {
    let score = 0;

    return function win(){
        score++;
        return `Your name ${gameName} score is ${score}`;
    }
}

const hockeyGame = createGame('Hockey');
const soccerGame = createGame('Soccer');

console.log(hockeyGame());
console.log(hockeyGame());
console.log('====================');
console.log(soccerGame());
console.log(soccerGame());
