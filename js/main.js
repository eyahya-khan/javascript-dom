var add_todo_btn = document.getElementById('add-btn'); //assign button
var todo_input = document.getElementById('todo-input'); //assign input text
var list = document.getElementById('list'); //assign div list
var listFärdiga = document.getElementById('listFärdiga'); //assign div list

add_todo_btn.addEventListener('click', function () {
    var todo = todo_input.value; //take input...
        if (todo === '') {
        alert("You must write something!");
      }
    
    
    var item = document.createElement('DIV'); //new div
    item.classList.add('item'); //<div class="item"></div>

    var item_text = document.createElement('DIV');
    item_text.classList.add('item-text'); //<div class="item-text"></div>
    item_text.textContent = todo; //assign value of div i,e todo_input.value
    //output: <div class="item-text">todo</div>

   
    
    var edit_input = document.createElement('INPUT');
    edit_input.classList.add('edit-input');
    edit_input.classList.add('hide');
    edit_input.name = 'edit-input'; // input name="edit-input"
    edit_input.type = 'text'; // input type="text"
    edit_input.value = todo; //assign value of text input i,e todo_input.value
    //output: <input class="edit-input hide" name="edit_input" type="text" value=todo>

    //add li
    var node = document.createElement("li");//create li
    node.classList.add('li-btn');
    node.appendChild(edit_input); //merge li with input value
    list.appendChild(node); //merge with parent div


    var edit_input_btn = document.createElement('BUTTON');
    edit_input_btn.classList.add('action-btn');
    edit_input_btn.classList.add('update-btn');
    edit_input_btn.classList.add('hide');
    edit_input_btn.type = 'button';
    edit_input_btn.textContent = 'Ändra';
    //output: <button class="action-btn update-btn hide" type="button">UPDATE</button>
    edit_input_btn.addEventListener('click', function () {
        item_text.textContent = edit_input.value;
        edit_input.disabled = true;
        edit_input.value = '';
        
    });



    var action_btns = document.createElement('DIV');
    action_btns.classList.add('action-btns');

    var edit_btn = document.createElement('BUTTON');
    edit_btn.classList.add('action-btn');
    edit_btn.classList.add('edit-btn');
    edit_btn.textContent = 'Färdig';
    //output: <button class="action-btn edit-btn">EDIT</button>

    edit_btn.addEventListener('click', function () {

        edit_btn.remove(); 
        listFärdiga.appendChild(node);
        listFärdiga.appendChild(item_text);
        listFärdiga.appendChild(edit_input);
        listFärdiga.appendChild(edit_input_btn);
        listFärdiga.appendChild(remove_btn);
    });




    var remove_btn = document.createElement('BUTTON');
    remove_btn.classList.add('action-btn');
    remove_btn.classList.add('remove-btn');
    remove_btn.textContent = 'Radera';

    remove_btn.addEventListener('click', function () {
      item.parentNode.removeChild(item); //remove all item from div
      list.removeChild(node);//remove li
        
    });

    
//merge all items
    action_btns.appendChild(node);
    action_btns.appendChild(item_text);
    action_btns.appendChild(edit_input);
    action_btns.appendChild(edit_input_btn);
    action_btns.appendChild(edit_btn);
    action_btns.appendChild(remove_btn);

    
    item.appendChild(action_btns);
    list.appendChild(item);
   

    todo_input.value = '';//empty input text
});