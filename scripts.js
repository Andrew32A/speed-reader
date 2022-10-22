// gathering html ids and placing them into variables for easier access
const display = document.getElementById('display');
const start_button = document.getElementById('start_button');
const stop_button = document.getElementById('stop_button');
const wpm = document.getElementById('wpm');
const text = document.getElementById('input_text');

// variables for the main loop
let current = 0;
let words = null;
let timer = null;

// variables for countdown timer
let countdown = null;
let countdown_num = 3;

// placeholders for page refresh
display.innerHTML = 'Welcome'; //content_text.txt // insert content text
wpm.value = 300;

// event listeners for stop and start buttons
start_button.addEventListener('click', countdown_timer);
stop_button.addEventListener('click', stop_read);

// function for countdown timer
function countdown_timer() {
    start_button.disabled = true;
    countdown = setInterval(()=>{
        display.textContent = countdown_num;
        countdown_num--;
        if (countdown_num <= -1) {
            display.textContent = '-- Go! --';
            clearInterval(countdown);
            countdown_num = 3;
            start_read()
        }
    }, 1000)
}

// main loop
function start_read() {
    words = text.value.split(' ').filter(word=>{
        return word.length;
    });

    timer = setInterval(()=>{
        display.textContent = words[current];
        current++;
        if (current > words.length) {
            start_button.disabled = false;
            clearInterval(timer);
            current = 0;
            display.innerHTML = '-- End --';
        }
    }, ((60/wpm.value)*1000))
}

// stops main loop
function stop_read() {
    start_button.disabled = false;
    clearInterval(timer);
    clearInterval(countdown);
    countdown_num = 3;
    current = 0;
}

