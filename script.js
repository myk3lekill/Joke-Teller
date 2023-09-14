//DOM
const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

const apiKey = '9da87e94f4d444f9abff69277c1dcc9e'; //This apikey is vulnerable we should protect it

//Disable/Enable Button 'Tell Me Ajoke' (function that resolve the bug to listen full joke per click)
function toggleButton() {
    button.disabled = !button.disabled
}

//Passing Joke to VoiceRSS API
function tellMe(joke) {
    console.log('tellMe function', joke)
    VoiceRSS.speech({
                key: apiKey,
                src: joke,//pass joke instead of 'Hello World'
                hl: 'en-us',
                v: 'Linda',
                r: 0, 
                c: 'mp3',
                f: '44khz_16bit_stereo',
                ssml: false
         });
};

//Get jokes from JokeAPI using fetch().then() method or async function with await variables and fetch method
async function getJokes() {
    let joke = '';
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single'
try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    //if statement is needed to manage two part jokes
    if (data.setup) {
        joke = `${data.setup} ... ${data.delivery}`;
    } else {
        joke = data.joke;
    }
    tellMe(joke); //pass the joke to tellMe function that activate the VocieAPI
    toggleButton(); //disable button 'Tell me a joke' until speach ended when getJokes() function has lunched
} catch (error) {
    console.log(error)
}
}

//Event Listeners: 
//1. on click the button 'Tell me a Joke' lunch getJokes() function
button.addEventListener('click', getJokes);

//2. on ended joke lunch toggleButton() function to re-activate the button
audioElement.addEventListener('ended', toggleButton)