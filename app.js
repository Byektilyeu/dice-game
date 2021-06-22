// Toglogchiin  eeljiig hadgalah huvsagch, 1-r toglogchiig 0, 2-r toglochiig 1 gej temdeglii
var activePlayer = 1;

// oglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];

// Toglogchiin eeljiindee tsugluulj baigaa onoog hadgalah huvisagch
var roundScore = 0;

// Shoonii ali talaaraa buusniig hadgalah huvisagch heregtei, 1-6 gesen 
// utgiig ene huvisagchid sanamsarguigeer uusgej ugnu. 
var dice = Math.floor(Math.random() * 6) + 1;

//<div class="player-score" id="score-0">43</div>
//id-aar (#) ni haij olood utgiig ni uurchilj bna
//window. - iig bichihgui baij bolno
// window.document.querySelector('#score-0').innerHTML = dice;

// document.querySelector('#score-1').innerHTML = dice;

// Program ehlehed beldii
document.querySelector('#score-0').textContent = 0;
document.querySelector('#score-1').textContent = 0;
document.querySelector('#current-0').textContent = 0;
document.querySelector('#current-1').textContent = 0;

// class-aar haih tohioldold .-eer haina
document.querySelector('.dice').style.display = "none";


console.log('Shoo : ' + dice);