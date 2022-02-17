const btn = document.querySelector('.taskBtn');
const input = document.querySelector('.inputTask');

btn.addEventListener('click', init);
input.addEventListener('keyup', event => {
    let enter = event.key;
    if (enter === 'Enter') init();
});

//create a task and insert it to the list
function init() {
    const taskList = document.querySelector('.task-list');
    const listEl = document.createElement('li');
    const divTask = document.createElement('div');
    const span = document.createElement('span');
    const btnWrap = document.createElement('div');
    const deleteButton = document.createElement('button');
    const iDel = document.createElement('i');
    const iUp = document.createElement('i');
    const iDown = document.createElement('i');
    const upButton = document.createElement('button');
    const downButton = document.createElement('button');

    taskList.classList.add('task-list');
    listEl.classList.add('list-element');
    divTask.classList.add('div-task');
    span.classList.add('task');
    btnWrap.classList.add('btn-wrap');
    deleteButton.classList.add('delete-btn');
    iDel.classList.add('fa-solid');
    iDel.classList.add('fa-circle-minus');
    upButton.classList.add('up-btn');
    iUp.classList.add('fa-solid');
    iUp.classList.add('fa-circle-arrow-up');
    downButton.classList.add('down-btn');
    iDown.classList.add('fa-solid');
    iDown.classList.add('fa-circle-arrow-down');

    //TODO
    // console.log(input.value.length);


    if (input.value.length !== 0) {
        span.textContent = input.value.charAt(0).toUpperCase() + input.value.slice(1);

        deleteButton.appendChild(iDel);
        upButton.appendChild(iUp);
        downButton.appendChild(iDown);
    
        btnWrap.appendChild(deleteButton);
        btnWrap.appendChild(upButton);
        btnWrap.appendChild(downButton);
    
        divTask.appendChild(span);
        divTask.appendChild(btnWrap);
    
        listEl.appendChild(divTask);

        if (taskList.length === 0) {
            taskList.appendChild(listEl);
        } else {
            taskList.insertBefore(listEl, taskList.firstElementChild);
        }
    }

    //functionality responsible for deleting currently selected task
    deleteButton.addEventListener('click', () => {
        currentTaskNumber = listEl.firstElementChild.textContent[0];
        listEl.remove();
    })

    const parent = listEl.parentNode;

    //functionality responsible for moving upwards selected task
    upButton.addEventListener('click', () => {
        const prev = listEl.previousElementSibling;
        let oldChild = parent.removeChild(listEl);
        parent.insertBefore( oldChild, prev );
    })

    //functionality responsible for moving downwards selected task
    downButton.addEventListener('click', () => {
        const next = listEl.nextElementSibling;
        let oldChild = parent.removeChild(listEl);
        insertAfter( oldChild, next );
    })

    input.value = '';
}

//opposite of insertBefore function
function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}
