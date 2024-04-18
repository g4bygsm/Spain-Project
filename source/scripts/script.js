const logregBox = document.querySelector('.regbox');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
registerLink.addEventListener('click', ()=>{
    logregBox.classList.add('active');
});
loginLink.addEventListener('click', ()=>{
    logregBox.classList.remove('active');
});
const pss1 = document.querySelector('#pss1');
const pss2 = document.querySelector('#pss2');
const errorText = document.querySelector('#errorText');

