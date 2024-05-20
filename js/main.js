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
  if (scroll.scrollTop !== 0) {
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
  if (this.preventDrag) return; // Если перемещение предотвращено, ничего не делаем

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

    if (this.preventDrag || !this.hasMoved) {
      this.style.bottom = "0"; // Если перемещение предотвращено или движения не было, сбросить позицию элемента

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImluaXRBcnJheVN3aXBlciIsImJ0blNvcnQiLCJxdWVyeVNlbGVjdG9yIiwic29ydE1vZGFsIiwic2Nyb2xsU29ydCIsImJ0bkZpbHRlciIsImZpbHRlck1vZGFsIiwic2Nyb2xsRmlsdGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJvcGVuTW9kYWwiLCJzY3JvbGxUbyIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsInJlbW92ZSIsInNldHVwTW9kYWxFdmVudHMiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyQnRuIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJ0b2dnbGUiLCJyZXN0YXVyYW50c0ZpbHRlckJ0biIsImVsZW0iLCJpbnB1dFNlYXJjaCIsImJ0bkNsZWFyU2VhcmNoIiwiaW5wdXRTZWFyY2hMaXN0Iiwic2hvd0NsZWFyIiwidmFsdWUiLCJsZW5ndGgiLCJjbGVhcklucHV0IiwiYWRkcmVzc0J0biIsImFkZEJ0biIsImFkZHJlc3NTZWFyY2giLCJmb3JtQWRkcmVzc1NlYXJjaCIsImFkZHJlc3NMaXN0IiwiZGVsaXZlcnlCdG4iLCJwYXJlbnRFbGVtZW50IiwiYWNjb3JkaW9uTm90QWN0aXZlIiwiYWNjb3JkaW9uQWN0aXZlIiwic2V0VGltZW91dCIsImZvY3VzIiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsImxhYmVsIiwiY3JlYXRlTGFiZWwiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ0YXJnZXQiLCJ0ZWwiLCJpbnB1dFBob25lIiwib25lUGhvbmVLZXlEb3duIiwiYmFza2V0RGVsZXRlIiwibW9kYWxEZWxldGUiLCJib290c3RyYXAiLCJNb2RhbCIsImNhcmRzIiwiY291bnQiLCJjYXJkIiwiY291bnRlciIsImdvb2RzIiwiY291bnRDaGFuZ2UiLCJzaG93IiwibW9kYWxQaG9uZSIsImNoYW5nZVBob25lQnRuIiwicGhvbmVOdW0iLCJpbnB1dFRlbCIsImlucHV0QnRuIiwia2V5Q29kZSIsInRleHRDb250ZW50IiwiYnRucyIsImluZGV4IiwiaW5kZXhFbGVtIiwibW9kYWxOYW1lIiwiY2hhbmdlTmFtZUJ0biIsIm5hbWVTcGFuIiwiaW5wdXROYW1lIiwia2V5IiwicHJvZHVjdENhcmQiLCJzd2lwZXIiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwibWludXMiLCJwbHVzIiwib3BlbkNvdW50ZXIiLCJjaGFuZ2VDb3VudGVyIiwiaW5pdFN3aXBlciIsImNvbnRhaW5lciIsInN3aXBlckJsb2NrIiwiZXZlbnQiLCJoYW5kbGVTdGFydCIsInNjcm9sbCIsInNjcm9sbFRvcCIsInByZXZlbnREcmFnIiwidHlwZSIsInN0YXJ0WSIsInRvdWNoZXMiLCJjbGllbnRZIiwiaXNEcmFnZ2luZyIsImhhc01vdmVkIiwiaGFuZGxlTW92ZSIsImVuZFkiLCJkZWx0YVkiLCJzdHlsZSIsImJvdHRvbSIsImhhbmRsZUVuZCIsImNoYW5nZWRUb3VjaGVzIiwibW9kYWwiLCJjYWxsIiwicmVnUGhvbmUiLCJyZXBsYWNlIiwiaW5wdXROdW1iZXJWYWx1ZSIsImZvcm1hdHRlZElucHV0VmFsdWUiLCJzZWxlY3Rpb25TdGFydCIsImRhdGEiLCJ0ZXN0IiwiaW5jbHVkZXMiLCJmaXJzdFN5bWJvbCIsInN1YnN0cmluZyIsImRpc2FibGVkIiwic3BhbiIsImZpcnN0RWxlbWVudENoaWxkIiwibGFzdEVsZW1lbnRDaGlsZCIsIm51bSIsIk51bWJlciIsImRpc2FibGVkTWludXMiLCJpdGVtIiwicGFuZWwiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJtYXhIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJjbG9zZUNvdW50ZXIiLCJvcGVyYXRvciIsImJ0bldyYXAiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFKLEVB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QUFuQixDQUFaO0lBQ0EsSUFBTTRELE9BQU8sR0FBR25DLElBQUksQ0FBQ3pCLGFBQUwsQ0FBbUIsa0JBQW5CLENBQWhCO0lBQ0EsSUFBTTBELEtBQUssR0FBR0UsT0FBTyxDQUFDNUQsYUFBUixDQUFzQixNQUF0QixDQUFkO0lBQ0EsSUFBTW9GLEtBQUssR0FBR3hCLE9BQU8sQ0FBQzVELGFBQVIsQ0FBc0IsZ0JBQXRCLENBQWQ7SUFDQSxJQUFNcUYsSUFBSSxHQUFHekIsT0FBTyxDQUFDNUQsYUFBUixDQUFzQixlQUF0QixDQUFiO0lBRUF1SSxPQUFPLENBQUNqSSxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFBQyxDQUFDLEVBQUk7TUFDckNBLENBQUMsQ0FBQ3FDLGNBQUY7SUFDRCxDQUZEO0lBR0F0QixHQUFHLENBQUNoQixnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUFNO01BQ2xDZ0YsV0FBVyxDQUFDaEUsR0FBRCxFQUFNc0MsT0FBTixDQUFYO0lBQ0QsQ0FGRDtJQUlBd0IsS0FBSyxDQUFDOUUsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBTTtNQUNwQ2lGLGFBQWEsQ0FBQzdCLEtBQUQsRUFBUXBDLEdBQVIsRUFBYXNDLE9BQWIsRUFBc0IsT0FBdEIsQ0FBYjtJQUNELENBRkQ7SUFJQXlCLElBQUksQ0FBQy9FLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQU07TUFDbkNpRixhQUFhLENBQUM3QixLQUFELEVBQVFwQyxHQUFSLEVBQWFzQyxPQUFiLEVBQXNCLE1BQXRCLENBQWI7SUFDRCxDQUZEO0VBR0QsQ0F0QkQ7QUF1QkQ7O0FBSUQsU0FBU2IsV0FBVCxDQUFxQnlGLElBQXJCLEVBQTJCO0VBQ3pCLHNPQUtRQSxJQUxSO0FBU0QiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZGV4XCIpKSB7XG4gIGluaXRBcnJheVN3aXBlcigpO1xuXG4gIGNvbnN0IGJ0blNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRzX19zb3J0XCIpO1xuICBjb25zdCBzb3J0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdcIik7XG4gIGNvbnN0IHNjcm9sbFNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdfX2JveFwiKVxuICBjb25zdCBidG5GaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRzX19maWx0ZXJcIik7XG4gIGNvbnN0IGZpbHRlck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJcIik7XG4gIGNvbnN0IHNjcm9sbEZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyX19ib3hcIik7XG4gIGJ0blNvcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBvcGVuTW9kYWwoc29ydE1vZGFsKVxuICAgIHNjcm9sbFNvcnQuc2Nyb2xsVG8oMCwgMClcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICAgIGlmIChmaWx0ZXJNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIGZpbHRlck1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9XG4gIH0pXG4gIGJ0bkZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIG9wZW5Nb2RhbChmaWx0ZXJNb2RhbClcbiAgICBzY3JvbGxGaWx0ZXIuc2Nyb2xsVG8oMCwgMClcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICAgIGlmIChzb3J0TW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBzb3J0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIH1cbiAgfSlcblxuICBzZXR1cE1vZGFsRXZlbnRzKHNvcnRNb2RhbCwgc2Nyb2xsU29ydClcbiAgc2V0dXBNb2RhbEV2ZW50cyhmaWx0ZXJNb2RhbCwgc2Nyb2xsRmlsdGVyKVxuICBjb25zb2xlLmxvZyhzY3JvbGxTb3J0KVxuXG4gIGNvbnN0IGZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2J0bicpO1xuXG4gIGZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IHJlc3RhdXJhbnRzRmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3RhdXJhbnRzX19maWx0ZXJzLWJ0bicpXG5cbiAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlc3RhdXJhbnRzRmlsdGVyQnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0Jyk7XG4gIGNvbnN0IGJ0bkNsZWFyU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dC1jbGVhcicpXG4gIGNvbnN0IGlucHV0U2VhcmNoTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQtbGlzdCcpXG4gIGlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgYnRuQ2xlYXJTZWFyY2gpXG4gICAgaWYgKGlucHV0U2VhcmNoLnZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dFNlYXJjaExpc3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG4gIGJ0bkNsZWFyU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJJbnB1dChpbnB1dFNlYXJjaClcbiAgICBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGJ0bkNsZWFyU2VhcmNoKVxuXG4gICAgaWYgKGlucHV0U2VhcmNoLnZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dFNlYXJjaExpc3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG5cblxuXG4gIGNvbnN0IGFkZHJlc3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcmVzcy1ibG9jay1idG4nKVxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkcmVzcy1ibG9jay1hZGQnKVxuICBjb25zdCBhZGRyZXNzU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHJlc3MtYmxvY2stc2VhcmNoJylcbiAgY29uc3QgZm9ybUFkZHJlc3NTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLXNlYXJjaC1mb3JtXCIpXG4gIGNvbnN0IGFkZHJlc3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRyZXNzLWJsb2NrLWxpc3RcIilcblxuICBjb25zdCBkZWxpdmVyeUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaGVhZGVyX19kZWxpdmVyeS1idG5cIilcbiAgZGVsaXZlcnlCdG5bMF0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuXG4gIGRlbGl2ZXJ5QnRuLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGRlbGl2ZXJ5QnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9KVxuICB9KVxuXG4gIGFkZHJlc3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkcmVzc0J0bi5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImlzLXNob3dcIikgPyBhY2NvcmRpb25Ob3RBY3RpdmUoYWRkcmVzc0J0bikgOiBhY2NvcmRpb25BY3RpdmUoYWRkcmVzc0J0bilcbiAgfSlcblxuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGZvcm1BZGRyZXNzU2VhcmNoLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5mb2N1cygpO1xuICAgIH0sIDMwMClcbiAgfSlcblxuICBmb3JtQWRkcmVzc1NlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW5wdXQgPSBmb3JtQWRkcmVzc1NlYXJjaC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIilcbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUxhYmVsKGlucHV0LnZhbHVlKTtcbiAgICBhZGRyZXNzTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGxhYmVsKTtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIXNvcnRNb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWJ0blNvcnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBzb3J0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFmaWx0ZXJNb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWJ0bkZpbHRlci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGZpbHRlck1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghYWRkcmVzc0J0bi5wYXJlbnRFbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgYWNjb3JkaW9uTm90QWN0aXZlKGFkZHJlc3NCdG4pXG4gICAgICBhZGRyZXNzU2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0aG9yaXphdGlvblwiKSkge1xuICBjb25zdCB0ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGhvcml6YXRpb25fX2lucHV0W3R5cGU9J3RlbCddXCIpO1xuICB0ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgaW5wdXRQaG9uZShlKVxuICB9KVxuICB0ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBvbmVQaG9uZUtleURvd24oZSlcbiAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFza2V0XCIpKSB7XG4gIGNvbnN0IGJhc2tldERlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRfX2hlYWRlci1kZWxldGUnKTtcbiAgY29uc3QgbW9kYWxEZWxldGUgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtbW9kYWwtZGVsZXRlXCIpKVxuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYXNrZXRfX3NlbGVjdGVkLWl0ZW0nKVxuXG4gIGNvbnN0IGNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2tldF9fY291bnQtY291bnQnKVxuXG4gIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgY29uc3QgY291bnRlciA9IGNhcmQucXVlcnlTZWxlY3RvcignLmJhc2tldF9fc2VsZWN0ZWQtaXRlbS1jb3VudGVyJylcbiAgICBjb25zdCBnb29kcyA9IGNhcmQucXVlcnlTZWxlY3RvcignLmJhc2tldF9fc2VsZWN0ZWQtaXRlbS1jb3VudCcpXG4gICAgY291bnRDaGFuZ2UoY291bnRlciwgZ29vZHMpO1xuICB9KVxuXG4gIGJhc2tldERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtb2RhbERlbGV0ZS5zaG93KClcbiAgfSlcblxuICBpbml0QXJyYXlTd2lwZXIoKTtcblxuICBjb3VudENoYW5nZShjb3VudClcblxuICBjb25zdCBtb2RhbFBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tbW9kYWxcIilcbiAgY29uc3QgY2hhbmdlUGhvbmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1waG9uZVwiKVxuICBjb25zdCBwaG9uZU51bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLXBob25lLW51bVwiKVxuICBjb25zdCBpbnB1dFRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLW1vZGFsLWlucHV0XCIpXG4gIGNvbnN0IGlucHV0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tbW9kYWwtYnRuXCIpXG5cbiAgaW5wdXRUZWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7XG4gICAgaW5wdXRQaG9uZShlKVxuICB9KVxuICBpbnB1dFRlbC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIG9uZVBob25lS2V5RG93bihlKVxuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBwaG9uZU51bS50ZXh0Q29udGVudCA9IGlucHV0VGVsLnZhbHVlXG4gICAgICBpbnB1dFRlbC52YWx1ZSA9ICcnXG4gICAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxuICBpbnB1dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBob25lTnVtLnRleHRDb250ZW50ID0gaW5wdXRUZWwudmFsdWVcbiAgICBpbnB1dFRlbC52YWx1ZSA9ICcnXG4gICAgbW9kYWxQaG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGNoYW5nZVBob25lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWxQaG9uZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmICghbW9kYWxQaG9uZS5jb250YWlucyhlLnRhcmdldCkgJiYgIWNoYW5nZVBob25lQnRuLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgbW9kYWxQaG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VjY2Vzc1wiKSkge1xuICBpbml0QXJyYXlTd2lwZXIoKTtcbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWNjZXNzX19ncmFkZS1zdGFyJyk7XG4gIGJ0bnMuZm9yRWFjaCgoYnRuLCBpbmRleCkgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGJ0bnMuZm9yRWFjaCgoZWxlbSwgaW5kZXhFbGVtKSA9PiB7XG4gICAgICAgIGlmIChpbmRleEVsZW0gPD0gaW5kZXgpIHtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NvdW50XCIpKSB7XG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRyZXNzLWJsb2NrLWFkZCcpO1xuICBjb25zdCBhZGRyZXNzU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHJlc3MtYmxvY2stc2VhcmNoJyk7XG4gIGNvbnN0IGZvcm1BZGRyZXNzU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1zZWFyY2gtZm9ybVwiKVxuICBjb25zdCBhZGRyZXNzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkcmVzcy1ibG9jay1saXN0XCIpXG5cbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZHJlc3NTZWFyY2guY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmb3JtQWRkcmVzc1NlYXJjaC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuZm9jdXMoKTtcbiAgICB9LCAzMDApXG4gIH0pXG5cbiAgZm9ybUFkZHJlc3NTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGlucHV0ID0gZm9ybUFkZHJlc3NTZWFyY2gucXVlcnlTZWxlY3RvcihcImlucHV0XCIpXG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVMYWJlbChpbnB1dC52YWx1ZSk7XG4gICAgYWRkcmVzc0xpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBsYWJlbCk7XG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIGFkZHJlc3NTZWFyY2guY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFhZGRyZXNzU2VhcmNoLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYWRkQnRuLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBtb2RhbE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbW9kYWxcIilcbiAgY29uc3QgY2hhbmdlTmFtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1uYW1lLXdyYXBcIilcbiAgY29uc3QgbmFtZVNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbmFtZVwiKVxuICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbW9kYWwtaW5wdXRcIilcbiAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbW9kYWwtYnRuXCIpXG5cbiAgaW5wdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IGlucHV0TmFtZS52YWx1ZVxuICAgIGlucHV0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgaW5wdXROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IGlucHV0TmFtZS52YWx1ZVxuICAgICAgaW5wdXROYW1lLnZhbHVlID0gXCJcIjtcbiAgICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcblxuICBjaGFuZ2VOYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKCFtb2RhbE5hbWUuY29udGFpbnMoZS50YXJnZXQpICYmICFjaGFuZ2VOYW1lQnRuLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9ja1wiKSkge1xuICBpbml0QXJyYXlTd2lwZXIoKTtcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkXCIpKSB7XG4gICAgcHJvZHVjdENhcmQoKTtcbiAgfVxuXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3RhdXJhbnRcIikpIHtcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkXCIpKSB7XG4gICAgcHJvZHVjdENhcmQoKTtcbiAgfVxuXG4gIGNvbnN0IGJ0blNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRfX3NldHRpbmdzLXNvcnRcIik7XG4gIGNvbnN0IHNvcnRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ1wiKTtcbiAgY29uc3Qgc2Nyb2xsU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ19fYm94XCIpXG4gIGNvbnN0IGJ0bkZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudF9fc2V0dGluZ3MtZmlsdGVyXCIpO1xuICBjb25zdCBmaWx0ZXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyXCIpO1xuICBjb25zdCBzY3JvbGxGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcl9fYm94XCIpO1xuXG5cbiAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0Jyk7XG4gIGNvbnN0IGJ0bkNsZWFyU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1pbnB1dC1jbGVhcicpXG4gIGNvbnN0IGlucHV0U2VhcmNoTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtaW5wdXQtbGlzdCcpXG4gIGlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgYnRuQ2xlYXJTZWFyY2gpXG4gICAgaWYgKGlucHV0U2VhcmNoLnZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dFNlYXJjaExpc3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG4gIGJ0bkNsZWFyU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJJbnB1dChpbnB1dFNlYXJjaClcbiAgICBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGJ0bkNsZWFyU2VhcmNoKVxuXG4gICAgaWYgKGlucHV0U2VhcmNoLnZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgIGlucHV0U2VhcmNoTGlzdC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dFNlYXJjaExpc3QuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG5cblxuICBidG5Tb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgb3Blbk1vZGFsKHNvcnRNb2RhbClcbiAgICBzY3JvbGxTb3J0LnNjcm9sbFRvKDAsIDApXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2NrJylcbiAgICBpZiAoZmlsdGVyTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBmaWx0ZXJNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgfVxuICB9KVxuICBidG5GaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBvcGVuTW9kYWwoZmlsdGVyTW9kYWwpXG4gICAgc2Nyb2xsRmlsdGVyLnNjcm9sbFRvKDAsIDApXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2NrJylcbiAgICBpZiAoc29ydE1vZGFsLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgc29ydE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9XG4gIH0pXG5cbiAgc2V0dXBNb2RhbEV2ZW50cyhzb3J0TW9kYWwsIHNjcm9sbFNvcnQpXG4gIHNldHVwTW9kYWxFdmVudHMoZmlsdGVyTW9kYWwsIHNjcm9sbEZpbHRlcilcblxuICBjb25zdCBmaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19idG4nKTtcblxuICBmaWx0ZXJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGJ0bi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFzb3J0TW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFidG5Tb3J0LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgc29ydE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghZmlsdGVyTW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFidG5GaWx0ZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBmaWx0ZXJNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG5cbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgcmVzdGF1cmFudHNGaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdGF1cmFudF9fc2V0dGluZ3MtZmlsdGVycy1idG4nKVxuXG4gIHJlc3RhdXJhbnRzRmlsdGVyQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZXN0YXVyYW50c0ZpbHRlckJ0bi5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKVxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB9KVxuICB9KVxuXG4gIGluaXRBcnJheVN3aXBlcigpO1xuXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RcIikpIHtcbiAgY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5wcm9kdWN0X190b3Atc3dpcGVyXCIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBzcGFjZUJldHdlZW46IDEwXG4gIH0pXG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZFwiKSkge1xuICAgIHByb2R1Y3RDYXJkKCk7XG4gIH1cblxuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1hZGRcIilcbiAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWNvdW50ZXJcIilcbiAgY29uc3QgY291bnQgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpO1xuICBjb25zdCBtaW51cyA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtY291bnRlci1taW51c1wiKTtcbiAgY29uc3QgcGx1cyA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtY291bnRlci1wbHVzXCIpO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG9wZW5Db3VudGVyKGJ0biwgY291bnRlcilcbiAgfSk7XG5cbiAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwibWludXNcIilcbiAgfSlcblxuICBwbHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2hhbmdlQ291bnRlcihjb3VudCwgYnRuLCBjb3VudGVyLCBcInBsdXNcIilcbiAgfSlcblxuICBpbml0QXJyYXlTd2lwZXIoKTtcbn1cblxuLy8g0KTRg9C90LrRhtC40LhcbmZ1bmN0aW9uIGluaXRTd2lwZXIoY29udGFpbmVyKSB7XG4gIHJldHVybiBuZXcgU3dpcGVyKGNvbnRhaW5lciwge1xuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgfSlcbn1cblxuZnVuY3Rpb24gaW5pdEFycmF5U3dpcGVyKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1zd2lwZXItaW5pdFwiKSkge1xuICAgIGNvbnN0IHN3aXBlckJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1zd2lwZXItaW5pdFwiKTtcbiAgICBzd2lwZXJCbG9jay5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgY29uc3Qgc3dpcGVyID0gaW5pdFN3aXBlcihlbGVtKVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG5cbmZ1bmN0aW9uIGhhbmRsZVN0YXJ0KGV2ZW50LCBzY3JvbGwpIHtcbiAgaWYgKHNjcm9sbC5zY3JvbGxUb3AgIT09IDApIHtcbiAgICB0aGlzLnByZXZlbnREcmFnID0gdHJ1ZTsgLy8g0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0YTQu9Cw0LMg0LTQu9GPINC/0YDQtdC00L7RgtCy0YDQsNGJ0LXQvdC40Y8g0L/QtdGA0LXQvNC10YnQtdC90LjRj1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnByZXZlbnREcmFnID0gZmFsc2U7IC8vINCh0LHRgNCw0YHRi9Cy0LDQtdC8INGE0LvQsNCzLCDQtdGB0LvQuCBzY3JvbGxUb3Ag0YDQsNCy0LXQvSAwXG4gIH1cblxuICBpZiAoZXZlbnQudHlwZSA9PT0gXCJ0b3VjaHN0YXJ0XCIpIHtcbiAgICB0aGlzLnN0YXJ0WSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSBcIm1vdXNlZG93blwiKSB7XG4gICAgdGhpcy5zdGFydFkgPSBldmVudC5jbGllbnRZO1xuICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG4gIH1cbiAgdGhpcy5oYXNNb3ZlZCA9IGZhbHNlOyAvLyDQlNC+0LHQsNCy0LvRj9C10Lwg0YTQu9Cw0LMg0LTQu9GPINC+0YLRgdC70LXQttC40LLQsNC90LjRjyDQtNCy0LjQttC10L3QuNGPXG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1vdmUoZXZlbnQsIHNjcm9sbCkge1xuICBpZiAodGhpcy5wcmV2ZW50RHJhZykgcmV0dXJuOyAvLyDQldGB0LvQuCDQv9C10YDQtdC80LXRidC10L3QuNC1INC/0YDQtdC00L7RgtCy0YDQsNGJ0LXQvdC+LCDQvdC40YfQtdCz0L4g0L3QtSDQtNC10LvQsNC10LxcblxuICBsZXQgZW5kWTtcbiAgaWYgKGV2ZW50LnR5cGUgPT09IFwidG91Y2htb3ZlXCIpIHtcbiAgICBlbmRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuICB9IGVsc2UgaWYgKGV2ZW50LnR5cGUgPT09IFwibW91c2Vtb3ZlXCIgJiYgdGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgZW5kWSA9IGV2ZW50LmNsaWVudFk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGRlbHRhWSA9IGVuZFkgLSB0aGlzLnN0YXJ0WTtcbiAgaWYgKGRlbHRhWSA+IDApIHtcbiAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IC1kZWx0YVkgKyBcInB4XCI7XG4gICAgdGhpcy5oYXNNb3ZlZCA9IHRydWU7IC8vINCe0YLQvNC10YfQsNC10LwsINGH0YLQviDQtNCy0LjQttC10L3QuNC1INC/0YDQvtC40LfQvtGI0LvQvlxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVuZChldmVudCwgc2Nyb2xsKSB7XG4gIGlmICh0aGlzLmlzRHJhZ2dpbmcgfHwgZXZlbnQudHlwZSA9PT0gXCJ0b3VjaGVuZFwiKSB7XG4gICAgbGV0IGVuZFk7XG4gICAgaWYgKGV2ZW50LnR5cGUgPT09IFwidG91Y2hlbmRcIikge1xuICAgICAgZW5kWSA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFk7XG4gICAgfSBlbHNlIGlmIChldmVudC50eXBlID09PSBcIm1vdXNldXBcIikge1xuICAgICAgZW5kWSA9IGV2ZW50LmNsaWVudFk7XG4gICAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcmV2ZW50RHJhZyB8fCAhdGhpcy5oYXNNb3ZlZCkge1xuICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSBcIjBcIjsgLy8g0JXRgdC70Lgg0L/QtdGA0LXQvNC10YnQtdC90LjQtSDQv9GA0LXQtNC+0YLQstGA0LDRidC10L3QviDQuNC70Lgg0LTQstC40LbQtdC90LjRjyDQvdC1INCx0YvQu9C+LCDRgdCx0YDQvtGB0LjRgtGMINC/0L7Qt9C40YbQuNGOINGN0LvQtdC80LXQvdGC0LBcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgZGVsdGFZID0gZW5kWSAtIHRoaXMuc3RhcnRZO1xuICAgIGlmIChkZWx0YVkgPiA1MCAmJiBzY3JvbGwuc2Nyb2xsVG9wID09PSAwKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IFwiMFwiO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXR1cE1vZGFsRXZlbnRzKG1vZGFsLCBzY3JvbGwpIHtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0b3BQcm9wYWdhdGlvbik7XG4gIHNjcm9sbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBzdG9wUHJvcGFnYXRpb24pO1xuXG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGhhbmRsZVN0YXJ0LmNhbGwobW9kYWwsIGV2ZW50LCBzY3JvbGwpO1xuICB9KTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBoYW5kbGVNb3ZlLmNhbGwobW9kYWwsIGV2ZW50LCBzY3JvbGwpO1xuICB9KTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGhhbmRsZUVuZC5jYWxsKG1vZGFsLCBldmVudCwgc2Nyb2xsKTtcbiAgfSk7XG5cbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBoYW5kbGVTdGFydC5jYWxsKG1vZGFsLCBldmVudCwgc2Nyb2xsKTtcbiAgfSk7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaGFuZGxlTW92ZS5jYWxsKG1vZGFsLCBldmVudCwgc2Nyb2xsKTtcbiAgfSk7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGhhbmRsZUVuZC5jYWxsKG1vZGFsLCBldmVudCwgc2Nyb2xsKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2NrXCIpXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIG1vZGFsLnN0eWxlLmJvdHRvbSA9IFwiMFwiXG59XG5cbmZ1bmN0aW9uIHJlZ1Bob25lKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC52YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpO1xufVxuXG5mdW5jdGlvbiBpbnB1dFBob25lKGUpIHtcbiAgbGV0IGlucHV0ID0gZS50YXJnZXQ7XG4gIGxldCBpbnB1dE51bWJlclZhbHVlID0gcmVnUGhvbmUoaW5wdXQpO1xuICBsZXQgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9ICcnO1xuICBsZXQgc2VsZWN0aW9uU3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydFxuICAvLyDQldGB0LvQuCDQsiDQuNC90L/Rg9GCINCy0LLQtdC00LXQvdGLINGB0LjQvNC+0LLQu9GLINC90LUg0YHQvtC+0YLQstC10YLRgdCy0YPRjtGJ0LjQtSDRgNC10LPRg9C70Y/RgNC60LgsINGC0L4g0LfQvdCw0YfQtdC90LjQtSDQuNC90L/Rg9GC0LAg0YHRgtCw0L3QvtCy0LjRgtGB0Y8g0L/Rg9GB0YLRi9C8XG4gIGlmICghaW5wdXROdW1iZXJWYWx1ZSkgcmV0dXJuIGlucHV0LnZhbHVlID0gJydcbiAgLy8g0JIg0Y3RgtC+0Lkg0YfQsNGB0YLQuCDRjyDQvdC1INGB0L7QstGB0LXQvCDQv9C+0L3QuNC80LDRjiDRh9GC0L4g0L/RgNC+0LjRgdGF0L7QtNC40YJcbiAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCAhPSBzZWxlY3Rpb25TdGFydCkge1xuICAgIGlmIChlLmRhdGEgJiYgL1xcRC9nLnRlc3QoZS5kYXRhKSkge1xuICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dE51bWJlclZhbHVlXG4gICAgfVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKFsnNycsICc4JywgJzknXS5pbmNsdWRlcyhpbnB1dE51bWJlclZhbHVlWzBdKSkge1xuICAgIC8vINCV0YHQu9C4INC/0LXRgNCy0LDRjyDRhtC40YTRgNCwINC00LXQstGP0YLRjCwg0YLQvtCz0LTQsCDQvNGLINC30LDQvNC10L3Rj9C10Lwg0L/QtdGA0LLRg9GOINGG0LjRhNGA0YMg0L3QsCA3INC4INC00LXQstGP0YLQutGDINC00LXQu9Cw0LXQvCDQstGC0L7RgNC+0Lkg0YbQuNGE0YDQvtC5XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWVbMF0gPT0gJzknKSBpbnB1dE51bWJlclZhbHVlID0gJzcnICsgaW5wdXROdW1iZXJWYWx1ZTtcbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZVswXSA9PSAnOCcpIGlucHV0TnVtYmVyVmFsdWUgPSAnNydcbiAgICAvLyDQldGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCA3LCDRgtC+0LPQtNCwINC30L3QsNGH0LXQvdC40LUg0LjQvdC/0YPRgtCwINC90LDRh9C40L3QsNC10YLRgdGPINGBICs3LCDQtdGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCA4LCDRgtC+0LPQtNCwINC30L3QsNGH0LXQvdC40LUg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0YEgOFxuICAgIGxldCBmaXJzdFN5bWJvbCA9ICcrNyc7XG4gICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9IGZpcnN0U3ltYm9sICsgJyAnO1xuICAgIC8vINCV0YHQu9C4INCyINC40L3Qv9GD0YLQtSDQsdC+0LvRjNGI0LUg0L7QtNC90L7QuSDRhtC40YTRgNGLINC00L7QsdCw0LLQu9GP0LXQvCDRgdC60L7QsdC60YMg0L7RgtC60YDRi9GC0LjRjyDQuCDRgtCw0Log0LTQsNC70LXQtVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJygnICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoMSwgNClcbiAgICB9XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWUubGVuZ3RoID49IDUpIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJykgJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDQsIDcpXG4gICAgfVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+PSA4KSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICctJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDcsIDkpXG4gICAgfVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+PSAxMCkge1xuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg5LCAxMSk7XG4gICAgfVxuICB9IGVsc2UgeyAvL9CV0YHQu9C4INCy0LLQvtC00LjQvNC+0LUg0YfQuNGB0LvQviDQvdC1IDcsIDgg0LjQu9C4IDkg0YLQvtCz0LTQsCDQtNC+0LHQsNCy0LvRj9C10LwgK9C4INC00L7QsdCw0LLQu9GP0LXQvCDQstCy0LXQtNC10L3QvtC1INGH0LjRgdC70L5cbiAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gJys3ICg5JyArIGlucHV0TnVtYmVyVmFsdWU7XG4gIH1cbiAgaW5wdXQudmFsdWUgPSBmb3JtYXR0ZWRJbnB1dFZhbHVlXG59XG5cbmZ1bmN0aW9uIG9uZVBob25lS2V5RG93bihlKSB7XG4gIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xuICBpZiAocmVnUGhvbmUoaW5wdXQpLmxlbmd0aCA9PSAxICYmIGUua2V5Q29kZSA9PT0gOCkge1xuICAgIGlucHV0LnZhbHVlID0gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0NsZWFyKGlucHV0LCBidG4pIHtcbiAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICBidG4uZGlzYWJsZWQgPSBmYWxzZVxuICB9IGVsc2Uge1xuICAgIGJ0bi5kaXNhYmxlZCA9IHRydWVcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhcklucHV0KGlucHV0KSB7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gY291bnRDaGFuZ2UoY291bnQsIGdvb2RzKSB7XG4gIGNvbnN0IHNwYW4gPSBjb3VudC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gIGNvbnN0IG1pbnVzID0gY291bnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gIGNvbnN0IHBsdXMgPSBjb3VudC5sYXN0RWxlbWVudENoaWxkO1xuXG4gIG1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihzcGFuLnRleHRDb250ZW50KSAtIDFcbiAgICBzcGFuLnRleHRDb250ZW50ID0gbnVtO1xuICAgIGlmICghIWdvb2RzKSB7XG4gICAgICBnb29kcy50ZXh0Q29udGVudCA9IGAke251bX0g0YjRgi5gXG4gICAgfVxuICAgIGRpc2FibGVkTWludXMobnVtLCBtaW51cylcbiAgfSlcblxuICBwbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihzcGFuLnRleHRDb250ZW50KSArIDFcbiAgICBzcGFuLnRleHRDb250ZW50ID0gbnVtO1xuICAgIGlmICghIWdvb2RzKSB7XG4gICAgICBnb29kcy50ZXh0Q29udGVudCA9IGAke251bX0g0YjRgi5gXG4gICAgfVxuICAgIGRpc2FibGVkTWludXMobnVtLCBtaW51cylcbiAgfSlcbn1cblxuZnVuY3Rpb24gZGlzYWJsZWRNaW51cyhudW0sIGJ0bikge1xuICBpZiAobnVtIDwgMSkge1xuICAgIGJ0bi5kaXNhYmxlZCA9IHRydWVcbiAgfSBlbHNlIHtcbiAgICBidG4uZGlzYWJsZWQgPSBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGFjY29yZGlvbkFjdGl2ZShpdGVtKSB7XG4gIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaXMtc2hvd1wiKTtcbiAgbGV0IHBhbmVsID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGlmICghcGFuZWwuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFjY29yZGlvbk5vdEFjdGl2ZShpdGVtKSB7XG4gIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtc2hvd1wiKTtcbiAgbGV0IHBhbmVsID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGlmIChwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsXG4gIH1cbn1cblxuZnVuY3Rpb24gb3BlbkNvdW50ZXIoYnRuLCBjb3VudGVyKSB7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwibm90LWFjdGl2ZVwiKTtcbiAgY291bnRlci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG59XG5cbmZ1bmN0aW9uIGNsb3NlQ291bnRlcihidG4sIGNvdW50ZXIpIHtcbiAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJub3QtYWN0aXZlXCIpO1xuICBjb3VudGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbn1cblxuZnVuY3Rpb24gY2hhbmdlQ291bnRlcihzcGFuLCBidG4sIGNvdW50ZXIsIG9wZXJhdG9yKSB7XG5cbiAgbGV0IG51bSA9IE51bWJlcihzcGFuLnRleHRDb250ZW50KTtcblxuICBpZiAob3BlcmF0b3IgPT09IFwicGx1c1wiKSB7XG4gICAgbnVtICs9IDFcbiAgfSBlbHNlIHtcbiAgICBudW0gLT0gMVxuICB9XG5cbiAgbnVtIDwgMSA/IGNsb3NlQ291bnRlcihidG4sIGNvdW50ZXIpIDogc3Bhbi50ZXh0Q29udGVudCA9IG51bVxufVxuXG5mdW5jdGlvbiBwcm9kdWN0Q2FyZCgpIHtcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWNhcmRcIik7XG4gIGNhcmRzLmZvckVhY2goZWxlbSA9PiB7XG4gICAgY29uc3QgYnRuV3JhcCA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLWJ0bnNcIilcbiAgICBjb25zdCBidG4gPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1hZGRcIilcbiAgICBjb25zdCBjb3VudGVyID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtY291bnRlclwiKVxuICAgIGNvbnN0IGNvdW50ID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbiAgICBjb25zdCBtaW51cyA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLW1pbnVzXCIpO1xuICAgIGNvbnN0IHBsdXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1wbHVzXCIpO1xuXG4gICAgYnRuV3JhcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG9wZW5Db3VudGVyKGJ0biwgY291bnRlcilcbiAgICB9KTtcblxuICAgIG1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwibWludXNcIilcbiAgICB9KVxuXG4gICAgcGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY2hhbmdlQ291bnRlcihjb3VudCwgYnRuLCBjb3VudGVyLCBcInBsdXNcIilcbiAgICB9KVxuICB9KVxufVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlTGFiZWwodGV4dCkge1xuICByZXR1cm4gYFxuICAgIDxsYWJlbCBjbGFzcz1cImFkZHJlc3NfX2xhYmVsXCI+XG4gICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImFkZHJlc3NcIiBjbGFzcz1cImFkZHJlc3NfX2lucHV0XCIvPlxuICAgICAgPHNwYW4gY2xhc3M9XCJhZGRyZXNzX19yYWRpb1wiPjwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYWRkcmVzc19fdGV4dCB0ZXh0LTE2XCI+XG4gICAgICAgICR7dGV4dH1cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2xhYmVsPiAgXG4gIGBcbn0iXX0=
