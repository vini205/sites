function c(a) {console.log(a)}
var d= document;
const people =d.createElement('div');
people.classList.add('people');



const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon"
  ];
  
  function validFileType(file) {
    return fileTypes.includes(file.type);
  }

const personDiv = d.createElement('div');//colocar os inputs aqui
personDiv.style.textAlign='center'


let tTeE = d.createElement('p');//cria titulo e span
tTeE.classList.add('title')
tTeE.innerHTML='Pessoas ';

let spAn = d.createElement('span');
spAn.id='plusPeople';
spAn.innerHTML='+';
spAn.addEventListener('mouseenter',put);




let divOrg = d.createElement('div');//container dos Inputs
divOrg.classList.add('inputs');



tTeE.appendChild(spAn);
d.querySelector('.block2').appendChild(tTeE);

let textoPeople = hHiN('Crie suas pessoas','txtPeople','textoNormal',0,'p');
let nome=new hHiN('Nome','name','inputCharacter','text',0);//crias os input
let moradia=new hHiN('Onde Vive','home','inputCharacter','text',0);
let birth=new hHiN('Data de Nascimento','birth','inputCharacter','date',0);
let occupation=new hHiN('Ocupação','occupation','inputCharacter','text',0);
let idade=new hHiN('Idade','age','inputCharacter','text',0);
let forte=new hHiN('Pontos fortes','stronger','inputCharacter','text',0);
let sonhos = new hHiN('Sonhos','sonho','inputCharacter','text',0);
let fraquezas=new hHiN('Fraquezas','weakness','inputCharacter','text',0);
let gostos=new hHiN('Gostos','like','inputCharacter','text',0);
let dislike=new hHiN('Desgostos','deslike','inputCharacter','text',0);
let complemento = new hHiN('Complemento','comple','inputCharacter','text',0)

let textoLabel = hHiN('Gênero:','generoClasses','textoNormal',0,'p');

let labelGenderM = hHiN('Masculino','labelGender','labelGender',0,'label');
labelGenderM.for='gender';
let genderM=new hHiN(null,'gender','radio','radio',0);
genderM.name='gender';

let labelGenderF = hHiN('Feminino','labelGender','labelGender',0,'label');
labelGenderF.for='gender';
let genderF=new hHiN(null,'gender','radio','radio',0);
genderF.name='gender';

let labelCor = hHiN('Cor:','labelCor','labelCor',0,'label')
labelCor.for='cor'

let cor=new hHiN('Cor','cor','cor','color',0);
cor.name='cor'

let labelFoto = hHiN('Foto:','labelfoto','labelFoto',0,'label');
labelFoto.for='foto'

let foto=new hHiN('foto','foto','foto','file',0);
foto.accept='.png,.jpg';
foto.name='foto'
foto.placeholder='foto';


cor.value="#b77c5a"
c(cor.value)

let btnClasses = d.createElement('button');
btnClasses.id='botao';
btnClasses.setAttribute('class','input')
btnClasses.textContent='Enviar';
btnClasses.style.textAlign='center'
btnClasses.addEventListener('click', addPerson)

function hHiN(txt,id,clas,type,element) {
    if (element!==0){//not input
        let ele = d.createElement(element);
        ele.textContent=txt;
        ele.classList.add(clas)
        ele.id=id;
        personDiv.appendChild(ele);

        return ele
    }else{
      let input = d.createElement('input');
      input.placeholder=txt;
      input.title=txt;
      input.id=id;
      input.classList.add(clas);
      input.type=type;
      personDiv.appendChild(input);
      return input
  }
}

d.querySelector('.block2').appendChild(people)
people.appendChild(personDiv)


function put( ){
  people.style.display='block'
  people.appendChild(divOrg);
  people.appendChild(btnClasses);
  spAn.innerText='-'
  spAn.removeEventListener('click',put)
  spAn.addEventListener('click',out);
}  
function out(){
    people.style.display='none'
    spAn.innerHTML='+';
    spAn.removeEventListener('click',out)
    spAn.addEventListener('click',put)
}
class Person {
    constructor(name,live,birth,occupation,idade,forte,sonho,fraco,like,dislike,complemento,sexo){
        this.name=name;
        this.live=live;
        this.birth=birth;
        this.occupation=occupation;
        this.idade= idade;
        this.forte=forte;
        this.sonho=sonho;
        this.fraco=fraco;
        this.like=like
        this.dislike=dislike;
        this.complemento=complemento;
        this.sexo=sexo;
    }
    foto(){
        return 'Sem foto'
    }
}
function addPerson() {
    const toPut =[];
    const inputs =d.querySelector('.inputs').children;
    for(let index =1;index< inputs.length;index++){
      if(inputs[index].className=='cor'){
          toPut.push(inputs[index].value)
          c(inputs[index])
          continue;
      } 
      if(inputs[index].className=='inputCharacter'){
          if(inputs[index].value==''){
            toPut.push('Sem informações')
          continue;
          }
        toPut.push( inputs[index].value)
      }else if(inputs[index].className=='labelGender'){
        const radios = d.getElementsByName('gender');
        if(radios[0].checked){
            toPut.push("Homem")
        }else if(radios[1].checked){
            toPut.push('Mulher')
        }else{
            toPut.push('Sem informações')
          continue;
        }
      }
      //COLOCAR FOTO SOMEDAY
  }
    const newPerson = new Person();
    newPerson.name=toPut[0];
    newPerson.live=toPut[1]
    newPerson.birth=toPut[2]
    newPerson.occupation=toPut[3];
    newPerson.idade=toPut[4];
    newPerson.forte=toPut[5];
    newPerson.sonho=toPut[6]
    newPerson.fraco=toPut[7];
    newPerson.like=toPut[8];
    newPerson.dislike=toPut[9];
    newPerson.complemento=toPut[10];
    newPerson.sexo=toPut[11];
    var ea ='a';
    if(newPerson.sexo==='Homem'){
       ea='e'; 
    }
    var txt =`Nome: ${newPerson.name}<br>
    Onde Mora: ${newPerson.live}<br>
    Data de nascimento: ${newPerson.birth}<br>
    Ocupação: ${newPerson.occupation}<br>
    Idade: ${newPerson.idade}<br>
    Pontos Fortes: ${newPerson.forte}<br>
    Sonhos: ${newPerson.sonho}<br>
    Fraquezas: ${newPerson.fraco}<br>
    Do que el${ea} gosta: ${newPerson.like} <br>
    Do que el${ea} não gosta: ${newPerson.dislike}<br> 
    Complemento: ${newPerson.complemento}<br>
    Gênero: ${newPerson.sexo}`

    const divCor = d.createElement('div');//para deixar opaco

    const person =d.createElement('div');
    person.id='personBox';
    c(cor.value)
    divCor.style.backgroundColor=cor.value;
    divCor.appendChild(person);
    person.style.color='black';
    person.innerHTML=txt;
    person.title='Clique 2 vezes para apagar'
    people.appendChild(divCor)
    person.addEventListener('dblclick',function(){
    person.parentNode.removeChild(person);
    })
}
