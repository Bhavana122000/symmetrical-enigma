
//function to add element
function getItem(){
    let inputItem = document.getElementById("item");
    let item = inputItem.value;
    const ul = document.getElementById("todoListItems"); 
    const li = document.createElement('li'); 
    const doneBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');
    // li.textContent = item;
    doneBtn.textContent = "Done";
    doneBtn.classList.add("completedBtn");
    doneBtn.classList.add("todoBtn");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("removeBtn");
    deleteBtn.classList.add("todoBtn");
    
    const todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container"); 
    const todoText = document.createElement("span"); 
    todoContainer.textContent = item;

    doneBtn.addEventListener("mouseover", function(){
        doneBtn.style.backgroundColor = "#45a049";
    });

    doneBtn.addEventListener("mouseout", function(){
        doneBtn.style.backgroundColor = "#4caf50";
    });

    // strike the todo once completed
   doneBtn.addEventListener("click", function(){
        if(li.style.textDecoration === "line-through"){
            li.style.textDecoration = "none"; 
        }else{
            li.style.textDecoration = "line-through"; 
            li.style.color = "#aeb8af";
        }
   });

   //remove the todo once deleted 
   deleteBtn.addEventListener("click", function(){
        ul.removeChild(li);
   });

    todoContainer.appendChild(todoText);
    todoText.appendChild(doneBtn);
    todoText.appendChild(deleteBtn);
    li.appendChild(todoContainer);
    ul.appendChild(li);
    inputItem.value = '';
};

//add element on enter key press 
var inputItem = document.getElementById("item"); 
inputItem.addEventListener("keypress", function(event){
    if(event.key == "Enter"){
        getItem();
    }
});


