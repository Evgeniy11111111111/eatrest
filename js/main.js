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
  btnSort.addEventListener('click', function () {
    openModal(sortModal);
  });
  btnFilter.addEventListener('click', function () {
    openModal(filterModal);
  });
  scrollTouch.addEventListener("swiped-down", function (e) {
    sortModal.classList.remove("active");
  }); // setupModalEvents(sortModal, scrollSort)
  // setupModalEvents(filterModal, scrollFilter)

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
  disableScroll();
}

function handleTouchMove(event) {
  var endY = event.touches[0].clientY;
  var deltaY = endY - this.startY;

  if (deltaY > 0) {
    this.style.bottom = -deltaY + "px";
  } else if (deltaY > 50) {
    this.classList.remove("active");
    document.body.classList.remove("lock");
    enableScroll();
  } else {
    this.style.bottom = "0";
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
  modal.addEventListener("click", stopPropagation);
  modal.addEventListener("touchstart", handleTouchStart);
  modal.addEventListener("touchmove", handleTouchMove); // modal.addEventListener("mousedown", handleMouseDragStart);
  // modal.addEventListener("mousemove", handleMouseMove);
  // modal.addEventListener("mouseup", handleMouseUp);
}

var disableScroll = function disableScroll() {
  var pagePosition = window.scrollY;
  document.body.classList.add('disable-scroll');
  document.body.dataset.position = pagePosition;
  document.body.style.top = -pagePosition + 'px';
};

var enableScroll = function enableScroll() {
  var pagePosition = parseInt(document.body.dataset.position, 10);
  document.body.style.top = 'auto';
  document.body.classList.remove('disable-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  document.body.removeAttribute('data-position');
};

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNsaWRlck9uZSIsImluaXRTd2lwZXIiLCJzbGlkZXJUd28iLCJzbGlkZXJUaHJlZSIsInNsaWRlckZvdXIiLCJzbGlkZXJGaXZlIiwiYnRuU29ydCIsInF1ZXJ5U2VsZWN0b3IiLCJzb3J0TW9kYWwiLCJzY3JvbGxTb3J0Iiwic2Nyb2xsVG91Y2giLCJidG5GaWx0ZXIiLCJmaWx0ZXJNb2RhbCIsInNjcm9sbEZpbHRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcGVuTW9kYWwiLCJlIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY29uc29sZSIsImxvZyIsImZpbHRlckJ0biIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnRuIiwiZWxlbSIsImFkZCIsInJlc3RhdXJhbnRzRmlsdGVyQnRuIiwiaW5wdXRTZWFyY2giLCJidG5DbGVhclNlYXJjaCIsInNob3dDbGVhciIsImNsZWFySW5wdXQiLCJhZGRyZXNzQnRuIiwiYWRkQnRuIiwiYWRkcmVzc1NlYXJjaCIsInBhcmVudEVsZW1lbnQiLCJjb250YWlucyIsImFjY29yZGlvbk5vdEFjdGl2ZSIsImFjY29yZGlvbkFjdGl2ZSIsInRhcmdldCIsImJvZHkiLCJ0ZWwiLCJpbnB1dFBob25lIiwib25lUGhvbmVLZXlEb3duIiwiYmFza2V0RGVsZXRlIiwibW9kYWxEZWxldGUiLCJib290c3RyYXAiLCJNb2RhbCIsImNhcmRzIiwiY291bnQiLCJjYXJkIiwiY291bnRlciIsImdvb2RzIiwiY291bnRDaGFuZ2UiLCJzaG93Iiwic2xpZGVyIiwibW9kYWxQaG9uZSIsImNoYW5nZVBob25lQnRuIiwicGhvbmVOdW0iLCJpbnB1dFRlbCIsImlucHV0QnRuIiwia2V5Q29kZSIsInRleHRDb250ZW50IiwidmFsdWUiLCJidG5zIiwiaW5kZXgiLCJpbmRleEVsZW0iLCJhZGRBZGRyZXNzIiwibW9kYWwiLCJpbnB1dFNlYXJjaEJ0biIsIm1vZGFsTmFtZSIsImNoYW5nZU5hbWVCdG4iLCJuYW1lU3BhbiIsImlucHV0TmFtZSIsImtleSIsInByb2R1Y3RDYXJkIiwic2V0dXBNb2RhbEV2ZW50cyIsInN3aXBlciIsInN3aXBlcjIiLCJzd2lwZXIzIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIm1pbnVzIiwicGx1cyIsIm9wZW5Db3VudGVyIiwiY2hhbmdlQ291bnRlciIsImNvbnRhaW5lciIsInN0b3BQcm9wYWdhdGlvbiIsImV2ZW50IiwiaGFuZGxlVG91Y2hTdGFydCIsInN0YXJ0WSIsInRvdWNoZXMiLCJjbGllbnRZIiwiZGlzYWJsZVNjcm9sbCIsImhhbmRsZVRvdWNoTW92ZSIsImVuZFkiLCJkZWx0YVkiLCJzdHlsZSIsImJvdHRvbSIsImVuYWJsZVNjcm9sbCIsImhhbmRsZU1vdXNlRG93biIsImlzRHJhZ2dpbmciLCJoYW5kbGVNb3VzZU1vdmUiLCJoYW5kbGVNb3VzZVVwIiwiaGFuZGxlTW91c2VEcmFnU3RhcnQiLCJwYWdlUG9zaXRpb24iLCJ3aW5kb3ciLCJzY3JvbGxZIiwiZGF0YXNldCIsInBvc2l0aW9uIiwidG9wIiwicGFyc2VJbnQiLCJzY3JvbGwiLCJsZWZ0IiwicmVtb3ZlQXR0cmlidXRlIiwicmVnUGhvbmUiLCJpbnB1dCIsInJlcGxhY2UiLCJpbnB1dE51bWJlclZhbHVlIiwiZm9ybWF0dGVkSW5wdXRWYWx1ZSIsInNlbGVjdGlvblN0YXJ0IiwibGVuZ3RoIiwiZGF0YSIsInRlc3QiLCJpbmNsdWRlcyIsImZpcnN0U3ltYm9sIiwic3Vic3RyaW5nIiwiZGlzYWJsZWQiLCJzcGFuIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJsYXN0RWxlbWVudENoaWxkIiwibnVtIiwiTnVtYmVyIiwiZGlzYWJsZWRNaW51cyIsIml0ZW0iLCJwYW5lbCIsIm5leHRFbGVtZW50U2libGluZyIsIm1heEhlaWdodCIsInNjcm9sbEhlaWdodCIsImNsb3NlQ291bnRlciIsIm9wZXJhdG9yIiwiYnRuV3Jh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R0FBRzFCLElBQUksQ0FBQ2xCLGFBQUwsQ0FBbUIsa0JBQW5CLENBQWhCO0lBQ0EsSUFBTTBDLEtBQUssR0FBR0UsT0FBTyxDQUFDNUMsYUFBUixDQUFzQixNQUF0QixDQUFkO0lBQ0EsSUFBTTRFLEtBQUssR0FBR2hDLE9BQU8sQ0FBQzVDLGFBQVIsQ0FBc0IsZ0JBQXRCLENBQWQ7SUFDQSxJQUFNNkUsSUFBSSxHQUFHakMsT0FBTyxDQUFDNUMsYUFBUixDQUFzQixlQUF0QixDQUFiO0lBRUF1SSxPQUFPLENBQUNoSSxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFBRSxDQUFDLEVBQUk7TUFDckNBLENBQUMsQ0FBQytILGNBQUY7SUFDRCxDQUZEO0lBR0F2SCxHQUFHLENBQUNWLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQU07TUFBQ3VFLFdBQVcsQ0FBQzdELEdBQUQsRUFBTTJCLE9BQU4sQ0FBWDtJQUEwQixDQUEvRDtJQUVBZ0MsS0FBSyxDQUFDckUsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBTTtNQUFDd0UsYUFBYSxDQUFDckMsS0FBRCxFQUFRekIsR0FBUixFQUFhMkIsT0FBYixFQUFzQixPQUF0QixDQUFiO0lBQTRDLENBQW5GO0lBRUFpQyxJQUFJLENBQUN0RSxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFNO01BQUN3RSxhQUFhLENBQUNyQyxLQUFELEVBQVF6QixHQUFSLEVBQWEyQixPQUFiLEVBQXNCLE1BQXRCLENBQWI7SUFBMkMsQ0FBakY7RUFDRCxDQWhCRDtBQWlCRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5kZXhcIikpIHtcbiAgY29uc3Qgc2xpZGVyT25lID0gaW5pdFN3aXBlcihcIi5tYWluLXN0b2NrX19zd2lwZXItMVwiKVxuICBjb25zdCBzbGlkZXJUd28gPSBpbml0U3dpcGVyKFwiLm1haW4tc3RvY2tfX3N3aXBlci0yXCIpXG4gIGNvbnN0IHNsaWRlclRocmVlID0gaW5pdFN3aXBlcihcIi5tYWluLXN0b2NrX19zd2lwZXItM1wiKVxuICBjb25zdCBzbGlkZXJGb3VyID0gaW5pdFN3aXBlcihcIi5tYWluLXN0b2NrX19zd2lwZXItNFwiKVxuICBjb25zdCBzbGlkZXJGaXZlID0gaW5pdFN3aXBlcihcIi5tYWluLXN0b2NrX19zd2lwZXItNVwiKVxuXG4gIGNvbnN0IGJ0blNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRzX19zb3J0XCIpO1xuICBjb25zdCBzb3J0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdcIik7XG4gIGNvbnN0IHNjcm9sbFNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdfX2JveFwiKVxuICBjb25zdCBzY3JvbGxUb3VjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ19fdG91Y2hcIik7XG4gIGNvbnN0IGJ0bkZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudHNfX2ZpbHRlclwiKTtcbiAgY29uc3QgZmlsdGVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlclwiKTtcbiAgY29uc3Qgc2Nyb2xsRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX2JveFwiKTtcbiAgYnRuU29ydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBvcGVuTW9kYWwoc29ydE1vZGFsKVxuICB9KVxuICBidG5GaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3Blbk1vZGFsKGZpbHRlck1vZGFsKVxuICB9KVxuXG4gIHNjcm9sbFRvdWNoLmFkZEV2ZW50TGlzdGVuZXIoXCJzd2lwZWQtZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIHNvcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gIH0pXG5cbiAgLy8gc2V0dXBNb2RhbEV2ZW50cyhzb3J0TW9kYWwsIHNjcm9sbFNvcnQpXG4gIC8vIHNldHVwTW9kYWxFdmVudHMoZmlsdGVyTW9kYWwsIHNjcm9sbEZpbHRlcilcbiAgY29uc29sZS5sb2coc2Nyb2xsU29ydClcblxuICBjb25zdCBmaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19idG4nKTtcblxuICBmaWx0ZXJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGZpbHRlckJ0bi5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKVxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IHJlc3RhdXJhbnRzRmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3RhdXJhbnRzX19maWx0ZXJzLWJ0bicpXG5cbiAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlc3RhdXJhbnRzRmlsdGVyQnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19pbnB1dCcpO1xuICBjb25zdCBidG5DbGVhclNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3NlYXJjaC1jbGVhcicpXG4gIGlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge3Nob3dDbGVhcihpbnB1dFNlYXJjaCwgYnRuQ2xlYXJTZWFyY2gpfSlcbiAgYnRuQ2xlYXJTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhcklucHV0KGlucHV0U2VhcmNoKVxuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgYnRuQ2xlYXJTZWFyY2gpXG4gIH0pXG5cbiAgY29uc3QgYWRkcmVzc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2FkZHJlc3MtYnRuJylcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYWRkcmVzcy1hZGQnKVxuICBjb25zdCBhZGRyZXNzU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYWRkcmVzcy1zZWFyY2gnKVxuXG4gIGFkZHJlc3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkcmVzc0J0bi5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImlzLXNob3dcIikgPyBhY2NvcmRpb25Ob3RBY3RpdmUoYWRkcmVzc0J0bikgOiBhY2NvcmRpb25BY3RpdmUoYWRkcmVzc0J0bilcbiAgfSlcblxuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFzb3J0TW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFidG5Tb3J0LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgc29ydE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghZmlsdGVyTW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFidG5GaWx0ZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBmaWx0ZXJNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWFkZHJlc3NCdG4ucGFyZW50RWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGFjY29yZGlvbk5vdEFjdGl2ZShhZGRyZXNzQnRuKVxuICAgICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dGhvcml6YXRpb25cIikpIHtcbiAgY29uc3QgdGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRob3JpemF0aW9uX19pbnB1dFt0eXBlPSd0ZWwnXVwiKTtcbiAgdGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge2lucHV0UGhvbmUoZSl9KVxuICB0ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtvbmVQaG9uZUtleURvd24oZSl9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXRcIikpIHtcbiAgY29uc3QgYmFza2V0RGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2tldF9faGVhZGVyLWRlbGV0ZScpO1xuICBjb25zdCBtb2RhbERlbGV0ZSA9IG5ldyBib290c3RyYXAuTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1tb2RhbC1kZWxldGVcIikpXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhc2tldF9fc2VsZWN0ZWQtaXRlbScpXG5cbiAgY29uc3QgY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19jb3VudC1jb3VudCcpXG5cbiAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICBjb25zdCBjb3VudGVyID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19zZWxlY3RlZC1pdGVtLWNvdW50ZXInKVxuICAgIGNvbnN0IGdvb2RzID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19zZWxlY3RlZC1pdGVtLWNvdW50JylcbiAgICBjb3VudENoYW5nZShjb3VudGVyLCBnb29kcyk7XG4gIH0pXG5cbiAgYmFza2V0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge21vZGFsRGVsZXRlLnNob3coKX0pXG5cbiAgY29uc3Qgc2xpZGVyID0gaW5pdFN3aXBlcihcIi5iYXNrZXRfX3N3aXBlclwiKVxuXG4gIGNvdW50Q2hhbmdlKGNvdW50KVxuXG4gIGNvbnN0IG1vZGFsUGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1tb2RhbFwiKVxuICBjb25zdCBjaGFuZ2VQaG9uZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLXBob25lXCIpXG4gIGNvbnN0IHBob25lTnVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tcGhvbmUtbnVtXCIpXG4gIGNvbnN0IGlucHV0VGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tbW9kYWwtaW5wdXRcIilcbiAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1tb2RhbC1idG5cIilcblxuICBpbnB1dFRlbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtpbnB1dFBob25lKGUpfSlcbiAgaW5wdXRUZWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBvbmVQaG9uZUtleURvd24oZSlcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgcGhvbmVOdW0udGV4dENvbnRlbnQgPSBpbnB1dFRlbC52YWx1ZVxuICAgICAgaW5wdXRUZWwudmFsdWUgPSAnJ1xuICAgICAgbW9kYWxQaG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbiAgaW5wdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwaG9uZU51bS50ZXh0Q29udGVudCA9IGlucHV0VGVsLnZhbHVlXG4gICAgaW5wdXRUZWwudmFsdWUgPSAnJ1xuICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBjaGFuZ2VQaG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoIW1vZGFsUGhvbmUuY29udGFpbnMoZS50YXJnZXQpICYmICFjaGFuZ2VQaG9uZUJ0bi5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Y2Nlc3NcIikpIHtcbiAgY29uc3Qgc2xpZGVyID0gaW5pdFN3aXBlcihcIi5zdWNjZXNzX19vcmRlcmVkLXN3aXBlclwiKVxuXG4gIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3VjY2Vzc19fZ3JhZGUtc3RhcicpO1xuICBidG5zLmZvckVhY2goKGJ0biwgaW5kZXgpID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBidG5zLmZvckVhY2goKGVsZW0sIGluZGV4RWxlbSkgPT4ge1xuICAgICAgICBpZiAoaW5kZXhFbGVtIDw9IGluZGV4KSB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB9IGVsc2UgIHtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY291bnRcIikpIHtcbiAgY29uc3QgYWRkQWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19hZGRyZXNzLWFkZCcpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19hZGRyZXNzLXNlYXJjaCcpO1xuICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19hZGRyZXNzLXNlYXJjaC1pbnB1dCcpXG4gIGNvbnN0IGlucHV0U2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2FkZHJlc3Mtc2VhcmNoLWJ0bicpXG5cbiAgYWRkQWRkcmVzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICB9KVxuXG4gIGlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBpbnB1dFNlYXJjaEJ0bikpXG4gIGlucHV0U2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFySW5wdXQoaW5wdXRTZWFyY2gpXG4gICAgc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBpbnB1dFNlYXJjaEJ0bilcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFtb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWFkZEFkZHJlc3MuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBtb2RhbE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbW9kYWxcIilcbiAgY29uc3QgY2hhbmdlTmFtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1uYW1lLXdyYXBcIilcbiAgY29uc3QgbmFtZVNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbmFtZVwiKVxuICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbW9kYWwtaW5wdXRcIilcbiAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbW9kYWwtYnRuXCIpXG5cbiAgaW5wdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IGlucHV0TmFtZS52YWx1ZVxuICAgIGlucHV0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgaW5wdXROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IGlucHV0TmFtZS52YWx1ZVxuICAgICAgaW5wdXROYW1lLnZhbHVlID0gXCJcIjtcbiAgICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcblxuICBjaGFuZ2VOYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKCFtb2RhbE5hbWUuY29udGFpbnMoZS50YXJnZXQpICYmICFjaGFuZ2VOYW1lQnRuLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9ja1wiKSkge1xuICBjb25zdCBzbGlkZXJPbmUgPSBpbml0U3dpcGVyKCcuc3RvY2tfX2Jsb2NrLXN3aXBlcicpXG4gIGNvbnN0IHNsaWRlclR3byA9IGluaXRTd2lwZXIoJy5zdG9ja19fYmxvY2stc3dpcGVyLTInKVxuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdGF1cmFudFwiKSkge1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbiAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRfX3NldHRpbmdzLXNlYXJjaC1pbnB1dFwiKVxuICBjb25zdCBpbnB1dFNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudF9fc2V0dGluZ3Mtc2VhcmNoLWJ0blwiKVxuICBjb25zdCBidG5Tb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50X19zZXR0aW5ncy1zb3J0XCIpO1xuICBjb25zdCBzb3J0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdcIik7XG4gIGNvbnN0IHNjcm9sbFNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdfX2JveFwiKVxuICBjb25zdCBidG5GaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRfX3NldHRpbmdzLWZpbHRlclwiKTtcbiAgY29uc3QgZmlsdGVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlclwiKTtcbiAgY29uc3Qgc2Nyb2xsRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX2JveFwiKTtcblxuXG4gIGlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBpbnB1dFNlYXJjaEJ0bikpXG4gIGlucHV0U2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFySW5wdXQoaW5wdXRTZWFyY2gpXG4gICAgc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBpbnB1dFNlYXJjaEJ0bilcbiAgfSlcblxuXG4gIGJ0blNvcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3Blbk1vZGFsKHNvcnRNb2RhbClcbiAgfSlcbiAgYnRuRmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG9wZW5Nb2RhbChmaWx0ZXJNb2RhbClcbiAgfSlcblxuICBzZXR1cE1vZGFsRXZlbnRzKHNvcnRNb2RhbCwgc2Nyb2xsU29ydClcbiAgc2V0dXBNb2RhbEV2ZW50cyhmaWx0ZXJNb2RhbCwgc2Nyb2xsRmlsdGVyKVxuXG4gIGNvbnN0IGZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2J0bicpO1xuXG4gIGZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZmlsdGVyQnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghc29ydE1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuU29ydC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHNvcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWZpbHRlck1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuRmlsdGVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgZmlsdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlc3RhdXJhbnRzRmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3RhdXJhbnRfX3NldHRpbmdzLWZpbHRlcnMtYnRuJylcblxuICByZXN0YXVyYW50c0ZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBzd2lwZXIgID0gaW5pdFN3aXBlcignLnJlc3RhdXJhbnRfX3N0b2NrLXN3aXBlcicpXG4gIGNvbnN0IHN3aXBlcjIgPSBpbml0U3dpcGVyKCcucmVzdGF1cmFudF9fb2ZmZXJzLXN3aXBlcicpXG4gIGNvbnN0IHN3aXBlcjMgPSBpbml0U3dpcGVyKCcucmVzdGF1cmFudF9fb2ZmZXJzLXN3aXBlci0yJylcblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0XCIpKSB7XG4gIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoXCIucHJvZHVjdF9fdG9wLXN3aXBlclwiLCB7XG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMFxuICB9KVxuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtYWRkXCIpXG4gIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1jb3VudGVyXCIpXG4gIGNvbnN0IGNvdW50ID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbiAgY29uc3QgbWludXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWNvdW50ZXItbWludXNcIik7XG4gIGNvbnN0IHBsdXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWNvdW50ZXItcGx1c1wiKTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtvcGVuQ291bnRlcihidG4sIGNvdW50ZXIpfSk7XG5cbiAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwibWludXNcIil9KVxuXG4gIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwicGx1c1wiKX0pXG5cbiAgY29uc3Qgc3dpcGVyMiA9IGluaXRTd2lwZXIoXCIucHJvZHVjdF9fYWRkaXRpb25hbC1zd2lwZXJcIilcbiAgY29uc3Qgc3dpcGVyMyA9IGluaXRTd2lwZXIoXCIucHJvZHVjdF9fYWRkaXRpb25hbC1zd2lwZXItMlwiKVxufVxuLy8g0KTRg9C90LrRhtC40LhcbmZ1bmN0aW9uIGluaXRTd2lwZXIoY29udGFpbmVyKSB7XG4gIHJldHVybiBuZXcgU3dpcGVyKGNvbnRhaW5lciwge1xuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgfSlcbn1cbmZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbihldmVudCkge1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydChldmVudCkge1xuICB0aGlzLnN0YXJ0WSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgZGlzYWJsZVNjcm9sbCgpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoZXZlbnQpIHtcbiAgbGV0IGVuZFkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gIGxldCBkZWx0YVkgPSBlbmRZIC0gdGhpcy5zdGFydFk7XG5cbiAgaWYgKGRlbHRhWSA+IDApIHtcbiAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IC1kZWx0YVkgKyBcInB4XCI7XG4gIH0gZWxzZSBpZiAoZGVsdGFZID4gNTApIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKTtcbiAgICBlbmFibGVTY3JvbGwoKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IFwiMFwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bihldmVudCkge1xuICB0aGlzLnN0YXJ0WSA9IGV2ZW50LmNsaWVudFk7XG4gIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmUoZXZlbnQpIHtcbiAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xuICAgIGxldCBlbmRZID0gZXZlbnQuY2xpZW50WTtcbiAgICBsZXQgZGVsdGFZID0gZW5kWSAtIHRoaXMuc3RhcnRZO1xuICAgIGlmIChkZWx0YVkgPiAwKSB7XG4gICAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IC1kZWx0YVkgKyBcInB4XCI7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoZXZlbnQpIHtcbiAgbGV0IGVuZFkgPSBldmVudC5jbGllbnRZO1xuICBsZXQgZGVsdGFZID0gZW5kWSAtIHRoaXMuc3RhcnRZO1xuICBpZiAoZGVsdGFZID4gNTApIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IFwiMFwiO1xuICB9XG4gIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZURyYWdTdGFydChldmVudCkge1xuICB0aGlzLnN0YXJ0WSA9IGV2ZW50LmNsaWVudFk7XG4gIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIHNldHVwTW9kYWxFdmVudHMobW9kYWwpIHtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0b3BQcm9wYWdhdGlvbik7XG5cbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgaGFuZGxlVG91Y2hTdGFydCk7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgaGFuZGxlVG91Y2hNb3ZlKTtcblxuICAvLyBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZU1vdXNlRHJhZ1N0YXJ0KTtcbiAgLy8gbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUpO1xuICAvLyBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBoYW5kbGVNb3VzZVVwKTtcbn1cblxubGV0IGRpc2FibGVTY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBwYWdlUG9zaXRpb24gPSB3aW5kb3cuc2Nyb2xsWTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlLXNjcm9sbCcpO1xuICBkb2N1bWVudC5ib2R5LmRhdGFzZXQucG9zaXRpb24gPSBwYWdlUG9zaXRpb247XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gLXBhZ2VQb3NpdGlvbiArICdweCc7XG59XG5cbmxldCBlbmFibGVTY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gIGxldCBwYWdlUG9zaXRpb24gPSBwYXJzZUludChkb2N1bWVudC5ib2R5LmRhdGFzZXQucG9zaXRpb24sIDEwKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSAnYXV0byc7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZS1zY3JvbGwnKTtcbiAgd2luZG93LnNjcm9sbCh7IHRvcDogcGFnZVBvc2l0aW9uLCBsZWZ0OiAwIH0pO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wb3NpdGlvbicpO1xufVxuXG5mdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBtb2RhbC5zdHlsZS5ib3R0b20gPSBcIjBcIlxufVxuXG5mdW5jdGlvbiByZWdQaG9uZShpbnB1dCkge1xuICByZXR1cm4gaW5wdXQudmFsdWUucmVwbGFjZSgvXFxEL2csICcnKTtcbn1cblxuZnVuY3Rpb24gaW5wdXRQaG9uZShlKSB7XG4gIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xuICBsZXQgaW5wdXROdW1iZXJWYWx1ZSA9IHJlZ1Bob25lKGlucHV0KTtcbiAgbGV0IGZvcm1hdHRlZElucHV0VmFsdWUgPSAnJztcbiAgbGV0IHNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnRcbiAgLy8g0JXRgdC70Lgg0LIg0LjQvdC/0YPRgiDQstCy0LXQtNC10L3RiyDRgdC40LzQvtCy0LvRiyDQvdC1INGB0L7QvtGC0LLQtdGC0YHQstGD0Y7RidC40LUg0YDQtdCz0YPQu9GP0YDQutC4LCDRgtC+INC30L3QsNGH0LXQvdC40LUg0LjQvdC/0YPRgtCwINGB0YLQsNC90L7QstC40YLRgdGPINC/0YPRgdGC0YvQvFxuICBpZiAoIWlucHV0TnVtYmVyVmFsdWUpIHJldHVybiBpbnB1dC52YWx1ZSA9ICcnXG4gIC8vINCSINGN0YLQvtC5INGH0LDRgdGC0Lgg0Y8g0L3QtSDRgdC+0LLRgdC10Lwg0L/QvtC90LjQvNCw0Y4g0YfRgtC+INC/0YDQvtC40YHRhdC+0LTQuNGCXG4gIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggIT0gc2VsZWN0aW9uU3RhcnQpIHtcbiAgICBpZiAoZS5kYXRhICYmIC9cXEQvZy50ZXN0KGUuZGF0YSkpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gaW5wdXROdW1iZXJWYWx1ZVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChbJzcnLCAnOCcsICc5J10uaW5jbHVkZXMoaW5wdXROdW1iZXJWYWx1ZVswXSkpIHtcbiAgICAvLyDQldGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCDQtNC10LLRj9GC0YwsINGC0L7Qs9C00LAg0LzRiyDQt9Cw0LzQtdC90Y/QtdC8INC/0LXRgNCy0YPRjiDRhtC40YTRgNGDINC90LAgNyDQuCDQtNC10LLRj9GC0LrRgyDQtNC10LvQsNC10Lwg0LLRgtC+0YDQvtC5INGG0LjRhNGA0L7QuVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlWzBdID09ICc5JykgaW5wdXROdW1iZXJWYWx1ZSA9ICc3JyArIGlucHV0TnVtYmVyVmFsdWU7XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWVbMF0gPT0gJzgnKSBpbnB1dE51bWJlclZhbHVlID0gJzcnXG4gICAgLy8g0JXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAgNywg0YLQvtCz0LTQsCDQt9C90LDRh9C10L3QuNC1INC40L3Qv9GD0YLQsCDQvdCw0YfQuNC90LDQtdGC0YHRjyDRgSArNywg0LXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAgOCwg0YLQvtCz0LTQsCDQt9C90LDRh9C10L3QuNC1INC90LDRh9C40L3QsNC10YLRgdGPINGBIDhcbiAgICBsZXQgZmlyc3RTeW1ib2wgPSAnKzcnO1xuICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBmaXJzdFN5bWJvbCArICcgJztcbiAgICAvLyDQldGB0LvQuCDQsiDQuNC90L/Rg9GC0LUg0LHQvtC70YzRiNC1INC+0LTQvdC+0Lkg0YbQuNGE0YDRiyDQtNC+0LHQsNCy0LvRj9C10Lwg0YHQutC+0LHQutGDINC+0YLQutGA0YvRgtC40Y8g0Lgg0YLQsNC6INC00LDQu9C10LVcbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcoJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDEsIDQpXG4gICAgfVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+PSA1KSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcpICcgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg0LCA3KVxuICAgIH1cbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gOCkge1xuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg3LCA5KVxuICAgIH1cbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gMTApIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJy0nICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoOSwgMTEpO1xuICAgIH1cbiAgfSBlbHNlIHsgLy/QldGB0LvQuCDQstCy0L7QtNC40LzQvtC1INGH0LjRgdC70L4g0L3QtSA3LCA4INC40LvQuCA5INGC0L7Qs9C00LAg0LTQvtCx0LDQstC70Y/QtdC8ICvQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0LLQstC10LTQtdC90L7QtSDRh9C40YHQu9C+XG4gICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9ICcrNyAoOScgKyBpbnB1dE51bWJlclZhbHVlO1xuICB9XG4gIGlucHV0LnZhbHVlID0gZm9ybWF0dGVkSW5wdXRWYWx1ZVxufVxuXG5mdW5jdGlvbiBvbmVQaG9uZUtleURvd24gKGUpIHtcbiAgbGV0IGlucHV0ID0gZS50YXJnZXQ7XG4gIGlmIChyZWdQaG9uZShpbnB1dCkubGVuZ3RoID09IDEgJiYgZS5rZXlDb2RlID09PSA4KSB7XG4gICAgaW5wdXQudmFsdWUgPSAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93Q2xlYXIoaW5wdXQsIGJ0bikge1xuICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgYnRuLmRpc2FibGVkID0gdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFySW5wdXQoaW5wdXQpIHtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBjb3VudENoYW5nZShjb3VudCwgZ29vZHMpIHtcbiAgY29uc3Qgc3BhbiA9IGNvdW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgY29uc3QgbWludXMgPSBjb3VudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgY29uc3QgcGx1cyA9IGNvdW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpIC0gMVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBudW07XG4gICAgaWYgKCEhZ29vZHMpIHtcbiAgICAgIGdvb2RzLnRleHRDb250ZW50ID0gYCR7bnVtfSDRiNGCLmBcbiAgICB9XG4gICAgZGlzYWJsZWRNaW51cyhudW0sIG1pbnVzKVxuICB9KVxuXG4gIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpICsgMVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBudW07XG4gICAgaWYgKCEhZ29vZHMpIHtcbiAgICAgIGdvb2RzLnRleHRDb250ZW50ID0gYCR7bnVtfSDRiNGCLmBcbiAgICB9XG4gICAgZGlzYWJsZWRNaW51cyhudW0sIG1pbnVzKVxuICB9KVxufVxuXG5mdW5jdGlvbiBkaXNhYmxlZE1pbnVzKG51bSwgYnRuKSB7XG4gIGlmIChudW0gPCAxKSB7XG4gICAgYnRuLmRpc2FibGVkID0gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gYWNjb3JkaW9uQWN0aXZlKGl0ZW0pIHtcbiAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpcy1zaG93XCIpO1xuICBsZXQgcGFuZWwgPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKCFwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWNjb3JkaW9uTm90QWN0aXZlKGl0ZW0pIHtcbiAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1zaG93XCIpO1xuICBsZXQgcGFuZWwgPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xuICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGxcbiAgfVxufVxuXG5mdW5jdGlvbiBvcGVuQ291bnRlcihidG4sIGNvdW50ZXIpIHtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJub3QtYWN0aXZlXCIpO1xuICBjb3VudGVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbn1cblxuZnVuY3Rpb24gY2xvc2VDb3VudGVyKGJ0biwgY291bnRlcikge1xuICBidG4uY2xhc3NMaXN0LnJlbW92ZShcIm5vdC1hY3RpdmVcIik7XG4gIGNvdW50ZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VDb3VudGVyKHNwYW4sIGJ0biwgY291bnRlciwgb3BlcmF0b3IpIHtcblxuICBsZXQgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpO1xuXG4gIGlmIChvcGVyYXRvciA9PT0gXCJwbHVzXCIpIHtcbiAgICBudW0gKz0gMVxuICB9IGVsc2Uge1xuICAgIG51bSAtPTFcbiAgfVxuXG4gIG51bSA8IDEgPyBjbG9zZUNvdW50ZXIoYnRuLCBjb3VudGVyKSA6IHNwYW4udGV4dENvbnRlbnQgPSBudW1cbn1cblxuZnVuY3Rpb24gcHJvZHVjdENhcmQoKSB7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1jYXJkXCIpO1xuICBjYXJkcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIGNvbnN0IGJ0bldyYXAgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1idG5zXCIpXG4gICAgY29uc3QgYnRuID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtYWRkXCIpXG4gICAgY29uc3QgY291bnRlciA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLWNvdW50ZXJcIilcbiAgICBjb25zdCBjb3VudCA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4gICAgY29uc3QgbWludXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1taW51c1wiKTtcbiAgICBjb25zdCBwbHVzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtcGx1c1wiKTtcblxuICAgIGJ0bldyYXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7b3BlbkNvdW50ZXIoYnRuLCBjb3VudGVyKX0pO1xuXG4gICAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwibWludXNcIil9KVxuXG4gICAgcGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2NoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJwbHVzXCIpfSlcbiAgfSlcbn0iXX0=
