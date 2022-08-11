const d = document;
const input = d.getElementById('numero');
const paragraph = d.getElementById('p');
paragraph.setAttribute('class','pargraph');
const p = d.getElementById('numeros');
let numeros=[];
input.focus()

input.addEventListener('keypress',(key)=>{
    if (key.charCode==13 && input.value!=='') {
       add()
    }
})
function add() {//add os números nas arrays
     let number=Number(input.value);
        if (typeof(number)=='number') {
            numeros.push(number);
            input.value='';
            p.innerHTML+='<span ondblclick="exclude(this.innerText)" >'+number+'</span> - ';
        }
}
/*
------------------------------------------------------Analises
*/ 


function pot(n,por=2) {//multiplicar por
    let txt='<br> Números elevados à '+por+' potência: <br>';
    let multiplied=[]
   for (const i in n) {
      
      multiplied.push(Math.pow(n[i],por))
   }
  const number = multiplied.map((value,i)=>{
    return `Número ${n[i]} elevado a ${por} potência: ${value}.<br> `
   })
   return txt+ number+'.<br>'
}
function raiz(n,type=2) {
    const r=[]; 
    if(type===2){
    for (const i in n) {
      r.push( Math.sqrt(n[i]))
    }
    } else if (type===3){
        for (const i in n) {
            r.push( Math.cbrt(n[i]))
        }
    } else{
        let valor=1/type;
        for (const i in n) {
        r.push(Math.pow(n[i],valor))
        }
    }
    const raizes=r.map(function(el,i) {
        if (el-Math.round(el)===0) {
            return ` Raiz de ${n[i]} é: ${el}`
        }else{
            return ` Raiz de ${n[i]} é: ${el.toFixed(3)}`
        }

    })
    return raizes+'.<br><br>'
}
function diferenca(n) {//diferença entre os numeros
    const a =[];
    let txt='<br>A diferença entre os números são as seguintes: <br>';
    for (let i=0; i<n.length;i++) {
        
        if(i+1>n.length-1){
            break
        }
      a.push(n[i]-n[i+1]);  
    }
    const diferenca = a.map(function(el,i){
        return  '  '+n[i]+'<'+el+'>'+n[i+1]
    })
    return txt+diferenca+'.<br><br>'
}
function soma(n) {//Soma todos algaritimos
        let somados=0;
        for (let i = 0; i < n.length; i++) {
            somados =somados+ n[i];
            
            
        }
        return somados
        
}
function media(n,retorna) {//soma é media dos algartimos
    let media;
    let txt;
    let div = n.length;
    media=soma(n)/div;
    let mediaRound = Math.round(media)
    if (retorna===1) {
    return mediaRound;
    }else{
    
    if(media-Math.round(media) === 0){//ver se é inteiro
        txt=`A média dos algarismos é ${media}.<br><br> `
        }else{
    txt=`Média: Número arrendondado ${mediaRound}, decimal ${media}<br><br>`;
}
    return txt;
}
}
function eachNumber(n,type="multiplicação",round=0) {
   const verify =type;
   let conta=[];
   let resultados=[];
   if(round ===0){
  
   switch (verify) {
    case 'adição':
        for (let i = 0; i < n.length-1; i++) {
        resultados.push(n[i] + n[i+1]);
        conta.push(n[i]+'+'+n[i+1]);
    }
        break;
    case 'subtração':
        for (let i = 0; i < n.length-1; i++) {
            resultados.push(n[i] - n[i+1]);
            conta.push(n[i]+'-'+n[i+1]);
        }
        break;
    case 'multiplicação':
        for (let i = 0; i < n.length-1; i++) {
            resultados.push(n[i] * n[i+1]);
            conta.push(n[i]+'x'+n[i+1]);
        }
        break;
    case 'divisão':
        for (let i = 0; i < n.length-1; i++) {
            resultados.push(n[i] / n[i+1]);
            conta.push(n[i]+'/'+n[i+1]);
        }
        break;
    case 'resto':
        for (let i = 0; i < n.length-1; i++) {
            
            resultados.push(n[i] % n[i+1]);
            conta.push(n[i]+'%'+n[i+1]);
        }
}
   }else{// de trás para frente
    switch (verify) {
        case 'adição':
            for (let i = n.length; i >= 0; i--) {
            resultados.push(n[i] + n[i-1]);
            conta.push(n[i]+'+'+n[i-1]);
        }
            break;
        case 'subtração':
            for (let i = n.length; i < 0; i--) {
                resultados.push(n[i] - n[i-1]);
                conta.push(n[i]+'-'+n[i-1]);
            }
            break;
        case 'multiplicação':
            for (let i = n.length; i < 0; i--) {
                resultados.push(n[i] * n[i-1]);
                conta.push(n[i]+'x'+n[i-1]);
            }
            break;
        case 'divisão':
            for (let i = n.length; i < 0; i--) {
                resultados.push(n[i] / n[i-1]);
                conta.push(n[i]+'/'+n[i-1]);
            }
            break;
        case 'resto':
            for (let i = n.length; i < 0; i--) {
                if (n[i] % n[i-1]==NaN) {
                    conta.push(0);
                }
                resultados.push(n[i] % n[i-1]);
                conta.push(n[i]+'%'+n[i-1]);
            }
    }
   }
    
    let txt;
        for (let index = 0; index < resultados.length; index++) {
            if (index===0){
                txt=conta[index]+"="+resultados[index]+'; '
                continue;
            }
            txt+=conta[index]+"="+resultados[index]+'; '
        }
        return txt+'<br><br>';
}
function fatorial(n) {   
    let i =0;
    var txt;
    while (i<n.length) {
        let fat =1;
        for(let c=n[i]; c>1;c--){
        fat*=c;
    }
    let r= Math.round(fat);
    if(i===0){
        txt=`O fatorial de ${n[i]} é: ${r}.<br> `
    }
    txt+='O fatorial de '+n[i]+' é: ' +r+'.<br>';
    i++;
    }
    return txt+'<br>';
}
function fatoracao(n,retorna) {
    let results=[];
    n.forEach(e=> {
        let num =e;
        let fatores =[];
        fatores.push('Fatores de '+num+': 1');
        for (let index = 0;num!==1;index++) {  
            
             if(num%2=== 0){
            num = num/2;
            fatores.push(2)
            } else if (num%3=== 0) {
            num = num/3;
            fatores.push(3)
            } else if(num%5===0){
            num=num/5;
            fatores.push(5)
            }else if (num%7=== 0) {
            num = num/7;
            fatores.push(7)
            } else if (num%11=== 0) {
            num = num/11;
            fatores.push(11)
            } else if (num%13=== 0) {
            num = num/13;
            fatores.push(13)
            } else if (num%17=== 0) {
            num = num/17;
            fatores.push(17)
            } else if (num%19=== 0) {
            num = num/19;
            fatores.push(19)
            } else if (num%23=== 0) {
            num = num/23;
            fatores.push(23)
            } else if (num%29=== 0) {
            num = num/29;
            fatores.push(29)
            } else if (num%31=== 0) {
            num = num/31;
            fatores.push(31)
            } else if(num%num===0){
            fatores.push(num)
            num = num/num
            }
            
        
        }
        results.push(fatores);
    });
    let toShow;
   
        for (let i = 0; i < results.length; i++) {
            if(i===0){
                toShow= results[i]+'.<br>'
            } else{
                toShow +=  results[i]+'. <br> '
            }
            
        }
        
        

    if(retorna===0){
        return results
    }
    return toShow+'<br>'
}
function numberInformation(n) {
    let txt ="";
    for (let i = 0; i < n.length; i++) {
        const num= n[i];
        if(num===1){
            txt+=`O número 1 é primo e Impar.<br>`
        continue;   
        }
        if(num%2===0){
            //Par
            txt+=`O Número ${num} é par, `
        } else {
            //Ímpar
            txt+=`O Número ${num} é Impar, `
        }
        for (let i = 2; i <num; i++) {

           if (num%i===0){//arrumar
            txt+=`e não é primo. <br>`
            break;
           } else{
               //Primo
               txt+=`e é primo. <br>`
               break;
           }
        } 
}
    return txt+'<br>';
}
function divisors(n) {
    const numbers = fatoracao(n,0);
    console.log(numbers)
    let txt='';
    for (let conjunto = 0; conjunto < numbers.length; conjunto++) {
    let d = [1];
      for (let num = 1; num < numbers[conjunto].length; num++) {
           const a=numbers[conjunto][num];
            for (const i in d) {
                 let c =a*d[i];
                if(c!==i){
                    if (d.includes(c)){
                    } else{
                        d.push(c)
                    }
                }
            }
        }
        txt+=`Divisores de ${d[d.length-1]}: ${d};<br>`
    }
    
    
    return txt+'<br>'


}
function biggerandSmaller(n, retorna) {//crescente e decrescente
    const crescente = n.slice(0);
    
    let txt;
    if(retorna==0){
        return crescente.sort(function(a, b){return a-b})

    } else if(retorna==1){
        return crescente.reverse();
    }
}
function mediana(n) {
    const ordem= biggerandSmaller(n,0);
    const par= ordem.length%2;
    let txt='';
    if( par===0){
        txt='Sequência par.';
        const i =Math.ceil(ordem.length/2);
        const i2 =i-1;
        const meios =[i,i2]
        txt=`A mediana é ${media(meios,1)} `;
        
    } else{
        txt='sequência ímpar';
        const index =Math.floor(ordem.length/2);
        txt=`A mediana é ${ordem[index]}`;
    }
    return txt+'<br><br>';
}
function moda(n) {
    const ordem= biggerandSmaller(n,0);
    let modal=0;
    let valores=[];
    let txt;
    for (let i = 0; i < ordem.length; i++) {
        const med = ordem[i];
        if(ordem.includes(med,i+1)){
            modal++;
            valores.push(med);
        }
    }
    switch (modal) {
        case 1:
            txt="Modal, têm dua vezes o número: ";
            txt+=valores+'<br><br>'
            break;
        case 2:
            txt='Bimodal, têm duas vezes os números:<br>'
            txt+=valores+'<br><br>'
            break;
        case 0:
            txt='Não modal<br><br>'
            break;
        default:
            txt='trimodal ou mais'
            txt+=valores+'<br><br>'
            break;
    }
    return txt;
}
/*
FIIMIIMIMIMMIMIFMIFMIFMIFim 
*/

/* 
-----------------------------------------------------Fim de analises
*/
function analiseNumbers() {//ver que tipo de análise fazer
    const radios = d.getElementsByName('tipo');
    const inputPot= d.getElementById('pt');
    const inputRoot =d.getElementById('root');
    const selct=d.getElementById('conta');
    if(document.getElementById('pt').value<1||document.getElementById('root').value<1){
        window.alert('Confra os dados e tente novamente.')
        return;
    } else if(numeros.length===0){
        window.alert('Primeiro digite os números desejados.')
    }
    if (radios[0].checked) {
        console.log('radio :1')
        normal(inputRoot.value, inputPot.value);
    } else if (radios[1].checked) {
        console.log('radio :2')
        avancada(inputRoot.value, inputPot.value,selct.selectedIndex);
    } else{
        console.log('radio :3')
        completa(inputRoot.value, inputPot.value,selct.options[selct.selectedIndex].value);
    }

}

function normal(root,potencia) {//chama as funções básicas
    console.log('normal---')
    paragraph.innerHTML=pot(numeros,potencia);
    paragraph.innerHTML+=raiz(numeros,root);
    paragraph.innerHTML+=diferenca(numeros);
    paragraph.innerHTML+='soma dos algarismos: '+soma(numeros)+'.<br><br>';
    paragraph.innerHTML+=media(numeros);
    paragraph.innerHTML+=`Número em ordem crescente: ${biggerandSmaller(numeros,0)}. <br> Números em ordem decrescente: ${biggerandSmaller(numeros,1)}.<br><br>`;
}
function avancada(root,potencia,conta) {//Chamas as funções avançadas
    console.log('Avançada-----')
    paragraph.innerHTML=pot(numeros,potencia);
    paragraph.innerHTML+=raiz(numeros,root);
    paragraph.innerHTML+=diferenca(numeros);
    paragraph.innerHTML+='soma dos algarismos: '+soma(numeros)+'.<br><br>';
    paragraph.innerHTML+=media(numeros);
    paragraph.innerHTML+=eachNumber(numeros,conta);
    paragraph.innerHTML+=fatoracao(numeros);
    paragraph.innerHTML+=mediana(numeros);    
    paragraph.innerHTML+=moda(numeros);
    paragraph.innerHTML+=`Número em ordem crescente: ${biggerandSmaller(numeros,0)}. <br> Números em ordem decrescente: ${biggerandSmaller(numeros,1)}.<br><br>`;     
}

function completa(root,potencia,conta) {//Chama todas Funções
    console.log('completa--------')
    paragraph.innerHTML=pot(numeros,potencia);
    paragraph.innerHTML+=raiz(numeros,root);
    paragraph.innerHTML+=diferenca(numeros);
    paragraph.innerHTML+='soma dos algarismos: '+soma(numeros)+'.<br><br>';
    paragraph.innerHTML+=media(numeros);
    paragraph.innerHTML+=eachNumber(numeros,conta);
    paragraph.innerHTML+=fatoracao(numeros);  
    paragraph.innerHTML+=fatorial(numeros);
    paragraph.innerHTML+=divisors(numeros)
    paragraph.innerHTML+= numberInformation(numeros);
    paragraph.innerHTML+=moda(numeros);
    paragraph.innerHTML+=mediana(numeros);  
    console.log(conta)
    paragraph.innerHTML+=`Número em ordem crescente: ${biggerandSmaller(numeros,0)}. <br> Números em ordem decrescente: ${biggerandSmaller(numeros,1)}.<br><br>`;
}

function exclude(number) {
    const n = Number(number)
    const indice= numeros.indexOf(n);
    p.innerHTML=''
     numeros.splice(indice,1);
    for (const i in numeros) {
        p.innerHTML+='<span ondblclick="exclude(this.innerText)" >'+numeros[i]+'</span> - ';
    }
}

