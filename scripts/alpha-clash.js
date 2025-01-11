
// function play() {
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const PlaygroundSection = document.getElementById('playground');
//     PlaygroundSection.classList.remove('hidden');
// }

function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet' , alphabet);

    const CurrentAlphabetElement = document.getElementById('current-alphabet');
    CurrentAlphabetElement.innerText = alphabet;

    setBgColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('playground');
    continueGame()
}