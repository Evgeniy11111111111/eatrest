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
  this.initialScrollTop = scroll.scrollTop;

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

  var div = "<div>".concat(this.startY, "</div>");
  scroll.insertAdjacentHTML("beforeend", div);
}

function handleMove(event, scroll) {
  if (this.preventDrag) {
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

  if (this.initialScrollTop !== 0) {
    this.style.bottom = "0"; // Сбрасываем позицию, если начальный scrollTop не равен 0

    return;
  }

  var deltaY = endY - this.startY;

  if (deltaY > 0) {
    this.style.bottom = -deltaY + "px";
    this.hasMoved = true; // Отмечаем, что движение произошло
  }

  var div = "<div>".concat(endY, " - ").concat(deltaY, "</div>");
  scroll.insertAdjacentHTML("beforeend", div);
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

    if (this.preventDrag || !this.hasMoved) {
      this.style.bottom = "0"; // Если перемещение предотвращено или движения не было, сбросить позицию элемента

      this.preventDrag = false; // Сброс флага предотвращения перемещения

      return;
    }

    var deltaY = endY - this.startY;

    if (deltaY > 50 && scroll.scrollTop === 0) {
      this.classList.remove("active");
      document.body.classList.remove("lock");
    } else {
      this.style.bottom = "0";
    }

    this.preventDrag = false; // Сброс флага предотвращения перемещения
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
  document.addEventListener("mouseup", function () {
    modal.isDragging = false;
    modal.preventDrag = false;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImluaXRBcnJheVN3aXBlciIsImJ0blNvcnQiLCJxdWVyeVNlbGVjdG9yIiwic29ydE1vZGFsIiwic2Nyb2xsU29ydCIsImJ0bkZpbHRlciIsImZpbHRlck1vZGFsIiwic2Nyb2xsRmlsdGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJvcGVuTW9kYWwiLCJzY3JvbGxUbyIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsInJlbW92ZSIsInNldHVwTW9kYWxFdmVudHMiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyQnRuIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJ0b2dnbGUiLCJyZXN0YXVyYW50c0ZpbHRlckJ0biIsImVsZW0iLCJpbnB1dFNlYXJjaCIsImJ0bkNsZWFyU2VhcmNoIiwiaW5wdXRTZWFyY2hMaXN0Iiwic2hvd0NsZWFyIiwidmFsdWUiLCJsZW5ndGgiLCJjbGVhcklucHV0IiwiYWRkcmVzc0J0biIsImFkZEJ0biIsImFkZHJlc3NTZWFyY2giLCJmb3JtQWRkcmVzc1NlYXJjaCIsImFkZHJlc3NMaXN0IiwiZGVsaXZlcnlCdG4iLCJwYXJlbnRFbGVtZW50IiwiYWNjb3JkaW9uTm90QWN0aXZlIiwiYWNjb3JkaW9uQWN0aXZlIiwic2V0VGltZW91dCIsImZvY3VzIiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsImxhYmVsIiwiY3JlYXRlTGFiZWwiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ0YXJnZXQiLCJ0ZWwiLCJpbnB1dFBob25lIiwib25lUGhvbmVLZXlEb3duIiwiYmFza2V0RGVsZXRlIiwibW9kYWxEZWxldGUiLCJib290c3RyYXAiLCJNb2RhbCIsImNhcmRzIiwiY291bnQiLCJjYXJkIiwiY291bnRlciIsImdvb2RzIiwiY291bnRDaGFuZ2UiLCJzaG93IiwibW9kYWxQaG9uZSIsImNoYW5nZVBob25lQnRuIiwicGhvbmVOdW0iLCJpbnB1dFRlbCIsImlucHV0QnRuIiwia2V5Q29kZSIsInRleHRDb250ZW50IiwiYnRucyIsImluZGV4IiwiaW5kZXhFbGVtIiwibW9kYWxOYW1lIiwiY2hhbmdlTmFtZUJ0biIsIm5hbWVTcGFuIiwiaW5wdXROYW1lIiwia2V5IiwicHJvZHVjdENhcmQiLCJzd2lwZXIiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwibWludXMiLCJwbHVzIiwib3BlbkNvdW50ZXIiLCJjaGFuZ2VDb3VudGVyIiwiaW5pdFN3aXBlciIsImNvbnRhaW5lciIsInN3aXBlckJsb2NrIiwiZXZlbnQiLCJoYW5kbGVTdGFydCIsInNjcm9sbCIsImluaXRpYWxTY3JvbGxUb3AiLCJzY3JvbGxUb3AiLCJwcmV2ZW50RHJhZyIsInR5cGUiLCJzdGFydFkiLCJ0b3VjaGVzIiwiY2xpZW50WSIsImlzRHJhZ2dpbmciLCJoYXNNb3ZlZCIsImRpdiIsImhhbmRsZU1vdmUiLCJlbmRZIiwic3R5bGUiLCJib3R0b20iLCJkZWx0YVkiLCJoYW5kbGVFbmQiLCJjaGFuZ2VkVG91Y2hlcyIsIm1vZGFsIiwiY2FsbCIsInJlZ1Bob25lIiwicmVwbGFjZSIsImlucHV0TnVtYmVyVmFsdWUiLCJmb3JtYXR0ZWRJbnB1dFZhbHVlIiwic2VsZWN0aW9uU3RhcnQiLCJkYXRhIiwidGVzdCIsImluY2x1ZGVzIiwiZmlyc3RTeW1ib2wiLCJzdWJzdHJpbmciLCJkaXNhYmxlZCIsInNwYW4iLCJmaXJzdEVsZW1lbnRDaGlsZCIsImxhc3RFbGVtZW50Q2hpbGQiLCJudW0iLCJOdW1iZXIiLCJkaXNhYmxlZE1pbnVzIiwiaXRlbSIsInBhbmVsIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwibWF4SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiY2xvc2VDb3VudGVyIiwib3BlcmF0b3IiLCJidG5XcmFwIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxRQUFRLENBQUND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LGNBQUY7SUFDRCxDQUZEO0lBR0F0QixHQUFHLENBQUNoQixnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUFNO01BQ2xDZ0YsV0FBVyxDQUFDaEUsR0FBRCxFQUFNc0MsT0FBTixDQUFYO0lBQ0QsQ0FGRDtJQUlBd0IsS0FBSyxDQUFDOUUsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBTTtNQUNwQ2lGLGFBQWEsQ0FBQzdCLEtBQUQsRUFBUXBDLEdBQVIsRUFBYXNDLE9BQWIsRUFBc0IsT0FBdEIsQ0FBYjtJQUNELENBRkQ7SUFJQXlCLElBQUksQ0FBQy9FLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQU07TUFDbkNpRixhQUFhLENBQUM3QixLQUFELEVBQVFwQyxHQUFSLEVBQWFzQyxPQUFiLEVBQXNCLE1BQXRCLENBQWI7SUFDRCxDQUZEO0VBR0QsQ0F0QkQ7QUF1QkQ7O0FBSUQsU0FBU2IsV0FBVCxDQUFxQjJGLElBQXJCLEVBQTJCO0VBQ3pCLHNPQUtRQSxJQUxSO0FBU0QiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZGV4XCIpKSB7XG4gIGluaXRBcnJheVN3aXBlcigpO1xuXG4gIGNvbnN0IGJ0blNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRzX19zb3J0XCIpO1xuICBjb25zdCBzb3J0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdcIik7XG4gIGNvbnN0IHNjcm9sbFNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdfX2JveFwiKVxuICBjb25zdCBidG5GaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRzX19maWx0ZXJcIik7XG4gIGNvbnN0IGZpbHRlck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJcIik7XG4gIGNvbnN0IHNjcm9sbEZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyX19ib3hcIik7XG4gIGJ0blNvcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBvcGVuTW9kYWwoc29ydE1vZGFsKVxuICAgIHNjcm9sbFNvcnQuc2Nyb2xsVG8oMCwgMClcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICAgIGlmIChmaWx0ZXJNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIGZpbHRlck1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9XG4gIH0pXG4gIGJ0bkZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIG9wZW5Nb2RhbChmaWx0ZXJNb2RhbClcbiAgICBzY3JvbGxGaWx0ZXIuc2Nyb2xsVG8oMCwgMClcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICAgIGlmIChzb3J0TW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBzb3J0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIH1cbiAgfSlcblxuICBzZXR1cE1vZGFsRXZlbnRzKHNvcnRNb2RhbCwgc2Nyb2xsU29ydClcbiAgc2V0dXBNb2RhbEV2ZW50cyhmaWx0ZXJNb2RhbCwgc2Nyb2xsRmlsdGVyKVxuICBjb25zb2xlLmxvZyhzY3JvbGxTb3J0KVxuXG4gIGNvbnN0IGZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2J0bicpO1xuXG4gIGZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IHJlc3RhdXJhbnRzRmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3RhdXJhbnRzX19maWx0ZXJzLWJ0bicpXG5cbiAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlc3RhdXJhbnRzRmlsdGVyQnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0Jyk7XG4gIGNvbnN0IGJ0bkNsZWFyU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dC1jbGVhcicpXG4gIGNvbnN0IGlucHV0U2VhcmNoTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQtbGlzdCcpXG4gIGlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgYnRuQ2xlYXJTZWFyY2gpXG4gICAgaWYgKGlucHV0U2VhcmNoLnZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dFNlYXJjaExpc3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG4gIGJ0bkNsZWFyU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJJbnB1dChpbnB1dFNlYXJjaClcbiAgICBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGJ0bkNsZWFyU2VhcmNoKVxuXG4gICAgaWYgKGlucHV0U2VhcmNoLnZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dFNlYXJjaExpc3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG5cblxuXG4gIGNvbnN0IGFkZHJlc3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcmVzcy1ibG9jay1idG4nKVxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcmVzcy1ibG9jay1hZGQnKVxuICBjb25zdCBhZGRyZXNzU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHJlc3MtYmxvY2stc2VhcmNoJylcbiAgY29uc3QgZm9ybUFkZHJlc3NTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXNlYXJjaC1mb3JtXCIpXG4gIGNvbnN0IGFkZHJlc3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRyZXNzLWJsb2NrLWxpc3RcIilcblxuICBjb25zdCBkZWxpdmVyeUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyX19kZWxpdmVyeS1idG5cIilcbiAgZGVsaXZlcnlCdG5bMF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuXG4gIGRlbGl2ZXJ5QnRuLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGRlbGl2ZXJ5QnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9KVxuICB9KVxuXG4gIGFkZHJlc3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkcmVzc0J0bi5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImlzLXNob3dcIikgPyBhY2NvcmRpb25Ob3RBY3RpdmUoYWRkcmVzc0J0bikgOiBhY2NvcmRpb25BY3RpdmUoYWRkcmVzc0J0bilcbiAgfSlcblxuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZvcm1BZGRyZXNzU2VhcmNoLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5mb2N1cygpO1xuICAgIH0sIDMwMClcbiAgfSlcblxuICBmb3JtQWRkcmVzc1NlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW5wdXQgPSBmb3JtQWRkcmVzc1NlYXJjaC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUxhYmVsKGlucHV0LnZhbHVlKTtcbiAgICBhZGRyZXNzTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGxhYmVsKTtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIXNvcnRNb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWJ0blNvcnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBzb3J0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFmaWx0ZXJNb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWJ0bkZpbHRlci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGZpbHRlck1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghYWRkcmVzc0J0bi5wYXJlbnRFbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgYWNjb3JkaW9uTm90QWN0aXZlKGFkZHJlc3NCdG4pXG4gICAgICBhZGRyZXNzU2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0aG9yaXphdGlvblwiKSkge1xuICBjb25zdCB0ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGhvcml6YXRpb25fX2lucHV0W3R5cGU9J3RlbCddXCIpO1xuICB0ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgaW5wdXRQaG9uZShlKVxuICB9KVxuICB0ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBvbmVQaG9uZUtleURvd24oZSlcbiAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFza2V0XCIpKSB7XG4gIGNvbnN0IGJhc2tldERlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRfX2hlYWRlci1kZWxldGUnKTtcbiAgY29uc3QgbW9kYWxEZWxldGUgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtbW9kYWwtZGVsZXRlXCIpKVxuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYXNrZXRfX3NlbGVjdGVkLWl0ZW0nKVxuXG4gIGNvbnN0IGNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2tldF9fY291bnQtY291bnQnKVxuXG4gIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgY29uc3QgY291bnRlciA9IGNhcmQucXVlcnlTZWxlY3RvcignLmJhc2tldF9fc2VsZWN0ZWQtaXRlbS1jb3VudGVyJylcbiAgICBjb25zdCBnb29kcyA9IGNhcmQucXVlcnlTZWxlY3RvcignLmJhc2tldF9fc2VsZWN0ZWQtaXRlbS1jb3VudCcpXG4gICAgY291bnRDaGFuZ2UoY291bnRlciwgZ29vZHMpO1xuICB9KVxuXG4gIGJhc2tldERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtb2RhbERlbGV0ZS5zaG93KClcbiAgfSlcblxuICBpbml0QXJyYXlTd2lwZXIoKTtcblxuICBjb3VudENoYW5nZShjb3VudClcblxuICBjb25zdCBtb2RhbFBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tbW9kYWxcIilcbiAgY29uc3QgY2hhbmdlUGhvbmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1waG9uZVwiKVxuICBjb25zdCBwaG9uZU51bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLXBob25lLW51bVwiKVxuICBjb25zdCBpbnB1dFRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLW1vZGFsLWlucHV0XCIpXG4gIGNvbnN0IGlucHV0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tbW9kYWwtYnRuXCIpXG5cbiAgaW5wdXRUZWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgaW5wdXRQaG9uZShlKVxuICB9KVxuICBpbnB1dFRlbC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIG9uZVBob25lS2V5RG93bihlKVxuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBwaG9uZU51bS50ZXh0Q29udGVudCA9IGlucHV0VGVsLnZhbHVlXG4gICAgICBpbnB1dFRlbC52YWx1ZSA9ICcnXG4gICAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxuICBpbnB1dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBob25lTnVtLnRleHRDb250ZW50ID0gaW5wdXRUZWwudmFsdWVcbiAgICBpbnB1dFRlbC52YWx1ZSA9ICcnXG4gICAgbW9kYWxQaG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGNoYW5nZVBob25lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWxQaG9uZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmICghbW9kYWxQaG9uZS5jb250YWlucyhlLnRhcmdldCkgJiYgIWNoYW5nZVBob25lQnRuLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgbW9kYWxQaG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VjY2Vzc1wiKSkge1xuICBpbml0QXJyYXlTd2lwZXIoKTtcbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWNjZXNzX19ncmFkZS1zdGFyJyk7XG4gIGJ0bnMuZm9yRWFjaCgoYnRuLCBpbmRleCkgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGJ0bnMuZm9yRWFjaCgoZWxlbSwgaW5kZXhFbGVtKSA9PiB7XG4gICAgICAgIGlmIChpbmRleEVsZW0gPD0gaW5kZXgpIHtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NvdW50XCIpKSB7XG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRyZXNzLWJsb2NrLWFkZCcpO1xuICBjb25zdCBhZGRyZXNzU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHJlc3MtYmxvY2stc2VhcmNoJyk7XG4gIGNvbnN0IGZvcm1BZGRyZXNzU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1zZWFyY2gtZm9ybVwiKVxuICBjb25zdCBhZGRyZXNzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkcmVzcy1ibG9jay1saXN0XCIpXG5cbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZHJlc3NTZWFyY2guY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmb3JtQWRkcmVzc1NlYXJjaC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuZm9jdXMoKTtcbiAgICB9LCAzMDApXG4gIH0pXG5cbiAgZm9ybUFkZHJlc3NTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGlucHV0ID0gZm9ybUFkZHJlc3NTZWFyY2gucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVMYWJlbChpbnB1dC52YWx1ZSk7XG4gICAgYWRkcmVzc0xpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBsYWJlbCk7XG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIGFkZHJlc3NTZWFyY2guY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFhZGRyZXNzU2VhcmNoLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYWRkQnRuLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBtb2RhbE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbW9kYWxcIilcbiAgY29uc3QgY2hhbmdlTmFtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1uYW1lLXdyYXBcIilcbiAgY29uc3QgbmFtZVNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbmFtZVwiKVxuICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbW9kYWwtaW5wdXRcIilcbiAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbW9kYWwtYnRuXCIpXG5cbiAgaW5wdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IGlucHV0TmFtZS52YWx1ZVxuICAgIGlucHV0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgaW5wdXROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IGlucHV0TmFtZS52YWx1ZVxuICAgICAgaW5wdXROYW1lLnZhbHVlID0gXCJcIjtcbiAgICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcblxuICBjaGFuZ2VOYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKCFtb2RhbE5hbWUuY29udGFpbnMoZS50YXJnZXQpICYmICFjaGFuZ2VOYW1lQnRuLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9ja1wiKSkge1xuICBpbml0QXJyYXlTd2lwZXIoKTtcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkXCIpKSB7XG4gICAgcHJvZHVjdENhcmQoKTtcbiAgfVxuXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3RhdXJhbnRcIikpIHtcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkXCIpKSB7XG4gICAgcHJvZHVjdENhcmQoKTtcbiAgfVxuXG4gIGNvbnN0IGJ0blNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRfX3NldHRpbmdzLXNvcnRcIik7XG4gIGNvbnN0IHNvcnRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ1wiKTtcbiAgY29uc3Qgc2Nyb2xsU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ19fYm94XCIpXG4gIGNvbnN0IGJ0bkZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudF9fc2V0dGluZ3MtZmlsdGVyXCIpO1xuICBjb25zdCBmaWx0ZXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyXCIpO1xuICBjb25zdCBzY3JvbGxGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcl9fYm94XCIpO1xuXG5cbiAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0Jyk7XG4gIGNvbnN0IGJ0bkNsZWFyU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dC1jbGVhcicpXG4gIGNvbnN0IGlucHV0U2VhcmNoTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQtbGlzdCcpXG4gIGlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgYnRuQ2xlYXJTZWFyY2gpXG4gICAgaWYgKGlucHV0U2VhcmNoLnZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dFNlYXJjaExpc3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG4gIGJ0bkNsZWFyU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJJbnB1dChpbnB1dFNlYXJjaClcbiAgICBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGJ0bkNsZWFyU2VhcmNoKVxuXG4gICAgaWYgKGlucHV0U2VhcmNoLnZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dFNlYXJjaExpc3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG5cblxuICBidG5Tb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgb3Blbk1vZGFsKHNvcnRNb2RhbClcbiAgICBzY3JvbGxTb3J0LnNjcm9sbFRvKDAsIDApXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2NrJylcbiAgICBpZiAoZmlsdGVyTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBmaWx0ZXJNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgfVxuICB9KVxuICBidG5GaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBvcGVuTW9kYWwoZmlsdGVyTW9kYWwpXG4gICAgc2Nyb2xsRmlsdGVyLnNjcm9sbFRvKDAsIDApXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2NrJylcbiAgICBpZiAoc29ydE1vZGFsLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgc29ydE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9XG4gIH0pXG5cbiAgc2V0dXBNb2RhbEV2ZW50cyhzb3J0TW9kYWwsIHNjcm9sbFNvcnQpXG4gIHNldHVwTW9kYWxFdmVudHMoZmlsdGVyTW9kYWwsIHNjcm9sbEZpbHRlcilcblxuICBjb25zdCBmaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19idG4nKTtcblxuICBmaWx0ZXJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFzb3J0TW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFidG5Tb3J0LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgc29ydE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghZmlsdGVyTW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFidG5GaWx0ZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBmaWx0ZXJNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG5cbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgcmVzdGF1cmFudHNGaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdGF1cmFudF9fc2V0dGluZ3MtZmlsdGVycy1idG4nKVxuXG4gIHJlc3RhdXJhbnRzRmlsdGVyQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZXN0YXVyYW50c0ZpbHRlckJ0bi5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKVxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB9KVxuICB9KVxuXG4gIGluaXRBcnJheVN3aXBlcigpO1xuXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RcIikpIHtcbiAgY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5wcm9kdWN0X190b3Atc3dpcGVyXCIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBzcGFjZUJldHdlZW46IDEwXG4gIH0pXG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZFwiKSkge1xuICAgIHByb2R1Y3RDYXJkKCk7XG4gIH1cblxuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1hZGRcIilcbiAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWNvdW50ZXJcIilcbiAgY29uc3QgY291bnQgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpO1xuICBjb25zdCBtaW51cyA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtY291bnRlci1taW51c1wiKTtcbiAgY29uc3QgcGx1cyA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtY291bnRlci1wbHVzXCIpO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG9wZW5Db3VudGVyKGJ0biwgY291bnRlcilcbiAgfSk7XG5cbiAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwibWludXNcIilcbiAgfSlcblxuICBwbHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2hhbmdlQ291bnRlcihjb3VudCwgYnRuLCBjb3VudGVyLCBcInBsdXNcIilcbiAgfSlcblxuICBpbml0QXJyYXlTd2lwZXIoKTtcbn1cblxuLy8g0KTRg9C90LrRhtC40LhcbmZ1bmN0aW9uIGluaXRTd2lwZXIoY29udGFpbmVyKSB7XG4gIHJldHVybiBuZXcgU3dpcGVyKGNvbnRhaW5lciwge1xuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgfSlcbn1cblxuZnVuY3Rpb24gaW5pdEFycmF5U3dpcGVyKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1zd2lwZXItaW5pdFwiKSkge1xuICAgIGNvbnN0IHN3aXBlckJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1zd2lwZXItaW5pdFwiKTtcbiAgICBzd2lwZXJCbG9jay5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgY29uc3Qgc3dpcGVyID0gaW5pdFN3aXBlcihlbGVtKVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVTdGFydChldmVudCwgc2Nyb2xsKSB7XG4gIHRoaXMuaW5pdGlhbFNjcm9sbFRvcCA9IHNjcm9sbC5zY3JvbGxUb3A7XG5cbiAgaWYgKHRoaXMuaW5pdGlhbFNjcm9sbFRvcCAhPT0gMCkge1xuICAgIHRoaXMucHJldmVudERyYWcgPSB0cnVlOyAvLyDQo9GB0YLQsNC90LDQstC70LjQstCw0LXQvCDRhNC70LDQsyDQtNC70Y8g0L/RgNC10LTQvtGC0LLRgNCw0YnQtdC90LjRjyDQv9C10YDQtdC80LXRidC10L3QuNGPXG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIHRoaXMucHJldmVudERyYWcgPSBmYWxzZTsgLy8g0KHQsdGA0LDRgdGL0LLQsNC10Lwg0YTQu9Cw0LMsINC10YHQu9C4IHNjcm9sbFRvcCDRgNCw0LLQtdC9IDBcbiAgfVxuXG4gIGlmIChldmVudC50eXBlID09PSBcInRvdWNoc3RhcnRcIikge1xuICAgIHRoaXMuc3RhcnRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09IFwibW91c2Vkb3duXCIpIHtcbiAgICB0aGlzLnN0YXJ0WSA9IGV2ZW50LmNsaWVudFk7XG4gICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbiAgfVxuICB0aGlzLmhhc01vdmVkID0gZmFsc2U7IC8vINCU0L7QsdCw0LLQu9GP0LXQvCDRhNC70LDQsyDQtNC70Y8g0L7RgtGB0LvQtdC20LjQstCw0L3QuNGPINC00LLQuNC20LXQvdC40Y9cbiAgY29uc3QgZGl2ID0gYDxkaXY+JHt0aGlzLnN0YXJ0WX08L2Rpdj5gXG4gIHNjcm9sbC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgZGl2KVxufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3ZlKGV2ZW50LCBzY3JvbGwpIHtcbiAgaWYgKHRoaXMucHJldmVudERyYWcpIHtcbiAgICByZXR1cm47IC8vINCV0YHQu9C4INC/0LXRgNC10LzQtdGJ0LXQvdC40LUg0L/RgNC10LTQvtGC0LLRgNCw0YnQtdC90L4sINC90LjRh9C10LPQviDQvdC1INC00LXQu9Cw0LXQvFxuICB9XG5cbiAgbGV0IGVuZFk7XG4gIGlmIChldmVudC50eXBlID09PSBcInRvdWNobW92ZVwiKSB7XG4gICAgZW5kWSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSBcIm1vdXNlbW92ZVwiICYmIHRoaXMuaXNEcmFnZ2luZykge1xuICAgIGVuZFkgPSBldmVudC5jbGllbnRZO1xuICB9IGVsc2Uge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh0aGlzLmluaXRpYWxTY3JvbGxUb3AgIT09IDApIHtcbiAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IFwiMFwiOyAvLyDQodCx0YDQsNGB0YvQstCw0LXQvCDQv9C+0LfQuNGG0LjRjiwg0LXRgdC70Lgg0L3QsNGH0LDQu9GM0L3Ri9C5IHNjcm9sbFRvcCDQvdC1INGA0LDQstC10L0gMFxuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBkZWx0YVkgPSBlbmRZIC0gdGhpcy5zdGFydFk7XG4gIGlmIChkZWx0YVkgPiAwKSB7XG4gICAgdGhpcy5zdHlsZS5ib3R0b20gPSAtZGVsdGFZICsgXCJweFwiO1xuICAgIHRoaXMuaGFzTW92ZWQgPSB0cnVlOyAvLyDQntGC0LzQtdGH0LDQtdC8LCDRh9GC0L4g0LTQstC40LbQtdC90LjQtSDQv9GA0L7QuNC30L7RiNC70L5cbiAgfVxuXG4gIGNvbnN0IGRpdiA9IGA8ZGl2PiR7ZW5kWX0gLSAke2RlbHRhWX08L2Rpdj5gXG4gIHNjcm9sbC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgZGl2KVxufVxuXG5mdW5jdGlvbiBoYW5kbGVFbmQoZXZlbnQsIHNjcm9sbCkge1xuICBpZiAodGhpcy5pc0RyYWdnaW5nIHx8IGV2ZW50LnR5cGUgPT09IFwidG91Y2hlbmRcIikge1xuICAgIGxldCBlbmRZO1xuICAgIGlmIChldmVudC50eXBlID09PSBcInRvdWNoZW5kXCIpIHtcbiAgICAgIGVuZFkgPSBldmVudC5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRZO1xuICAgIH0gZWxzZSBpZiAoZXZlbnQudHlwZSA9PT0gXCJtb3VzZXVwXCIpIHtcbiAgICAgIGVuZFkgPSBldmVudC5jbGllbnRZO1xuICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucHJldmVudERyYWcgfHwgIXRoaXMuaGFzTW92ZWQpIHtcbiAgICAgIHRoaXMuc3R5bGUuYm90dG9tID0gXCIwXCI7IC8vINCV0YHQu9C4INC/0LXRgNC10LzQtdGJ0LXQvdC40LUg0L/RgNC10LTQvtGC0LLRgNCw0YnQtdC90L4g0LjQu9C4INC00LLQuNC20LXQvdC40Y8g0L3QtSDQsdGL0LvQviwg0YHQsdGA0L7RgdC40YLRjCDQv9C+0LfQuNGG0LjRjiDRjdC70LXQvNC10L3RgtCwXG4gICAgICB0aGlzLnByZXZlbnREcmFnID0gZmFsc2U7IC8vINCh0LHRgNC+0YEg0YTQu9Cw0LPQsCDQv9GA0LXQtNC+0YLQstGA0LDRidC10L3QuNGPINC/0LXRgNC10LzQtdGJ0LXQvdC40Y9cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZGVsdGFZID0gZW5kWSAtIHRoaXMuc3RhcnRZO1xuICAgIGlmIChkZWx0YVkgPiA1MCAmJiBzY3JvbGwuc2Nyb2xsVG9wID09PSAwKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IFwiMFwiO1xuICAgIH1cblxuICAgIHRoaXMucHJldmVudERyYWcgPSBmYWxzZTsgLy8g0KHQsdGA0L7RgSDRhNC70LDQs9CwINC/0YDQtdC00L7RgtCy0YDQsNGJ0LXQvdC40Y8g0L/QtdGA0LXQvNC10YnQtdC90LjRj1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldHVwTW9kYWxFdmVudHMobW9kYWwsIHNjcm9sbCkge1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RvcFByb3BhZ2F0aW9uKTtcbiAgc2Nyb2xsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHN0b3BQcm9wYWdhdGlvbik7XG5cbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaGFuZGxlU3RhcnQuY2FsbChtb2RhbCwgZXZlbnQsIHNjcm9sbCk7XG4gIH0pO1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGhhbmRsZU1vdmUuY2FsbChtb2RhbCwgZXZlbnQsIHNjcm9sbCk7XG4gIH0pO1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaGFuZGxlRW5kLmNhbGwobW9kYWwsIGV2ZW50LCBzY3JvbGwpO1xuICB9KTtcblxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGhhbmRsZVN0YXJ0LmNhbGwobW9kYWwsIGV2ZW50LCBzY3JvbGwpO1xuICB9KTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBoYW5kbGVNb3ZlLmNhbGwobW9kYWwsIGV2ZW50LCBzY3JvbGwpO1xuICB9KTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaGFuZGxlRW5kLmNhbGwobW9kYWwsIGV2ZW50LCBzY3JvbGwpO1xuICB9KTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgbW9kYWwuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgIG1vZGFsLnByZXZlbnREcmFnID0gZmFsc2U7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBtb2RhbC5zdHlsZS5ib3R0b20gPSBcIjBcIlxufVxuXG5mdW5jdGlvbiByZWdQaG9uZShpbnB1dCkge1xuICByZXR1cm4gaW5wdXQudmFsdWUucmVwbGFjZSgvXFxEL2csICcnKTtcbn1cblxuZnVuY3Rpb24gaW5wdXRQaG9uZShlKSB7XG4gIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xuICBsZXQgaW5wdXROdW1iZXJWYWx1ZSA9IHJlZ1Bob25lKGlucHV0KTtcbiAgbGV0IGZvcm1hdHRlZElucHV0VmFsdWUgPSAnJztcbiAgbGV0IHNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnRcbiAgLy8g0JXRgdC70Lgg0LIg0LjQvdC/0YPRgiDQstCy0LXQtNC10L3RiyDRgdC40LzQvtCy0LvRiyDQvdC1INGB0L7QvtGC0LLQtdGC0YHQstGD0Y7RidC40LUg0YDQtdCz0YPQu9GP0YDQutC4LCDRgtC+INC30L3QsNGH0LXQvdC40LUg0LjQvdC/0YPRgtCwINGB0YLQsNC90L7QstC40YLRgdGPINC/0YPRgdGC0YvQvFxuICBpZiAoIWlucHV0TnVtYmVyVmFsdWUpIHJldHVybiBpbnB1dC52YWx1ZSA9ICcnXG4gIC8vINCSINGN0YLQvtC5INGH0LDRgdGC0Lgg0Y8g0L3QtSDRgdC+0LLRgdC10Lwg0L/QvtC90LjQvNCw0Y4g0YfRgtC+INC/0YDQvtC40YHRhdC+0LTQuNGCXG4gIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggIT0gc2VsZWN0aW9uU3RhcnQpIHtcbiAgICBpZiAoZS5kYXRhICYmIC9cXEQvZy50ZXN0KGUuZGF0YSkpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gaW5wdXROdW1iZXJWYWx1ZVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChbJzcnLCAnOCcsICc5J10uaW5jbHVkZXMoaW5wdXROdW1iZXJWYWx1ZVswXSkpIHtcbiAgICAvLyDQldGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCDQtNC10LLRj9GC0YwsINGC0L7Qs9C00LAg0LzRiyDQt9Cw0LzQtdC90Y/QtdC8INC/0LXRgNCy0YPRjiDRhtC40YTRgNGDINC90LAgNyDQuCDQtNC10LLRj9GC0LrRgyDQtNC10LvQsNC10Lwg0LLRgtC+0YDQvtC5INGG0LjRhNGA0L7QuVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlWzBdID09ICc5JykgaW5wdXROdW1iZXJWYWx1ZSA9ICc3JyArIGlucHV0TnVtYmVyVmFsdWU7XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWVbMF0gPT0gJzgnKSBpbnB1dE51bWJlclZhbHVlID0gJzcnXG4gICAgLy8g0JXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAgNywg0YLQvtCz0LTQsCDQt9C90LDRh9C10L3QuNC1INC40L3Qv9GD0YLQsCDQvdCw0YfQuNC90LDQtdGC0YHRjyDRgSArNywg0LXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAgOCwg0YLQvtCz0LTQsCDQt9C90LDRh9C10L3QuNC1INC90LDRh9C40L3QsNC10YLRgdGPINGBIDhcbiAgICBsZXQgZmlyc3RTeW1ib2wgPSAnKzcnO1xuICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBmaXJzdFN5bWJvbCArICcgJztcbiAgICAvLyDQldGB0LvQuCDQsiDQuNC90L/Rg9GC0LUg0LHQvtC70YzRiNC1INC+0LTQvdC+0Lkg0YbQuNGE0YDRiyDQtNC+0LHQsNCy0LvRj9C10Lwg0YHQutC+0LHQutGDINC+0YLQutGA0YvRgtC40Y8g0Lgg0YLQsNC6INC00LDQu9C10LVcbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcoJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDEsIDQpXG4gICAgfVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+PSA1KSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcpICcgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg0LCA3KVxuICAgIH1cbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gOCkge1xuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg3LCA5KVxuICAgIH1cbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gMTApIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJy0nICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoOSwgMTEpO1xuICAgIH1cbiAgfSBlbHNlIHsgLy/QldGB0LvQuCDQstCy0L7QtNC40LzQvtC1INGH0LjRgdC70L4g0L3QtSA3LCA4INC40LvQuCA5INGC0L7Qs9C00LAg0LTQvtCx0LDQstC70Y/QtdC8ICvQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0LLQstC10LTQtdC90L7QtSDRh9C40YHQu9C+XG4gICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9ICcrNyAoOScgKyBpbnB1dE51bWJlclZhbHVlO1xuICB9XG4gIGlucHV0LnZhbHVlID0gZm9ybWF0dGVkSW5wdXRWYWx1ZVxufVxuXG5mdW5jdGlvbiBvbmVQaG9uZUtleURvd24oZSkge1xuICBsZXQgaW5wdXQgPSBlLnRhcmdldDtcbiAgaWYgKHJlZ1Bob25lKGlucHV0KS5sZW5ndGggPT0gMSAmJiBlLmtleUNvZGUgPT09IDgpIHtcbiAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dDbGVhcihpbnB1dCwgYnRuKSB7XG4gIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgYnRuLmRpc2FibGVkID0gZmFsc2VcbiAgfSBlbHNlIHtcbiAgICBidG4uZGlzYWJsZWQgPSB0cnVlXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJJbnB1dChpbnB1dCkge1xuICBpbnB1dC52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNvdW50Q2hhbmdlKGNvdW50LCBnb29kcykge1xuICBjb25zdCBzcGFuID0gY291bnQucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuICBjb25zdCBtaW51cyA9IGNvdW50LmZpcnN0RWxlbWVudENoaWxkO1xuICBjb25zdCBwbHVzID0gY291bnQubGFzdEVsZW1lbnRDaGlsZDtcblxuICBtaW51cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoc3Bhbi50ZXh0Q29udGVudCkgLSAxXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IG51bTtcbiAgICBpZiAoISFnb29kcykge1xuICAgICAgZ29vZHMudGV4dENvbnRlbnQgPSBgJHtudW19INGI0YIuYFxuICAgIH1cbiAgICBkaXNhYmxlZE1pbnVzKG51bSwgbWludXMpXG4gIH0pXG5cbiAgcGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoc3Bhbi50ZXh0Q29udGVudCkgKyAxXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IG51bTtcbiAgICBpZiAoISFnb29kcykge1xuICAgICAgZ29vZHMudGV4dENvbnRlbnQgPSBgJHtudW19INGI0YIuYFxuICAgIH1cbiAgICBkaXNhYmxlZE1pbnVzKG51bSwgbWludXMpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRpc2FibGVkTWludXMobnVtLCBidG4pIHtcbiAgaWYgKG51bSA8IDEpIHtcbiAgICBidG4uZGlzYWJsZWQgPSB0cnVlXG4gIH0gZWxzZSB7XG4gICAgYnRuLmRpc2FibGVkID0gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBhY2NvcmRpb25BY3RpdmUoaXRlbSkge1xuICBpdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImlzLXNob3dcIik7XG4gIGxldCBwYW5lbCA9IGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICBpZiAoIXBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xuICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IHBhbmVsLnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBhY2NvcmRpb25Ob3RBY3RpdmUoaXRlbSkge1xuICBpdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImlzLXNob3dcIik7XG4gIGxldCBwYW5lbCA9IGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICBpZiAocGFuZWwuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbFxuICB9XG59XG5cbmZ1bmN0aW9uIG9wZW5Db3VudGVyKGJ0biwgY291bnRlcikge1xuICBidG4uY2xhc3NMaXN0LmFkZChcIm5vdC1hY3RpdmVcIik7XG4gIGNvdW50ZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxufVxuXG5mdW5jdGlvbiBjbG9zZUNvdW50ZXIoYnRuLCBjb3VudGVyKSB7XG4gIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwibm90LWFjdGl2ZVwiKTtcbiAgY291bnRlci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNvdW50ZXIoc3BhbiwgYnRuLCBjb3VudGVyLCBvcGVyYXRvcikge1xuXG4gIGxldCBudW0gPSBOdW1iZXIoc3Bhbi50ZXh0Q29udGVudCk7XG5cbiAgaWYgKG9wZXJhdG9yID09PSBcInBsdXNcIikge1xuICAgIG51bSArPSAxXG4gIH0gZWxzZSB7XG4gICAgbnVtIC09IDFcbiAgfVxuXG4gIG51bSA8IDEgPyBjbG9zZUNvdW50ZXIoYnRuLCBjb3VudGVyKSA6IHNwYW4udGV4dENvbnRlbnQgPSBudW1cbn1cblxuZnVuY3Rpb24gcHJvZHVjdENhcmQoKSB7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1jYXJkXCIpO1xuICBjYXJkcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIGNvbnN0IGJ0bldyYXAgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1idG5zXCIpXG4gICAgY29uc3QgYnRuID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtYWRkXCIpXG4gICAgY29uc3QgY291bnRlciA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLWNvdW50ZXJcIilcbiAgICBjb25zdCBjb3VudCA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4gICAgY29uc3QgbWludXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1taW51c1wiKTtcbiAgICBjb25zdCBwbHVzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtcGx1c1wiKTtcblxuICAgIGJ0bldyYXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBvcGVuQ291bnRlcihidG4sIGNvdW50ZXIpXG4gICAgfSk7XG5cbiAgICBtaW51cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2hhbmdlQ291bnRlcihjb3VudCwgYnRuLCBjb3VudGVyLCBcIm1pbnVzXCIpXG4gICAgfSlcblxuICAgIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJwbHVzXCIpXG4gICAgfSlcbiAgfSlcbn1cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUxhYmVsKHRleHQpIHtcbiAgcmV0dXJuIGBcbiAgICA8bGFiZWwgY2xhc3M9XCJhZGRyZXNzX19sYWJlbFwiPlxuICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJhZGRyZXNzXCIgY2xhc3M9XCJhZGRyZXNzX19pbnB1dFwiLz5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYWRkcmVzc19fcmFkaW9cIj48L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzcz1cImFkZHJlc3NfX3RleHQgdGV4dC0xNlwiPlxuICAgICAgICAke3RleHR9XG4gICAgICA8L3NwYW4+XG4gICAgPC9sYWJlbD4gIFxuICBgXG59Il19
