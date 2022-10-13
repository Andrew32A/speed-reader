const display = document.getElementById('display')
const start_button = document.getElementById('start_button')
const stop_button = document.getElementById('stop_button')
const wpm = document.getElementById('wpm')
const text = document.getElementById('input_text')

let words
let current = 0

display.innerHTML = 'test' //content_text.txt // insert content text
wpm.value = 300

start_button.addEventListener('click', start_read)
stop_button.addEventListener('click', stop_read)
wpm.addEventListener('input', wpm_update)

function start_read(e) {
    words = text.value.split(' ').filter(word=>{
        return word.length;
    });

    const timer = setInterval(()=>{
        display.textContent = words[current];
        current++;
        if (current > words.length){
            clearInterval(timer)
        }
    }, ((60/wpm.value)*1000))
}

function stop_read(e) {
    display.innerHTML = "test stop"
    clearInterval(timer)
}

function wpm_update(e) {
    display.innerHTML = "test stop"
    return wpm
}

























// -------------------------------------------------------------------------------------------
/**
 * Start the interval
//  */
//  var run = function () {

// 	// Run the reader
// 	interval = setInterval(function () {

// 		// If there are no more words, stop
// 		if (!words[current]) {
// 			end();
// 			return;
// 		}

// 		// Show the word
// 		reader.textContent = words[current];

// 		// Go to the next word
// 		current++;

// 	}, speed);

// };





// /**
//  * Start the reader
//  * @param  {Event} event The event object
//  */
// var start = function (event) {

// 	// Only run on #start button
// 	if (event.target.id !== 'start') return;

// 	// If there's no text to read, do nothing
// 	if (!text.value.length) return;

// 	// Get the words
// 	words = text.value.split(' ').filter(function (word) {
// 		return word.length;
// 	});

// 	// Get the words-per-minute
// 	speed = (60 / parseInt(wpm.value, 10)) * 1000;

// 	// Set the current item to the first word
// 	current = 0;

// 	// Run the reader
// 	run();

// };







// function showItems() {
//     for (let i = 0; i < document.length; i += 1) {
//         display.innerHTML = `Tip: ${tip} Total: ${total}`
//     }

//     console.log(`Your total in cart is: $${getTotal()}`)
// }

// showItems()

// // variables assigned to doc's element
// const widthInput = document.getElementById('widthInput')
// const widthDisplay = document.getElementById('widthDisplay')

// const heightInput = document.getElementById('heightInput')
// const heightDisplay = document.getElementById('heightDisplay')

// const colorInput = document.getElementById('colorInput')
// const colorDisplay = document.getElementById('colorDisplay')

// const blob = document.getElementById('colorBlob')

// // placeholders for page refresh
// widthInput.value = 100
// widthDisplay.innerHTML = '100px'

// heightInput.value = 100
// heightDisplay.innerHTML = '100px'

// colorInput.value = '#000000'
// colorDisplay.innerHTML = '#000000'

// // placeholder color blob on bottom right
// blob.style.width = `${widthInput.value}px`
// blob.style.height = `${heightInput.value}px`
// blob.style.backgroundColor = `${colorInput.value}`

// // event listeners
// widthInput.addEventListener('input', update)
// heightInput.addEventListener('input', update)
// colorInput.addEventListener('input', update)

// // update to inputs
// function update(e) {
//     widthDisplay.innerHTML = `${widthInput.value}px`
//     heightDisplay.innerHTML = `${heightInput.value}px`
//     colorDisplay.innerHTML = `${colorInput.value}`

//     blob.style.width = `${widthInput.value}px`
//     blob.style.height = `${heightInput.value}px`
//     blob.style.backgroundColor = `${colorInput.value}`
// }



// notes ----------------------
// add speed slider
// 300 wpm default
