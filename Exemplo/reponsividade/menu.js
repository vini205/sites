const d = document;
let show = true;

const menuSection = d.querySelector(".menu-section");
const menuToggle= d.querySelector('menu-toggle');


menuSection.addEventListener('click',()=>{

     d.body.style.overflow=show ? 'hidden':'initial';//if ternario=>if show for true 'hidden', else 'initial'
     menuSection.classList.toggle('on', show)//toggle(), se existe essa class ele coloca, se não existe ele coloca
     show=!show;                             // ele so coloca se for true e tira se for false. Então se for true ele só c
})         
