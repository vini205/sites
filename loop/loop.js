var status =true;


function looping() {
    var inicio = document.querySelector("#inicio").value;
    var fim = document.querySelector('#fim').value;
    var passo = document.querySelector('#passo').value;
    var div = document.getElementById('display');
    div.innerHTML=" ";
    if(passo.length===0 || fim.length == 0 || inicio.length == 0){
        let doc =document.getElementById("sp").className="span";
        document.getElementById("sp").innerHTML="Veja se os dados estão certos";
    } else{
        let fimN= Number.parseInt(fim);
        let inicioN= Number.parseInt(inicio);
        let passoN= Number.parseInt(passo);
        if(passoN <= 0){
            passoN=1;
        }
    //if(fimN-inicioN > passoN){
    if(inicioN<= fimN){
        while(inicioN <= fimN){
            div.innerHTML+=` ${inicioN} \u{1F449}`;
            inicioN += passoN;        
        }
        
    } else {
        while(inicioN >= fimN ){
            div.innerHTML+=` ${inicioN} \u{1F449}`;
            inicioN -= passoN;
        }        
    }
    div.innerHTML+=`  \u{1F3C1}`;
}
}   


if (status == 'true') {
    document.getElementById("status").innerHTML = "Pagina completa aproveite!!";
} else {
    document.getElementById("status").innerHTML = "Pagina em reforma venha outro dia!!";
} 



//document.querySelector(".sub").addEventListener("click", looping);