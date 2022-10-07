const sayac = document.querySelector("#sayac");
const btnBasla = document.querySelector("#btn-basla");

let sayi = -1;
let intervalID;
btnBasla.addEventListener("click", function(){
      if(sayi==-1){
      intervalID=setInterval(function(){
      sayi +=1;  
      sayac.textContent =sayi;
},1000);
}else
{
  clearInterval(intervalID);
}
});