// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
function getRandomInt(min = 1, max = 100) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function addWidthToCards() {
  const cards = document.querySelectorAll('.game__card');
  const numCards = cards.length;
  let cardWidth;

  if (numCards === 4) {
    cardWidth = '45%';
  } else if (numCards === 8) {
    cardWidth = '22%';
  } else if (numCards === 12) {
    cardWidth = '22%';
    cards.forEach((card, index) => {
      if (index % 4 === 0) {
        card.style.clear = 'left';
      }
    });
  } else if (numCards === 16) {
    cardWidth = '22%';
    cards.forEach((card, index) => {
      if (index % 4 === 0) {
        card.style.clear = 'left';
      }
    });
  } else if (numCards === 20) {
    cardWidth = '17%';
    cards.forEach((card, index) => {
      if (index % 5 === 0) {
        card.style.clear = 'left';
      }
    });
  }

  cards.forEach((card) => {
    card.style.width = cardWidth;
  });
}

function checkAndAdd(arr, length) {
  if (arr.length >= length) {
    return arr;
  }

  const lastNum = arr.length > 0 ? arr[arr.length - 1] : 0;
  let newNum = lastNum + 3;

  while (arr.includes(newNum)) {
    newNum += 3;
  }

  arr.push(newNum);
  return checkAndAdd(arr, length);
}

function createGameTable() {
  const numbersTableSize = document.querySelectorAll('.game__numberitems')
  const startBtn = document.querySelector('.game__btn')
  let numbersInGame;
  let cardsInARaw;

  numbersTableSize.forEach(el => el.addEventListener('click', function () {
    document.querySelector('.game__table').style.opacity = 1
    document.querySelector('.timer__box').style.opacity = 1
    cardsInARaw = +el.innerHTML
    numbersInGame = []

    const cardList = document.querySelector('.game__cards')
    cardList.innerHTML = ''
    for (let i = 0; i < cardsInARaw * 2; i++) {
      let cardItem = document.createElement('li')
      cardItem.classList.add('game__card')
      cardList.append(cardItem)
    }

    addWidthToCards()

    const cardsWithNumber = document.querySelectorAll('.game__card')
    for (let i = 0; i < cardsWithNumber.length / 2; i++) {
      numbersInGame.push(getRandomInt())
    }

    numbersInGame = checkAndAdd(numbersInGame, cardsWithNumber.length / 2)

    const finalNumbersInGame = shuffleArray(numbersInGame.concat(numbersInGame))

    for (let i = 0; i < finalNumbersInGame.length; i++) {
      cardsWithNumber[i].innerHTML = finalNumbersInGame[i]
    }
    startBtn.addEventListener('click', startTimer)

    document.querySelector('.game__table').style.pointerEvents = 'none'
    startGame()
  }))

}

function startGame() {
  const cards = document.querySelectorAll('.game__card')
  let openCards = []
  let finalArrWithNumb = [];

  cards.forEach(el => el.addEventListener('click', function () {
    const allCards = document.querySelectorAll('.game__card')

    this.classList.add('is-active')
    openCards.push(this)
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
      openCards[0].classList.add('hide')
      openCards[1].classList.add('hide')
      finalArrWithNumb = finalArrWithNumb.concat(openCards)
      openCards = []
      if (finalArrWithNumb.length === allCards.length) {
        document.querySelector('.game__end').classList.add('is-active')
        document.querySelector('.end__message').innerHTML = 'Это было очень хорошо'
        openCards = []
        finalArrWithNumb = []
      }
    } else if (openCards[0].innerHTML !== openCards[1].innerHTML && openCards.length === 2) {
      setTimeout(() => {
        allCards.forEach(el => el.classList.remove('is-active'))
      }, 500);
      openCards = []
    }
  }))

}

function startTimer() {
  const timer = document.querySelector('.timer')
  const gameTable = document.querySelector('.game__table')
  const gameEndBtn = document.querySelector('.end__btn')
  timer.innerHTML = `00:00:60`
  let timeLeft = timer.innerHTML.slice(timer.innerHTML.length - 2)

  if (+timeLeft === 0) {
    timeLeft = 60
  }

  gameTable.style.pointerEvents = 'all'
  const interValid = setInterval(() => {
    timeLeft--
    timer.innerHTML = `00:00:${timeLeft.toString().padStart(2, '0')}`
    if (timeLeft === 0) {
      const endModal = document.querySelector('.game__end')
      const allCardsInGame = document.querySelectorAll('.game__card')
      let endMessage = document.querySelector('.end__message')
      let count = 0
      allCardsInGame.forEach(el => (el.classList.contains('is-active')) ? count++ : count)
      if (count === allCardsInGame.length) {
        endMessage.innerHTML = 'Это было очень хорошо'
      } else {
        endMessage.innerHTML = 'Ты можешь лучше!'
      }
      endModal.classList.add('is-active')
      clearInterval(interValid)
    }
  }, 1000)
  gameEndBtn.addEventListener('click', () => {
    startGameFromBeginning(interValid)
  })
}

function startGameFromBeginning(interValid) {
  const endModal = document.querySelector('.game__end')
  const timer = document.querySelector('.timer')
  const allCardsInGame = document.querySelectorAll('.game__card')
  timer.innerHTML = `00:00:60`
  allCardsInGame.forEach(el => el.classList.remove('hide', 'is-active'))
  endModal.classList.remove('is-active')

  clearInterval(interValid)
  startTimer()
  createGameTable()
}

createGameTable()