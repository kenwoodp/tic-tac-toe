var b1 = document.querySelector('.box1')
var b2 = document.querySelector('.box2')
var b3 = document.querySelector('.box3')
var b4 = document.querySelector('.box4')
var b5 = document.querySelector('.box5')
var b6 = document.querySelector('.box6')
var b7 = document.querySelector('.box7')
var b8 = document.querySelector('.box8')
var b9 = document.querySelector('.box9')

// For the gif to start

var stationaryImageOne = document.querySelector('.stationary-one')
var stationaryImageTwo = document.querySelector('.stationary-two')

var movingImageOne = document.querySelector('.moving-one')
var movingImageTwo = document.querySelector('.moving-two')

function startMovingOne() {
    movingImageOne.style.display = "";
    movingImageTwo.style.display = "none";
    stationaryImageOne.style.display = "none"
}

function startMovingTwo() {
    movingImageOne.style.display = "none";
    movingImageTwo.style.display = "";
    stationaryImageTwo.style.display = "none"
}


// Initial state of images
movingImageOne.style.display = "none";
movingImageTwo.style.display = "none";

ronaldoScore = document.querySelector('.ronaldo-score')

messiScore = document.querySelector('.messi-score')

var resetBtn = document.querySelector('.reset');

resetBtn.addEventListener('click', resetGameButton)

var toggle = true

var boxes = document.querySelector('.boxes');

function selectBox(event) {
    var boxClicked = event.target
    if(toggle === true && boxClicked.textContent == '') {
        boxClicked.textContent = 'X'
        stationaryImageOne.style.display = ""
        stationaryImageTwo.style.display = ""
        startMovingOne()
        checkDraw()
        checkRonaldoWin()
        toggle = false
    }else if(toggle === false && boxClicked.textContent == ''){
        boxClicked.textContent = 'O'
        stationaryImageOne.style.display = ""
        stationaryImageTwo.style.display = ""
        startMovingTwo()
        checkDraw()
        checkMessiWin()
        toggle = true
    }
}

boxes.addEventListener('click', selectBox)

// Function to check if X wins

var playAgainYes = document.querySelector('.play-yes')
var playAgainNo = document.querySelector('.play-no')

var currentRonaldoScore = document.querySelector('.ronaldo-score').innerText

function checkRonaldoWin() {
    if (b1.textContent == 'X' && b2.textContent == 'X' && b3.textContent == 'X'){
        checkRonaldoWinYes()

        var playAgainNoBtn = document.querySelector('.play-no');
        playAgainNoBtn.addEventListener('click', noButtonClicked)
        
    }else if(b1.textContent == 'X' && b4.textContent == 'X' && b7.textContent == 'X'){
        checkRonaldoWinYes()

        var playAgainNoBtn = document.querySelector('.play-no');
        playAgainNoBtn.addEventListener('click', noButtonClicked)
    }else if(b1.textContent == 'X' && b5.textContent == 'X' && b9.textContent == 'X'){
        checkRonaldoWinYes()

        var playAgainNoBtn = document.querySelector('.play-no');
        playAgainNoBtn.addEventListener('click', noButtonClicked)
    }else if(b2.textContent == 'X' && b5.textContent == 'X' && b8.textContent == 'X'){
        checkRonaldoWinYes()

        var playAgainNoBtn = document.querySelector('.play-no');
        playAgainNoBtn.addEventListener('click', noButtonClicked)
    }else if(b3.textContent == 'X' && b5.textContent == 'X' && b7.textContent == 'X'){
        checkRonaldoWinYes()

        var playAgainNoBtn = document.querySelector('.play-no');
        playAgainNoBtn.addEventListener('click', noButtonClicked)
    }else if(b3.textContent == 'X' && b6.textContent == 'X' && b9.textContent == 'X'){
        checkRonaldoWinYes()

        var playAgainNoBtn = document.querySelector('.play-no');
        playAgainNoBtn.addEventListener('click', noButtonClicked)
    }else if(b4.textContent == 'X' && b5.textContent == 'X' && b6.textContent == 'X'){
        checkRonaldoWinYes()

        var playAgainNoBtn = document.querySelector('.play-no');
        playAgainNoBtn.addEventListener('click', noButtonClicked)
    }else if(b7.textContent == 'X' && b8.textContent == 'X' && b9.textContent == 'X'){
        checkRonaldoWinYes()

        var playAgainNoBtn = document.querySelector('.play-no');
        playAgainNoBtn.addEventListener('click', noButtonClicked)
    }
}

// Function to see if Messi wins

function checkMessiWin() {
    if (b1.textContent == 'O' && b2.textContent == 'O' && b3.textContent == 'O'){
        checkMessiWinYes();

        var playAgainNoBtn = document.querySelector('.play-no');
        playAgainNoBtn.addEventListener('click', noButtonClicked)
    }else if(b1.textContent == 'O' && b4.textContent == 'O' && b7.textContent == 'O'){
        checkMessiWinYes();

        var playAgainNoBtn = document.querySelector('.play-no');
        playAgainNoBtn.addEventListener('click', noButtonClicked)
    }else if(b1.textContent == 'O' && b5.textContent == 'O' && b9.textContent == 'O'){
        checkMessiWinYes();

        var playAgainNoBtn = document.querySelector('.play-no');
        playAgainNoBtn.addEventListener('click', noButtonClicked)
    }else if(b2.textContent == 'O' && b5.textContent == 'O' && b8.textContent == 'O'){
        checkMessiWinYes();

        var playAgainNoBtn = document.querySelector('.play-no');
        playAgainNoBtn.addEventListener('click', noButtonClicked)
    }else if(b3.textContent == 'O' && b5.textContent == 'O' && b7.textContent == 'O'){
        checkMessiWinYes();

        var playAgainNoBtn = document.querySelector('.play-no');
        playAgainNoBtn.addEventListener('click', noButtonClicked)
    }else if(b3.textContent == 'O' && b6.textContent == 'O' && b9.textContent == 'O'){
        checkMessiWinYes();

        var playAgainNoBtn = document.querySelector('.play-no');
        playAgainNoBtn.addEventListener('click', noButtonClicked)
    }else if(b4.textContent == 'O' && b5.textContent == 'O' && b6.textContent == 'O'){
        checkMessiWinYes();

        var playAgainNoBtn = document.querySelector('.play-no');
        playAgainNoBtn.addEventListener('click', noButtonClicked)
    }else if(b7.textContent == 'O' && b8.textContent == 'O' && b9.textContent == 'O'){
        checkMessiWinYes();

        var playAgainNoBtn = document.querySelector('.play-no');
        playAgainNoBtn.addEventListener('click', noButtonClicked)
    }
}

function checkDraw() {
    if (b1.textContent !== '' && b2.textContent !== '' && b3.textContent !== '' && b4.textContent !== '' && b5.textContent !== '' && b6.textContent !== '' && b7.textContent !== '' && b8.textContent !== '' && b9.textContent !== ''){
        var result = document.querySelector('.result');
        var playAgainQuestion = document.querySelector('.play-again-q');  

        result.textContent = 'Game is a draw!'
        playAgainYes.innerHTML = `<button>${'Yes'}</button>`
        playAgainNo.innerHTML = `<button>${'No'}</button>`
        var playAgainYesBtn = document.querySelector('.play-yes');
        var playAgainNoBtn = document.querySelector('.play-no');
        var result = document.querySelector('.result');
        var playAgainQuestion = document.querySelector('.play-again-q');    

        playAgainQuestion.textContent = 'Would you like to counter?'

        playAgainYesBtn.addEventListener('click', function() {
            reset()
        })

        playAgainNoBtn.addEventListener('click', function() {
            var ronaldoScore = document.querySelector('.ronaldo-score').innerText
            var messiScore = document.querySelector('.messi-score').innerText
            if(ronaldoScore > messiScore){
                document.querySelector('.result').textContent = 'The final score is ' + ronaldoScore + ' - ' + messiScore + '. Ronaldo wins!!!'
                resetGameNo()
            }else if(ronaldoScore < messiScore){
                document.querySelector('.result').textContent = 'The final score is ' + ronaldoScore + ' - ' + messiScore + '. Messi wins!!!'
                resetGameNo()
            }else if(ronaldoScore === messiScore){
                document.querySelector('.result').textContent = 'The final score is ' + ronaldoScore + ' - ' + messiScore + '. The game is a tie!!!'
                resetGameNo()
            }
        })
    }
}

// Function to reset the board

function reset() {
    document.querySelector('.box1').textContent = '';
    document.querySelector('.box2').textContent = '';
    document.querySelector('.box3').textContent = '';
    document.querySelector('.box4').textContent = '';
    document.querySelector('.box5').textContent = '';
    document.querySelector('.box6').textContent = '';
    document.querySelector('.box7').textContent = '';
    document.querySelector('.box8').textContent = '';
    document.querySelector('.box9').textContent = '';

    document.querySelector('.result').textContent = '';

    toggle = true;

    document.querySelector('.play-yes').textContent = '';
    document.querySelector('.play-no').textContent = '';

    boxes.addEventListener('click', selectBox)

    document.querySelector('.play-again-q').textContent = ''

    var stationaryImageOne = document.querySelector('.stationary-one')
    var stationaryImageTwo = document.querySelector('.stationary-two')
    var movingImageOne = document.querySelector('.moving-one')
    var movingImageTwo = document.querySelector('.moving-two')  
    
    stationaryImageOne.style.display = ""
    stationaryImageTwo.style.display = ""
    movingImageOne.style.display = "none"
    movingImageTwo.style.display = "none"


}

function resetGameNo() {
    document.querySelector('.box1').textContent = '';
    document.querySelector('.box2').textContent = '';
    document.querySelector('.box3').textContent = '';
    document.querySelector('.box4').textContent = '';
    document.querySelector('.box5').textContent = '';
    document.querySelector('.box6').textContent = '';
    document.querySelector('.box7').textContent = '';
    document.querySelector('.box8').textContent = '';
    document.querySelector('.box9').textContent = '';

    toggle = true;

    document.querySelector('.play-yes').textContent = '';
    document.querySelector('.play-no').textContent = '';

    document.querySelector('.play-again-q').textContent = ''

    var stationaryImageOne = document.querySelector('.stationary-one')
    var stationaryImageTwo = document.querySelector('.stationary-two')
    var movingImageOne = document.querySelector('.moving-one')
    var movingImageTwo = document.querySelector('.moving-two')  
    
    stationaryImageOne.style.display = ""
    stationaryImageTwo.style.display = ""
    movingImageOne.style.display = "none"
    movingImageTwo.style.display = "none"
}

function resetGameButton() {
    document.querySelector('.box1').textContent = '';
    document.querySelector('.box2').textContent = '';
    document.querySelector('.box3').textContent = '';
    document.querySelector('.box4').textContent = '';
    document.querySelector('.box5').textContent = '';
    document.querySelector('.box6').textContent = '';
    document.querySelector('.box7').textContent = '';
    document.querySelector('.box8').textContent = '';
    document.querySelector('.box9').textContent = '';

    document.querySelector('.result').textContent = '';

    toggle = true;

    document.querySelector('.play-yes').textContent = '';
    document.querySelector('.play-no').textContent = '';

    boxes.addEventListener('click', selectBox)

    document.querySelector('.play-again-q').textContent = ''

    var stationaryImageOne = document.querySelector('.stationary-one')
    var stationaryImageTwo = document.querySelector('.stationary-two')
    var movingImageOne = document.querySelector('.moving-one')
    var movingImageTwo = document.querySelector('.moving-two')  
    
    stationaryImageOne.style.display = ""
    stationaryImageTwo.style.display = ""
    movingImageOne.style.display = "none"
    movingImageTwo.style.display = "none"

    document.querySelector('.ronaldo-score').textContent = '0';
    document.querySelector('.messi-score').textContent = '0';
}
var siu = document.querySelector('.siu')
function playSiu() {
    siu.playAu
}

function checkRonaldoWinYes() {
    boxes.removeEventListener('click', selectBox)
    playSiu()
    var currentRonaldoScore = Number(document.querySelector('.ronaldo-score').textContent)
    ronaldoScore.textContent = currentRonaldoScore + 1;
    var playAgainQuestion = document.querySelector('.play-again-q');    
    var result = document.querySelector('.result');
    if(ronaldoScore.textContent === '3'){
        result.textContent = 'Ronaldo has scored a hat trick!!!'
        playAgainQuestion.textContent = 'Would you like to play again?'
        playAgainYes.innerHTML = `<button>${'Yes'}</button>`
        playAgainNo.innerHTML = `<button>${'No'}</button>`
        var playAgainYesBtn = document.querySelector('.play-yes');
    
        playAgainYesBtn.addEventListener('click', reset)        
    }else {    
        result.textContent = 'Ronaldo has scored!!!'
        playAgainQuestion.textContent = 'Would you like to play again?'
        playAgainYes.innerHTML = `<button>${'Yes'}</button>`
        playAgainNo.innerHTML = `<button>${'No'}</button>`
        var playAgainYesBtn = document.querySelector('.play-yes');
    
        playAgainYesBtn.addEventListener('click', reset)
    }
}

function noButtonClicked() {
    var ronaldoScore = document.querySelector('.ronaldo-score').innerText
    var messiScore = document.querySelector('.messi-score').innerText
    if(ronaldoScore > messiScore){
        document.querySelector('.result').textContent = 'The final score is ' + ronaldoScore + ' - ' + messiScore + '. Ronaldo wins!!!'
        resetGameNo() 
    }else if(ronaldoScore < messiScore){
        document.querySelector('.result').textContent = 'The final score is ' + ronaldoScore + ' - ' + messiScore + '. Messi wins!!!'
        resetGameNo()
    }else if(ronaldoScore === messiScore){
        document.querySelector('.result').textContent = 'The final score is ' + ronaldoScore + ' - ' + messiScore + '. The game is a tie!!!'
        resetGameNo()
    }
}
        
function checkMessiWinYes() {
    boxes.removeEventListener('click', selectBox)
    var currentMessiScore = Number(document.querySelector('.messi-score').textContent);
    messiScore.textContent = currentMessiScore + 1;
    var result = document.querySelector('.result');
    var playAgainQuestion = document.querySelector('.play-again-q');  
    if(messiScore.textContent === '3'){
        result.textContent = 'Messi has scored a hat trick!!!'
        playAgainQuestion.textContent = 'Would you like to play again?'
        playAgainYes.innerHTML = `<button>${'Yes'}</button>`
        playAgainNo.innerHTML = `<button>${'No'}</button>`
        var playAgainYesBtn = document.querySelector('.play-yes');
        playAgainYesBtn.addEventListener('click', reset)
    }else{
        result.textContent = 'Messi has scored!!!'
        playAgainQuestion.textContent = 'Would you like to play again?'
        playAgainYes.innerHTML = `<button>${'Yes'}</button>`
        playAgainNo.innerHTML = `<button>${'No'}</button>`
        var playAgainYesBtn = document.querySelector('.play-yes')
        playAgainYesBtn.addEventListener('click', reset)
    }
}