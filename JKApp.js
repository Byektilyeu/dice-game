/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var g_scores, g_roundScore, g_activePlayer, g_gamePlaying, g_PreviousDiceRolls, g_TopScoreToWin;

init();

function init() {
    g_scores = [0, 0];
    g_PreviousDiceRolls = [0,0];
    g_activePlayer = 0;
    g_roundScore = 0;
    g_gamePlaying = true;
    
    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector(".final-score").value = "100";
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(g_gamePlaying) {
        // 1. Random number
        var dice1Value = Math.floor(Math.random() * 6) + 1;
        var dice2Value = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        var dice1DOM = document.querySelector('.dice-1');
        dice1DOM.style.display = 'block';
        dice1DOM.src = 'dice-' + dice1Value + '.png';

        var dice2DOM = document.querySelector('.dice-2');
        dice2DOM.style.display = 'block';
        dice2DOM.src = 'dice-' + dice2Value + '.png';

        console.log( dice1DOM+" "+dice2DOM)

        //3. Update the round score IF the rolled number was NOT a 1
        if ( ( !DiceRolled1(dice1Value) && !DiceRolled1(dice2Value) ) && !TwoSixesRolled( dice1Value, dice2Value ) )
        {
            //Add score
            g_roundScore += dice1Value + dice2Value;
            document.querySelector('#current-' + g_activePlayer).textContent = g_roundScore;
        } 
        else
        {
            nextPlayer();
        }

        if( TwoSixesRolled( dice1Value, dice2Value ) ) 
        {
            alert( "Two sixes rolled!" )
        }        
        
        g_PreviousDiceRolls[0] = dice1Value;        
        g_PreviousDiceRolls[1] = dice2Value;
    }    
});

function TwoSixesRolled( dice1Val, dice2Val )
{
   //   Fail if both dice are 6, or if one die is 6 and a 6 was rolled on either last turn.
   if( 6 === dice1Val && 6 === dice2Val 
    || 6 === dice1Val && ( 6 === g_PreviousDiceRolls[0] || 6 === g_PreviousDiceRolls[1] )
    || 6 === dice2Val && ( 6 === g_PreviousDiceRolls[0] || 6 === g_PreviousDiceRolls[1] ) )
    {
        return true;
    }

    return false;
}

document.querySelector('.btn-hold').addEventListener('click', function() 
{
    if (g_gamePlaying) {
        // Add CURRENT score to GLOBAL score
        g_scores[g_activePlayer] += g_roundScore;

        // Update the UI
        document.querySelector('#score-' + g_activePlayer).textContent = g_scores[g_activePlayer];

        // Check if player won the game
        if (g_scores[g_activePlayer] >= g_TopScoreToWin ) {
            document.querySelector('#name-' + g_activePlayer).textContent = 'Winner!';
            document.querySelector('.dice-1').style.display = 'none';
            document.querySelector('.dice-2').style.display = 'none';
            document.querySelector('.player-' + g_activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + g_activePlayer + '-panel').classList.remove('active');
            g_gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});


function DiceRolled1(diceValue) 
{
    var result = ( 1 === diceValue );
    if( result )
    {
        alert("1 rolled!" );
        return true;
    }
    return false ;
}

function nextPlayer() 
{
    //Next player
    g_activePlayer === 0 ? g_activePlayer = 1 : g_activePlayer = 0;
    g_roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);
document.querySelector('.Score-button').addEventListener('click', function()
{
    g_TopScoreToWin = document.querySelector(".final-score").value;
    alert("Max score of "+g_TopScoreToWin+" submitted");    
});

/*
YOUR 3 CHALLENGES
Change the game to follow these rules:

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. 
    This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, 
    so take a look at the CSS code for the first one.)
*/
