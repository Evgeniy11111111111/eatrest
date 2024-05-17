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

  if (deltaY > 50 && this.startScrollTop === 0) {
    this.classList.remove("active");
    document.body.classList.remove("lock");
  } else {
    this.style.bottom = "0";
  } // if (deltaY > 0 && this.startScrollTop === 0) {
  //   event.preventDefault(); // Prevent the default scroll behavior
  //   this.style.bottom = -deltaY + "px";
  // } else if (deltaY < -50) {
  //   this.classList.remove("active");
  //   document.body.classList.remove("lock");
  // }

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNsaWRlck9uZSIsImluaXRTd2lwZXIiLCJzbGlkZXJUd28iLCJzbGlkZXJUaHJlZSIsInNsaWRlckZvdXIiLCJzbGlkZXJGaXZlIiwiYnRuU29ydCIsInF1ZXJ5U2VsZWN0b3IiLCJzb3J0TW9kYWwiLCJzY3JvbGxTb3J0IiwiYnRuRmlsdGVyIiwiZmlsdGVyTW9kYWwiLCJzY3JvbGxGaWx0ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib3Blbk1vZGFsIiwic2V0dXBNb2RhbEV2ZW50cyIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJCdG4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsImVsZW0iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJyZXN0YXVyYW50c0ZpbHRlckJ0biIsImlucHV0U2VhcmNoIiwiYnRuQ2xlYXJTZWFyY2giLCJzaG93Q2xlYXIiLCJjbGVhcklucHV0IiwiYWRkcmVzc0J0biIsImFkZEJ0biIsImFkZHJlc3NTZWFyY2giLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbnMiLCJhY2NvcmRpb25Ob3RBY3RpdmUiLCJhY2NvcmRpb25BY3RpdmUiLCJlIiwidGFyZ2V0IiwiYm9keSIsInRlbCIsImlucHV0UGhvbmUiLCJvbmVQaG9uZUtleURvd24iLCJiYXNrZXREZWxldGUiLCJtb2RhbERlbGV0ZSIsImJvb3RzdHJhcCIsIk1vZGFsIiwiY2FyZHMiLCJjb3VudCIsImNhcmQiLCJjb3VudGVyIiwiZ29vZHMiLCJjb3VudENoYW5nZSIsInNob3ciLCJzbGlkZXIiLCJtb2RhbFBob25lIiwiY2hhbmdlUGhvbmVCdG4iLCJwaG9uZU51bSIsImlucHV0VGVsIiwiaW5wdXRCdG4iLCJrZXlDb2RlIiwidGV4dENvbnRlbnQiLCJ2YWx1ZSIsImJ0bnMiLCJpbmRleCIsImluZGV4RWxlbSIsImFkZEFkZHJlc3MiLCJtb2RhbCIsImlucHV0U2VhcmNoQnRuIiwibW9kYWxOYW1lIiwiY2hhbmdlTmFtZUJ0biIsIm5hbWVTcGFuIiwiaW5wdXROYW1lIiwia2V5IiwicHJvZHVjdENhcmQiLCJzd2lwZXIiLCJzd2lwZXIyIiwic3dpcGVyMyIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJtaW51cyIsInBsdXMiLCJvcGVuQ291bnRlciIsImNoYW5nZUNvdW50ZXIiLCJjb250YWluZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJldmVudCIsImhhbmRsZVRvdWNoU3RhcnQiLCJzdGFydFkiLCJ0b3VjaGVzIiwiY2xpZW50WSIsInN0YXJ0U2Nyb2xsVG9wIiwic2Nyb2xsVG9wIiwiaGFuZGxlVG91Y2hNb3ZlIiwiZW5kWSIsImRlbHRhWSIsInN0eWxlIiwiYm90dG9tIiwiaGFuZGxlTW91c2VEb3duIiwiaXNEcmFnZ2luZyIsImhhbmRsZU1vdXNlTW92ZSIsImhhbmRsZU1vdXNlVXAiLCJyZWdQaG9uZSIsImlucHV0IiwicmVwbGFjZSIsImlucHV0TnVtYmVyVmFsdWUiLCJmb3JtYXR0ZWRJbnB1dFZhbHVlIiwic2VsZWN0aW9uU3RhcnQiLCJsZW5ndGgiLCJkYXRhIiwidGVzdCIsImluY2x1ZGVzIiwiZmlyc3RTeW1ib2wiLCJzdWJzdHJpbmciLCJkaXNhYmxlZCIsInNwYW4iLCJmaXJzdEVsZW1lbnRDaGlsZCIsImxhc3RFbGVtZW50Q2hpbGQiLCJudW0iLCJOdW1iZXIiLCJkaXNhYmxlZE1pbnVzIiwiaXRlbSIsInBhbmVsIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwibWF4SGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiY2xvc2VDb3VudGVyIiwib3BlcmF0b3IiLCJidG5XcmFwIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLE9BQXhCLENBQUosRUFBc0M7RUFDcEMsSUFBTUMsU0FBUyxHQUFHQyxVQUFVLENBQUMsdUJBQUQsQ0FBNUI7RUFDQSxJQUFNQyxTQUFT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SSxFQUFJO0lBQ3BCLElBQU00RyxPQUFPLEdBQUc1RyxJQUFJLENBQUNmLGFBQUwsQ0FBbUIsZUFBbkIsQ0FBaEI7SUFDQSxJQUFNYyxHQUFHLEdBQUdDLElBQUksQ0FBQ2YsYUFBTCxDQUFtQixjQUFuQixDQUFaO0lBQ0EsSUFBTTRDLE9BQU8sR0FBRzdCLElBQUksQ0FBQ2YsYUFBTCxDQUFtQixrQkFBbkIsQ0FBaEI7SUFDQSxJQUFNMEMsS0FBSyxHQUFHRSxPQUFPLENBQUM1QyxhQUFSLENBQXNCLE1BQXRCLENBQWQ7SUFDQSxJQUFNMkUsS0FBSyxHQUFHL0IsT0FBTyxDQUFDNUMsYUFBUixDQUFzQixnQkFBdEIsQ0FBZDtJQUNBLElBQU00RSxJQUFJLEdBQUdoQyxPQUFPLENBQUM1QyxhQUFSLENBQXNCLGVBQXRCLENBQWI7SUFFQTJILE9BQU8sQ0FBQ3JILGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQUF5QixDQUFDLEVBQUk7TUFDckNBLENBQUMsQ0FBQzZGLGNBQUY7SUFDRCxDQUZEO0lBR0E5RyxHQUFHLENBQUNSLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQU07TUFBQ3VFLFdBQVcsQ0FBQy9ELEdBQUQsRUFBTThCLE9BQU4sQ0FBWDtJQUEwQixDQUEvRDtJQUVBK0IsS0FBSyxDQUFDckUsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBTTtNQUFDd0UsYUFBYSxDQUFDcEMsS0FBRCxFQUFRNUIsR0FBUixFQUFhOEIsT0FBYixFQUFzQixPQUF0QixDQUFiO0lBQTRDLENBQW5GO0lBRUFnQyxJQUFJLENBQUN0RSxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFNO01BQUN3RSxhQUFhLENBQUNwQyxLQUFELEVBQVE1QixHQUFSLEVBQWE4QixPQUFiLEVBQXNCLE1BQXRCLENBQWI7SUFBMkMsQ0FBakY7RUFDRCxDQWhCRDtBQWlCRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5kZXhcIikpIHtcbiAgY29uc3Qgc2xpZGVyT25lID0gaW5pdFN3aXBlcihcIi5tYWluLXN0b2NrX19zd2lwZXItMVwiKVxuICBjb25zdCBzbGlkZXJUd28gPSBpbml0U3dpcGVyKFwiLm1haW4tc3RvY2tfX3N3aXBlci0yXCIpXG4gIGNvbnN0IHNsaWRlclRocmVlID0gaW5pdFN3aXBlcihcIi5tYWluLXN0b2NrX19zd2lwZXItM1wiKVxuICBjb25zdCBzbGlkZXJGb3VyID0gaW5pdFN3aXBlcihcIi5tYWluLXN0b2NrX19zd2lwZXItNFwiKVxuICBjb25zdCBzbGlkZXJGaXZlID0gaW5pdFN3aXBlcihcIi5tYWluLXN0b2NrX19zd2lwZXItNVwiKVxuXG4gIGNvbnN0IGJ0blNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRzX19zb3J0XCIpO1xuICBjb25zdCBzb3J0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdcIik7XG4gIGNvbnN0IHNjcm9sbFNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdfX2JveFwiKVxuICBjb25zdCBidG5GaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRzX19maWx0ZXJcIik7XG4gIGNvbnN0IGZpbHRlck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJcIik7XG4gIGNvbnN0IHNjcm9sbEZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyX19ib3hcIik7XG4gIGJ0blNvcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3Blbk1vZGFsKHNvcnRNb2RhbClcbiAgfSlcbiAgYnRuRmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG9wZW5Nb2RhbChmaWx0ZXJNb2RhbClcbiAgfSlcblxuICBzZXR1cE1vZGFsRXZlbnRzKHNvcnRNb2RhbCwgc2Nyb2xsU29ydClcbiAgc2V0dXBNb2RhbEV2ZW50cyhmaWx0ZXJNb2RhbCwgc2Nyb2xsRmlsdGVyKVxuICBjb25zb2xlLmxvZyhzY3JvbGxTb3J0KVxuXG4gIGNvbnN0IGZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2J0bicpO1xuXG4gIGZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZmlsdGVyQnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgcmVzdGF1cmFudHNGaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdGF1cmFudHNfX2ZpbHRlcnMtYnRuJylcblxuICByZXN0YXVyYW50c0ZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2lucHV0Jyk7XG4gIGNvbnN0IGJ0bkNsZWFyU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VhcmNoLWNsZWFyJylcbiAgaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7c2hvd0NsZWFyKGlucHV0U2VhcmNoLCBidG5DbGVhclNlYXJjaCl9KVxuICBidG5DbGVhclNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFySW5wdXQoaW5wdXRTZWFyY2gpXG4gICAgc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBidG5DbGVhclNlYXJjaClcbiAgfSlcblxuICBjb25zdCBhZGRyZXNzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYWRkcmVzcy1idG4nKVxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19hZGRyZXNzLWFkZCcpXG4gIGNvbnN0IGFkZHJlc3NTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19hZGRyZXNzLXNlYXJjaCcpXG5cbiAgYWRkcmVzc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRyZXNzQnRuLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtc2hvd1wiKSA/IGFjY29yZGlvbk5vdEFjdGl2ZShhZGRyZXNzQnRuKSA6IGFjY29yZGlvbkFjdGl2ZShhZGRyZXNzQnRuKVxuICB9KVxuXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRyZXNzU2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIXNvcnRNb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWJ0blNvcnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBzb3J0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFmaWx0ZXJNb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWJ0bkZpbHRlci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGZpbHRlck1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghYWRkcmVzc0J0bi5wYXJlbnRFbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgYWNjb3JkaW9uTm90QWN0aXZlKGFkZHJlc3NCdG4pXG4gICAgICBhZGRyZXNzU2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0aG9yaXphdGlvblwiKSkge1xuICBjb25zdCB0ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGhvcml6YXRpb25fX2lucHV0W3R5cGU9J3RlbCddXCIpO1xuICB0ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7aW5wdXRQaG9uZShlKX0pXG4gIHRlbC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge29uZVBob25lS2V5RG93bihlKX0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2tldFwiKSkge1xuICBjb25zdCBiYXNrZXREZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19oZWFkZXItZGVsZXRlJyk7XG4gIGNvbnN0IG1vZGFsRGVsZXRlID0gbmV3IGJvb3RzdHJhcC5Nb2RhbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLW1vZGFsLWRlbGV0ZVwiKSlcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFza2V0X19zZWxlY3RlZC1pdGVtJylcblxuICBjb25zdCBjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRfX2NvdW50LWNvdW50JylcblxuICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgIGNvbnN0IGNvdW50ZXIgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRfX3NlbGVjdGVkLWl0ZW0tY291bnRlcicpXG4gICAgY29uc3QgZ29vZHMgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRfX3NlbGVjdGVkLWl0ZW0tY291bnQnKVxuICAgIGNvdW50Q2hhbmdlKGNvdW50ZXIsIGdvb2RzKTtcbiAgfSlcblxuICBiYXNrZXREZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7bW9kYWxEZWxldGUuc2hvdygpfSlcblxuICBjb25zdCBzbGlkZXIgPSBpbml0U3dpcGVyKFwiLmJhc2tldF9fc3dpcGVyXCIpXG5cbiAgY291bnRDaGFuZ2UoY291bnQpXG5cbiAgY29uc3QgbW9kYWxQaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLW1vZGFsXCIpXG4gIGNvbnN0IGNoYW5nZVBob25lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tcGhvbmVcIilcbiAgY29uc3QgcGhvbmVOdW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1waG9uZS1udW1cIilcbiAgY29uc3QgaW5wdXRUZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1tb2RhbC1pbnB1dFwiKVxuICBjb25zdCBpbnB1dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLW1vZGFsLWJ0blwiKVxuXG4gIGlucHV0VGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge2lucHV0UGhvbmUoZSl9KVxuICBpbnB1dFRlbC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIG9uZVBob25lS2V5RG93bihlKVxuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBwaG9uZU51bS50ZXh0Q29udGVudCA9IGlucHV0VGVsLnZhbHVlXG4gICAgICBpbnB1dFRlbC52YWx1ZSA9ICcnXG4gICAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxuICBpbnB1dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBob25lTnVtLnRleHRDb250ZW50ID0gaW5wdXRUZWwudmFsdWVcbiAgICBpbnB1dFRlbC52YWx1ZSA9ICcnXG4gICAgbW9kYWxQaG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGNoYW5nZVBob25lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWxQaG9uZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmICghbW9kYWxQaG9uZS5jb250YWlucyhlLnRhcmdldCkgJiYgIWNoYW5nZVBob25lQnRuLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgbW9kYWxQaG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VjY2Vzc1wiKSkge1xuICBjb25zdCBzbGlkZXIgPSBpbml0U3dpcGVyKFwiLnN1Y2Nlc3NfX29yZGVyZWQtc3dpcGVyXCIpXG5cbiAgY29uc3QgYnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWNjZXNzX19ncmFkZS1zdGFyJyk7XG4gIGJ0bnMuZm9yRWFjaCgoYnRuLCBpbmRleCkgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGJ0bnMuZm9yRWFjaCgoZWxlbSwgaW5kZXhFbGVtKSA9PiB7XG4gICAgICAgIGlmIChpbmRleEVsZW0gPD0gaW5kZXgpIHtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIH0gZWxzZSAge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH0pXG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjb3VudFwiKSkge1xuICBjb25zdCBhZGRBZGRyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2FkZHJlc3MtYWRkJyk7XG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2FkZHJlc3Mtc2VhcmNoJyk7XG4gIGNvbnN0IGlucHV0U2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2FkZHJlc3Mtc2VhcmNoLWlucHV0JylcbiAgY29uc3QgaW5wdXRTZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fYWRkcmVzcy1zZWFyY2gtYnRuJylcblxuICBhZGRBZGRyZXNzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gIH0pXG5cbiAgaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGlucHV0U2VhcmNoQnRuKSlcbiAgaW5wdXRTZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJJbnB1dChpbnB1dFNlYXJjaClcbiAgICBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGlucHV0U2VhcmNoQnRuKVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIW1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYWRkQWRkcmVzcy5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IG1vZGFsTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1tb2RhbFwiKVxuICBjb25zdCBjaGFuZ2VOYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW5hbWUtd3JhcFwiKVxuICBjb25zdCBuYW1lU3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1uYW1lXCIpXG4gIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1tb2RhbC1pbnB1dFwiKVxuICBjb25zdCBpbnB1dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1tb2RhbC1idG5cIilcblxuICBpbnB1dEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG5hbWVTcGFuLnRleHRDb250ZW50ID0gaW5wdXROYW1lLnZhbHVlXG4gICAgaW5wdXROYW1lLnZhbHVlID0gXCJcIjtcbiAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBpbnB1dE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIG5hbWVTcGFuLnRleHRDb250ZW50ID0gaW5wdXROYW1lLnZhbHVlXG4gICAgICBpbnB1dE5hbWUudmFsdWUgPSBcIlwiO1xuICAgICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxuXG4gIGNoYW5nZU5hbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoIW1vZGFsTmFtZS5jb250YWlucyhlLnRhcmdldCkgJiYgIWNoYW5nZU5hbWVCdG4uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN0b2NrXCIpKSB7XG4gIGNvbnN0IHNsaWRlck9uZSA9IGluaXRTd2lwZXIoJy5zdG9ja19fYmxvY2stc3dpcGVyJylcbiAgY29uc3Qgc2xpZGVyVHdvID0gaW5pdFN3aXBlcignLnN0b2NrX19ibG9jay1zd2lwZXItMicpXG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZFwiKSkge1xuICAgIHByb2R1Y3RDYXJkKCk7XG4gIH1cblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN0YXVyYW50XCIpKSB7XG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZFwiKSkge1xuICAgIHByb2R1Y3RDYXJkKCk7XG4gIH1cblxuICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudF9fc2V0dGluZ3Mtc2VhcmNoLWlucHV0XCIpXG4gIGNvbnN0IGlucHV0U2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50X19zZXR0aW5ncy1zZWFyY2gtYnRuXCIpXG4gIGNvbnN0IGJ0blNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRfX3NldHRpbmdzLXNvcnRcIik7XG4gIGNvbnN0IHNvcnRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ1wiKTtcbiAgY29uc3Qgc2Nyb2xsU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ19fYm94XCIpXG4gIGNvbnN0IGJ0bkZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudF9fc2V0dGluZ3MtZmlsdGVyXCIpO1xuICBjb25zdCBmaWx0ZXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyXCIpO1xuICBjb25zdCBzY3JvbGxGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcl9fYm94XCIpO1xuXG5cbiAgaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGlucHV0U2VhcmNoQnRuKSlcbiAgaW5wdXRTZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJJbnB1dChpbnB1dFNlYXJjaClcbiAgICBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGlucHV0U2VhcmNoQnRuKVxuICB9KVxuXG5cbiAgYnRuU29ydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBvcGVuTW9kYWwoc29ydE1vZGFsKVxuICB9KVxuICBidG5GaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3Blbk1vZGFsKGZpbHRlck1vZGFsKVxuICB9KVxuXG4gIHNldHVwTW9kYWxFdmVudHMoc29ydE1vZGFsLCBzY3JvbGxTb3J0KVxuICBzZXR1cE1vZGFsRXZlbnRzKGZpbHRlck1vZGFsLCBzY3JvbGxGaWx0ZXIpXG5cbiAgY29uc3QgZmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcl9fYnRuJyk7XG5cbiAgZmlsdGVyQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBmaWx0ZXJCdG4uZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFzb3J0TW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFidG5Tb3J0LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgc29ydE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghZmlsdGVyTW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFidG5GaWx0ZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBmaWx0ZXJNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG5cbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgcmVzdGF1cmFudHNGaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdGF1cmFudF9fc2V0dGluZ3MtZmlsdGVycy1idG4nKVxuXG4gIHJlc3RhdXJhbnRzRmlsdGVyQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZXN0YXVyYW50c0ZpbHRlckJ0bi5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKVxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IHN3aXBlciAgPSBpbml0U3dpcGVyKCcucmVzdGF1cmFudF9fc3RvY2stc3dpcGVyJylcbiAgY29uc3Qgc3dpcGVyMiA9IGluaXRTd2lwZXIoJy5yZXN0YXVyYW50X19vZmZlcnMtc3dpcGVyJylcbiAgY29uc3Qgc3dpcGVyMyA9IGluaXRTd2lwZXIoJy5yZXN0YXVyYW50X19vZmZlcnMtc3dpcGVyLTInKVxuXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2R1Y3RcIikpIHtcbiAgY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5wcm9kdWN0X190b3Atc3dpcGVyXCIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBzcGFjZUJldHdlZW46IDEwXG4gIH0pXG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZFwiKSkge1xuICAgIHByb2R1Y3RDYXJkKCk7XG4gIH1cblxuICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1hZGRcIilcbiAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWNvdW50ZXJcIilcbiAgY29uc3QgY291bnQgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpO1xuICBjb25zdCBtaW51cyA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtY291bnRlci1taW51c1wiKTtcbiAgY29uc3QgcGx1cyA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtY291bnRlci1wbHVzXCIpO1xuXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge29wZW5Db3VudGVyKGJ0biwgY291bnRlcil9KTtcblxuICBtaW51cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2NoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJtaW51c1wiKX0pXG5cbiAgcGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2NoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJwbHVzXCIpfSlcblxuICBjb25zdCBzd2lwZXIyID0gaW5pdFN3aXBlcihcIi5wcm9kdWN0X19hZGRpdGlvbmFsLXN3aXBlclwiKVxuICBjb25zdCBzd2lwZXIzID0gaW5pdFN3aXBlcihcIi5wcm9kdWN0X19hZGRpdGlvbmFsLXN3aXBlci0yXCIpXG59XG4vLyDQpNGD0L3QutGG0LjQuFxuZnVuY3Rpb24gaW5pdFN3aXBlcihjb250YWluZXIpIHtcbiAgcmV0dXJuIG5ldyBTd2lwZXIoY29udGFpbmVyLCB7XG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgc3BhY2VCZXR3ZWVuOiAyMFxuICB9KVxufVxuXG5mdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oZXZlbnQpIHtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgdGhpcy5zdGFydFkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gIHRoaXMuc3RhcnRTY3JvbGxUb3AgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5zb3J0aW5nX19ib3gnKS5zY3JvbGxUb3A7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZShldmVudCkge1xuICBsZXQgZW5kWSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgbGV0IGRlbHRhWSA9IGVuZFkgLSB0aGlzLnN0YXJ0WTtcbiAgaWYgKGRlbHRhWSA+IDUwICYmIHRoaXMuc3RhcnRTY3JvbGxUb3AgPT09IDApIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKTtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IFwiMFwiO1xuICB9XG4gIC8vIGlmIChkZWx0YVkgPiAwICYmIHRoaXMuc3RhcnRTY3JvbGxUb3AgPT09IDApIHtcbiAgLy8gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IHRoZSBkZWZhdWx0IHNjcm9sbCBiZWhhdmlvclxuICAvLyAgIHRoaXMuc3R5bGUuYm90dG9tID0gLWRlbHRhWSArIFwicHhcIjtcbiAgLy8gfSBlbHNlIGlmIChkZWx0YVkgPCAtNTApIHtcbiAgLy8gICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIC8vICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKTtcbiAgLy8gfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgdGhpcy5zdGFydFkgPSBldmVudC5jbGllbnRZO1xuICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xuICB0aGlzLnN0YXJ0U2Nyb2xsVG9wID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuc29ydGluZ19fYm94Jykuc2Nyb2xsVG9wO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmUoZXZlbnQpIHtcbiAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xuICAgIGxldCBlbmRZID0gZXZlbnQuY2xpZW50WTtcbiAgICBsZXQgZGVsdGFZID0gZW5kWSAtIHRoaXMuc3RhcnRZO1xuICAgIGlmIChkZWx0YVkgPiAwKSB7XG4gICAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IC1kZWx0YVkgKyBcInB4XCI7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoZXZlbnQpIHtcbiAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xuICAgIGxldCBlbmRZID0gZXZlbnQuY2xpZW50WTtcbiAgICBsZXQgZGVsdGFZID0gZW5kWSAtIHRoaXMuc3RhcnRZO1xuICAgIGlmIChkZWx0YVkgPiA1MCAmJiB0aGlzLnN0YXJ0U2Nyb2xsVG9wID09PSAwKSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IFwiMFwiO1xuICAgIH1cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTsgXG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0dXBNb2RhbEV2ZW50cyhtb2RhbCkge1xuXG5cbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN0b3BQcm9wYWdhdGlvbiwgZmFsc2UpO1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBoYW5kbGVUb3VjaFN0YXJ0LCBmYWxzZSk7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgaGFuZGxlVG91Y2hNb3ZlLCBmYWxzZSk7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlTW91c2VEb3duLCBmYWxzZSk7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlLCBmYWxzZSk7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGhhbmRsZU1vdXNlVXAsIGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxvY2tcIilcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgbW9kYWwuc3R5bGUuYm90dG9tID0gXCIwXCJcbn1cblxuZnVuY3Rpb24gcmVnUGhvbmUoaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0LnZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG59XG5cbmZ1bmN0aW9uIGlucHV0UGhvbmUoZSkge1xuICBsZXQgaW5wdXQgPSBlLnRhcmdldDtcbiAgbGV0IGlucHV0TnVtYmVyVmFsdWUgPSByZWdQaG9uZShpbnB1dCk7XG4gIGxldCBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gJyc7XG4gIGxldCBzZWxlY3Rpb25TdGFydCA9IGlucHV0LnNlbGVjdGlvblN0YXJ0XG4gIC8vINCV0YHQu9C4INCyINC40L3Qv9GD0YIg0LLQstC10LTQtdC90Ysg0YHQuNC80L7QstC70Ysg0L3QtSDRgdC+0L7RgtCy0LXRgtGB0LLRg9GO0YnQuNC1INGA0LXQs9GD0LvRj9GA0LrQuCwg0YLQviDQt9C90LDRh9C10L3QuNC1INC40L3Qv9GD0YLQsCDRgdGC0LDQvdC+0LLQuNGC0YHRjyDQv9GD0YHRgtGL0LxcbiAgaWYgKCFpbnB1dE51bWJlclZhbHVlKSByZXR1cm4gaW5wdXQudmFsdWUgPSAnJ1xuICAvLyDQkiDRjdGC0L7QuSDRh9Cw0YHRgtC4INGPINC90LUg0YHQvtCy0YHQtdC8INC/0L7QvdC40LzQsNGOINGH0YLQviDQv9GA0L7QuNGB0YXQvtC00LjRglxuICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoICE9IHNlbGVjdGlvblN0YXJ0KSB7XG4gICAgaWYgKGUuZGF0YSAmJiAvXFxEL2cudGVzdChlLmRhdGEpKSB7XG4gICAgICBpbnB1dC52YWx1ZSA9IGlucHV0TnVtYmVyVmFsdWVcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoWyc3JywgJzgnLCAnOSddLmluY2x1ZGVzKGlucHV0TnVtYmVyVmFsdWVbMF0pKSB7XG4gICAgLy8g0JXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAg0LTQtdCy0Y/RgtGMLCDRgtC+0LPQtNCwINC80Ysg0LfQsNC80LXQvdGP0LXQvCDQv9C10YDQstGD0Y4g0YbQuNGE0YDRgyDQvdCwIDcg0Lgg0LTQtdCy0Y/RgtC60YMg0LTQtdC70LDQtdC8INCy0YLQvtGA0L7QuSDRhtC40YTRgNC+0LlcbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZVswXSA9PSAnOScpIGlucHV0TnVtYmVyVmFsdWUgPSAnNycgKyBpbnB1dE51bWJlclZhbHVlO1xuICAgIGlmIChpbnB1dE51bWJlclZhbHVlWzBdID09ICc4JykgaW5wdXROdW1iZXJWYWx1ZSA9ICc3J1xuICAgIC8vINCV0YHQu9C4INC/0LXRgNCy0LDRjyDRhtC40YTRgNCwIDcsINGC0L7Qs9C00LAg0LfQvdCw0YfQtdC90LjQtSDQuNC90L/Rg9GC0LAg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0YEgKzcsINC10YHQu9C4INC/0LXRgNCy0LDRjyDRhtC40YTRgNCwIDgsINGC0L7Qs9C00LAg0LfQvdCw0YfQtdC90LjQtSDQvdCw0YfQuNC90LDQtdGC0YHRjyDRgSA4XG4gICAgbGV0IGZpcnN0U3ltYm9sID0gJys3JztcbiAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gZmlyc3RTeW1ib2wgKyAnICc7XG4gICAgLy8g0JXRgdC70Lgg0LIg0LjQvdC/0YPRgtC1INCx0L7Qu9GM0YjQtSDQvtC00L3QvtC5INGG0LjRhNGA0Ysg0LTQvtCx0LDQstC70Y/QtdC8INGB0LrQvtCx0LrRgyDQvtGC0LrRgNGL0YLQuNGPINC4INGC0LDQuiDQtNCw0LvQtdC1XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnKCcgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZygxLCA0KVxuICAgIH1cbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gNSkge1xuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnKSAnICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoNCwgNylcbiAgICB9XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWUubGVuZ3RoID49IDgpIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJy0nICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoNywgOSlcbiAgICB9XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWUubGVuZ3RoID49IDEwKSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICctJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDksIDExKTtcbiAgICB9XG4gIH0gZWxzZSB7IC8v0JXRgdC70Lgg0LLQstC+0LTQuNC80L7QtSDRh9C40YHQu9C+INC90LUgNywgOCDQuNC70LggOSDRgtC+0LPQtNCwINC00L7QsdCw0LLQu9GP0LXQvCAr0Lgg0LTQvtCx0LDQstC70Y/QtdC8INCy0LLQtdC00LXQvdC+0LUg0YfQuNGB0LvQvlxuICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSAnKzcgKDknICsgaW5wdXROdW1iZXJWYWx1ZTtcbiAgfVxuICBpbnB1dC52YWx1ZSA9IGZvcm1hdHRlZElucHV0VmFsdWVcbn1cblxuZnVuY3Rpb24gb25lUGhvbmVLZXlEb3duIChlKSB7XG4gIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xuICBpZiAocmVnUGhvbmUoaW5wdXQpLmxlbmd0aCA9PSAxICYmIGUua2V5Q29kZSA9PT0gOCkge1xuICAgIGlucHV0LnZhbHVlID0gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0NsZWFyKGlucHV0LCBidG4pIHtcbiAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICBidG4uZGlzYWJsZWQgPSBmYWxzZVxuICB9IGVsc2Uge1xuICAgIGJ0bi5kaXNhYmxlZCA9IHRydWVcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhcklucHV0KGlucHV0KSB7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gY291bnRDaGFuZ2UoY291bnQsIGdvb2RzKSB7XG4gIGNvbnN0IHNwYW4gPSBjb3VudC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gIGNvbnN0IG1pbnVzID0gY291bnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gIGNvbnN0IHBsdXMgPSBjb3VudC5sYXN0RWxlbWVudENoaWxkO1xuXG4gIG1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihzcGFuLnRleHRDb250ZW50KSAtIDFcbiAgICBzcGFuLnRleHRDb250ZW50ID0gbnVtO1xuICAgIGlmICghIWdvb2RzKSB7XG4gICAgICBnb29kcy50ZXh0Q29udGVudCA9IGAke251bX0g0YjRgi5gXG4gICAgfVxuICAgIGRpc2FibGVkTWludXMobnVtLCBtaW51cylcbiAgfSlcblxuICBwbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihzcGFuLnRleHRDb250ZW50KSArIDFcbiAgICBzcGFuLnRleHRDb250ZW50ID0gbnVtO1xuICAgIGlmICghIWdvb2RzKSB7XG4gICAgICBnb29kcy50ZXh0Q29udGVudCA9IGAke251bX0g0YjRgi5gXG4gICAgfVxuICAgIGRpc2FibGVkTWludXMobnVtLCBtaW51cylcbiAgfSlcbn1cblxuZnVuY3Rpb24gZGlzYWJsZWRNaW51cyhudW0sIGJ0bikge1xuICBpZiAobnVtIDwgMSkge1xuICAgIGJ0bi5kaXNhYmxlZCA9IHRydWVcbiAgfSBlbHNlIHtcbiAgICBidG4uZGlzYWJsZWQgPSBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGFjY29yZGlvbkFjdGl2ZShpdGVtKSB7XG4gIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaXMtc2hvd1wiKTtcbiAgbGV0IHBhbmVsID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGlmICghcGFuZWwuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFjY29yZGlvbk5vdEFjdGl2ZShpdGVtKSB7XG4gIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtc2hvd1wiKTtcbiAgbGV0IHBhbmVsID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGlmIChwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsXG4gIH1cbn1cblxuZnVuY3Rpb24gb3BlbkNvdW50ZXIoYnRuLCBjb3VudGVyKSB7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwibm90LWFjdGl2ZVwiKTtcbiAgY291bnRlci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG59XG5cbmZ1bmN0aW9uIGNsb3NlQ291bnRlcihidG4sIGNvdW50ZXIpIHtcbiAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJub3QtYWN0aXZlXCIpO1xuICBjb3VudGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbn1cblxuZnVuY3Rpb24gY2hhbmdlQ291bnRlcihzcGFuLCBidG4sIGNvdW50ZXIsIG9wZXJhdG9yKSB7XG5cbiAgbGV0IG51bSA9IE51bWJlcihzcGFuLnRleHRDb250ZW50KTtcblxuICBpZiAob3BlcmF0b3IgPT09IFwicGx1c1wiKSB7XG4gICAgbnVtICs9IDFcbiAgfSBlbHNlIHtcbiAgICBudW0gLT0xXG4gIH1cblxuICBudW0gPCAxID8gY2xvc2VDb3VudGVyKGJ0biwgY291bnRlcikgOiBzcGFuLnRleHRDb250ZW50ID0gbnVtXG59XG5cbmZ1bmN0aW9uIHByb2R1Y3RDYXJkKCkge1xuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtY2FyZFwiKTtcbiAgY2FyZHMuZm9yRWFjaChlbGVtID0+IHtcbiAgICBjb25zdCBidG5XcmFwID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtYnRuc1wiKVxuICAgIGNvbnN0IGJ0biA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLWFkZFwiKVxuICAgIGNvbnN0IGNvdW50ZXIgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1jb3VudGVyXCIpXG4gICAgY29uc3QgY291bnQgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpO1xuICAgIGNvbnN0IG1pbnVzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtbWludXNcIik7XG4gICAgY29uc3QgcGx1cyA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLXBsdXNcIik7XG5cbiAgICBidG5XcmFwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KVxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge29wZW5Db3VudGVyKGJ0biwgY291bnRlcil9KTtcblxuICAgIG1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7Y2hhbmdlQ291bnRlcihjb3VudCwgYnRuLCBjb3VudGVyLCBcIm1pbnVzXCIpfSlcblxuICAgIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwicGx1c1wiKX0pXG4gIH0pXG59Il19
