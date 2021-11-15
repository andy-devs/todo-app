var todoList = document.querySelectorAll('.todo__block-item');
for (let todo of todoList) {
	todo.draggable = true;
	todo.classList.add('draggable');
}

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
	for (let b of panelButtonsMobile) {
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

const panelButtonsMobile = document.querySelectorAll('.panel-button-mobile');

const panelButtonAllMobile = document.querySelector(
	'.todo__info-panel__all-mobile'
);
const panelButtonActiveMobile = document.querySelector(
	'.todo__info-panel__active-mobile'
);
const panelButtonCompletedMobile = document.querySelector(
	'.todo__info-panel__completed-mobile'
);

panelButtonAllMobile.addEventListener('click', (e) => {
	resetButtons();
	panelButtonAllMobile.classList.add('_active');
	for (let todo of todoList) {
		todo.style.display = 'flex';
	}
});
panelButtonActiveMobile.addEventListener('click', (e) => {
	resetButtons();
	panelButtonActiveMobile.classList.add('_active');
	for (let todo of todoList) {
		if (todo.classList.contains('_active')) todo.style.display = 'none';
		else {
			todo.style.display = 'flex';
		}
	}
});
panelButtonCompletedMobile.addEventListener('click', (e) => {
	resetButtons();
	panelButtonCompletedMobile.classList.add('_active');
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

const todoForm = document.querySelector('.todo__input-block');
const todoInput = document.querySelector('.todo__input-item');

todoForm.addEventListener('submit', (e) => {
	e.preventDefault();
	let todoText = todoInput.value;
	todoInput.value = '';

	let todo__blockItem = document.createElement('div');
	todo__blockItem.className = 'todo__block-item draggable';

	let todo__blockItem__check = document.createElement('div');
	todo__blockItem__check.className = 'todo__block-item__check';

	let todo__blockItem__checkWrap = document.createElement('div');
	todo__blockItem__checkWrap.className =
		'todo__block-item__check-circle__wrap';

	let todo__blockItem__checkCircle = document.createElement('div');
	todo__blockItem__checkCircle.className = 'todo__block-item__check-circle';

	let todo__blockItem__checkCircle__check = document.createElement('div');
	todo__blockItem__checkCircle__check.className =
		'todo__block-item__check-circle__check';

	let todoImg = document.createElement('img');
	todoImg.src = './images/icon-check.svg';

	let todo__blockItem__textWrapper = document.createElement('div');
	todo__blockItem__textWrapper.className = 'todo__block-item__text-wrapper';

	let todo__blockItem__text = document.createElement('p');
	todo__blockItem__text.className = 'todo__block-item__text';
	todo__blockItem__text.innerHTML = todoText;

	todo__blockItem__textWrapper.appendChild(todo__blockItem__text);

	todo__blockItem__checkCircle__check.appendChild(todoImg);
	todo__blockItem__checkCircle.appendChild(
		todo__blockItem__checkCircle__check
	);
	todo__blockItem__checkWrap.appendChild(todo__blockItem__checkCircle);
	todo__blockItem__check.appendChild(todo__blockItem__checkWrap);

	todo__blockItem.appendChild(todo__blockItem__check);
	todo__blockItem.appendChild(todo__blockItem__textWrapper);

	todo__blockItem.addEventListener('click', (e) => {
		todo__blockItem.classList.toggle('_active');
		updateTodo();
	});
	todo__blockItem.draggable = true;

	const todoBlock = document.querySelector('.todo__block');
	todoBlock.appendChild(todo__blockItem);

	todoList = document.querySelectorAll('.todo__block-item');
	draggables = document.querySelectorAll('.draggable');
	updateTodo();
	draggables.forEach((draggable) => {
		draggable.addEventListener('dragstart', (e) => {
			draggable.classList.add('dragging');
		});
		draggable.addEventListener('dragend', (e) => {
			draggable.classList.remove('dragging');
		});
	});
});

// Drag and Drop

var draggables = document.querySelectorAll('.draggable');
var container = document.querySelector('.container');

draggables.forEach((draggable) => {
	draggable.addEventListener('dragstart', (e) => {
		draggable.classList.add('dragging');
	});
	draggable.addEventListener('dragend', (e) => {
		draggable.classList.remove('dragging');
	});
});

container.addEventListener('dragover', (e) => {
	e.preventDefault();
	const afterElement = getDragAfterElement(container, e.clientY);
	const draggable = document.querySelector('.dragging');
	if (afterElement == null) {
		container.appendChild(draggable);
	} else {
		container.insertBefore(draggable, afterElement);
	}
});

function getDragAfterElement(container, y) {
	const draggableElements = [
		...container.querySelectorAll('.draggable:not(.dragging)'),
	];
	return draggableElements.reduce(
		(closest, child) => {
			const box = child.getBoundingClientRect();
			const offset = y - box.top - box.height / 2;
			if (offset < 0 && offset > closest.offset) {
				return { offset: offset, element: child };
			} else {
				return closest;
			}
		},
		{
			offset: Number.NEGATIVE_INFINITY,
		}
	).element;
}

const colorButton = document.querySelector(
	'.todo__input-item__check-circle__check'
);

colorButton.addEventListener('click', (e) => {
	const bgPicture = document.querySelector('');
});
