
    document.getElementsByClassName('flex')[0].style.height= window.innerHeight+'px';
    document.getElementById('plus').addEventListener('mouseover',appear);
    function appear( ){
        document.getElementsByClassName('loteria')[0].style.display='block'
        document.getElementById('plus').innerText='-'
        document.getElementById('plus').style.fontWeight='bolder'
        document.getElementById('plus').removeEventListener('mouseover',appear);
        document.getElementById('plus').addEventListener('click', back)
    }  
    function back(){
        document.getElementsByClassName('loteria')[0].style.display='none'
        document.getElementById('plus').removeEventListener('click',back);
        document.getElementById('plus').addEventListener('mouseover',appear);
        document.getElementById('plus').style.fontWeight='normal'
        document.getElementById('plus').innerText='+'
    }
    const pop = document.getElementById('pop');
    var numbers=[];
    var userNumber =[];
    const input = document.querySelector('#num');
    var lotery = document.getElementById('numerosDisp');
    function criarTabela(){//Cria tabela com o número escolhido
        lotery.innerHTML='';//Reinicia os valores
        document.querySelector('#verific').innerHTML='';
        userNumber=[];
        document.getElementById('res2').innerHTML='';
        document.getElementById('res').innerHTML='';

        document.getElementById('paragraph').innerText='Os numeros disponíveis na loteria são:';
        document.querySelector('#num').style.display='block';
        document.getElementById('numerosDisp').style.display='block';
        document.getElementsByClassName('btn')[0].style.display='block';
        document.getElementsByTagName('label')[1].innerHTML='Escolha seus numeros';
        const intp =document.getElementById('intp1').value;
        var i= Number(intp);
        for( var c=1;c<=i; c++){//Cria os números da loteria
    
            numbers.push(c)
        
            lotery.innerHTML+=`<span class='n'> ${c} <span>`;
        }
       numbers
    
        input.addEventListener('keypress', function(key){ //Guarda numeros do usuario
        if(key.charCode===13 && Number(input.value) <= i && Number(input.value)>0 && input.value !== '' && userNumber.length<6){
            console.log("Têm número repitido: "+userNumber.includes(Number(input.value)))
            if( userNumber.includes(Number(input.value))){
                pop.setAttribute('class','popup')
                pop.innerHTML='Número repetido.'
            }else{
            userNumber.push(Number(input.value));
            document.querySelector('#verific').innerHTML='Seus números são '+userNumber; 
            }
            
            input.value=''; //zera input
        }
        if(input.value > c ){
            pop.setAttribute('class','popup')
            pop.innerHTML=`Digite apenas numeros menores que ${i}; correspondete ao número dísponivei na loteria`;
       
            }else {
                document.querySelector('#pop').removeAttribute('class','popup');
                document.querySelector('#pop').innerHTML='';
            }
        })
}
    
    function action(){////Confere os resultados
    var div =document.getElementById('res');
    const numerosDaLoteria= document.querySelector('#intp1').value;
    var numAle = Math.ceil(Math.random()*numerosDaLoteria );
        if(userNumber.includes(numAle)){
    document.getElementById('res2').innerHTML='Você ganhou!!!!'
    }else{
    document.getElementById('res2').innerHTML='Você errou!!!!'
    }
    div.innerHTML ="seus números: "+userNumber;
    div.innerHTML +="<br> Numero sortiado: "+numAle;
    
    }
    const btn= document.querySelector('.btn');
    btn.addEventListener('click',action )
   
 function zerar(obj) {
     obj.innerHTML='';
     document.getElementsByClassName('title')[0].style.width=total+'px';
 }
var divLoteria =document.getElementsByClassName('loteria')[0];
var style = getComputedStyle(divLoteria);
var width = parseInt(style.width);
var padding = parseInt(style.padding);
var border = parseInt(style.border)
var total =width ;
   