let add_todo_btn = $('#add-btn'); //assign button
let todo_input = $('#todo-input'); //assign input text
let list = $('#listGora'); //assign "att göra" div
let listFardiga = $('#listFardiga'); //assign "att fäediga" div

$(document).ready(function () {

    add_todo_btn.click(function () {
        let todo = todo_input.val(); //take input...
        if (todo === '') {
            alert("You must write something!");
        } else {
            //new div under "att göra"
            let gora_btn = $('<div class="gora-btn" id="sort"></div>');
            //new div under "att fäediga"
            let fardig_btn = $('<div class="fardig-btn"></div>');

            let li = $('<li class="li-btn"></li>');

            let item_text = $('<input class="item-text"></input>');
            item_text.val(todo); //assign user value into new input


            let edit_input = $('<input class="edit-input" type="text" name="edit-input"></input>');
            edit_input.val(todo); //assign user value into new input for compare

            let ändra_btn = $('<button class="action-btn update-btn" type="button"></button>').text('Ändra');
            //output: <button class="action-btn update-btn" type="button">Ändra</button>

            ändra_btn.click(function () {
                if (edit_input.val() === '') {
                    alert("You can not leave empty and must change the value!");
                    edit_input.val(item_text.val()); //assign same value 
                } else {
                    if (edit_input.val() === item_text.val()) {
                        //input is active untill edit
                        edit_input.prop('disabled', false);
                        edit_input.css('background-color', '#6faade');
                    } else {
                        item_text.val(edit_input.val());
                        //after edit input will be disabled
                        edit_input.prop('disabled', true);
                        edit_input.css('background-color', 'white');
                    }
                }
            });



            let edit_btn = $('<button class="action-btn edit-btn"></button>').text('Färdig');
            //output: <button class="action-btn edit-btn">Färdig</button>

            edit_btn.click(function () {

                edit_btn.remove();

                //merge all items for display
                fardig_btn.append(li, edit_input, ändra_btn, remove_btn);

                listFardiga.append(fardig_btn);
            });


            let remove_btn = $('<button class="action-btn remove-btn"></button>').text('Radera');
            //output: <button class="action-btn reove-btn">Radera</button>

            remove_btn.click(function () {
                gora_btn.empty(gora_btn); //remove all item from 'att gora' div
                fardig_btn.empty(fardig_btn); //remove all item from 'att fäadiga' div
            });

            edit_input.prop('disabled', true); //edit input will be disabled

            //merge all items for display
            gora_btn.append(li, edit_input, ändra_btn, edit_btn, remove_btn);

            list.append(gora_btn);

            todo_input.val(''); //empty user input

        }
    });
    //sortable all div
    $('.row').sortable({
        revert: true
    });
    //show/hide 
    $("#toggle").click(function () {
        $(".row").animate({
            height: 'toggle'
        });
    });

});
