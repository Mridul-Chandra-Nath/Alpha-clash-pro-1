


function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function addElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorInKey(elementId){
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorInKey(elementId){
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getARandomeNumber() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('');

    const randomNumber = Math.random() * 25;
    const index=Math.round(randomNumber);

    // console.log(index)

    const alphabet=alphabets[index];
    // console.log(index, alphabet)
    return alphabet;

}