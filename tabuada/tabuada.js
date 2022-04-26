const btn = document.createElement('button');
document.getElementById('x').addEventListener('click', function(){
    document.getElementById('n1').value='';
})
document.getElementById('x2').addEventListener('click', function(){
    document.getElementById('limite').value='';
})
function multiplicacao(){
    document.getElementsByClassName('res')[1].style.backgroundColor='wheat';
    var n = document.querySelector("#n1").value;
    var l = document.getElementById("limite").value;
    console.log(n+' '+ l);
    if(l=== ''&&n===''){
    n=0;
    l=0;
    } else if(l=== ''){
        l=0;
    } else if (n===''){
        n=0;

    }
    let b =document.getElementById("button");
    document.getElementById('res2').innerHTML+=`${n} X ${l} = ${n*l}<br>` 
    btn.addEventListener('click',function(){
        document.getElementById("res").innerHTML='';
        document.getElementById('res2').innerHTML='';
        b.innerText='Renderize a tabuada';
        btn.style='display:none;';
        document.getElementsByClassName('res')[1].style.backgroundColor='white';
    })   
}
function bgo(){
    let b =document.getElementById("button");
    b.style.backgroundColor='red';
    b.style.color='white';
}
function change(){
 document.getElementsByClassName('aum')[0].innerText='Fator um:';
 document.getElementsByClassName('aum')[1].innerText='Fator dois:';
 
}
function go(){
    document.getElementsByClassName('res')[0].style.backgroundColor='wheat';
    document.getElementsByClassName('res')[0].style.overflowY='scroll';
    btn.style='display:initial;';
    var b =document.getElementById("button");
    var t = document.getElementById("res");
    var n = document.querySelector("#n1").value;
    var l = document.getElementById("limite").value;
    b.innerText='Renderize a tabuada';
    if (n === '' || l === ''){
        b.innerText='Erro';
    }else{
    var numero = Number.parseInt(n);
    const limite = Number.parseInt(l);
    const z = document.querySelector('#zera');
    zerar(t);
    btn.innerText='Zerar';
    btn.addEventListener('click',function(){
        document.getElementById("res").innerHTML='';
        let z1= document.getElementById('res2').innerHTML='';
        b.innerText='Renderize a tabuada';
        btn.style='display:none; overflow-y: scroll;';
        let div1 = document.getElementsByClassName('res')[1].style.backgroundColor='white';
        document.getElementsByClassName('res')[0].style.backgroundColor='white';
        document.getElementsByClassName('res')[0].style.removeProperty('overflow-y')
    })
    btn.setAttribute('id','zerar')
    z.appendChild(btn);
    
   
    for(var i=0;i<=Number(limite);i++){
        t.innerHTML+=`${numero} x ${i} = ${numero*i}`;
        pulalinha(t)
        
    }
    
    
    b.style.backgroundColor='rgb(105, 42, 26, 0.4)';
    b.style.color='black';
}
}



function pulalinha(obj){
    obj.innerHTML+="<br>";
}
function zerar(obj){
    obj.innerHTML=" ";
}
function events(){
    document.getElementById("button").addEventListener('mousedown',bgo);
    document.getElementById("button").addEventListener('mouseup',go);
    document.getElementById('limite').addEventListener('keyup',function(t,dig){
        var tecla = t.keyCode|| t.which;
        if (tecla == 13){
            multiplicacao();
        }
    }) //usando enter como incializador de events
    }
window.addEventListener("load",events);

//Problemas: Mudar de refazerpara fazer se inputs forem diferentes de " ". 