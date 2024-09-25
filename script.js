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