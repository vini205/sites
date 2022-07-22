let pointsTable =document.createElement('table');//Tabela de pontos
let pointsTd = document.createElement('td');
let pointsTd2 = document.createElement('td');
let pointsTr =document.createElement('tr');
let td = document.getElementsByClassName('tdG');
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
let jogadas = {
  player1:0,
  player2:0
}
var turnCount=0;

const td_id = [];

let i=0; // contador do loop abaixo
for (const el of td) {//Colocar o listener e id em todo td.
  el.setAttribute('id',i)
  td_id.push(el)
  i++;
  el.addEventListener('click',function(a) {
  block = a.target;//mostra qual elemento foi clicado
  if(mode==10){
    updatePlayerP('Escolha um modo de Jogo antes de começar a jogar')
    return
  }
  if(block.innerHTML!=='' && turnCount>2){
    return
  }else if(mode==0){
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
    el.style.color=playColorInput01.value;
    el.innerHTML='X'
    player=2
  }else{
    el.style.backgroundColor=playColorINput02.value;
    el.style.color=playColorINput02.value;
    el.innerHTML='O'
    player=1
  }
  updatePlayerP()
}
function updatePlayerP(t=`É a vez do jogador ${player}`) {
  let turn = t;
  p.innerHTML=turn;
  main.appendChild(p);
  turnCount++;
  c(turnCount)
  if(turnCount>=5){
    isOver(td_id);
  }
}
function eraseGame() {
  for (const el of td) {
    el.style.backgroundColor=tdColor.value;
    el.innerHTML='';
  }
  player=1
  turnCount=0;
  pointsTable.style.display='none'
}
function c(c) {
  console.log(c)
} 
function win(who,i) {
  let txt;
  if(who=='X'){
    txt= 'O jogador número 1 Ganhou!! \u{1F3C6}  '
    p.innerHTML=txt
    main.appendChild(p)
    jogadas.player1++
    for (const el of i) {
      el.style.backgroundColor= playColorINput02.value
    }
  }else{
    txt= 'O jogador número 2 Ganhou!! \u{1F3C6}  '
    p.innerHTML=txt
    main.appendChild(p)
    jogadas.player2++
    for (const el of i) {
      el.style.backgroundColor= playColorInput01.value
    }
  }

  pointsTd.setAttribute('class', 'tdPoints')
  pointsTable.setAttribute('id','tablePoints')
  pointsTr.setAttribute('class','trPoints')
  
  pointsTd2.innerHTML='Player 2'
  pointsTd.innerHTML='Player 1'
  pointsTd2.setAttribute('class','tdPoints')

  pointsTr.append(pointsTd,pointsTd2)
  let pointsTr2= pointsTr.cloneNode(true)
  pointsTr2.firstChild.innerHTML=jogadas.player1
  pointsTr2.lastChild.innerHTML=jogadas.player2

  pointsTable.append(pointsTr,pointsTr2)
  main.appendChild(pointsTable)

  pointsTable.style.display='block'

  //pointsTable.style.display='block'
}
function isOver(ele) {
  c('Over 5 !')
  for (const passo of [1,3,4]) {
    if(passo==3){//vertical
      for(let index=0;index<=2;index++){
        console.log(index,passo)
      if(ele[index].innerHTML==ele[index+passo].innerHTML && ele[index].innerHTML !='' && ele[index].innerHTML== ele[index+passo*2].innerHTML){
        c('Won')
       win(ele[index].innerHTML,[ele[index],ele[index+passo],ele[index+passo*2]])
        break;
      }
    }
  } else if(passo==1){//horizontal
    for (let index = 0; index <= 6; index+=3) {
      console.log(index,passo)
      if(ele[index].innerHTML==ele[index+passo].innerHTML && ele[index].innerHTML !='' && ele[index].innerHTML== ele[passo*2+index].innerHTML){
        c('Won')
        win( ele[index].innerHTML,[ele[index],ele[index+passo],ele[index+passo*2]])
        break;
      }
    }
  }else if(passo==4){//Diagonal
    for(let index=0;index<=2;index+=2){
      console.log(index,passo)
      if(index==2){
        if(ele[index].innerHTML==ele[passo].innerHTML && ele[index].innerHTML !='' && ele[index].innerHTML== ele[passo+index].innerHTML){
          c('Won')
        win( ele[index].innerHTML,[ele[index],ele[passo],ele[index+passo]])
        } 
      }else if(ele[index].innerHTML==ele[passo].innerHTML && ele[index].innerHTML !='' && ele[index].innerHTML== ele[passo*2].innerHTML){
        c('Won')
        win( ele[index].innerHTML,[ele[index],ele[passo],ele[passo*2]])
      }
    } 
  }
  }
}
