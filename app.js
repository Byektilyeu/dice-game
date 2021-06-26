// Toglogchiin  eeljiig hadgalah huvsagch, 1-r toglogchiig 0, 2-r toglochiig 1 gej temdeglii
var activePlayer = 0;

// oglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores = [0, 0];

// Toglogchiin eeljiindee tsugluulj baigaa onoog hadgalah huvisagch
var roundScore = 0;

// Shoonii ali talaaraa buusniig hadgalah huvisagch heregtei, 1-6 gesen 
// utgiig ene huvisagchid sanamsarguigeer uusgej ugnu. 
var diceNumber = Math.floor(Math.random() * 6) + 1;

//<div class="player-score" id="score-0">43</div>
//id-aar (#) ni haij olood utgiig ni uurchilj bna
//window. - iig bichihgui baij bolno
// window.document.querySelector('#score-0').innerHTML = dice;

// document.querySelector('#score-1').innerHTML = dice;

// Program ehlehed beltgii
document.getElementById("score-0").textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// class-aar haih tohioldold .-eer haina
var diceDom = document.querySelector('.dice');
diceDom.style.display = "none";

// Shoog shiideh event listener
document.querySelector(".btn-roll").addEventListener("click", function (){
    // 1-ees 6 dotorh sanamsargui 1 too ggargaj avna
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // Shoonii zurgiigweb deer gatgaj irne
    diceDom.style.display = "block";

    // Buusan sanamsargui toond hargalzah shoonii zurgiig web huudas deer hgargaj irne 
    diceDom.src = "dice-" + diceNumber + '.png';

    // Buusan too ni 1-ees yalgaatai bol idevhtei eeljiin onoog nemegduulkne .Toglogchiin eeljiin onoog uurchilnu
    if(diceNumber !== 1){
        // 1-ees yalgaatai too buulaa. Buusan toog toglogchid nemj ugnu.
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    } else {
        // 1 buusan tul toglogchiin eeljiig ene hesegt solij ugnu. 

        // Ene toglogchiin eeljiindeee tsugluulsan onoog 0 bolgono
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = 0;
        //toglogchiin eeljiig shiljuulne
        if(activePlayer === 0){
            activePlayer = 1;
        } else {
            activePlayer = 0;
        }
        //Ulaan tsegiig haij oloh hesgiig hiine
        document.querySelector('.player-0-panel').classList.toggle("active");
        document.querySelector('.player-1-panel').classList.toggle("active");


        // Shoog tur alga bolgoh
        diceDom.style.display = "none";



        // Herev idevhtei toglogch ni 0 baival idevhtei toglogchiig 1 bolgo
        // Ugui bol idevhtei toglogchiig 0 bolgo




    }
});




