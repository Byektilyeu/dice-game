
// Togloom duussan esehiig hadgalah huvisagch
var isNewGame;


var activePlayer;
var scores;
var roundScore;

// class-aar haih tohioldold .-eer haina
//Shoonii zurgiig uzuuleh elementiig DOM-oos haij olood end hadgalya
var diceDom = document.querySelector('.dice');

// Togloomiig ehelne
initGame();


// NEW game beltgeh
function initGame(){
    //Togloom ehellee gedeg tuluvt oruulna
    isNewGame= true;

    // Toglogchiin  eeljiig hadgalah huvsagch, 1-r toglogchiig 0, 2-r toglochiig 1 gej temdeglii
    activePlayer = 0;

    // oglogchdiin tsugluulsan onoog hadgalah huvisagch
    scores = [0, 0];

    // Toglogchiin eeljiindee tsugluulj baigaa onoog hadgalah huvisagch
    roundScore = 0;

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


    // toglogchuudiin neriig butsaaj gargah
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-0').textContent = 'Player 2';

    //
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');


    document.querySelector('.player-0-panel').classList.remove("active");
    document.querySelector('.player-1-panel').classList.remove("active")


    document.querySelector('.player-0-panel').classList.add("active")

    diceDom.style.display = "none";
}


// Shoog shiideh event listener
document.querySelector(".btn-roll").addEventListener('click', function (){
    
    if(isNewGame === true){
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

            switchToNextPlayer();
        }
    } else {
        alert('Toogloom duussan bna.New game darj shine togloom ehelne uu');
    }
});

        // HOLD tovchnii event listener
        document.querySelector('.btn-hold').addEventListener('click', function(){
            
            if(isNewGame === true){
                // Ug toglogchiin tsugluulsan eeljiin onoog global onoo deer ni nemj ugnu
            
                // if(activePlayer === 0){
                //     scores[0] = scores[0] + roundScore;
                // } else {
                //     scores[1] = scores[1] + roundScore;
                // }
                // doorh code deerh code-toi yalgaagui bna
                scores[activePlayer] = scores[activePlayer] + roundScore;
                
                
                // Delgets deer onoog ni uurchilnu
                document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

                // Ug toglogch hojson esehiig shalgah (100 ih bol hojno)
                if(scores[activePlayer] >= 100){

                    //togloomiig duussan tuluvt oruulna
                    isNewGame = false;

                    // Yalagch gesen textiig winner gej gargana
                    document.getElementById('name-' + activePlayer).textContent = "WINNER!!"
                    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                } else {
                    switchToNextPlayer();
                }
            } else {
                alert('Toogloom duussan bna.New game darj shine togloom ehelne uu');
            }
        });

        // ene funkts ni toglochiin eeljiig solidog
        function switchToNextPlayer(){
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
        }


        // NEW GAme buyu Shine togloom ehluuleh event listener
        document.querySelector('.btn-new').addEventListener('click', initGame);




