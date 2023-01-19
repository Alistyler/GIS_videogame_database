let form = document.getElementById('form');
let input = document.getElementById('input');

form.addEventListener('submit', Submit);

function Submit(event) {
    event.preventDefault() //prevents the form from autosubmittting

    console.log(input.value);
}

let userInput = localStorage.getItem("userInput");

function save(){
    localStorage.setItem('userInput', input.value)
    document.getElementById('savedText').innerHTML = input.value;
}

function get() {
    userInput;
    document.getElementById('openendText').innerHTML = input.value;
}