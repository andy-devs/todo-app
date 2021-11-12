const inputCheck = document.querySelector('.todo__input-item__check');
inputCheck.addEventListener('click', (e) => {
	inputCheck.classList.toggle('_active');
});
const todoCheck = document.querySelectorAll('.todo__block-item');
for (let check of todoCheck) {
	check.addEventListener('click', (e) => {
		check.classList.toggle('_active');
	});
}
