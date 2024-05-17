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
}

function handleTouchMove(event) {
  var endY = event.touches[0].clientY;
  var deltaY = endY - this.startY;

  if (deltaY < -50) {
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

function setupModalEvents(modal, scrollConteiner) {
  modal.addEventListener("click", stopPropagation, false);
  scrollConteiner.addEventListener("touchstart", stopPropagation, false);
  scrollConteiner.addEventListener("mousedown", stopPropagation, false);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNsaWRlck9uZSIsImluaXRTd2lwZXIiLCJzbGlkZXJUd28iLCJzbGlkZXJUaHJlZSIsInNsaWRlckZvdXIiLCJzbGlkZXJGaXZlIiwiYnRuU29ydCIsInF1ZXJ5U2VsZWN0b3IiLCJzb3J0TW9kYWwiLCJzY3JvbGxTb3J0IiwiYnRuRmlsdGVyIiwiZmlsdGVyTW9kYWwiLCJzY3JvbGxGaWx0ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib3Blbk1vZGFsIiwic2V0dXBNb2RhbEV2ZW50cyIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJCdG4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsImVsZW0iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJyZXN0YXVyYW50c0ZpbHRlckJ0biIsImlucHV0U2VhcmNoIiwiYnRuQ2xlYXJTZWFyY2giLCJzaG93Q2xlYXIiLCJjbGVhcklucHV0IiwiYWRkcmVzc0J0biIsImFkZEJ0biIsImFkZHJlc3NTZWFyY2giLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbnMiLCJhY2NvcmRpb25Ob3RBY3RpdmUiLCJhY2NvcmRpb25BY3RpdmUiLCJlIiwidGFyZ2V0IiwiYm9keSIsInRlbCIsImlucHV0UGhvbmUiLCJvbmVQaG9uZUtleURvd24iLCJiYXNrZXREZWxldGUiLCJtb2RhbERlbGV0ZSIsImJvb3RzdHJhcCIsIk1vZGFsIiwiY2FyZHMiLCJjb3VudCIsImNhcmQiLCJjb3VudGVyIiwiZ29vZHMiLCJjb3VudENoYW5nZSIsInNob3ciLCJzbGlkZXIiLCJtb2RhbFBob25lIiwiY2hhbmdlUGhvbmVCdG4iLCJwaG9uZU51bSIsImlucHV0VGVsIiwiaW5wdXRCdG4iLCJrZXlDb2RlIiwidGV4dENvbnRlbnQiLCJ2YWx1ZSIsImJ0bnMiLCJpbmRleCIsImluZGV4RWxlbSIsImFkZEFkZHJlc3MiLCJtb2RhbCIsImlucHV0U2VhcmNoQnRuIiwibW9kYWxOYW1lIiwiY2hhbmdlTmFtZUJ0biIsIm5hbWVTcGFuIiwiaW5wdXROYW1lIiwia2V5IiwicHJvZHVjdENhcmQiLCJzd2lwZXIiLCJzd2lwZXIyIiwic3dpcGVyMyIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJtaW51cyIsInBsdXMiLCJvcGVuQ291bnRlciIsImNoYW5nZUNvdW50ZXIiLCJjb250YWluZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJldmVudCIsImhhbmRsZVRvdWNoU3RhcnQiLCJzdGFydFkiLCJ0b3VjaGVzIiwiY2xpZW50WSIsImhhbmRsZVRvdWNoTW92ZSIsImVuZFkiLCJkZWx0YVkiLCJoYW5kbGVNb3VzZURvd24iLCJpc0RyYWdnaW5nIiwiaGFuZGxlTW91c2VNb3ZlIiwic3R5bGUiLCJib3R0b20iLCJoYW5kbGVNb3VzZVVwIiwic2Nyb2xsQ29udGVpbmVyIiwicmVnUGhvbmUiLCJpbnB1dCIsInJlcGxhY2UiLCJpbnB1dE51bWJlclZhbHVlIiwiZm9ybWF0dGVkSW5wdXRWYWx1ZSIsInNlbGVjdGlvblN0YXJ0IiwibGVuZ3RoIiwiZGF0YSIsInRlc3QiLCJpbmNsdWRlcyIsImZpcnN0U3ltYm9sIiwic3Vic3RyaW5nIiwiZGlzYWJsZWQiLCJzcGFuIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJsYXN0RWxlbWVudENoaWxkIiwibnVtIiwiTnVtYmVyIiwiZGlzYWJsZWRNaW51cyIsIml0ZW0iLCJwYW5lbCIsIm5leHRFbGVtZW50U2libGluZyIsIm1heEhlaWdodCIsInNjcm9sbEhlaWdodCIsImNsb3NlQ291bnRlciIsIm9wZXJhdG9yIiwiYnRuV3JhcCIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFKLEVBQXNDO0VBQ3BDLElBQU1DLFNBQVMsR0FBR0MsVUFBVSxDQUFDLHVCQUFELENBQTVCO0VBQ0EsSUFBTUMsU0FBUyxHQUFHRCxVQUFV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QUFHN0IsSUFBSSxDQUFDZixhQUFMLENBQW1CLGtCQUFuQixDQUFoQjtJQUNBLElBQU0wQyxLQUFLLEdBQUdFLE9BQU8sQ0FBQzVDLGFBQVIsQ0FBc0IsTUFBdEIsQ0FBZDtJQUNBLElBQU0yRSxLQUFLLEdBQUcvQixPQUFPLENBQUM1QyxhQUFSLENBQXNCLGdCQUF0QixDQUFkO0lBQ0EsSUFBTTRFLElBQUksR0FBR2hDLE9BQU8sQ0FBQzVDLGFBQVIsQ0FBc0IsZUFBdEIsQ0FBYjtJQUVBMEgsT0FBTyxDQUFDcEgsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBQXlCLENBQUMsRUFBSTtNQUNyQ0EsQ0FBQyxDQUFDNEYsY0FBRjtJQUNELENBRkQ7SUFHQTdHLEdBQUcsQ0FBQ1IsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsWUFBTTtNQUFDdUUsV0FBVyxDQUFDL0QsR0FBRCxFQUFNOEIsT0FBTixDQUFYO0lBQTBCLENBQS9EO0lBRUErQixLQUFLLENBQUNyRSxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxZQUFNO01BQUN3RSxhQUFhLENBQUNwQyxLQUFELEVBQVE1QixHQUFSLEVBQWE4QixPQUFiLEVBQXNCLE9BQXRCLENBQWI7SUFBNEMsQ0FBbkY7SUFFQWdDLElBQUksQ0FBQ3RFLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQU07TUFBQ3dFLGFBQWEsQ0FBQ3BDLEtBQUQsRUFBUTVCLEdBQVIsRUFBYThCLE9BQWIsRUFBc0IsTUFBdEIsQ0FBYjtJQUEyQyxDQUFqRjtFQUNELENBaEJEO0FBaUJEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmRleFwiKSkge1xuICBjb25zdCBzbGlkZXJPbmUgPSBpbml0U3dpcGVyKFwiLm1haW4tc3RvY2tfX3N3aXBlci0xXCIpXG4gIGNvbnN0IHNsaWRlclR3byA9IGluaXRTd2lwZXIoXCIubWFpbi1zdG9ja19fc3dpcGVyLTJcIilcbiAgY29uc3Qgc2xpZGVyVGhyZWUgPSBpbml0U3dpcGVyKFwiLm1haW4tc3RvY2tfX3N3aXBlci0zXCIpXG4gIGNvbnN0IHNsaWRlckZvdXIgPSBpbml0U3dpcGVyKFwiLm1haW4tc3RvY2tfX3N3aXBlci00XCIpXG4gIGNvbnN0IHNsaWRlckZpdmUgPSBpbml0U3dpcGVyKFwiLm1haW4tc3RvY2tfX3N3aXBlci01XCIpXG5cbiAgY29uc3QgYnRuU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudHNfX3NvcnRcIik7XG4gIGNvbnN0IHNvcnRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ1wiKTtcbiAgY29uc3Qgc2Nyb2xsU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ19fYm94XCIpXG4gIGNvbnN0IGJ0bkZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudHNfX2ZpbHRlclwiKTtcbiAgY29uc3QgZmlsdGVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlclwiKTtcbiAgY29uc3Qgc2Nyb2xsRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX2JveFwiKTtcbiAgYnRuU29ydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBvcGVuTW9kYWwoc29ydE1vZGFsKVxuICB9KVxuICBidG5GaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3Blbk1vZGFsKGZpbHRlck1vZGFsKVxuICB9KVxuXG4gIHNldHVwTW9kYWxFdmVudHMoc29ydE1vZGFsLCBzY3JvbGxTb3J0KVxuICBzZXR1cE1vZGFsRXZlbnRzKGZpbHRlck1vZGFsLCBzY3JvbGxGaWx0ZXIpXG4gIGNvbnNvbGUubG9nKHNjcm9sbFNvcnQpXG5cbiAgY29uc3QgZmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcl9fYnRuJyk7XG5cbiAgZmlsdGVyQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBmaWx0ZXJCdG4uZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgfSlcblxuICBjb25zdCByZXN0YXVyYW50c0ZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXN0YXVyYW50c19fZmlsdGVycy1idG4nKVxuXG4gIHJlc3RhdXJhbnRzRmlsdGVyQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZXN0YXVyYW50c0ZpbHRlckJ0bi5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKVxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IGlucHV0U2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9faW5wdXQnKTtcbiAgY29uc3QgYnRuQ2xlYXJTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19zZWFyY2gtY2xlYXInKVxuICBpbnB1dFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGJ0bkNsZWFyU2VhcmNoKX0pXG4gIGJ0bkNsZWFyU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJJbnB1dChpbnB1dFNlYXJjaClcbiAgICBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGJ0bkNsZWFyU2VhcmNoKVxuICB9KVxuXG4gIGNvbnN0IGFkZHJlc3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19hZGRyZXNzLWJ0bicpXG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2FkZHJlc3MtYWRkJylcbiAgY29uc3QgYWRkcmVzc1NlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2FkZHJlc3Mtc2VhcmNoJylcblxuICBhZGRyZXNzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZHJlc3NCdG4ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1zaG93XCIpID8gYWNjb3JkaW9uTm90QWN0aXZlKGFkZHJlc3NCdG4pIDogYWNjb3JkaW9uQWN0aXZlKGFkZHJlc3NCdG4pXG4gIH0pXG5cbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZHJlc3NTZWFyY2guY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghc29ydE1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuU29ydC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHNvcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWZpbHRlck1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuRmlsdGVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgZmlsdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFhZGRyZXNzQnRuLnBhcmVudEVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBhY2NvcmRpb25Ob3RBY3RpdmUoYWRkcmVzc0J0bilcbiAgICAgIGFkZHJlc3NTZWFyY2guY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdXRob3JpemF0aW9uXCIpKSB7XG4gIGNvbnN0IHRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aG9yaXphdGlvbl9faW5wdXRbdHlwZT0ndGVsJ11cIik7XG4gIHRlbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtpbnB1dFBob25lKGUpfSlcbiAgdGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7b25lUGhvbmVLZXlEb3duKGUpfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFza2V0XCIpKSB7XG4gIGNvbnN0IGJhc2tldERlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRfX2hlYWRlci1kZWxldGUnKTtcbiAgY29uc3QgbW9kYWxEZWxldGUgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtbW9kYWwtZGVsZXRlXCIpKVxuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYXNrZXRfX3NlbGVjdGVkLWl0ZW0nKVxuXG4gIGNvbnN0IGNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2tldF9fY291bnQtY291bnQnKVxuXG4gIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgY29uc3QgY291bnRlciA9IGNhcmQucXVlcnlTZWxlY3RvcignLmJhc2tldF9fc2VsZWN0ZWQtaXRlbS1jb3VudGVyJylcbiAgICBjb25zdCBnb29kcyA9IGNhcmQucXVlcnlTZWxlY3RvcignLmJhc2tldF9fc2VsZWN0ZWQtaXRlbS1jb3VudCcpXG4gICAgY291bnRDaGFuZ2UoY291bnRlciwgZ29vZHMpO1xuICB9KVxuXG4gIGJhc2tldERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHttb2RhbERlbGV0ZS5zaG93KCl9KVxuXG4gIGNvbnN0IHNsaWRlciA9IGluaXRTd2lwZXIoXCIuYmFza2V0X19zd2lwZXJcIilcblxuICBjb3VudENoYW5nZShjb3VudClcblxuICBjb25zdCBtb2RhbFBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tbW9kYWxcIilcbiAgY29uc3QgY2hhbmdlUGhvbmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1waG9uZVwiKVxuICBjb25zdCBwaG9uZU51bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLXBob25lLW51bVwiKVxuICBjb25zdCBpbnB1dFRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLW1vZGFsLWlucHV0XCIpXG4gIGNvbnN0IGlucHV0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tbW9kYWwtYnRuXCIpXG5cbiAgaW5wdXRUZWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7aW5wdXRQaG9uZShlKX0pXG4gIGlucHV0VGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgb25lUGhvbmVLZXlEb3duKGUpXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHBob25lTnVtLnRleHRDb250ZW50ID0gaW5wdXRUZWwudmFsdWVcbiAgICAgIGlucHV0VGVsLnZhbHVlID0gJydcbiAgICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG4gIGlucHV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcGhvbmVOdW0udGV4dENvbnRlbnQgPSBpbnB1dFRlbC52YWx1ZVxuICAgIGlucHV0VGVsLnZhbHVlID0gJydcbiAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgY2hhbmdlUGhvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKCFtb2RhbFBob25lLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhY2hhbmdlUGhvbmVCdG4uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWNjZXNzXCIpKSB7XG4gIGNvbnN0IHNsaWRlciA9IGluaXRTd2lwZXIoXCIuc3VjY2Vzc19fb3JkZXJlZC1zd2lwZXJcIilcblxuICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1Y2Nlc3NfX2dyYWRlLXN0YXInKTtcbiAgYnRucy5mb3JFYWNoKChidG4sIGluZGV4KSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYnRucy5mb3JFYWNoKChlbGVtLCBpbmRleEVsZW0pID0+IHtcbiAgICAgICAgaWYgKGluZGV4RWxlbSA8PSBpbmRleCkge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfSBlbHNlICB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NvdW50XCIpKSB7XG4gIGNvbnN0IGFkZEFkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fYWRkcmVzcy1hZGQnKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fYWRkcmVzcy1zZWFyY2gnKTtcbiAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fYWRkcmVzcy1zZWFyY2gtaW5wdXQnKVxuICBjb25zdCBpbnB1dFNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19hZGRyZXNzLXNlYXJjaC1idG4nKVxuXG4gIGFkZEFkZHJlc3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgfSlcblxuICBpbnB1dFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHNob3dDbGVhcihpbnB1dFNlYXJjaCwgaW5wdXRTZWFyY2hCdG4pKVxuICBpbnB1dFNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhcklucHV0KGlucHV0U2VhcmNoKVxuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgaW5wdXRTZWFyY2hCdG4pXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghbW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFhZGRBZGRyZXNzLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgbW9kYWxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW1vZGFsXCIpXG4gIGNvbnN0IGNoYW5nZU5hbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbmFtZS13cmFwXCIpXG4gIGNvbnN0IG5hbWVTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW5hbWVcIilcbiAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW1vZGFsLWlucHV0XCIpXG4gIGNvbnN0IGlucHV0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW1vZGFsLWJ0blwiKVxuXG4gIGlucHV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBpbnB1dE5hbWUudmFsdWVcbiAgICBpbnB1dE5hbWUudmFsdWUgPSBcIlwiO1xuICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGlucHV0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBpbnB1dE5hbWUudmFsdWVcbiAgICAgIGlucHV0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG5cbiAgY2hhbmdlTmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmICghbW9kYWxOYW1lLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhY2hhbmdlTmFtZUJ0bi5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvY2tcIikpIHtcbiAgY29uc3Qgc2xpZGVyT25lID0gaW5pdFN3aXBlcignLnN0b2NrX19ibG9jay1zd2lwZXInKVxuICBjb25zdCBzbGlkZXJUd28gPSBpbml0U3dpcGVyKCcuc3RvY2tfX2Jsb2NrLXN3aXBlci0yJylcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkXCIpKSB7XG4gICAgcHJvZHVjdENhcmQoKTtcbiAgfVxuXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3RhdXJhbnRcIikpIHtcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkXCIpKSB7XG4gICAgcHJvZHVjdENhcmQoKTtcbiAgfVxuXG4gIGNvbnN0IGlucHV0U2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50X19zZXR0aW5ncy1zZWFyY2gtaW5wdXRcIilcbiAgY29uc3QgaW5wdXRTZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRfX3NldHRpbmdzLXNlYXJjaC1idG5cIilcbiAgY29uc3QgYnRuU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudF9fc2V0dGluZ3Mtc29ydFwiKTtcbiAgY29uc3Qgc29ydE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nXCIpO1xuICBjb25zdCBzY3JvbGxTb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nX19ib3hcIilcbiAgY29uc3QgYnRuRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50X19zZXR0aW5ncy1maWx0ZXJcIik7XG4gIGNvbnN0IGZpbHRlck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJcIik7XG4gIGNvbnN0IHNjcm9sbEZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyX19ib3hcIik7XG5cblxuICBpbnB1dFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHNob3dDbGVhcihpbnB1dFNlYXJjaCwgaW5wdXRTZWFyY2hCdG4pKVxuICBpbnB1dFNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhcklucHV0KGlucHV0U2VhcmNoKVxuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgaW5wdXRTZWFyY2hCdG4pXG4gIH0pXG5cblxuICBidG5Tb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG9wZW5Nb2RhbChzb3J0TW9kYWwpXG4gIH0pXG4gIGJ0bkZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBvcGVuTW9kYWwoZmlsdGVyTW9kYWwpXG4gIH0pXG5cbiAgc2V0dXBNb2RhbEV2ZW50cyhzb3J0TW9kYWwsIHNjcm9sbFNvcnQpXG4gIHNldHVwTW9kYWxFdmVudHMoZmlsdGVyTW9kYWwsIHNjcm9sbEZpbHRlcilcblxuICBjb25zdCBmaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19idG4nKTtcblxuICBmaWx0ZXJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGZpbHRlckJ0bi5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKVxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB9KVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIXNvcnRNb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWJ0blNvcnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBzb3J0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFmaWx0ZXJNb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWJ0bkZpbHRlci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGZpbHRlck1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcblxuICAgIH1cbiAgfSlcblxuICBjb25zdCByZXN0YXVyYW50c0ZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXN0YXVyYW50X19zZXR0aW5ncy1maWx0ZXJzLWJ0bicpXG5cbiAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlc3RhdXJhbnRzRmlsdGVyQnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3Qgc3dpcGVyICA9IGluaXRTd2lwZXIoJy5yZXN0YXVyYW50X19zdG9jay1zd2lwZXInKVxuICBjb25zdCBzd2lwZXIyID0gaW5pdFN3aXBlcignLnJlc3RhdXJhbnRfX29mZmVycy1zd2lwZXInKVxuICBjb25zdCBzd2lwZXIzID0gaW5pdFN3aXBlcignLnJlc3RhdXJhbnRfX29mZmVycy1zd2lwZXItMicpXG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdFwiKSkge1xuICBjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLnByb2R1Y3RfX3RvcC1zd2lwZXJcIiwge1xuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIHNwYWNlQmV0d2VlbjogMTBcbiAgfSlcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkXCIpKSB7XG4gICAgcHJvZHVjdENhcmQoKTtcbiAgfVxuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWFkZFwiKVxuICBjb25zdCBjb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtY291bnRlclwiKVxuICBjb25zdCBjb3VudCA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4gIGNvbnN0IG1pbnVzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1jb3VudGVyLW1pbnVzXCIpO1xuICBjb25zdCBwbHVzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1jb3VudGVyLXBsdXNcIik7XG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7b3BlbkNvdW50ZXIoYnRuLCBjb3VudGVyKX0pO1xuXG4gIG1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7Y2hhbmdlQ291bnRlcihjb3VudCwgYnRuLCBjb3VudGVyLCBcIm1pbnVzXCIpfSlcblxuICBwbHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7Y2hhbmdlQ291bnRlcihjb3VudCwgYnRuLCBjb3VudGVyLCBcInBsdXNcIil9KVxuXG4gIGNvbnN0IHN3aXBlcjIgPSBpbml0U3dpcGVyKFwiLnByb2R1Y3RfX2FkZGl0aW9uYWwtc3dpcGVyXCIpXG4gIGNvbnN0IHN3aXBlcjMgPSBpbml0U3dpcGVyKFwiLnByb2R1Y3RfX2FkZGl0aW9uYWwtc3dpcGVyLTJcIilcbn1cbi8vINCk0YPQvdC60YbQuNC4XG5mdW5jdGlvbiBpbml0U3dpcGVyKGNvbnRhaW5lcikge1xuICByZXR1cm4gbmV3IFN3aXBlcihjb250YWluZXIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBzcGFjZUJldHdlZW46IDIwXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHN0b3BQcm9wYWdhdGlvbihldmVudCkge1xuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydChldmVudCkge1xuICB0aGlzLnN0YXJ0WSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlKGV2ZW50KSB7XG4gIGxldCBlbmRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuICBsZXQgZGVsdGFZID0gZW5kWSAtIHRoaXMuc3RhcnRZO1xuICBpZiAoZGVsdGFZIDwgLTUwKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG4gIHRoaXMuc3RhcnRZID0gZXZlbnQuY2xpZW50WTtcbiAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlKGV2ZW50KSB7XG4gIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICBsZXQgZW5kWSA9IGV2ZW50LmNsaWVudFk7XG4gICAgbGV0IGRlbHRhWSA9IGVuZFkgLSB0aGlzLnN0YXJ0WTtcbiAgICBpZiAoZGVsdGFZID4gMCkge1xuICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSAtZGVsdGFZICsgXCJweFwiO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZVVwKGV2ZW50KSB7XG4gIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICBsZXQgZW5kWSA9IGV2ZW50LmNsaWVudFk7XG4gICAgbGV0IGRlbHRhWSA9IGVuZFkgLSB0aGlzLnN0YXJ0WTtcbiAgICBpZiAoZGVsdGFZID4gNTApIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSBcIjBcIjtcbiAgICB9XG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0dXBNb2RhbEV2ZW50cyhtb2RhbCwgc2Nyb2xsQ29udGVpbmVyKSB7XG5cblxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RvcFByb3BhZ2F0aW9uLCBmYWxzZSk7XG4gIHNjcm9sbENvbnRlaW5lci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBzdG9wUHJvcGFnYXRpb24sIGZhbHNlKTtcbiAgc2Nyb2xsQ29udGVpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RvcFByb3BhZ2F0aW9uLCBmYWxzZSk7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGhhbmRsZVRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBoYW5kbGVUb3VjaE1vdmUsIGZhbHNlKTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVNb3VzZURvd24sIGZhbHNlKTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUsIGZhbHNlKTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlTW91c2VVcCwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBtb2RhbC5zdHlsZS5ib3R0b20gPSBcIjBcIlxufVxuXG5mdW5jdGlvbiByZWdQaG9uZShpbnB1dCkge1xuICByZXR1cm4gaW5wdXQudmFsdWUucmVwbGFjZSgvXFxEL2csICcnKTtcbn1cblxuZnVuY3Rpb24gaW5wdXRQaG9uZShlKSB7XG4gIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xuICBsZXQgaW5wdXROdW1iZXJWYWx1ZSA9IHJlZ1Bob25lKGlucHV0KTtcbiAgbGV0IGZvcm1hdHRlZElucHV0VmFsdWUgPSAnJztcbiAgbGV0IHNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnRcbiAgLy8g0JXRgdC70Lgg0LIg0LjQvdC/0YPRgiDQstCy0LXQtNC10L3RiyDRgdC40LzQvtCy0LvRiyDQvdC1INGB0L7QvtGC0LLQtdGC0YHQstGD0Y7RidC40LUg0YDQtdCz0YPQu9GP0YDQutC4LCDRgtC+INC30L3QsNGH0LXQvdC40LUg0LjQvdC/0YPRgtCwINGB0YLQsNC90L7QstC40YLRgdGPINC/0YPRgdGC0YvQvFxuICBpZiAoIWlucHV0TnVtYmVyVmFsdWUpIHJldHVybiBpbnB1dC52YWx1ZSA9ICcnXG4gIC8vINCSINGN0YLQvtC5INGH0LDRgdGC0Lgg0Y8g0L3QtSDRgdC+0LLRgdC10Lwg0L/QvtC90LjQvNCw0Y4g0YfRgtC+INC/0YDQvtC40YHRhdC+0LTQuNGCXG4gIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggIT0gc2VsZWN0aW9uU3RhcnQpIHtcbiAgICBpZiAoZS5kYXRhICYmIC9cXEQvZy50ZXN0KGUuZGF0YSkpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gaW5wdXROdW1iZXJWYWx1ZVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChbJzcnLCAnOCcsICc5J10uaW5jbHVkZXMoaW5wdXROdW1iZXJWYWx1ZVswXSkpIHtcbiAgICAvLyDQldGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCDQtNC10LLRj9GC0YwsINGC0L7Qs9C00LAg0LzRiyDQt9Cw0LzQtdC90Y/QtdC8INC/0LXRgNCy0YPRjiDRhtC40YTRgNGDINC90LAgNyDQuCDQtNC10LLRj9GC0LrRgyDQtNC10LvQsNC10Lwg0LLRgtC+0YDQvtC5INGG0LjRhNGA0L7QuVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlWzBdID09ICc5JykgaW5wdXROdW1iZXJWYWx1ZSA9ICc3JyArIGlucHV0TnVtYmVyVmFsdWU7XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWVbMF0gPT0gJzgnKSBpbnB1dE51bWJlclZhbHVlID0gJzcnXG4gICAgLy8g0JXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAgNywg0YLQvtCz0LTQsCDQt9C90LDRh9C10L3QuNC1INC40L3Qv9GD0YLQsCDQvdCw0YfQuNC90LDQtdGC0YHRjyDRgSArNywg0LXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAgOCwg0YLQvtCz0LTQsCDQt9C90LDRh9C10L3QuNC1INC90LDRh9C40L3QsNC10YLRgdGPINGBIDhcbiAgICBsZXQgZmlyc3RTeW1ib2wgPSAnKzcnO1xuICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBmaXJzdFN5bWJvbCArICcgJztcbiAgICAvLyDQldGB0LvQuCDQsiDQuNC90L/Rg9GC0LUg0LHQvtC70YzRiNC1INC+0LTQvdC+0Lkg0YbQuNGE0YDRiyDQtNC+0LHQsNCy0LvRj9C10Lwg0YHQutC+0LHQutGDINC+0YLQutGA0YvRgtC40Y8g0Lgg0YLQsNC6INC00LDQu9C10LVcbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcoJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDEsIDQpXG4gICAgfVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+PSA1KSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcpICcgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg0LCA3KVxuICAgIH1cbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gOCkge1xuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg3LCA5KVxuICAgIH1cbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gMTApIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJy0nICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoOSwgMTEpO1xuICAgIH1cbiAgfSBlbHNlIHsgLy/QldGB0LvQuCDQstCy0L7QtNC40LzQvtC1INGH0LjRgdC70L4g0L3QtSA3LCA4INC40LvQuCA5INGC0L7Qs9C00LAg0LTQvtCx0LDQstC70Y/QtdC8ICvQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0LLQstC10LTQtdC90L7QtSDRh9C40YHQu9C+XG4gICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9ICcrNyAoOScgKyBpbnB1dE51bWJlclZhbHVlO1xuICB9XG4gIGlucHV0LnZhbHVlID0gZm9ybWF0dGVkSW5wdXRWYWx1ZVxufVxuXG5mdW5jdGlvbiBvbmVQaG9uZUtleURvd24gKGUpIHtcbiAgbGV0IGlucHV0ID0gZS50YXJnZXQ7XG4gIGlmIChyZWdQaG9uZShpbnB1dCkubGVuZ3RoID09IDEgJiYgZS5rZXlDb2RlID09PSA4KSB7XG4gICAgaW5wdXQudmFsdWUgPSAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93Q2xlYXIoaW5wdXQsIGJ0bikge1xuICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgYnRuLmRpc2FibGVkID0gdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFySW5wdXQoaW5wdXQpIHtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBjb3VudENoYW5nZShjb3VudCwgZ29vZHMpIHtcbiAgY29uc3Qgc3BhbiA9IGNvdW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgY29uc3QgbWludXMgPSBjb3VudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgY29uc3QgcGx1cyA9IGNvdW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpIC0gMVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBudW07XG4gICAgaWYgKCEhZ29vZHMpIHtcbiAgICAgIGdvb2RzLnRleHRDb250ZW50ID0gYCR7bnVtfSDRiNGCLmBcbiAgICB9XG4gICAgZGlzYWJsZWRNaW51cyhudW0sIG1pbnVzKVxuICB9KVxuXG4gIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpICsgMVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBudW07XG4gICAgaWYgKCEhZ29vZHMpIHtcbiAgICAgIGdvb2RzLnRleHRDb250ZW50ID0gYCR7bnVtfSDRiNGCLmBcbiAgICB9XG4gICAgZGlzYWJsZWRNaW51cyhudW0sIG1pbnVzKVxuICB9KVxufVxuXG5mdW5jdGlvbiBkaXNhYmxlZE1pbnVzKG51bSwgYnRuKSB7XG4gIGlmIChudW0gPCAxKSB7XG4gICAgYnRuLmRpc2FibGVkID0gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gYWNjb3JkaW9uQWN0aXZlKGl0ZW0pIHtcbiAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpcy1zaG93XCIpO1xuICBsZXQgcGFuZWwgPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKCFwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWNjb3JkaW9uTm90QWN0aXZlKGl0ZW0pIHtcbiAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1zaG93XCIpO1xuICBsZXQgcGFuZWwgPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xuICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGxcbiAgfVxufVxuXG5mdW5jdGlvbiBvcGVuQ291bnRlcihidG4sIGNvdW50ZXIpIHtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJub3QtYWN0aXZlXCIpO1xuICBjb3VudGVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbn1cblxuZnVuY3Rpb24gY2xvc2VDb3VudGVyKGJ0biwgY291bnRlcikge1xuICBidG4uY2xhc3NMaXN0LnJlbW92ZShcIm5vdC1hY3RpdmVcIik7XG4gIGNvdW50ZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VDb3VudGVyKHNwYW4sIGJ0biwgY291bnRlciwgb3BlcmF0b3IpIHtcblxuICBsZXQgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpO1xuXG4gIGlmIChvcGVyYXRvciA9PT0gXCJwbHVzXCIpIHtcbiAgICBudW0gKz0gMVxuICB9IGVsc2Uge1xuICAgIG51bSAtPTFcbiAgfVxuXG4gIG51bSA8IDEgPyBjbG9zZUNvdW50ZXIoYnRuLCBjb3VudGVyKSA6IHNwYW4udGV4dENvbnRlbnQgPSBudW1cbn1cblxuZnVuY3Rpb24gcHJvZHVjdENhcmQoKSB7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1jYXJkXCIpO1xuICBjYXJkcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIGNvbnN0IGJ0bldyYXAgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1idG5zXCIpXG4gICAgY29uc3QgYnRuID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtYWRkXCIpXG4gICAgY29uc3QgY291bnRlciA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLWNvdW50ZXJcIilcbiAgICBjb25zdCBjb3VudCA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4gICAgY29uc3QgbWludXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1taW51c1wiKTtcbiAgICBjb25zdCBwbHVzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtcGx1c1wiKTtcblxuICAgIGJ0bldyYXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7b3BlbkNvdW50ZXIoYnRuLCBjb3VudGVyKX0pO1xuXG4gICAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwibWludXNcIil9KVxuXG4gICAgcGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2NoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJwbHVzXCIpfSlcbiAgfSlcbn0iXX0=
