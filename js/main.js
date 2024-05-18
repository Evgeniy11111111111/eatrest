"use strict";

if (document.getElementById("index")) {
  var sliderOne = initSwiper(".main-stock__swiper-1");
  var sliderTwo = initSwiper(".main-stock__swiper-2");
  var sliderThree = initSwiper(".main-stock__swiper-3");
  var sliderFour = initSwiper(".main-stock__swiper-4");
  var sliderFive = initSwiper(".main-stock__swiper-5");
  var btnSort = document.querySelector(".restaurants__sort");
  var sortModal = document.querySelector(".sorting");
  var scrollSort = document.querySelector(".sorting__box");
  var btnFilter = document.querySelector(".restaurants__filter");
  var filterModal = document.querySelector(".filter");
  var scrollFilter = document.querySelector(".filter__box");
  btnSort.addEventListener('click', function (e) {
    e.stopPropagation();
    openModal(sortModal);
    document.body.classList.add('lock');

    if (filterModal.classList.contains("active")) {
      filterModal.classList.remove("active");
    }
  });
  btnFilter.addEventListener('click', function (e) {
    e.stopPropagation();
    openModal(filterModal);
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
      filterBtn.forEach(function (elem) {
        return elem.classList.remove("active");
      });
      btn.classList.add("active");
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
  var inputSearch = document.querySelector('.header__input');
  var btnClearSearch = document.querySelector('.header__search-clear');
  inputSearch.addEventListener('input', function () {
    showClear(inputSearch, btnClearSearch);
  });
  btnClearSearch.addEventListener("click", function () {
    clearInput(inputSearch);
    showClear(inputSearch, btnClearSearch);
  });
  var addressBtn = document.querySelector('.header__address-btn');
  var addBtn = document.querySelector('.header__address-add');
  var addressSearch = document.querySelector('.header__address-search');
  addressBtn.addEventListener('click', function () {
    addressBtn.parentElement.classList.contains("is-show") ? accordionNotActive(addressBtn) : accordionActive(addressBtn);
  });
  addBtn.addEventListener('click', function () {
    addressSearch.classList.add('active');
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
  var slider = initSwiper(".basket__swiper");
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
  var _slider = initSwiper(".success__ordered-swiper");

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
  var addAddress = document.querySelector('.account__address-add');
  var modal = document.querySelector('.account__address-search');

  var _inputSearch = document.querySelector('.account__address-search-input');

  var inputSearchBtn = document.querySelector('.account__address-search-btn');
  addAddress.addEventListener('click', function () {
    modal.classList.add('active');
  });

  _inputSearch.addEventListener('input', function () {
    return showClear(_inputSearch, inputSearchBtn);
  });

  inputSearchBtn.addEventListener('click', function () {
    clearInput(_inputSearch);
    showClear(_inputSearch, inputSearchBtn);
  });
  document.addEventListener('click', function (e) {
    if (!modal.contains(e.target) && !addAddress.contains(e.target)) {
      modal.classList.remove('active');
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
  var _sliderOne = initSwiper('.stock__block-swiper');

  var _sliderTwo = initSwiper('.stock__block-swiper-2');

  if (document.querySelector(".js-card")) {
    productCard();
  }
}

if (document.getElementById("restaurant")) {
  if (document.querySelector(".js-card")) {
    productCard();
  }

  var _inputSearch2 = document.querySelector(".restaurant__settings-search-input");

  var _inputSearchBtn = document.querySelector(".restaurant__settings-search-btn");

  var _btnSort = document.querySelector(".restaurant__settings-sort");

  var _sortModal = document.querySelector(".sorting");

  var _scrollSort = document.querySelector(".sorting__box");

  var _btnFilter = document.querySelector(".restaurant__settings-filter");

  var _filterModal = document.querySelector(".filter");

  var _scrollFilter = document.querySelector(".filter__box");

  _inputSearch2.addEventListener('input', function () {
    return showClear(_inputSearch2, _inputSearchBtn);
  });

  _inputSearchBtn.addEventListener('click', function () {
    clearInput(_inputSearch2);
    showClear(_inputSearch2, _inputSearchBtn);
  });

  _btnSort.addEventListener('click', function (e) {
    e.stopPropagation();
    openModal(_sortModal);
    document.body.classList.add('lock');

    if (_filterModal.classList.contains("active")) {
      _filterModal.classList.remove("active");
    }
  });

  _btnFilter.addEventListener('click', function (e) {
    e.stopPropagation();
    openModal(_filterModal);
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
      _filterBtn.forEach(function (elem) {
        return elem.classList.remove("active");
      });

      btn.classList.add("active");
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

  var swiper = initSwiper('.restaurant__stock-swiper');
  var swiper2 = initSwiper('.restaurant__offers-swiper');
  var swiper3 = initSwiper('.restaurant__offers-swiper-2');
}

if (document.getElementById("product")) {
  var _swiper = new Swiper(".product__top-swiper", {
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

  var _swiper2 = initSwiper(".product__additional-swiper");

  var _swiper3 = initSwiper(".product__additional-swiper-2");
} // Функции


function initSwiper(container) {
  return new Swiper(container, {
    slidesPerView: "auto",
    spaceBetween: 20
  });
}

function stopPropagation(event) {
  event.stopPropagation();
}

function handleTouchStart(event) {
  this.startY = event.touches[0].clientY;
}

function handleTouchMove(event) {
  var endY = event.touches[0].clientY;
  var deltaY = endY - this.startY;

  if (deltaY > 0) {
    this.style.bottom = -deltaY + "px";
  } else if (deltaY > 200) {
    this.classList.remove("active");
    document.body.classList.remove("lock");
  }

  this.startY = null;
}

function handleMouseDown(event) {
  this.startY = event.clientY;
  this.isDragging = true;
}

function handleMouseMove(event) {
  if (this.isDragging) {
    var endY = event.clientY;
    var deltaY = endY - this.startY;

    if (deltaY > 0) {
      this.style.bottom = -deltaY + "px";
    }
  }
}

function handleMouseUp(event) {
  if (this.isDragging) {
    var endY = event.clientY;
    var deltaY = endY - this.startY;

    if (deltaY > 50) {
      this.classList.remove("active");
      document.body.classList.remove("lock");
    } else {
      this.style.bottom = "0";
    }

    this.isDragging = false;
  }

  this.startY = null;
}

function setupModalEvents(modal, scroll) {
  modal.addEventListener("click", stopPropagation);
  scroll.addEventListener("touchstart", stopPropagation);
  scroll.addEventListener("mousedown", stopPropagation);
  scroll.addEventListener("touchmove", stopPropagation);
  modal.addEventListener("touchstart", handleTouchStart);
  modal.addEventListener("touchmove", handleTouchMove);
  modal.addEventListener("mousedown", handleMouseDown);
  modal.addEventListener("mousemove", handleMouseMove);
  modal.addEventListener("mouseup", handleMouseUp);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNsaWRlck9uZSIsImluaXRTd2lwZXIiLCJzbGlkZXJUd28iLCJzbGlkZXJUaHJlZSIsInNsaWRlckZvdXIiLCJzbGlkZXJGaXZlIiwiYnRuU29ydCIsInF1ZXJ5U2VsZWN0b3IiLCJzb3J0TW9kYWwiLCJzY3JvbGxTb3J0IiwiYnRuRmlsdGVyIiwiZmlsdGVyTW9kYWwiLCJzY3JvbGxGaWx0ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIm9wZW5Nb2RhbCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsInJlbW92ZSIsInNldHVwTW9kYWxFdmVudHMiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyQnRuIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJlbGVtIiwicmVzdGF1cmFudHNGaWx0ZXJCdG4iLCJpbnB1dFNlYXJjaCIsImJ0bkNsZWFyU2VhcmNoIiwic2hvd0NsZWFyIiwiY2xlYXJJbnB1dCIsImFkZHJlc3NCdG4iLCJhZGRCdG4iLCJhZGRyZXNzU2VhcmNoIiwicGFyZW50RWxlbWVudCIsImFjY29yZGlvbk5vdEFjdGl2ZSIsImFjY29yZGlvbkFjdGl2ZSIsInRhcmdldCIsInRlbCIsImlucHV0UGhvbmUiLCJvbmVQaG9uZUtleURvd24iLCJiYXNrZXREZWxldGUiLCJtb2RhbERlbGV0ZSIsImJvb3RzdHJhcCIsIk1vZGFsIiwiY2FyZHMiLCJjb3VudCIsImNhcmQiLCJjb3VudGVyIiwiZ29vZHMiLCJjb3VudENoYW5nZSIsInNob3ciLCJzbGlkZXIiLCJtb2RhbFBob25lIiwiY2hhbmdlUGhvbmVCdG4iLCJwaG9uZU51bSIsImlucHV0VGVsIiwiaW5wdXRCdG4iLCJrZXlDb2RlIiwidGV4dENvbnRlbnQiLCJ2YWx1ZSIsImJ0bnMiLCJpbmRleCIsImluZGV4RWxlbSIsImFkZEFkZHJlc3MiLCJtb2RhbCIsImlucHV0U2VhcmNoQnRuIiwibW9kYWxOYW1lIiwiY2hhbmdlTmFtZUJ0biIsIm5hbWVTcGFuIiwiaW5wdXROYW1lIiwia2V5IiwicHJvZHVjdENhcmQiLCJzd2lwZXIiLCJzd2lwZXIyIiwic3dpcGVyMyIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJtaW51cyIsInBsdXMiLCJvcGVuQ291bnRlciIsImNoYW5nZUNvdW50ZXIiLCJjb250YWluZXIiLCJldmVudCIsImhhbmRsZVRvdWNoU3RhcnQiLCJzdGFydFkiLCJ0b3VjaGVzIiwiY2xpZW50WSIsImhhbmRsZVRvdWNoTW92ZSIsImVuZFkiLCJkZWx0YVkiLCJzdHlsZSIsImJvdHRvbSIsImhhbmRsZU1vdXNlRG93biIsImlzRHJhZ2dpbmciLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVNb3VzZVVwIiwic2Nyb2xsIiwicmVnUGhvbmUiLCJpbnB1dCIsInJlcGxhY2UiLCJpbnB1dE51bWJlclZhbHVlIiwiZm9ybWF0dGVkSW5wdXRWYWx1ZSIsInNlbGVjdGlvblN0YXJ0IiwibGVuZ3RoIiwiZGF0YSIsInRlc3QiLCJpbmNsdWRlcyIsImZpcnN0U3ltYm9sIiwic3Vic3RyaW5nIiwiZGlzYWJsZWQiLCJzcGFuIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJsYXN0RWxlbWVudENoaWxkIiwibnVtIiwiTnVtYmVyIiwiZGlzYWJsZWRNaW51cyIsIml0ZW0iLCJwYW5lbCIsIm5leHRFbGVtZW50U2libGluZyIsIm1heEhlaWdodCIsInNjcm9sbEhlaWdodCIsImNsb3NlQ291bnRlciIsIm9wZXJhdG9yIiwiYnRuV3JhcCIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFKLEVBQXNDO0VBQ3BDLElBQU1DLFNBQVMsR0FBR0MsVUFBVSxDQUFDLHVCQUFELENBQTVCO0VBQ0EsSUFBTUMsU0FBUyxHQUFHRCxVQUFVLENBQUMsdUJB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dEIsYUFBTCxDQUFtQixjQUFuQixDQUFaO0lBQ0EsSUFBTTZDLE9BQU8sR0FBR3ZCLElBQUksQ0FBQ3RCLGFBQUwsQ0FBbUIsa0JBQW5CLENBQWhCO0lBQ0EsSUFBTTJDLEtBQUssR0FBR0UsT0FBTyxDQUFDN0MsYUFBUixDQUFzQixNQUF0QixDQUFkO0lBQ0EsSUFBTTRFLEtBQUssR0FBRy9CLE9BQU8sQ0FBQzdDLGFBQVIsQ0FBc0IsZ0JBQXRCLENBQWQ7SUFDQSxJQUFNNkUsSUFBSSxHQUFHaEMsT0FBTyxDQUFDN0MsYUFBUixDQUFzQixlQUF0QixDQUFiO0lBRUEwSCxPQUFPLENBQUNwSCxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFBQyxDQUFDLEVBQUk7TUFDckNBLENBQUMsQ0FBQ29ILGNBQUY7SUFDRCxDQUZEO0lBR0F0RyxHQUFHLENBQUNmLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQU07TUFBQ3dFLFdBQVcsQ0FBQ3pELEdBQUQsRUFBTXdCLE9BQU4sQ0FBWDtJQUEwQixDQUEvRDtJQUVBK0IsS0FBSyxDQUFDdEUsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBTTtNQUFDeUUsYUFBYSxDQUFDcEMsS0FBRCxFQUFRdEIsR0FBUixFQUFhd0IsT0FBYixFQUFzQixPQUF0QixDQUFiO0lBQTRDLENBQW5GO0lBRUFnQyxJQUFJLENBQUN2RSxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFNO01BQUN5RSxhQUFhLENBQUNwQyxLQUFELEVBQVF0QixHQUFSLEVBQWF3QixPQUFiLEVBQXNCLE1BQXRCLENBQWI7SUFBMkMsQ0FBakY7RUFDRCxDQWhCRDtBQWlCRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5kZXhcIikpIHtcbiAgY29uc3Qgc2xpZGVyT25lID0gaW5pdFN3aXBlcihcIi5tYWluLXN0b2NrX19zd2lwZXItMVwiKVxuICBjb25zdCBzbGlkZXJUd28gPSBpbml0U3dpcGVyKFwiLm1haW4tc3RvY2tfX3N3aXBlci0yXCIpXG4gIGNvbnN0IHNsaWRlclRocmVlID0gaW5pdFN3aXBlcihcIi5tYWluLXN0b2NrX19zd2lwZXItM1wiKVxuICBjb25zdCBzbGlkZXJGb3VyID0gaW5pdFN3aXBlcihcIi5tYWluLXN0b2NrX19zd2lwZXItNFwiKVxuICBjb25zdCBzbGlkZXJGaXZlID0gaW5pdFN3aXBlcihcIi5tYWluLXN0b2NrX19zd2lwZXItNVwiKVxuXG4gIGNvbnN0IGJ0blNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRzX19zb3J0XCIpO1xuICBjb25zdCBzb3J0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdcIik7XG4gIGNvbnN0IHNjcm9sbFNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdfX2JveFwiKVxuICBjb25zdCBidG5GaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRzX19maWx0ZXJcIik7XG4gIGNvbnN0IGZpbHRlck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJcIik7XG4gIGNvbnN0IHNjcm9sbEZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyX19ib3hcIik7XG4gIGJ0blNvcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBvcGVuTW9kYWwoc29ydE1vZGFsKVxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9jaycpXG4gICAgaWYgKGZpbHRlck1vZGFsLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgZmlsdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIH1cbiAgfSlcbiAgYnRuRmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgb3Blbk1vZGFsKGZpbHRlck1vZGFsKVxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9jaycpXG4gICAgaWYgKHNvcnRNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIHNvcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgfVxuICB9KVxuXG4gIHNldHVwTW9kYWxFdmVudHMoc29ydE1vZGFsLCBzY3JvbGxTb3J0KVxuICBzZXR1cE1vZGFsRXZlbnRzKGZpbHRlck1vZGFsLCBzY3JvbGxGaWx0ZXIpXG4gIGNvbnNvbGUubG9nKHNjcm9sbFNvcnQpXG5cbiAgY29uc3QgZmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcl9fYnRuJyk7XG5cbiAgZmlsdGVyQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBmaWx0ZXJCdG4uZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgfSlcblxuICBjb25zdCByZXN0YXVyYW50c0ZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXN0YXVyYW50c19fZmlsdGVycy1idG4nKVxuXG4gIHJlc3RhdXJhbnRzRmlsdGVyQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZXN0YXVyYW50c0ZpbHRlckJ0bi5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKVxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IGlucHV0U2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9faW5wdXQnKTtcbiAgY29uc3QgYnRuQ2xlYXJTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19zZWFyY2gtY2xlYXInKVxuICBpbnB1dFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGJ0bkNsZWFyU2VhcmNoKX0pXG4gIGJ0bkNsZWFyU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJJbnB1dChpbnB1dFNlYXJjaClcbiAgICBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGJ0bkNsZWFyU2VhcmNoKVxuICB9KVxuXG4gIGNvbnN0IGFkZHJlc3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19hZGRyZXNzLWJ0bicpXG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2FkZHJlc3MtYWRkJylcbiAgY29uc3QgYWRkcmVzc1NlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2FkZHJlc3Mtc2VhcmNoJylcblxuICBhZGRyZXNzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZHJlc3NCdG4ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1zaG93XCIpID8gYWNjb3JkaW9uTm90QWN0aXZlKGFkZHJlc3NCdG4pIDogYWNjb3JkaW9uQWN0aXZlKGFkZHJlc3NCdG4pXG4gIH0pXG5cbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZHJlc3NTZWFyY2guY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghc29ydE1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuU29ydC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHNvcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWZpbHRlck1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuRmlsdGVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgZmlsdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFhZGRyZXNzQnRuLnBhcmVudEVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBhY2NvcmRpb25Ob3RBY3RpdmUoYWRkcmVzc0J0bilcbiAgICAgIGFkZHJlc3NTZWFyY2guY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdXRob3JpemF0aW9uXCIpKSB7XG4gIGNvbnN0IHRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aG9yaXphdGlvbl9faW5wdXRbdHlwZT0ndGVsJ11cIik7XG4gIHRlbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtpbnB1dFBob25lKGUpfSlcbiAgdGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7b25lUGhvbmVLZXlEb3duKGUpfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFza2V0XCIpKSB7XG4gIGNvbnN0IGJhc2tldERlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRfX2hlYWRlci1kZWxldGUnKTtcbiAgY29uc3QgbW9kYWxEZWxldGUgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtbW9kYWwtZGVsZXRlXCIpKVxuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYXNrZXRfX3NlbGVjdGVkLWl0ZW0nKVxuXG4gIGNvbnN0IGNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2tldF9fY291bnQtY291bnQnKVxuXG4gIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgY29uc3QgY291bnRlciA9IGNhcmQucXVlcnlTZWxlY3RvcignLmJhc2tldF9fc2VsZWN0ZWQtaXRlbS1jb3VudGVyJylcbiAgICBjb25zdCBnb29kcyA9IGNhcmQucXVlcnlTZWxlY3RvcignLmJhc2tldF9fc2VsZWN0ZWQtaXRlbS1jb3VudCcpXG4gICAgY291bnRDaGFuZ2UoY291bnRlciwgZ29vZHMpO1xuICB9KVxuXG4gIGJhc2tldERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHttb2RhbERlbGV0ZS5zaG93KCl9KVxuXG4gIGNvbnN0IHNsaWRlciA9IGluaXRTd2lwZXIoXCIuYmFza2V0X19zd2lwZXJcIilcblxuICBjb3VudENoYW5nZShjb3VudClcblxuICBjb25zdCBtb2RhbFBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tbW9kYWxcIilcbiAgY29uc3QgY2hhbmdlUGhvbmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1waG9uZVwiKVxuICBjb25zdCBwaG9uZU51bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLXBob25lLW51bVwiKVxuICBjb25zdCBpbnB1dFRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLW1vZGFsLWlucHV0XCIpXG4gIGNvbnN0IGlucHV0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tbW9kYWwtYnRuXCIpXG5cbiAgaW5wdXRUZWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7aW5wdXRQaG9uZShlKX0pXG4gIGlucHV0VGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgb25lUGhvbmVLZXlEb3duKGUpXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHBob25lTnVtLnRleHRDb250ZW50ID0gaW5wdXRUZWwudmFsdWVcbiAgICAgIGlucHV0VGVsLnZhbHVlID0gJydcbiAgICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG4gIGlucHV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcGhvbmVOdW0udGV4dENvbnRlbnQgPSBpbnB1dFRlbC52YWx1ZVxuICAgIGlucHV0VGVsLnZhbHVlID0gJydcbiAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgY2hhbmdlUGhvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKCFtb2RhbFBob25lLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhY2hhbmdlUGhvbmVCdG4uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWNjZXNzXCIpKSB7XG4gIGNvbnN0IHNsaWRlciA9IGluaXRTd2lwZXIoXCIuc3VjY2Vzc19fb3JkZXJlZC1zd2lwZXJcIilcblxuICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1Y2Nlc3NfX2dyYWRlLXN0YXInKTtcbiAgYnRucy5mb3JFYWNoKChidG4sIGluZGV4KSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYnRucy5mb3JFYWNoKChlbGVtLCBpbmRleEVsZW0pID0+IHtcbiAgICAgICAgaWYgKGluZGV4RWxlbSA8PSBpbmRleCkge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfSBlbHNlICB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NvdW50XCIpKSB7XG4gIGNvbnN0IGFkZEFkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fYWRkcmVzcy1hZGQnKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fYWRkcmVzcy1zZWFyY2gnKTtcbiAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fYWRkcmVzcy1zZWFyY2gtaW5wdXQnKVxuICBjb25zdCBpbnB1dFNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19hZGRyZXNzLXNlYXJjaC1idG4nKVxuXG4gIGFkZEFkZHJlc3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgfSlcblxuICBpbnB1dFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHNob3dDbGVhcihpbnB1dFNlYXJjaCwgaW5wdXRTZWFyY2hCdG4pKVxuICBpbnB1dFNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhcklucHV0KGlucHV0U2VhcmNoKVxuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgaW5wdXRTZWFyY2hCdG4pXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghbW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFhZGRBZGRyZXNzLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgbW9kYWxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW1vZGFsXCIpXG4gIGNvbnN0IGNoYW5nZU5hbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbmFtZS13cmFwXCIpXG4gIGNvbnN0IG5hbWVTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW5hbWVcIilcbiAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW1vZGFsLWlucHV0XCIpXG4gIGNvbnN0IGlucHV0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW1vZGFsLWJ0blwiKVxuXG4gIGlucHV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBpbnB1dE5hbWUudmFsdWVcbiAgICBpbnB1dE5hbWUudmFsdWUgPSBcIlwiO1xuICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGlucHV0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBpbnB1dE5hbWUudmFsdWVcbiAgICAgIGlucHV0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG5cbiAgY2hhbmdlTmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmICghbW9kYWxOYW1lLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhY2hhbmdlTmFtZUJ0bi5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvY2tcIikpIHtcbiAgY29uc3Qgc2xpZGVyT25lID0gaW5pdFN3aXBlcignLnN0b2NrX19ibG9jay1zd2lwZXInKVxuICBjb25zdCBzbGlkZXJUd28gPSBpbml0U3dpcGVyKCcuc3RvY2tfX2Jsb2NrLXN3aXBlci0yJylcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkXCIpKSB7XG4gICAgcHJvZHVjdENhcmQoKTtcbiAgfVxuXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3RhdXJhbnRcIikpIHtcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkXCIpKSB7XG4gICAgcHJvZHVjdENhcmQoKTtcbiAgfVxuXG4gIGNvbnN0IGlucHV0U2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50X19zZXR0aW5ncy1zZWFyY2gtaW5wdXRcIilcbiAgY29uc3QgaW5wdXRTZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRfX3NldHRpbmdzLXNlYXJjaC1idG5cIilcbiAgY29uc3QgYnRuU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudF9fc2V0dGluZ3Mtc29ydFwiKTtcbiAgY29uc3Qgc29ydE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nXCIpO1xuICBjb25zdCBzY3JvbGxTb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nX19ib3hcIilcbiAgY29uc3QgYnRuRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50X19zZXR0aW5ncy1maWx0ZXJcIik7XG4gIGNvbnN0IGZpbHRlck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJcIik7XG4gIGNvbnN0IHNjcm9sbEZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyX19ib3hcIik7XG5cblxuICBpbnB1dFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHNob3dDbGVhcihpbnB1dFNlYXJjaCwgaW5wdXRTZWFyY2hCdG4pKVxuICBpbnB1dFNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhcklucHV0KGlucHV0U2VhcmNoKVxuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgaW5wdXRTZWFyY2hCdG4pXG4gIH0pXG5cblxuICBidG5Tb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgb3Blbk1vZGFsKHNvcnRNb2RhbClcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICAgIGlmIChmaWx0ZXJNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIGZpbHRlck1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9XG4gIH0pXG4gIGJ0bkZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIG9wZW5Nb2RhbChmaWx0ZXJNb2RhbClcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICAgIGlmIChzb3J0TW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBzb3J0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIH1cbiAgfSlcblxuICBzZXR1cE1vZGFsRXZlbnRzKHNvcnRNb2RhbCwgc2Nyb2xsU29ydClcbiAgc2V0dXBNb2RhbEV2ZW50cyhmaWx0ZXJNb2RhbCwgc2Nyb2xsRmlsdGVyKVxuXG4gIGNvbnN0IGZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2J0bicpO1xuXG4gIGZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZmlsdGVyQnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghc29ydE1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuU29ydC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHNvcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWZpbHRlck1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuRmlsdGVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgZmlsdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlc3RhdXJhbnRzRmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3RhdXJhbnRfX3NldHRpbmdzLWZpbHRlcnMtYnRuJylcblxuICByZXN0YXVyYW50c0ZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBzd2lwZXIgID0gaW5pdFN3aXBlcignLnJlc3RhdXJhbnRfX3N0b2NrLXN3aXBlcicpXG4gIGNvbnN0IHN3aXBlcjIgPSBpbml0U3dpcGVyKCcucmVzdGF1cmFudF9fb2ZmZXJzLXN3aXBlcicpXG4gIGNvbnN0IHN3aXBlcjMgPSBpbml0U3dpcGVyKCcucmVzdGF1cmFudF9fb2ZmZXJzLXN3aXBlci0yJylcblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0XCIpKSB7XG4gIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoXCIucHJvZHVjdF9fdG9wLXN3aXBlclwiLCB7XG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMFxuICB9KVxuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtYWRkXCIpXG4gIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1jb3VudGVyXCIpXG4gIGNvbnN0IGNvdW50ID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbiAgY29uc3QgbWludXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWNvdW50ZXItbWludXNcIik7XG4gIGNvbnN0IHBsdXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWNvdW50ZXItcGx1c1wiKTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtvcGVuQ291bnRlcihidG4sIGNvdW50ZXIpfSk7XG5cbiAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwibWludXNcIil9KVxuXG4gIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwicGx1c1wiKX0pXG5cbiAgY29uc3Qgc3dpcGVyMiA9IGluaXRTd2lwZXIoXCIucHJvZHVjdF9fYWRkaXRpb25hbC1zd2lwZXJcIilcbiAgY29uc3Qgc3dpcGVyMyA9IGluaXRTd2lwZXIoXCIucHJvZHVjdF9fYWRkaXRpb25hbC1zd2lwZXItMlwiKVxufVxuLy8g0KTRg9C90LrRhtC40LhcbmZ1bmN0aW9uIGluaXRTd2lwZXIoY29udGFpbmVyKSB7XG4gIHJldHVybiBuZXcgU3dpcGVyKGNvbnRhaW5lciwge1xuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgfSlcbn1cbmZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbihldmVudCkge1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydChldmVudCkge1xuICB0aGlzLnN0YXJ0WSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlKGV2ZW50KSB7XG4gIGxldCBlbmRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuICBsZXQgZGVsdGFZID0gZW5kWSAtIHRoaXMuc3RhcnRZO1xuICBpZiAoZGVsdGFZID4gMCkge1xuICAgIHRoaXMuc3R5bGUuYm90dG9tID0gLWRlbHRhWSArIFwicHhcIjtcbiAgfSBlbHNlIGlmIChkZWx0YVkgPiAyMDApIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICB9XG4gIHRoaXMuc3RhcnRZID0gbnVsbFxufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgdGhpcy5zdGFydFkgPSBldmVudC5jbGllbnRZO1xuICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmUoZXZlbnQpIHtcbiAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xuICAgIGxldCBlbmRZID0gZXZlbnQuY2xpZW50WTtcbiAgICBsZXQgZGVsdGFZID0gZW5kWSAtIHRoaXMuc3RhcnRZO1xuICAgIGlmIChkZWx0YVkgPiAwKSB7XG4gICAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IC1kZWx0YVkgKyBcInB4XCI7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoZXZlbnQpIHtcbiAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xuICAgIGxldCBlbmRZID0gZXZlbnQuY2xpZW50WTtcbiAgICBsZXQgZGVsdGFZID0gZW5kWSAtIHRoaXMuc3RhcnRZO1xuICAgIGlmIChkZWx0YVkgPiA1MCkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IFwiMFwiO1xuICAgIH1cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgfVxuICB0aGlzLnN0YXJ0WSA9IG51bGxcbn1cblxuZnVuY3Rpb24gc2V0dXBNb2RhbEV2ZW50cyhtb2RhbCwgc2Nyb2xsKSB7XG5cbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0b3BQcm9wYWdhdGlvbik7XG4gIHNjcm9sbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBzdG9wUHJvcGFnYXRpb24pXG4gIHNjcm9sbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHN0b3BQcm9wYWdhdGlvbilcbiAgc2Nyb2xsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgc3RvcFByb3BhZ2F0aW9uKVxuXG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGhhbmRsZVRvdWNoU3RhcnQpO1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGhhbmRsZVRvdWNoTW92ZSk7XG5cbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVNb3VzZURvd24pO1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGhhbmRsZU1vdXNlVXApO1xufVxuXG5mdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBtb2RhbC5zdHlsZS5ib3R0b20gPSBcIjBcIlxufVxuXG5mdW5jdGlvbiByZWdQaG9uZShpbnB1dCkge1xuICByZXR1cm4gaW5wdXQudmFsdWUucmVwbGFjZSgvXFxEL2csICcnKTtcbn1cblxuZnVuY3Rpb24gaW5wdXRQaG9uZShlKSB7XG4gIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xuICBsZXQgaW5wdXROdW1iZXJWYWx1ZSA9IHJlZ1Bob25lKGlucHV0KTtcbiAgbGV0IGZvcm1hdHRlZElucHV0VmFsdWUgPSAnJztcbiAgbGV0IHNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnRcbiAgLy8g0JXRgdC70Lgg0LIg0LjQvdC/0YPRgiDQstCy0LXQtNC10L3RiyDRgdC40LzQvtCy0LvRiyDQvdC1INGB0L7QvtGC0LLQtdGC0YHQstGD0Y7RidC40LUg0YDQtdCz0YPQu9GP0YDQutC4LCDRgtC+INC30L3QsNGH0LXQvdC40LUg0LjQvdC/0YPRgtCwINGB0YLQsNC90L7QstC40YLRgdGPINC/0YPRgdGC0YvQvFxuICBpZiAoIWlucHV0TnVtYmVyVmFsdWUpIHJldHVybiBpbnB1dC52YWx1ZSA9ICcnXG4gIC8vINCSINGN0YLQvtC5INGH0LDRgdGC0Lgg0Y8g0L3QtSDRgdC+0LLRgdC10Lwg0L/QvtC90LjQvNCw0Y4g0YfRgtC+INC/0YDQvtC40YHRhdC+0LTQuNGCXG4gIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggIT0gc2VsZWN0aW9uU3RhcnQpIHtcbiAgICBpZiAoZS5kYXRhICYmIC9cXEQvZy50ZXN0KGUuZGF0YSkpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gaW5wdXROdW1iZXJWYWx1ZVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChbJzcnLCAnOCcsICc5J10uaW5jbHVkZXMoaW5wdXROdW1iZXJWYWx1ZVswXSkpIHtcbiAgICAvLyDQldGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCDQtNC10LLRj9GC0YwsINGC0L7Qs9C00LAg0LzRiyDQt9Cw0LzQtdC90Y/QtdC8INC/0LXRgNCy0YPRjiDRhtC40YTRgNGDINC90LAgNyDQuCDQtNC10LLRj9GC0LrRgyDQtNC10LvQsNC10Lwg0LLRgtC+0YDQvtC5INGG0LjRhNGA0L7QuVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlWzBdID09ICc5JykgaW5wdXROdW1iZXJWYWx1ZSA9ICc3JyArIGlucHV0TnVtYmVyVmFsdWU7XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWVbMF0gPT0gJzgnKSBpbnB1dE51bWJlclZhbHVlID0gJzcnXG4gICAgLy8g0JXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAgNywg0YLQvtCz0LTQsCDQt9C90LDRh9C10L3QuNC1INC40L3Qv9GD0YLQsCDQvdCw0YfQuNC90LDQtdGC0YHRjyDRgSArNywg0LXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAgOCwg0YLQvtCz0LTQsCDQt9C90LDRh9C10L3QuNC1INC90LDRh9C40L3QsNC10YLRgdGPINGBIDhcbiAgICBsZXQgZmlyc3RTeW1ib2wgPSAnKzcnO1xuICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBmaXJzdFN5bWJvbCArICcgJztcbiAgICAvLyDQldGB0LvQuCDQsiDQuNC90L/Rg9GC0LUg0LHQvtC70YzRiNC1INC+0LTQvdC+0Lkg0YbQuNGE0YDRiyDQtNC+0LHQsNCy0LvRj9C10Lwg0YHQutC+0LHQutGDINC+0YLQutGA0YvRgtC40Y8g0Lgg0YLQsNC6INC00LDQu9C10LVcbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcoJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDEsIDQpXG4gICAgfVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+PSA1KSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcpICcgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg0LCA3KVxuICAgIH1cbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gOCkge1xuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg3LCA5KVxuICAgIH1cbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gMTApIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJy0nICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoOSwgMTEpO1xuICAgIH1cbiAgfSBlbHNlIHsgLy/QldGB0LvQuCDQstCy0L7QtNC40LzQvtC1INGH0LjRgdC70L4g0L3QtSA3LCA4INC40LvQuCA5INGC0L7Qs9C00LAg0LTQvtCx0LDQstC70Y/QtdC8ICvQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0LLQstC10LTQtdC90L7QtSDRh9C40YHQu9C+XG4gICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9ICcrNyAoOScgKyBpbnB1dE51bWJlclZhbHVlO1xuICB9XG4gIGlucHV0LnZhbHVlID0gZm9ybWF0dGVkSW5wdXRWYWx1ZVxufVxuXG5mdW5jdGlvbiBvbmVQaG9uZUtleURvd24gKGUpIHtcbiAgbGV0IGlucHV0ID0gZS50YXJnZXQ7XG4gIGlmIChyZWdQaG9uZShpbnB1dCkubGVuZ3RoID09IDEgJiYgZS5rZXlDb2RlID09PSA4KSB7XG4gICAgaW5wdXQudmFsdWUgPSAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93Q2xlYXIoaW5wdXQsIGJ0bikge1xuICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgYnRuLmRpc2FibGVkID0gdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFySW5wdXQoaW5wdXQpIHtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBjb3VudENoYW5nZShjb3VudCwgZ29vZHMpIHtcbiAgY29uc3Qgc3BhbiA9IGNvdW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgY29uc3QgbWludXMgPSBjb3VudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgY29uc3QgcGx1cyA9IGNvdW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpIC0gMVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBudW07XG4gICAgaWYgKCEhZ29vZHMpIHtcbiAgICAgIGdvb2RzLnRleHRDb250ZW50ID0gYCR7bnVtfSDRiNGCLmBcbiAgICB9XG4gICAgZGlzYWJsZWRNaW51cyhudW0sIG1pbnVzKVxuICB9KVxuXG4gIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpICsgMVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBudW07XG4gICAgaWYgKCEhZ29vZHMpIHtcbiAgICAgIGdvb2RzLnRleHRDb250ZW50ID0gYCR7bnVtfSDRiNGCLmBcbiAgICB9XG4gICAgZGlzYWJsZWRNaW51cyhudW0sIG1pbnVzKVxuICB9KVxufVxuXG5mdW5jdGlvbiBkaXNhYmxlZE1pbnVzKG51bSwgYnRuKSB7XG4gIGlmIChudW0gPCAxKSB7XG4gICAgYnRuLmRpc2FibGVkID0gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gYWNjb3JkaW9uQWN0aXZlKGl0ZW0pIHtcbiAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpcy1zaG93XCIpO1xuICBsZXQgcGFuZWwgPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKCFwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWNjb3JkaW9uTm90QWN0aXZlKGl0ZW0pIHtcbiAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1zaG93XCIpO1xuICBsZXQgcGFuZWwgPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xuICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGxcbiAgfVxufVxuXG5mdW5jdGlvbiBvcGVuQ291bnRlcihidG4sIGNvdW50ZXIpIHtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJub3QtYWN0aXZlXCIpO1xuICBjb3VudGVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbn1cblxuZnVuY3Rpb24gY2xvc2VDb3VudGVyKGJ0biwgY291bnRlcikge1xuICBidG4uY2xhc3NMaXN0LnJlbW92ZShcIm5vdC1hY3RpdmVcIik7XG4gIGNvdW50ZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VDb3VudGVyKHNwYW4sIGJ0biwgY291bnRlciwgb3BlcmF0b3IpIHtcblxuICBsZXQgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpO1xuXG4gIGlmIChvcGVyYXRvciA9PT0gXCJwbHVzXCIpIHtcbiAgICBudW0gKz0gMVxuICB9IGVsc2Uge1xuICAgIG51bSAtPTFcbiAgfVxuXG4gIG51bSA8IDEgPyBjbG9zZUNvdW50ZXIoYnRuLCBjb3VudGVyKSA6IHNwYW4udGV4dENvbnRlbnQgPSBudW1cbn1cblxuZnVuY3Rpb24gcHJvZHVjdENhcmQoKSB7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1jYXJkXCIpO1xuICBjYXJkcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIGNvbnN0IGJ0bldyYXAgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1idG5zXCIpXG4gICAgY29uc3QgYnRuID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtYWRkXCIpXG4gICAgY29uc3QgY291bnRlciA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLWNvdW50ZXJcIilcbiAgICBjb25zdCBjb3VudCA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4gICAgY29uc3QgbWludXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1taW51c1wiKTtcbiAgICBjb25zdCBwbHVzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtcGx1c1wiKTtcblxuICAgIGJ0bldyYXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7b3BlbkNvdW50ZXIoYnRuLCBjb3VudGVyKX0pO1xuXG4gICAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwibWludXNcIil9KVxuXG4gICAgcGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2NoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJwbHVzXCIpfSlcbiAgfSlcbn0iXX0=
