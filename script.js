let quadradinhos = document.querySelectorAll("div");

function mudarCor(event){
    event.target.style.backgroundColor = "red";
}

for(let quadradinho of quadradinhos){
    quadradinho.onclick = mudarCor;
}
