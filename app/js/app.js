// ------------------ Adding New Todos To My List. -------------------

let creator = document.querySelector('.creator-selector');

creator.addEventListener('click', () =>{
    let createCont = creator.parentElement;
    // console.log(createCont);
    let creatorVal = createCont.querySelector('.todo-creator-text').value;
    newTodoItem(creatorVal, createCont);
})

function newTodoItem(creatorVal, createCont){
    if(createCont.querySelector('.todo-creator-text').value == ""){
        alert("You have no todo item written, please write down something.")
        return;
    }

    let itemContainer = document.querySelector('.item-container');

    let itemRow = document.createElement('div');
    itemRow.classList.add('todo-item');
    itemRow.innerHTML = `
        <div class="todo-content">
          <div class="selector">
            <img src="./images/icon-check.svg" alt="" class="check">
          </div>
          <div class="todo-item-text">${creatorVal}</div>
        </div>

        <img src="./images/icon-cross.svg" alt="" class="todo-item-close">`
        // console.log(itemRow);

        itemRow.querySelector('.todo-item-close').addEventListener('click', () => {
            itemRow.querySelector('.todo-item-close').parentElement.remove();
            counter();  
        })

        itemRow.querySelectorAll('.selector').forEach(function(select){
            select.addEventListener('click', () => {
                select.classList.toggle('show-select');
                select.parentElement.parentElement.classList.toggle('is-completed');
            })
        })

    itemContainer.append(itemRow);

    createCont.querySelector('.todo-creator-text').value = "";  
    counter();
}


// ------------------ Removing Item From Todo List. -------------------

let close = document.querySelectorAll('.todo-item-close');

close.forEach(function(closeI){
    closeI.addEventListener('click', function(){
        closeI.parentElement.remove();
    })
    counter();
})


// -------------------- Funtion Todo Item Counter ------------------
function counter(){
    let todoItem = document.querySelectorAll('.todo-item');
    let number = document.querySelector('.number');
    number.innerText = todoItem.length;
}
counter();


// --------------------- Selected Item ----------------------- 

document.querySelectorAll('.selector').forEach(function(select){
    select.addEventListener('click', () => {
        select.classList.toggle('show-select');
        select.parentElement.parentElement.classList.toggle('is-completed');
    })
})


// --------------------- According To Categories ------------------------

// ------ Completed --------
document.querySelector('.completed').addEventListener('click', () => {
    document.querySelector('.completed').classList.add('color');
    document.querySelector('.all').classList.remove('color');
    document.querySelector('.active').classList.remove('color');
    // console.log('wow');
    let tItem = document.querySelectorAll('.todo-item');
    for(let i = 0; i < tItem.length; i++){
        if(tItem[i].classList.contains('is-completed')){
            tItem[i].classList.remove('category-complete');
        } else{
            tItem[i].classList.add('category-complete');
        }
    }
    
})

// ------ All --------
document.querySelector('.all').addEventListener('click', () => {
    document.querySelector('.completed').classList.remove('color');
    document.querySelector('.all').classList.add('color');
    document.querySelector('.active').classList.remove('color');
    // console.log('wow');
    let tItem = document.querySelectorAll('.todo-item');
    for(let i = 0; i < tItem.length; i++){
        tItem[i].classList.add('is-all');
        if(tItem[i].classList.contains('is-all')){
            tItem[i].classList.remove('category-complete');
        } else{
            tItem[i].classList.add('category-complete');
        }
    }
    
})

// ------ Active --------
document.querySelector('.active').addEventListener('click', () => {
    document.querySelector('.completed').classList.remove('color');
    document.querySelector('.all').classList.remove('color');
    document.querySelector('.active').classList.add('color');
    // console.log('wow');
    let tItem = document.querySelectorAll('.todo-item');
    for(let i = 0; i < tItem.length; i++){
        tItem[i].classList.add('is-active')
        if(tItem[i].classList.contains('is-completed')){
            tItem[i].classList.remove('is-active');
        }

        if(tItem[i].classList.contains('is-active')){
            tItem[i].classList.remove('category-complete');
        } else{
            tItem[i].classList.add('category-complete');
        }
    }
    
})


// --------------------- Clear All Completed Todos --------------------------

document.querySelector('.complete').addEventListener('click', () => {
    let item = document.querySelectorAll('.todo-item')
    for(let i = 0; i < item.length; i++){
        if(item[i].classList.contains('is-completed')){
            item[i].remove();
        }
    }
})


// ------------------------- Light And Dark Mode -----------------------

let sun = document.querySelector('.sun');
let moon = document.querySelector('.moon');

sun.addEventListener('click', () => {
    document.body.classList.add('light-mode');
    sun.style.display = "none";
    moon.style.display = "block";
})

moon.addEventListener('click', () => {
    document.body.classList.remove('light-mode');
    moon.style.display = "none";
    sun.style.display = "block";
})


// -------------------- Drag and Drop ------------------------

let wrapper = document.querySelector('.wrapper');

new Sortable(wrapper, {
    animation: 350
})