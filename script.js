let input = document.querySelector('input');
let add = document.querySelector('#add');
let ul = document.querySelector('ul');

add.addEventListener('click', function () {

    // тут создаю списки с кнопками
    let text = document.createElement('li');
    text.classList.add('text');
    let del = document.createElement('button');
    del.classList.add('del')
    del.innerHTML = 'delete';
    let butChange = document.createElement('button');
    butChange.classList.add('butChange');
    butChange.innerHTML = 'change';

// кнопка для изменения текста
    butChange.addEventListener('click', function change() {
        let newInput = document.createElement('input');
        let butSave = document.createElement('button');
        butSave.classList.add('butSave');
        butSave.innerHTML = 'save'

        butSave.addEventListener('click', () => {
              text.innerHTML = newInput.value
        })

        text.appendChild(newInput);
        text.appendChild(butSave);

    })

    del.addEventListener('click', function (event) {
        text.remove()
        butChange.remove()
        event.target.remove()
    })

    text.innerHTML = input.value;
    input.value = ' ';
    
    ul.append(text);
    ul.append(butChange)
    ul.append(del);
})
