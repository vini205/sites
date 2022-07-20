let fundo = document.getElementById('fundo');
let tdColor = document.getElementById('tdColor')
let backgroud = document.getElementById('background')
let txtSecundario = document.getElementById('textoSecundario');
let txtPrimario = document.getElementById('textoPrimario');
let backOfAside = document.getElementById('backOfAside');
let  btn = document.getElementById('saveChanges');
let configVec = document.getElementById('config');
configVec.addEventListener('click', show)
function show() {
  document.getElementsByClassName('config')[0].style.display='flex'
  configVec.removeEventListener('click',show)
  configVec.addEventListener('click',closeAgain)
}
function closeAgain() {
  document.getElementsByClassName('config')[0].style.display='none'
  configVec.addEventListener('click',show)
}
fundo.value='#006400';
tdColor.value = '#006400'
backgroud.value ='#407440'
txtPrimario.value='#ffffff'
txtSecundario.value='#000000'
backOfAside.value ='#ffffff'
btn.addEventListener('click', ()=>{
  changeVar('--backOfMain',fundo.value)
  changeVar('--backOftable',tdColor.value)
  changeVar('--background',backgroud.value)
  changeVar('--textOfAside',txtSecundario.value)
  changeVar('--textColor',txtPrimario.value)
  changeVar('--backOfAside',backOfAside.value)
})



function changeVar(variable,color) {
  document.documentElement.style.setProperty(variable, color); 
  //var sheet = document.styleSheets[0];
  //sheet.insertRule(`:root{${variable}:${color}}`); 
  //sheet.
}