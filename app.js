primaryBrightBlue = 'hsl(220, 98%, 61%)';
gradientBg1 = 'hsl(192, 100%, 67%)';
gradientBg2 = 'hsl(280, 87%, 65%)';

lightVlGray = 'hsl(0, 0%, 98%)';
lightVlGrayishBlue = 'hsl(236, 33%, 92%)';
lightLGrayishBlue = 'hsl(233, 11%, 84%)';
lightDGrayishBlue = 'hsl(236, 9%, 61%)';
lightVdGrayishBlue = 'hsl(235, 19%, 35%)';

darkVdBlue = 'hsl(235, 21%, 11%)';
darkVdDesBlue = 'hsl(235, 24%, 19%)';
darkLGrayishBlue = 'hsl(234, 39%, 85%)';
darkLGrayishBlueHover = 'hsl(236, 33%, 92%)';
darkDGrayishBlue = 'hsl(234, 11%, 52%)';
darkVdGrayishBlue1 = 'hsl(233, 14%, 35%)';
darkVdGrayishBlue2 = 'hsl(237, 14%, 26%)';

let theme = 'dark';

var todoList = document.querySelectorAll('.todo__block-item');
for (let todo of todoList) {
	todo.draggable = true;
	todo.classList.add('draggable');
}

const todoCount = document.querySelector('.todo__info-left__count');

function updateTodo() {
	let count = 0;
	todoList = document.querySelectorAll('.todo__block-item');
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
let todoDelete = document.querySelectorAll('.todo__block-item__delete');
for (let todoDel of todoDelete) {
	todoDel.addEventListener('click', (e) => {
		e.target.parentNode.parentNode.remove();
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
	let todo__blockTtem__delete = document.createElement('img');
	todo__blockTtem__delete.src = './images/icon-cross.svg';
	todo__blockTtem__delete.className = 'todo__block-item__delete';

	let todo__blockItem__text = document.createElement('p');
	todo__blockItem__text.className = 'todo__block-item__text';
	todo__blockItem__text.innerHTML = todoText;

	todo__blockItem__textWrapper.appendChild(todo__blockItem__text);
	todo__blockItem__textWrapper.appendChild(todo__blockTtem__delete);

	todo__blockItem__checkCircle__check.appendChild(todoImg);
	todo__blockItem__checkCircle.appendChild(
		todo__blockItem__checkCircle__check
	);
	todo__blockItem__checkWrap.appendChild(todo__blockItem__checkCircle);
	todo__blockItem__check.appendChild(todo__blockItem__checkWrap);

	todo__blockItem.appendChild(todo__blockItem__check);
	todo__blockItem.appendChild(todo__blockItem__textWrapper);

	if (theme === 'light') {
		todo__blockItem.style.backgroundColor = lightVlGrayishBlue;
		todo__blockItem.style.color = lightDGrayishBlue;

		todo__blockItem__check.style.backgroundColor = lightVlGray;

		todo__blockItem__textWrapper.style.backgroundColor = lightVlGray;
		todo__blockItem__textWrapper.style.color = lightVdGrayishBlue;

		todo__blockItem__checkWrap.style.backgroundColor = lightLGrayishBlue;

		todo__blockItem__checkCircle.style.backgroundColor = lightVlGray;
	}

	todo__blockItem.addEventListener('click', (e) => {
		todo__blockItem.classList.toggle('_active');
		updateTodo();
	});
	todo__blockItem.draggable = true;
	todo__blockTtem__delete.addEventListener('click', (e) => {
		e.target.parentNode.parentNode.remove();
		updateTodo();
	});

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

const colorButton = document.querySelector('.todo__head-icon');
const themeIcon = document.querySelector('.todo__head-icon__item');
const bgPicture = document.querySelector('.image-wrapper');
const bgColor = document.querySelector('body');

const inputCheck = document.querySelector('.todo__input-item__check');
const inputCheckWrapper = document.querySelector(
	'.todo__input-item__check-circle__wrap'
);
const inputCheckWrapperCircle = document.querySelector(
	'.todo__input-item__check-circle'
);
const inputBody = document.querySelector('.todo__input-item');

const todoBlock = document.querySelector('.todo__block');

const infoBlock = document.querySelector('.todo__info');
const infoPanelMobile = document.querySelector('.todo__info-panel-mobile');

const infoLeft = document.querySelector('.todo__info-left');
const infoPanelButtons = document.querySelectorAll('.panel-button');
const infoPanelButtonsMobile = document.querySelectorAll(
	'.panel-button-mobile'
);
const infoClear = document.querySelector('.todo__info-clear');

const dragAndDrap = document.querySelector('.todo__drag-and-drop__text');

colorButton.addEventListener('click', (e) => {
	let todoItems = document.querySelectorAll('.todo__block-item');
	let todoChecks = document.querySelectorAll('.todo__block-item__check');
	let todoCheckWrappers = document.querySelectorAll(
		'.todo__block-item__check-circle__wrap'
	);
	let todoCheckWrapperCircles = document.querySelectorAll(
		'.todo__block-item__check-circle'
	);
	let todoTexts = document.querySelectorAll(
		'.todo__block-item__text-wrapper'
	);

	if (theme === 'dark') {
		theme = 'light';
		themeIcon.src = './images/icon-moon.svg';

		bgColor.style.backgroundColor = lightVlGrayishBlue;
		bgPicture.style.backgroundImage = `url('./images/bg-desktop-light.jpg')`;

		inputCheck.style.backgroundColor = lightVlGray;
		inputBody.style.backgroundColor = lightVlGray;
		inputBody.style.color = lightDGrayishBlue;
		inputCheckWrapper.style.backgroundColor = lightLGrayishBlue;
		inputCheckWrapperCircle.style.backgroundColor = lightVlGray;
		todoBlock.style.backgroundColor = lightVlGray;
		for (let todoItem of todoItems) {
			todoItem.style.backgroundColor = lightVlGray;
			todoItem.style.color = lightDGrayishBlue;
		}
		for (let todoCheck of todoChecks) {
			todoCheck.style.backgroundColor = lightVlGray;
		}
		for (let todoText of todoTexts) {
			todoText.style.backgroundColor = lightVlGray;
			todoText.style.color = lightVdGrayishBlue;
		}
		for (let todoCheckWrapper of todoCheckWrappers) {
			todoCheckWrapper.style.backgroundColor = lightLGrayishBlue;
		}
		for (let todoCheckWrapperCircle of todoCheckWrapperCircles) {
			todoCheckWrapperCircle.style.backgroundColor = lightVlGray;
		}
		infoBlock.style.backgroundColor = lightVlGray;
		infoPanelMobile.style.backgroundColor = lightVlGray;
		infoLeft.style.color = lightDGrayishBlue;
		for (let infoPanelButton of infoPanelButtons) {
			infoPanelButton.style.color = lightDGrayishBlue;
			infoPanelButton.classList.replace(
				'panel-button-dark',
				'panel-button-light'
			);
		}
		for (let infoPanelButtonMobile of infoPanelButtonsMobile) {
			infoPanelButtonMobile.style.color = lightDGrayishBlue;
			infoPanelButtonMobile.classList.replace(
				'panel-button-dark',
				'panel-button-light'
			);
		}
		infoClear.style.color = lightDGrayishBlue;

		dragAndDrap.style.color = lightVdGrayishBlue;
	} else if (theme === 'light') {
		theme = 'dark';
		themeIcon.src = './images/icon-sun.svg';

		bgColor.style.backgroundColor = darkVdBlue;
		bgPicture.style.backgroundImage = `url('./images/bg-desktop-dark.jpg')`;

		inputCheck.style.backgroundColor = darkVdDesBlue;
		inputBody.style.backgroundColor = darkVdDesBlue;
		inputBody.style.color = darkLGrayishBlue;

		inputCheckWrapper.style.backgroundColor = darkVdGrayishBlue1;
		inputCheckWrapperCircle.style.backgroundColor = darkVdDesBlue;
		todoBlock.style.backgroundColor = darkVdDesBlue;
		for (let todoItem of todoItems) {
			todoItem.style.backgroundColor = darkVdDesBlue;
			todoItem.style.color = darkVdDesBlue;
		}
		for (let todoCheck of todoChecks) {
			todoCheck.style.backgroundColor = darkVdDesBlue;
		}
		for (let todoText of todoTexts) {
			todoText.style.backgroundColor = darkVdDesBlue;
			todoText.style.color = darkLGrayishBlue;
		}
		for (let todoCheckWrapper of todoCheckWrappers) {
			todoCheckWrapper.style.backgroundColor = darkVdGrayishBlue1;
		}
		for (let todoCheckWrapperCircle of todoCheckWrapperCircles) {
			todoCheckWrapperCircle.style.backgroundColor = darkVdDesBlue;
		}
		infoBlock.style.backgroundColor = darkVdDesBlue;
		infoPanelMobile.style.backgroundColor = darkVdDesBlue;
		infoLeft.style.color = darkDGrayishBlue;
		for (let infoPanelButton of infoPanelButtons) {
			infoPanelButton.style.color = darkDGrayishBlue;
			infoPanelButton.classList.replace(
				'panel-button-light',
				'panel-button-dark'
			);
		}
		for (let infoPanelButtonMobile of infoPanelButtonsMobile) {
			infoPanelButtonMobile.style.color = darkDGrayishBlue;
			infoPanelButtonMobile.classList.replace(
				'panel-button-light',
				'panel-button-dark'
			);
		}
		infoClear.style.color = darkDGrayishBlue;

		dragAndDrap.style.color = darkDGrayishBlue;
	}
});
