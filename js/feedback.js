let input = document.createElement('input');
let username = document.createElement('p');

const feedback = [{
    key: username,
    value: input,
}]

localStorage.setItem('username', 'input');

console.log(JSON.parse(feedback));