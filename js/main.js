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
  var scrollTouch = document.querySelector(".sorting__touch");
  var btnFilter = document.querySelector(".restaurants__filter");
  var filterModal = document.querySelector(".filter");
  var scrollFilter = document.querySelector(".filter__box");
  btnSort.addEventListener('click', function (e) {
    openModal(sortModal);
    document.body.classList.add('lock');
  });
  btnFilter.addEventListener('click', function () {
    openModal(filterModal);
  }); // scrollTouch.addEventListener("swiped-down", function (e) {
  //   sortModal.classList.remove("active")
  //   document.body.classList.remove('lock')
  //
  // })

  setupModalEvents(sortModal, scrollSort); // setupModalEvents(filterModal, scrollFilter)

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

  if (endY > this.startY) {
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

function setupModalEvents(modal, scroll) {
  modal.addEventListener("click", stopPropagation);
  scroll.addEventListener("touchstart", stopPropagation);
  scroll.addEventListener("mousedown", stopPropagation);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNsaWRlck9uZSIsImluaXRTd2lwZXIiLCJzbGlkZXJUd28iLCJzbGlkZXJUaHJlZSIsInNsaWRlckZvdXIiLCJzbGlkZXJGaXZlIiwiYnRuU29ydCIsInF1ZXJ5U2VsZWN0b3IiLCJzb3J0TW9kYWwiLCJzY3JvbGxTb3J0Iiwic2Nyb2xsVG91Y2giLCJidG5GaWx0ZXIiLCJmaWx0ZXJNb2RhbCIsInNjcm9sbEZpbHRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwib3Blbk1vZGFsIiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInNldHVwTW9kYWxFdmVudHMiLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyQnRuIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidG4iLCJlbGVtIiwicmVtb3ZlIiwicmVzdGF1cmFudHNGaWx0ZXJCdG4iLCJpbnB1dFNlYXJjaCIsImJ0bkNsZWFyU2VhcmNoIiwic2hvd0NsZWFyIiwiY2xlYXJJbnB1dCIsImFkZHJlc3NCdG4iLCJhZGRCdG4iLCJhZGRyZXNzU2VhcmNoIiwicGFyZW50RWxlbWVudCIsImNvbnRhaW5zIiwiYWNjb3JkaW9uTm90QWN0aXZlIiwiYWNjb3JkaW9uQWN0aXZlIiwidGFyZ2V0IiwidGVsIiwiaW5wdXRQaG9uZSIsIm9uZVBob25lS2V5RG93biIsImJhc2tldERlbGV0ZSIsIm1vZGFsRGVsZXRlIiwiYm9vdHN0cmFwIiwiTW9kYWwiLCJjYXJkcyIsImNvdW50IiwiY2FyZCIsImNvdW50ZXIiLCJnb29kcyIsImNvdW50Q2hhbmdlIiwic2hvdyIsInNsaWRlciIsIm1vZGFsUGhvbmUiLCJjaGFuZ2VQaG9uZUJ0biIsInBob25lTnVtIiwiaW5wdXRUZWwiLCJpbnB1dEJ0biIsImtleUNvZGUiLCJ0ZXh0Q29udGVudCIsInZhbHVlIiwiYnRucyIsImluZGV4IiwiaW5kZXhFbGVtIiwiYWRkQWRkcmVzcyIsIm1vZGFsIiwiaW5wdXRTZWFyY2hCdG4iLCJtb2RhbE5hbWUiLCJjaGFuZ2VOYW1lQnRuIiwibmFtZVNwYW4iLCJpbnB1dE5hbWUiLCJrZXkiLCJwcm9kdWN0Q2FyZCIsInN3aXBlciIsInN3aXBlcjIiLCJzd2lwZXIzIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIm1pbnVzIiwicGx1cyIsIm9wZW5Db3VudGVyIiwiY2hhbmdlQ291bnRlciIsImNvbnRhaW5lciIsInN0b3BQcm9wYWdhdGlvbiIsImV2ZW50IiwiaGFuZGxlVG91Y2hTdGFydCIsInN0YXJ0WSIsInRvdWNoZXMiLCJjbGllbnRZIiwiaGFuZGxlVG91Y2hNb3ZlIiwiZW5kWSIsImhhbmRsZU1vdXNlRG93biIsImlzRHJhZ2dpbmciLCJoYW5kbGVNb3VzZU1vdmUiLCJkZWx0YVkiLCJzdHlsZSIsImJvdHRvbSIsImhhbmRsZU1vdXNlVXAiLCJzY3JvbGwiLCJyZWdQaG9uZSIsImlucHV0IiwicmVwbGFjZSIsImlucHV0TnVtYmVyVmFsdWUiLCJmb3JtYXR0ZWRJbnB1dFZhbHVlIiwic2VsZWN0aW9uU3RhcnQiLCJsZW5ndGgiLCJkYXRhIiwidGVzdCIsImluY2x1ZGVzIiwiZmlyc3RTeW1ib2wiLCJzdWJzdHJpbmciLCJkaXNhYmxlZCIsInNwYW4iLCJmaXJzdEVsZW1lbnRDaGlsZCIsImxhc3RFbGVtZW50Q2hpbGQiLCJudW0iLCJOdW1iZXIiLCJkaXNhYmxlZE1pbnVzIiwiaXRlbSIsInBhbmVsIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwibWF4SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiY2xvc2VDb3VudGVyIiwib3BlcmF0b3IiLCJidG5XcmFwIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQUosRUFBc0M7RUFDcEMsSUFBTUMsU0FBUyxHQUFHQyxVQUFVLENBQUMsdUJBQUQsQ0FBNUI7RUFDQSxJQUFNQyxTQUFTLEdBQUdE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cEIsYUFBTCxDQUFtQixjQUFuQixDQUFaO0lBQ0EsSUFBTTZDLE9BQU8sR0FBR3pCLElBQUksQ0FBQ3BCLGFBQUwsQ0FBbUIsa0JBQW5CLENBQWhCO0lBQ0EsSUFBTTJDLEtBQUssR0FBR0UsT0FBTyxDQUFDN0MsYUFBUixDQUFzQixNQUF0QixDQUFkO0lBQ0EsSUFBTTRFLEtBQUssR0FBRy9CLE9BQU8sQ0FBQzdDLGFBQVIsQ0FBc0IsZ0JBQXRCLENBQWQ7SUFDQSxJQUFNNkUsSUFBSSxHQUFHaEMsT0FBTyxDQUFDN0MsYUFBUixDQUFzQixlQUF0QixDQUFiO0lBRUEySCxPQUFPLENBQUNwSCxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFBQyxDQUFDLEVBQUk7TUFDckNBLENBQUMsQ0FBQ29ILGNBQUY7SUFDRCxDQUZEO0lBR0F6RyxHQUFHLENBQUNaLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQU07TUFBQ3VFLFdBQVcsQ0FBQzNELEdBQUQsRUFBTTBCLE9BQU4sQ0FBWDtJQUEwQixDQUEvRDtJQUVBK0IsS0FBSyxDQUFDckUsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBTTtNQUFDd0UsYUFBYSxDQUFDcEMsS0FBRCxFQUFReEIsR0FBUixFQUFhMEIsT0FBYixFQUFzQixPQUF0QixDQUFiO0lBQTRDLENBQW5GO0lBRUFnQyxJQUFJLENBQUN0RSxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFNO01BQUN3RSxhQUFhLENBQUNwQyxLQUFELEVBQVF4QixHQUFSLEVBQWEwQixPQUFiLEVBQXNCLE1BQXRCLENBQWI7SUFBMkMsQ0FBakY7RUFDRCxDQWhCRDtBQWlCRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5kZXhcIikpIHtcbiAgY29uc3Qgc2xpZGVyT25lID0gaW5pdFN3aXBlcihcIi5tYWluLXN0b2NrX19zd2lwZXItMVwiKVxuICBjb25zdCBzbGlkZXJUd28gPSBpbml0U3dpcGVyKFwiLm1haW4tc3RvY2tfX3N3aXBlci0yXCIpXG4gIGNvbnN0IHNsaWRlclRocmVlID0gaW5pdFN3aXBlcihcIi5tYWluLXN0b2NrX19zd2lwZXItM1wiKVxuICBjb25zdCBzbGlkZXJGb3VyID0gaW5pdFN3aXBlcihcIi5tYWluLXN0b2NrX19zd2lwZXItNFwiKVxuICBjb25zdCBzbGlkZXJGaXZlID0gaW5pdFN3aXBlcihcIi5tYWluLXN0b2NrX19zd2lwZXItNVwiKVxuXG4gIGNvbnN0IGJ0blNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRzX19zb3J0XCIpO1xuICBjb25zdCBzb3J0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdcIik7XG4gIGNvbnN0IHNjcm9sbFNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdfX2JveFwiKVxuICBjb25zdCBzY3JvbGxUb3VjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ19fdG91Y2hcIik7XG4gIGNvbnN0IGJ0bkZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudHNfX2ZpbHRlclwiKTtcbiAgY29uc3QgZmlsdGVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlclwiKTtcbiAgY29uc3Qgc2Nyb2xsRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX2JveFwiKTtcbiAgYnRuU29ydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgb3Blbk1vZGFsKHNvcnRNb2RhbClcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICB9KVxuICBidG5GaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3Blbk1vZGFsKGZpbHRlck1vZGFsKVxuICB9KVxuXG4gIC8vIHNjcm9sbFRvdWNoLmFkZEV2ZW50TGlzdGVuZXIoXCJzd2lwZWQtZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAvLyAgIHNvcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gIC8vICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJylcbiAgLy9cbiAgLy8gfSlcblxuICBzZXR1cE1vZGFsRXZlbnRzKHNvcnRNb2RhbCwgc2Nyb2xsU29ydClcbiAgLy8gc2V0dXBNb2RhbEV2ZW50cyhmaWx0ZXJNb2RhbCwgc2Nyb2xsRmlsdGVyKVxuICBjb25zb2xlLmxvZyhzY3JvbGxTb3J0KVxuXG4gIGNvbnN0IGZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2J0bicpO1xuXG4gIGZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZmlsdGVyQnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgcmVzdGF1cmFudHNGaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdGF1cmFudHNfX2ZpbHRlcnMtYnRuJylcblxuICByZXN0YXVyYW50c0ZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2lucHV0Jyk7XG4gIGNvbnN0IGJ0bkNsZWFyU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VhcmNoLWNsZWFyJylcbiAgaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7c2hvd0NsZWFyKGlucHV0U2VhcmNoLCBidG5DbGVhclNlYXJjaCl9KVxuICBidG5DbGVhclNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFySW5wdXQoaW5wdXRTZWFyY2gpXG4gICAgc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBidG5DbGVhclNlYXJjaClcbiAgfSlcblxuICBjb25zdCBhZGRyZXNzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYWRkcmVzcy1idG4nKVxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19hZGRyZXNzLWFkZCcpXG4gIGNvbnN0IGFkZHJlc3NTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19hZGRyZXNzLXNlYXJjaCcpXG5cbiAgYWRkcmVzc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRyZXNzQnRuLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtc2hvd1wiKSA/IGFjY29yZGlvbk5vdEFjdGl2ZShhZGRyZXNzQnRuKSA6IGFjY29yZGlvbkFjdGl2ZShhZGRyZXNzQnRuKVxuICB9KVxuXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRyZXNzU2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIXNvcnRNb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWJ0blNvcnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBzb3J0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFmaWx0ZXJNb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWJ0bkZpbHRlci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGZpbHRlck1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghYWRkcmVzc0J0bi5wYXJlbnRFbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgYWNjb3JkaW9uTm90QWN0aXZlKGFkZHJlc3NCdG4pXG4gICAgICBhZGRyZXNzU2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0aG9yaXphdGlvblwiKSkge1xuICBjb25zdCB0ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGhvcml6YXRpb25fX2lucHV0W3R5cGU9J3RlbCddXCIpO1xuICB0ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7aW5wdXRQaG9uZShlKX0pXG4gIHRlbC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge29uZVBob25lS2V5RG93bihlKX0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2tldFwiKSkge1xuICBjb25zdCBiYXNrZXREZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19oZWFkZXItZGVsZXRlJyk7XG4gIGNvbnN0IG1vZGFsRGVsZXRlID0gbmV3IGJvb3RzdHJhcC5Nb2RhbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLW1vZGFsLWRlbGV0ZVwiKSlcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFza2V0X19zZWxlY3RlZC1pdGVtJylcblxuICBjb25zdCBjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRfX2NvdW50LWNvdW50JylcblxuICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgIGNvbnN0IGNvdW50ZXIgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRfX3NlbGVjdGVkLWl0ZW0tY291bnRlcicpXG4gICAgY29uc3QgZ29vZHMgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRfX3NlbGVjdGVkLWl0ZW0tY291bnQnKVxuICAgIGNvdW50Q2hhbmdlKGNvdW50ZXIsIGdvb2RzKTtcbiAgfSlcblxuICBiYXNrZXREZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7bW9kYWxEZWxldGUuc2hvdygpfSlcblxuICBjb25zdCBzbGlkZXIgPSBpbml0U3dpcGVyKFwiLmJhc2tldF9fc3dpcGVyXCIpXG5cbiAgY291bnRDaGFuZ2UoY291bnQpXG5cbiAgY29uc3QgbW9kYWxQaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLW1vZGFsXCIpXG4gIGNvbnN0IGNoYW5nZVBob25lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tcGhvbmVcIilcbiAgY29uc3QgcGhvbmVOdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1waG9uZS1udW1cIilcbiAgY29uc3QgaW5wdXRUZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1tb2RhbC1pbnB1dFwiKVxuICBjb25zdCBpbnB1dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLW1vZGFsLWJ0blwiKVxuXG4gIGlucHV0VGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge2lucHV0UGhvbmUoZSl9KVxuICBpbnB1dFRlbC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIG9uZVBob25lS2V5RG93bihlKVxuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBwaG9uZU51bS50ZXh0Q29udGVudCA9IGlucHV0VGVsLnZhbHVlXG4gICAgICBpbnB1dFRlbC52YWx1ZSA9ICcnXG4gICAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxuICBpbnB1dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBob25lTnVtLnRleHRDb250ZW50ID0gaW5wdXRUZWwudmFsdWVcbiAgICBpbnB1dFRlbC52YWx1ZSA9ICcnXG4gICAgbW9kYWxQaG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGNoYW5nZVBob25lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWxQaG9uZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmICghbW9kYWxQaG9uZS5jb250YWlucyhlLnRhcmdldCkgJiYgIWNoYW5nZVBob25lQnRuLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgbW9kYWxQaG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VjY2Vzc1wiKSkge1xuICBjb25zdCBzbGlkZXIgPSBpbml0U3dpcGVyKFwiLnN1Y2Nlc3NfX29yZGVyZWQtc3dpcGVyXCIpXG5cbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWNjZXNzX19ncmFkZS1zdGFyJyk7XG4gIGJ0bnMuZm9yRWFjaCgoYnRuLCBpbmRleCkgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGJ0bnMuZm9yRWFjaCgoZWxlbSwgaW5kZXhFbGVtKSA9PiB7XG4gICAgICAgIGlmIChpbmRleEVsZW0gPD0gaW5kZXgpIHtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIH0gZWxzZSAge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjb3VudFwiKSkge1xuICBjb25zdCBhZGRBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2FkZHJlc3MtYWRkJyk7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2FkZHJlc3Mtc2VhcmNoJyk7XG4gIGNvbnN0IGlucHV0U2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2FkZHJlc3Mtc2VhcmNoLWlucHV0JylcbiAgY29uc3QgaW5wdXRTZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fYWRkcmVzcy1zZWFyY2gtYnRuJylcblxuICBhZGRBZGRyZXNzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gIH0pXG5cbiAgaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGlucHV0U2VhcmNoQnRuKSlcbiAgaW5wdXRTZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJJbnB1dChpbnB1dFNlYXJjaClcbiAgICBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGlucHV0U2VhcmNoQnRuKVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIW1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYWRkQWRkcmVzcy5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IG1vZGFsTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1tb2RhbFwiKVxuICBjb25zdCBjaGFuZ2VOYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW5hbWUtd3JhcFwiKVxuICBjb25zdCBuYW1lU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1uYW1lXCIpXG4gIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1tb2RhbC1pbnB1dFwiKVxuICBjb25zdCBpbnB1dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1tb2RhbC1idG5cIilcblxuICBpbnB1dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG5hbWVTcGFuLnRleHRDb250ZW50ID0gaW5wdXROYW1lLnZhbHVlXG4gICAgaW5wdXROYW1lLnZhbHVlID0gXCJcIjtcbiAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBpbnB1dE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIG5hbWVTcGFuLnRleHRDb250ZW50ID0gaW5wdXROYW1lLnZhbHVlXG4gICAgICBpbnB1dE5hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxuXG4gIGNoYW5nZU5hbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoIW1vZGFsTmFtZS5jb250YWlucyhlLnRhcmdldCkgJiYgIWNoYW5nZU5hbWVCdG4uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b2NrXCIpKSB7XG4gIGNvbnN0IHNsaWRlck9uZSA9IGluaXRTd2lwZXIoJy5zdG9ja19fYmxvY2stc3dpcGVyJylcbiAgY29uc3Qgc2xpZGVyVHdvID0gaW5pdFN3aXBlcignLnN0b2NrX19ibG9jay1zd2lwZXItMicpXG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZFwiKSkge1xuICAgIHByb2R1Y3RDYXJkKCk7XG4gIH1cblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN0YXVyYW50XCIpKSB7XG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZFwiKSkge1xuICAgIHByb2R1Y3RDYXJkKCk7XG4gIH1cblxuICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudF9fc2V0dGluZ3Mtc2VhcmNoLWlucHV0XCIpXG4gIGNvbnN0IGlucHV0U2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50X19zZXR0aW5ncy1zZWFyY2gtYnRuXCIpXG4gIGNvbnN0IGJ0blNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRfX3NldHRpbmdzLXNvcnRcIik7XG4gIGNvbnN0IHNvcnRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ1wiKTtcbiAgY29uc3Qgc2Nyb2xsU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ19fYm94XCIpXG4gIGNvbnN0IGJ0bkZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudF9fc2V0dGluZ3MtZmlsdGVyXCIpO1xuICBjb25zdCBmaWx0ZXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyXCIpO1xuICBjb25zdCBzY3JvbGxGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcl9fYm94XCIpO1xuXG5cbiAgaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGlucHV0U2VhcmNoQnRuKSlcbiAgaW5wdXRTZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJJbnB1dChpbnB1dFNlYXJjaClcbiAgICBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGlucHV0U2VhcmNoQnRuKVxuICB9KVxuXG5cbiAgYnRuU29ydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBvcGVuTW9kYWwoc29ydE1vZGFsKVxuICB9KVxuICBidG5GaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3Blbk1vZGFsKGZpbHRlck1vZGFsKVxuICB9KVxuXG4gIHNldHVwTW9kYWxFdmVudHMoc29ydE1vZGFsLCBzY3JvbGxTb3J0KVxuICBzZXR1cE1vZGFsRXZlbnRzKGZpbHRlck1vZGFsLCBzY3JvbGxGaWx0ZXIpXG5cbiAgY29uc3QgZmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcl9fYnRuJyk7XG5cbiAgZmlsdGVyQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBmaWx0ZXJCdG4uZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFzb3J0TW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFidG5Tb3J0LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgc29ydE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghZmlsdGVyTW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFidG5GaWx0ZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBmaWx0ZXJNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG5cbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgcmVzdGF1cmFudHNGaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdGF1cmFudF9fc2V0dGluZ3MtZmlsdGVycy1idG4nKVxuXG4gIHJlc3RhdXJhbnRzRmlsdGVyQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZXN0YXVyYW50c0ZpbHRlckJ0bi5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKVxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IHN3aXBlciAgPSBpbml0U3dpcGVyKCcucmVzdGF1cmFudF9fc3RvY2stc3dpcGVyJylcbiAgY29uc3Qgc3dpcGVyMiA9IGluaXRTd2lwZXIoJy5yZXN0YXVyYW50X19vZmZlcnMtc3dpcGVyJylcbiAgY29uc3Qgc3dpcGVyMyA9IGluaXRTd2lwZXIoJy5yZXN0YXVyYW50X19vZmZlcnMtc3dpcGVyLTInKVxuXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RcIikpIHtcbiAgY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5wcm9kdWN0X190b3Atc3dpcGVyXCIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBzcGFjZUJldHdlZW46IDEwXG4gIH0pXG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZFwiKSkge1xuICAgIHByb2R1Y3RDYXJkKCk7XG4gIH1cblxuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1hZGRcIilcbiAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWNvdW50ZXJcIilcbiAgY29uc3QgY291bnQgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpO1xuICBjb25zdCBtaW51cyA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtY291bnRlci1taW51c1wiKTtcbiAgY29uc3QgcGx1cyA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtY291bnRlci1wbHVzXCIpO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge29wZW5Db3VudGVyKGJ0biwgY291bnRlcil9KTtcblxuICBtaW51cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2NoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJtaW51c1wiKX0pXG5cbiAgcGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2NoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJwbHVzXCIpfSlcblxuICBjb25zdCBzd2lwZXIyID0gaW5pdFN3aXBlcihcIi5wcm9kdWN0X19hZGRpdGlvbmFsLXN3aXBlclwiKVxuICBjb25zdCBzd2lwZXIzID0gaW5pdFN3aXBlcihcIi5wcm9kdWN0X19hZGRpdGlvbmFsLXN3aXBlci0yXCIpXG59XG4vLyDQpNGD0L3QutGG0LjQuFxuZnVuY3Rpb24gaW5pdFN3aXBlcihjb250YWluZXIpIHtcbiAgcmV0dXJuIG5ldyBTd2lwZXIoY29udGFpbmVyLCB7XG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgc3BhY2VCZXR3ZWVuOiAyMFxuICB9KVxufVxuZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KGV2ZW50KSB7XG4gIHRoaXMuc3RhcnRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoZXZlbnQpIHtcbiAgbGV0IGVuZFkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gIGlmIChlbmRZID4gdGhpcy5zdGFydFkpIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuICB0aGlzLnN0YXJ0WSA9IGV2ZW50LmNsaWVudFk7XG4gIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZShldmVudCkge1xuICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgbGV0IGVuZFkgPSBldmVudC5jbGllbnRZO1xuICAgIGxldCBkZWx0YVkgPSBlbmRZIC0gdGhpcy5zdGFydFk7XG4gICAgaWYgKGRlbHRhWSA+IDApIHtcbiAgICAgIHRoaXMuc3R5bGUuYm90dG9tID0gLWRlbHRhWSArIFwicHhcIjtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlTW91c2VVcChldmVudCkge1xuICBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG4gICAgbGV0IGVuZFkgPSBldmVudC5jbGllbnRZO1xuICAgIGxldCBkZWx0YVkgPSBlbmRZIC0gdGhpcy5zdGFydFk7XG4gICAgaWYgKGRlbHRhWSA+IDUwKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3R5bGUuYm90dG9tID0gXCIwXCI7XG4gICAgfVxuICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldHVwTW9kYWxFdmVudHMobW9kYWwsIHNjcm9sbCkge1xuXG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdG9wUHJvcGFnYXRpb24pO1xuICBzY3JvbGwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgc3RvcFByb3BhZ2F0aW9uKVxuICBzY3JvbGwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBzdG9wUHJvcGFnYXRpb24pXG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGhhbmRsZVRvdWNoU3RhcnQpO1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGhhbmRsZVRvdWNoTW92ZSk7XG5cbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVNb3VzZURvd24pO1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGhhbmRsZU1vdXNlTW92ZSk7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGhhbmRsZU1vdXNlVXApO1xufVxuXG5mdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBtb2RhbC5zdHlsZS5ib3R0b20gPSBcIjBcIlxufVxuXG5mdW5jdGlvbiByZWdQaG9uZShpbnB1dCkge1xuICByZXR1cm4gaW5wdXQudmFsdWUucmVwbGFjZSgvXFxEL2csICcnKTtcbn1cblxuZnVuY3Rpb24gaW5wdXRQaG9uZShlKSB7XG4gIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xuICBsZXQgaW5wdXROdW1iZXJWYWx1ZSA9IHJlZ1Bob25lKGlucHV0KTtcbiAgbGV0IGZvcm1hdHRlZElucHV0VmFsdWUgPSAnJztcbiAgbGV0IHNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnRcbiAgLy8g0JXRgdC70Lgg0LIg0LjQvdC/0YPRgiDQstCy0LXQtNC10L3RiyDRgdC40LzQvtCy0LvRiyDQvdC1INGB0L7QvtGC0LLQtdGC0YHQstGD0Y7RidC40LUg0YDQtdCz0YPQu9GP0YDQutC4LCDRgtC+INC30L3QsNGH0LXQvdC40LUg0LjQvdC/0YPRgtCwINGB0YLQsNC90L7QstC40YLRgdGPINC/0YPRgdGC0YvQvFxuICBpZiAoIWlucHV0TnVtYmVyVmFsdWUpIHJldHVybiBpbnB1dC52YWx1ZSA9ICcnXG4gIC8vINCSINGN0YLQvtC5INGH0LDRgdGC0Lgg0Y8g0L3QtSDRgdC+0LLRgdC10Lwg0L/QvtC90LjQvNCw0Y4g0YfRgtC+INC/0YDQvtC40YHRhdC+0LTQuNGCXG4gIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggIT0gc2VsZWN0aW9uU3RhcnQpIHtcbiAgICBpZiAoZS5kYXRhICYmIC9cXEQvZy50ZXN0KGUuZGF0YSkpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gaW5wdXROdW1iZXJWYWx1ZVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChbJzcnLCAnOCcsICc5J10uaW5jbHVkZXMoaW5wdXROdW1iZXJWYWx1ZVswXSkpIHtcbiAgICAvLyDQldGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCDQtNC10LLRj9GC0YwsINGC0L7Qs9C00LAg0LzRiyDQt9Cw0LzQtdC90Y/QtdC8INC/0LXRgNCy0YPRjiDRhtC40YTRgNGDINC90LAgNyDQuCDQtNC10LLRj9GC0LrRgyDQtNC10LvQsNC10Lwg0LLRgtC+0YDQvtC5INGG0LjRhNGA0L7QuVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlWzBdID09ICc5JykgaW5wdXROdW1iZXJWYWx1ZSA9ICc3JyArIGlucHV0TnVtYmVyVmFsdWU7XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWVbMF0gPT0gJzgnKSBpbnB1dE51bWJlclZhbHVlID0gJzcnXG4gICAgLy8g0JXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAgNywg0YLQvtCz0LTQsCDQt9C90LDRh9C10L3QuNC1INC40L3Qv9GD0YLQsCDQvdCw0YfQuNC90LDQtdGC0YHRjyDRgSArNywg0LXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAgOCwg0YLQvtCz0LTQsCDQt9C90LDRh9C10L3QuNC1INC90LDRh9C40L3QsNC10YLRgdGPINGBIDhcbiAgICBsZXQgZmlyc3RTeW1ib2wgPSAnKzcnO1xuICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBmaXJzdFN5bWJvbCArICcgJztcbiAgICAvLyDQldGB0LvQuCDQsiDQuNC90L/Rg9GC0LUg0LHQvtC70YzRiNC1INC+0LTQvdC+0Lkg0YbQuNGE0YDRiyDQtNC+0LHQsNCy0LvRj9C10Lwg0YHQutC+0LHQutGDINC+0YLQutGA0YvRgtC40Y8g0Lgg0YLQsNC6INC00LDQu9C10LVcbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcoJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDEsIDQpXG4gICAgfVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+PSA1KSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcpICcgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg0LCA3KVxuICAgIH1cbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gOCkge1xuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg3LCA5KVxuICAgIH1cbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gMTApIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJy0nICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoOSwgMTEpO1xuICAgIH1cbiAgfSBlbHNlIHsgLy/QldGB0LvQuCDQstCy0L7QtNC40LzQvtC1INGH0LjRgdC70L4g0L3QtSA3LCA4INC40LvQuCA5INGC0L7Qs9C00LAg0LTQvtCx0LDQstC70Y/QtdC8ICvQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0LLQstC10LTQtdC90L7QtSDRh9C40YHQu9C+XG4gICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9ICcrNyAoOScgKyBpbnB1dE51bWJlclZhbHVlO1xuICB9XG4gIGlucHV0LnZhbHVlID0gZm9ybWF0dGVkSW5wdXRWYWx1ZVxufVxuXG5mdW5jdGlvbiBvbmVQaG9uZUtleURvd24gKGUpIHtcbiAgbGV0IGlucHV0ID0gZS50YXJnZXQ7XG4gIGlmIChyZWdQaG9uZShpbnB1dCkubGVuZ3RoID09IDEgJiYgZS5rZXlDb2RlID09PSA4KSB7XG4gICAgaW5wdXQudmFsdWUgPSAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93Q2xlYXIoaW5wdXQsIGJ0bikge1xuICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgYnRuLmRpc2FibGVkID0gdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFySW5wdXQoaW5wdXQpIHtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBjb3VudENoYW5nZShjb3VudCwgZ29vZHMpIHtcbiAgY29uc3Qgc3BhbiA9IGNvdW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgY29uc3QgbWludXMgPSBjb3VudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgY29uc3QgcGx1cyA9IGNvdW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpIC0gMVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBudW07XG4gICAgaWYgKCEhZ29vZHMpIHtcbiAgICAgIGdvb2RzLnRleHRDb250ZW50ID0gYCR7bnVtfSDRiNGCLmBcbiAgICB9XG4gICAgZGlzYWJsZWRNaW51cyhudW0sIG1pbnVzKVxuICB9KVxuXG4gIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpICsgMVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBudW07XG4gICAgaWYgKCEhZ29vZHMpIHtcbiAgICAgIGdvb2RzLnRleHRDb250ZW50ID0gYCR7bnVtfSDRiNGCLmBcbiAgICB9XG4gICAgZGlzYWJsZWRNaW51cyhudW0sIG1pbnVzKVxuICB9KVxufVxuXG5mdW5jdGlvbiBkaXNhYmxlZE1pbnVzKG51bSwgYnRuKSB7XG4gIGlmIChudW0gPCAxKSB7XG4gICAgYnRuLmRpc2FibGVkID0gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gYWNjb3JkaW9uQWN0aXZlKGl0ZW0pIHtcbiAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpcy1zaG93XCIpO1xuICBsZXQgcGFuZWwgPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKCFwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWNjb3JkaW9uTm90QWN0aXZlKGl0ZW0pIHtcbiAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1zaG93XCIpO1xuICBsZXQgcGFuZWwgPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xuICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGxcbiAgfVxufVxuXG5mdW5jdGlvbiBvcGVuQ291bnRlcihidG4sIGNvdW50ZXIpIHtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJub3QtYWN0aXZlXCIpO1xuICBjb3VudGVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbn1cblxuZnVuY3Rpb24gY2xvc2VDb3VudGVyKGJ0biwgY291bnRlcikge1xuICBidG4uY2xhc3NMaXN0LnJlbW92ZShcIm5vdC1hY3RpdmVcIik7XG4gIGNvdW50ZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VDb3VudGVyKHNwYW4sIGJ0biwgY291bnRlciwgb3BlcmF0b3IpIHtcblxuICBsZXQgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpO1xuXG4gIGlmIChvcGVyYXRvciA9PT0gXCJwbHVzXCIpIHtcbiAgICBudW0gKz0gMVxuICB9IGVsc2Uge1xuICAgIG51bSAtPTFcbiAgfVxuXG4gIG51bSA8IDEgPyBjbG9zZUNvdW50ZXIoYnRuLCBjb3VudGVyKSA6IHNwYW4udGV4dENvbnRlbnQgPSBudW1cbn1cblxuZnVuY3Rpb24gcHJvZHVjdENhcmQoKSB7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1jYXJkXCIpO1xuICBjYXJkcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIGNvbnN0IGJ0bldyYXAgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1idG5zXCIpXG4gICAgY29uc3QgYnRuID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtYWRkXCIpXG4gICAgY29uc3QgY291bnRlciA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLWNvdW50ZXJcIilcbiAgICBjb25zdCBjb3VudCA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4gICAgY29uc3QgbWludXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1taW51c1wiKTtcbiAgICBjb25zdCBwbHVzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtcGx1c1wiKTtcblxuICAgIGJ0bldyYXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7b3BlbkNvdW50ZXIoYnRuLCBjb3VudGVyKX0pO1xuXG4gICAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwibWludXNcIil9KVxuXG4gICAgcGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2NoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJwbHVzXCIpfSlcbiAgfSlcbn0iXX0=
