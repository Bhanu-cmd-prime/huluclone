const model=document.querySelector('.model');
const loginBtn=document.querySelector('.login-in');
const closeBtn=document.querySelector('.close');
loginBtn.addEventListener('click',openmodel);
function openmodel(){
  model.style.display='block';
}
closeBtn.addEventListener('click',closemodel);
function closemodel(){
  model.style.display='none';
}
window.addEventListener('click',outsideClick);
function outsideClick(e){
  if(e.target == model){
    closemodel();
  }
}
