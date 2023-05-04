
// blackJack
player = {
    name: 'Austine',
    money: 120
}
total= 0
totalArray = []
blackJack = false
isAlive = false
message=document.getElementById('message')
blackjackSum = document.getElementById('blackjackSum')
blackjackCards = document.getElementById('blackjackCards')
//console.log(totalArray + 'j');
playerDetails = document.getElementById('player').innerHTML = player.name + ": $"+ player.money
function getRandom() {
    floor = Math.floor(Math.random() * 13) + 1
    if (floor == 1) {
        return 11
        
    } else if(floor > 10){
        return 10
        
    }else{
        return floor
    }
    
}

document.getElementById('startGameBtn').addEventListener('click', function(){
    isAlive = true
    firstCard = getRandom()
    secondCard = getRandom()
    total = firstCard + secondCard
    //console.log(total);

    totalArray=[firstCard, secondCard]
   // console.log(totalArray);


    renderGame()
})

function renderGame(){
    blackjackSum.innerHTML = 'Sum: ' + total
    blackjackCards.innerHTML =  'Cards: You picked '
    for (i=0; i<totalArray.length; i++){
        blackjackCards.innerHTML += totalArray[i] + " "
    }
    if (total<21){
        message.innerHTML ='Do you want to draw another card?'
    } else if(total>21){
        message.innerHTML= ('You Lose,Try again')
        // blackjackSum.innerHTML += total
        isAlive=false
        //startGame()
    } else{
        message.innerHTML='You win'
        //blackjackSum.innerHTML += total
        blackJack= true
    }
    
}
document.getElementById('newCardBtn').addEventListener('click', function(){
    if (isAlive == true && blackJack == false) {
        number = getRandom()
        total= total+number
        //console.log(total);
        totalArray.push(number)
       // console.log(totalArray);
    
        renderGame()
        // message.innerHTML = 'You drew another card ' + number
        blackjackCards.innerHTML =  'Cards: You picked '
        for( i = 0; i < totalArray.length; i++){
            blackjackCards.innerHTML+= totalArray[i] + " "
        }       
    } else {
        console.log('newCard');
        
    }

})  