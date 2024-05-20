"use strict";

if (document.getElementById("index")) {
  initArraySwiper();
  var btnSort = document.querySelector(".restaurants__sort");
  var sortModal = document.querySelector(".sorting");
  var scrollSort = document.querySelector(".sorting__box");
  var btnFilter = document.querySelector(".restaurants__filter");
  var filterModal = document.querySelector(".filter");
  var scrollFilter = document.querySelector(".filter__box");
  btnSort.addEventListener('click', function (e) {
    e.stopPropagation();
    openModal(sortModal);
    scrollSort.scrollTo(0, 0);
    document.body.classList.add('lock');

    if (filterModal.classList.contains("active")) {
      filterModal.classList.remove("active");
    }
  });
  btnFilter.addEventListener('click', function (e) {
    e.stopPropagation();
    openModal(filterModal);
    scrollFilter.scrollTo(0, 0);
    document.body.classList.add('lock');

    if (sortModal.classList.contains("active")) {
      sortModal.classList.remove("active");
    }
  });
  setupModalEvents(sortModal, scrollSort);
  setupModalEvents(filterModal, scrollFilter);
  console.log(scrollSort);
  var filterBtn = document.querySelectorAll('.filter__btn');
  filterBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.classList.toggle("active");
    });
  });
  var restaurantsFilterBtn = document.querySelectorAll('.restaurants__filters-btn');
  restaurantsFilterBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      restaurantsFilterBtn.forEach(function (elem) {
        return elem.classList.remove("active");
      });
      btn.classList.add("active");
    });
  });
  var inputSearch = document.querySelector('.search-input');
  var btnClearSearch = document.querySelector('.search-input-clear');
  var inputSearchList = document.querySelector('.search-input-list');
  inputSearch.addEventListener('input', function () {
    showClear(inputSearch, btnClearSearch);

    if (inputSearch.value.length > 1) {
      inputSearchList.classList.add("active");
    } else {
      inputSearchList.classList.remove("active");
    }
  });
  btnClearSearch.addEventListener("click", function () {
    clearInput(inputSearch);
    showClear(inputSearch, btnClearSearch);

    if (inputSearch.value.length > 1) {
      inputSearchList.classList.add("active");
    } else {
      inputSearchList.classList.remove("active");
    }
  });
  var addressBtn = document.querySelector('.address-block-btn');
  var addBtn = document.querySelector('.address-block-add');
  var addressSearch = document.querySelector('.address-block-search');
  var formAddressSearch = document.querySelector(".js-search-form");
  var addressList = document.querySelector(".address-block-list");
  var deliveryBtn = document.querySelectorAll(".header__delivery-btn");
  deliveryBtn[0].classList.add("active");
  deliveryBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
      deliveryBtn.forEach(function (elem) {
        return elem.classList.remove("active");
      });
      btn.classList.add("active");
    });
  });
  addressBtn.addEventListener('click', function () {
    addressBtn.parentElement.classList.contains("is-show") ? accordionNotActive(addressBtn) : accordionActive(addressBtn);
  });
  addBtn.addEventListener('click', function () {
    addressSearch.classList.add('active');
    setTimeout(function () {
      formAddressSearch.querySelector("input").focus();
    }, 300);
  });
  formAddressSearch.addEventListener('submit', function (e) {
    e.preventDefault();
    var input = formAddressSearch.querySelector("input");
    var label = createLabel(input.value);
    addressList.insertAdjacentHTML('beforeend', label);
    input.value = "";
    addressSearch.classList.remove("active");
  });
  document.addEventListener('click', function (e) {
    if (!sortModal.contains(e.target) && !btnSort.contains(e.target)) {
      sortModal.classList.remove("active");
      document.body.classList.remove("lock");
    }
  });
  document.addEventListener('click', function (e) {
    if (!filterModal.contains(e.target) && !btnFilter.contains(e.target)) {
      filterModal.classList.remove("active");
      document.body.classList.remove("lock");
    }
  });
  document.addEventListener('click', function (e) {
    if (!addressBtn.parentElement.contains(e.target)) {
      accordionNotActive(addressBtn);
      addressSearch.classList.remove('active');
    }
  });
}

if (document.getElementById("authorization")) {
  var tel = document.querySelector(".authorization__input[type='tel']");
  tel.addEventListener("input", function (e) {
    inputPhone(e);
  });
  tel.addEventListener("keydown", function (e) {
    onePhoneKeyDown(e);
  });
}

if (document.getElementById("basket")) {
  var basketDelete = document.querySelector('.basket__header-delete');
  var modalDelete = new bootstrap.Modal(document.querySelector(".js-modal-delete"));
  var cards = document.querySelectorAll('.basket__selected-item');
  var count = document.querySelector('.basket__count-count');
  cards.forEach(function (card) {
    var counter = card.querySelector('.basket__selected-item-counter');
    var goods = card.querySelector('.basket__selected-item-count');
    countChange(counter, goods);
  });
  basketDelete.addEventListener('click', function () {
    modalDelete.show();
  });
  initArraySwiper();
  countChange(count);
  var modalPhone = document.querySelector(".basket__confirm-modal");
  var changePhoneBtn = document.querySelector(".basket__confirm-phone");
  var phoneNum = document.querySelector(".basket__confirm-phone-num");
  var inputTel = document.querySelector(".basket__confirm-modal-input");
  var inputBtn = document.querySelector(".basket__confirm-modal-btn");
  inputTel.addEventListener("input", function (e) {
    inputPhone(e);
  });
  inputTel.addEventListener("keydown", function (e) {
    onePhoneKeyDown(e);

    if (e.keyCode === 13) {
      phoneNum.textContent = inputTel.value;
      inputTel.value = '';
      modalPhone.classList.remove("active");
    }
  });
  inputBtn.addEventListener("click", function () {
    phoneNum.textContent = inputTel.value;
    inputTel.value = '';
    modalPhone.classList.remove("active");
  });
  changePhoneBtn.addEventListener("click", function () {
    modalPhone.classList.add("active");
  });
  document.addEventListener("click", function (e) {
    if (!modalPhone.contains(e.target) && !changePhoneBtn.contains(e.target)) {
      modalPhone.classList.remove("active");
    }
  });
}

if (document.getElementById("success")) {
  initArraySwiper();
  var btns = document.querySelectorAll('.success__grade-star');
  btns.forEach(function (btn, index) {
    btn.addEventListener('click', function () {
      btns.forEach(function (elem, indexElem) {
        if (indexElem <= index) {
          elem.classList.add("active");
        } else {
          elem.classList.remove("active");
        }
      });
    });
  });
}

if (document.getElementById("account")) {
  var _addBtn = document.querySelector('.address-block-add');

  var _addressSearch = document.querySelector('.address-block-search');

  var _formAddressSearch = document.querySelector(".js-search-form");

  var _addressList = document.querySelector(".address-block-list");

  _addBtn.addEventListener('click', function () {
    _addressSearch.classList.add('active');

    setTimeout(function () {
      _formAddressSearch.querySelector("input").focus();
    }, 300);
  });

  _formAddressSearch.addEventListener('submit', function (e) {
    e.preventDefault();

    var input = _formAddressSearch.querySelector("input");

    var label = createLabel(input.value);

    _addressList.insertAdjacentHTML('beforeend', label);

    input.value = "";

    _addressSearch.classList.remove("active");
  });

  document.addEventListener('click', function (e) {
    if (!_addressSearch.contains(e.target) && !_addBtn.contains(e.target)) {
      _addressSearch.classList.remove('active');
    }
  });
  var modalName = document.querySelector(".account__info-modal");
  var changeNameBtn = document.querySelector(".account__info-name-wrap");
  var nameSpan = document.querySelector(".account__info-name");
  var inputName = document.querySelector(".account__info-modal-input");

  var _inputBtn = document.querySelector(".account__info-modal-btn");

  _inputBtn.addEventListener("click", function () {
    nameSpan.textContent = inputName.value;
    inputName.value = "";
    modalName.classList.remove("active");
  });

  inputName.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      nameSpan.textContent = inputName.value;
      inputName.value = "";
      modalName.classList.remove("active");
    }
  });
  changeNameBtn.addEventListener("click", function () {
    modalName.classList.add("active");
  });
  document.addEventListener("click", function (e) {
    if (!modalName.contains(e.target) && !changeNameBtn.contains(e.target)) {
      modalName.classList.remove("active");
    }
  });
}

if (document.getElementById("stock")) {
  initArraySwiper();

  if (document.querySelector(".js-card")) {
    productCard();
  }
}

if (document.getElementById("restaurant")) {
  if (document.querySelector(".js-card")) {
    productCard();
  }

  var _btnSort = document.querySelector(".restaurant__settings-sort");

  var _sortModal = document.querySelector(".sorting");

  var _scrollSort = document.querySelector(".sorting__box");

  var _btnFilter = document.querySelector(".restaurant__settings-filter");

  var _filterModal = document.querySelector(".filter");

  var _scrollFilter = document.querySelector(".filter__box");

  var _inputSearch = document.querySelector('.search-input');

  var _btnClearSearch = document.querySelector('.search-input-clear');

  var _inputSearchList = document.querySelector('.search-input-list');

  _inputSearch.addEventListener('input', function () {
    showClear(_inputSearch, _btnClearSearch);

    if (_inputSearch.value.length > 1) {
      _inputSearchList.classList.add("active");
    } else {
      _inputSearchList.classList.remove("active");
    }
  });

  _btnClearSearch.addEventListener("click", function () {
    clearInput(_inputSearch);
    showClear(_inputSearch, _btnClearSearch);

    if (_inputSearch.value.length > 1) {
      _inputSearchList.classList.add("active");
    } else {
      _inputSearchList.classList.remove("active");
    }
  });

  _btnSort.addEventListener('click', function (e) {
    e.stopPropagation();
    openModal(_sortModal);

    _scrollSort.scrollTo(0, 0);

    document.body.classList.add('lock');

    if (_filterModal.classList.contains("active")) {
      _filterModal.classList.remove("active");
    }
  });

  _btnFilter.addEventListener('click', function (e) {
    e.stopPropagation();
    openModal(_filterModal);

    _scrollFilter.scrollTo(0, 0);

    document.body.classList.add('lock');

    if (_sortModal.classList.contains("active")) {
      _sortModal.classList.remove("active");
    }
  });

  setupModalEvents(_sortModal, _scrollSort);
  setupModalEvents(_filterModal, _scrollFilter);

  var _filterBtn = document.querySelectorAll('.filter__btn');

  _filterBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btn.classList.toggle("active");
    });
  });

  document.addEventListener('click', function (e) {
    if (!_sortModal.contains(e.target) && !_btnSort.contains(e.target)) {
      _sortModal.classList.remove("active");

      document.body.classList.remove("lock");
    }
  });
  document.addEventListener('click', function (e) {
    if (!_filterModal.contains(e.target) && !_btnFilter.contains(e.target)) {
      _filterModal.classList.remove("active");

      document.body.classList.remove("lock");
    }
  });

  var _restaurantsFilterBtn = document.querySelectorAll('.restaurant__settings-filters-btn');

  _restaurantsFilterBtn.forEach(function (btn) {
    btn.addEventListener('click', function () {
      _restaurantsFilterBtn.forEach(function (elem) {
        return elem.classList.remove("active");
      });

      btn.classList.add("active");
    });
  });

  initArraySwiper();
}

if (document.getElementById("product")) {
  var swiper = new Swiper(".product__top-swiper", {
    slidesPerView: "auto",
    spaceBetween: 10
  });

  if (document.querySelector(".js-card")) {
    productCard();
  }

  var btn = document.querySelector(".product__top-add");
  var counter = document.querySelector(".product__top-counter");

  var _count = counter.querySelector("span");

  var minus = counter.querySelector(".product__top-counter-minus");
  var plus = counter.querySelector(".product__top-counter-plus");
  btn.addEventListener("click", function () {
    openCounter(btn, counter);
  });
  minus.addEventListener("click", function () {
    changeCounter(_count, btn, counter, "minus");
  });
  plus.addEventListener("click", function () {
    changeCounter(_count, btn, counter, "plus");
  });
  initArraySwiper();
} // Функции


function initSwiper(container) {
  return new Swiper(container, {
    slidesPerView: "auto",
    spaceBetween: 20
  });
}

function initArraySwiper() {
  if (document.querySelector(".js-swiper-init")) {
    var swiperBlock = document.querySelectorAll(".js-swiper-init");
    swiperBlock.forEach(function (elem) {
      var swiper = initSwiper(elem);
    });
  }
}

function stopPropagation(event) {
  event.stopPropagation();
}

function handleStart(event, scroll) {
  this.initialScrollTop = scroll.scrollTop; // Запоминаем начальное значение scrollTop

  if (this.initialScrollTop !== 0) {
    this.preventDrag = true; // Устанавливаем флаг для предотвращения перемещения

    return;
  } else {
    this.preventDrag = false; // Сбрасываем флаг, если scrollTop равен 0
  }

  if (event.type === "touchstart") {
    this.startY = event.touches[0].clientY;
  } else if (event.type === "mousedown") {
    this.startY = event.clientY;
    this.isDragging = true;
  }

  this.hasMoved = false; // Добавляем флаг для отслеживания движения
}

function handleMove(event, scroll) {
  if (this.preventDrag || this.initialScrollTop !== 0) {
    this.style.bottom = "0"; // Сбрасываем позицию, если перемещение предотвращено или начальный scrollTop не равен 0

    return; // Если перемещение предотвращено, ничего не делаем
  }

  var endY;

  if (event.type === "touchmove") {
    endY = event.touches[0].clientY;
  } else if (event.type === "mousemove" && this.isDragging) {
    endY = event.clientY;
  } else {
    return;
  }

  var deltaY = endY - this.startY;

  if (deltaY > 0) {
    this.style.bottom = -deltaY + "px";
    this.hasMoved = true; // Отмечаем, что движение произошло
  }
}

function handleEnd(event, scroll) {
  if (this.isDragging || event.type === "touchend") {
    var endY;

    if (event.type === "touchend") {
      endY = event.changedTouches[0].clientY;
    } else if (event.type === "mouseup") {
      endY = event.clientY;
      this.isDragging = false;
    }

    if (this.preventDrag || !this.hasMoved || this.initialScrollTop !== 0) {
      this.style.bottom = "0"; // Если перемещение предотвращено, движения не было или начальный scrollTop не равен 0, сбросить позицию элемента

      return;
    }

    var deltaY = endY - this.startY;

    if (deltaY > 50 && scroll.scrollTop === 0) {
      this.classList.remove("active");
      document.body.classList.remove("lock");
    } else {
      this.style.bottom = "0";
    }
  }
}

function setupModalEvents(modal, scroll) {
  modal.addEventListener("click", stopPropagation);
  scroll.addEventListener("touchstart", stopPropagation);
  modal.addEventListener("touchstart", function (event) {
    handleStart.call(modal, event, scroll);
  });
  modal.addEventListener("touchmove", function (event) {
    handleMove.call(modal, event, scroll);
  });
  modal.addEventListener("touchend", function (event) {
    handleEnd.call(modal, event, scroll);
  });
  modal.addEventListener("mousedown", function (event) {
    handleStart.call(modal, event, scroll);
  });
  modal.addEventListener("mousemove", function (event) {
    handleMove.call(modal, event, scroll);
  });
  modal.addEventListener("mouseup", function (event) {
    handleEnd.call(modal, event, scroll);
  });
}

function openModal(modal) {
  document.body.classList.add("lock");
  modal.classList.add("active");
  modal.style.bottom = "0";
}

function regPhone(input) {
  return input.value.replace(/\D/g, '');
}

function inputPhone(e) {
  var input = e.target;
  var inputNumberValue = regPhone(input);
  var formattedInputValue = '';
  var selectionStart = input.selectionStart; // Если в инпут введены симовлы не соответсвующие регулярки, то значение инпута становится пустым

  if (!inputNumberValue) return input.value = ''; // В этой части я не совсем понимаю что происходит

  if (input.value.length != selectionStart) {
    if (e.data && /\D/g.test(e.data)) {
      input.value = inputNumberValue;
    }

    return;
  }

  if (['7', '8', '9'].includes(inputNumberValue[0])) {
    // Если первая цифра девять, тогда мы заменяем первую цифру на 7 и девятку делаем второй цифрой
    if (inputNumberValue[0] == '9') inputNumberValue = '7' + inputNumberValue;
    if (inputNumberValue[0] == '8') inputNumberValue = '7'; // Если первая цифра 7, тогда значение инпута начинается с +7, если первая цифра 8, тогда значение начинается с 8

    var firstSymbol = '+7';
    formattedInputValue = firstSymbol + ' '; // Если в инпуте больше одной цифры добавляем скобку открытия и так далее

    if (inputNumberValue.length > 1) {
      formattedInputValue += '(' + inputNumberValue.substring(1, 4);
    }

    if (inputNumberValue.length >= 5) {
      formattedInputValue += ') ' + inputNumberValue.substring(4, 7);
    }

    if (inputNumberValue.length >= 8) {
      formattedInputValue += '-' + inputNumberValue.substring(7, 9);
    }

    if (inputNumberValue.length >= 10) {
      formattedInputValue += '-' + inputNumberValue.substring(9, 11);
    }
  } else {
    //Если вводимое число не 7, 8 или 9 тогда добавляем +и добавляем введеное число
    formattedInputValue = '+7 (9' + inputNumberValue;
  }

  input.value = formattedInputValue;
}

function onePhoneKeyDown(e) {
  var input = e.target;

  if (regPhone(input).length == 1 && e.keyCode === 8) {
    input.value = '';
  }
}

function showClear(input, btn) {
  if (input.value.length > 0) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
}

function clearInput(input) {
  input.value = "";
}

function countChange(count, goods) {
  var span = count.querySelector('span');
  var minus = count.firstElementChild;
  var plus = count.lastElementChild;
  minus.addEventListener('click', function () {
    var num = Number(span.textContent) - 1;
    span.textContent = num;

    if (!!goods) {
      goods.textContent = "".concat(num, " \u0448\u0442.");
    }

    disabledMinus(num, minus);
  });
  plus.addEventListener('click', function () {
    var num = Number(span.textContent) + 1;
    span.textContent = num;

    if (!!goods) {
      goods.textContent = "".concat(num, " \u0448\u0442.");
    }

    disabledMinus(num, minus);
  });
}

function disabledMinus(num, btn) {
  if (num < 1) {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}

function accordionActive(item) {
  item.parentElement.classList.add("is-show");
  var panel = item.nextElementSibling;

  if (!panel.style.maxHeight) {
    panel.style.maxHeight = panel.scrollHeight + "px";
  }
}

function accordionNotActive(item) {
  item.parentElement.classList.remove("is-show");
  var panel = item.nextElementSibling;

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
  }
}

function openCounter(btn, counter) {
  btn.classList.add("not-active");
  counter.classList.add("active");
}

function closeCounter(btn, counter) {
  btn.classList.remove("not-active");
  counter.classList.remove("active");
}

function changeCounter(span, btn, counter, operator) {
  var num = Number(span.textContent);

  if (operator === "plus") {
    num += 1;
  } else {
    num -= 1;
  }

  num < 1 ? closeCounter(btn, counter) : span.textContent = num;
}

function productCard() {
  var cards = document.querySelectorAll(".js-card");
  cards.forEach(function (elem) {
    var btnWrap = elem.querySelector(".js-card-btns");
    var btn = elem.querySelector(".js-card-add");
    var counter = elem.querySelector(".js-card-counter");
    var count = counter.querySelector("span");
    var minus = counter.querySelector(".js-card-minus");
    var plus = counter.querySelector(".js-card-plus");
    btnWrap.addEventListener("click", function (e) {
      e.preventDefault();
    });
    btn.addEventListener("click", function () {
      openCounter(btn, counter);
    });
    minus.addEventListener("click", function () {
      changeCounter(count, btn, counter, "minus");
    });
    plus.addEventListener("click", function () {
      changeCounter(count, btn, counter, "plus");
    });
  });
}

function createLabel(text) {
  return "\n    <label class=\"address__label\">\n      <input type=\"radio\" name=\"address\" class=\"address__input\"/>\n      <span class=\"address__radio\"></span>\n      <span class=\"address__text text-16\">\n        ".concat(text, "\n      </span>\n    </label>  \n  ");
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImluaXRBcnJheVN3aXBlciIsImJ0blNvcnQiLCJxdWVyeVNlbGVjdG9yIiwic29ydE1vZGFsIiwic2Nyb2xsU29ydCIsImJ0bkZpbHRlciIsImZpbHRlck1vZGFsIiwic2Nyb2xsRmlsdGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJvcGVuTW9kYWwiLCJzY3JvbGxUbyIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsInJlbW92ZSIsInNldHVwTW9kYWxFdmVudHMiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyQnRuIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJ0b2dnbGUiLCJyZXN0YXVyYW50c0ZpbHRlckJ0biIsImVsZW0iLCJpbnB1dFNlYXJjaCIsImJ0bkNsZWFyU2VhcmNoIiwiaW5wdXRTZWFyY2hMaXN0Iiwic2hvd0NsZWFyIiwidmFsdWUiLCJsZW5ndGgiLCJjbGVhcklucHV0IiwiYWRkcmVzc0J0biIsImFkZEJ0biIsImFkZHJlc3NTZWFyY2giLCJmb3JtQWRkcmVzc1NlYXJjaCIsImFkZHJlc3NMaXN0IiwiZGVsaXZlcnlCdG4iLCJwYXJlbnRFbGVtZW50IiwiYWNjb3JkaW9uTm90QWN0aXZlIiwiYWNjb3JkaW9uQWN0aXZlIiwic2V0VGltZW91dCIsImZvY3VzIiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsImxhYmVsIiwiY3JlYXRlTGFiZWwiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ0YXJnZXQiLCJ0ZWwiLCJpbnB1dFBob25lIiwib25lUGhvbmVLZXlEb3duIiwiYmFza2V0RGVsZXRlIiwibW9kYWxEZWxldGUiLCJib290c3RyYXAiLCJNb2RhbCIsImNhcmRzIiwiY291bnQiLCJjYXJkIiwiY291bnRlciIsImdvb2RzIiwiY291bnRDaGFuZ2UiLCJzaG93IiwibW9kYWxQaG9uZSIsImNoYW5nZVBob25lQnRuIiwicGhvbmVOdW0iLCJpbnB1dFRlbCIsImlucHV0QnRuIiwia2V5Q29kZSIsInRleHRDb250ZW50IiwiYnRucyIsImluZGV4IiwiaW5kZXhFbGVtIiwibW9kYWxOYW1lIiwiY2hhbmdlTmFtZUJ0biIsIm5hbWVTcGFuIiwiaW5wdXROYW1lIiwia2V5IiwicHJvZHVjdENhcmQiLCJzd2lwZXIiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwibWludXMiLCJwbHVzIiwib3BlbkNvdW50ZXIiLCJjaGFuZ2VDb3VudGVyIiwiaW5pdFN3aXBlciIsImNvbnRhaW5lciIsInN3aXBlckJsb2NrIiwiZXZlbnQiLCJoYW5kbGVTdGFydCIsInNjcm9sbCIsImluaXRpYWxTY3JvbGxUb3AiLCJzY3JvbGxUb3AiLCJwcmV2ZW50RHJhZyIsInR5cGUiLCJzdGFydFkiLCJ0b3VjaGVzIiwiY2xpZW50WSIsImlzRHJhZ2dpbmciLCJoYXNNb3ZlZCIsImhhbmRsZU1vdmUiLCJzdHlsZSIsImJvdHRvbSIsImVuZFkiLCJkZWx0YVkiLCJoYW5kbGVFbmQiLCJjaGFuZ2VkVG91Y2hlcyIsIm1vZGFsIiwiY2FsbCIsInJlZ1Bob25lIiwicmVwbGFjZSIsImlucHV0TnVtYmVyVmFsdWUiLCJmb3JtYXR0ZWRJbnB1dFZhbHVlIiwic2VsZWN0aW9uU3RhcnQiLCJkYXRhIiwidGVzdCIsImluY2x1ZGVzIiwiZmlyc3RTeW1ib2wiLCJzdWJzdHJpbmciLCJkaXNhYmxlZCIsInNwYW4iLCJmaXJzdEVsZW1lbnRDaGlsZCIsImxhc3RFbGVtZW50Q2hpbGQiLCJudW0iLCJOdW1iZXIiLCJkaXNhYmxlZE1pbnVzIiwiaXRlbSIsInBhbmVsIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwibWF4SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiY2xvc2VDb3VudGVyIiwib3BlcmF0b3IiLCJidG5XcmFwIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxRQUFRLENBQUNDLGNBQVQs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QUlELFNBQVNiLFdBQVQsQ0FBcUIwRixJQUFyQixFQUEyQjtFQUN6QixzT0FLUUEsSUFMUjtBQVNEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmRleFwiKSkge1xuICBpbml0QXJyYXlTd2lwZXIoKTtcblxuICBjb25zdCBidG5Tb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50c19fc29ydFwiKTtcbiAgY29uc3Qgc29ydE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nXCIpO1xuICBjb25zdCBzY3JvbGxTb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nX19ib3hcIilcbiAgY29uc3QgYnRuRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50c19fZmlsdGVyXCIpO1xuICBjb25zdCBmaWx0ZXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyXCIpO1xuICBjb25zdCBzY3JvbGxGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcl9fYm94XCIpO1xuICBidG5Tb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgb3Blbk1vZGFsKHNvcnRNb2RhbClcbiAgICBzY3JvbGxTb3J0LnNjcm9sbFRvKDAsIDApXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2NrJylcbiAgICBpZiAoZmlsdGVyTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBmaWx0ZXJNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgfVxuICB9KVxuICBidG5GaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBvcGVuTW9kYWwoZmlsdGVyTW9kYWwpXG4gICAgc2Nyb2xsRmlsdGVyLnNjcm9sbFRvKDAsIDApXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2NrJylcbiAgICBpZiAoc29ydE1vZGFsLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgc29ydE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9XG4gIH0pXG5cbiAgc2V0dXBNb2RhbEV2ZW50cyhzb3J0TW9kYWwsIHNjcm9sbFNvcnQpXG4gIHNldHVwTW9kYWxFdmVudHMoZmlsdGVyTW9kYWwsIHNjcm9sbEZpbHRlcilcbiAgY29uc29sZS5sb2coc2Nyb2xsU29ydClcblxuICBjb25zdCBmaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19idG4nKTtcblxuICBmaWx0ZXJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgfSlcblxuICBjb25zdCByZXN0YXVyYW50c0ZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXN0YXVyYW50c19fZmlsdGVycy1idG4nKVxuXG4gIHJlc3RhdXJhbnRzRmlsdGVyQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZXN0YXVyYW50c0ZpbHRlckJ0bi5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKVxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IGlucHV0U2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpO1xuICBjb25zdCBidG5DbGVhclNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQtY2xlYXInKVxuICBjb25zdCBpbnB1dFNlYXJjaExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0LWxpc3QnKVxuICBpbnB1dFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGJ0bkNsZWFyU2VhcmNoKVxuICAgIGlmIChpbnB1dFNlYXJjaC52YWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICBpbnB1dFNlYXJjaExpc3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRTZWFyY2hMaXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxuICBidG5DbGVhclNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFySW5wdXQoaW5wdXRTZWFyY2gpXG4gICAgc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBidG5DbGVhclNlYXJjaClcblxuICAgIGlmIChpbnB1dFNlYXJjaC52YWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICBpbnB1dFNlYXJjaExpc3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRTZWFyY2hMaXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxuXG5cblxuICBjb25zdCBhZGRyZXNzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHJlc3MtYmxvY2stYnRuJylcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHJlc3MtYmxvY2stYWRkJylcbiAgY29uc3QgYWRkcmVzc1NlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRyZXNzLWJsb2NrLXNlYXJjaCcpXG4gIGNvbnN0IGZvcm1BZGRyZXNzU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1zZWFyY2gtZm9ybVwiKVxuICBjb25zdCBhZGRyZXNzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkcmVzcy1ibG9jay1saXN0XCIpXG5cbiAgY29uc3QgZGVsaXZlcnlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmhlYWRlcl9fZGVsaXZlcnktYnRuXCIpXG4gIGRlbGl2ZXJ5QnRuWzBdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcblxuICBkZWxpdmVyeUJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkZWxpdmVyeUJ0bi5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKVxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfSlcbiAgfSlcblxuICBhZGRyZXNzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZHJlc3NCdG4ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1zaG93XCIpID8gYWNjb3JkaW9uTm90QWN0aXZlKGFkZHJlc3NCdG4pIDogYWNjb3JkaW9uQWN0aXZlKGFkZHJlc3NCdG4pXG4gIH0pXG5cbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZHJlc3NTZWFyY2guY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmb3JtQWRkcmVzc1NlYXJjaC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuZm9jdXMoKTtcbiAgICB9LCAzMDApXG4gIH0pXG5cbiAgZm9ybUFkZHJlc3NTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGlucHV0ID0gZm9ybUFkZHJlc3NTZWFyY2gucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVMYWJlbChpbnB1dC52YWx1ZSk7XG4gICAgYWRkcmVzc0xpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBsYWJlbCk7XG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIGFkZHJlc3NTZWFyY2guY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFzb3J0TW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFidG5Tb3J0LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgc29ydE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghZmlsdGVyTW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFidG5GaWx0ZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBmaWx0ZXJNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWFkZHJlc3NCdG4ucGFyZW50RWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGFjY29yZGlvbk5vdEFjdGl2ZShhZGRyZXNzQnRuKVxuICAgICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dGhvcml6YXRpb25cIikpIHtcbiAgY29uc3QgdGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRob3JpemF0aW9uX19pbnB1dFt0eXBlPSd0ZWwnXVwiKTtcbiAgdGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgIGlucHV0UGhvbmUoZSlcbiAgfSlcbiAgdGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgb25lUGhvbmVLZXlEb3duKGUpXG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2tldFwiKSkge1xuICBjb25zdCBiYXNrZXREZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19oZWFkZXItZGVsZXRlJyk7XG4gIGNvbnN0IG1vZGFsRGVsZXRlID0gbmV3IGJvb3RzdHJhcC5Nb2RhbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLW1vZGFsLWRlbGV0ZVwiKSlcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFza2V0X19zZWxlY3RlZC1pdGVtJylcblxuICBjb25zdCBjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRfX2NvdW50LWNvdW50JylcblxuICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgIGNvbnN0IGNvdW50ZXIgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRfX3NlbGVjdGVkLWl0ZW0tY291bnRlcicpXG4gICAgY29uc3QgZ29vZHMgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRfX3NlbGVjdGVkLWl0ZW0tY291bnQnKVxuICAgIGNvdW50Q2hhbmdlKGNvdW50ZXIsIGdvb2RzKTtcbiAgfSlcblxuICBiYXNrZXREZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbW9kYWxEZWxldGUuc2hvdygpXG4gIH0pXG5cbiAgaW5pdEFycmF5U3dpcGVyKCk7XG5cbiAgY291bnRDaGFuZ2UoY291bnQpXG5cbiAgY29uc3QgbW9kYWxQaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLW1vZGFsXCIpXG4gIGNvbnN0IGNoYW5nZVBob25lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tcGhvbmVcIilcbiAgY29uc3QgcGhvbmVOdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1waG9uZS1udW1cIilcbiAgY29uc3QgaW5wdXRUZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1tb2RhbC1pbnB1dFwiKVxuICBjb25zdCBpbnB1dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLW1vZGFsLWJ0blwiKVxuXG4gIGlucHV0VGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xuICAgIGlucHV0UGhvbmUoZSlcbiAgfSlcbiAgaW5wdXRUZWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBvbmVQaG9uZUtleURvd24oZSlcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgcGhvbmVOdW0udGV4dENvbnRlbnQgPSBpbnB1dFRlbC52YWx1ZVxuICAgICAgaW5wdXRUZWwudmFsdWUgPSAnJ1xuICAgICAgbW9kYWxQaG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbiAgaW5wdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwaG9uZU51bS50ZXh0Q29udGVudCA9IGlucHV0VGVsLnZhbHVlXG4gICAgaW5wdXRUZWwudmFsdWUgPSAnJ1xuICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBjaGFuZ2VQaG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoIW1vZGFsUGhvbmUuY29udGFpbnMoZS50YXJnZXQpICYmICFjaGFuZ2VQaG9uZUJ0bi5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Y2Nlc3NcIikpIHtcbiAgaW5pdEFycmF5U3dpcGVyKCk7XG4gIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3VjY2Vzc19fZ3JhZGUtc3RhcicpO1xuICBidG5zLmZvckVhY2goKGJ0biwgaW5kZXgpID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBidG5zLmZvckVhY2goKGVsZW0sIGluZGV4RWxlbSkgPT4ge1xuICAgICAgICBpZiAoaW5kZXhFbGVtIDw9IGluZGV4KSB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjb3VudFwiKSkge1xuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcmVzcy1ibG9jay1hZGQnKTtcbiAgY29uc3QgYWRkcmVzc1NlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRyZXNzLWJsb2NrLXNlYXJjaCcpO1xuICBjb25zdCBmb3JtQWRkcmVzc1NlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtc2VhcmNoLWZvcm1cIilcbiAgY29uc3QgYWRkcmVzc0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZHJlc3MtYmxvY2stbGlzdFwiKVxuXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRyZXNzU2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZm9ybUFkZHJlc3NTZWFyY2gucXVlcnlTZWxlY3RvcihcImlucHV0XCIpLmZvY3VzKCk7XG4gICAgfSwgMzAwKVxuICB9KVxuXG4gIGZvcm1BZGRyZXNzU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBpbnB1dCA9IGZvcm1BZGRyZXNzU2VhcmNoLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKVxuICAgIGNvbnN0IGxhYmVsID0gY3JlYXRlTGFiZWwoaW5wdXQudmFsdWUpO1xuICAgIGFkZHJlc3NMaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbGFiZWwpO1xuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgICBhZGRyZXNzU2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghYWRkcmVzc1NlYXJjaC5jb250YWlucyhlLnRhcmdldCkgJiYgIWFkZEJ0bi5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGFkZHJlc3NTZWFyY2guY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgbW9kYWxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW1vZGFsXCIpXG4gIGNvbnN0IGNoYW5nZU5hbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbmFtZS13cmFwXCIpXG4gIGNvbnN0IG5hbWVTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW5hbWVcIilcbiAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW1vZGFsLWlucHV0XCIpXG4gIGNvbnN0IGlucHV0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW1vZGFsLWJ0blwiKVxuXG4gIGlucHV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBpbnB1dE5hbWUudmFsdWVcbiAgICBpbnB1dE5hbWUudmFsdWUgPSBcIlwiO1xuICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGlucHV0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBpbnB1dE5hbWUudmFsdWVcbiAgICAgIGlucHV0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG5cbiAgY2hhbmdlTmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmICghbW9kYWxOYW1lLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhY2hhbmdlTmFtZUJ0bi5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvY2tcIikpIHtcbiAgaW5pdEFycmF5U3dpcGVyKCk7XG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZFwiKSkge1xuICAgIHByb2R1Y3RDYXJkKCk7XG4gIH1cblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN0YXVyYW50XCIpKSB7XG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZFwiKSkge1xuICAgIHByb2R1Y3RDYXJkKCk7XG4gIH1cblxuICBjb25zdCBidG5Tb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50X19zZXR0aW5ncy1zb3J0XCIpO1xuICBjb25zdCBzb3J0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdcIik7XG4gIGNvbnN0IHNjcm9sbFNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdfX2JveFwiKVxuICBjb25zdCBidG5GaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRfX3NldHRpbmdzLWZpbHRlclwiKTtcbiAgY29uc3QgZmlsdGVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlclwiKTtcbiAgY29uc3Qgc2Nyb2xsRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX2JveFwiKTtcblxuXG4gIGNvbnN0IGlucHV0U2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dCcpO1xuICBjb25zdCBidG5DbGVhclNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQtY2xlYXInKVxuICBjb25zdCBpbnB1dFNlYXJjaExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0LWxpc3QnKVxuICBpbnB1dFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGJ0bkNsZWFyU2VhcmNoKVxuICAgIGlmIChpbnB1dFNlYXJjaC52YWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICBpbnB1dFNlYXJjaExpc3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRTZWFyY2hMaXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxuICBidG5DbGVhclNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFySW5wdXQoaW5wdXRTZWFyY2gpXG4gICAgc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBidG5DbGVhclNlYXJjaClcblxuICAgIGlmIChpbnB1dFNlYXJjaC52YWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICBpbnB1dFNlYXJjaExpc3QuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXRTZWFyY2hMaXN0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxuXG5cbiAgYnRuU29ydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIG9wZW5Nb2RhbChzb3J0TW9kYWwpXG4gICAgc2Nyb2xsU29ydC5zY3JvbGxUbygwLCAwKVxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9jaycpXG4gICAgaWYgKGZpbHRlck1vZGFsLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgZmlsdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIH1cbiAgfSlcbiAgYnRuRmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgb3Blbk1vZGFsKGZpbHRlck1vZGFsKVxuICAgIHNjcm9sbEZpbHRlci5zY3JvbGxUbygwLCAwKVxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9jaycpXG4gICAgaWYgKHNvcnRNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIHNvcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgfVxuICB9KVxuXG4gIHNldHVwTW9kYWxFdmVudHMoc29ydE1vZGFsLCBzY3JvbGxTb3J0KVxuICBzZXR1cE1vZGFsRXZlbnRzKGZpbHRlck1vZGFsLCBzY3JvbGxGaWx0ZXIpXG5cbiAgY29uc3QgZmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcl9fYnRuJyk7XG5cbiAgZmlsdGVyQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBidG4uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghc29ydE1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuU29ydC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHNvcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWZpbHRlck1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuRmlsdGVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgZmlsdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlc3RhdXJhbnRzRmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3RhdXJhbnRfX3NldHRpbmdzLWZpbHRlcnMtYnRuJylcblxuICByZXN0YXVyYW50c0ZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgfSlcblxuICBpbml0QXJyYXlTd2lwZXIoKTtcblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0XCIpKSB7XG4gIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoXCIucHJvZHVjdF9fdG9wLXN3aXBlclwiLCB7XG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMFxuICB9KVxuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtYWRkXCIpXG4gIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1jb3VudGVyXCIpXG4gIGNvbnN0IGNvdW50ID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbiAgY29uc3QgbWludXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWNvdW50ZXItbWludXNcIik7XG4gIGNvbnN0IHBsdXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWNvdW50ZXItcGx1c1wiKTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBvcGVuQ291bnRlcihidG4sIGNvdW50ZXIpXG4gIH0pO1xuXG4gIG1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2hhbmdlQ291bnRlcihjb3VudCwgYnRuLCBjb3VudGVyLCBcIm1pbnVzXCIpXG4gIH0pXG5cbiAgcGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJwbHVzXCIpXG4gIH0pXG5cbiAgaW5pdEFycmF5U3dpcGVyKCk7XG59XG5cbi8vINCk0YPQvdC60YbQuNC4XG5mdW5jdGlvbiBpbml0U3dpcGVyKGNvbnRhaW5lcikge1xuICByZXR1cm4gbmV3IFN3aXBlcihjb250YWluZXIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBzcGFjZUJldHdlZW46IDIwXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGluaXRBcnJheVN3aXBlcigpIHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtc3dpcGVyLWluaXRcIikpIHtcbiAgICBjb25zdCBzd2lwZXJCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtc3dpcGVyLWluaXRcIik7XG4gICAgc3dpcGVyQmxvY2suZm9yRWFjaChlbGVtID0+IHtcbiAgICAgIGNvbnN0IHN3aXBlciA9IGluaXRTd2lwZXIoZWxlbSlcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbihldmVudCkge1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlU3RhcnQoZXZlbnQsIHNjcm9sbCkge1xuICB0aGlzLmluaXRpYWxTY3JvbGxUb3AgPSBzY3JvbGwuc2Nyb2xsVG9wOyAvLyDQl9Cw0L/QvtC80LjQvdCw0LXQvCDQvdCw0YfQsNC70YzQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSBzY3JvbGxUb3BcblxuICBpZiAodGhpcy5pbml0aWFsU2Nyb2xsVG9wICE9PSAwKSB7XG4gICAgdGhpcy5wcmV2ZW50RHJhZyA9IHRydWU7IC8vINCj0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdC8INGE0LvQsNCzINC00LvRjyDQv9GA0LXQtNC+0YLQstGA0LDRidC10L3QuNGPINC/0LXRgNC10LzQtdGJ0LXQvdC40Y9cbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5wcmV2ZW50RHJhZyA9IGZhbHNlOyAvLyDQodCx0YDQsNGB0YvQstCw0LXQvCDRhNC70LDQsywg0LXRgdC70Lggc2Nyb2xsVG9wINGA0LDQstC10L0gMFxuICB9XG5cbiAgaWYgKGV2ZW50LnR5cGUgPT09IFwidG91Y2hzdGFydFwiKSB7XG4gICAgdGhpcy5zdGFydFkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gXCJtb3VzZWRvd25cIikge1xuICAgIHRoaXMuc3RhcnRZID0gZXZlbnQuY2xpZW50WTtcbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICB9XG4gIHRoaXMuaGFzTW92ZWQgPSBmYWxzZTsgLy8g0JTQvtCx0LDQstC70Y/QtdC8INGE0LvQsNCzINC00LvRjyDQvtGC0YHQu9C10LbQuNCy0LDQvdC40Y8g0LTQstC40LbQtdC90LjRj1xufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3ZlKGV2ZW50LCBzY3JvbGwpIHtcbiAgaWYgKHRoaXMucHJldmVudERyYWcgfHwgdGhpcy5pbml0aWFsU2Nyb2xsVG9wICE9PSAwKSB7XG4gICAgdGhpcy5zdHlsZS5ib3R0b20gPSBcIjBcIjsgLy8g0KHQsdGA0LDRgdGL0LLQsNC10Lwg0L/QvtC30LjRhtC40Y4sINC10YHQu9C4INC/0LXRgNC10LzQtdGJ0LXQvdC40LUg0L/RgNC10LTQvtGC0LLRgNCw0YnQtdC90L4g0LjQu9C4INC90LDRh9Cw0LvRjNC90YvQuSBzY3JvbGxUb3Ag0L3QtSDRgNCw0LLQtdC9IDBcbiAgICByZXR1cm47IC8vINCV0YHQu9C4INC/0LXRgNC10LzQtdGJ0LXQvdC40LUg0L/RgNC10LTQvtGC0LLRgNCw0YnQtdC90L4sINC90LjRh9C10LPQviDQvdC1INC00LXQu9Cw0LXQvFxuICB9XG5cbiAgbGV0IGVuZFk7XG4gIGlmIChldmVudC50eXBlID09PSBcInRvdWNobW92ZVwiKSB7XG4gICAgZW5kWSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSBcIm1vdXNlbW92ZVwiICYmIHRoaXMuaXNEcmFnZ2luZykge1xuICAgIGVuZFkgPSBldmVudC5jbGllbnRZO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBkZWx0YVkgPSBlbmRZIC0gdGhpcy5zdGFydFk7XG4gIGlmIChkZWx0YVkgPiAwKSB7XG4gICAgdGhpcy5zdHlsZS5ib3R0b20gPSAtZGVsdGFZICsgXCJweFwiO1xuICAgIHRoaXMuaGFzTW92ZWQgPSB0cnVlOyAvLyDQntGC0LzQtdGH0LDQtdC8LCDRh9GC0L4g0LTQstC40LbQtdC90LjQtSDQv9GA0L7QuNC30L7RiNC70L5cbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVFbmQoZXZlbnQsIHNjcm9sbCkge1xuICBpZiAodGhpcy5pc0RyYWdnaW5nIHx8IGV2ZW50LnR5cGUgPT09IFwidG91Y2hlbmRcIikge1xuICAgIGxldCBlbmRZO1xuICAgIGlmIChldmVudC50eXBlID09PSBcInRvdWNoZW5kXCIpIHtcbiAgICAgIGVuZFkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gXCJtb3VzZXVwXCIpIHtcbiAgICAgIGVuZFkgPSBldmVudC5jbGllbnRZO1xuICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJldmVudERyYWcgfHwgIXRoaXMuaGFzTW92ZWQgfHwgdGhpcy5pbml0aWFsU2Nyb2xsVG9wICE9PSAwKSB7XG4gICAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IFwiMFwiOyAvLyDQldGB0LvQuCDQv9C10YDQtdC80LXRidC10L3QuNC1INC/0YDQtdC00L7RgtCy0YDQsNGJ0LXQvdC+LCDQtNCy0LjQttC10L3QuNGPINC90LUg0LHRi9C70L4g0LjQu9C4INC90LDRh9Cw0LvRjNC90YvQuSBzY3JvbGxUb3Ag0L3QtSDRgNCw0LLQtdC9IDAsINGB0LHRgNC+0YHQuNGC0Ywg0L/QvtC30LjRhtC40Y4g0Y3Qu9C10LzQtdC90YLQsFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGxldCBkZWx0YVkgPSBlbmRZIC0gdGhpcy5zdGFydFk7XG4gICAgaWYgKGRlbHRhWSA+IDUwICYmIHNjcm9sbC5zY3JvbGxUb3AgPT09IDApIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3R5bGUuYm90dG9tID0gXCIwXCI7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldHVwTW9kYWxFdmVudHMobW9kYWwsIHNjcm9sbCkge1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RvcFByb3BhZ2F0aW9uKTtcbiAgc2Nyb2xsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHN0b3BQcm9wYWdhdGlvbik7XG5cbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaGFuZGxlU3RhcnQuY2FsbChtb2RhbCwgZXZlbnQsIHNjcm9sbCk7XG4gIH0pO1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGhhbmRsZU1vdmUuY2FsbChtb2RhbCwgZXZlbnQsIHNjcm9sbCk7XG4gIH0pO1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaGFuZGxlRW5kLmNhbGwobW9kYWwsIGV2ZW50LCBzY3JvbGwpO1xuICB9KTtcblxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGhhbmRsZVN0YXJ0LmNhbGwobW9kYWwsIGV2ZW50LCBzY3JvbGwpO1xuICB9KTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBoYW5kbGVNb3ZlLmNhbGwobW9kYWwsIGV2ZW50LCBzY3JvbGwpO1xuICB9KTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaGFuZGxlRW5kLmNhbGwobW9kYWwsIGV2ZW50LCBzY3JvbGwpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2NrXCIpXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIG1vZGFsLnN0eWxlLmJvdHRvbSA9IFwiMFwiXG59XG5cbmZ1bmN0aW9uIHJlZ1Bob25lKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC52YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpO1xufVxuXG5mdW5jdGlvbiBpbnB1dFBob25lKGUpIHtcbiAgbGV0IGlucHV0ID0gZS50YXJnZXQ7XG4gIGxldCBpbnB1dE51bWJlclZhbHVlID0gcmVnUGhvbmUoaW5wdXQpO1xuICBsZXQgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9ICcnO1xuICBsZXQgc2VsZWN0aW9uU3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydFxuICAvLyDQldGB0LvQuCDQsiDQuNC90L/Rg9GCINCy0LLQtdC00LXQvdGLINGB0LjQvNC+0LLQu9GLINC90LUg0YHQvtC+0YLQstC10YLRgdCy0YPRjtGJ0LjQtSDRgNC10LPRg9C70Y/RgNC60LgsINGC0L4g0LfQvdCw0YfQtdC90LjQtSDQuNC90L/Rg9GC0LAg0YHRgtCw0L3QvtCy0LjRgtGB0Y8g0L/Rg9GB0YLRi9C8XG4gIGlmICghaW5wdXROdW1iZXJWYWx1ZSkgcmV0dXJuIGlucHV0LnZhbHVlID0gJydcbiAgLy8g0JIg0Y3RgtC+0Lkg0YfQsNGB0YLQuCDRjyDQvdC1INGB0L7QstGB0LXQvCDQv9C+0L3QuNC80LDRjiDRh9GC0L4g0L/RgNC+0LjRgdGF0L7QtNC40YJcbiAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCAhPSBzZWxlY3Rpb25TdGFydCkge1xuICAgIGlmIChlLmRhdGEgJiYgL1xcRC9nLnRlc3QoZS5kYXRhKSkge1xuICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dE51bWJlclZhbHVlXG4gICAgfVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKFsnNycsICc4JywgJzknXS5pbmNsdWRlcyhpbnB1dE51bWJlclZhbHVlWzBdKSkge1xuICAgIC8vINCV0YHQu9C4INC/0LXRgNCy0LDRjyDRhtC40YTRgNCwINC00LXQstGP0YLRjCwg0YLQvtCz0LTQsCDQvNGLINC30LDQvNC10L3Rj9C10Lwg0L/QtdGA0LLRg9GOINGG0LjRhNGA0YMg0L3QsCA3INC4INC00LXQstGP0YLQutGDINC00LXQu9Cw0LXQvCDQstGC0L7RgNC+0Lkg0YbQuNGE0YDQvtC5XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWVbMF0gPT0gJzknKSBpbnB1dE51bWJlclZhbHVlID0gJzcnICsgaW5wdXROdW1iZXJWYWx1ZTtcbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZVswXSA9PSAnOCcpIGlucHV0TnVtYmVyVmFsdWUgPSAnNydcbiAgICAvLyDQldGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCA3LCDRgtC+0LPQtNCwINC30L3QsNGH0LXQvdC40LUg0LjQvdC/0YPRgtCwINC90LDRh9C40L3QsNC10YLRgdGPINGBICs3LCDQtdGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCA4LCDRgtC+0LPQtNCwINC30L3QsNGH0LXQvdC40LUg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0YEgOFxuICAgIGxldCBmaXJzdFN5bWJvbCA9ICcrNyc7XG4gICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9IGZpcnN0U3ltYm9sICsgJyAnO1xuICAgIC8vINCV0YHQu9C4INCyINC40L3Qv9GD0YLQtSDQsdC+0LvRjNGI0LUg0L7QtNC90L7QuSDRhtC40YTRgNGLINC00L7QsdCw0LLQu9GP0LXQvCDRgdC60L7QsdC60YMg0L7RgtC60YDRi9GC0LjRjyDQuCDRgtCw0Log0LTQsNC70LXQtVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJygnICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoMSwgNClcbiAgICB9XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWUubGVuZ3RoID49IDUpIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJykgJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDQsIDcpXG4gICAgfVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+PSA4KSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICctJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDcsIDkpXG4gICAgfVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+PSAxMCkge1xuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg5LCAxMSk7XG4gICAgfVxuICB9IGVsc2UgeyAvL9CV0YHQu9C4INCy0LLQvtC00LjQvNC+0LUg0YfQuNGB0LvQviDQvdC1IDcsIDgg0LjQu9C4IDkg0YLQvtCz0LTQsCDQtNC+0LHQsNCy0LvRj9C10LwgK9C4INC00L7QsdCw0LLQu9GP0LXQvCDQstCy0LXQtNC10L3QvtC1INGH0LjRgdC70L5cbiAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gJys3ICg5JyArIGlucHV0TnVtYmVyVmFsdWU7XG4gIH1cbiAgaW5wdXQudmFsdWUgPSBmb3JtYXR0ZWRJbnB1dFZhbHVlXG59XG5cbmZ1bmN0aW9uIG9uZVBob25lS2V5RG93bihlKSB7XG4gIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xuICBpZiAocmVnUGhvbmUoaW5wdXQpLmxlbmd0aCA9PSAxICYmIGUua2V5Q29kZSA9PT0gOCkge1xuICAgIGlucHV0LnZhbHVlID0gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0NsZWFyKGlucHV0LCBidG4pIHtcbiAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICBidG4uZGlzYWJsZWQgPSBmYWxzZVxuICB9IGVsc2Uge1xuICAgIGJ0bi5kaXNhYmxlZCA9IHRydWVcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhcklucHV0KGlucHV0KSB7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gY291bnRDaGFuZ2UoY291bnQsIGdvb2RzKSB7XG4gIGNvbnN0IHNwYW4gPSBjb3VudC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gIGNvbnN0IG1pbnVzID0gY291bnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gIGNvbnN0IHBsdXMgPSBjb3VudC5sYXN0RWxlbWVudENoaWxkO1xuXG4gIG1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihzcGFuLnRleHRDb250ZW50KSAtIDFcbiAgICBzcGFuLnRleHRDb250ZW50ID0gbnVtO1xuICAgIGlmICghIWdvb2RzKSB7XG4gICAgICBnb29kcy50ZXh0Q29udGVudCA9IGAke251bX0g0YjRgi5gXG4gICAgfVxuICAgIGRpc2FibGVkTWludXMobnVtLCBtaW51cylcbiAgfSlcblxuICBwbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihzcGFuLnRleHRDb250ZW50KSArIDFcbiAgICBzcGFuLnRleHRDb250ZW50ID0gbnVtO1xuICAgIGlmICghIWdvb2RzKSB7XG4gICAgICBnb29kcy50ZXh0Q29udGVudCA9IGAke251bX0g0YjRgi5gXG4gICAgfVxuICAgIGRpc2FibGVkTWludXMobnVtLCBtaW51cylcbiAgfSlcbn1cblxuZnVuY3Rpb24gZGlzYWJsZWRNaW51cyhudW0sIGJ0bikge1xuICBpZiAobnVtIDwgMSkge1xuICAgIGJ0bi5kaXNhYmxlZCA9IHRydWVcbiAgfSBlbHNlIHtcbiAgICBidG4uZGlzYWJsZWQgPSBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGFjY29yZGlvbkFjdGl2ZShpdGVtKSB7XG4gIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaXMtc2hvd1wiKTtcbiAgbGV0IHBhbmVsID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGlmICghcGFuZWwuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFjY29yZGlvbk5vdEFjdGl2ZShpdGVtKSB7XG4gIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtc2hvd1wiKTtcbiAgbGV0IHBhbmVsID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGlmIChwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsXG4gIH1cbn1cblxuZnVuY3Rpb24gb3BlbkNvdW50ZXIoYnRuLCBjb3VudGVyKSB7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwibm90LWFjdGl2ZVwiKTtcbiAgY291bnRlci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG59XG5cbmZ1bmN0aW9uIGNsb3NlQ291bnRlcihidG4sIGNvdW50ZXIpIHtcbiAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJub3QtYWN0aXZlXCIpO1xuICBjb3VudGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbn1cblxuZnVuY3Rpb24gY2hhbmdlQ291bnRlcihzcGFuLCBidG4sIGNvdW50ZXIsIG9wZXJhdG9yKSB7XG5cbiAgbGV0IG51bSA9IE51bWJlcihzcGFuLnRleHRDb250ZW50KTtcblxuICBpZiAob3BlcmF0b3IgPT09IFwicGx1c1wiKSB7XG4gICAgbnVtICs9IDFcbiAgfSBlbHNlIHtcbiAgICBudW0gLT0gMVxuICB9XG5cbiAgbnVtIDwgMSA/IGNsb3NlQ291bnRlcihidG4sIGNvdW50ZXIpIDogc3Bhbi50ZXh0Q29udGVudCA9IG51bVxufVxuXG5mdW5jdGlvbiBwcm9kdWN0Q2FyZCgpIHtcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWNhcmRcIik7XG4gIGNhcmRzLmZvckVhY2goZWxlbSA9PiB7XG4gICAgY29uc3QgYnRuV3JhcCA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLWJ0bnNcIilcbiAgICBjb25zdCBidG4gPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1hZGRcIilcbiAgICBjb25zdCBjb3VudGVyID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtY291bnRlclwiKVxuICAgIGNvbnN0IGNvdW50ID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbiAgICBjb25zdCBtaW51cyA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLW1pbnVzXCIpO1xuICAgIGNvbnN0IHBsdXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1wbHVzXCIpO1xuXG4gICAgYnRuV3JhcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG9wZW5Db3VudGVyKGJ0biwgY291bnRlcilcbiAgICB9KTtcblxuICAgIG1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwibWludXNcIilcbiAgICB9KVxuXG4gICAgcGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2hhbmdlQ291bnRlcihjb3VudCwgYnRuLCBjb3VudGVyLCBcInBsdXNcIilcbiAgICB9KVxuICB9KVxufVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlTGFiZWwodGV4dCkge1xuICByZXR1cm4gYFxuICAgIDxsYWJlbCBjbGFzcz1cImFkZHJlc3NfX2xhYmVsXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImFkZHJlc3NcIiBjbGFzcz1cImFkZHJlc3NfX2lucHV0XCIvPlxuICAgICAgPHNwYW4gY2xhc3M9XCJhZGRyZXNzX19yYWRpb1wiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYWRkcmVzc19fdGV4dCB0ZXh0LTE2XCI+XG4gICAgICAgICR7dGV4dH1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2xhYmVsPiAgXG4gIGBcbn0iXX0=
