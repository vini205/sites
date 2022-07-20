let td = document.getElementsByTagName('td');
let btn_types = document.getElementsByClassName('btn-type')
let playColorInput01 = document.getElementById('colorPlayerOne')
let playColorINput02 = document.getElementById('colorPlayerTwo')
let p = document.createElement('p')
let main = document.getElementById('main');


playColorINput02.value='#ffffff'
playColorInput01.value='#000000'


var block;//Para guardar o elemento da tabela que foi clicado
var player =1 ;//Vez de qual Player
var mode=10;//Modo de jogo
let turn = `É a vez do jogador ${player}`


for (const el of td) {//Colocar o listener em todo td.
  el.addEventListener('click',function(a) {
  block = a.target;//mostra qual elemento foi clicado
  if(mode==10){
    updatePlayerP('Escolha um modo de Jogo antes de começar a jogar')
    return
  }
  if(mode==0){
    markSquare(block, player)
  } else{
    paintSquare(block,player)
  }
  })
}

for (const el of btn_types) {//Colocar o listener em todo btn
  el.addEventListener('click',function(a) {
  block = a.target;//mostra qual elemento foi clicado
  if(block == btn_types[0]){
    setGameMode(0)
  }else{
    setGameMode(1)
  }
  })
}

function setGameMode(n) {
  eraseGame()
  updatePlayerP()
  mode = n
}
function markSquare(el,p) {
  if(p==1){
    el.style.color=playColorInput01.value;
    el.innerHTML='X'
    player=2
  }else{
    el.innerHTML='O'
    el.style.color=playColorINput02.value;
    player=1
  }
  updatePlayerP()
}
function paintSquare(el,p) {
  if(p==1){
    el.style.backgroundColor=playColorInput01.value;
    player=2
  }else{
    el.style.backgroundColor=playColorINput02.value;
    player=1
  }
  updatePlayerP()
}
function updatePlayerP(t=`É a vez do jogador ${player}`) {
  let turn = t;
  p.innerHTML=turn
  main.appendChild(p)
}
function eraseGame() {
  for (const el of td) {
    el.style.backgroundColor=
    el.innerHTML=''
  }
  player=1
  updatePlayerP()
}
function c(c) {
  console.log(c)
} 