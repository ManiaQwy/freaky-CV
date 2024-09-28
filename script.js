  

let colors1 = ["#fcbe03","#58851d","#0a82fa","#f04324","#a011f2","#f51677"]
let colors2 = ["#ffd147","#99d44c","#58aafc","#ff765e","#c35cff","#ff7ab4"]

let chosen = 1;
let rand = 0;
function pickRandom(){
    rand = Math.floor(Math.random() * 6)
    if(chosen == rand){
        pickRandom()
    }else{
        chosen = rand;
        return 0;
    }
}
function changeColor() {
    pickRandom()
    let top = document.getElementById("top");
    let pliki = document.getElementById("pliki"); 
    top.style.backgroundColor = colors1[rand];  
    pliki.style.backgroundColor = colors2[rand];    
}
let onoff = 0;
let audio = new Audio("spotifydown.com - Bla Bla Bla.mp3"); 
let colorInterval; 

function discoParty() {
    let party = document.getElementById("partytime");
    let ball = document.getElementById("partyball");

    if(onoff == 0) {
        audio.currentTime = audio.duration / 9.6511627907;
        audio.play();
        ball.innerHTML = "<div id='discoball'><img src='glitter-ball-10892_256.gif' alt='' style='opacity:1;'></div>";
        party.innerHTML = "<div id='discolight'></div>";
        startColorChange();

        onoff = 1;
    } else if(onoff == 1) {
        audio.pause();
        audio.currentTime = audio.duration / 9.6511627907;;
        party.innerHTML = "";
        ball.innerHTML = "";
        clearInterval(colorInterval);

        onoff = 0;
    }
}

function startColorChange() {
    const discolight = document.getElementById("discolight");
    const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan"]; 
    colorInterval = setInterval(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
        discolight.style.backgroundColor = randomColor;
        discolight.style.borderBottomColor = randomColor2;
        changeColor()
    }, 450);
}