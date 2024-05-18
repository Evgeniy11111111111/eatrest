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

  _btnSort.addEventListener('click', function () {
    openModal(_sortModal);
  });

  _btnFilter.addEventListener('click', function () {
    openModal(_filterModal);
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
  }
}

function handleTouchEnd(event) {
  var endY = event.touches[0].clientY;
  var deltaY = endY - this.startY;

  if (deltaY > 70) {
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
  modal.addEventListener("touchend", handleTouchEnd);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNsaWRlck9uZSIsImluaXRTd2lwZXIiLCJzbGlkZXJUd28iLCJzbGlkZXJUaHJlZSIsInNsaWRlckZvdXIiLCJzbGlkZXJGaXZlIiwiYnRuU29ydCIsInF1ZXJ5U2VsZWN0b3IiLCJzb3J0TW9kYWwiLCJzY3JvbGxTb3J0IiwiYnRuRmlsdGVyIiwiZmlsdGVyTW9kYWwiLCJzY3JvbGxGaWx0ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInN0b3BQcm9wYWdhdGlvbiIsIm9wZW5Nb2RhbCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb250YWlucyIsInJlbW92ZSIsInNldHVwTW9kYWxFdmVudHMiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyQnRuIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJlbGVtIiwicmVzdGF1cmFudHNGaWx0ZXJCdG4iLCJpbnB1dFNlYXJjaCIsImJ0bkNsZWFyU2VhcmNoIiwic2hvd0NsZWFyIiwiY2xlYXJJbnB1dCIsImFkZHJlc3NCdG4iLCJhZGRCdG4iLCJhZGRyZXNzU2VhcmNoIiwicGFyZW50RWxlbWVudCIsImFjY29yZGlvbk5vdEFjdGl2ZSIsImFjY29yZGlvbkFjdGl2ZSIsInRhcmdldCIsInRlbCIsImlucHV0UGhvbmUiLCJvbmVQaG9uZUtleURvd24iLCJiYXNrZXREZWxldGUiLCJtb2RhbERlbGV0ZSIsImJvb3RzdHJhcCIsIk1vZGFsIiwiY2FyZHMiLCJjb3VudCIsImNhcmQiLCJjb3VudGVyIiwiZ29vZHMiLCJjb3VudENoYW5nZSIsInNob3ciLCJzbGlkZXIiLCJtb2RhbFBob25lIiwiY2hhbmdlUGhvbmVCdG4iLCJwaG9uZU51bSIsImlucHV0VGVsIiwiaW5wdXRCdG4iLCJrZXlDb2RlIiwidGV4dENvbnRlbnQiLCJ2YWx1ZSIsImJ0bnMiLCJpbmRleCIsImluZGV4RWxlbSIsImFkZEFkZHJlc3MiLCJtb2RhbCIsImlucHV0U2VhcmNoQnRuIiwibW9kYWxOYW1lIiwiY2hhbmdlTmFtZUJ0biIsIm5hbWVTcGFuIiwiaW5wdXROYW1lIiwia2V5IiwicHJvZHVjdENhcmQiLCJzd2lwZXIiLCJzd2lwZXIyIiwic3dpcGVyMyIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJtaW51cyIsInBsdXMiLCJvcGVuQ291bnRlciIsImNoYW5nZUNvdW50ZXIiLCJjb250YWluZXIiLCJldmVudCIsImhhbmRsZVRvdWNoU3RhcnQiLCJzdGFydFkiLCJ0b3VjaGVzIiwiY2xpZW50WSIsImhhbmRsZVRvdWNoTW92ZSIsImVuZFkiLCJkZWx0YVkiLCJzdHlsZSIsImJvdHRvbSIsImhhbmRsZVRvdWNoRW5kIiwiaGFuZGxlTW91c2VEb3duIiwiaXNEcmFnZ2luZyIsImhhbmRsZU1vdXNlTW92ZSIsImhhbmRsZU1vdXNlVXAiLCJzY3JvbGwiLCJyZWdQaG9uZSIsImlucHV0IiwicmVwbGFjZSIsImlucHV0TnVtYmVyVmFsdWUiLCJmb3JtYXR0ZWRJbnB1dFZhbHVlIiwic2VsZWN0aW9uU3RhcnQiLCJsZW5ndGgiLCJkYXRhIiwidGVzdCIsImluY2x1ZGVzIiwiZmlyc3RTeW1ib2wiLCJzdWJzdHJpbmciLCJkaXNhYmxlZCIsInNwYW4iLCJmaXJzdEVsZW1lbnRDaGlsZCIsImxhc3RFbGVtZW50Q2hpbGQiLCJudW0iLCJOdW1iZXIiLCJkaXNhYmxlZE1pbnVzIiwiaXRlbSIsInBhbmVsIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwibWF4SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiY2xvc2VDb3VudGVyIiwib3BlcmF0b3IiLCJidG5XcmFwIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQUosRUFBc0M7RUFDcEMsSUFBTUMsU0FBUyxHQUFHQyxVQUFVLENBQUMsdUJBQUQsQ0FBNUI7RUFDQSxJQUFNQyxTQUFTLEdBQUdELFVBQVUsQ0FBQyx1QkFBRCxDQUE1QjtFQUNBLElBQU1FLFdBQVcsR0FBR0YsVUFBVSxDQUFDLHVCQUFELENBQTlCO0VBQ0EsSUFBTUcsVUFBVSxHQUFHSCxVQUFVLENBQUMsdUJBQUQsQ0FBN0I7RUFDQSxJQUFNSSxVQUFVLEdBQUdKLFVBQVUsQ0FBQyx1QkFBRCxDQUE3QjtFQUVBLElBQU1LLE9BQU8sR0FBR1IsUUFBUSxDQUFDUyxhQUFULENBQXVCLG9CQUF2QixDQUFoQjtFQUNBLElBQU1DLFNBQVMsR0FBR1YsUUFBUSxDQUFDUyxhQUFULENBQXVCLFVBQXZCLENBQWxCO0VBQ0EsSUFBTUUsVUFBVSxHQUFHWCxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbkI7RUFDQSxJQUFNRyxTQUFTLEdBQUdaLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixzQkFBdkIsQ0FBbEI7RUFDQSxJQUFNSSxXQUFXLEdBQUdiLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixTQUF2QixDQUFwQjtFQUNBLElBQU1LLFlBQVksR0FBR2QsUUFBUSxDQUFDUyxhQUFULENBQXVCLGNBQXZCLENBQXJCO0VBQ0FELE9BQU8sQ0FBQ08sZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBQ0MsQ0FBRCxFQUFPO0lBQ3ZDQSxDQUFDLENBQUNDLGVBQUY7SUFDQUMsU0FBUyxDQUFDUixTQUFELENBQVQ7SUFDQVYsUUFBUSxDQUFDbUIsSUFBVCxDQUFjQyxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixNQUE1Qjs7SUFDQSxJQUFJUixXQUFXLENBQUNPLFNBQVosQ0FBc0JFLFFBQXRCLENBQStCLFFBQS9CLENBQUosRUFBOEM7TUFDNUNULFdBQVcsQ0FBQ08sU0FBWixDQUFzQkcsTUFBdEIsQ0FBNkIsUUFBN0I7SUFDRDtFQUNGLENBUEQ7RUFRQVgsU0FBUyxDQUFDRyxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxVQUFDQyxDQUFELEVBQU87SUFDekNBLENBQUMsQ0FBQ0MsZUFBRjtJQUNBQyxTQUFTLENBQUNMLFdBQUQsQ0FBVDtJQUNBYixRQUFRLENBQUNtQixJQUFULENBQWNDLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLE1BQTVCOztJQUNBLElBQUlYLFNBQVMsQ0FBQ1UsU0FBVixDQUFvQkUsUUFBcEIsQ0FBNkIsUUFBN0IsQ0FBSixFQUE0QztNQUMxQ1osU0FBUyxDQUFDVSxTQUFWLENBQW9CRyxNQUFwQixDQUEyQixRQUEzQjtJQUNEO0VBQ0YsQ0FQRDtFQVNBQyxnQkFBZ0IsQ0FBQ2QsU0FBRCxFQUFZQyxVQUFaLENBQWhCO0VBQ0FhLGdCQUFnQixDQUFDWCxXQUFELEVBQWNDLFlBQWQsQ0FBaEI7RUFDQVcsT0FBTyxDQUFDQyxHQUFSLENBQVlmLFVBQVo7RUFFQSxJQUFNZ0IsU0FBUyxHQUFHM0IsUUFBUSxDQUFDNEIsZ0JBQVQsQ0FBMEIsY0FBMUIsQ0FBbEI7RUFFQUQsU0FBUyxDQUFDRSxPQUFWLENBQWtCLFVBQUFDLEdBQUcsRUFBSTtJQUN2QkEsR0FBRyxDQUFDZixnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUFNO01BQ2xDWSxTQUFTLENBQUNFLE9BQVYsQ0FBa0IsVUFBQUUsSUFBSTtRQUFBLE9BQUlBLElBQUksQ0FBQ1gsU0FBTCxDQUFlRyxNQUFmLENBQXNCLFFBQXRCLENBQUo7TUFBQSxDQUF0QjtNQUNBTyxHQUFHLENBQUNWLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixRQUFsQjtJQUNELENBSEQ7RUFJRCxDQUxEO0VBT0EsSUFBTVcsb0JBQW9CLEdBQUdoQyxRQUFRLENBQUM0QixnQkFBVCxDQUEwQiwyQkFBMUIsQ0FBN0I7RUFFQUksb0JBQW9CLENBQUNILE9BQXJCLENBQTZCLFVBQUFDLEdBQUcsRUFBSTtJQUNsQ0EsR0FBRyxDQUFDZixnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUFNO01BQ2xDaUIsb0JBQW9CLENBQUNILE9BQXJCLENBQTZCLFVBQUFFLElBQUk7UUFBQSxPQUFJQSxJQUFJLENBQUNYLFNBQUwsQ0FBZUcsTUFBZixDQUFzQixRQUF0QixDQUFKO01BQUEsQ0FBakM7TUFDQU8sR0FBRyxDQUFDVixTQUFKLENBQWNDLEdBQWQsQ0FBa0IsUUFBbEI7SUFDRCxDQUhEO0VBSUQsQ0FMRDtFQU9BLElBQU1ZLFdBQVcsR0FBR2pDLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBcEI7RUFDQSxJQUFNeUIsY0FBYyxHQUFHbEMsUUFBUSxDQUFDUyxhQUFULENBQXVCLHVCQUF2QixDQUF2QjtFQUNBd0IsV0FBVyxDQUFDbEIsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsWUFBTTtJQUFDb0IsU0FBUyxDQUFDRixXQUFELEVBQWNDLGNBQWQsQ0FBVDtFQUF1QyxDQUFwRjtFQUNBQSxjQUFjLENBQUNuQixnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxZQUFNO0lBQzdDcUIsVUFBVSxDQUFDSCxXQUFELENBQVY7SUFDQUUsU0FBUyxDQUFDRixXQUFELEVBQWNDLGNBQWQsQ0FBVDtFQUNELENBSEQ7RUFLQSxJQUFNRyxVQUFVLEdBQUdyQyxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsc0JBQXZCLENBQW5CO0VBQ0EsSUFBTTZCLE1BQU0sR0FBR3RDLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixzQkFBdkIsQ0FBZjtFQUNBLElBQU04QixhQUFhLEdBQUd2QyxRQUFRLENBQUNTLGFBQVQsQ0FBdUIseUJBQXZCLENBQXRCO0VBRUE0QixVQUFVLENBQUN0QixnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFNO0lBQ3pDc0IsVUFBVSxDQUFDRyxhQUFYLENBQXlCcEIsU0FBekIsQ0FBbUNFLFFBQW5DLENBQTRDLFNBQTVDLElBQXlEbUIsa0JBQWtCLENBQUNKLFVBQUQsQ0FBM0UsR0FBMEZLLGVBQWUsQ0FBQ0wsVUFBRCxDQUF6RztFQUNELENBRkQ7RUFJQUMsTUFBTSxDQUFDdkIsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBTTtJQUNyQ3dCLGFBQWEsQ0FBQ25CLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLFFBQTVCO0VBQ0QsQ0FGRDtFQUlBckIsUUFBUSxDQUFDZSxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxDQUFELEVBQU87SUFDeEMsSUFBSSxDQUFDTixTQUFTLENBQUNZLFFBQVYsQ0FBbUJOLENBQUMsQ0FBQzJCLE1BQXJCLENBQUQsSUFBaUMsQ0FBQ25DLE9BQU8sQ0FBQ2MsUUFBUixDQUFpQk4sQ0FBQyxDQUFDMkIsTUFBbkIsQ0FBdEMsRUFBa0U7TUFDaEVqQyxTQUFTLENBQUNVLFNBQVYsQ0FBb0JHLE1BQXBCLENBQTJCLFFBQTNCO01BQ0F2QixRQUFRLENBQUNtQixJQUFULENBQWNDLFNBQWQsQ0FBd0JHLE1BQXhCLENBQStCLE1BQS9CO0lBQ0Q7RUFDRixDQUxEO0VBT0F2QixRQUFRLENBQUNlLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUNDLENBQUQsRUFBTztJQUN4QyxJQUFJLENBQUNILFdBQVcsQ0FBQ1MsUUFBWixDQUFxQk4sQ0FBQyxDQUFDMkIsTUFBdkIsQ0FBRCxJQUFtQyxDQUFDL0IsU0FBUyxDQUFDVSxRQUFWLENBQW1CTixDQUFDLENBQUMyQixNQUFyQixDQUF4QyxFQUFzRTtNQUNwRTlCLFdBQVcsQ0FBQ08sU0FBWixDQUFzQkcsTUFBdEIsQ0FBNkIsUUFBN0I7TUFDQXZCLFFBQVEsQ0FBQ21CLElBQVQsQ0FBY0MsU0FBZCxDQUF3QkcsTUFBeEIsQ0FBK0IsTUFBL0I7SUFDRDtFQUNGLENBTEQ7RUFPQXZCLFFBQVEsQ0FBQ2UsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsQ0FBRCxFQUFPO0lBQ3hDLElBQUksQ0FBQ3FCLFVBQVUsQ0FBQ0csYUFBWCxDQUF5QmxCLFFBQXpCLENBQWtDTixDQUFDLENBQUMyQixNQUFwQyxDQUFMLEVBQWtEO01BQ2hERixrQkFBa0IsQ0FBQ0osVUFBRCxDQUFsQjtNQUNBRSxhQUFhLENBQUNuQixTQUFkLENBQXdCRyxNQUF4QixDQUErQixRQUEvQjtJQUNEO0VBQ0YsQ0FMRDtBQU1EOztBQUVELElBQUl2QixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBSixFQUE4QztFQUM1QyxJQUFNMkMsR0FBRyxHQUFHNUMsUUFBUSxDQUFDUyxhQUFULENBQXVCLG1DQUF2QixDQUFaO0VBQ0FtQyxHQUFHLENBQUM3QixnQkFBSixDQUFxQixPQUFyQixFQUE4QixVQUFDQyxDQUFELEVBQU87SUFBQzZCLFVBQVUsQ0FBQzdCLENBQUQsQ0FBVjtFQUFjLENBQXBEO0VBQ0E0QixHQUFHLENBQUM3QixnQkFBSixDQUFxQixTQUFyQixFQUFnQyxVQUFDQyxDQUFELEVBQU87SUFBQzhCLGVBQWUsQ0FBQzlCLENBQUQsQ0FBZjtFQUFtQixDQUEzRDtBQUNEOztBQUVELElBQUloQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBSixFQUF1QztFQUNyQyxJQUFNOEMsWUFBWSxHQUFHL0MsUUFBUSxDQUFDUyxhQUFULENBQXVCLHdCQUF2QixDQUFyQjtFQUNBLElBQU11QyxXQUFXLEdBQUcsSUFBSUMsU0FBUyxDQUFDQyxLQUFkLENBQW9CbEQsUUFBUSxDQUFDUyxhQUFULENBQXVCLGtCQUF2QixDQUFwQixDQUFwQjtFQUNBLElBQU0wQyxLQUFLLEdBQUduRCxRQUFRLENBQUM0QixnQkFBVCxDQUEwQix3QkFBMUIsQ0FBZDtFQUVBLElBQU13QixLQUFLLEdBQUdwRCxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsc0JBQXZCLENBQWQ7RUFFQTBDLEtBQUssQ0FBQ3RCLE9BQU4sQ0FBYyxVQUFBd0IsSUFBSSxFQUFJO0lBQ3BCLElBQU1DLE9BQU8sR0FBR0QsSUFBSSxDQUFDNUMsYUFBTCxDQUFtQixnQ0FBbkIsQ0FBaEI7SUFDQSxJQUFNOEMsS0FBSyxHQUFHRixJQUFJLENBQUM1QyxhQUFMLENBQW1CLDhCQUFuQixDQUFkO0lBQ0ErQyxXQUFXLENBQUNGLE9BQUQsRUFBVUMsS0FBVixDQUFYO0VBQ0QsQ0FKRDtFQU1BUixZQUFZLENBQUNoQyxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxZQUFNO0lBQUNpQyxXQUFXLENBQUNTLElBQVo7RUFBbUIsQ0FBakU7RUFFQSxJQUFNQyxNQUFNLEdBQUd2RCxVQUFVLENBQUMsaUJBQUQsQ0FBekI7RUFFQXFELFdBQVcsQ0FBQ0osS0FBRCxDQUFYO0VBRUEsSUFBTU8sVUFBVSxHQUFHM0QsUUFBUSxDQUFDUyxhQUFULENBQXVCLHdCQUF2QixDQUFuQjtFQUNBLElBQU1tRCxjQUFjLEdBQUc1RCxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsd0JBQXZCLENBQXZCO0VBQ0EsSUFBTW9ELFFBQVEsR0FBRzdELFFBQVEsQ0FBQ1MsYUFBVCxDQUF1Qiw0QkFBdkIsQ0FBakI7RUFDQSxJQUFNcUQsUUFBUSxHQUFHOUQsUUFBUSxDQUFDUyxhQUFULENBQXVCLDhCQUF2QixDQUFqQjtFQUNBLElBQU1zRCxRQUFRLEdBQUcvRCxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsNEJBQXZCLENBQWpCO0VBRUFxRCxRQUFRLENBQUMvQyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxDQUFELEVBQU87SUFBQzZCLFVBQVUsQ0FBQzdCLENBQUQsQ0FBVjtFQUFjLENBQXpEO0VBQ0E4QyxRQUFRLENBQUMvQyxnQkFBVCxDQUEwQixTQUExQixFQUFxQyxVQUFDQyxDQUFELEVBQU87SUFDMUM4QixlQUFlLENBQUM5QixDQUFELENBQWY7O0lBQ0EsSUFBSUEsQ0FBQyxDQUFDZ0QsT0FBRixLQUFjLEVBQWxCLEVBQXNCO01BQ3BCSCxRQUFRLENBQUNJLFdBQVQsR0FBdUJILFFBQVEsQ0FBQ0ksS0FBaEM7TUFDQUosUUFBUSxDQUFDSSxLQUFULEdBQWlCLEVBQWpCO01BQ0FQLFVBQVUsQ0FBQ3ZDLFNBQVgsQ0FBcUJHLE1BQXJCLENBQTRCLFFBQTVCO0lBQ0Q7RUFDRixDQVBEO0VBUUF3QyxRQUFRLENBQUNoRCxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxZQUFNO0lBQ3ZDOEMsUUFBUSxDQUFDSSxXQUFULEdBQXVCSCxRQUFRLENBQUNJLEtBQWhDO0lBQ0FKLFFBQVEsQ0FBQ0ksS0FBVCxHQUFpQixFQUFqQjtJQUNBUCxVQUFVLENBQUN2QyxTQUFYLENBQXFCRyxNQUFyQixDQUE0QixRQUE1QjtFQUNELENBSkQ7RUFNQXFDLGNBQWMsQ0FBQzdDLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLFlBQU07SUFDN0M0QyxVQUFVLENBQUN2QyxTQUFYLENBQXFCQyxHQUFyQixDQUF5QixRQUF6QjtFQUNELENBRkQ7RUFJQXJCLFFBQVEsQ0FBQ2UsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBQ0MsQ0FBRCxFQUFPO0lBQ3hDLElBQUksQ0FBQzJDLFVBQVUsQ0FBQ3JDLFFBQVgsQ0FBb0JOLENBQUMsQ0FBQzJCLE1BQXRCLENBQUQsSUFBa0MsQ0FBQ2lCLGNBQWMsQ0FBQ3RDLFFBQWYsQ0FBd0JOLENBQUMsQ0FBQzJCLE1BQTFCLENBQXZDLEVBQTBFO01BQ3hFZ0IsVUFBVSxDQUFDdkMsU0FBWCxDQUFxQkcsTUFBckIsQ0FBNEIsUUFBNUI7SUFDRDtFQUNGLENBSkQ7QUFLRDs7QUFFRCxJQUFJdkIsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQUosRUFBd0M7RUFDdEMsSUFBTXlELE9BQU0sR0FBR3ZELFVBQVUsQ0FBQywwQkFBRCxDQUF6Qjs7RUFFQSxJQUFNZ0UsSUFBSSxHQUFHbkUsUUFBUSxDQUFDNEIsZ0JBQVQsQ0FBMEIsc0JBQTFCLENBQWI7RUFDQXVDLElBQUksQ0FBQ3RDLE9BQUwsQ0FBYSxVQUFDQyxHQUFELEVBQU1zQyxLQUFOLEVBQWdCO0lBQzNCdEMsR0FBRyxDQUFDZixnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUFNO01BQ2xDb0QsSUFBSSxDQUFDdEMsT0FBTCxDQUFhLFVBQUNFLElBQUQsRUFBT3NDLFNBQVAsRUFBcUI7UUFDaEMsSUFBSUEsU0FBUyxJQUFJRCxLQUFqQixFQUF3QjtVQUN0QnJDLElBQUksQ0FBQ1gsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFFBQW5CO1FBQ0QsQ0FGRCxNQUVRO1VBQ05VLElBQUksQ0FBQ1gsU0FBTCxDQUFlRyxNQUFmLENBQXNCLFFBQXRCO1FBQ0Q7TUFDRixDQU5EO0lBT0QsQ0FSRDtFQVNELENBVkQ7QUFZRDs7QUFFRCxJQUFJdkIsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQUosRUFBd0M7RUFDdEMsSUFBTXFFLFVBQVUsR0FBR3RFLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBbkI7RUFDQSxJQUFNOEQsS0FBSyxHQUFHdkUsUUFBUSxDQUFDUyxhQUFULENBQXVCLDBCQUF2QixDQUFkOztFQUNBLElBQU13QixZQUFXLEdBQUdqQyxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsZ0NBQXZCLENBQXBCOztFQUNBLElBQU0rRCxjQUFjLEdBQUd4RSxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsOEJBQXZCLENBQXZCO0VBRUE2RCxVQUFVLENBQUN2RCxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxZQUFNO0lBQ3pDd0QsS0FBSyxDQUFDbkQsU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsUUFBcEI7RUFDRCxDQUZEOztFQUlBWSxZQUFXLENBQUNsQixnQkFBWixDQUE2QixPQUE3QixFQUFzQztJQUFBLE9BQU1vQixTQUFTLENBQUNGLFlBQUQsRUFBY3VDLGNBQWQsQ0FBZjtFQUFBLENBQXRDOztFQUNBQSxjQUFjLENBQUN6RCxnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxZQUFNO0lBQzdDcUIsVUFBVSxDQUFDSCxZQUFELENBQVY7SUFDQUUsU0FBUyxDQUFDRixZQUFELEVBQWN1QyxjQUFkLENBQVQ7RUFDRCxDQUhEO0VBS0F4RSxRQUFRLENBQUNlLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUNDLENBQUQsRUFBTztJQUN4QyxJQUFJLENBQUN1RCxLQUFLLENBQUNqRCxRQUFOLENBQWVOLENBQUMsQ0FBQzJCLE1BQWpCLENBQUQsSUFBNkIsQ0FBQzJCLFVBQVUsQ0FBQ2hELFFBQVgsQ0FBb0JOLENBQUMsQ0FBQzJCLE1BQXRCLENBQWxDLEVBQWlFO01BQy9ENEIsS0FBSyxDQUFDbkQsU0FBTixDQUFnQkcsTUFBaEIsQ0FBdUIsUUFBdkI7SUFDRDtFQUNGLENBSkQ7RUFNQSxJQUFNa0QsU0FBUyxHQUFHekUsUUFBUSxDQUFDUyxhQUFULENBQXVCLHNCQUF2QixDQUFsQjtFQUNBLElBQU1pRSxhQUFhLEdBQUcxRSxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsMEJBQXZCLENBQXRCO0VBQ0EsSUFBTWtFLFFBQVEsR0FBRzNFLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixxQkFBdkIsQ0FBakI7RUFDQSxJQUFNbUUsU0FBUyxHQUFHNUUsUUFBUSxDQUFDUyxhQUFULENBQXVCLDRCQUF2QixDQUFsQjs7RUFDQSxJQUFNc0QsU0FBUSxHQUFHL0QsUUFBUSxDQUFDUyxhQUFULENBQXVCLDBCQUF2QixDQUFqQjs7RUFFQXNELFNBQVEsQ0FBQ2hELGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFlBQU07SUFDdkM0RCxRQUFRLENBQUNWLFdBQVQsR0FBdUJXLFNBQVMsQ0FBQ1YsS0FBakM7SUFDQVUsU0FBUyxDQUFDVixLQUFWLEdBQWtCLEVBQWxCO0lBQ0FPLFNBQVMsQ0FBQ3JELFNBQVYsQ0FBb0JHLE1BQXBCLENBQTJCLFFBQTNCO0VBQ0QsQ0FKRDs7RUFNQXFELFNBQVMsQ0FBQzdELGdCQUFWLENBQTJCLFVBQTNCLEVBQXVDLFVBQUNDLENBQUQsRUFBTztJQUM1QyxJQUFJQSxDQUFDLENBQUM2RCxHQUFGLEtBQVUsT0FBZCxFQUF1QjtNQUNyQkYsUUFBUSxDQUFDVixXQUFULEdBQXVCVyxTQUFTLENBQUNWLEtBQWpDO01BQ0FVLFNBQVMsQ0FBQ1YsS0FBVixHQUFrQixFQUFsQjtNQUNBTyxTQUFTLENBQUNyRCxTQUFWLENBQW9CRyxNQUFwQixDQUEyQixRQUEzQjtJQUNEO0VBQ0YsQ0FORDtFQVFBbUQsYUFBYSxDQUFDM0QsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBTTtJQUM1QzBELFNBQVMsQ0FBQ3JELFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFFBQXhCO0VBQ0QsQ0FGRDtFQUlBckIsUUFBUSxDQUFDZSxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxDQUFELEVBQU87SUFDeEMsSUFBSSxDQUFDeUQsU0FBUyxDQUFDbkQsUUFBVixDQUFtQk4sQ0FBQyxDQUFDMkIsTUFBckIsQ0FBRCxJQUFpQyxDQUFDK0IsYUFBYSxDQUFDcEQsUUFBZCxDQUF1Qk4sQ0FBQyxDQUFDMkIsTUFBekIsQ0FBdEMsRUFBd0U7TUFDdEU4QixTQUFTLENBQUNyRCxTQUFWLENBQW9CRyxNQUFwQixDQUEyQixRQUEzQjtJQUNEO0VBQ0YsQ0FKRDtBQUtEOztBQUVELElBQUl2QixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBSixFQUFzQztFQUNwQyxJQUFNQyxVQUFTLEdBQUdDLFVBQVUsQ0FBQyxzQkFBRCxDQUE1Qjs7RUFDQSxJQUFNQyxVQUFTLEdBQUdELFVBQVUsQ0FBQyx3QkFBRCxDQUE1Qjs7RUFFQSxJQUFJSCxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBSixFQUF3QztJQUN0Q3FFLFdBQVc7RUFDWjtBQUVGOztBQUVELElBQUk5RSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBSixFQUEyQztFQUV6QyxJQUFJRCxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBSixFQUF3QztJQUN0Q3FFLFdBQVc7RUFDWjs7RUFFRCxJQUFNN0MsYUFBVyxHQUFHakMsUUFBUSxDQUFDUyxhQUFULENBQXVCLG9DQUF2QixDQUFwQjs7RUFDQSxJQUFNK0QsZUFBYyxHQUFHeEUsUUFBUSxDQUFDUyxhQUFULENBQXVCLGtDQUF2QixDQUF2Qjs7RUFDQSxJQUFNRCxRQUFPLEdBQUdSLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1Qiw0QkFBdkIsQ0FBaEI7O0VBQ0EsSUFBTUMsVUFBUyxHQUFHVixRQUFRLENBQUNTLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBbEI7O0VBQ0EsSUFBTUUsV0FBVSxHQUFHWCxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbkI7O0VBQ0EsSUFBTUcsVUFBUyxHQUFHWixRQUFRLENBQUNTLGFBQVQsQ0FBdUIsOEJBQXZCLENBQWxCOztFQUNBLElBQU1JLFlBQVcsR0FBR2IsUUFBUSxDQUFDUyxhQUFULENBQXVCLFNBQXZCLENBQXBCOztFQUNBLElBQU1LLGFBQVksR0FBR2QsUUFBUSxDQUFDUyxhQUFULENBQXVCLGNBQXZCLENBQXJCOztFQUdBd0IsYUFBVyxDQUFDbEIsZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0M7SUFBQSxPQUFNb0IsU0FBUyxDQUFDRixhQUFELEVBQWN1QyxlQUFkLENBQWY7RUFBQSxDQUF0Qzs7RUFDQUEsZUFBYyxDQUFDekQsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsWUFBTTtJQUM3Q3FCLFVBQVUsQ0FBQ0gsYUFBRCxDQUFWO0lBQ0FFLFNBQVMsQ0FBQ0YsYUFBRCxFQUFjdUMsZUFBZCxDQUFUO0VBQ0QsQ0FIRDs7RUFNQWhFLFFBQU8sQ0FBQ08sZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsWUFBTTtJQUN0Q0csU0FBUyxDQUFDUixVQUFELENBQVQ7RUFDRCxDQUZEOztFQUdBRSxVQUFTLENBQUNHLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFlBQU07SUFDeENHLFNBQVMsQ0FBQ0wsWUFBRCxDQUFUO0VBQ0QsQ0FGRDs7RUFJQVcsZ0JBQWdCLENBQUNkLFVBQUQsRUFBWUMsV0FBWixDQUFoQjtFQUNBYSxnQkFBZ0IsQ0FBQ1gsWUFBRCxFQUFjQyxhQUFkLENBQWhCOztFQUVBLElBQU1hLFVBQVMsR0FBRzNCLFFBQVEsQ0FBQzRCLGdCQUFULENBQTBCLGNBQTFCLENBQWxCOztFQUVBRCxVQUFTLENBQUNFLE9BQVYsQ0FBa0IsVUFBQUMsR0FBRyxFQUFJO0lBQ3ZCQSxHQUFHLENBQUNmLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQU07TUFDbENZLFVBQVMsQ0FBQ0UsT0FBVixDQUFrQixVQUFBRSxJQUFJO1FBQUEsT0FBSUEsSUFBSSxDQUFDWCxTQUFMLENBQWVHLE1BQWYsQ0FBc0IsUUFBdEIsQ0FBSjtNQUFBLENBQXRCOztNQUNBTyxHQUFHLENBQUNWLFNBQUosQ0FBY0MsR0FBZCxDQUFrQixRQUFsQjtJQUNELENBSEQ7RUFJRCxDQUxEOztFQU9BckIsUUFBUSxDQUFDZSxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxDQUFELEVBQU87SUFDeEMsSUFBSSxDQUFDTixVQUFTLENBQUNZLFFBQVYsQ0FBbUJOLENBQUMsQ0FBQzJCLE1BQXJCLENBQUQsSUFBaUMsQ0FBQ25DLFFBQU8sQ0FBQ2MsUUFBUixDQUFpQk4sQ0FBQyxDQUFDMkIsTUFBbkIsQ0FBdEMsRUFBa0U7TUFDaEVqQyxVQUFTLENBQUNVLFNBQVYsQ0FBb0JHLE1BQXBCLENBQTJCLFFBQTNCOztNQUNBdkIsUUFBUSxDQUFDbUIsSUFBVCxDQUFjQyxTQUFkLENBQXdCRyxNQUF4QixDQUErQixNQUEvQjtJQUNEO0VBQ0YsQ0FMRDtFQU9BdkIsUUFBUSxDQUFDZSxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxVQUFDQyxDQUFELEVBQU87SUFDeEMsSUFBSSxDQUFDSCxZQUFXLENBQUNTLFFBQVosQ0FBcUJOLENBQUMsQ0FBQzJCLE1BQXZCLENBQUQsSUFBbUMsQ0FBQy9CLFVBQVMsQ0FBQ1UsUUFBVixDQUFtQk4sQ0FBQyxDQUFDMkIsTUFBckIsQ0FBeEMsRUFBc0U7TUFDcEU5QixZQUFXLENBQUNPLFNBQVosQ0FBc0JHLE1BQXRCLENBQTZCLFFBQTdCOztNQUNBdkIsUUFBUSxDQUFDbUIsSUFBVCxDQUFjQyxTQUFkLENBQXdCRyxNQUF4QixDQUErQixNQUEvQjtJQUVEO0VBQ0YsQ0FORDs7RUFRQSxJQUFNUyxxQkFBb0IsR0FBR2hDLFFBQVEsQ0FBQzRCLGdCQUFULENBQTBCLG1DQUExQixDQUE3Qjs7RUFFQUkscUJBQW9CLENBQUNILE9BQXJCLENBQTZCLFVBQUFDLEdBQUcsRUFBSTtJQUNsQ0EsR0FBRyxDQUFDZixnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUFNO01BQ2xDaUIscUJBQW9CLENBQUNILE9BQXJCLENBQTZCLFVBQUFFLElBQUk7UUFBQSxPQUFJQSxJQUFJLENBQUNYLFNBQUwsQ0FBZUcsTUFBZixDQUFzQixRQUF0QixDQUFKO01BQUEsQ0FBakM7O01BQ0FPLEdBQUcsQ0FBQ1YsU0FBSixDQUFjQyxHQUFkLENBQWtCLFFBQWxCO0lBQ0QsQ0FIRDtFQUlELENBTEQ7O0VBT0EsSUFBTTBELE1BQU0sR0FBSTVFLFVBQVUsQ0FBQywyQkFBRCxDQUExQjtFQUNBLElBQU02RSxPQUFPLEdBQUc3RSxVQUFVLENBQUMsNEJBQUQsQ0FBMUI7RUFDQSxJQUFNOEUsT0FBTyxHQUFHOUUsVUFBVSxDQUFDLDhCQUFELENBQTFCO0FBRUQ7O0FBRUQsSUFBSUgsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQUosRUFBd0M7RUFDdEMsSUFBTThFLE9BQU0sR0FBRyxJQUFJRyxNQUFKLENBQVcsc0JBQVgsRUFBbUM7SUFDaERDLGFBQWEsRUFBRSxNQURpQztJQUVoREMsWUFBWSxFQUFFO0VBRmtDLENBQW5DLENBQWY7O0VBS0EsSUFBSXBGLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixVQUF2QixDQUFKLEVBQXdDO0lBQ3RDcUUsV0FBVztFQUNaOztFQUVELElBQU1oRCxHQUFHLEdBQUc5QixRQUFRLENBQUNTLGFBQVQsQ0FBdUIsbUJBQXZCLENBQVo7RUFDQSxJQUFNNkMsT0FBTyxHQUFHdEQsUUFBUSxDQUFDUyxhQUFULENBQXVCLHVCQUF2QixDQUFoQjs7RUFDQSxJQUFNMkMsTUFBSyxHQUFHRSxPQUFPLENBQUM3QyxhQUFSLENBQXNCLE1BQXRCLENBQWQ7O0VBQ0EsSUFBTTRFLEtBQUssR0FBRy9CLE9BQU8sQ0FBQzdDLGFBQVIsQ0FBc0IsNkJBQXRCLENBQWQ7RUFDQSxJQUFNNkUsSUFBSSxHQUFHaEMsT0FBTyxDQUFDN0MsYUFBUixDQUFzQiw0QkFBdEIsQ0FBYjtFQUVBcUIsR0FBRyxDQUFDZixnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUFNO0lBQUN3RSxXQUFXLENBQUN6RCxHQUFELEVBQU13QixPQUFOLENBQVg7RUFBMEIsQ0FBL0Q7RUFFQStCLEtBQUssQ0FBQ3RFLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFlBQU07SUFBQ3lFLGFBQWEsQ0FBQ3BDLE1BQUQsRUFBUXRCLEdBQVIsRUFBYXdCLE9BQWIsRUFBc0IsT0FBdEIsQ0FBYjtFQUE0QyxDQUFuRjtFQUVBZ0MsSUFBSSxDQUFDdkUsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtJQUFDeUUsYUFBYSxDQUFDcEMsTUFBRCxFQUFRdEIsR0FBUixFQUFhd0IsT0FBYixFQUFzQixNQUF0QixDQUFiO0VBQTJDLENBQWpGOztFQUVBLElBQU0wQixRQUFPLEdBQUc3RSxVQUFVLENBQUMsNkJBQUQsQ0FBMUI7O0VBQ0EsSUFBTThFLFFBQU8sR0FBRzlFLFVBQVUsQ0FBQywrQkFBRCxDQUExQjtBQUNELEMsQ0FDRDs7O0FBQ0EsU0FBU0EsVUFBVCxDQUFvQnNGLFNBQXBCLEVBQStCO0VBQzdCLE9BQU8sSUFBSVAsTUFBSixDQUFXTyxTQUFYLEVBQXNCO0lBQzNCTixhQUFhLEVBQUUsTUFEWTtJQUUzQkMsWUFBWSxFQUFFO0VBRmEsQ0FBdEIsQ0FBUDtBQUlEOztBQUNELFNBQVNuRSxlQUFULENBQXlCeUUsS0FBekIsRUFBZ0M7RUFDOUJBLEtBQUssQ0FBQ3pFLGVBQU47QUFDRDs7QUFFRCxTQUFTMEUsZ0JBQVQsQ0FBMEJELEtBQTFCLEVBQWlDO0VBQy9CLEtBQUtFLE1BQUwsR0FBY0YsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxFQUFpQkMsT0FBL0I7QUFDRDs7QUFFRCxTQUFTQyxlQUFULENBQXlCTCxLQUF6QixFQUFnQztFQUM5QixJQUFJTSxJQUFJLEdBQUdOLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsRUFBaUJDLE9BQTVCO0VBQ0EsSUFBSUcsTUFBTSxHQUFHRCxJQUFJLEdBQUcsS0FBS0osTUFBekI7O0VBQ0EsSUFBSUssTUFBTSxHQUFHLENBQWIsRUFBZ0I7SUFDZCxLQUFLQyxLQUFMLENBQVdDLE1BQVgsR0FBb0IsQ0FBQ0YsTUFBRCxHQUFVLElBQTlCO0VBQ0Q7QUFDRjs7QUFFRCxTQUFTRyxjQUFULENBQXdCVixLQUF4QixFQUErQjtFQUM3QixJQUFJTSxJQUFJLEdBQUdOLEtBQUssQ0FBQ0csT0FBTixDQUFjLENBQWQsRUFBaUJDLE9BQTVCO0VBQ0EsSUFBSUcsTUFBTSxHQUFHRCxJQUFJLEdBQUcsS0FBS0osTUFBekI7O0VBQ0EsSUFBSUssTUFBTSxHQUFHLEVBQWIsRUFBaUI7SUFDZixLQUFLN0UsU0FBTCxDQUFlRyxNQUFmLENBQXNCLFFBQXRCO0lBQ0F2QixRQUFRLENBQUNtQixJQUFULENBQWNDLFNBQWQsQ0FBd0JHLE1BQXhCLENBQStCLE1BQS9CO0VBQ0Q7O0VBQ0QsS0FBS3FFLE1BQUwsR0FBYyxJQUFkO0FBQ0Q7O0FBRUQsU0FBU1MsZUFBVCxDQUF5QlgsS0FBekIsRUFBZ0M7RUFDOUIsS0FBS0UsTUFBTCxHQUFjRixLQUFLLENBQUNJLE9BQXBCO0VBQ0EsS0FBS1EsVUFBTCxHQUFrQixJQUFsQjtBQUNEOztBQUVELFNBQVNDLGVBQVQsQ0FBeUJiLEtBQXpCLEVBQWdDO0VBQzlCLElBQUksS0FBS1ksVUFBVCxFQUFxQjtJQUNuQixJQUFJTixJQUFJLEdBQUdOLEtBQUssQ0FBQ0ksT0FBakI7SUFDQSxJQUFJRyxNQUFNLEdBQUdELElBQUksR0FBRyxLQUFLSixNQUF6Qjs7SUFDQSxJQUFJSyxNQUFNLEdBQUcsQ0FBYixFQUFnQjtNQUNkLEtBQUtDLEtBQUwsQ0FBV0MsTUFBWCxHQUFvQixDQUFDRixNQUFELEdBQVUsSUFBOUI7SUFDRDtFQUNGO0FBQ0Y7O0FBRUQsU0FBU08sYUFBVCxDQUF1QmQsS0FBdkIsRUFBOEI7RUFDNUIsSUFBSSxLQUFLWSxVQUFULEVBQXFCO0lBQ25CLElBQUlOLElBQUksR0FBR04sS0FBSyxDQUFDSSxPQUFqQjtJQUNBLElBQUlHLE1BQU0sR0FBR0QsSUFBSSxHQUFHLEtBQUtKLE1BQXpCOztJQUNBLElBQUlLLE1BQU0sR0FBRyxFQUFiLEVBQWlCO01BQ2YsS0FBSzdFLFNBQUwsQ0FBZUcsTUFBZixDQUFzQixRQUF0QjtNQUNBdkIsUUFBUSxDQUFDbUIsSUFBVCxDQUFjQyxTQUFkLENBQXdCRyxNQUF4QixDQUErQixNQUEvQjtJQUNELENBSEQsTUFHTztNQUNMLEtBQUsyRSxLQUFMLENBQVdDLE1BQVgsR0FBb0IsR0FBcEI7SUFDRDs7SUFDRCxLQUFLRyxVQUFMLEdBQWtCLEtBQWxCO0VBQ0Q7O0VBQ0QsS0FBS1YsTUFBTCxHQUFjLElBQWQ7QUFDRDs7QUFFRCxTQUFTcEUsZ0JBQVQsQ0FBMEIrQyxLQUExQixFQUFpQ2tDLE1BQWpDLEVBQXlDO0VBRXZDbEMsS0FBSyxDQUFDeEQsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0NFLGVBQWhDO0VBQ0F3RixNQUFNLENBQUMxRixnQkFBUCxDQUF3QixZQUF4QixFQUFzQ0UsZUFBdEM7RUFDQXdGLE1BQU0sQ0FBQzFGLGdCQUFQLENBQXdCLFdBQXhCLEVBQXFDRSxlQUFyQztFQUNBd0YsTUFBTSxDQUFDMUYsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUNFLGVBQXJDO0VBRUFzRCxLQUFLLENBQUN4RCxnQkFBTixDQUF1QixZQUF2QixFQUFxQzRFLGdCQUFyQztFQUNBcEIsS0FBSyxDQUFDeEQsZ0JBQU4sQ0FBdUIsV0FBdkIsRUFBb0NnRixlQUFwQztFQUNBeEIsS0FBSyxDQUFDeEQsZ0JBQU4sQ0FBdUIsVUFBdkIsRUFBbUNxRixjQUFuQztFQUVBN0IsS0FBSyxDQUFDeEQsZ0JBQU4sQ0FBdUIsV0FBdkIsRUFBb0NzRixlQUFwQztFQUNBOUIsS0FBSyxDQUFDeEQsZ0JBQU4sQ0FBdUIsV0FBdkIsRUFBb0N3RixlQUFwQztFQUNBaEMsS0FBSyxDQUFDeEQsZ0JBQU4sQ0FBdUIsU0FBdkIsRUFBa0N5RixhQUFsQztBQUNEOztBQUVELFNBQVN0RixTQUFULENBQW1CcUQsS0FBbkIsRUFBMEI7RUFDeEJ2RSxRQUFRLENBQUNtQixJQUFULENBQWNDLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLE1BQTVCO0VBQ0FrRCxLQUFLLENBQUNuRCxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixRQUFwQjtFQUNBa0QsS0FBSyxDQUFDMkIsS0FBTixDQUFZQyxNQUFaLEdBQXFCLEdBQXJCO0FBQ0Q7O0FBRUQsU0FBU08sUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7RUFDdkIsT0FBT0EsS0FBSyxDQUFDekMsS0FBTixDQUFZMEMsT0FBWixDQUFvQixLQUFwQixFQUEyQixFQUEzQixDQUFQO0FBQ0Q7O0FBRUQsU0FBUy9ELFVBQVQsQ0FBb0I3QixDQUFwQixFQUF1QjtFQUNyQixJQUFJMkYsS0FBSyxHQUFHM0YsQ0FBQyxDQUFDMkIsTUFBZDtFQUNBLElBQUlrRSxnQkFBZ0IsR0FBR0gsUUFBUSxDQUFDQyxLQUFELENBQS9CO0VBQ0EsSUFBSUcsbUJBQW1CLEdBQUcsRUFBMUI7RUFDQSxJQUFJQyxjQUFjLEdBQUdKLEtBQUssQ0FBQ0ksY0FBM0IsQ0FKcUIsQ0FLckI7O0VBQ0EsSUFBSSxDQUFDRixnQkFBTCxFQUF1QixPQUFPRixLQUFLLENBQUN6QyxLQUFOLEdBQWMsRUFBckIsQ0FORixDQU9yQjs7RUFDQSxJQUFJeUMsS0FBSyxDQUFDekMsS0FBTixDQUFZOEMsTUFBWixJQUFzQkQsY0FBMUIsRUFBMEM7SUFDeEMsSUFBSS9GLENBQUMsQ0FBQ2lHLElBQUYsSUFBVSxNQUFNQyxJQUFOLENBQVdsRyxDQUFDLENBQUNpRyxJQUFiLENBQWQsRUFBa0M7TUFDaENOLEtBQUssQ0FBQ3pDLEtBQU4sR0FBYzJDLGdCQUFkO0lBQ0Q7O0lBQ0Q7RUFDRDs7RUFFRCxJQUFJLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLEVBQWdCTSxRQUFoQixDQUF5Qk4sZ0JBQWdCLENBQUMsQ0FBRCxDQUF6QyxDQUFKLEVBQW1EO0lBQ2pEO0lBQ0EsSUFBSUEsZ0JBQWdCLENBQUMsQ0FBRCxDQUFoQixJQUF1QixHQUEzQixFQUFnQ0EsZ0JBQWdCLEdBQUcsTUFBTUEsZ0JBQXpCO0lBQ2hDLElBQUlBLGdCQUFnQixDQUFDLENBQUQsQ0FBaEIsSUFBdUIsR0FBM0IsRUFBZ0NBLGdCQUFnQixHQUFHLEdBQW5CLENBSGlCLENBSWpEOztJQUNBLElBQUlPLFdBQVcsR0FBRyxJQUFsQjtJQUNBTixtQkFBbUIsR0FBR00sV0FBVyxHQUFHLEdBQXBDLENBTmlELENBT2pEOztJQUNBLElBQUlQLGdCQUFnQixDQUFDRyxNQUFqQixHQUEwQixDQUE5QixFQUFpQztNQUMvQkYsbUJBQW1CLElBQUksTUFBTUQsZ0JBQWdCLENBQUNRLFNBQWpCLENBQTJCLENBQTNCLEVBQThCLENBQTlCLENBQTdCO0lBQ0Q7O0lBQ0QsSUFBSVIsZ0JBQWdCLENBQUNHLE1BQWpCLElBQTJCLENBQS9CLEVBQWtDO01BQ2hDRixtQkFBbUIsSUFBSSxPQUFPRCxnQkFBZ0IsQ0FBQ1EsU0FBakIsQ0FBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsQ0FBOUI7SUFDRDs7SUFDRCxJQUFJUixnQkFBZ0IsQ0FBQ0csTUFBakIsSUFBMkIsQ0FBL0IsRUFBa0M7TUFDaENGLG1CQUFtQixJQUFJLE1BQU1ELGdCQUFnQixDQUFDUSxTQUFqQixDQUEyQixDQUEzQixFQUE4QixDQUE5QixDQUE3QjtJQUNEOztJQUNELElBQUlSLGdCQUFnQixDQUFDRyxNQUFqQixJQUEyQixFQUEvQixFQUFtQztNQUNqQ0YsbUJBQW1CLElBQUksTUFBTUQsZ0JBQWdCLENBQUNRLFNBQWpCLENBQTJCLENBQTNCLEVBQThCLEVBQTlCLENBQTdCO0lBQ0Q7RUFDRixDQXBCRCxNQW9CTztJQUFFO0lBQ1BQLG1CQUFtQixHQUFHLFVBQVVELGdCQUFoQztFQUNEOztFQUNERixLQUFLLENBQUN6QyxLQUFOLEdBQWM0QyxtQkFBZDtBQUNEOztBQUVELFNBQVNoRSxlQUFULENBQTBCOUIsQ0FBMUIsRUFBNkI7RUFDM0IsSUFBSTJGLEtBQUssR0FBRzNGLENBQUMsQ0FBQzJCLE1BQWQ7O0VBQ0EsSUFBSStELFFBQVEsQ0FBQ0MsS0FBRCxDQUFSLENBQWdCSyxNQUFoQixJQUEwQixDQUExQixJQUErQmhHLENBQUMsQ0FBQ2dELE9BQUYsS0FBYyxDQUFqRCxFQUFvRDtJQUNsRDJDLEtBQUssQ0FBQ3pDLEtBQU4sR0FBYyxFQUFkO0VBQ0Q7QUFDRjs7QUFFRCxTQUFTL0IsU0FBVCxDQUFtQndFLEtBQW5CLEVBQTBCN0UsR0FBMUIsRUFBK0I7RUFDN0IsSUFBSTZFLEtBQUssQ0FBQ3pDLEtBQU4sQ0FBWThDLE1BQVosR0FBcUIsQ0FBekIsRUFBNEI7SUFDMUJsRixHQUFHLENBQUN3RixRQUFKLEdBQWUsS0FBZjtFQUNELENBRkQsTUFFTztJQUNMeEYsR0FBRyxDQUFDd0YsUUFBSixHQUFlLElBQWY7RUFDRDtBQUNGOztBQUVELFNBQVNsRixVQUFULENBQW9CdUUsS0FBcEIsRUFBMkI7RUFDekJBLEtBQUssQ0FBQ3pDLEtBQU4sR0FBYyxFQUFkO0FBQ0Q7O0FBRUQsU0FBU1YsV0FBVCxDQUFxQkosS0FBckIsRUFBNEJHLEtBQTVCLEVBQW1DO0VBQ2pDLElBQU1nRSxJQUFJLEdBQUduRSxLQUFLLENBQUMzQyxhQUFOLENBQW9CLE1BQXBCLENBQWI7RUFDQSxJQUFNNEUsS0FBSyxHQUFHakMsS0FBSyxDQUFDb0UsaUJBQXBCO0VBQ0EsSUFBTWxDLElBQUksR0FBR2xDLEtBQUssQ0FBQ3FFLGdCQUFuQjtFQUVBcEMsS0FBSyxDQUFDdEUsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBTTtJQUNwQyxJQUFNMkcsR0FBRyxHQUFHQyxNQUFNLENBQUNKLElBQUksQ0FBQ3RELFdBQU4sQ0FBTixHQUEyQixDQUF2QztJQUNBc0QsSUFBSSxDQUFDdEQsV0FBTCxHQUFtQnlELEdBQW5COztJQUNBLElBQUksQ0FBQyxDQUFDbkUsS0FBTixFQUFhO01BQ1hBLEtBQUssQ0FBQ1UsV0FBTixhQUF1QnlELEdBQXZCO0lBQ0Q7O0lBQ0RFLGFBQWEsQ0FBQ0YsR0FBRCxFQUFNckMsS0FBTixDQUFiO0VBQ0QsQ0FQRDtFQVNBQyxJQUFJLENBQUN2RSxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFNO0lBQ25DLElBQU0yRyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0osSUFBSSxDQUFDdEQsV0FBTixDQUFOLEdBQTJCLENBQXZDO0lBQ0FzRCxJQUFJLENBQUN0RCxXQUFMLEdBQW1CeUQsR0FBbkI7O0lBQ0EsSUFBSSxDQUFDLENBQUNuRSxLQUFOLEVBQWE7TUFDWEEsS0FBSyxDQUFDVSxXQUFOLGFBQXVCeUQsR0FBdkI7SUFDRDs7SUFDREUsYUFBYSxDQUFDRixHQUFELEVBQU1yQyxLQUFOLENBQWI7RUFDRCxDQVBEO0FBUUQ7O0FBRUQsU0FBU3VDLGFBQVQsQ0FBdUJGLEdBQXZCLEVBQTRCNUYsR0FBNUIsRUFBaUM7RUFDL0IsSUFBSTRGLEdBQUcsR0FBRyxDQUFWLEVBQWE7SUFDWDVGLEdBQUcsQ0FBQ3dGLFFBQUosR0FBZSxJQUFmO0VBQ0QsQ0FGRCxNQUVPO0lBQ0x4RixHQUFHLENBQUN3RixRQUFKLEdBQWUsS0FBZjtFQUNEO0FBQ0Y7O0FBRUQsU0FBUzVFLGVBQVQsQ0FBeUJtRixJQUF6QixFQUErQjtFQUM3QkEsSUFBSSxDQUFDckYsYUFBTCxDQUFtQnBCLFNBQW5CLENBQTZCQyxHQUE3QixDQUFpQyxTQUFqQztFQUNBLElBQUl5RyxLQUFLLEdBQUdELElBQUksQ0FBQ0Usa0JBQWpCOztFQUNBLElBQUksQ0FBQ0QsS0FBSyxDQUFDNUIsS0FBTixDQUFZOEIsU0FBakIsRUFBNEI7SUFDMUJGLEtBQUssQ0FBQzVCLEtBQU4sQ0FBWThCLFNBQVosR0FBd0JGLEtBQUssQ0FBQ0csWUFBTixHQUFxQixJQUE3QztFQUNEO0FBQ0Y7O0FBRUQsU0FBU3hGLGtCQUFULENBQTRCb0YsSUFBNUIsRUFBa0M7RUFDaENBLElBQUksQ0FBQ3JGLGFBQUwsQ0FBbUJwQixTQUFuQixDQUE2QkcsTUFBN0IsQ0FBb0MsU0FBcEM7RUFDQSxJQUFJdUcsS0FBSyxHQUFHRCxJQUFJLENBQUNFLGtCQUFqQjs7RUFDQSxJQUFJRCxLQUFLLENBQUM1QixLQUFOLENBQVk4QixTQUFoQixFQUEyQjtJQUN6QkYsS0FBSyxDQUFDNUIsS0FBTixDQUFZOEIsU0FBWixHQUF3QixJQUF4QjtFQUNEO0FBQ0Y7O0FBRUQsU0FBU3pDLFdBQVQsQ0FBcUJ6RCxHQUFyQixFQUEwQndCLE9BQTFCLEVBQW1DO0VBQ2pDeEIsR0FBRyxDQUFDVixTQUFKLENBQWNDLEdBQWQsQ0FBa0IsWUFBbEI7RUFDQWlDLE9BQU8sQ0FBQ2xDLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLFFBQXRCO0FBQ0Q7O0FBRUQsU0FBUzZHLFlBQVQsQ0FBc0JwRyxHQUF0QixFQUEyQndCLE9BQTNCLEVBQW9DO0VBQ2xDeEIsR0FBRyxDQUFDVixTQUFKLENBQWNHLE1BQWQsQ0FBcUIsWUFBckI7RUFDQStCLE9BQU8sQ0FBQ2xDLFNBQVIsQ0FBa0JHLE1BQWxCLENBQXlCLFFBQXpCO0FBQ0Q7O0FBRUQsU0FBU2lFLGFBQVQsQ0FBdUIrQixJQUF2QixFQUE2QnpGLEdBQTdCLEVBQWtDd0IsT0FBbEMsRUFBMkM2RSxRQUEzQyxFQUFxRDtFQUVuRCxJQUFJVCxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0osSUFBSSxDQUFDdEQsV0FBTixDQUFoQjs7RUFFQSxJQUFJa0UsUUFBUSxLQUFLLE1BQWpCLEVBQXlCO0lBQ3ZCVCxHQUFHLElBQUksQ0FBUDtFQUNELENBRkQsTUFFTztJQUNMQSxHQUFHLElBQUcsQ0FBTjtFQUNEOztFQUVEQSxHQUFHLEdBQUcsQ0FBTixHQUFVUSxZQUFZLENBQUNwRyxHQUFELEVBQU13QixPQUFOLENBQXRCLEdBQXVDaUUsSUFBSSxDQUFDdEQsV0FBTCxHQUFtQnlELEdBQTFEO0FBQ0Q7O0FBRUQsU0FBUzVDLFdBQVQsR0FBdUI7RUFDckIsSUFBTTNCLEtBQUssR0FBR25ELFFBQVEsQ0FBQzRCLGdCQUFULENBQTBCLFVBQTFCLENBQWQ7RUFDQXVCLEtBQUssQ0FBQ3RCLE9BQU4sQ0FBYyxVQUFBRSxJQUFJLEVBQUk7SUFDcEIsSUFBTXFHLE9BQU8sR0FBR3JHLElBQUksQ0FBQ3RCLGFBQUwsQ0FBbUIsZUFBbkIsQ0FBaEI7SUFDQSxJQUFNcUIsR0FBRyxHQUFHQyxJQUFJLENBQUN0QixhQUFMLENBQW1CLGNBQW5CLENBQVo7SUFDQSxJQUFNNkMsT0FBTyxHQUFHdkIsSUFBSSxDQUFDdEIsYUFBTCxDQUFtQixrQkFBbkIsQ0FBaEI7SUFDQSxJQUFNMkMsS0FBSyxHQUFHRSxPQUFPLENBQUM3QyxhQUFSLENBQXNCLE1BQXRCLENBQWQ7SUFDQSxJQUFNNEUsS0FBSyxHQUFHL0IsT0FBTyxDQUFDN0MsYUFBUixDQUFzQixnQkFBdEIsQ0FBZDtJQUNBLElBQU02RSxJQUFJLEdBQUdoQyxPQUFPLENBQUM3QyxhQUFSLENBQXNCLGVBQXRCLENBQWI7SUFFQTJILE9BQU8sQ0FBQ3JILGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQUFDLENBQUMsRUFBSTtNQUNyQ0EsQ0FBQyxDQUFDcUgsY0FBRjtJQUNELENBRkQ7SUFHQXZHLEdBQUcsQ0FBQ2YsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsWUFBTTtNQUFDd0UsV0FBVyxDQUFDekQsR0FBRCxFQUFNd0IsT0FBTixDQUFYO0lBQTBCLENBQS9EO0lBRUErQixLQUFLLENBQUN0RSxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxZQUFNO01BQUN5RSxhQUFhLENBQUNwQyxLQUFELEVBQVF0QixHQUFSLEVBQWF3QixPQUFiLEVBQXNCLE9BQXRCLENBQWI7SUFBNEMsQ0FBbkY7SUFFQWdDLElBQUksQ0FBQ3ZFLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQU07TUFBQ3lFLGFBQWEsQ0FBQ3BDLEtBQUQsRUFBUXRCLEdBQVIsRUFBYXdCLE9BQWIsRUFBc0IsTUFBdEIsQ0FBYjtJQUEyQyxDQUFqRjtFQUNELENBaEJEO0FBaUJEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmRleFwiKSkge1xuICBjb25zdCBzbGlkZXJPbmUgPSBpbml0U3dpcGVyKFwiLm1haW4tc3RvY2tfX3N3aXBlci0xXCIpXG4gIGNvbnN0IHNsaWRlclR3byA9IGluaXRTd2lwZXIoXCIubWFpbi1zdG9ja19fc3dpcGVyLTJcIilcbiAgY29uc3Qgc2xpZGVyVGhyZWUgPSBpbml0U3dpcGVyKFwiLm1haW4tc3RvY2tfX3N3aXBlci0zXCIpXG4gIGNvbnN0IHNsaWRlckZvdXIgPSBpbml0U3dpcGVyKFwiLm1haW4tc3RvY2tfX3N3aXBlci00XCIpXG4gIGNvbnN0IHNsaWRlckZpdmUgPSBpbml0U3dpcGVyKFwiLm1haW4tc3RvY2tfX3N3aXBlci01XCIpXG5cbiAgY29uc3QgYnRuU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudHNfX3NvcnRcIik7XG4gIGNvbnN0IHNvcnRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ1wiKTtcbiAgY29uc3Qgc2Nyb2xsU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ19fYm94XCIpXG4gIGNvbnN0IGJ0bkZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudHNfX2ZpbHRlclwiKTtcbiAgY29uc3QgZmlsdGVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlclwiKTtcbiAgY29uc3Qgc2Nyb2xsRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX2JveFwiKTtcbiAgYnRuU29ydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIG9wZW5Nb2RhbChzb3J0TW9kYWwpXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2NrJylcbiAgICBpZiAoZmlsdGVyTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBmaWx0ZXJNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgfVxuICB9KVxuICBidG5GaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBvcGVuTW9kYWwoZmlsdGVyTW9kYWwpXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2NrJylcbiAgICBpZiAoc29ydE1vZGFsLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgc29ydE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9XG4gIH0pXG5cbiAgc2V0dXBNb2RhbEV2ZW50cyhzb3J0TW9kYWwsIHNjcm9sbFNvcnQpXG4gIHNldHVwTW9kYWxFdmVudHMoZmlsdGVyTW9kYWwsIHNjcm9sbEZpbHRlcilcbiAgY29uc29sZS5sb2coc2Nyb2xsU29ydClcblxuICBjb25zdCBmaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19idG4nKTtcblxuICBmaWx0ZXJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGZpbHRlckJ0bi5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKVxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IHJlc3RhdXJhbnRzRmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3RhdXJhbnRzX19maWx0ZXJzLWJ0bicpXG5cbiAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlc3RhdXJhbnRzRmlsdGVyQnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19pbnB1dCcpO1xuICBjb25zdCBidG5DbGVhclNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3NlYXJjaC1jbGVhcicpXG4gIGlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge3Nob3dDbGVhcihpbnB1dFNlYXJjaCwgYnRuQ2xlYXJTZWFyY2gpfSlcbiAgYnRuQ2xlYXJTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhcklucHV0KGlucHV0U2VhcmNoKVxuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgYnRuQ2xlYXJTZWFyY2gpXG4gIH0pXG5cbiAgY29uc3QgYWRkcmVzc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2FkZHJlc3MtYnRuJylcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYWRkcmVzcy1hZGQnKVxuICBjb25zdCBhZGRyZXNzU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYWRkcmVzcy1zZWFyY2gnKVxuXG4gIGFkZHJlc3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkcmVzc0J0bi5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImlzLXNob3dcIikgPyBhY2NvcmRpb25Ob3RBY3RpdmUoYWRkcmVzc0J0bikgOiBhY2NvcmRpb25BY3RpdmUoYWRkcmVzc0J0bilcbiAgfSlcblxuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFzb3J0TW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFidG5Tb3J0LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgc29ydE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghZmlsdGVyTW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFidG5GaWx0ZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBmaWx0ZXJNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWFkZHJlc3NCdG4ucGFyZW50RWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGFjY29yZGlvbk5vdEFjdGl2ZShhZGRyZXNzQnRuKVxuICAgICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dGhvcml6YXRpb25cIikpIHtcbiAgY29uc3QgdGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRob3JpemF0aW9uX19pbnB1dFt0eXBlPSd0ZWwnXVwiKTtcbiAgdGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge2lucHV0UGhvbmUoZSl9KVxuICB0ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtvbmVQaG9uZUtleURvd24oZSl9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXRcIikpIHtcbiAgY29uc3QgYmFza2V0RGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2tldF9faGVhZGVyLWRlbGV0ZScpO1xuICBjb25zdCBtb2RhbERlbGV0ZSA9IG5ldyBib290c3RyYXAuTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1tb2RhbC1kZWxldGVcIikpXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhc2tldF9fc2VsZWN0ZWQtaXRlbScpXG5cbiAgY29uc3QgY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19jb3VudC1jb3VudCcpXG5cbiAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICBjb25zdCBjb3VudGVyID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19zZWxlY3RlZC1pdGVtLWNvdW50ZXInKVxuICAgIGNvbnN0IGdvb2RzID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19zZWxlY3RlZC1pdGVtLWNvdW50JylcbiAgICBjb3VudENoYW5nZShjb3VudGVyLCBnb29kcyk7XG4gIH0pXG5cbiAgYmFza2V0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge21vZGFsRGVsZXRlLnNob3coKX0pXG5cbiAgY29uc3Qgc2xpZGVyID0gaW5pdFN3aXBlcihcIi5iYXNrZXRfX3N3aXBlclwiKVxuXG4gIGNvdW50Q2hhbmdlKGNvdW50KVxuXG4gIGNvbnN0IG1vZGFsUGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1tb2RhbFwiKVxuICBjb25zdCBjaGFuZ2VQaG9uZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLXBob25lXCIpXG4gIGNvbnN0IHBob25lTnVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tcGhvbmUtbnVtXCIpXG4gIGNvbnN0IGlucHV0VGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tbW9kYWwtaW5wdXRcIilcbiAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1tb2RhbC1idG5cIilcblxuICBpbnB1dFRlbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtpbnB1dFBob25lKGUpfSlcbiAgaW5wdXRUZWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBvbmVQaG9uZUtleURvd24oZSlcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgcGhvbmVOdW0udGV4dENvbnRlbnQgPSBpbnB1dFRlbC52YWx1ZVxuICAgICAgaW5wdXRUZWwudmFsdWUgPSAnJ1xuICAgICAgbW9kYWxQaG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbiAgaW5wdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwaG9uZU51bS50ZXh0Q29udGVudCA9IGlucHV0VGVsLnZhbHVlXG4gICAgaW5wdXRUZWwudmFsdWUgPSAnJ1xuICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBjaGFuZ2VQaG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoIW1vZGFsUGhvbmUuY29udGFpbnMoZS50YXJnZXQpICYmICFjaGFuZ2VQaG9uZUJ0bi5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Y2Nlc3NcIikpIHtcbiAgY29uc3Qgc2xpZGVyID0gaW5pdFN3aXBlcihcIi5zdWNjZXNzX19vcmRlcmVkLXN3aXBlclwiKVxuXG4gIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3VjY2Vzc19fZ3JhZGUtc3RhcicpO1xuICBidG5zLmZvckVhY2goKGJ0biwgaW5kZXgpID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBidG5zLmZvckVhY2goKGVsZW0sIGluZGV4RWxlbSkgPT4ge1xuICAgICAgICBpZiAoaW5kZXhFbGVtIDw9IGluZGV4KSB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB9IGVsc2UgIHtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY291bnRcIikpIHtcbiAgY29uc3QgYWRkQWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19hZGRyZXNzLWFkZCcpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19hZGRyZXNzLXNlYXJjaCcpO1xuICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19hZGRyZXNzLXNlYXJjaC1pbnB1dCcpXG4gIGNvbnN0IGlucHV0U2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2FkZHJlc3Mtc2VhcmNoLWJ0bicpXG5cbiAgYWRkQWRkcmVzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICB9KVxuXG4gIGlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBpbnB1dFNlYXJjaEJ0bikpXG4gIGlucHV0U2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFySW5wdXQoaW5wdXRTZWFyY2gpXG4gICAgc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBpbnB1dFNlYXJjaEJ0bilcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFtb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWFkZEFkZHJlc3MuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBtb2RhbE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbW9kYWxcIilcbiAgY29uc3QgY2hhbmdlTmFtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1uYW1lLXdyYXBcIilcbiAgY29uc3QgbmFtZVNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbmFtZVwiKVxuICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbW9kYWwtaW5wdXRcIilcbiAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbW9kYWwtYnRuXCIpXG5cbiAgaW5wdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IGlucHV0TmFtZS52YWx1ZVxuICAgIGlucHV0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgaW5wdXROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IGlucHV0TmFtZS52YWx1ZVxuICAgICAgaW5wdXROYW1lLnZhbHVlID0gXCJcIjtcbiAgICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcblxuICBjaGFuZ2VOYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKCFtb2RhbE5hbWUuY29udGFpbnMoZS50YXJnZXQpICYmICFjaGFuZ2VOYW1lQnRuLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9ja1wiKSkge1xuICBjb25zdCBzbGlkZXJPbmUgPSBpbml0U3dpcGVyKCcuc3RvY2tfX2Jsb2NrLXN3aXBlcicpXG4gIGNvbnN0IHNsaWRlclR3byA9IGluaXRTd2lwZXIoJy5zdG9ja19fYmxvY2stc3dpcGVyLTInKVxuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdGF1cmFudFwiKSkge1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbiAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRfX3NldHRpbmdzLXNlYXJjaC1pbnB1dFwiKVxuICBjb25zdCBpbnB1dFNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudF9fc2V0dGluZ3Mtc2VhcmNoLWJ0blwiKVxuICBjb25zdCBidG5Tb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50X19zZXR0aW5ncy1zb3J0XCIpO1xuICBjb25zdCBzb3J0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdcIik7XG4gIGNvbnN0IHNjcm9sbFNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdfX2JveFwiKVxuICBjb25zdCBidG5GaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRfX3NldHRpbmdzLWZpbHRlclwiKTtcbiAgY29uc3QgZmlsdGVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlclwiKTtcbiAgY29uc3Qgc2Nyb2xsRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX2JveFwiKTtcblxuXG4gIGlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBpbnB1dFNlYXJjaEJ0bikpXG4gIGlucHV0U2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFySW5wdXQoaW5wdXRTZWFyY2gpXG4gICAgc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBpbnB1dFNlYXJjaEJ0bilcbiAgfSlcblxuXG4gIGJ0blNvcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3Blbk1vZGFsKHNvcnRNb2RhbClcbiAgfSlcbiAgYnRuRmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG9wZW5Nb2RhbChmaWx0ZXJNb2RhbClcbiAgfSlcblxuICBzZXR1cE1vZGFsRXZlbnRzKHNvcnRNb2RhbCwgc2Nyb2xsU29ydClcbiAgc2V0dXBNb2RhbEV2ZW50cyhmaWx0ZXJNb2RhbCwgc2Nyb2xsRmlsdGVyKVxuXG4gIGNvbnN0IGZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2J0bicpO1xuXG4gIGZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZmlsdGVyQnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghc29ydE1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuU29ydC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHNvcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWZpbHRlck1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuRmlsdGVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgZmlsdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlc3RhdXJhbnRzRmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3RhdXJhbnRfX3NldHRpbmdzLWZpbHRlcnMtYnRuJylcblxuICByZXN0YXVyYW50c0ZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBzd2lwZXIgID0gaW5pdFN3aXBlcignLnJlc3RhdXJhbnRfX3N0b2NrLXN3aXBlcicpXG4gIGNvbnN0IHN3aXBlcjIgPSBpbml0U3dpcGVyKCcucmVzdGF1cmFudF9fb2ZmZXJzLXN3aXBlcicpXG4gIGNvbnN0IHN3aXBlcjMgPSBpbml0U3dpcGVyKCcucmVzdGF1cmFudF9fb2ZmZXJzLXN3aXBlci0yJylcblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0XCIpKSB7XG4gIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoXCIucHJvZHVjdF9fdG9wLXN3aXBlclwiLCB7XG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMFxuICB9KVxuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtYWRkXCIpXG4gIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1jb3VudGVyXCIpXG4gIGNvbnN0IGNvdW50ID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbiAgY29uc3QgbWludXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWNvdW50ZXItbWludXNcIik7XG4gIGNvbnN0IHBsdXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWNvdW50ZXItcGx1c1wiKTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtvcGVuQ291bnRlcihidG4sIGNvdW50ZXIpfSk7XG5cbiAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwibWludXNcIil9KVxuXG4gIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwicGx1c1wiKX0pXG5cbiAgY29uc3Qgc3dpcGVyMiA9IGluaXRTd2lwZXIoXCIucHJvZHVjdF9fYWRkaXRpb25hbC1zd2lwZXJcIilcbiAgY29uc3Qgc3dpcGVyMyA9IGluaXRTd2lwZXIoXCIucHJvZHVjdF9fYWRkaXRpb25hbC1zd2lwZXItMlwiKVxufVxuLy8g0KTRg9C90LrRhtC40LhcbmZ1bmN0aW9uIGluaXRTd2lwZXIoY29udGFpbmVyKSB7XG4gIHJldHVybiBuZXcgU3dpcGVyKGNvbnRhaW5lciwge1xuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgfSlcbn1cbmZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbihldmVudCkge1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydChldmVudCkge1xuICB0aGlzLnN0YXJ0WSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlKGV2ZW50KSB7XG4gIGxldCBlbmRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuICBsZXQgZGVsdGFZID0gZW5kWSAtIHRoaXMuc3RhcnRZO1xuICBpZiAoZGVsdGFZID4gMCkge1xuICAgIHRoaXMuc3R5bGUuYm90dG9tID0gLWRlbHRhWSArIFwicHhcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVUb3VjaEVuZChldmVudCkge1xuICBsZXQgZW5kWSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgbGV0IGRlbHRhWSA9IGVuZFkgLSB0aGlzLnN0YXJ0WTtcbiAgaWYgKGRlbHRhWSA+IDcwKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgfVxuICB0aGlzLnN0YXJ0WSA9IG51bGxcbn1cblxuZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG4gIHRoaXMuc3RhcnRZID0gZXZlbnQuY2xpZW50WTtcbiAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlKGV2ZW50KSB7XG4gIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICBsZXQgZW5kWSA9IGV2ZW50LmNsaWVudFk7XG4gICAgbGV0IGRlbHRhWSA9IGVuZFkgLSB0aGlzLnN0YXJ0WTtcbiAgICBpZiAoZGVsdGFZID4gMCkge1xuICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSAtZGVsdGFZICsgXCJweFwiO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZVVwKGV2ZW50KSB7XG4gIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICBsZXQgZW5kWSA9IGV2ZW50LmNsaWVudFk7XG4gICAgbGV0IGRlbHRhWSA9IGVuZFkgLSB0aGlzLnN0YXJ0WTtcbiAgICBpZiAoZGVsdGFZID4gNTApIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSBcIjBcIjtcbiAgICB9XG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gIH1cbiAgdGhpcy5zdGFydFkgPSBudWxsXG59XG5cbmZ1bmN0aW9uIHNldHVwTW9kYWxFdmVudHMobW9kYWwsIHNjcm9sbCkge1xuXG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdG9wUHJvcGFnYXRpb24pO1xuICBzY3JvbGwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgc3RvcFByb3BhZ2F0aW9uKVxuICBzY3JvbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBzdG9wUHJvcGFnYXRpb24pXG4gIHNjcm9sbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHN0b3BQcm9wYWdhdGlvbilcblxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBoYW5kbGVUb3VjaFN0YXJ0KTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBoYW5kbGVUb3VjaE1vdmUpO1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgaGFuZGxlVG91Y2hFbmQpXG5cbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVNb3VzZURvd24pO1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGhhbmRsZU1vdXNlVXApO1xufVxuXG5mdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBtb2RhbC5zdHlsZS5ib3R0b20gPSBcIjBcIlxufVxuXG5mdW5jdGlvbiByZWdQaG9uZShpbnB1dCkge1xuICByZXR1cm4gaW5wdXQudmFsdWUucmVwbGFjZSgvXFxEL2csICcnKTtcbn1cblxuZnVuY3Rpb24gaW5wdXRQaG9uZShlKSB7XG4gIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xuICBsZXQgaW5wdXROdW1iZXJWYWx1ZSA9IHJlZ1Bob25lKGlucHV0KTtcbiAgbGV0IGZvcm1hdHRlZElucHV0VmFsdWUgPSAnJztcbiAgbGV0IHNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnRcbiAgLy8g0JXRgdC70Lgg0LIg0LjQvdC/0YPRgiDQstCy0LXQtNC10L3RiyDRgdC40LzQvtCy0LvRiyDQvdC1INGB0L7QvtGC0LLQtdGC0YHQstGD0Y7RidC40LUg0YDQtdCz0YPQu9GP0YDQutC4LCDRgtC+INC30L3QsNGH0LXQvdC40LUg0LjQvdC/0YPRgtCwINGB0YLQsNC90L7QstC40YLRgdGPINC/0YPRgdGC0YvQvFxuICBpZiAoIWlucHV0TnVtYmVyVmFsdWUpIHJldHVybiBpbnB1dC52YWx1ZSA9ICcnXG4gIC8vINCSINGN0YLQvtC5INGH0LDRgdGC0Lgg0Y8g0L3QtSDRgdC+0LLRgdC10Lwg0L/QvtC90LjQvNCw0Y4g0YfRgtC+INC/0YDQvtC40YHRhdC+0LTQuNGCXG4gIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggIT0gc2VsZWN0aW9uU3RhcnQpIHtcbiAgICBpZiAoZS5kYXRhICYmIC9cXEQvZy50ZXN0KGUuZGF0YSkpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gaW5wdXROdW1iZXJWYWx1ZVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChbJzcnLCAnOCcsICc5J10uaW5jbHVkZXMoaW5wdXROdW1iZXJWYWx1ZVswXSkpIHtcbiAgICAvLyDQldGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCDQtNC10LLRj9GC0YwsINGC0L7Qs9C00LAg0LzRiyDQt9Cw0LzQtdC90Y/QtdC8INC/0LXRgNCy0YPRjiDRhtC40YTRgNGDINC90LAgNyDQuCDQtNC10LLRj9GC0LrRgyDQtNC10LvQsNC10Lwg0LLRgtC+0YDQvtC5INGG0LjRhNGA0L7QuVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlWzBdID09ICc5JykgaW5wdXROdW1iZXJWYWx1ZSA9ICc3JyArIGlucHV0TnVtYmVyVmFsdWU7XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWVbMF0gPT0gJzgnKSBpbnB1dE51bWJlclZhbHVlID0gJzcnXG4gICAgLy8g0JXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAgNywg0YLQvtCz0LTQsCDQt9C90LDRh9C10L3QuNC1INC40L3Qv9GD0YLQsCDQvdCw0YfQuNC90LDQtdGC0YHRjyDRgSArNywg0LXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAgOCwg0YLQvtCz0LTQsCDQt9C90LDRh9C10L3QuNC1INC90LDRh9C40L3QsNC10YLRgdGPINGBIDhcbiAgICBsZXQgZmlyc3RTeW1ib2wgPSAnKzcnO1xuICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBmaXJzdFN5bWJvbCArICcgJztcbiAgICAvLyDQldGB0LvQuCDQsiDQuNC90L/Rg9GC0LUg0LHQvtC70YzRiNC1INC+0LTQvdC+0Lkg0YbQuNGE0YDRiyDQtNC+0LHQsNCy0LvRj9C10Lwg0YHQutC+0LHQutGDINC+0YLQutGA0YvRgtC40Y8g0Lgg0YLQsNC6INC00LDQu9C10LVcbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcoJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDEsIDQpXG4gICAgfVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+PSA1KSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcpICcgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg0LCA3KVxuICAgIH1cbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gOCkge1xuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg3LCA5KVxuICAgIH1cbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gMTApIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJy0nICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoOSwgMTEpO1xuICAgIH1cbiAgfSBlbHNlIHsgLy/QldGB0LvQuCDQstCy0L7QtNC40LzQvtC1INGH0LjRgdC70L4g0L3QtSA3LCA4INC40LvQuCA5INGC0L7Qs9C00LAg0LTQvtCx0LDQstC70Y/QtdC8ICvQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0LLQstC10LTQtdC90L7QtSDRh9C40YHQu9C+XG4gICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9ICcrNyAoOScgKyBpbnB1dE51bWJlclZhbHVlO1xuICB9XG4gIGlucHV0LnZhbHVlID0gZm9ybWF0dGVkSW5wdXRWYWx1ZVxufVxuXG5mdW5jdGlvbiBvbmVQaG9uZUtleURvd24gKGUpIHtcbiAgbGV0IGlucHV0ID0gZS50YXJnZXQ7XG4gIGlmIChyZWdQaG9uZShpbnB1dCkubGVuZ3RoID09IDEgJiYgZS5rZXlDb2RlID09PSA4KSB7XG4gICAgaW5wdXQudmFsdWUgPSAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93Q2xlYXIoaW5wdXQsIGJ0bikge1xuICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgYnRuLmRpc2FibGVkID0gdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFySW5wdXQoaW5wdXQpIHtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBjb3VudENoYW5nZShjb3VudCwgZ29vZHMpIHtcbiAgY29uc3Qgc3BhbiA9IGNvdW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgY29uc3QgbWludXMgPSBjb3VudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgY29uc3QgcGx1cyA9IGNvdW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpIC0gMVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBudW07XG4gICAgaWYgKCEhZ29vZHMpIHtcbiAgICAgIGdvb2RzLnRleHRDb250ZW50ID0gYCR7bnVtfSDRiNGCLmBcbiAgICB9XG4gICAgZGlzYWJsZWRNaW51cyhudW0sIG1pbnVzKVxuICB9KVxuXG4gIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpICsgMVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBudW07XG4gICAgaWYgKCEhZ29vZHMpIHtcbiAgICAgIGdvb2RzLnRleHRDb250ZW50ID0gYCR7bnVtfSDRiNGCLmBcbiAgICB9XG4gICAgZGlzYWJsZWRNaW51cyhudW0sIG1pbnVzKVxuICB9KVxufVxuXG5mdW5jdGlvbiBkaXNhYmxlZE1pbnVzKG51bSwgYnRuKSB7XG4gIGlmIChudW0gPCAxKSB7XG4gICAgYnRuLmRpc2FibGVkID0gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gYWNjb3JkaW9uQWN0aXZlKGl0ZW0pIHtcbiAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpcy1zaG93XCIpO1xuICBsZXQgcGFuZWwgPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKCFwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWNjb3JkaW9uTm90QWN0aXZlKGl0ZW0pIHtcbiAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1zaG93XCIpO1xuICBsZXQgcGFuZWwgPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xuICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGxcbiAgfVxufVxuXG5mdW5jdGlvbiBvcGVuQ291bnRlcihidG4sIGNvdW50ZXIpIHtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJub3QtYWN0aXZlXCIpO1xuICBjb3VudGVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbn1cblxuZnVuY3Rpb24gY2xvc2VDb3VudGVyKGJ0biwgY291bnRlcikge1xuICBidG4uY2xhc3NMaXN0LnJlbW92ZShcIm5vdC1hY3RpdmVcIik7XG4gIGNvdW50ZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VDb3VudGVyKHNwYW4sIGJ0biwgY291bnRlciwgb3BlcmF0b3IpIHtcblxuICBsZXQgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpO1xuXG4gIGlmIChvcGVyYXRvciA9PT0gXCJwbHVzXCIpIHtcbiAgICBudW0gKz0gMVxuICB9IGVsc2Uge1xuICAgIG51bSAtPTFcbiAgfVxuXG4gIG51bSA8IDEgPyBjbG9zZUNvdW50ZXIoYnRuLCBjb3VudGVyKSA6IHNwYW4udGV4dENvbnRlbnQgPSBudW1cbn1cblxuZnVuY3Rpb24gcHJvZHVjdENhcmQoKSB7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1jYXJkXCIpO1xuICBjYXJkcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIGNvbnN0IGJ0bldyYXAgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1idG5zXCIpXG4gICAgY29uc3QgYnRuID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtYWRkXCIpXG4gICAgY29uc3QgY291bnRlciA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLWNvdW50ZXJcIilcbiAgICBjb25zdCBjb3VudCA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4gICAgY29uc3QgbWludXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1taW51c1wiKTtcbiAgICBjb25zdCBwbHVzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtcGx1c1wiKTtcblxuICAgIGJ0bldyYXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7b3BlbkNvdW50ZXIoYnRuLCBjb3VudGVyKX0pO1xuXG4gICAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwibWludXNcIil9KVxuXG4gICAgcGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2NoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJwbHVzXCIpfSlcbiAgfSlcbn0iXX0=
