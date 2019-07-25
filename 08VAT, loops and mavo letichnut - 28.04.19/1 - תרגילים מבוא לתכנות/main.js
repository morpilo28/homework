//EfirstGameDifferenceercise 1
function calculateTriangle(sideOne, sideTwo, sideThree) {

    var sidesLengthAverage = (sideOne + sideTwo + sideThree) / 3;
    var trianleCircumference = sideOne + sideTwo + sideThree;
    var s = trianleCircumference / 2;
    var trianleArea = Math.sqrt(s * (s - sideOne) * (s - sideTwo) * (s - sideThree));
    console.log();

    return (sidesLengthAverage + " " + trianleCircumference + " " + trianleArea);
}

var triangle = calculateTriangle(3, 4, 5);
console.log(triangle);



//EfirstGameDifferenceercise 2
function maximumResult(firstNum, secondNum, thirdNum) {

    var option1 = (firstNum + secondNum) * thirdNum;
    var option2 = firstNum * secondNum + thirdNum;

    if (option1 > option2) {
        return ('(' + firstNum + '+' + secondNum + ')*' + thirdNum + '=' + option1);
    } else {
        return ('(' + firstNum + '*' + secondNum + ')+' + thirdNum + '=' + option2);
    }
}

var max = maximumResult(3, 5, 7);
console.log(max);



//Excrcise 3
function matchWinner(FirstGame1TeamHostGoals, FirstGame2TeamGuestGoals, SecondGame1TeamGuestGoals, SecondGame2TeamHostGoals) {
    var winnerT1 = 1;
    var winnerT2 = 2;
    var tie = 0;
    var team1WinsFirstGame = FirstGame1TeamHostGoals > FirstGame2TeamGuestGoals;
    var team2WinsFirstGame = FirstGame2TeamGuestGoals > FirstGame1TeamHostGoals;
    var team1WinsSecondGame = SecondGame1TeamGuestGoals > SecondGame2TeamHostGoals;
    var team2WinsSecondGame = SecondGame2TeamHostGoals > SecondGame1TeamGuestGoals;
    var tieInBothGames = FirstGame1TeamHostGoals == FirstGame2TeamGuestGoals && SecondGame1TeamGuestGoals == SecondGame2TeamHostGoals;
    firstGameDifference = Math.abs(FirstGame1TeamHostGoals - FirstGame2TeamGuestGoals);
    secondGameDifference = Math.abs(SecondGame2TeamHostGoals - SecondGame1TeamGuestGoals);

    if (team1WinsFirstGame && team1WinsSecondGame) {
        return winnerT1;
    } else if (team2WinsFirstGame && team2WinsSecondGame) {
        return winnerT2;
    } else if (FirstGame1TeamHostGoals == FirstGame2TeamGuestGoals || SecondGame1TeamGuestGoals == SecondGame2TeamHostGoals) {
        if (team1WinsSecondGame || team1WinsFirstGame) {
            return winnerT1;
        } else if (team2WinsSecondGame || team2WinsFirstGame) {
            return winnerT2;
        }
    } else if (team1WinsFirstGame && team2WinsSecondGame || team2WinsFirstGame && team1WinsSecondGame) {
        if (firstGameDifference > secondGameDifference || secondGameDifference > firstGameDifference) {
            return winnerT1;
        } else if (firstGameDifference > secondGameDifference || secondGameDifference > firstGameDifference) {
            return winnerT2;
        } else if (firstGameDifference == secondGameDifference) {
            if (SecondGame1TeamGuestGoals > FirstGame2TeamGuestGoals) {
                return winnerT1;
            } else if (SecondGame1TeamGuestGoals < FirstGame2TeamGuestGoals) {
                return winnerT2;
            }
        }
    } else if (tieInBothGames) {
        if (SecondGame1TeamGuestGoals > FirstGame2TeamGuestGoals) {
            return winnerT1;
        } else if (SecondGame1TeamGuestGoals < FirstGame2TeamGuestGoals) {
            return winnerT2;
        }
    } else {
        return tie;
    }
}

var theWinnerOfTheMatch = matchWinner(2, 2, 2, 1);
console.log(theWinnerOfTheMatch);
