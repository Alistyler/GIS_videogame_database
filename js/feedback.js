let form = document.getElementById('form');
let input = document.getElementById('input');

form.addEventListener('submit', submit);

function submit(event) {
    event.preventDefault() //prevents the form from autosubmittting

    console.log(input.value);
}

let userInput = localStorage.getItem("userInput");

function save(){
    localStorage.setItem('userInput', input.value);
    let suggestionContent = document.createElement("p");
    suggestionContent.innerHTML = input.value;
    document.getElementById('savedText').appendChild(suggestionContent);
}

function get() {
    userInput;
    document.getElementById('openedText').innerHTML = input.value;
}