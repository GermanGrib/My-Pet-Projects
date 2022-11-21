(() => {
  let btn = document.querySelector('.material__button');
  let openMaterial = document.querySelector('.material__list');
  let btnTwo = document.querySelector('.material__button-two');

  btn.addEventListener('click', function () {
    openMaterial.classList.toggle('material__list--active');
  }
  )

  btnTwo.addEventListener('click', function () {
    openMaterial.classList.remove('material__list--active');
  })

  const phoneElement = document.querySelector(".input-tel");

  const im = new Inputmask("+7(999) 999-99-99");
  im.mask(phoneElement);

  const validation = new window.JustValidate('.form__box', {
    errorFieldCssClass: 'is-invalid',
    errorFieldStyle: {
      border: '1px solid #FF5C00',
    },
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
      color: '#FF5C00',
    },
    focusInvalidField: true,
    lockForm: true,
  });

  validation
    .addField('.input-name', [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Имя должно содержать хотя бы 3 буквы'
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Имя не может содержать более 30 символов'
      },
      {
        rule: 'required',
        errorMessage: 'Вы не ввели имя'
      }
    ])
    .addField('.input-mail', [
      {
        rule: 'required',
        errorMessage: 'Вы не ввели e-mail',
      },
      {
        rule: 'email',
        errorMessage: 'Это должен быть имейл @',
      },
    ])
    .addField('.input-tel', [
      {
        validator: () => {
          const phone = phoneElement.inputmask.unmaskedvalue();
          const result = Number(phone) && phone.length === 10;
          return result === 0 ? false : result;
        },
        errorMessage: 'Вы не ввели телефон',
      }
    ]);

  tippy('.tooltip__btn', {
    theme: 'light',
  });

  const select = document.querySelector('.js-custom-select');
  const choices = new Choices(select, {
    searchEnabled: false,
    itemSelectText: '',
    position: 'bottom',
    classNames: {
      containerOuter: 'default-select',
      containerInner: 'default-select__inner',
      input: 'default-select__input',
      inputCloned: 'default-select__input--cloned',
      list: 'default-select__list',
      listItems: 'default-select__list--multiple',
      listSingle: 'default-select__list--single',
      listDropdown: 'default-select__list--dropdown',
      item: 'default-select__item',
      itemSelectable: 'default-select__item--selectable',
      itemDisabled: 'default-select__item--disabled',
      itemChoice: 'default-select__item--choice',
      placeholder: 'default-select__placeholder',
      group: 'default-select__group',
      groupHeading: 'default-select__heading',
      button: 'default-select__button',
      activeState: 'is-active',
      focusState: 'is-focused',
      openState: 'is-open',
      disabledState: 'is-disabled',
      highlightedState: 'is-highlighted',
      selectedState: 'is-selected',
      flippedState: 'is-flipped',
      loadingState: 'is-loading',
      noResults: 'has-no-results',
      noChoices: 'has-no-default-select'
    },
  });
})();
