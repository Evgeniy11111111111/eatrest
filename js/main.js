"use strict";

if (document.getElementById("index")) {
  var sliderOne = initSwiper(".main-stock__swiper-1");
  var sliderTwo = initSwiper(".main-stock__swiper-2");
  var sliderThree = initSwiper(".main-stock__swiper-3");
  var sliderFour = initSwiper(".main-stock__swiper-4");
  var sliderFive = initSwiper(".main-stock__swiper-5");
  var btnSort = document.querySelector(".restaurants__sort");
  var sortModal = document.querySelector(".sorting");
  var btnFilter = document.querySelector(".restaurants__filter");
  var filterModal = document.querySelector(".filter");
  btnSort.addEventListener('click', function () {
    openModal(sortModal);
  });
  btnFilter.addEventListener('click', function () {
    openModal(filterModal);
  });
  setupModalEvents(sortModal);
  setupModalEvents(filterModal);
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

  var _btnFilter = document.querySelector(".restaurant__settings-filter");

  var _filterModal = document.querySelector(".filter");

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

  setupModalEvents(_sortModal);
  setupModalEvents(_filterModal);

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
  var deltaY = endY - this.startY; // Проверка, находится ли элемент в контейнере, который можно прокручивать

  if (event.target.closest('.sorting__box') && deltaY !== 0) {
    // Запретить закрытие модального окна, если прокрутка внутри .sorting__box
    event.stopPropagation();
  } else if (deltaY < -50) {
    this.classList.remove("active");
    document.body.classList.remove("lock");
  }
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
}

function setupModalEvents(modal) {
  modal.addEventListener("click", stopPropagation);
  modal.addEventListener("touchstart", handleTouchStart);
  modal.addEventListener("touchmove", handleTouchMove); // modal.addEventListener("mousedown", handleMouseDown);
  // modal.addEventListener("mousemove", handleMouseMove);
  // modal.addEventListener("mouseup", handleMouseUp);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNsaWRlck9uZSIsImluaXRTd2lwZXIiLCJzbGlkZXJUd28iLCJzbGlkZXJUaHJlZSIsInNsaWRlckZvdXIiLCJzbGlkZXJGaXZlIiwiYnRuU29ydCIsInF1ZXJ5U2VsZWN0b3IiLCJzb3J0TW9kYWwiLCJidG5GaWx0ZXIiLCJmaWx0ZXJNb2RhbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcGVuTW9kYWwiLCJzZXR1cE1vZGFsRXZlbnRzIiwiZmlsdGVyQnRuIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJlbGVtIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwicmVzdGF1cmFudHNGaWx0ZXJCdG4iLCJpbnB1dFNlYXJjaCIsImJ0bkNsZWFyU2VhcmNoIiwic2hvd0NsZWFyIiwiY2xlYXJJbnB1dCIsImFkZHJlc3NCdG4iLCJhZGRCdG4iLCJhZGRyZXNzU2VhcmNoIiwicGFyZW50RWxlbWVudCIsImNvbnRhaW5zIiwiYWNjb3JkaW9uTm90QWN0aXZlIiwiYWNjb3JkaW9uQWN0aXZlIiwiZSIsInRhcmdldCIsImJvZHkiLCJ0ZWwiLCJpbnB1dFBob25lIiwib25lUGhvbmVLZXlEb3duIiwiYmFza2V0RGVsZXRlIiwibW9kYWxEZWxldGUiLCJib290c3RyYXAiLCJNb2RhbCIsImNhcmRzIiwiY291bnQiLCJjYXJkIiwiY291bnRlciIsImdvb2RzIiwiY291bnRDaGFuZ2UiLCJzaG93Iiwic2xpZGVyIiwibW9kYWxQaG9uZSIsImNoYW5nZVBob25lQnRuIiwicGhvbmVOdW0iLCJpbnB1dFRlbCIsImlucHV0QnRuIiwia2V5Q29kZSIsInRleHRDb250ZW50IiwidmFsdWUiLCJidG5zIiwiaW5kZXgiLCJpbmRleEVsZW0iLCJhZGRBZGRyZXNzIiwibW9kYWwiLCJpbnB1dFNlYXJjaEJ0biIsIm1vZGFsTmFtZSIsImNoYW5nZU5hbWVCdG4iLCJuYW1lU3BhbiIsImlucHV0TmFtZSIsImtleSIsInByb2R1Y3RDYXJkIiwic3dpcGVyIiwic3dpcGVyMiIsInN3aXBlcjMiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwibWludXMiLCJwbHVzIiwib3BlbkNvdW50ZXIiLCJjaGFuZ2VDb3VudGVyIiwiY29udGFpbmVyIiwic3RvcFByb3BhZ2F0aW9uIiwiZXZlbnQiLCJoYW5kbGVUb3VjaFN0YXJ0Iiwic3RhcnRZIiwidG91Y2hlcyIsImNsaWVudFkiLCJoYW5kbGVUb3VjaE1vdmUiLCJlbmRZIiwiZGVsdGFZIiwiY2xvc2VzdCIsImhhbmRsZU1vdXNlRG93biIsImlzRHJhZ2dpbmciLCJoYW5kbGVNb3VzZU1vdmUiLCJzdHlsZSIsImJvdHRvbSIsImhhbmRsZU1vdXNlVXAiLCJyZWdQaG9uZSIsImlucHV0IiwicmVwbGFjZSIsImlucHV0TnVtYmVyVmFsdWUiLCJmb3JtYXR0ZWRJbnB1dFZhbHVlIiwic2VsZWN0aW9uU3RhcnQiLCJsZW5ndGgiLCJkYXRhIiwidGVzdCIsImluY2x1ZGVzIiwiZmlyc3RTeW1ib2wiLCJzdWJzdHJpbmciLCJkaXNhYmxlZCIsInNwYW4iLCJmaXJzdEVsZW1lbnRDaGlsZCIsImxhc3RFbGVtZW50Q2hpbGQiLCJudW0iLCJOdW1iZXIiLCJkaXNhYmxlZE1pbnVzIiwiaXRlbSIsInBhbmVsIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwibWF4SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiY2xvc2VDb3VudGVyIiwib3BlcmF0b3IiLCJidG5XcmFwIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQUosRUFBc0M7RUFDcEMsSUFBTUMsU0FBUyxHQUFHQyxVQUFVLENBQUMsdUJBQUQsQ0FBNUI7RUFDQSxJQUFNQyxTQUFTLEdBQUdELFVBQVUsQ0FBQyx1QkFBRCxDQUE1QjtFQUNBLElBQU1FLFdBQVcsR0FBR0YsVUFBVSxDQUFDLHVC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K0IsWUFBTTtNQUFDc0UsYUFBYSxDQUFDcEMsS0FBRCxFQUFRNUIsR0FBUixFQUFhOEIsT0FBYixFQUFzQixNQUF0QixDQUFiO0lBQTJDLENBQWpGO0VBQ0QsQ0FoQkQ7QUFpQkQiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZGV4XCIpKSB7XG4gIGNvbnN0IHNsaWRlck9uZSA9IGluaXRTd2lwZXIoXCIubWFpbi1zdG9ja19fc3dpcGVyLTFcIilcbiAgY29uc3Qgc2xpZGVyVHdvID0gaW5pdFN3aXBlcihcIi5tYWluLXN0b2NrX19zd2lwZXItMlwiKVxuICBjb25zdCBzbGlkZXJUaHJlZSA9IGluaXRTd2lwZXIoXCIubWFpbi1zdG9ja19fc3dpcGVyLTNcIilcbiAgY29uc3Qgc2xpZGVyRm91ciA9IGluaXRTd2lwZXIoXCIubWFpbi1zdG9ja19fc3dpcGVyLTRcIilcbiAgY29uc3Qgc2xpZGVyRml2ZSA9IGluaXRTd2lwZXIoXCIubWFpbi1zdG9ja19fc3dpcGVyLTVcIilcblxuICBjb25zdCBidG5Tb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50c19fc29ydFwiKTtcbiAgY29uc3Qgc29ydE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nXCIpO1xuICBjb25zdCBidG5GaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRzX19maWx0ZXJcIik7XG4gIGNvbnN0IGZpbHRlck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJcIik7XG4gIGJ0blNvcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3Blbk1vZGFsKHNvcnRNb2RhbClcbiAgfSlcbiAgYnRuRmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG9wZW5Nb2RhbChmaWx0ZXJNb2RhbClcbiAgfSlcblxuICBzZXR1cE1vZGFsRXZlbnRzKHNvcnRNb2RhbClcbiAgc2V0dXBNb2RhbEV2ZW50cyhmaWx0ZXJNb2RhbClcblxuICBjb25zdCBmaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19idG4nKTtcblxuICBmaWx0ZXJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGZpbHRlckJ0bi5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKVxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IHJlc3RhdXJhbnRzRmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3RhdXJhbnRzX19maWx0ZXJzLWJ0bicpXG5cbiAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlc3RhdXJhbnRzRmlsdGVyQnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19pbnB1dCcpO1xuICBjb25zdCBidG5DbGVhclNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3NlYXJjaC1jbGVhcicpXG4gIGlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge3Nob3dDbGVhcihpbnB1dFNlYXJjaCwgYnRuQ2xlYXJTZWFyY2gpfSlcbiAgYnRuQ2xlYXJTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhcklucHV0KGlucHV0U2VhcmNoKVxuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgYnRuQ2xlYXJTZWFyY2gpXG4gIH0pXG5cbiAgY29uc3QgYWRkcmVzc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2FkZHJlc3MtYnRuJylcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYWRkcmVzcy1hZGQnKVxuICBjb25zdCBhZGRyZXNzU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYWRkcmVzcy1zZWFyY2gnKVxuXG4gIGFkZHJlc3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkcmVzc0J0bi5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImlzLXNob3dcIikgPyBhY2NvcmRpb25Ob3RBY3RpdmUoYWRkcmVzc0J0bikgOiBhY2NvcmRpb25BY3RpdmUoYWRkcmVzc0J0bilcbiAgfSlcblxuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFzb3J0TW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFidG5Tb3J0LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgc29ydE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghZmlsdGVyTW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFidG5GaWx0ZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBmaWx0ZXJNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWFkZHJlc3NCdG4ucGFyZW50RWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGFjY29yZGlvbk5vdEFjdGl2ZShhZGRyZXNzQnRuKVxuICAgICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dGhvcml6YXRpb25cIikpIHtcbiAgY29uc3QgdGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRob3JpemF0aW9uX19pbnB1dFt0eXBlPSd0ZWwnXVwiKTtcbiAgdGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge2lucHV0UGhvbmUoZSl9KVxuICB0ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtvbmVQaG9uZUtleURvd24oZSl9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXRcIikpIHtcbiAgY29uc3QgYmFza2V0RGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2tldF9faGVhZGVyLWRlbGV0ZScpO1xuICBjb25zdCBtb2RhbERlbGV0ZSA9IG5ldyBib290c3RyYXAuTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1tb2RhbC1kZWxldGVcIikpXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhc2tldF9fc2VsZWN0ZWQtaXRlbScpXG5cbiAgY29uc3QgY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19jb3VudC1jb3VudCcpXG5cbiAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICBjb25zdCBjb3VudGVyID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19zZWxlY3RlZC1pdGVtLWNvdW50ZXInKVxuICAgIGNvbnN0IGdvb2RzID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19zZWxlY3RlZC1pdGVtLWNvdW50JylcbiAgICBjb3VudENoYW5nZShjb3VudGVyLCBnb29kcyk7XG4gIH0pXG5cbiAgYmFza2V0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge21vZGFsRGVsZXRlLnNob3coKX0pXG5cbiAgY29uc3Qgc2xpZGVyID0gaW5pdFN3aXBlcihcIi5iYXNrZXRfX3N3aXBlclwiKVxuXG4gIGNvdW50Q2hhbmdlKGNvdW50KVxuXG4gIGNvbnN0IG1vZGFsUGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1tb2RhbFwiKVxuICBjb25zdCBjaGFuZ2VQaG9uZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLXBob25lXCIpXG4gIGNvbnN0IHBob25lTnVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tcGhvbmUtbnVtXCIpXG4gIGNvbnN0IGlucHV0VGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tbW9kYWwtaW5wdXRcIilcbiAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1tb2RhbC1idG5cIilcblxuICBpbnB1dFRlbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtpbnB1dFBob25lKGUpfSlcbiAgaW5wdXRUZWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBvbmVQaG9uZUtleURvd24oZSlcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgcGhvbmVOdW0udGV4dENvbnRlbnQgPSBpbnB1dFRlbC52YWx1ZVxuICAgICAgaW5wdXRUZWwudmFsdWUgPSAnJ1xuICAgICAgbW9kYWxQaG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbiAgaW5wdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwaG9uZU51bS50ZXh0Q29udGVudCA9IGlucHV0VGVsLnZhbHVlXG4gICAgaW5wdXRUZWwudmFsdWUgPSAnJ1xuICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBjaGFuZ2VQaG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoIW1vZGFsUGhvbmUuY29udGFpbnMoZS50YXJnZXQpICYmICFjaGFuZ2VQaG9uZUJ0bi5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Y2Nlc3NcIikpIHtcbiAgY29uc3Qgc2xpZGVyID0gaW5pdFN3aXBlcihcIi5zdWNjZXNzX19vcmRlcmVkLXN3aXBlclwiKVxuXG4gIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3VjY2Vzc19fZ3JhZGUtc3RhcicpO1xuICBidG5zLmZvckVhY2goKGJ0biwgaW5kZXgpID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBidG5zLmZvckVhY2goKGVsZW0sIGluZGV4RWxlbSkgPT4ge1xuICAgICAgICBpZiAoaW5kZXhFbGVtIDw9IGluZGV4KSB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB9IGVsc2UgIHtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY291bnRcIikpIHtcbiAgY29uc3QgYWRkQWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19hZGRyZXNzLWFkZCcpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19hZGRyZXNzLXNlYXJjaCcpO1xuICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19hZGRyZXNzLXNlYXJjaC1pbnB1dCcpXG4gIGNvbnN0IGlucHV0U2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2FkZHJlc3Mtc2VhcmNoLWJ0bicpXG5cbiAgYWRkQWRkcmVzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICB9KVxuXG4gIGlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBpbnB1dFNlYXJjaEJ0bikpXG4gIGlucHV0U2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFySW5wdXQoaW5wdXRTZWFyY2gpXG4gICAgc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBpbnB1dFNlYXJjaEJ0bilcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFtb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWFkZEFkZHJlc3MuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBtb2RhbE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbW9kYWxcIilcbiAgY29uc3QgY2hhbmdlTmFtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1uYW1lLXdyYXBcIilcbiAgY29uc3QgbmFtZVNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbmFtZVwiKVxuICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbW9kYWwtaW5wdXRcIilcbiAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbW9kYWwtYnRuXCIpXG5cbiAgaW5wdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IGlucHV0TmFtZS52YWx1ZVxuICAgIGlucHV0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgaW5wdXROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IGlucHV0TmFtZS52YWx1ZVxuICAgICAgaW5wdXROYW1lLnZhbHVlID0gXCJcIjtcbiAgICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcblxuICBjaGFuZ2VOYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKCFtb2RhbE5hbWUuY29udGFpbnMoZS50YXJnZXQpICYmICFjaGFuZ2VOYW1lQnRuLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9ja1wiKSkge1xuICBjb25zdCBzbGlkZXJPbmUgPSBpbml0U3dpcGVyKCcuc3RvY2tfX2Jsb2NrLXN3aXBlcicpXG4gIGNvbnN0IHNsaWRlclR3byA9IGluaXRTd2lwZXIoJy5zdG9ja19fYmxvY2stc3dpcGVyLTInKVxuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdGF1cmFudFwiKSkge1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbiAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRfX3NldHRpbmdzLXNlYXJjaC1pbnB1dFwiKVxuICBjb25zdCBpbnB1dFNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudF9fc2V0dGluZ3Mtc2VhcmNoLWJ0blwiKVxuICBjb25zdCBidG5Tb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50X19zZXR0aW5ncy1zb3J0XCIpO1xuICBjb25zdCBzb3J0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdcIik7XG4gIGNvbnN0IGJ0bkZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudF9fc2V0dGluZ3MtZmlsdGVyXCIpO1xuICBjb25zdCBmaWx0ZXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyXCIpO1xuXG5cbiAgaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGlucHV0U2VhcmNoQnRuKSlcbiAgaW5wdXRTZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJJbnB1dChpbnB1dFNlYXJjaClcbiAgICBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGlucHV0U2VhcmNoQnRuKVxuICB9KVxuXG5cbiAgYnRuU29ydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBvcGVuTW9kYWwoc29ydE1vZGFsKVxuICB9KVxuICBidG5GaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3Blbk1vZGFsKGZpbHRlck1vZGFsKVxuICB9KVxuXG4gIHNldHVwTW9kYWxFdmVudHMoc29ydE1vZGFsKVxuICBzZXR1cE1vZGFsRXZlbnRzKGZpbHRlck1vZGFsKVxuXG4gIGNvbnN0IGZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2J0bicpO1xuXG4gIGZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZmlsdGVyQnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghc29ydE1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuU29ydC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHNvcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWZpbHRlck1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuRmlsdGVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgZmlsdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlc3RhdXJhbnRzRmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3RhdXJhbnRfX3NldHRpbmdzLWZpbHRlcnMtYnRuJylcblxuICByZXN0YXVyYW50c0ZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBzd2lwZXIgID0gaW5pdFN3aXBlcignLnJlc3RhdXJhbnRfX3N0b2NrLXN3aXBlcicpXG4gIGNvbnN0IHN3aXBlcjIgPSBpbml0U3dpcGVyKCcucmVzdGF1cmFudF9fb2ZmZXJzLXN3aXBlcicpXG4gIGNvbnN0IHN3aXBlcjMgPSBpbml0U3dpcGVyKCcucmVzdGF1cmFudF9fb2ZmZXJzLXN3aXBlci0yJylcblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0XCIpKSB7XG4gIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoXCIucHJvZHVjdF9fdG9wLXN3aXBlclwiLCB7XG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMFxuICB9KVxuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtYWRkXCIpXG4gIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1jb3VudGVyXCIpXG4gIGNvbnN0IGNvdW50ID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbiAgY29uc3QgbWludXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWNvdW50ZXItbWludXNcIik7XG4gIGNvbnN0IHBsdXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWNvdW50ZXItcGx1c1wiKTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtvcGVuQ291bnRlcihidG4sIGNvdW50ZXIpfSk7XG5cbiAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwibWludXNcIil9KVxuXG4gIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwicGx1c1wiKX0pXG5cbiAgY29uc3Qgc3dpcGVyMiA9IGluaXRTd2lwZXIoXCIucHJvZHVjdF9fYWRkaXRpb25hbC1zd2lwZXJcIilcbiAgY29uc3Qgc3dpcGVyMyA9IGluaXRTd2lwZXIoXCIucHJvZHVjdF9fYWRkaXRpb25hbC1zd2lwZXItMlwiKVxufVxuLy8g0KTRg9C90LrRhtC40LhcbmZ1bmN0aW9uIGluaXRTd2lwZXIoY29udGFpbmVyKSB7XG4gIHJldHVybiBuZXcgU3dpcGVyKGNvbnRhaW5lciwge1xuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgfSlcbn1cblxuZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KGV2ZW50KSB7XG4gIHRoaXMuc3RhcnRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoZXZlbnQpIHtcbiAgbGV0IGVuZFkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gIGxldCBkZWx0YVkgPSBlbmRZIC0gdGhpcy5zdGFydFk7XG4gIC8vINCf0YDQvtCy0LXRgNC60LAsINC90LDRhdC+0LTQuNGC0YHRjyDQu9C4INGN0LvQtdC80LXQvdGCINCyINC60L7QvdGC0LXQudC90LXRgNC1LCDQutC+0YLQvtGA0YvQuSDQvNC+0LbQvdC+INC/0YDQvtC60YDRg9GH0LjQstCw0YLRjFxuICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zb3J0aW5nX19ib3gnKSAmJiBkZWx0YVkgIT09IDApIHtcbiAgICAvLyDQl9Cw0L/RgNC10YLQuNGC0Ywg0LfQsNC60YDRi9GC0LjQtSDQvNC+0LTQsNC70YzQvdC+0LPQviDQvtC60L3QsCwg0LXRgdC70Lgg0L/RgNC+0LrRgNGD0YLQutCwINCy0L3Rg9GC0YDQuCAuc29ydGluZ19fYm94XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0gZWxzZSBpZiAoZGVsdGFZIDwgLTUwKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG4gIHRoaXMuc3RhcnRZID0gZXZlbnQuY2xpZW50WTtcbiAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlKGV2ZW50KSB7XG4gIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICBsZXQgZW5kWSA9IGV2ZW50LmNsaWVudFk7XG4gICAgbGV0IGRlbHRhWSA9IGVuZFkgLSB0aGlzLnN0YXJ0WTtcbiAgICBpZiAoZGVsdGFZID4gMCkge1xuICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSAtZGVsdGFZICsgXCJweFwiO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZVVwKGV2ZW50KSB7XG4gIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICBsZXQgZW5kWSA9IGV2ZW50LmNsaWVudFk7XG4gICAgbGV0IGRlbHRhWSA9IGVuZFkgLSB0aGlzLnN0YXJ0WTtcbiAgICBpZiAoZGVsdGFZID4gNTApIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSBcIjBcIjtcbiAgICB9XG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0dXBNb2RhbEV2ZW50cyhtb2RhbCkge1xuXG5cbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0b3BQcm9wYWdhdGlvbik7XG5cbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgaGFuZGxlVG91Y2hTdGFydCk7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgaGFuZGxlVG91Y2hNb3ZlKTtcblxuICAvLyBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZU1vdXNlRG93bik7XG4gIC8vIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcbiAgLy8gbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlTW91c2VVcCk7XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2NrXCIpXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIG1vZGFsLnN0eWxlLmJvdHRvbSA9IFwiMFwiXG59XG5cbmZ1bmN0aW9uIHJlZ1Bob25lKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC52YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpO1xufVxuXG5mdW5jdGlvbiBpbnB1dFBob25lKGUpIHtcbiAgbGV0IGlucHV0ID0gZS50YXJnZXQ7XG4gIGxldCBpbnB1dE51bWJlclZhbHVlID0gcmVnUGhvbmUoaW5wdXQpO1xuICBsZXQgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9ICcnO1xuICBsZXQgc2VsZWN0aW9uU3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydFxuICAvLyDQldGB0LvQuCDQsiDQuNC90L/Rg9GCINCy0LLQtdC00LXQvdGLINGB0LjQvNC+0LLQu9GLINC90LUg0YHQvtC+0YLQstC10YLRgdCy0YPRjtGJ0LjQtSDRgNC10LPRg9C70Y/RgNC60LgsINGC0L4g0LfQvdCw0YfQtdC90LjQtSDQuNC90L/Rg9GC0LAg0YHRgtCw0L3QvtCy0LjRgtGB0Y8g0L/Rg9GB0YLRi9C8XG4gIGlmICghaW5wdXROdW1iZXJWYWx1ZSkgcmV0dXJuIGlucHV0LnZhbHVlID0gJydcbiAgLy8g0JIg0Y3RgtC+0Lkg0YfQsNGB0YLQuCDRjyDQvdC1INGB0L7QstGB0LXQvCDQv9C+0L3QuNC80LDRjiDRh9GC0L4g0L/RgNC+0LjRgdGF0L7QtNC40YJcbiAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCAhPSBzZWxlY3Rpb25TdGFydCkge1xuICAgIGlmIChlLmRhdGEgJiYgL1xcRC9nLnRlc3QoZS5kYXRhKSkge1xuICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dE51bWJlclZhbHVlXG4gICAgfVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKFsnNycsICc4JywgJzknXS5pbmNsdWRlcyhpbnB1dE51bWJlclZhbHVlWzBdKSkge1xuICAgIC8vINCV0YHQu9C4INC/0LXRgNCy0LDRjyDRhtC40YTRgNCwINC00LXQstGP0YLRjCwg0YLQvtCz0LTQsCDQvNGLINC30LDQvNC10L3Rj9C10Lwg0L/QtdGA0LLRg9GOINGG0LjRhNGA0YMg0L3QsCA3INC4INC00LXQstGP0YLQutGDINC00LXQu9Cw0LXQvCDQstGC0L7RgNC+0Lkg0YbQuNGE0YDQvtC5XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWVbMF0gPT0gJzknKSBpbnB1dE51bWJlclZhbHVlID0gJzcnICsgaW5wdXROdW1iZXJWYWx1ZTtcbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZVswXSA9PSAnOCcpIGlucHV0TnVtYmVyVmFsdWUgPSAnNydcbiAgICAvLyDQldGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCA3LCDRgtC+0LPQtNCwINC30L3QsNGH0LXQvdC40LUg0LjQvdC/0YPRgtCwINC90LDRh9C40L3QsNC10YLRgdGPINGBICs3LCDQtdGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCA4LCDRgtC+0LPQtNCwINC30L3QsNGH0LXQvdC40LUg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0YEgOFxuICAgIGxldCBmaXJzdFN5bWJvbCA9ICcrNyc7XG4gICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9IGZpcnN0U3ltYm9sICsgJyAnO1xuICAgIC8vINCV0YHQu9C4INCyINC40L3Qv9GD0YLQtSDQsdC+0LvRjNGI0LUg0L7QtNC90L7QuSDRhtC40YTRgNGLINC00L7QsdCw0LLQu9GP0LXQvCDRgdC60L7QsdC60YMg0L7RgtC60YDRi9GC0LjRjyDQuCDRgtCw0Log0LTQsNC70LXQtVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJygnICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoMSwgNClcbiAgICB9XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWUubGVuZ3RoID49IDUpIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJykgJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDQsIDcpXG4gICAgfVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+PSA4KSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICctJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDcsIDkpXG4gICAgfVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+PSAxMCkge1xuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg5LCAxMSk7XG4gICAgfVxuICB9IGVsc2UgeyAvL9CV0YHQu9C4INCy0LLQvtC00LjQvNC+0LUg0YfQuNGB0LvQviDQvdC1IDcsIDgg0LjQu9C4IDkg0YLQvtCz0LTQsCDQtNC+0LHQsNCy0LvRj9C10LwgK9C4INC00L7QsdCw0LLQu9GP0LXQvCDQstCy0LXQtNC10L3QvtC1INGH0LjRgdC70L5cbiAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gJys3ICg5JyArIGlucHV0TnVtYmVyVmFsdWU7XG4gIH1cbiAgaW5wdXQudmFsdWUgPSBmb3JtYXR0ZWRJbnB1dFZhbHVlXG59XG5cbmZ1bmN0aW9uIG9uZVBob25lS2V5RG93biAoZSkge1xuICBsZXQgaW5wdXQgPSBlLnRhcmdldDtcbiAgaWYgKHJlZ1Bob25lKGlucHV0KS5sZW5ndGggPT0gMSAmJiBlLmtleUNvZGUgPT09IDgpIHtcbiAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dDbGVhcihpbnB1dCwgYnRuKSB7XG4gIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgYnRuLmRpc2FibGVkID0gZmFsc2VcbiAgfSBlbHNlIHtcbiAgICBidG4uZGlzYWJsZWQgPSB0cnVlXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJJbnB1dChpbnB1dCkge1xuICBpbnB1dC52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNvdW50Q2hhbmdlKGNvdW50LCBnb29kcykge1xuICBjb25zdCBzcGFuID0gY291bnQucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuICBjb25zdCBtaW51cyA9IGNvdW50LmZpcnN0RWxlbWVudENoaWxkO1xuICBjb25zdCBwbHVzID0gY291bnQubGFzdEVsZW1lbnRDaGlsZDtcblxuICBtaW51cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoc3Bhbi50ZXh0Q29udGVudCkgLSAxXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IG51bTtcbiAgICBpZiAoISFnb29kcykge1xuICAgICAgZ29vZHMudGV4dENvbnRlbnQgPSBgJHtudW19INGI0YIuYFxuICAgIH1cbiAgICBkaXNhYmxlZE1pbnVzKG51bSwgbWludXMpXG4gIH0pXG5cbiAgcGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoc3Bhbi50ZXh0Q29udGVudCkgKyAxXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IG51bTtcbiAgICBpZiAoISFnb29kcykge1xuICAgICAgZ29vZHMudGV4dENvbnRlbnQgPSBgJHtudW19INGI0YIuYFxuICAgIH1cbiAgICBkaXNhYmxlZE1pbnVzKG51bSwgbWludXMpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRpc2FibGVkTWludXMobnVtLCBidG4pIHtcbiAgaWYgKG51bSA8IDEpIHtcbiAgICBidG4uZGlzYWJsZWQgPSB0cnVlXG4gIH0gZWxzZSB7XG4gICAgYnRuLmRpc2FibGVkID0gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBhY2NvcmRpb25BY3RpdmUoaXRlbSkge1xuICBpdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImlzLXNob3dcIik7XG4gIGxldCBwYW5lbCA9IGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICBpZiAoIXBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xuICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IHBhbmVsLnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBhY2NvcmRpb25Ob3RBY3RpdmUoaXRlbSkge1xuICBpdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImlzLXNob3dcIik7XG4gIGxldCBwYW5lbCA9IGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICBpZiAocGFuZWwuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbFxuICB9XG59XG5cbmZ1bmN0aW9uIG9wZW5Db3VudGVyKGJ0biwgY291bnRlcikge1xuICBidG4uY2xhc3NMaXN0LmFkZChcIm5vdC1hY3RpdmVcIik7XG4gIGNvdW50ZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxufVxuXG5mdW5jdGlvbiBjbG9zZUNvdW50ZXIoYnRuLCBjb3VudGVyKSB7XG4gIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwibm90LWFjdGl2ZVwiKTtcbiAgY291bnRlci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNvdW50ZXIoc3BhbiwgYnRuLCBjb3VudGVyLCBvcGVyYXRvcikge1xuXG4gIGxldCBudW0gPSBOdW1iZXIoc3Bhbi50ZXh0Q29udGVudCk7XG5cbiAgaWYgKG9wZXJhdG9yID09PSBcInBsdXNcIikge1xuICAgIG51bSArPSAxXG4gIH0gZWxzZSB7XG4gICAgbnVtIC09MVxuICB9XG5cbiAgbnVtIDwgMSA/IGNsb3NlQ291bnRlcihidG4sIGNvdW50ZXIpIDogc3Bhbi50ZXh0Q29udGVudCA9IG51bVxufVxuXG5mdW5jdGlvbiBwcm9kdWN0Q2FyZCgpIHtcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWNhcmRcIik7XG4gIGNhcmRzLmZvckVhY2goZWxlbSA9PiB7XG4gICAgY29uc3QgYnRuV3JhcCA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLWJ0bnNcIilcbiAgICBjb25zdCBidG4gPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1hZGRcIilcbiAgICBjb25zdCBjb3VudGVyID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtY291bnRlclwiKVxuICAgIGNvbnN0IGNvdW50ID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbiAgICBjb25zdCBtaW51cyA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLW1pbnVzXCIpO1xuICAgIGNvbnN0IHBsdXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1wbHVzXCIpO1xuXG4gICAgYnRuV3JhcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtvcGVuQ291bnRlcihidG4sIGNvdW50ZXIpfSk7XG5cbiAgICBtaW51cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2NoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJtaW51c1wiKX0pXG5cbiAgICBwbHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7Y2hhbmdlQ291bnRlcihjb3VudCwgYnRuLCBjb3VudGVyLCBcInBsdXNcIil9KVxuICB9KVxufSJdfQ==
