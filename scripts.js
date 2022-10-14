const display = document.getElementById('display');
const start_button = document.getElementById('start_button');
const stop_button = document.getElementById('stop_button');
const wpm = document.getElementById('wpm');
const text = document.getElementById('input_text');

let current = 0;
let words;

display.innerHTML = 'Welcome'; //content_text.txt // insert content text
wpm.value = 300;

start_button.addEventListener('click', start_read);
stop_button.addEventListener('click', stop_read);

function start_read(e) {
    words = text.value.split(' ').filter(word=>{
        return word.length;
    });

    const timer = setInterval(()=>{
        display.textContent = words[current];
        current++;
        if (current > words.length) {
            clearInterval(timer);
            current = 0;
            display.innerHTML = '-- End --';
        }
    }, ((60/wpm.value)*1000))
}

function stop_read() {
    return true;
}