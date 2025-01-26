const btnRegister = document.querySelector('.btn-register')
const btnLogin = document.querySelector('.btn-login')
const Register = document.querySelector('.js-register')
const Login = document.querySelector('.js-login')
const btnBackRe = document.querySelector('.js-btn-back-re')
const btnBackLo = document.querySelector('.js-btn-back-lo')
const modalLogin = document.querySelector('.js-modal-login')
const modalRegister = document.querySelector('.js-modal-register')


btnLogin.addEventListener('click', function () {
    modalLogin.classList.add('open');
    modalRegister.classList.remove('open');
})


btnRegister.addEventListener('click', function () {
    modalRegister.classList.add('open');
    modalLogin.classList.remove('open');
})


Login.addEventListener('click', function () {
    modalLogin.classList.add('open');
})

Register.addEventListener('click', function () {
    modalRegister.classList.add('open');
})

btnBackRe.addEventListener('click',function(){
    modalRegister.classList.remove('open');
})


btnBackLo.addEventListener('click',function(){
    modalLogin.classList.remove('open');
})