const morebtn = document.querySelector('.Info .metadata .morebtn');
const title = document.querySelector('.Info .metadata .title');

morebtn.addEventListener('click', () => {
    morebtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});