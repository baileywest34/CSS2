const btnShow = document.querySelector('.show');
const divShow = document.querySelector('.box-display');
const btnHide = document.querySelector('.hide');

btnShow.addEventListener("click", boxShow);

function boxShow(){
  divShow.style.display = "block";
}

btnHide.addEventListener("click", boxHide);

function boxHide(){
  divShow.style.display ="none";
}
