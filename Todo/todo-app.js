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

      if (input.value.length === 0) {
        button.setAttribute('disabled', 'disabled')
      } else {
        button.removeAttribute('disabled')
      }

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

  function createTodoItem(todoItemDate, localStorKey) {
    let item = document.createElement('li')
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

    doneButton.addEventListener('click', function () {
      let todoThisItem = this.parentElement.parentElement
      todoThisItem.classList.toggle('list-group-item-success')
      if (todoThisItem.classList.contains('list-group-item-success')) {
        itemsArray.find(el => el.id === todoItemDate.id).done = true
        localStorage.removeItem(localStorKey)
        saveListLocStor(itemsArray, localStorKey)
      } else {
        itemsArray.find(el => el.id === todoItemDate.id).done = false
        localStorage.removeItem(localStorKey)
        saveListLocStor(itemsArray, localStorKey)
      }

    });

    deleteButton.addEventListener('click', function () {
      let todoThisItem = this.parentElement.parentElement
      if (confirm('Вы уверены?')) {
        todoThisItem.remove()
        itemsArray = itemsArray.filter(el => (el.id !== todoItemDate.id))
        localStorage.removeItem(localStorKey)
        saveListLocStor(itemsArray, localStorKey)
      }
    })

    return {
      item,
      doneButton,
      deleteButton,
    }
  }

  function saveListLocStor(arr, keyName) {
    localStorage.setItem(keyName, JSON.stringify(arr))
  }

  function createTodoApp(container, title = 'Список дел', listName) {
    let localStorKey = listName
    let todoAppTitle = createAppTitle(title)
    let todoItemForm = createTodoItemForm()
    let todoList = createTodoList()
    let storedItems = localStorage.getItem(localStorKey)

    container.append(todoAppTitle)
    container.append(todoItemForm.form)
    container.append(todoList)

    todoItemForm.form.addEventListener('submit', function (e) {
      e.preventDefault();

      let newItem = {
        id: 0,
        name: todoItemForm.input.value,
        done: false,
      };
      if (itemsArray.length > 0) {
        newItem.id = itemsArray[itemsArray.length - 1].id + 1
        itemsArray.push(newItem)
        localStorage.setItem(localStorKey, JSON.stringify(itemsArray))
      } else {
        itemsArray.push(newItem)
        localStorage.setItem(localStorKey, JSON.stringify(itemsArray))
      };

      let todoItem = createTodoItem(newItem, localStorKey)
      todoList.append(todoItem.item)
      this.reset()
      document.querySelector('.btn-primary').setAttribute('disabled', 'disabled')


    })

    if (storedItems) {
      itemsArray = JSON.parse(storedItems)
      itemsArray.forEach(el => {
        let todoItem = createTodoItem(el, localStorKey)
        todoList.append(todoItem.item)
      })
    }
  }

  window.createTodoApp = createTodoApp;
})()