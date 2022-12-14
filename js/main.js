
var gBaloons = []


var elBallon = document.querySelectorAll('.balloon');
var elContainer = document.querySelector('.container')
var counter = 0


function init() {
    var button = document.querySelector('button')
    button.style.visibility = 'hidden'
    var sound = new Audio('sound/song.mp3')
    sound.play()
    
    setInterval(createBalloon, getRandomIntInclusive(500, 800));
    setInterval(moveBaloons, 50);
}

function onSpeedUp(bllonIdx){
    gBaloons[bllonIdx].speed += 5
}

function moveBaloons() {

    for (var i = 0; i < gBaloons.length; i++) {
        gBaloons[i].bottom += gBaloons[i].speed
        elBallon[i].style.bottom = gBaloons[i].bottom + 'px'
    }
}

function createBalloon() {
    gBaloons[gBaloons.length] = {
        bottom: getRandomIntInclusive(1, 10),
        speed: Math.random() * 1 + 1
    }

    console.log(gBaloons);
    var bottom = gBaloons[gBaloons.length - 1].bottom + 'px'
    var backgroundColor = getRandomColor()
    var left = getRandomIntInclusive(1, 90) + '%'
    let div = document.createElement('div');
    elContainer.appendChild(div)
    elBallon = document.querySelectorAll('.container div')
    console.log(elBallon);
    elBallon[counter].setAttribute("class", "balloon") 
    elBallon[counter].onclick = "onBallonClick(this)"
    elBallon[counter].setAttribute("onmouseout", `onSpeedUp(${counter})`)
    elBallon[counter].setAttribute("onclick", "onBallonClick(this)")
    elBallon[counter].style.backgroundColor = backgroundColor
    elBallon[counter].style.left = left
    elBallon[counter].style.bottom = bottom
    counter++

}

function onBallonClick(balloon) {
    var sound = new Audio('sound/pop.wav')
    sound.play()
    balloon.style.opacity   = 0
}


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


