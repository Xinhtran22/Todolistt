const submitForm = document.querySelector('.add');
const addButton = document.querySelector('.add-todo');
const todoList = document.querySelector('.todos');
const list = document.querySelectorAll('.todos li'); 
let listLength = list.length;


//Thêm todolist
submitForm.addEventListener('submit', addTodos);
addButton.addEventListener('click', addTodos);

function deleteTodos(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
}
//Xóa todolist
todoList.addEventListener('click', deleteTodos);