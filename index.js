const converBtn = document.getElementById('convert-btn');
const themeChangeBtn = document.getElementById('theme-change-btn');
let currentTheme = 'light';

themeChangeBtn.addEventListener('click', function() {
    themeChange(currentTheme);
});

converBtn.addEventListener('click', function() {
    const inputValue = document.getElementById('input-field').value;
    if (errorsCheck(inputValue)) {
        meetersFeet(inputValue);
        littersGallons(inputValue);
        kilosPounds(inputValue);
    } else {
        alert('You have to input a number');
    }
});

const errorsCheck = (value) => (value.length === 0 || /\D/g.test(value)) ? false : true;

function meetersFeet(value) {
    const metersEl = document.getElementById('meters');
    const feetEl = document.getElementById('feet');   
    metersEl.textContent = `${value} meters = ${(value * 3.281).toFixed(3)} feet`;
    feetEl.textContent = `${value} feet = ${(value * 0.348).toFixed(3)} meters`;
}

function littersGallons(value) {
    const litersEl = document.getElementById('liters');
    const gallonsEl = document.getElementById('gallons');   
    litersEl.textContent = `${value} liters = ${(value * 0.264).toFixed(3)} gallons`;
    gallonsEl.textContent = `${value} gallons = ${(value * 3.7854).toFixed(3)} liters`;
}

function kilosPounds(value) {
    const kilosEl = document.getElementById('kilos');
    const poundsEl = document.getElementById('pounds');   
    kilosEl.textContent = `${value} kilos = ${(value * 2.204).toFixed(3)} pounds`;
    poundsEl.textContent = `${value} pounds = ${(value * 0.454).toFixed(3)} kilos`;
}

function themeChange(theme) {
    const root = document.querySelector(':root');
    if (theme === 'light') {
        currentTheme = 'dark';
        document.getElementById('dark-on').classList.add('hide');
        document.getElementById('light-on').classList.remove('hide');
        root.style.setProperty('--body-bg-color', '#1f2937');
        root.style.setProperty('--main-color', '#a0354e');
        root.style.setProperty('--secondary-color', '#11001c');
        root.style.setProperty('--gradient-first-color', 'rgba(39, 38, 64, 1)');
        root.style.setProperty('--gradient-second-color', 'rgba(0, 0, 0, 1)');
        root.style.setProperty('--shadow-first-color', 'rgba(0, 0, 0, .5 )');
        root.style.setProperty('--shadow-second-color', 'rgba(0, 0, 0, 1)');
    } else {
        currentTheme = 'light';
        document.getElementById('light-on').classList.add('hide');
        document.getElementById('dark-on').classList.remove('hide');
        root.style.setProperty('--body-bg-color', '#f8f9fa');
        root.style.setProperty('--main-color', '#284b63');
        root.style.setProperty('--secondary-color', '#ffffff');
        root.style.setProperty('--gradient-first-color', 'rgba(191, 219, 247, 1)');
        root.style.setProperty('--gradient-second-color', 'rgba(255, 255, 255, 1)');
        root.style.setProperty('--shadow-first-color', 'rgba(40, 75, 99, .5)');
        root.style.setProperty('--shadow-second-color', 'rgba(40, 75, 99, 1)');
    }
}