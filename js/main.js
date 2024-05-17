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
}

function handleTouchMove(event) {
  var endY = event.touches[0].clientY;
  var deltaY = endY - this.startY;

  if (deltaY > 0 && this.startScrollTop === 0) {
    event.preventDefault(); // Prevent the default scroll behavior

    this.style.bottom = -deltaY + "px";
  } else if (deltaY < -50) {
    this.classList.remove("active");
    document.body.classList.remove("lock");
  }
}

function handleMouseDown(event) {
  this.startY = event.clientY;
  this.isDragging = true;
  this.startScrollTop = this.querySelector('.sorting__box').scrollTop;
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

    if (deltaY > 50 && this.startScrollTop === 0) {
      this.classList.remove("active");
      document.body.classList.remove("lock");
    } else {
      this.style.bottom = "0";
    }

    this.isDragging = false;
  }
}

function setupModalEvents(modal) {
  modal.addEventListener("click", stopPropagation, false);
  modal.addEventListener("touchstart", handleTouchStart, false);
  modal.addEventListener("touchmove", handleTouchMove, false);
  modal.addEventListener("mousedown", handleMouseDown, false);
  modal.addEventListener("mousemove", handleMouseMove, false);
  modal.addEventListener("mouseup", handleMouseUp, false);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNsaWRlck9uZSIsImluaXRTd2lwZXIiLCJzbGlkZXJUd28iLCJzbGlkZXJUaHJlZSIsInNsaWRlckZvdXIiLCJzbGlkZXJGaXZlIiwiYnRuU29ydCIsInF1ZXJ5U2VsZWN0b3IiLCJzb3J0TW9kYWwiLCJzY3JvbGxTb3J0IiwiYnRuRmlsdGVyIiwiZmlsdGVyTW9kYWwiLCJzY3JvbGxGaWx0ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib3Blbk1vZGFsIiwic2V0dXBNb2RhbEV2ZW50cyIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJCdG4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsImVsZW0iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJyZXN0YXVyYW50c0ZpbHRlckJ0biIsImlucHV0U2VhcmNoIiwiYnRuQ2xlYXJTZWFyY2giLCJzaG93Q2xlYXIiLCJjbGVhcklucHV0IiwiYWRkcmVzc0J0biIsImFkZEJ0biIsImFkZHJlc3NTZWFyY2giLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbnMiLCJhY2NvcmRpb25Ob3RBY3RpdmUiLCJhY2NvcmRpb25BY3RpdmUiLCJlIiwidGFyZ2V0IiwiYm9keSIsInRlbCIsImlucHV0UGhvbmUiLCJvbmVQaG9uZUtleURvd24iLCJiYXNrZXREZWxldGUiLCJtb2RhbERlbGV0ZSIsImJvb3RzdHJhcCIsIk1vZGFsIiwiY2FyZHMiLCJjb3VudCIsImNhcmQiLCJjb3VudGVyIiwiZ29vZHMiLCJjb3VudENoYW5nZSIsInNob3ciLCJzbGlkZXIiLCJtb2RhbFBob25lIiwiY2hhbmdlUGhvbmVCdG4iLCJwaG9uZU51bSIsImlucHV0VGVsIiwiaW5wdXRCdG4iLCJrZXlDb2RlIiwidGV4dENvbnRlbnQiLCJ2YWx1ZSIsImJ0bnMiLCJpbmRleCIsImluZGV4RWxlbSIsImFkZEFkZHJlc3MiLCJtb2RhbCIsImlucHV0U2VhcmNoQnRuIiwibW9kYWxOYW1lIiwiY2hhbmdlTmFtZUJ0biIsIm5hbWVTcGFuIiwiaW5wdXROYW1lIiwia2V5IiwicHJvZHVjdENhcmQiLCJzd2lwZXIiLCJzd2lwZXIyIiwic3dpcGVyMyIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJtaW51cyIsInBsdXMiLCJvcGVuQ291bnRlciIsImNoYW5nZUNvdW50ZXIiLCJjb250YWluZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJldmVudCIsImhhbmRsZVRvdWNoU3RhcnQiLCJzdGFydFkiLCJ0b3VjaGVzIiwiY2xpZW50WSIsInN0YXJ0U2Nyb2xsVG9wIiwic2Nyb2xsVG9wIiwiaGFuZGxlVG91Y2hNb3ZlIiwiZW5kWSIsImRlbHRhWSIsInByZXZlbnREZWZhdWx0Iiwic3R5bGUiLCJib3R0b20iLCJoYW5kbGVNb3VzZURvd24iLCJpc0RyYWdnaW5nIiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlTW91c2VVcCIsInJlZ1Bob25lIiwiaW5wdXQiLCJyZXBsYWNlIiwiaW5wdXROdW1iZXJWYWx1ZSIsImZvcm1hdHRlZElucHV0VmFsdWUiLCJzZWxlY3Rpb25TdGFydCIsImxlbmd0aCIsImRhdGEiLCJ0ZXN0IiwiaW5jbHVkZXMiLCJmaXJzdFN5bWJvbCIsInN1YnN0cmluZyIsImRpc2FibGVkIiwic3BhbiIsImZpcnN0RWxlbWVudENoaWxkIiwibGFzdEVsZW1lbnRDaGlsZCIsIm51bSIsIk51bWJlciIsImRpc2FibGVkTWludXMiLCJpdGVtIiwicGFuZWwiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJtYXhIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJjbG9zZUNvdW50ZXIiLCJvcGVyYXRvciIsImJ0bldyYXAiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQUosRUFBc0M7RUFDcEMsSUFBTUMsU0FBUyxHQUFHQyxVQUFVLENBQUMsdUJBQUQsQ0FBNUI7RUFDQSxJQUFNQyxTQUFT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b2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZGV4XCIpKSB7XG4gIGNvbnN0IHNsaWRlck9uZSA9IGluaXRTd2lwZXIoXCIubWFpbi1zdG9ja19fc3dpcGVyLTFcIilcbiAgY29uc3Qgc2xpZGVyVHdvID0gaW5pdFN3aXBlcihcIi5tYWluLXN0b2NrX19zd2lwZXItMlwiKVxuICBjb25zdCBzbGlkZXJUaHJlZSA9IGluaXRTd2lwZXIoXCIubWFpbi1zdG9ja19fc3dpcGVyLTNcIilcbiAgY29uc3Qgc2xpZGVyRm91ciA9IGluaXRTd2lwZXIoXCIubWFpbi1zdG9ja19fc3dpcGVyLTRcIilcbiAgY29uc3Qgc2xpZGVyRml2ZSA9IGluaXRTd2lwZXIoXCIubWFpbi1zdG9ja19fc3dpcGVyLTVcIilcblxuICBjb25zdCBidG5Tb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50c19fc29ydFwiKTtcbiAgY29uc3Qgc29ydE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nXCIpO1xuICBjb25zdCBzY3JvbGxTb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nX19ib3hcIilcbiAgY29uc3QgYnRuRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50c19fZmlsdGVyXCIpO1xuICBjb25zdCBmaWx0ZXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyXCIpO1xuICBjb25zdCBzY3JvbGxGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcl9fYm94XCIpO1xuICBidG5Tb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG9wZW5Nb2RhbChzb3J0TW9kYWwpXG4gIH0pXG4gIGJ0bkZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBvcGVuTW9kYWwoZmlsdGVyTW9kYWwpXG4gIH0pXG5cbiAgc2V0dXBNb2RhbEV2ZW50cyhzb3J0TW9kYWwsIHNjcm9sbFNvcnQpXG4gIHNldHVwTW9kYWxFdmVudHMoZmlsdGVyTW9kYWwsIHNjcm9sbEZpbHRlcilcbiAgY29uc29sZS5sb2coc2Nyb2xsU29ydClcblxuICBjb25zdCBmaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19idG4nKTtcblxuICBmaWx0ZXJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGZpbHRlckJ0bi5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKVxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IHJlc3RhdXJhbnRzRmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3RhdXJhbnRzX19maWx0ZXJzLWJ0bicpXG5cbiAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlc3RhdXJhbnRzRmlsdGVyQnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19pbnB1dCcpO1xuICBjb25zdCBidG5DbGVhclNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3NlYXJjaC1jbGVhcicpXG4gIGlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge3Nob3dDbGVhcihpbnB1dFNlYXJjaCwgYnRuQ2xlYXJTZWFyY2gpfSlcbiAgYnRuQ2xlYXJTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhcklucHV0KGlucHV0U2VhcmNoKVxuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgYnRuQ2xlYXJTZWFyY2gpXG4gIH0pXG5cbiAgY29uc3QgYWRkcmVzc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2FkZHJlc3MtYnRuJylcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYWRkcmVzcy1hZGQnKVxuICBjb25zdCBhZGRyZXNzU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYWRkcmVzcy1zZWFyY2gnKVxuXG4gIGFkZHJlc3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkcmVzc0J0bi5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImlzLXNob3dcIikgPyBhY2NvcmRpb25Ob3RBY3RpdmUoYWRkcmVzc0J0bikgOiBhY2NvcmRpb25BY3RpdmUoYWRkcmVzc0J0bilcbiAgfSlcblxuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFzb3J0TW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFidG5Tb3J0LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgc29ydE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghZmlsdGVyTW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFidG5GaWx0ZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBmaWx0ZXJNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWFkZHJlc3NCdG4ucGFyZW50RWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGFjY29yZGlvbk5vdEFjdGl2ZShhZGRyZXNzQnRuKVxuICAgICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dGhvcml6YXRpb25cIikpIHtcbiAgY29uc3QgdGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRob3JpemF0aW9uX19pbnB1dFt0eXBlPSd0ZWwnXVwiKTtcbiAgdGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge2lucHV0UGhvbmUoZSl9KVxuICB0ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtvbmVQaG9uZUtleURvd24oZSl9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXRcIikpIHtcbiAgY29uc3QgYmFza2V0RGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2tldF9faGVhZGVyLWRlbGV0ZScpO1xuICBjb25zdCBtb2RhbERlbGV0ZSA9IG5ldyBib290c3RyYXAuTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1tb2RhbC1kZWxldGVcIikpXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhc2tldF9fc2VsZWN0ZWQtaXRlbScpXG5cbiAgY29uc3QgY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19jb3VudC1jb3VudCcpXG5cbiAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICBjb25zdCBjb3VudGVyID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19zZWxlY3RlZC1pdGVtLWNvdW50ZXInKVxuICAgIGNvbnN0IGdvb2RzID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19zZWxlY3RlZC1pdGVtLWNvdW50JylcbiAgICBjb3VudENoYW5nZShjb3VudGVyLCBnb29kcyk7XG4gIH0pXG5cbiAgYmFza2V0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge21vZGFsRGVsZXRlLnNob3coKX0pXG5cbiAgY29uc3Qgc2xpZGVyID0gaW5pdFN3aXBlcihcIi5iYXNrZXRfX3N3aXBlclwiKVxuXG4gIGNvdW50Q2hhbmdlKGNvdW50KVxuXG4gIGNvbnN0IG1vZGFsUGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1tb2RhbFwiKVxuICBjb25zdCBjaGFuZ2VQaG9uZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLXBob25lXCIpXG4gIGNvbnN0IHBob25lTnVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tcGhvbmUtbnVtXCIpXG4gIGNvbnN0IGlucHV0VGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tbW9kYWwtaW5wdXRcIilcbiAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1tb2RhbC1idG5cIilcblxuICBpbnB1dFRlbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtpbnB1dFBob25lKGUpfSlcbiAgaW5wdXRUZWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBvbmVQaG9uZUtleURvd24oZSlcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgcGhvbmVOdW0udGV4dENvbnRlbnQgPSBpbnB1dFRlbC52YWx1ZVxuICAgICAgaW5wdXRUZWwudmFsdWUgPSAnJ1xuICAgICAgbW9kYWxQaG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbiAgaW5wdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwaG9uZU51bS50ZXh0Q29udGVudCA9IGlucHV0VGVsLnZhbHVlXG4gICAgaW5wdXRUZWwudmFsdWUgPSAnJ1xuICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBjaGFuZ2VQaG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoIW1vZGFsUGhvbmUuY29udGFpbnMoZS50YXJnZXQpICYmICFjaGFuZ2VQaG9uZUJ0bi5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Y2Nlc3NcIikpIHtcbiAgY29uc3Qgc2xpZGVyID0gaW5pdFN3aXBlcihcIi5zdWNjZXNzX19vcmRlcmVkLXN3aXBlclwiKVxuXG4gIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3VjY2Vzc19fZ3JhZGUtc3RhcicpO1xuICBidG5zLmZvckVhY2goKGJ0biwgaW5kZXgpID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBidG5zLmZvckVhY2goKGVsZW0sIGluZGV4RWxlbSkgPT4ge1xuICAgICAgICBpZiAoaW5kZXhFbGVtIDw9IGluZGV4KSB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB9IGVsc2UgIHtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY291bnRcIikpIHtcbiAgY29uc3QgYWRkQWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19hZGRyZXNzLWFkZCcpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19hZGRyZXNzLXNlYXJjaCcpO1xuICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19hZGRyZXNzLXNlYXJjaC1pbnB1dCcpXG4gIGNvbnN0IGlucHV0U2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2FkZHJlc3Mtc2VhcmNoLWJ0bicpXG5cbiAgYWRkQWRkcmVzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICB9KVxuXG4gIGlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBpbnB1dFNlYXJjaEJ0bikpXG4gIGlucHV0U2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFySW5wdXQoaW5wdXRTZWFyY2gpXG4gICAgc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBpbnB1dFNlYXJjaEJ0bilcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFtb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWFkZEFkZHJlc3MuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBtb2RhbE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbW9kYWxcIilcbiAgY29uc3QgY2hhbmdlTmFtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1uYW1lLXdyYXBcIilcbiAgY29uc3QgbmFtZVNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbmFtZVwiKVxuICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbW9kYWwtaW5wdXRcIilcbiAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbW9kYWwtYnRuXCIpXG5cbiAgaW5wdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IGlucHV0TmFtZS52YWx1ZVxuICAgIGlucHV0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgaW5wdXROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IGlucHV0TmFtZS52YWx1ZVxuICAgICAgaW5wdXROYW1lLnZhbHVlID0gXCJcIjtcbiAgICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcblxuICBjaGFuZ2VOYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKCFtb2RhbE5hbWUuY29udGFpbnMoZS50YXJnZXQpICYmICFjaGFuZ2VOYW1lQnRuLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9ja1wiKSkge1xuICBjb25zdCBzbGlkZXJPbmUgPSBpbml0U3dpcGVyKCcuc3RvY2tfX2Jsb2NrLXN3aXBlcicpXG4gIGNvbnN0IHNsaWRlclR3byA9IGluaXRTd2lwZXIoJy5zdG9ja19fYmxvY2stc3dpcGVyLTInKVxuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdGF1cmFudFwiKSkge1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbiAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRfX3NldHRpbmdzLXNlYXJjaC1pbnB1dFwiKVxuICBjb25zdCBpbnB1dFNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudF9fc2V0dGluZ3Mtc2VhcmNoLWJ0blwiKVxuICBjb25zdCBidG5Tb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50X19zZXR0aW5ncy1zb3J0XCIpO1xuICBjb25zdCBzb3J0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdcIik7XG4gIGNvbnN0IHNjcm9sbFNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdfX2JveFwiKVxuICBjb25zdCBidG5GaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRfX3NldHRpbmdzLWZpbHRlclwiKTtcbiAgY29uc3QgZmlsdGVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlclwiKTtcbiAgY29uc3Qgc2Nyb2xsRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX2JveFwiKTtcblxuXG4gIGlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBpbnB1dFNlYXJjaEJ0bikpXG4gIGlucHV0U2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFySW5wdXQoaW5wdXRTZWFyY2gpXG4gICAgc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBpbnB1dFNlYXJjaEJ0bilcbiAgfSlcblxuXG4gIGJ0blNvcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3Blbk1vZGFsKHNvcnRNb2RhbClcbiAgfSlcbiAgYnRuRmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG9wZW5Nb2RhbChmaWx0ZXJNb2RhbClcbiAgfSlcblxuICBzZXR1cE1vZGFsRXZlbnRzKHNvcnRNb2RhbCwgc2Nyb2xsU29ydClcbiAgc2V0dXBNb2RhbEV2ZW50cyhmaWx0ZXJNb2RhbCwgc2Nyb2xsRmlsdGVyKVxuXG4gIGNvbnN0IGZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2J0bicpO1xuXG4gIGZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZmlsdGVyQnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghc29ydE1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuU29ydC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHNvcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWZpbHRlck1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuRmlsdGVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgZmlsdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlc3RhdXJhbnRzRmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3RhdXJhbnRfX3NldHRpbmdzLWZpbHRlcnMtYnRuJylcblxuICByZXN0YXVyYW50c0ZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBzd2lwZXIgID0gaW5pdFN3aXBlcignLnJlc3RhdXJhbnRfX3N0b2NrLXN3aXBlcicpXG4gIGNvbnN0IHN3aXBlcjIgPSBpbml0U3dpcGVyKCcucmVzdGF1cmFudF9fb2ZmZXJzLXN3aXBlcicpXG4gIGNvbnN0IHN3aXBlcjMgPSBpbml0U3dpcGVyKCcucmVzdGF1cmFudF9fb2ZmZXJzLXN3aXBlci0yJylcblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0XCIpKSB7XG4gIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoXCIucHJvZHVjdF9fdG9wLXN3aXBlclwiLCB7XG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMFxuICB9KVxuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtYWRkXCIpXG4gIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1jb3VudGVyXCIpXG4gIGNvbnN0IGNvdW50ID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbiAgY29uc3QgbWludXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWNvdW50ZXItbWludXNcIik7XG4gIGNvbnN0IHBsdXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWNvdW50ZXItcGx1c1wiKTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtvcGVuQ291bnRlcihidG4sIGNvdW50ZXIpfSk7XG5cbiAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwibWludXNcIil9KVxuXG4gIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwicGx1c1wiKX0pXG5cbiAgY29uc3Qgc3dpcGVyMiA9IGluaXRTd2lwZXIoXCIucHJvZHVjdF9fYWRkaXRpb25hbC1zd2lwZXJcIilcbiAgY29uc3Qgc3dpcGVyMyA9IGluaXRTd2lwZXIoXCIucHJvZHVjdF9fYWRkaXRpb25hbC1zd2lwZXItMlwiKVxufVxuLy8g0KTRg9C90LrRhtC40LhcbmZ1bmN0aW9uIGluaXRTd2lwZXIoY29udGFpbmVyKSB7XG4gIHJldHVybiBuZXcgU3dpcGVyKGNvbnRhaW5lciwge1xuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgfSlcbn1cblxuZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KGV2ZW50KSB7XG4gIHRoaXMuc3RhcnRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuICB0aGlzLnN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuc29ydGluZ19fYm94Jykuc2Nyb2xsVG9wO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoZXZlbnQpIHtcbiAgbGV0IGVuZFkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gIGxldCBkZWx0YVkgPSBlbmRZIC0gdGhpcy5zdGFydFk7XG4gIGlmIChkZWx0YVkgPiAwICYmIHRoaXMuc3RhcnRTY3JvbGxUb3AgPT09IDApIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IHNjcm9sbCBiZWhhdmlvclxuICAgIHRoaXMuc3R5bGUuYm90dG9tID0gLWRlbHRhWSArIFwicHhcIjtcbiAgfSBlbHNlIGlmIChkZWx0YVkgPCAtNTApIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgdGhpcy5zdGFydFkgPSBldmVudC5jbGllbnRZO1xuICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICB0aGlzLnN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuc29ydGluZ19fYm94Jykuc2Nyb2xsVG9wO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmUoZXZlbnQpIHtcbiAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xuICAgIGxldCBlbmRZID0gZXZlbnQuY2xpZW50WTtcbiAgICBsZXQgZGVsdGFZID0gZW5kWSAtIHRoaXMuc3RhcnRZO1xuICAgIGlmIChkZWx0YVkgPiAwKSB7XG4gICAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IC1kZWx0YVkgKyBcInB4XCI7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoZXZlbnQpIHtcbiAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xuICAgIGxldCBlbmRZID0gZXZlbnQuY2xpZW50WTtcbiAgICBsZXQgZGVsdGFZID0gZW5kWSAtIHRoaXMuc3RhcnRZO1xuICAgIGlmIChkZWx0YVkgPiA1MCAmJiB0aGlzLnN0YXJ0U2Nyb2xsVG9wID09PSAwKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IFwiMFwiO1xuICAgIH1cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXR1cE1vZGFsRXZlbnRzKG1vZGFsKSB7XG5cblxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RvcFByb3BhZ2F0aW9uLCBmYWxzZSk7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGhhbmRsZVRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBoYW5kbGVUb3VjaE1vdmUsIGZhbHNlKTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVNb3VzZURvd24sIGZhbHNlKTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUsIGZhbHNlKTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlTW91c2VVcCwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBtb2RhbC5zdHlsZS5ib3R0b20gPSBcIjBcIlxufVxuXG5mdW5jdGlvbiByZWdQaG9uZShpbnB1dCkge1xuICByZXR1cm4gaW5wdXQudmFsdWUucmVwbGFjZSgvXFxEL2csICcnKTtcbn1cblxuZnVuY3Rpb24gaW5wdXRQaG9uZShlKSB7XG4gIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xuICBsZXQgaW5wdXROdW1iZXJWYWx1ZSA9IHJlZ1Bob25lKGlucHV0KTtcbiAgbGV0IGZvcm1hdHRlZElucHV0VmFsdWUgPSAnJztcbiAgbGV0IHNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnRcbiAgLy8g0JXRgdC70Lgg0LIg0LjQvdC/0YPRgiDQstCy0LXQtNC10L3RiyDRgdC40LzQvtCy0LvRiyDQvdC1INGB0L7QvtGC0LLQtdGC0YHQstGD0Y7RidC40LUg0YDQtdCz0YPQu9GP0YDQutC4LCDRgtC+INC30L3QsNGH0LXQvdC40LUg0LjQvdC/0YPRgtCwINGB0YLQsNC90L7QstC40YLRgdGPINC/0YPRgdGC0YvQvFxuICBpZiAoIWlucHV0TnVtYmVyVmFsdWUpIHJldHVybiBpbnB1dC52YWx1ZSA9ICcnXG4gIC8vINCSINGN0YLQvtC5INGH0LDRgdGC0Lgg0Y8g0L3QtSDRgdC+0LLRgdC10Lwg0L/QvtC90LjQvNCw0Y4g0YfRgtC+INC/0YDQvtC40YHRhdC+0LTQuNGCXG4gIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggIT0gc2VsZWN0aW9uU3RhcnQpIHtcbiAgICBpZiAoZS5kYXRhICYmIC9cXEQvZy50ZXN0KGUuZGF0YSkpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gaW5wdXROdW1iZXJWYWx1ZVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChbJzcnLCAnOCcsICc5J10uaW5jbHVkZXMoaW5wdXROdW1iZXJWYWx1ZVswXSkpIHtcbiAgICAvLyDQldGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCDQtNC10LLRj9GC0YwsINGC0L7Qs9C00LAg0LzRiyDQt9Cw0LzQtdC90Y/QtdC8INC/0LXRgNCy0YPRjiDRhtC40YTRgNGDINC90LAgNyDQuCDQtNC10LLRj9GC0LrRgyDQtNC10LvQsNC10Lwg0LLRgtC+0YDQvtC5INGG0LjRhNGA0L7QuVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlWzBdID09ICc5JykgaW5wdXROdW1iZXJWYWx1ZSA9ICc3JyArIGlucHV0TnVtYmVyVmFsdWU7XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWVbMF0gPT0gJzgnKSBpbnB1dE51bWJlclZhbHVlID0gJzcnXG4gICAgLy8g0JXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAgNywg0YLQvtCz0LTQsCDQt9C90LDRh9C10L3QuNC1INC40L3Qv9GD0YLQsCDQvdCw0YfQuNC90LDQtdGC0YHRjyDRgSArNywg0LXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAgOCwg0YLQvtCz0LTQsCDQt9C90LDRh9C10L3QuNC1INC90LDRh9C40L3QsNC10YLRgdGPINGBIDhcbiAgICBsZXQgZmlyc3RTeW1ib2wgPSAnKzcnO1xuICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBmaXJzdFN5bWJvbCArICcgJztcbiAgICAvLyDQldGB0LvQuCDQsiDQuNC90L/Rg9GC0LUg0LHQvtC70YzRiNC1INC+0LTQvdC+0Lkg0YbQuNGE0YDRiyDQtNC+0LHQsNCy0LvRj9C10Lwg0YHQutC+0LHQutGDINC+0YLQutGA0YvRgtC40Y8g0Lgg0YLQsNC6INC00LDQu9C10LVcbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcoJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDEsIDQpXG4gICAgfVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+PSA1KSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcpICcgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg0LCA3KVxuICAgIH1cbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gOCkge1xuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg3LCA5KVxuICAgIH1cbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gMTApIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJy0nICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoOSwgMTEpO1xuICAgIH1cbiAgfSBlbHNlIHsgLy/QldGB0LvQuCDQstCy0L7QtNC40LzQvtC1INGH0LjRgdC70L4g0L3QtSA3LCA4INC40LvQuCA5INGC0L7Qs9C00LAg0LTQvtCx0LDQstC70Y/QtdC8ICvQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0LLQstC10LTQtdC90L7QtSDRh9C40YHQu9C+XG4gICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9ICcrNyAoOScgKyBpbnB1dE51bWJlclZhbHVlO1xuICB9XG4gIGlucHV0LnZhbHVlID0gZm9ybWF0dGVkSW5wdXRWYWx1ZVxufVxuXG5mdW5jdGlvbiBvbmVQaG9uZUtleURvd24gKGUpIHtcbiAgbGV0IGlucHV0ID0gZS50YXJnZXQ7XG4gIGlmIChyZWdQaG9uZShpbnB1dCkubGVuZ3RoID09IDEgJiYgZS5rZXlDb2RlID09PSA4KSB7XG4gICAgaW5wdXQudmFsdWUgPSAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93Q2xlYXIoaW5wdXQsIGJ0bikge1xuICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgYnRuLmRpc2FibGVkID0gdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFySW5wdXQoaW5wdXQpIHtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBjb3VudENoYW5nZShjb3VudCwgZ29vZHMpIHtcbiAgY29uc3Qgc3BhbiA9IGNvdW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgY29uc3QgbWludXMgPSBjb3VudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgY29uc3QgcGx1cyA9IGNvdW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpIC0gMVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBudW07XG4gICAgaWYgKCEhZ29vZHMpIHtcbiAgICAgIGdvb2RzLnRleHRDb250ZW50ID0gYCR7bnVtfSDRiNGCLmBcbiAgICB9XG4gICAgZGlzYWJsZWRNaW51cyhudW0sIG1pbnVzKVxuICB9KVxuXG4gIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpICsgMVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBudW07XG4gICAgaWYgKCEhZ29vZHMpIHtcbiAgICAgIGdvb2RzLnRleHRDb250ZW50ID0gYCR7bnVtfSDRiNGCLmBcbiAgICB9XG4gICAgZGlzYWJsZWRNaW51cyhudW0sIG1pbnVzKVxuICB9KVxufVxuXG5mdW5jdGlvbiBkaXNhYmxlZE1pbnVzKG51bSwgYnRuKSB7XG4gIGlmIChudW0gPCAxKSB7XG4gICAgYnRuLmRpc2FibGVkID0gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gYWNjb3JkaW9uQWN0aXZlKGl0ZW0pIHtcbiAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpcy1zaG93XCIpO1xuICBsZXQgcGFuZWwgPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKCFwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWNjb3JkaW9uTm90QWN0aXZlKGl0ZW0pIHtcbiAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1zaG93XCIpO1xuICBsZXQgcGFuZWwgPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xuICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGxcbiAgfVxufVxuXG5mdW5jdGlvbiBvcGVuQ291bnRlcihidG4sIGNvdW50ZXIpIHtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJub3QtYWN0aXZlXCIpO1xuICBjb3VudGVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbn1cblxuZnVuY3Rpb24gY2xvc2VDb3VudGVyKGJ0biwgY291bnRlcikge1xuICBidG4uY2xhc3NMaXN0LnJlbW92ZShcIm5vdC1hY3RpdmVcIik7XG4gIGNvdW50ZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VDb3VudGVyKHNwYW4sIGJ0biwgY291bnRlciwgb3BlcmF0b3IpIHtcblxuICBsZXQgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpO1xuXG4gIGlmIChvcGVyYXRvciA9PT0gXCJwbHVzXCIpIHtcbiAgICBudW0gKz0gMVxuICB9IGVsc2Uge1xuICAgIG51bSAtPTFcbiAgfVxuXG4gIG51bSA8IDEgPyBjbG9zZUNvdW50ZXIoYnRuLCBjb3VudGVyKSA6IHNwYW4udGV4dENvbnRlbnQgPSBudW1cbn1cblxuZnVuY3Rpb24gcHJvZHVjdENhcmQoKSB7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1jYXJkXCIpO1xuICBjYXJkcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIGNvbnN0IGJ0bldyYXAgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1idG5zXCIpXG4gICAgY29uc3QgYnRuID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtYWRkXCIpXG4gICAgY29uc3QgY291bnRlciA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLWNvdW50ZXJcIilcbiAgICBjb25zdCBjb3VudCA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4gICAgY29uc3QgbWludXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1taW51c1wiKTtcbiAgICBjb25zdCBwbHVzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtcGx1c1wiKTtcblxuICAgIGJ0bldyYXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7b3BlbkNvdW50ZXIoYnRuLCBjb3VudGVyKX0pO1xuXG4gICAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwibWludXNcIil9KVxuXG4gICAgcGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2NoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJwbHVzXCIpfSlcbiAgfSlcbn0iXX0=
