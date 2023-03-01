(function () {
  let itemsArray = []
  function createAppTitle(title) {
    let appTitle = document.createElement('h2')
    appTitle.innerHTML = title
    return appTitle
  }

  function createTodoItemForm() {
    let form = document.createElement('form')
    let input = document.createElement('input')
    let buttonWrapper = document.createElement('div')
    let button = document.createElement('button')
    let timeoutId;

    form.classList.add('input-group', 'mb-3')
    input.classList.add('form-control')
    input.placeholder = 'Введите название нового дела'
    buttonWrapper.classList.add('input-group-append')
    button.classList.add('btn', 'btn-primary')
    button.textContent = 'Добавить дело'
    button.setAttribute('disabled', 'disabled')

    buttonWrapper.append(button)
    form.append(input)
    form.append(buttonWrapper)

    input.addEventListener('input', () => {

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        if (input.value.length === 0) {
          button.setAttribute('disabled', 'disabled')
        } else {
          button.removeAttribute('disabled')
        }
      }, 300);
    });

    return {
      form,
      input,
      button
    }
  }

  function createTodoList() {
    let list = document.createElement('ul')
    list.classList.add('list-group')
    return list
  }

  function createTodoItem(todoItemDate, itemsArray) {
    let item = document.createElement('li')
    let id = 1

    let buttonGroup = document.createElement('div')
    let doneButton = document.createElement('button')
    let deleteButton = document.createElement('button')

    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    item.textContent = todoItemDate.name

    buttonGroup.classList.add('btn-group', 'btn-group-sm')
    doneButton.classList.add('btn', 'btn-success')
    doneButton.textContent = 'Готово'
    deleteButton.classList.add('btn', 'btn-danger')
    deleteButton.textContent = 'Удалить'

    buttonGroup.append(doneButton)
    buttonGroup.append(deleteButton)
    item.append(buttonGroup)

    if (todoItemDate.done) {
      item.classList.add('list-group-item-success')
    }
    if (itemsArray.length > 0) {
      id = itemsArray[itemsArray.length - 1].id + 1
      itemsArray.push({ id, name: todoItemDate.name, done: todoItemDate.done })
    } else {
      itemsArray.push({ id, name: todoItemDate.name, done: todoItemDate.done })
    }

    return {
      item,
      doneButton,
      deleteButton,
    }
  }

  function createTodoApp(container, title = 'Список дел') {

    let todoAppTitle = createAppTitle(title)
    let todoItemForm = createTodoItemForm()
    let todoList = createTodoList()

    container.append(todoAppTitle)
    container.append(todoItemForm.form)
    container.append(todoList)

    todoItemForm.form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!todoItemForm.input.value) {
        return
      }

      let todoItem = createTodoItem({ name: todoItemForm.input.value, done: false }, itemsArray)
      todoItem.doneButton.addEventListener('click', function () {
        todoItem.item.classList.toggle('list-group-item-success')
        if (this.parentElement.parentElement.classList.contains('list-group-item-success')) {
          itemsArray.find(el => el.name === this.parentElement.parentElement.innerHTML.replace(/<.*/, '')).done = true
        } else {
          itemsArray.find(el => el.name === this.parentElement.parentElement.innerHTML.replace(/<.*/, '')).done = false
        }
      });
      todoItem.deleteButton.addEventListener('click', function () {
        if (confirm('Вы уверены?')) {
          todoItem.item.remove()
          itemsArray = itemsArray.filter(el => el.name !== this.parentElement.parentElement.innerHTML.replace(/<.*/, ''))
        }
      })

      todoList.append(todoItem.item)

      todoItemForm.input.value = ''
      document.querySelector('.btn-primary').setAttribute('disabled', 'disabled')
    })
  }

  window.createTodoApp = createTodoApp;
})()