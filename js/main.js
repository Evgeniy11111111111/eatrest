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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNsaWRlck9uZSIsImluaXRTd2lwZXIiLCJzbGlkZXJUd28iLCJzbGlkZXJUaHJlZSIsInNsaWRlckZvdXIiLCJzbGlkZXJGaXZlIiwiYnRuU29ydCIsInF1ZXJ5U2VsZWN0b3IiLCJzb3J0TW9kYWwiLCJzY3JvbGxTb3J0IiwiYnRuRmlsdGVyIiwiZmlsdGVyTW9kYWwiLCJzY3JvbGxGaWx0ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib3Blbk1vZGFsIiwic2V0dXBNb2RhbEV2ZW50cyIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJCdG4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsImVsZW0iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJyZXN0YXVyYW50c0ZpbHRlckJ0biIsImlucHV0U2VhcmNoIiwiYnRuQ2xlYXJTZWFyY2giLCJzaG93Q2xlYXIiLCJjbGVhcklucHV0IiwiYWRkcmVzc0J0biIsImFkZEJ0biIsImFkZHJlc3NTZWFyY2giLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbnMiLCJhY2NvcmRpb25Ob3RBY3RpdmUiLCJhY2NvcmRpb25BY3RpdmUiLCJlIiwidGFyZ2V0IiwiYm9keSIsInRlbCIsImlucHV0UGhvbmUiLCJvbmVQaG9uZUtleURvd24iLCJiYXNrZXREZWxldGUiLCJtb2RhbERlbGV0ZSIsImJvb3RzdHJhcCIsIk1vZGFsIiwiY2FyZHMiLCJjb3VudCIsImNhcmQiLCJjb3VudGVyIiwiZ29vZHMiLCJjb3VudENoYW5nZSIsInNob3ciLCJzbGlkZXIiLCJtb2RhbFBob25lIiwiY2hhbmdlUGhvbmVCdG4iLCJwaG9uZU51bSIsImlucHV0VGVsIiwiaW5wdXRCdG4iLCJrZXlDb2RlIiwidGV4dENvbnRlbnQiLCJ2YWx1ZSIsImJ0bnMiLCJpbmRleCIsImluZGV4RWxlbSIsImFkZEFkZHJlc3MiLCJtb2RhbCIsImlucHV0U2VhcmNoQnRuIiwibW9kYWxOYW1lIiwiY2hhbmdlTmFtZUJ0biIsIm5hbWVTcGFuIiwiaW5wdXROYW1lIiwia2V5IiwicHJvZHVjdENhcmQiLCJzd2lwZXIiLCJzd2lwZXIyIiwic3dpcGVyMyIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJtaW51cyIsInBsdXMiLCJvcGVuQ291bnRlciIsImNoYW5nZUNvdW50ZXIiLCJjb250YWluZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJldmVudCIsImhhbmRsZVRvdWNoU3RhcnQiLCJzdGFydFkiLCJ0b3VjaGVzIiwiY2xpZW50WSIsImRpc2FibGVTY3JvbGwiLCJoYW5kbGVUb3VjaE1vdmUiLCJlbmRZIiwiZGVsdGFZIiwic3R5bGUiLCJib3R0b20iLCJlbmFibGVTY3JvbGwiLCJoYW5kbGVNb3VzZURvd24iLCJpc0RyYWdnaW5nIiwiaGFuZGxlTW91c2VNb3ZlIiwiaGFuZGxlTW91c2VVcCIsImhhbmRsZU1vdXNlRHJhZ1N0YXJ0IiwicGFnZVBvc2l0aW9uIiwid2luZG93Iiwic2Nyb2xsWSIsImRhdGFzZXQiLCJwb3NpdGlvbiIsInRvcCIsInBhcnNlSW50Iiwic2Nyb2xsIiwibGVmdCIsInJlbW92ZUF0dHJpYnV0ZSIsInJlZ1Bob25lIiwiaW5wdXQiLCJyZXBsYWNlIiwiaW5wdXROdW1iZXJWYWx1ZSIsImZvcm1hdHRlZElucHV0VmFsdWUiLCJzZWxlY3Rpb25TdGFydCIsImxlbmd0aCIsImRhdGEiLCJ0ZXN0IiwiaW5jbHVkZXMiLCJmaXJzdFN5bWJvbCIsInN1YnN0cmluZyIsImRpc2FibGVkIiwic3BhbiIsImZpcnN0RWxlbWVudENoaWxkIiwibGFzdEVsZW1lbnRDaGlsZCIsIm51bSIsIk51bWJlciIsImRpc2FibGVkTWludXMiLCJpdGVtIiwicGFuZWwiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJtYXhIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJjbG9zZUNvdW50ZXIiLCJvcGVyYXRvciIsImJ0bldyYXAiLCJwcmV2ZW50RGVm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QUksR0FBR2hDLE9BQU8sQ0FBQzVDLGFBQVIsQ0FBc0IsZUFBdEIsQ0FBYjtJQUVBc0ksT0FBTyxDQUFDaEksZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsVUFBQXlCLENBQUMsRUFBSTtNQUNyQ0EsQ0FBQyxDQUFDd0csY0FBRjtJQUNELENBRkQ7SUFHQXpILEdBQUcsQ0FBQ1IsZ0JBQUosQ0FBcUIsT0FBckIsRUFBOEIsWUFBTTtNQUFDdUUsV0FBVyxDQUFDL0QsR0FBRCxFQUFNOEIsT0FBTixDQUFYO0lBQTBCLENBQS9EO0lBRUErQixLQUFLLENBQUNyRSxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxZQUFNO01BQUN3RSxhQUFhLENBQUNwQyxLQUFELEVBQVE1QixHQUFSLEVBQWE4QixPQUFiLEVBQXNCLE9BQXRCLENBQWI7SUFBNEMsQ0FBbkY7SUFFQWdDLElBQUksQ0FBQ3RFLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQU07TUFBQ3dFLGFBQWEsQ0FBQ3BDLEtBQUQsRUFBUTVCLEdBQVIsRUFBYThCLE9BQWIsRUFBc0IsTUFBdEIsQ0FBYjtJQUEyQyxDQUFqRjtFQUNELENBaEJEO0FBaUJEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmRleFwiKSkge1xuICBjb25zdCBzbGlkZXJPbmUgPSBpbml0U3dpcGVyKFwiLm1haW4tc3RvY2tfX3N3aXBlci0xXCIpXG4gIGNvbnN0IHNsaWRlclR3byA9IGluaXRTd2lwZXIoXCIubWFpbi1zdG9ja19fc3dpcGVyLTJcIilcbiAgY29uc3Qgc2xpZGVyVGhyZWUgPSBpbml0U3dpcGVyKFwiLm1haW4tc3RvY2tfX3N3aXBlci0zXCIpXG4gIGNvbnN0IHNsaWRlckZvdXIgPSBpbml0U3dpcGVyKFwiLm1haW4tc3RvY2tfX3N3aXBlci00XCIpXG4gIGNvbnN0IHNsaWRlckZpdmUgPSBpbml0U3dpcGVyKFwiLm1haW4tc3RvY2tfX3N3aXBlci01XCIpXG5cbiAgY29uc3QgYnRuU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudHNfX3NvcnRcIik7XG4gIGNvbnN0IHNvcnRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ1wiKTtcbiAgY29uc3Qgc2Nyb2xsU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ19fYm94XCIpXG4gIGNvbnN0IGJ0bkZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudHNfX2ZpbHRlclwiKTtcbiAgY29uc3QgZmlsdGVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlclwiKTtcbiAgY29uc3Qgc2Nyb2xsRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX2JveFwiKTtcbiAgYnRuU29ydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBvcGVuTW9kYWwoc29ydE1vZGFsKVxuICB9KVxuICBidG5GaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3Blbk1vZGFsKGZpbHRlck1vZGFsKVxuICB9KVxuXG4gIHNldHVwTW9kYWxFdmVudHMoc29ydE1vZGFsLCBzY3JvbGxTb3J0KVxuICBzZXR1cE1vZGFsRXZlbnRzKGZpbHRlck1vZGFsLCBzY3JvbGxGaWx0ZXIpXG4gIGNvbnNvbGUubG9nKHNjcm9sbFNvcnQpXG5cbiAgY29uc3QgZmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZpbHRlcl9fYnRuJyk7XG5cbiAgZmlsdGVyQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBmaWx0ZXJCdG4uZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgfSlcblxuICBjb25zdCByZXN0YXVyYW50c0ZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXN0YXVyYW50c19fZmlsdGVycy1idG4nKVxuXG4gIHJlc3RhdXJhbnRzRmlsdGVyQnRuLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZXN0YXVyYW50c0ZpbHRlckJ0bi5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKVxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IGlucHV0U2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9faW5wdXQnKTtcbiAgY29uc3QgYnRuQ2xlYXJTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19zZWFyY2gtY2xlYXInKVxuICBpbnB1dFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGJ0bkNsZWFyU2VhcmNoKX0pXG4gIGJ0bkNsZWFyU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2xlYXJJbnB1dChpbnB1dFNlYXJjaClcbiAgICBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGJ0bkNsZWFyU2VhcmNoKVxuICB9KVxuXG4gIGNvbnN0IGFkZHJlc3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19hZGRyZXNzLWJ0bicpXG4gIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2FkZHJlc3MtYWRkJylcbiAgY29uc3QgYWRkcmVzc1NlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2FkZHJlc3Mtc2VhcmNoJylcblxuICBhZGRyZXNzQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZHJlc3NCdG4ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1zaG93XCIpID8gYWNjb3JkaW9uTm90QWN0aXZlKGFkZHJlc3NCdG4pIDogYWNjb3JkaW9uQWN0aXZlKGFkZHJlc3NCdG4pXG4gIH0pXG5cbiAgYWRkQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZHJlc3NTZWFyY2guY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghc29ydE1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuU29ydC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHNvcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWZpbHRlck1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuRmlsdGVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgZmlsdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFhZGRyZXNzQnRuLnBhcmVudEVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBhY2NvcmRpb25Ob3RBY3RpdmUoYWRkcmVzc0J0bilcbiAgICAgIGFkZHJlc3NTZWFyY2guY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdXRob3JpemF0aW9uXCIpKSB7XG4gIGNvbnN0IHRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXV0aG9yaXphdGlvbl9faW5wdXRbdHlwZT0ndGVsJ11cIik7XG4gIHRlbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtpbnB1dFBob25lKGUpfSlcbiAgdGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7b25lUGhvbmVLZXlEb3duKGUpfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmFza2V0XCIpKSB7XG4gIGNvbnN0IGJhc2tldERlbGV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRfX2hlYWRlci1kZWxldGUnKTtcbiAgY29uc3QgbW9kYWxEZWxldGUgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtbW9kYWwtZGVsZXRlXCIpKVxuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYXNrZXRfX3NlbGVjdGVkLWl0ZW0nKVxuXG4gIGNvbnN0IGNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2tldF9fY291bnQtY291bnQnKVxuXG4gIGNhcmRzLmZvckVhY2goY2FyZCA9PiB7XG4gICAgY29uc3QgY291bnRlciA9IGNhcmQucXVlcnlTZWxlY3RvcignLmJhc2tldF9fc2VsZWN0ZWQtaXRlbS1jb3VudGVyJylcbiAgICBjb25zdCBnb29kcyA9IGNhcmQucXVlcnlTZWxlY3RvcignLmJhc2tldF9fc2VsZWN0ZWQtaXRlbS1jb3VudCcpXG4gICAgY291bnRDaGFuZ2UoY291bnRlciwgZ29vZHMpO1xuICB9KVxuXG4gIGJhc2tldERlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHttb2RhbERlbGV0ZS5zaG93KCl9KVxuXG4gIGNvbnN0IHNsaWRlciA9IGluaXRTd2lwZXIoXCIuYmFza2V0X19zd2lwZXJcIilcblxuICBjb3VudENoYW5nZShjb3VudClcblxuICBjb25zdCBtb2RhbFBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tbW9kYWxcIilcbiAgY29uc3QgY2hhbmdlUGhvbmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1waG9uZVwiKVxuICBjb25zdCBwaG9uZU51bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLXBob25lLW51bVwiKVxuICBjb25zdCBpbnB1dFRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLW1vZGFsLWlucHV0XCIpXG4gIGNvbnN0IGlucHV0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tbW9kYWwtYnRuXCIpXG5cbiAgaW5wdXRUZWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7aW5wdXRQaG9uZShlKX0pXG4gIGlucHV0VGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgb25lUGhvbmVLZXlEb3duKGUpXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHBob25lTnVtLnRleHRDb250ZW50ID0gaW5wdXRUZWwudmFsdWVcbiAgICAgIGlucHV0VGVsLnZhbHVlID0gJydcbiAgICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG4gIGlucHV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcGhvbmVOdW0udGV4dENvbnRlbnQgPSBpbnB1dFRlbC52YWx1ZVxuICAgIGlucHV0VGVsLnZhbHVlID0gJydcbiAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgY2hhbmdlUGhvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKCFtb2RhbFBob25lLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhY2hhbmdlUGhvbmVCdG4uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWNjZXNzXCIpKSB7XG4gIGNvbnN0IHNsaWRlciA9IGluaXRTd2lwZXIoXCIuc3VjY2Vzc19fb3JkZXJlZC1zd2lwZXJcIilcblxuICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1Y2Nlc3NfX2dyYWRlLXN0YXInKTtcbiAgYnRucy5mb3JFYWNoKChidG4sIGluZGV4KSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYnRucy5mb3JFYWNoKChlbGVtLCBpbmRleEVsZW0pID0+IHtcbiAgICAgICAgaWYgKGluZGV4RWxlbSA8PSBpbmRleCkge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfSBlbHNlICB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NvdW50XCIpKSB7XG4gIGNvbnN0IGFkZEFkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fYWRkcmVzcy1hZGQnKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fYWRkcmVzcy1zZWFyY2gnKTtcbiAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fYWRkcmVzcy1zZWFyY2gtaW5wdXQnKVxuICBjb25zdCBpbnB1dFNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19hZGRyZXNzLXNlYXJjaC1idG4nKVxuXG4gIGFkZEFkZHJlc3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgfSlcblxuICBpbnB1dFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHNob3dDbGVhcihpbnB1dFNlYXJjaCwgaW5wdXRTZWFyY2hCdG4pKVxuICBpbnB1dFNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhcklucHV0KGlucHV0U2VhcmNoKVxuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgaW5wdXRTZWFyY2hCdG4pXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghbW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFhZGRBZGRyZXNzLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgbW9kYWxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW1vZGFsXCIpXG4gIGNvbnN0IGNoYW5nZU5hbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbmFtZS13cmFwXCIpXG4gIGNvbnN0IG5hbWVTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW5hbWVcIilcbiAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW1vZGFsLWlucHV0XCIpXG4gIGNvbnN0IGlucHV0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW1vZGFsLWJ0blwiKVxuXG4gIGlucHV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBpbnB1dE5hbWUudmFsdWVcbiAgICBpbnB1dE5hbWUudmFsdWUgPSBcIlwiO1xuICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGlucHV0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBpbnB1dE5hbWUudmFsdWVcbiAgICAgIGlucHV0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG5cbiAgY2hhbmdlTmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmICghbW9kYWxOYW1lLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhY2hhbmdlTmFtZUJ0bi5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvY2tcIikpIHtcbiAgY29uc3Qgc2xpZGVyT25lID0gaW5pdFN3aXBlcignLnN0b2NrX19ibG9jay1zd2lwZXInKVxuICBjb25zdCBzbGlkZXJUd28gPSBpbml0U3dpcGVyKCcuc3RvY2tfX2Jsb2NrLXN3aXBlci0yJylcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkXCIpKSB7XG4gICAgcHJvZHVjdENhcmQoKTtcbiAgfVxuXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlc3RhdXJhbnRcIikpIHtcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkXCIpKSB7XG4gICAgcHJvZHVjdENhcmQoKTtcbiAgfVxuXG4gIGNvbnN0IGlucHV0U2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50X19zZXR0aW5ncy1zZWFyY2gtaW5wdXRcIilcbiAgY29uc3QgaW5wdXRTZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRfX3NldHRpbmdzLXNlYXJjaC1idG5cIilcbiAgY29uc3QgYnRuU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudF9fc2V0dGluZ3Mtc29ydFwiKTtcbiAgY29uc3Qgc29ydE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nXCIpO1xuICBjb25zdCBzY3JvbGxTb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nX19ib3hcIilcbiAgY29uc3QgYnRuRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50X19zZXR0aW5ncy1maWx0ZXJcIik7XG4gIGNvbnN0IGZpbHRlck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJcIik7XG4gIGNvbnN0IHNjcm9sbEZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyX19ib3hcIik7XG5cblxuICBpbnB1dFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHNob3dDbGVhcihpbnB1dFNlYXJjaCwgaW5wdXRTZWFyY2hCdG4pKVxuICBpbnB1dFNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhcklucHV0KGlucHV0U2VhcmNoKVxuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgaW5wdXRTZWFyY2hCdG4pXG4gIH0pXG5cblxuICBidG5Tb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG9wZW5Nb2RhbChzb3J0TW9kYWwpXG4gIH0pXG4gIGJ0bkZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBvcGVuTW9kYWwoZmlsdGVyTW9kYWwpXG4gIH0pXG5cbiAgc2V0dXBNb2RhbEV2ZW50cyhzb3J0TW9kYWwsIHNjcm9sbFNvcnQpXG4gIHNldHVwTW9kYWxFdmVudHMoZmlsdGVyTW9kYWwsIHNjcm9sbEZpbHRlcilcblxuICBjb25zdCBmaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19idG4nKTtcblxuICBmaWx0ZXJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGZpbHRlckJ0bi5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKVxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB9KVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIXNvcnRNb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWJ0blNvcnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBzb3J0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFmaWx0ZXJNb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWJ0bkZpbHRlci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGZpbHRlck1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcblxuICAgIH1cbiAgfSlcblxuICBjb25zdCByZXN0YXVyYW50c0ZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXN0YXVyYW50X19zZXR0aW5ncy1maWx0ZXJzLWJ0bicpXG5cbiAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlc3RhdXJhbnRzRmlsdGVyQnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3Qgc3dpcGVyICA9IGluaXRTd2lwZXIoJy5yZXN0YXVyYW50X19zdG9jay1zd2lwZXInKVxuICBjb25zdCBzd2lwZXIyID0gaW5pdFN3aXBlcignLnJlc3RhdXJhbnRfX29mZmVycy1zd2lwZXInKVxuICBjb25zdCBzd2lwZXIzID0gaW5pdFN3aXBlcignLnJlc3RhdXJhbnRfX29mZmVycy1zd2lwZXItMicpXG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdFwiKSkge1xuICBjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLnByb2R1Y3RfX3RvcC1zd2lwZXJcIiwge1xuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIHNwYWNlQmV0d2VlbjogMTBcbiAgfSlcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkXCIpKSB7XG4gICAgcHJvZHVjdENhcmQoKTtcbiAgfVxuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWFkZFwiKVxuICBjb25zdCBjb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtY291bnRlclwiKVxuICBjb25zdCBjb3VudCA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4gIGNvbnN0IG1pbnVzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1jb3VudGVyLW1pbnVzXCIpO1xuICBjb25zdCBwbHVzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1jb3VudGVyLXBsdXNcIik7XG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7b3BlbkNvdW50ZXIoYnRuLCBjb3VudGVyKX0pO1xuXG4gIG1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7Y2hhbmdlQ291bnRlcihjb3VudCwgYnRuLCBjb3VudGVyLCBcIm1pbnVzXCIpfSlcblxuICBwbHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7Y2hhbmdlQ291bnRlcihjb3VudCwgYnRuLCBjb3VudGVyLCBcInBsdXNcIil9KVxuXG4gIGNvbnN0IHN3aXBlcjIgPSBpbml0U3dpcGVyKFwiLnByb2R1Y3RfX2FkZGl0aW9uYWwtc3dpcGVyXCIpXG4gIGNvbnN0IHN3aXBlcjMgPSBpbml0U3dpcGVyKFwiLnByb2R1Y3RfX2FkZGl0aW9uYWwtc3dpcGVyLTJcIilcbn1cbi8vINCk0YPQvdC60YbQuNC4XG5mdW5jdGlvbiBpbml0U3dpcGVyKGNvbnRhaW5lcikge1xuICByZXR1cm4gbmV3IFN3aXBlcihjb250YWluZXIsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcbiAgICBzcGFjZUJldHdlZW46IDIwXG4gIH0pXG59XG5mdW5jdGlvbiBzdG9wUHJvcGFnYXRpb24oZXZlbnQpIHtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnQoZXZlbnQpIHtcbiAgdGhpcy5zdGFydFkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gIGRpc2FibGVTY3JvbGwoKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlKGV2ZW50KSB7XG4gIGxldCBlbmRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuICBsZXQgZGVsdGFZID0gZW5kWSAtIHRoaXMuc3RhcnRZO1xuXG4gIGlmIChkZWx0YVkgPiAwKSB7XG4gICAgdGhpcy5zdHlsZS5ib3R0b20gPSAtZGVsdGFZICsgXCJweFwiO1xuICB9IGVsc2UgaWYgKGRlbHRhWSA+IDUwKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIik7XG4gICAgZW5hYmxlU2Nyb2xsKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zdHlsZS5ib3R0b20gPSBcIjBcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgdGhpcy5zdGFydFkgPSBldmVudC5jbGllbnRZO1xuICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlKGV2ZW50KSB7XG4gIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICBsZXQgZW5kWSA9IGV2ZW50LmNsaWVudFk7XG4gICAgbGV0IGRlbHRhWSA9IGVuZFkgLSB0aGlzLnN0YXJ0WTtcbiAgICBpZiAoZGVsdGFZID4gMCkge1xuICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSAtZGVsdGFZICsgXCJweFwiO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZVVwKGV2ZW50KSB7XG4gIGxldCBlbmRZID0gZXZlbnQuY2xpZW50WTtcbiAgbGV0IGRlbHRhWSA9IGVuZFkgLSB0aGlzLnN0YXJ0WTtcbiAgaWYgKGRlbHRhWSA+IDUwKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIik7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zdHlsZS5ib3R0b20gPSBcIjBcIjtcbiAgfVxuICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTW91c2VEcmFnU3RhcnQoZXZlbnQpIHtcbiAgdGhpcy5zdGFydFkgPSBldmVudC5jbGllbnRZO1xuICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBzZXR1cE1vZGFsRXZlbnRzKG1vZGFsKSB7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdG9wUHJvcGFnYXRpb24pO1xuXG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGhhbmRsZVRvdWNoU3RhcnQpO1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIGhhbmRsZVRvdWNoTW92ZSk7XG5cbiAgLy8gbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVNb3VzZURyYWdTdGFydCk7XG4gIC8vIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcbiAgLy8gbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlTW91c2VVcCk7XG59XG5cbmxldCBkaXNhYmxlU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICBsZXQgcGFnZVBvc2l0aW9uID0gd2luZG93LnNjcm9sbFk7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZS1zY3JvbGwnKTtcbiAgZG9jdW1lbnQuYm9keS5kYXRhc2V0LnBvc2l0aW9uID0gcGFnZVBvc2l0aW9uO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9IC1wYWdlUG9zaXRpb24gKyAncHgnO1xufVxuXG5sZXQgZW5hYmxlU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICBsZXQgcGFnZVBvc2l0aW9uID0gcGFyc2VJbnQoZG9jdW1lbnQuYm9keS5kYXRhc2V0LnBvc2l0aW9uLCAxMCk7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gJ2F1dG8nO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGUtc2Nyb2xsJyk7XG4gIHdpbmRvdy5zY3JvbGwoeyB0b3A6IHBhZ2VQb3NpdGlvbiwgbGVmdDogMCB9KTtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtcG9zaXRpb24nKTtcbn1cblxuZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImxvY2tcIilcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgbW9kYWwuc3R5bGUuYm90dG9tID0gXCIwXCJcbn1cblxuZnVuY3Rpb24gcmVnUGhvbmUoaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0LnZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG59XG5cbmZ1bmN0aW9uIGlucHV0UGhvbmUoZSkge1xuICBsZXQgaW5wdXQgPSBlLnRhcmdldDtcbiAgbGV0IGlucHV0TnVtYmVyVmFsdWUgPSByZWdQaG9uZShpbnB1dCk7XG4gIGxldCBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gJyc7XG4gIGxldCBzZWxlY3Rpb25TdGFydCA9IGlucHV0LnNlbGVjdGlvblN0YXJ0XG4gIC8vINCV0YHQu9C4INCyINC40L3Qv9GD0YIg0LLQstC10LTQtdC90Ysg0YHQuNC80L7QstC70Ysg0L3QtSDRgdC+0L7RgtCy0LXRgtGB0LLRg9GO0YnQuNC1INGA0LXQs9GD0LvRj9GA0LrQuCwg0YLQviDQt9C90LDRh9C10L3QuNC1INC40L3Qv9GD0YLQsCDRgdGC0LDQvdC+0LLQuNGC0YHRjyDQv9GD0YHRgtGL0LxcbiAgaWYgKCFpbnB1dE51bWJlclZhbHVlKSByZXR1cm4gaW5wdXQudmFsdWUgPSAnJ1xuICAvLyDQkiDRjdGC0L7QuSDRh9Cw0YHRgtC4INGPINC90LUg0YHQvtCy0YHQtdC8INC/0L7QvdC40LzQsNGOINGH0YLQviDQv9GA0L7QuNGB0YXQvtC00LjRglxuICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoICE9IHNlbGVjdGlvblN0YXJ0KSB7XG4gICAgaWYgKGUuZGF0YSAmJiAvXFxEL2cudGVzdChlLmRhdGEpKSB7XG4gICAgICBpbnB1dC52YWx1ZSA9IGlucHV0TnVtYmVyVmFsdWVcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAoWyc3JywgJzgnLCAnOSddLmluY2x1ZGVzKGlucHV0TnVtYmVyVmFsdWVbMF0pKSB7XG4gICAgLy8g0JXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAg0LTQtdCy0Y/RgtGMLCDRgtC+0LPQtNCwINC80Ysg0LfQsNC80LXQvdGP0LXQvCDQv9C10YDQstGD0Y4g0YbQuNGE0YDRgyDQvdCwIDcg0Lgg0LTQtdCy0Y/RgtC60YMg0LTQtdC70LDQtdC8INCy0YLQvtGA0L7QuSDRhtC40YTRgNC+0LlcbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZVswXSA9PSAnOScpIGlucHV0TnVtYmVyVmFsdWUgPSAnNycgKyBpbnB1dE51bWJlclZhbHVlO1xuICAgIGlmIChpbnB1dE51bWJlclZhbHVlWzBdID09ICc4JykgaW5wdXROdW1iZXJWYWx1ZSA9ICc3J1xuICAgIC8vINCV0YHQu9C4INC/0LXRgNCy0LDRjyDRhtC40YTRgNCwIDcsINGC0L7Qs9C00LAg0LfQvdCw0YfQtdC90LjQtSDQuNC90L/Rg9GC0LAg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0YEgKzcsINC10YHQu9C4INC/0LXRgNCy0LDRjyDRhtC40YTRgNCwIDgsINGC0L7Qs9C00LAg0LfQvdCw0YfQtdC90LjQtSDQvdCw0YfQuNC90LDQtdGC0YHRjyDRgSA4XG4gICAgbGV0IGZpcnN0U3ltYm9sID0gJys3JztcbiAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gZmlyc3RTeW1ib2wgKyAnICc7XG4gICAgLy8g0JXRgdC70Lgg0LIg0LjQvdC/0YPRgtC1INCx0L7Qu9GM0YjQtSDQvtC00L3QvtC5INGG0LjRhNGA0Ysg0LTQvtCx0LDQstC70Y/QtdC8INGB0LrQvtCx0LrRgyDQvtGC0LrRgNGL0YLQuNGPINC4INGC0LDQuiDQtNCw0LvQtdC1XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWUubGVuZ3RoID4gMSkge1xuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnKCcgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZygxLCA0KVxuICAgIH1cbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gNSkge1xuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnKSAnICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoNCwgNylcbiAgICB9XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWUubGVuZ3RoID49IDgpIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJy0nICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoNywgOSlcbiAgICB9XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWUubGVuZ3RoID49IDEwKSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICctJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDksIDExKTtcbiAgICB9XG4gIH0gZWxzZSB7IC8v0JXRgdC70Lgg0LLQstC+0LTQuNC80L7QtSDRh9C40YHQu9C+INC90LUgNywgOCDQuNC70LggOSDRgtC+0LPQtNCwINC00L7QsdCw0LLQu9GP0LXQvCAr0Lgg0LTQvtCx0LDQstC70Y/QtdC8INCy0LLQtdC00LXQvdC+0LUg0YfQuNGB0LvQvlxuICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSAnKzcgKDknICsgaW5wdXROdW1iZXJWYWx1ZTtcbiAgfVxuICBpbnB1dC52YWx1ZSA9IGZvcm1hdHRlZElucHV0VmFsdWVcbn1cblxuZnVuY3Rpb24gb25lUGhvbmVLZXlEb3duIChlKSB7XG4gIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xuICBpZiAocmVnUGhvbmUoaW5wdXQpLmxlbmd0aCA9PSAxICYmIGUua2V5Q29kZSA9PT0gOCkge1xuICAgIGlucHV0LnZhbHVlID0gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0NsZWFyKGlucHV0LCBidG4pIHtcbiAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICBidG4uZGlzYWJsZWQgPSBmYWxzZVxuICB9IGVsc2Uge1xuICAgIGJ0bi5kaXNhYmxlZCA9IHRydWVcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhcklucHV0KGlucHV0KSB7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gY291bnRDaGFuZ2UoY291bnQsIGdvb2RzKSB7XG4gIGNvbnN0IHNwYW4gPSBjb3VudC5xdWVyeVNlbGVjdG9yKCdzcGFuJyk7XG4gIGNvbnN0IG1pbnVzID0gY291bnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gIGNvbnN0IHBsdXMgPSBjb3VudC5sYXN0RWxlbWVudENoaWxkO1xuXG4gIG1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihzcGFuLnRleHRDb250ZW50KSAtIDFcbiAgICBzcGFuLnRleHRDb250ZW50ID0gbnVtO1xuICAgIGlmICghIWdvb2RzKSB7XG4gICAgICBnb29kcy50ZXh0Q29udGVudCA9IGAke251bX0g0YjRgi5gXG4gICAgfVxuICAgIGRpc2FibGVkTWludXMobnVtLCBtaW51cylcbiAgfSlcblxuICBwbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG51bSA9IE51bWJlcihzcGFuLnRleHRDb250ZW50KSArIDFcbiAgICBzcGFuLnRleHRDb250ZW50ID0gbnVtO1xuICAgIGlmICghIWdvb2RzKSB7XG4gICAgICBnb29kcy50ZXh0Q29udGVudCA9IGAke251bX0g0YjRgi5gXG4gICAgfVxuICAgIGRpc2FibGVkTWludXMobnVtLCBtaW51cylcbiAgfSlcbn1cblxuZnVuY3Rpb24gZGlzYWJsZWRNaW51cyhudW0sIGJ0bikge1xuICBpZiAobnVtIDwgMSkge1xuICAgIGJ0bi5kaXNhYmxlZCA9IHRydWVcbiAgfSBlbHNlIHtcbiAgICBidG4uZGlzYWJsZWQgPSBmYWxzZVxuICB9XG59XG5cbmZ1bmN0aW9uIGFjY29yZGlvbkFjdGl2ZShpdGVtKSB7XG4gIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaXMtc2hvd1wiKTtcbiAgbGV0IHBhbmVsID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGlmICghcGFuZWwuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gcGFuZWwuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFjY29yZGlvbk5vdEFjdGl2ZShpdGVtKSB7XG4gIGl0ZW0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtc2hvd1wiKTtcbiAgbGV0IHBhbmVsID0gaXRlbS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIGlmIChwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBudWxsXG4gIH1cbn1cblxuZnVuY3Rpb24gb3BlbkNvdW50ZXIoYnRuLCBjb3VudGVyKSB7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKFwibm90LWFjdGl2ZVwiKTtcbiAgY291bnRlci5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG59XG5cbmZ1bmN0aW9uIGNsb3NlQ291bnRlcihidG4sIGNvdW50ZXIpIHtcbiAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJub3QtYWN0aXZlXCIpO1xuICBjb3VudGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbn1cblxuZnVuY3Rpb24gY2hhbmdlQ291bnRlcihzcGFuLCBidG4sIGNvdW50ZXIsIG9wZXJhdG9yKSB7XG5cbiAgbGV0IG51bSA9IE51bWJlcihzcGFuLnRleHRDb250ZW50KTtcblxuICBpZiAob3BlcmF0b3IgPT09IFwicGx1c1wiKSB7XG4gICAgbnVtICs9IDFcbiAgfSBlbHNlIHtcbiAgICBudW0gLT0xXG4gIH1cblxuICBudW0gPCAxID8gY2xvc2VDb3VudGVyKGJ0biwgY291bnRlcikgOiBzcGFuLnRleHRDb250ZW50ID0gbnVtXG59XG5cbmZ1bmN0aW9uIHByb2R1Y3RDYXJkKCkge1xuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuanMtY2FyZFwiKTtcbiAgY2FyZHMuZm9yRWFjaChlbGVtID0+IHtcbiAgICBjb25zdCBidG5XcmFwID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtYnRuc1wiKVxuICAgIGNvbnN0IGJ0biA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLWFkZFwiKVxuICAgIGNvbnN0IGNvdW50ZXIgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1jb3VudGVyXCIpXG4gICAgY29uc3QgY291bnQgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpO1xuICAgIGNvbnN0IG1pbnVzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtbWludXNcIik7XG4gICAgY29uc3QgcGx1cyA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLXBsdXNcIik7XG5cbiAgICBidG5XcmFwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KVxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge29wZW5Db3VudGVyKGJ0biwgY291bnRlcil9KTtcblxuICAgIG1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7Y2hhbmdlQ291bnRlcihjb3VudCwgYnRuLCBjb3VudGVyLCBcIm1pbnVzXCIpfSlcblxuICAgIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwicGx1c1wiKX0pXG4gIH0pXG59Il19
