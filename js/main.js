let add_todo_btn = document.getElementById('add-btn'); //assign button
let todo_input = document.getElementById('todo-input'); //assign input text
let list = document.getElementById('list'); //assign div list
let listFärdiga = document.getElementById('listFärdiga'); //assign div list

add_todo_btn.addEventListener('click', function () {
    let todo = todo_input.value; //take input...
    if (todo === '') {
        alert("You must write what you want to add!");
    } else {

        let gora_btn = document.createElement('DIV');
        gora_btn.classList.add('gora-btn');
//        gora_btn.textContent = 'Att Göra';

        let fardig_btn = document.createElement('DIV');
        fardig_btn.classList.add('fardig-btn');

        //add li
        let li = document.createElement("LI"); //create li
        li.classList.add('li-btn');



        let item_text = document.createElement('INPUT');
        item_text.classList.add('item-text'); //<div class="item-text"></div>
        item_text.value = todo; //assign value of div i,e todo_input.value
        //output: <div class="item-text">todo</div>


        let edit_input = document.createElement('INPUT');
        edit_input.classList.add('edit-input');
        edit_input.name = 'edit-input'; // input name="edit-input"
        edit_input.type = 'text'; // input type="text"
        edit_input.value = todo; //assign value of text input i,e todo_input.value
        //output: <input class="edit-input hide" name="edit_input" type="text" value=todo>


        let ändra_btn = document.createElement('BUTTON');
        ändra_btn.classList.add('action-btn');
        ändra_btn.classList.add('update-btn');
        ändra_btn.type = 'button';
        ändra_btn.textContent = 'Ändra';
        //output: <button class="action-btn update-btn" type="button">Ändra</button>

        ändra_btn.addEventListener('click', myFunction);

        function myFunction() {
            if (edit_input.value === item_text.value) {
                edit_input.disabled = false;
                edit_input.style.backgroundColor = '#6faade';
            } else {
                item_text.value = edit_input.value;
                edit_input.disabled = true;
                edit_input.style.backgroundColor = 'white';
            }
        }



        let edit_btn = document.createElement('BUTTON');
        edit_btn.classList.add('action-btn');
        edit_btn.classList.add('edit-btn');
        edit_btn.textContent = 'Färdig';
        //output: <button class="action-btn edit-btn">EDIT</button>

        edit_btn.addEventListener('click', function () {

            edit_btn.remove();
            
            fardig_btn.appendChild(li);
            fardig_btn.appendChild(edit_input);
            fardig_btn.appendChild(ändra_btn);
            fardig_btn.appendChild(remove_btn);
            
            listFärdiga.appendChild(fardig_btn);
        });


        var remove_btn = document.createElement('BUTTON');
        remove_btn.classList.add('action-btn');
        remove_btn.classList.add('remove-btn');
        remove_btn.textContent = 'Radera';

        remove_btn.addEventListener('click', function () {
            gora_btn.parentNode.removeChild(gora_btn); //remove all item from div
            fardig_btn.parentNode.removeChild(fardig_btn); //remove all item from div
        });
        
        edit_input.disabled = true;
        //merge all items
        gora_btn.appendChild(li);
        gora_btn.appendChild(edit_input);
        gora_btn.appendChild(ändra_btn);
        gora_btn.appendChild(edit_btn);
        gora_btn.appendChild(remove_btn);

        list.appendChild(gora_btn);



        todo_input.value = ''; //empty input text
    }
});
