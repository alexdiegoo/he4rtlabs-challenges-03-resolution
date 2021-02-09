const buttonGoRegister = document.querySelector('.goRegister');
const buttonGoLogin = document.querySelector('.goLogin');
const buttonFormRegister = document.querySelector('.rg-button');
const buttonFormLogin = document.querySelector('.lg-button');
const container = document.querySelector('.container');


buttonGoRegister.addEventListener('click', goRegister)

buttonGoLogin.addEventListener('click', goLogin)
buttonFormRegister.addEventListener('click', (e) => {
  document.querySelector('#register').querySelectorAll('input').forEach((input) => {
    input.value = ''
  })
  goLogin();
  e.preventDefault();
})

buttonFormLogin.addEventListener('click', (e) => {
  document.querySelector('.hello').style.animationPlayState = 'running';
  setTimeout(() => {
    document.querySelector('.hello-text').style.animation = 'opacity .2s forwards';
  }, 1000)

  e.preventDefault();
})


function goLogin() {
  container.style.animationPlayState = 'running';

  setTimeout(() => {
    document.querySelector('#register').classList.remove('active');
    document.querySelector('#login').classList.add('active');
    container.classList.remove('on')
  }, 500)
}

function goRegister() {
  container.classList.add('on')

  document.querySelector('#login').classList.remove('active');
  document.querySelector('#register').classList.add('active');

  setTimeout(() => {
    container.style.animationPlayState = 'paused';
  }, 500)
}