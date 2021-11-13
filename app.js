const inputCheck = document.querySelector('.todo__input-item__check');
inputCheck.addEventListener('click', (e) => {
	inputCheck.classList.toggle('_active');
});

const todoList = document.querySelectorAll('.todo__block-item');

const todoCount = document.querySelector('.todo__info-left__count');

function updateTodo() {
	let count = 0;
	for (let todo of todoList) {
		if (todo.classList.contains('_active')) {
			count += 1;
		}
	}
	todoCount.innerText = `${todoList.length - count}`;
}
updateTodo();
for (let todo of todoList) {
	todo.addEventListener('click', (e) => {
		todo.classList.toggle('_active');
		updateTodo();
	});
}

const panelButtons = document.querySelectorAll('.panel-button');
panelButtons.length = 3;

const panelButtonAll = document.querySelector('.todo__info-panel__all');
const panelButtonActive = document.querySelector('.todo__info-panel__active');
const panelButtonCompleted = document.querySelector(
	'.todo__info-panel__completed'
);

function resetButtons() {
	for (let b of panelButtons) {
		b.classList.remove('_active');
	}
}

panelButtonAll.addEventListener('click', (e) => {
	resetButtons();
	panelButtonAll.classList.add('_active');
	for (let todo of todoList) {
		todo.style.display = 'flex';
	}
});
panelButtonActive.addEventListener('click', (e) => {
	resetButtons();
	panelButtonActive.classList.add('_active');
	for (let todo of todoList) {
		if (todo.classList.contains('_active')) todo.style.display = 'none';
		else {
			todo.style.display = 'flex';
		}
	}
});
panelButtonCompleted.addEventListener('click', (e) => {
	resetButtons();
	panelButtonCompleted.classList.add('_active');
	for (let todo of todoList) {
		if (!todo.classList.contains('_active')) todo.style.display = 'none';
		else {
			todo.style.display = 'flex';
		}
	}
});

const clearButton = document.querySelector('.todo__info-clear');

clearButton.addEventListener('click', (e) => {
	for (let todo of todoList) {
		if (todo.classList.contains('_active'))
			todo.parentNode.removeChild(todo);
	}
});
