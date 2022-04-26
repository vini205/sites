const dc =document;
const btn=dc.getElementById('verify'); 
const form =dc.querySelector('form');
btn.addEventListener('click', (event)=>{
    event.preventDefault();
    const input =[... dc.querySelectorAll('.input-block')] 
    input.forEach(el=>{
        if (el.value==='')form.classList.add('validade-error');
    })
    const formError =dc.querySelector('.validade-error');
    if(formError) {
        formError.addEventListener('animationend',(event)=>{
           formError.classList.remove('validade-error')
        })
    }else{
        form.classList.add("form-hide");
    }

    
})
form.addEventListener('animationstart', event=>{
    if(event.animationName==='down') document.querySelector('body').style.overflow='hidden'
})
form.addEventListener('animationend',(event)=>{
    if(event.animationName==='down')form.style.display='none'
    document.querySelector('body').style.overflow='none'
    
})
/*quadrados back*/
const quadrados = dc.querySelector('.squares');
for (let i = 0; i<22;i++) {
    const randow =function (n1,n2) {return Math.round(Math.random()*(n1-n2)+n2)}
    const li = document.createElement('li');
    const tmn= randow(79,15);
    const pos=randow(96,1);
    li.style.width=`${tmn}px`
    li.style.height=`${tmn}px`
    li.style.bottom=`-${tmn}px`
    li.style.left=`${pos}%`
    li.style.animationDuration=randow(72,11)+'s'
    li.style.animationDelay=randow(10,1)+'s';
    li.style.animationTimingFunction=`cubic-bezier(${randow()},${randow()},${randow()},${randow()})`
    quadrados.appendChild(li);
    
}