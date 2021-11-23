var bgGray = document.querySelectorAll('.bg-gray');
var bgText = document.querySelectorAll('.bg-text');
var bgWave = document.querySelectorAll('.bg-wave');
var bgNone = document.querySelectorAll('.none');

setTimeout(() => {
    bgGray.forEach(elem => elem.classList.remove('bg-gray'));
    bgText.forEach(elem => elem.classList.remove('bg-text'));
    bgWave.forEach(elem => elem.classList.remove('bg-wave'));
    bgNone.forEach(elem => elem.classList.remove('none'));
}, 3000)
