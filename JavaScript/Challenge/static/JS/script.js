//Challenge 1
function getAge(){
    var age = prompt("Enter Your Age");
    var ageInDays = age*365;
    console.log(ageInDays);
    
    var h2 = document.createElement('h2');
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' Days Old');
    h2.setAttribute('id', 'getAge');
    h2.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h2);
}

function reset(){
    document.getElementById('getAge').remove();
}


//Challenge 2
function generateImage(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-image-generator');
    image.src = "https://source.unsplash.com/random/250x250";
    div.appendChild(image);
}

//Challenge 3

function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log(botChoice);
    let result = decideWinner(humanChoice, botChoice);
    let message = finalMessage(result);
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice ,message);
}

function randToRpsInt(){
    return Math.floor(Math.random() *3);
}

function numberToChoice(number){
    return ['rock', 'paper' ,'scissors'][number];
}

function decideWinner(yourChoice,computerChoice){
    var rpsData = {
        'rock' : {'scissors':1, 'rock': 0.5, 'paper': 0},
        'paper' : {'rock':1, 'paper': 0.5, 'scissors': 0},
        'scissors' : {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }

    var yourScore = rpsData[yourChoice][computerChoice];
    var computerScore = rpsData[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]){
    if(yourScore === 0){
        return {'message': 'You Lost!', 'color' : 'red'};
    }else if(yourScore === 0.5){
        return {'message': 'You Tied!', 'color' : 'yellow'};
    }else{
        return {'message': 'You Won!', 'color' : 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, message){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'>";
    messageDiv.innerHTML = "<h1 style='color: " + message['color'] + "; font-size: 60px: padding: 30px; '>" + message['message']+ "</h1>";
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'>";

    document.getElementById('flex-box-rps').appendChild(humanDiv);
    document.getElementById('flex-box-rps').appendChild(messageDiv);
    document.getElementById('flex-box-rps').appendChild(botDiv);
}