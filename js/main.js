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
  btnSort.addEventListener('click', function () {
    openModal(sortModal);
  });
  btnFilter.addEventListener('click', function () {
    openModal(filterModal);
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
  this.startScrollTop = this.querySelector('.sorting__box').scrollTop;
  this.isScrolling = false;
}

function handleTouchMove(event) {
  var endY = event.touches[0].clientY;
  var deltaY = endY - this.startY;

  if (this.querySelector('.sorting__box').scrollTop !== this.startScrollTop) {
    this.isScrolling = true;
  }

  if (deltaY > 0 && !this.isScrolling) {
    this.classList.remove("active");
    document.body.classList.remove("lock");
  }
}

function handleMouseDown(event) {
  this.startY = event.clientY;
  this.isDragging = false;
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

function handleMouseDragStart(event) {
  this.startY = event.clientY;
  this.isDragging = true;
}

function setupModalEvents(modal) {
  var _this = this;

  modal.addEventListener("click", stopPropagation);
  modal.addEventListener("touchstart", handleTouchStart);
  modal.addEventListener("touchmove", handleTouchMove);
  modal.addEventListener("mousedown", handleMouseDragStart);
  modal.addEventListener("mousemove", handleMouseMove);
  modal.addEventListener("mouseup", handleMouseUp);
  var box = modal.querySelector('.sorting__box');
  box.addEventListener('scroll', function (e) {
    _this.isScrolling = true;
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNsaWRlck9uZSIsImluaXRTd2lwZXIiLCJzbGlkZXJUd28iLCJzbGlkZXJUaHJlZSIsInNsaWRlckZvdXIiLCJzbGlkZXJGaXZlIiwiYnRuU29ydCIsInF1ZXJ5U2VsZWN0b3IiLCJzb3J0TW9kYWwiLCJzY3JvbGxTb3J0IiwiYnRuRmlsdGVyIiwiZmlsdGVyTW9kYWwiLCJzY3JvbGxGaWx0ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib3Blbk1vZGFsIiwic2V0dXBNb2RhbEV2ZW50cyIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJCdG4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsImVsZW0iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJyZXN0YXVyYW50c0ZpbHRlckJ0biIsImlucHV0U2VhcmNoIiwiYnRuQ2xlYXJTZWFyY2giLCJzaG93Q2xlYXIiLCJjbGVhcklucHV0IiwiYWRkcmVzc0J0biIsImFkZEJ0biIsImFkZHJlc3NTZWFyY2giLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbnMiLCJhY2NvcmRpb25Ob3RBY3RpdmUiLCJhY2NvcmRpb25BY3RpdmUiLCJlIiwidGFyZ2V0IiwiYm9keSIsInRlbCIsImlucHV0UGhvbmUiLCJvbmVQaG9uZUtleURvd24iLCJiYXNrZXREZWxldGUiLCJtb2RhbERlbGV0ZSIsImJvb3RzdHJhcCIsIk1vZGFsIiwiY2FyZHMiLCJjb3VudCIsImNhcmQiLCJjb3VudGVyIiwiZ29vZHMiLCJjb3VudENoYW5nZSIsInNob3ciLCJzbGlkZXIiLCJtb2RhbFBob25lIiwiY2hhbmdlUGhvbmVCdG4iLCJwaG9uZU51bSIsImlucHV0VGVsIiwiaW5wdXRCdG4iLCJrZXlDb2RlIiwidGV4dENvbnRlbnQiLCJ2YWx1ZSIsImJ0bnMiLCJpbmRleCIsImluZGV4RWxlbSIsImFkZEFkZHJlc3MiLCJtb2RhbCIsImlucHV0U2VhcmNoQnRuIiwibW9kYWxOYW1lIiwiY2hhbmdlTmFtZUJ0biIsIm5hbWVTcGFuIiwiaW5wdXROYW1lIiwia2V5IiwicHJvZHVjdENhcmQiLCJzd2lwZXIiLCJzd2lwZXIyIiwic3dpcGVyMyIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJtaW51cyIsInBsdXMiLCJvcGVuQ291bnRlciIsImNoYW5nZUNvdW50ZXIiLCJjb250YWluZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJldmVudCIsImhhbmRsZVRvdWNoU3RhcnQiLCJzdGFydFkiLCJ0b3VjaGVzIiwiY2xpZW50WSIsInN0YXJ0U2Nyb2xsVG9wIiwic2Nyb2xsVG9wIiwiaXNTY3JvbGxpbmciLCJoYW5kbGVUb3VjaE1vdmUiLCJlbmRZIiwiZGVsdGFZIiwiaGFuZGxlTW91c2VEb3duIiwiaXNEcmFnZ2luZyIsImhhbmRsZU1vdXNlTW92ZSIsInN0eWxlIiwiYm90dG9tIiwiaGFuZGxlTW91c2VVcCIsImhhbmRsZU1vdXNlRHJhZ1N0YXJ0IiwiYm94IiwicmVnUGhvbmUiLCJpbnB1dCIsInJlcGxhY2UiLCJpbnB1dE51bWJlclZhbHVlIiwiZm9ybWF0dGVkSW5wdXRWYWx1ZSIsInNlbGVjdGlvblN0YXJ0IiwibGVuZ3RoIiwiZGF0YSIsInRlc3QiLCJpbmNsdWRlcyIsImZpcnN0U3ltYm9sIiwic3Vic3RyaW5nIiwiZGlzYWJsZWQiLCJzcGFuIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJsYXN0RWxlbWVudENoaWxkIiwibnVtIiwiTnVtYmVyIiwiZGlzYWJsZWRNaW51cyIsIml0ZW0iLCJwYW5lbCIsIm5leHRFbGVtZW50U2libGluZyIsIm1heEhlaWdodCIsInNjcm9sbEhlaWdodCIsImNsb3NlQ291bnRlciIsIm9wZXJhdG9yIiwiYnRuV3JhcCIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFKLEVBQXNDO0VBQ3BDLElBQU1DLFNBQVMs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QyxLQUFELEVBQVE1QixHQUFSLEVBQWE4QixPQUFiLEVBQXNCLE1BQXRCLENBQWI7SUFBMkMsQ0FBakY7RUFDRCxDQWhCRDtBQWlCRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5kZXhcIikpIHtcbiAgY29uc3Qgc2xpZGVyT25lID0gaW5pdFN3aXBlcihcIi5tYWluLXN0b2NrX19zd2lwZXItMVwiKVxuICBjb25zdCBzbGlkZXJUd28gPSBpbml0U3dpcGVyKFwiLm1haW4tc3RvY2tfX3N3aXBlci0yXCIpXG4gIGNvbnN0IHNsaWRlclRocmVlID0gaW5pdFN3aXBlcihcIi5tYWluLXN0b2NrX19zd2lwZXItM1wiKVxuICBjb25zdCBzbGlkZXJGb3VyID0gaW5pdFN3aXBlcihcIi5tYWluLXN0b2NrX19zd2lwZXItNFwiKVxuICBjb25zdCBzbGlkZXJGaXZlID0gaW5pdFN3aXBlcihcIi5tYWluLXN0b2NrX19zd2lwZXItNVwiKVxuXG4gIGNvbnN0IGJ0blNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRzX19zb3J0XCIpO1xuICBjb25zdCBzb3J0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdcIik7XG4gIGNvbnN0IHNjcm9sbFNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdfX2JveFwiKVxuICBjb25zdCBidG5GaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRzX19maWx0ZXJcIik7XG4gIGNvbnN0IGZpbHRlck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJcIik7XG4gIGNvbnN0IHNjcm9sbEZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyX19ib3hcIik7XG4gIGJ0blNvcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3Blbk1vZGFsKHNvcnRNb2RhbClcbiAgfSlcbiAgYnRuRmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG9wZW5Nb2RhbChmaWx0ZXJNb2RhbClcbiAgfSlcblxuICBzZXR1cE1vZGFsRXZlbnRzKHNvcnRNb2RhbCwgc2Nyb2xsU29ydClcbiAgc2V0dXBNb2RhbEV2ZW50cyhmaWx0ZXJNb2RhbCwgc2Nyb2xsRmlsdGVyKVxuICBjb25zb2xlLmxvZyhzY3JvbGxTb3J0KVxuXG4gIGNvbnN0IGZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2J0bicpO1xuXG4gIGZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZmlsdGVyQnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgcmVzdGF1cmFudHNGaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdGF1cmFudHNfX2ZpbHRlcnMtYnRuJylcblxuICByZXN0YXVyYW50c0ZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2lucHV0Jyk7XG4gIGNvbnN0IGJ0bkNsZWFyU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VhcmNoLWNsZWFyJylcbiAgaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7c2hvd0NsZWFyKGlucHV0U2VhcmNoLCBidG5DbGVhclNlYXJjaCl9KVxuICBidG5DbGVhclNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFySW5wdXQoaW5wdXRTZWFyY2gpXG4gICAgc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBidG5DbGVhclNlYXJjaClcbiAgfSlcblxuICBjb25zdCBhZGRyZXNzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYWRkcmVzcy1idG4nKVxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19hZGRyZXNzLWFkZCcpXG4gIGNvbnN0IGFkZHJlc3NTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19hZGRyZXNzLXNlYXJjaCcpXG5cbiAgYWRkcmVzc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRyZXNzQnRuLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtc2hvd1wiKSA/IGFjY29yZGlvbk5vdEFjdGl2ZShhZGRyZXNzQnRuKSA6IGFjY29yZGlvbkFjdGl2ZShhZGRyZXNzQnRuKVxuICB9KVxuXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRyZXNzU2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIXNvcnRNb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWJ0blNvcnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBzb3J0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFmaWx0ZXJNb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWJ0bkZpbHRlci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGZpbHRlck1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghYWRkcmVzc0J0bi5wYXJlbnRFbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgYWNjb3JkaW9uTm90QWN0aXZlKGFkZHJlc3NCdG4pXG4gICAgICBhZGRyZXNzU2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0aG9yaXphdGlvblwiKSkge1xuICBjb25zdCB0ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGhvcml6YXRpb25fX2lucHV0W3R5cGU9J3RlbCddXCIpO1xuICB0ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7aW5wdXRQaG9uZShlKX0pXG4gIHRlbC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge29uZVBob25lS2V5RG93bihlKX0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2tldFwiKSkge1xuICBjb25zdCBiYXNrZXREZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19oZWFkZXItZGVsZXRlJyk7XG4gIGNvbnN0IG1vZGFsRGVsZXRlID0gbmV3IGJvb3RzdHJhcC5Nb2RhbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLW1vZGFsLWRlbGV0ZVwiKSlcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFza2V0X19zZWxlY3RlZC1pdGVtJylcblxuICBjb25zdCBjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRfX2NvdW50LWNvdW50JylcblxuICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgIGNvbnN0IGNvdW50ZXIgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRfX3NlbGVjdGVkLWl0ZW0tY291bnRlcicpXG4gICAgY29uc3QgZ29vZHMgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRfX3NlbGVjdGVkLWl0ZW0tY291bnQnKVxuICAgIGNvdW50Q2hhbmdlKGNvdW50ZXIsIGdvb2RzKTtcbiAgfSlcblxuICBiYXNrZXREZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7bW9kYWxEZWxldGUuc2hvdygpfSlcblxuICBjb25zdCBzbGlkZXIgPSBpbml0U3dpcGVyKFwiLmJhc2tldF9fc3dpcGVyXCIpXG5cbiAgY291bnRDaGFuZ2UoY291bnQpXG5cbiAgY29uc3QgbW9kYWxQaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLW1vZGFsXCIpXG4gIGNvbnN0IGNoYW5nZVBob25lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tcGhvbmVcIilcbiAgY29uc3QgcGhvbmVOdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1waG9uZS1udW1cIilcbiAgY29uc3QgaW5wdXRUZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1tb2RhbC1pbnB1dFwiKVxuICBjb25zdCBpbnB1dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLW1vZGFsLWJ0blwiKVxuXG4gIGlucHV0VGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge2lucHV0UGhvbmUoZSl9KVxuICBpbnB1dFRlbC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIG9uZVBob25lS2V5RG93bihlKVxuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBwaG9uZU51bS50ZXh0Q29udGVudCA9IGlucHV0VGVsLnZhbHVlXG4gICAgICBpbnB1dFRlbC52YWx1ZSA9ICcnXG4gICAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxuICBpbnB1dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBob25lTnVtLnRleHRDb250ZW50ID0gaW5wdXRUZWwudmFsdWVcbiAgICBpbnB1dFRlbC52YWx1ZSA9ICcnXG4gICAgbW9kYWxQaG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGNoYW5nZVBob25lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWxQaG9uZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmICghbW9kYWxQaG9uZS5jb250YWlucyhlLnRhcmdldCkgJiYgIWNoYW5nZVBob25lQnRuLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgbW9kYWxQaG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VjY2Vzc1wiKSkge1xuICBjb25zdCBzbGlkZXIgPSBpbml0U3dpcGVyKFwiLnN1Y2Nlc3NfX29yZGVyZWQtc3dpcGVyXCIpXG5cbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWNjZXNzX19ncmFkZS1zdGFyJyk7XG4gIGJ0bnMuZm9yRWFjaCgoYnRuLCBpbmRleCkgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGJ0bnMuZm9yRWFjaCgoZWxlbSwgaW5kZXhFbGVtKSA9PiB7XG4gICAgICAgIGlmIChpbmRleEVsZW0gPD0gaW5kZXgpIHtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIH0gZWxzZSAge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjb3VudFwiKSkge1xuICBjb25zdCBhZGRBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2FkZHJlc3MtYWRkJyk7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2FkZHJlc3Mtc2VhcmNoJyk7XG4gIGNvbnN0IGlucHV0U2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2FkZHJlc3Mtc2VhcmNoLWlucHV0JylcbiAgY29uc3QgaW5wdXRTZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fYWRkcmVzcy1zZWFyY2gtYnRuJylcblxuICBhZGRBZGRyZXNzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gIH0pXG5cbiAgaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGlucHV0U2VhcmNoQnRuKSlcbiAgaW5wdXRTZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJJbnB1dChpbnB1dFNlYXJjaClcbiAgICBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGlucHV0U2VhcmNoQnRuKVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIW1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYWRkQWRkcmVzcy5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IG1vZGFsTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1tb2RhbFwiKVxuICBjb25zdCBjaGFuZ2VOYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW5hbWUtd3JhcFwiKVxuICBjb25zdCBuYW1lU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1uYW1lXCIpXG4gIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1tb2RhbC1pbnB1dFwiKVxuICBjb25zdCBpbnB1dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1tb2RhbC1idG5cIilcblxuICBpbnB1dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG5hbWVTcGFuLnRleHRDb250ZW50ID0gaW5wdXROYW1lLnZhbHVlXG4gICAgaW5wdXROYW1lLnZhbHVlID0gXCJcIjtcbiAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBpbnB1dE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIG5hbWVTcGFuLnRleHRDb250ZW50ID0gaW5wdXROYW1lLnZhbHVlXG4gICAgICBpbnB1dE5hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxuXG4gIGNoYW5nZU5hbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoIW1vZGFsTmFtZS5jb250YWlucyhlLnRhcmdldCkgJiYgIWNoYW5nZU5hbWVCdG4uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b2NrXCIpKSB7XG4gIGNvbnN0IHNsaWRlck9uZSA9IGluaXRTd2lwZXIoJy5zdG9ja19fYmxvY2stc3dpcGVyJylcbiAgY29uc3Qgc2xpZGVyVHdvID0gaW5pdFN3aXBlcignLnN0b2NrX19ibG9jay1zd2lwZXItMicpXG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZFwiKSkge1xuICAgIHByb2R1Y3RDYXJkKCk7XG4gIH1cblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN0YXVyYW50XCIpKSB7XG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZFwiKSkge1xuICAgIHByb2R1Y3RDYXJkKCk7XG4gIH1cblxuICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudF9fc2V0dGluZ3Mtc2VhcmNoLWlucHV0XCIpXG4gIGNvbnN0IGlucHV0U2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50X19zZXR0aW5ncy1zZWFyY2gtYnRuXCIpXG4gIGNvbnN0IGJ0blNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRfX3NldHRpbmdzLXNvcnRcIik7XG4gIGNvbnN0IHNvcnRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ1wiKTtcbiAgY29uc3Qgc2Nyb2xsU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ19fYm94XCIpXG4gIGNvbnN0IGJ0bkZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudF9fc2V0dGluZ3MtZmlsdGVyXCIpO1xuICBjb25zdCBmaWx0ZXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyXCIpO1xuICBjb25zdCBzY3JvbGxGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcl9fYm94XCIpO1xuXG5cbiAgaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGlucHV0U2VhcmNoQnRuKSlcbiAgaW5wdXRTZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJJbnB1dChpbnB1dFNlYXJjaClcbiAgICBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGlucHV0U2VhcmNoQnRuKVxuICB9KVxuXG5cbiAgYnRuU29ydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBvcGVuTW9kYWwoc29ydE1vZGFsKVxuICB9KVxuICBidG5GaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3Blbk1vZGFsKGZpbHRlck1vZGFsKVxuICB9KVxuXG4gIHNldHVwTW9kYWxFdmVudHMoc29ydE1vZGFsLCBzY3JvbGxTb3J0KVxuICBzZXR1cE1vZGFsRXZlbnRzKGZpbHRlck1vZGFsLCBzY3JvbGxGaWx0ZXIpXG5cbiAgY29uc3QgZmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcl9fYnRuJyk7XG5cbiAgZmlsdGVyQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBmaWx0ZXJCdG4uZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFzb3J0TW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFidG5Tb3J0LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgc29ydE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghZmlsdGVyTW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFidG5GaWx0ZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBmaWx0ZXJNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG5cbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgcmVzdGF1cmFudHNGaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdGF1cmFudF9fc2V0dGluZ3MtZmlsdGVycy1idG4nKVxuXG4gIHJlc3RhdXJhbnRzRmlsdGVyQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZXN0YXVyYW50c0ZpbHRlckJ0bi5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKVxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IHN3aXBlciAgPSBpbml0U3dpcGVyKCcucmVzdGF1cmFudF9fc3RvY2stc3dpcGVyJylcbiAgY29uc3Qgc3dpcGVyMiA9IGluaXRTd2lwZXIoJy5yZXN0YXVyYW50X19vZmZlcnMtc3dpcGVyJylcbiAgY29uc3Qgc3dpcGVyMyA9IGluaXRTd2lwZXIoJy5yZXN0YXVyYW50X19vZmZlcnMtc3dpcGVyLTInKVxuXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RcIikpIHtcbiAgY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5wcm9kdWN0X190b3Atc3dpcGVyXCIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBzcGFjZUJldHdlZW46IDEwXG4gIH0pXG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZFwiKSkge1xuICAgIHByb2R1Y3RDYXJkKCk7XG4gIH1cblxuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1hZGRcIilcbiAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWNvdW50ZXJcIilcbiAgY29uc3QgY291bnQgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpO1xuICBjb25zdCBtaW51cyA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtY291bnRlci1taW51c1wiKTtcbiAgY29uc3QgcGx1cyA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtY291bnRlci1wbHVzXCIpO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge29wZW5Db3VudGVyKGJ0biwgY291bnRlcil9KTtcblxuICBtaW51cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2NoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJtaW51c1wiKX0pXG5cbiAgcGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2NoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJwbHVzXCIpfSlcblxuICBjb25zdCBzd2lwZXIyID0gaW5pdFN3aXBlcihcIi5wcm9kdWN0X19hZGRpdGlvbmFsLXN3aXBlclwiKVxuICBjb25zdCBzd2lwZXIzID0gaW5pdFN3aXBlcihcIi5wcm9kdWN0X19hZGRpdGlvbmFsLXN3aXBlci0yXCIpXG59XG4vLyDQpNGD0L3QutGG0LjQuFxuZnVuY3Rpb24gaW5pdFN3aXBlcihjb250YWluZXIpIHtcbiAgcmV0dXJuIG5ldyBTd2lwZXIoY29udGFpbmVyLCB7XG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgc3BhY2VCZXR3ZWVuOiAyMFxuICB9KVxufVxuZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KGV2ZW50KSB7XG4gIHRoaXMuc3RhcnRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuICB0aGlzLnN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuc29ydGluZ19fYm94Jykuc2Nyb2xsVG9wO1xuICB0aGlzLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZShldmVudCkge1xuICBsZXQgZW5kWSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgbGV0IGRlbHRhWSA9IGVuZFkgLSB0aGlzLnN0YXJ0WTtcblxuICBpZiAodGhpcy5xdWVyeVNlbGVjdG9yKCcuc29ydGluZ19fYm94Jykuc2Nyb2xsVG9wICE9PSB0aGlzLnN0YXJ0U2Nyb2xsVG9wKSB7XG4gICAgdGhpcy5pc1Njcm9sbGluZyA9IHRydWU7XG4gIH1cblxuICBpZiAoZGVsdGFZID4gMCAmJiAhdGhpcy5pc1Njcm9sbGluZykge1xuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuICB0aGlzLnN0YXJ0WSA9IGV2ZW50LmNsaWVudFk7XG4gIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmUoZXZlbnQpIHtcbiAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xuICAgIGxldCBlbmRZID0gZXZlbnQuY2xpZW50WTtcbiAgICBsZXQgZGVsdGFZID0gZW5kWSAtIHRoaXMuc3RhcnRZO1xuICAgIGlmIChkZWx0YVkgPiAwKSB7XG4gICAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IC1kZWx0YVkgKyBcInB4XCI7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoZXZlbnQpIHtcbiAgbGV0IGVuZFkgPSBldmVudC5jbGllbnRZO1xuICBsZXQgZGVsdGFZID0gZW5kWSAtIHRoaXMuc3RhcnRZO1xuICBpZiAoZGVsdGFZID4gNTApIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IFwiMFwiO1xuICB9XG4gIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZURyYWdTdGFydChldmVudCkge1xuICB0aGlzLnN0YXJ0WSA9IGV2ZW50LmNsaWVudFk7XG4gIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIHNldHVwTW9kYWxFdmVudHMobW9kYWwpIHtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0b3BQcm9wYWdhdGlvbik7XG5cbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgaGFuZGxlVG91Y2hTdGFydCk7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgaGFuZGxlVG91Y2hNb3ZlKTtcblxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZU1vdXNlRHJhZ1N0YXJ0KTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoYW5kbGVNb3VzZVVwKTtcblxuICBjb25zdCBib3ggPSBtb2RhbC5xdWVyeVNlbGVjdG9yKCcuc29ydGluZ19fYm94Jyk7XG4gIGJveC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoZSkgPT4ge1xuICAgIHRoaXMuaXNTY3JvbGxpbmcgPSB0cnVlO1xuICB9KTtcbn1cblxuXG5mdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBtb2RhbC5zdHlsZS5ib3R0b20gPSBcIjBcIlxufVxuXG5mdW5jdGlvbiByZWdQaG9uZShpbnB1dCkge1xuICByZXR1cm4gaW5wdXQudmFsdWUucmVwbGFjZSgvXFxEL2csICcnKTtcbn1cblxuZnVuY3Rpb24gaW5wdXRQaG9uZShlKSB7XG4gIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xuICBsZXQgaW5wdXROdW1iZXJWYWx1ZSA9IHJlZ1Bob25lKGlucHV0KTtcbiAgbGV0IGZvcm1hdHRlZElucHV0VmFsdWUgPSAnJztcbiAgbGV0IHNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnRcbiAgLy8g0JXRgdC70Lgg0LIg0LjQvdC/0YPRgiDQstCy0LXQtNC10L3RiyDRgdC40LzQvtCy0LvRiyDQvdC1INGB0L7QvtGC0LLQtdGC0YHQstGD0Y7RidC40LUg0YDQtdCz0YPQu9GP0YDQutC4LCDRgtC+INC30L3QsNGH0LXQvdC40LUg0LjQvdC/0YPRgtCwINGB0YLQsNC90L7QstC40YLRgdGPINC/0YPRgdGC0YvQvFxuICBpZiAoIWlucHV0TnVtYmVyVmFsdWUpIHJldHVybiBpbnB1dC52YWx1ZSA9ICcnXG4gIC8vINCSINGN0YLQvtC5INGH0LDRgdGC0Lgg0Y8g0L3QtSDRgdC+0LLRgdC10Lwg0L/QvtC90LjQvNCw0Y4g0YfRgtC+INC/0YDQvtC40YHRhdC+0LTQuNGCXG4gIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggIT0gc2VsZWN0aW9uU3RhcnQpIHtcbiAgICBpZiAoZS5kYXRhICYmIC9cXEQvZy50ZXN0KGUuZGF0YSkpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gaW5wdXROdW1iZXJWYWx1ZVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChbJzcnLCAnOCcsICc5J10uaW5jbHVkZXMoaW5wdXROdW1iZXJWYWx1ZVswXSkpIHtcbiAgICAvLyDQldGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCDQtNC10LLRj9GC0YwsINGC0L7Qs9C00LAg0LzRiyDQt9Cw0LzQtdC90Y/QtdC8INC/0LXRgNCy0YPRjiDRhtC40YTRgNGDINC90LAgNyDQuCDQtNC10LLRj9GC0LrRgyDQtNC10LvQsNC10Lwg0LLRgtC+0YDQvtC5INGG0LjRhNGA0L7QuVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlWzBdID09ICc5JykgaW5wdXROdW1iZXJWYWx1ZSA9ICc3JyArIGlucHV0TnVtYmVyVmFsdWU7XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWVbMF0gPT0gJzgnKSBpbnB1dE51bWJlclZhbHVlID0gJzcnXG4gICAgLy8g0JXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAgNywg0YLQvtCz0LTQsCDQt9C90LDRh9C10L3QuNC1INC40L3Qv9GD0YLQsCDQvdCw0YfQuNC90LDQtdGC0YHRjyDRgSArNywg0LXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAgOCwg0YLQvtCz0LTQsCDQt9C90LDRh9C10L3QuNC1INC90LDRh9C40L3QsNC10YLRgdGPINGBIDhcbiAgICBsZXQgZmlyc3RTeW1ib2wgPSAnKzcnO1xuICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBmaXJzdFN5bWJvbCArICcgJztcbiAgICAvLyDQldGB0LvQuCDQsiDQuNC90L/Rg9GC0LUg0LHQvtC70YzRiNC1INC+0LTQvdC+0Lkg0YbQuNGE0YDRiyDQtNC+0LHQsNCy0LvRj9C10Lwg0YHQutC+0LHQutGDINC+0YLQutGA0YvRgtC40Y8g0Lgg0YLQsNC6INC00LDQu9C10LVcbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcoJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDEsIDQpXG4gICAgfVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+PSA1KSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcpICcgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg0LCA3KVxuICAgIH1cbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gOCkge1xuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg3LCA5KVxuICAgIH1cbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gMTApIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJy0nICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoOSwgMTEpO1xuICAgIH1cbiAgfSBlbHNlIHsgLy/QldGB0LvQuCDQstCy0L7QtNC40LzQvtC1INGH0LjRgdC70L4g0L3QtSA3LCA4INC40LvQuCA5INGC0L7Qs9C00LAg0LTQvtCx0LDQstC70Y/QtdC8ICvQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0LLQstC10LTQtdC90L7QtSDRh9C40YHQu9C+XG4gICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9ICcrNyAoOScgKyBpbnB1dE51bWJlclZhbHVlO1xuICB9XG4gIGlucHV0LnZhbHVlID0gZm9ybWF0dGVkSW5wdXRWYWx1ZVxufVxuXG5mdW5jdGlvbiBvbmVQaG9uZUtleURvd24gKGUpIHtcbiAgbGV0IGlucHV0ID0gZS50YXJnZXQ7XG4gIGlmIChyZWdQaG9uZShpbnB1dCkubGVuZ3RoID09IDEgJiYgZS5rZXlDb2RlID09PSA4KSB7XG4gICAgaW5wdXQudmFsdWUgPSAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93Q2xlYXIoaW5wdXQsIGJ0bikge1xuICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgYnRuLmRpc2FibGVkID0gdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFySW5wdXQoaW5wdXQpIHtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBjb3VudENoYW5nZShjb3VudCwgZ29vZHMpIHtcbiAgY29uc3Qgc3BhbiA9IGNvdW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgY29uc3QgbWludXMgPSBjb3VudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgY29uc3QgcGx1cyA9IGNvdW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpIC0gMVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBudW07XG4gICAgaWYgKCEhZ29vZHMpIHtcbiAgICAgIGdvb2RzLnRleHRDb250ZW50ID0gYCR7bnVtfSDRiNGCLmBcbiAgICB9XG4gICAgZGlzYWJsZWRNaW51cyhudW0sIG1pbnVzKVxuICB9KVxuXG4gIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpICsgMVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBudW07XG4gICAgaWYgKCEhZ29vZHMpIHtcbiAgICAgIGdvb2RzLnRleHRDb250ZW50ID0gYCR7bnVtfSDRiNGCLmBcbiAgICB9XG4gICAgZGlzYWJsZWRNaW51cyhudW0sIG1pbnVzKVxuICB9KVxufVxuXG5mdW5jdGlvbiBkaXNhYmxlZE1pbnVzKG51bSwgYnRuKSB7XG4gIGlmIChudW0gPCAxKSB7XG4gICAgYnRuLmRpc2FibGVkID0gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gYWNjb3JkaW9uQWN0aXZlKGl0ZW0pIHtcbiAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpcy1zaG93XCIpO1xuICBsZXQgcGFuZWwgPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKCFwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWNjb3JkaW9uTm90QWN0aXZlKGl0ZW0pIHtcbiAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1zaG93XCIpO1xuICBsZXQgcGFuZWwgPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xuICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGxcbiAgfVxufVxuXG5mdW5jdGlvbiBvcGVuQ291bnRlcihidG4sIGNvdW50ZXIpIHtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJub3QtYWN0aXZlXCIpO1xuICBjb3VudGVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbn1cblxuZnVuY3Rpb24gY2xvc2VDb3VudGVyKGJ0biwgY291bnRlcikge1xuICBidG4uY2xhc3NMaXN0LnJlbW92ZShcIm5vdC1hY3RpdmVcIik7XG4gIGNvdW50ZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VDb3VudGVyKHNwYW4sIGJ0biwgY291bnRlciwgb3BlcmF0b3IpIHtcblxuICBsZXQgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpO1xuXG4gIGlmIChvcGVyYXRvciA9PT0gXCJwbHVzXCIpIHtcbiAgICBudW0gKz0gMVxuICB9IGVsc2Uge1xuICAgIG51bSAtPTFcbiAgfVxuXG4gIG51bSA8IDEgPyBjbG9zZUNvdW50ZXIoYnRuLCBjb3VudGVyKSA6IHNwYW4udGV4dENvbnRlbnQgPSBudW1cbn1cblxuZnVuY3Rpb24gcHJvZHVjdENhcmQoKSB7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1jYXJkXCIpO1xuICBjYXJkcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIGNvbnN0IGJ0bldyYXAgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1idG5zXCIpXG4gICAgY29uc3QgYnRuID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtYWRkXCIpXG4gICAgY29uc3QgY291bnRlciA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLWNvdW50ZXJcIilcbiAgICBjb25zdCBjb3VudCA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4gICAgY29uc3QgbWludXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1taW51c1wiKTtcbiAgICBjb25zdCBwbHVzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtcGx1c1wiKTtcblxuICAgIGJ0bldyYXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7b3BlbkNvdW50ZXIoYnRuLCBjb3VudGVyKX0pO1xuXG4gICAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwibWludXNcIil9KVxuXG4gICAgcGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2NoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJwbHVzXCIpfSlcbiAgfSlcbn0iXX0=
