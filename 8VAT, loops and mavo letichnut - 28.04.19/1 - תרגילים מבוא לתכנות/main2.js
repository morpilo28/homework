//Exercise 1
function calculateTriangle(sideOne, sideTwo, sideThree) {

    var sidesLengthAverage = (sideOne + sideTwo + sideThree) / 3;
    var trianleCircumference = sideOne + sideTwo + sideThree;
    var s = trianleCircumference / 2;
    var trianleArea = Math.sqrt(s * (s - sideOne) * (s - sideTwo) * (s - sideThree));
    console.log(sidesLengthAverage, trianleCircumference, trianleArea);

    return "";
}

calculateTriangle(3, 4, 5);



//Exercise 2
function maximumResult(firstNum, secondNum, thirdNum) {

    var option1 = (firstNum + secondNum) * thirdNum;
    var option2 = firstNum * secondNum + thirdNum;

    if (option1 > option2) {
        return ('(' + firstNum + '+' + secondNum + ')*' + thirdNum + '=' + option1);
    } else {
        return ('(' + firstNum + '*' + secondNum + ')+' + thirdNum + '=' + option2);
    }
}

maximumResult(3, -5, 7);




//excrcise 3 without shortcuts
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

    if (team1WinsFirstGame && team1WinsSecondGame || team1WinsFirstGame && SecondGame1TeamGuestGoals == SecondGame2TeamHostGoals || FirstGame1TeamHostGoals == FirstGame2TeamGuestGoals && team1WinsSecondGame) {
        return winnerT1;
    } else if (team2WinsFirstGame && team2WinsSecondGame || team2WinsFirstGame && SecondGame1TeamGuestGoals == SecondGame2TeamHostGoals || team2WinsSecondGame && FirstGame1TeamHostGoals == FirstGame2TeamGuestGoals) {
        return winnerT2;
    } else if (team1WinsFirstGame && team2WinsSecondGame && firstGameDifference > secondGameDifference || team2WinsFirstGame && team1WinsSecondGame && secondGameDifference > firstGameDifference) {
        return winnerT1;
    } else if (team2WinsFirstGame && team1WinsSecondGame && firstGameDifference > secondGameDifference || team1WinsFirstGame && team2WinsSecondGame && secondGameDifference > firstGameDifference) {
        return winnerT2;
    } else if ((team1WinsFirstGame && team2WinsSecondGame || team2WinsFirstGame && team1WinsSecondGame) && firstGameDifference == secondGameDifference && SecondGame1TeamGuestGoals > FirstGame2TeamGuestGoals) {
        return winnerT1;
    } else if ((team1WinsFirstGame && team2WinsSecondGame || team2WinsFirstGame && team1WinsSecondGame) && firstGameDifference == secondGameDifference && SecondGame1TeamGuestGoals < FirstGame2TeamGuestGoals) {
        return winnerT2; //השאלה אם צריך לחזור על כל המשפט עד תוצאות האורחת או שמספיק באלס לרשום רק את התנאי של תוצאות האורחת
    } else if (tieInBothGames && SecondGame1TeamGuestGoals > FirstGame2TeamGuestGoals) {
        return winnerT1;
    } else if (tieInBothGames && SecondGame1TeamGuestGoals < FirstGame2TeamGuestGoals) {
        return winnerT2;
    } else {
        return tie;
    }

}

matchWinner(2, 2, 2, 1);












//Execrcise 3 with shortcuts
function matchWinner(F1H, F2G, S1G, S2H) {
    // F/S= first/second game, 1/2= team, H/G= host/guest
    var winnerT1 = 1;
    var winnerT2 = 2;
    var tie = 0;
    var FT1W = F1H > F2G; //team 1 wins first game
    var FT2W = F2G > F1H; //team 2 wins first game
    var ST1W = S1G > S2H; //team 1 wins second game
    var ST2W = S2H > S1G; //team 2 wins second game
    var tieBoth = F1H == F2G && S1G == S2H; //tei in both games
    x = Math.abs(F1H - F2G); //first game diffrence
    y = Math.abs(S2H - S1G); //second game diffrence

    if (FT1W && ST1W || FT1W && S1G == S2H || F1H == F2G && ST1W) {
        return winnerT1;
    } else if (FT2W && ST2W || FT2W && S1G == S2H || ST2W && F1H == F2G) {
        return winnerT2;
    } else if (FT1W && ST2W && x > y || FT2W && ST1W && y > x) {
        return winnerT1;
    } else if (FT2W && ST1W && x > y || FT1W && ST2W && y > x) {
        return winnerT2;
    } else if ((FT1W && ST2W || FT2W && ST1W) && x == y && S1G > F2G) {
        return winnerT1;
    } else if ((FT1W && ST2W || FT2W && ST1W) && x == y && S1G < F2G) {
        return winnerT2; //השאלה אם צריך לחזור על כל המשפט עד תוצאות האורחת או שמספיק באלס לרשום רק את התנאי של תוצאות האורחת
    } else if (tieBoth && S1G > F2G) {
        return winnerT1;
    } else if (tieBoth && S1G < F2G) {
        return winnerT2;
    } else {
        return tie;
    }

}

matchWinner(2, 2, 2, 1);

















































