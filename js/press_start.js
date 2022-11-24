let start = document.getElementById('start');
let text = document.getElementById('description');
let title = document.getElementsByClassName('title');

start.addEventListener('click', changeText);

function changeText(event) {
    text.hidden = false;
    title[0].removeChild(title[0].firstElementChild);
    title[0].removeChild(start);
    console.log(start);
}