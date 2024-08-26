const second = document.querySelector('.second')
const minute = document.querySelector('.minute')
const hour = document.querySelector('.hour')
const body = document.querySelector('body')
const modeSwitch = document.querySelector('.mode-switch')

if(localStorage.getItem('mode') == 'dark'){
    body.classList.add('dark')
}

modeSwitch.addEventListener('click', () => {

    body.classList.toggle('dark')
    const isDark = body.classList.contains('dark');
    modeSwitch.textContent = isDark ? 'Light mode' : 'Dark mode'
    localStorage.setItem('mode', isDark ? 'dark' : 'light')

    // modeSwitch.textContent = 
})

const getDate = () => {
    const date = new Date();
    const secondCount = (date.getSeconds() / 60) * 360;
    const minuteCount = (date.getMinutes() / 60) * 360;
    const hourCount = (date.getHours() / 12) * 360;
    second.style.transform = `rotate(${secondCount}deg)`
    minute.style.transform = `rotate(${minuteCount}deg)`
    hour.style.transform = `rotate(${hourCount}deg)`
    requestAnimationFrame(getDate)
}
requestAnimationFrame(getDate)