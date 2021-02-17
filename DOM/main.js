const form = document.querySelector('.todo-form'); // single element
const input = document.querySelector('#todo-input');
const items = document.querySelectorAll('.item'); // multiple elements
const button = document.querySelector('.submitBtn');
const list = document.querySelector('.todo-list');
const p = document.querySelector('p');
const show = document.querySelector('.show');
console.log(p);

function paintTodo() {
  button.addEventListener('click', handleClick);
}

function handleClick(event) {
  event.preventDefault();
  const li = document.createElement('li');
  li.innerText = input.value;
  if (li.innerText === '') {
    p.style.display = 'block';
    setTimeout(() => (p.style.display = 'none'), 2000);
  }
  li.classList.add(show);
  list.appendChild(li);
  input.value = '';
}

function init() {
  paintTodo();
}

init();
