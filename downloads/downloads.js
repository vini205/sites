function colocar(item,texto,subOuAdd) {
    if(subOuAdd===0){
        item.innerHTML=texto
    }else{
        item.innerHTML+=texto
    }
}
function limpar(item) {
    item.innerHTML='';
}

function addText(){
    colocar(span,'baixar apenas clique nos links, o nome o arquivo aparecera logo a frente do link. <br>',0)
    span.style.textDecoration='none'
    colocar(span,'Ler menos')
    span.addEventListener('click',tiraText)
}
function  tiraText() {
    limpar(span)
    span.style.textDecoration='underline';
    colocar(span,'Ler mais');
    span.removeEventListener('click',tiraText)
    span.addEventListener('click',addText)
    }
const span = document.getElementsByClassName('lerMais')[0];
span.addEventListener('click',addText);
 



