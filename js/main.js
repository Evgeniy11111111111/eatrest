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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNsaWRlck9uZSIsImluaXRTd2lwZXIiLCJzbGlkZXJUd28iLCJzbGlkZXJUaHJlZSIsInNsaWRlckZvdXIiLCJzbGlkZXJGaXZlIiwiYnRuU29ydCIsInF1ZXJ5U2VsZWN0b3IiLCJzb3J0TW9kYWwiLCJzY3JvbGxTb3J0IiwiYnRuRmlsdGVyIiwiZmlsdGVyTW9kYWwiLCJzY3JvbGxGaWx0ZXIiLCJhZGRFdmVudExpc3RlbmVyIiwib3Blbk1vZGFsIiwic2V0dXBNb2RhbEV2ZW50cyIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXJCdG4iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ0biIsImVsZW0iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJyZXN0YXVyYW50c0ZpbHRlckJ0biIsImlucHV0U2VhcmNoIiwiYnRuQ2xlYXJTZWFyY2giLCJzaG93Q2xlYXIiLCJjbGVhcklucHV0IiwiYWRkcmVzc0J0biIsImFkZEJ0biIsImFkZHJlc3NTZWFyY2giLCJwYXJlbnRFbGVtZW50IiwiY29udGFpbnMiLCJhY2NvcmRpb25Ob3RBY3RpdmUiLCJhY2NvcmRpb25BY3RpdmUiLCJlIiwidGFyZ2V0IiwiYm9keSIsInRlbCIsImlucHV0UGhvbmUiLCJvbmVQaG9uZUtleURvd24iLCJiYXNrZXREZWxldGUiLCJtb2RhbERlbGV0ZSIsImJvb3RzdHJhcCIsIk1vZGFsIiwiY2FyZHMiLCJjb3VudCIsImNhcmQiLCJjb3VudGVyIiwiZ29vZHMiLCJjb3VudENoYW5nZSIsInNob3ciLCJzbGlkZXIiLCJtb2RhbFBob25lIiwiY2hhbmdlUGhvbmVCdG4iLCJwaG9uZU51bSIsImlucHV0VGVsIiwiaW5wdXRCdG4iLCJrZXlDb2RlIiwidGV4dENvbnRlbnQiLCJ2YWx1ZSIsImJ0bnMiLCJpbmRleCIsImluZGV4RWxlbSIsImFkZEFkZHJlc3MiLCJtb2RhbCIsImlucHV0U2VhcmNoQnRuIiwibW9kYWxOYW1lIiwiY2hhbmdlTmFtZUJ0biIsIm5hbWVTcGFuIiwiaW5wdXROYW1lIiwia2V5IiwicHJvZHVjdENhcmQiLCJzd2lwZXIiLCJzd2lwZXIyIiwic3dpcGVyMyIsIlN3aXBlciIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJtaW51cyIsInBsdXMiLCJvcGVuQ291bnRlciIsImNoYW5nZUNvdW50ZXIiLCJjb250YWluZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJldmVudCIsImhhbmRsZVRvdWNoU3RhcnQiLCJzdGFydFkiLCJ0b3VjaGVzIiwiY2xpZW50WSIsImhhbmRsZVRvdWNoTW92ZSIsImVuZFkiLCJkZWx0YVkiLCJjbG9zZXN0IiwiaGFuZGxlTW91c2VEb3duIiwiaXNEcmFnZ2luZyIsImhhbmRsZU1vdXNlTW92ZSIsInN0eWxlIiwiYm90dG9tIiwiaGFuZGxlTW91c2VVcCIsInNjcm9sbENvbnRlaW5lciIsInJlZ1Bob25lIiwiaW5wdXQiLCJyZXBsYWNlIiwiaW5wdXROdW1iZXJWYWx1ZSIsImZvcm1hdHRlZElucHV0VmFsdWUiLCJzZWxlY3Rpb25TdGFydCIsImxlbmd0aCIsImRhdGEiLCJ0ZXN0IiwiaW5jbHVkZXMiLCJmaXJzdFN5bWJvbCIsInN1YnN0cmluZyIsImRpc2FibGVkIiwic3BhbiIsImZpcnN0RWxlbWVudENoaWxkIiwibGFzdEVsZW1lbnRDaGlsZCIsIm51bSIsIk51bWJlciIsImRpc2FibGVkTWludXMiLCJpdGVtIiwicGFuZWwiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJtYXhIZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJjbG9zZUNvdW50ZXIiLCJvcGVyYXRvciIsImJ0bldyYXAiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBSixFQUFzQztFQUNwQyxJQUFNQyxTQUFTLEdBQUdDLFVBQVUsQ0FBQyx1QkFBRCxDQUE1QjtFQUNBLElBQU1DLFNBQVMs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LElBQUksRUFBSTtJQUNwQixJQUFNNEcsT0FBTyxHQUFHNUcsSUFBSSxDQUFDZixhQUFMLENBQW1CLGVBQW5CLENBQWhCO0lBQ0EsSUFBTWMsR0FBRyxHQUFHQyxJQUFJLENBQUNmLGFBQUwsQ0FBbUIsY0FBbkIsQ0FBWjtJQUNBLElBQU00QyxPQUFPLEdBQUc3QixJQUFJLENBQUNmLGFBQUwsQ0FBbUIsa0JBQW5CLENBQWhCO0lBQ0EsSUFBTTBDLEtBQUssR0FBR0UsT0FBTyxDQUFDNUMsYUFBUixDQUFzQixNQUF0QixDQUFkO0lBQ0EsSUFBTTJFLEtBQUssR0FBRy9CLE9BQU8sQ0FBQzVDLGFBQVIsQ0FBc0IsZ0JBQXRCLENBQWQ7SUFDQSxJQUFNNEUsSUFBSSxHQUFHaEMsT0FBTyxDQUFDNUMsYUFBUixDQUFzQixlQUF0QixDQUFiO0lBRUEySCxPQUFPLENBQUNySCxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxVQUFBeUIsQ0FBQyxFQUFJO01BQ3JDQSxDQUFDLENBQUM2RixjQUFGO0lBQ0QsQ0FGRDtJQUdBOUcsR0FBRyxDQUFDUixnQkFBSixDQUFxQixPQUFyQixFQUE4QixZQUFNO01BQUN1RSxXQUFXLENBQUMvRCxHQUFELEVBQU04QixPQUFOLENBQVg7SUFBMEIsQ0FBL0Q7SUFFQStCLEtBQUssQ0FBQ3JFLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFlBQU07TUFBQ3dFLGFBQWEsQ0FBQ3BDLEtBQUQsRUFBUTVCLEdBQVIsRUFBYThCLE9BQWIsRUFBc0IsT0FBdEIsQ0FBYjtJQUE0QyxDQUFuRjtJQUVBZ0MsSUFBSSxDQUFDdEUsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtNQUFDd0UsYUFBYSxDQUFDcEMsS0FBRCxFQUFRNUIsR0FBUixFQUFhOEIsT0FBYixFQUFzQixNQUF0QixDQUFiO0lBQTJDLENBQWpGO0VBQ0QsQ0FoQkQ7QUFpQkQiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImluZGV4XCIpKSB7XG4gIGNvbnN0IHNsaWRlck9uZSA9IGluaXRTd2lwZXIoXCIubWFpbi1zdG9ja19fc3dpcGVyLTFcIilcbiAgY29uc3Qgc2xpZGVyVHdvID0gaW5pdFN3aXBlcihcIi5tYWluLXN0b2NrX19zd2lwZXItMlwiKVxuICBjb25zdCBzbGlkZXJUaHJlZSA9IGluaXRTd2lwZXIoXCIubWFpbi1zdG9ja19fc3dpcGVyLTNcIilcbiAgY29uc3Qgc2xpZGVyRm91ciA9IGluaXRTd2lwZXIoXCIubWFpbi1zdG9ja19fc3dpcGVyLTRcIilcbiAgY29uc3Qgc2xpZGVyRml2ZSA9IGluaXRTd2lwZXIoXCIubWFpbi1zdG9ja19fc3dpcGVyLTVcIilcblxuICBjb25zdCBidG5Tb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50c19fc29ydFwiKTtcbiAgY29uc3Qgc29ydE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nXCIpO1xuICBjb25zdCBzY3JvbGxTb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nX19ib3hcIilcbiAgY29uc3QgYnRuRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50c19fZmlsdGVyXCIpO1xuICBjb25zdCBmaWx0ZXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyXCIpO1xuICBjb25zdCBzY3JvbGxGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcl9fYm94XCIpO1xuICBidG5Tb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG9wZW5Nb2RhbChzb3J0TW9kYWwpXG4gIH0pXG4gIGJ0bkZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBvcGVuTW9kYWwoZmlsdGVyTW9kYWwpXG4gIH0pXG5cbiAgc2V0dXBNb2RhbEV2ZW50cyhzb3J0TW9kYWwsIHNjcm9sbFNvcnQpXG4gIHNldHVwTW9kYWxFdmVudHMoZmlsdGVyTW9kYWwsIHNjcm9sbEZpbHRlcilcbiAgY29uc29sZS5sb2coc2Nyb2xsU29ydClcblxuICBjb25zdCBmaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19idG4nKTtcblxuICBmaWx0ZXJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGZpbHRlckJ0bi5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKVxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB9KVxuICB9KVxuXG4gIGNvbnN0IHJlc3RhdXJhbnRzRmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3RhdXJhbnRzX19maWx0ZXJzLWJ0bicpXG5cbiAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlc3RhdXJhbnRzRmlsdGVyQnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19pbnB1dCcpO1xuICBjb25zdCBidG5DbGVhclNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3NlYXJjaC1jbGVhcicpXG4gIGlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge3Nob3dDbGVhcihpbnB1dFNlYXJjaCwgYnRuQ2xlYXJTZWFyY2gpfSlcbiAgYnRuQ2xlYXJTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjbGVhcklucHV0KGlucHV0U2VhcmNoKVxuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgYnRuQ2xlYXJTZWFyY2gpXG4gIH0pXG5cbiAgY29uc3QgYWRkcmVzc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2FkZHJlc3MtYnRuJylcbiAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYWRkcmVzcy1hZGQnKVxuICBjb25zdCBhZGRyZXNzU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYWRkcmVzcy1zZWFyY2gnKVxuXG4gIGFkZHJlc3NCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkcmVzc0J0bi5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImlzLXNob3dcIikgPyBhY2NvcmRpb25Ob3RBY3RpdmUoYWRkcmVzc0J0bikgOiBhY2NvcmRpb25BY3RpdmUoYWRkcmVzc0J0bilcbiAgfSlcblxuICBhZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFzb3J0TW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFidG5Tb3J0LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgc29ydE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghZmlsdGVyTW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFidG5GaWx0ZXIuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBmaWx0ZXJNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWFkZHJlc3NCdG4ucGFyZW50RWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGFjY29yZGlvbk5vdEFjdGl2ZShhZGRyZXNzQnRuKVxuICAgICAgYWRkcmVzc1NlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1dGhvcml6YXRpb25cIikpIHtcbiAgY29uc3QgdGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hdXRob3JpemF0aW9uX19pbnB1dFt0eXBlPSd0ZWwnXVwiKTtcbiAgdGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge2lucHV0UGhvbmUoZSl9KVxuICB0ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtvbmVQaG9uZUtleURvd24oZSl9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiYXNrZXRcIikpIHtcbiAgY29uc3QgYmFza2V0RGVsZXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhc2tldF9faGVhZGVyLWRlbGV0ZScpO1xuICBjb25zdCBtb2RhbERlbGV0ZSA9IG5ldyBib290c3RyYXAuTW9kYWwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1tb2RhbC1kZWxldGVcIikpXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJhc2tldF9fc2VsZWN0ZWQtaXRlbScpXG5cbiAgY29uc3QgY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19jb3VudC1jb3VudCcpXG5cbiAgY2FyZHMuZm9yRWFjaChjYXJkID0+IHtcbiAgICBjb25zdCBjb3VudGVyID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19zZWxlY3RlZC1pdGVtLWNvdW50ZXInKVxuICAgIGNvbnN0IGdvb2RzID0gY2FyZC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19zZWxlY3RlZC1pdGVtLWNvdW50JylcbiAgICBjb3VudENoYW5nZShjb3VudGVyLCBnb29kcyk7XG4gIH0pXG5cbiAgYmFza2V0RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge21vZGFsRGVsZXRlLnNob3coKX0pXG5cbiAgY29uc3Qgc2xpZGVyID0gaW5pdFN3aXBlcihcIi5iYXNrZXRfX3N3aXBlclwiKVxuXG4gIGNvdW50Q2hhbmdlKGNvdW50KVxuXG4gIGNvbnN0IG1vZGFsUGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1tb2RhbFwiKVxuICBjb25zdCBjaGFuZ2VQaG9uZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLXBob25lXCIpXG4gIGNvbnN0IHBob25lTnVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tcGhvbmUtbnVtXCIpXG4gIGNvbnN0IGlucHV0VGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tbW9kYWwtaW5wdXRcIilcbiAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1tb2RhbC1idG5cIilcblxuICBpbnB1dFRlbC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKGUpID0+IHtpbnB1dFBob25lKGUpfSlcbiAgaW5wdXRUZWwuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBvbmVQaG9uZUtleURvd24oZSlcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgcGhvbmVOdW0udGV4dENvbnRlbnQgPSBpbnB1dFRlbC52YWx1ZVxuICAgICAgaW5wdXRUZWwudmFsdWUgPSAnJ1xuICAgICAgbW9kYWxQaG9uZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbiAgaW5wdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwaG9uZU51bS50ZXh0Q29udGVudCA9IGlucHV0VGVsLnZhbHVlXG4gICAgaW5wdXRUZWwudmFsdWUgPSAnJ1xuICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBjaGFuZ2VQaG9uZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoIW1vZGFsUGhvbmUuY29udGFpbnMoZS50YXJnZXQpICYmICFjaGFuZ2VQaG9uZUJ0bi5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Y2Nlc3NcIikpIHtcbiAgY29uc3Qgc2xpZGVyID0gaW5pdFN3aXBlcihcIi5zdWNjZXNzX19vcmRlcmVkLXN3aXBlclwiKVxuXG4gIGNvbnN0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3VjY2Vzc19fZ3JhZGUtc3RhcicpO1xuICBidG5zLmZvckVhY2goKGJ0biwgaW5kZXgpID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBidG5zLmZvckVhY2goKGVsZW0sIGluZGV4RWxlbSkgPT4ge1xuICAgICAgICBpZiAoaW5kZXhFbGVtIDw9IGluZGV4KSB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB9IGVsc2UgIHtcbiAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxuXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY291bnRcIikpIHtcbiAgY29uc3QgYWRkQWRkcmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19hZGRyZXNzLWFkZCcpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19hZGRyZXNzLXNlYXJjaCcpO1xuICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19hZGRyZXNzLXNlYXJjaC1pbnB1dCcpXG4gIGNvbnN0IGlucHV0U2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFjY291bnRfX2FkZHJlc3Mtc2VhcmNoLWJ0bicpXG5cbiAgYWRkQWRkcmVzcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICB9KVxuXG4gIGlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBpbnB1dFNlYXJjaEJ0bikpXG4gIGlucHV0U2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFySW5wdXQoaW5wdXRTZWFyY2gpXG4gICAgc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBpbnB1dFNlYXJjaEJ0bilcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFtb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWFkZEFkZHJlc3MuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBtb2RhbE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbW9kYWxcIilcbiAgY29uc3QgY2hhbmdlTmFtZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWNjb3VudF9faW5mby1uYW1lLXdyYXBcIilcbiAgY29uc3QgbmFtZVNwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbmFtZVwiKVxuICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbW9kYWwtaW5wdXRcIilcbiAgY29uc3QgaW5wdXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbW9kYWwtYnRuXCIpXG5cbiAgaW5wdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IGlucHV0TmFtZS52YWx1ZVxuICAgIGlucHV0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgaW5wdXROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICBuYW1lU3Bhbi50ZXh0Q29udGVudCA9IGlucHV0TmFtZS52YWx1ZVxuICAgICAgaW5wdXROYW1lLnZhbHVlID0gXCJcIjtcbiAgICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcblxuICBjaGFuZ2VOYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKCFtb2RhbE5hbWUuY29udGFpbnMoZS50YXJnZXQpICYmICFjaGFuZ2VOYW1lQnRuLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgbW9kYWxOYW1lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdG9ja1wiKSkge1xuICBjb25zdCBzbGlkZXJPbmUgPSBpbml0U3dpcGVyKCcuc3RvY2tfX2Jsb2NrLXN3aXBlcicpXG4gIGNvbnN0IHNsaWRlclR3byA9IGluaXRTd2lwZXIoJy5zdG9ja19fYmxvY2stc3dpcGVyLTInKVxuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdGF1cmFudFwiKSkge1xuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbiAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRfX3NldHRpbmdzLXNlYXJjaC1pbnB1dFwiKVxuICBjb25zdCBpbnB1dFNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudF9fc2V0dGluZ3Mtc2VhcmNoLWJ0blwiKVxuICBjb25zdCBidG5Tb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50X19zZXR0aW5ncy1zb3J0XCIpO1xuICBjb25zdCBzb3J0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdcIik7XG4gIGNvbnN0IHNjcm9sbFNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNvcnRpbmdfX2JveFwiKVxuICBjb25zdCBidG5GaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRfX3NldHRpbmdzLWZpbHRlclwiKTtcbiAgY29uc3QgZmlsdGVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlclwiKTtcbiAgY29uc3Qgc2Nyb2xsRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5maWx0ZXJfX2JveFwiKTtcblxuXG4gIGlucHV0U2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4gc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBpbnB1dFNlYXJjaEJ0bikpXG4gIGlucHV0U2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFySW5wdXQoaW5wdXRTZWFyY2gpXG4gICAgc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBpbnB1dFNlYXJjaEJ0bilcbiAgfSlcblxuXG4gIGJ0blNvcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3Blbk1vZGFsKHNvcnRNb2RhbClcbiAgfSlcbiAgYnRuRmlsdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG9wZW5Nb2RhbChmaWx0ZXJNb2RhbClcbiAgfSlcblxuICBzZXR1cE1vZGFsRXZlbnRzKHNvcnRNb2RhbCwgc2Nyb2xsU29ydClcbiAgc2V0dXBNb2RhbEV2ZW50cyhmaWx0ZXJNb2RhbCwgc2Nyb2xsRmlsdGVyKVxuXG4gIGNvbnN0IGZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2J0bicpO1xuXG4gIGZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZmlsdGVyQnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghc29ydE1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuU29ydC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIHNvcnRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIWZpbHRlck1vZGFsLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhYnRuRmlsdGVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgZmlsdGVyTW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHJlc3RhdXJhbnRzRmlsdGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc3RhdXJhbnRfX3NldHRpbmdzLWZpbHRlcnMtYnRuJylcblxuICByZXN0YXVyYW50c0ZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBzd2lwZXIgID0gaW5pdFN3aXBlcignLnJlc3RhdXJhbnRfX3N0b2NrLXN3aXBlcicpXG4gIGNvbnN0IHN3aXBlcjIgPSBpbml0U3dpcGVyKCcucmVzdGF1cmFudF9fb2ZmZXJzLXN3aXBlcicpXG4gIGNvbnN0IHN3aXBlcjMgPSBpbml0U3dpcGVyKCcucmVzdGF1cmFudF9fb2ZmZXJzLXN3aXBlci0yJylcblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9kdWN0XCIpKSB7XG4gIGNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoXCIucHJvZHVjdF9fdG9wLXN3aXBlclwiLCB7XG4gICAgc2xpZGVzUGVyVmlldzogXCJhdXRvXCIsXG4gICAgc3BhY2VCZXR3ZWVuOiAxMFxuICB9KVxuXG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmRcIikpIHtcbiAgICBwcm9kdWN0Q2FyZCgpO1xuICB9XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtYWRkXCIpXG4gIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1jb3VudGVyXCIpXG4gIGNvbnN0IGNvdW50ID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbiAgY29uc3QgbWludXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWNvdW50ZXItbWludXNcIik7XG4gIGNvbnN0IHBsdXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWNvdW50ZXItcGx1c1wiKTtcblxuICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtvcGVuQ291bnRlcihidG4sIGNvdW50ZXIpfSk7XG5cbiAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwibWludXNcIil9KVxuXG4gIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwicGx1c1wiKX0pXG5cbiAgY29uc3Qgc3dpcGVyMiA9IGluaXRTd2lwZXIoXCIucHJvZHVjdF9fYWRkaXRpb25hbC1zd2lwZXJcIilcbiAgY29uc3Qgc3dpcGVyMyA9IGluaXRTd2lwZXIoXCIucHJvZHVjdF9fYWRkaXRpb25hbC1zd2lwZXItMlwiKVxufVxuLy8g0KTRg9C90LrRhtC40LhcbmZ1bmN0aW9uIGluaXRTd2lwZXIoY29udGFpbmVyKSB7XG4gIHJldHVybiBuZXcgU3dpcGVyKGNvbnRhaW5lciwge1xuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgfSlcbn1cblxuZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KGV2ZW50KSB7XG4gIHRoaXMuc3RhcnRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoZXZlbnQpIHtcbiAgbGV0IGVuZFkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4gIGxldCBkZWx0YVkgPSBlbmRZIC0gdGhpcy5zdGFydFk7XG4gIC8vINCf0YDQvtCy0LXRgNC60LAsINC90LDRhdC+0LTQuNGC0YHRjyDQu9C4INGN0LvQtdC80LXQvdGCINCyINC60L7QvdGC0LXQudC90LXRgNC1LCDQutC+0YLQvtGA0YvQuSDQvNC+0LbQvdC+INC/0YDQvtC60YDRg9GH0LjQstCw0YLRjFxuICBpZiAoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zb3J0aW5nX19ib3gnKSAmJiBkZWx0YVkgIT09IDApIHtcbiAgICAvLyDQl9Cw0L/RgNC10YLQuNGC0Ywg0LfQsNC60YDRi9GC0LjQtSDQvNC+0LTQsNC70YzQvdC+0LPQviDQvtC60L3QsCwg0LXRgdC70Lgg0L/RgNC+0LrRgNGD0YLQutCwINCy0L3Rg9GC0YDQuCAuc29ydGluZ19fYm94XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0gZWxzZSBpZiAoZGVsdGFZIDwgLTUwKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duKGV2ZW50KSB7XG4gIHRoaXMuc3RhcnRZID0gZXZlbnQuY2xpZW50WTtcbiAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlKGV2ZW50KSB7XG4gIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICBsZXQgZW5kWSA9IGV2ZW50LmNsaWVudFk7XG4gICAgbGV0IGRlbHRhWSA9IGVuZFkgLSB0aGlzLnN0YXJ0WTtcbiAgICBpZiAoZGVsdGFZID4gMCkge1xuICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSAtZGVsdGFZICsgXCJweFwiO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZVVwKGV2ZW50KSB7XG4gIGlmICh0aGlzLmlzRHJhZ2dpbmcpIHtcbiAgICBsZXQgZW5kWSA9IGV2ZW50LmNsaWVudFk7XG4gICAgbGV0IGRlbHRhWSA9IGVuZFkgLSB0aGlzLnN0YXJ0WTtcbiAgICBpZiAoZGVsdGFZID4gNTApIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSBcIjBcIjtcbiAgICB9XG4gICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0dXBNb2RhbEV2ZW50cyhtb2RhbCwgc2Nyb2xsQ29udGVpbmVyKSB7XG5cblxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RvcFByb3BhZ2F0aW9uLCBmYWxzZSk7XG4gIHNjcm9sbENvbnRlaW5lci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBzdG9wUHJvcGFnYXRpb24sIGZhbHNlKTtcbiAgc2Nyb2xsQ29udGVpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RvcFByb3BhZ2F0aW9uLCBmYWxzZSk7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGhhbmRsZVRvdWNoU3RhcnQsIGZhbHNlKTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBoYW5kbGVUb3VjaE1vdmUsIGZhbHNlKTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVNb3VzZURvd24sIGZhbHNlKTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBoYW5kbGVNb3VzZU1vdmUsIGZhbHNlKTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlTW91c2VVcCwgZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBvcGVuTW9kYWwobW9kYWwpIHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibG9ja1wiKVxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBtb2RhbC5zdHlsZS5ib3R0b20gPSBcIjBcIlxufVxuXG5mdW5jdGlvbiByZWdQaG9uZShpbnB1dCkge1xuICByZXR1cm4gaW5wdXQudmFsdWUucmVwbGFjZSgvXFxEL2csICcnKTtcbn1cblxuZnVuY3Rpb24gaW5wdXRQaG9uZShlKSB7XG4gIGxldCBpbnB1dCA9IGUudGFyZ2V0O1xuICBsZXQgaW5wdXROdW1iZXJWYWx1ZSA9IHJlZ1Bob25lKGlucHV0KTtcbiAgbGV0IGZvcm1hdHRlZElucHV0VmFsdWUgPSAnJztcbiAgbGV0IHNlbGVjdGlvblN0YXJ0ID0gaW5wdXQuc2VsZWN0aW9uU3RhcnRcbiAgLy8g0JXRgdC70Lgg0LIg0LjQvdC/0YPRgiDQstCy0LXQtNC10L3RiyDRgdC40LzQvtCy0LvRiyDQvdC1INGB0L7QvtGC0LLQtdGC0YHQstGD0Y7RidC40LUg0YDQtdCz0YPQu9GP0YDQutC4LCDRgtC+INC30L3QsNGH0LXQvdC40LUg0LjQvdC/0YPRgtCwINGB0YLQsNC90L7QstC40YLRgdGPINC/0YPRgdGC0YvQvFxuICBpZiAoIWlucHV0TnVtYmVyVmFsdWUpIHJldHVybiBpbnB1dC52YWx1ZSA9ICcnXG4gIC8vINCSINGN0YLQvtC5INGH0LDRgdGC0Lgg0Y8g0L3QtSDRgdC+0LLRgdC10Lwg0L/QvtC90LjQvNCw0Y4g0YfRgtC+INC/0YDQvtC40YHRhdC+0LTQuNGCXG4gIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggIT0gc2VsZWN0aW9uU3RhcnQpIHtcbiAgICBpZiAoZS5kYXRhICYmIC9cXEQvZy50ZXN0KGUuZGF0YSkpIHtcbiAgICAgIGlucHV0LnZhbHVlID0gaW5wdXROdW1iZXJWYWx1ZVxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChbJzcnLCAnOCcsICc5J10uaW5jbHVkZXMoaW5wdXROdW1iZXJWYWx1ZVswXSkpIHtcbiAgICAvLyDQldGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCDQtNC10LLRj9GC0YwsINGC0L7Qs9C00LAg0LzRiyDQt9Cw0LzQtdC90Y/QtdC8INC/0LXRgNCy0YPRjiDRhtC40YTRgNGDINC90LAgNyDQuCDQtNC10LLRj9GC0LrRgyDQtNC10LvQsNC10Lwg0LLRgtC+0YDQvtC5INGG0LjRhNGA0L7QuVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlWzBdID09ICc5JykgaW5wdXROdW1iZXJWYWx1ZSA9ICc3JyArIGlucHV0TnVtYmVyVmFsdWU7XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWVbMF0gPT0gJzgnKSBpbnB1dE51bWJlclZhbHVlID0gJzcnXG4gICAgLy8g0JXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAgNywg0YLQvtCz0LTQsCDQt9C90LDRh9C10L3QuNC1INC40L3Qv9GD0YLQsCDQvdCw0YfQuNC90LDQtdGC0YHRjyDRgSArNywg0LXRgdC70Lgg0L/QtdGA0LLQsNGPINGG0LjRhNGA0LAgOCwg0YLQvtCz0LTQsCDQt9C90LDRh9C10L3QuNC1INC90LDRh9C40L3QsNC10YLRgdGPINGBIDhcbiAgICBsZXQgZmlyc3RTeW1ib2wgPSAnKzcnO1xuICAgIGZvcm1hdHRlZElucHV0VmFsdWUgPSBmaXJzdFN5bWJvbCArICcgJztcbiAgICAvLyDQldGB0LvQuCDQsiDQuNC90L/Rg9GC0LUg0LHQvtC70YzRiNC1INC+0LTQvdC+0Lkg0YbQuNGE0YDRiyDQtNC+0LHQsNCy0LvRj9C10Lwg0YHQutC+0LHQutGDINC+0YLQutGA0YvRgtC40Y8g0Lgg0YLQsNC6INC00LDQu9C10LVcbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcoJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDEsIDQpXG4gICAgfVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+PSA1KSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICcpICcgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg0LCA3KVxuICAgIH1cbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gOCkge1xuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg3LCA5KVxuICAgIH1cbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZS5sZW5ndGggPj0gMTApIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJy0nICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoOSwgMTEpO1xuICAgIH1cbiAgfSBlbHNlIHsgLy/QldGB0LvQuCDQstCy0L7QtNC40LzQvtC1INGH0LjRgdC70L4g0L3QtSA3LCA4INC40LvQuCA5INGC0L7Qs9C00LAg0LTQvtCx0LDQstC70Y/QtdC8ICvQuCDQtNC+0LHQsNCy0LvRj9C10Lwg0LLQstC10LTQtdC90L7QtSDRh9C40YHQu9C+XG4gICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9ICcrNyAoOScgKyBpbnB1dE51bWJlclZhbHVlO1xuICB9XG4gIGlucHV0LnZhbHVlID0gZm9ybWF0dGVkSW5wdXRWYWx1ZVxufVxuXG5mdW5jdGlvbiBvbmVQaG9uZUtleURvd24gKGUpIHtcbiAgbGV0IGlucHV0ID0gZS50YXJnZXQ7XG4gIGlmIChyZWdQaG9uZShpbnB1dCkubGVuZ3RoID09IDEgJiYgZS5rZXlDb2RlID09PSA4KSB7XG4gICAgaW5wdXQudmFsdWUgPSAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93Q2xlYXIoaW5wdXQsIGJ0bikge1xuICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID4gMCkge1xuICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgYnRuLmRpc2FibGVkID0gdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFySW5wdXQoaW5wdXQpIHtcbiAgaW5wdXQudmFsdWUgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBjb3VudENoYW5nZShjb3VudCwgZ29vZHMpIHtcbiAgY29uc3Qgc3BhbiA9IGNvdW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgY29uc3QgbWludXMgPSBjb3VudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgY29uc3QgcGx1cyA9IGNvdW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG5cbiAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpIC0gMVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBudW07XG4gICAgaWYgKCEhZ29vZHMpIHtcbiAgICAgIGdvb2RzLnRleHRDb250ZW50ID0gYCR7bnVtfSDRiNGCLmBcbiAgICB9XG4gICAgZGlzYWJsZWRNaW51cyhudW0sIG1pbnVzKVxuICB9KVxuXG4gIHBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpICsgMVxuICAgIHNwYW4udGV4dENvbnRlbnQgPSBudW07XG4gICAgaWYgKCEhZ29vZHMpIHtcbiAgICAgIGdvb2RzLnRleHRDb250ZW50ID0gYCR7bnVtfSDRiNGCLmBcbiAgICB9XG4gICAgZGlzYWJsZWRNaW51cyhudW0sIG1pbnVzKVxuICB9KVxufVxuXG5mdW5jdGlvbiBkaXNhYmxlZE1pbnVzKG51bSwgYnRuKSB7XG4gIGlmIChudW0gPCAxKSB7XG4gICAgYnRuLmRpc2FibGVkID0gdHJ1ZVxuICB9IGVsc2Uge1xuICAgIGJ0bi5kaXNhYmxlZCA9IGZhbHNlXG4gIH1cbn1cblxuZnVuY3Rpb24gYWNjb3JkaW9uQWN0aXZlKGl0ZW0pIHtcbiAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpcy1zaG93XCIpO1xuICBsZXQgcGFuZWwgPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKCFwYW5lbC5zdHlsZS5tYXhIZWlnaHQpIHtcbiAgICBwYW5lbC5zdHlsZS5tYXhIZWlnaHQgPSBwYW5lbC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWNjb3JkaW9uTm90QWN0aXZlKGl0ZW0pIHtcbiAgaXRlbS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1zaG93XCIpO1xuICBsZXQgcGFuZWwgPSBpdGVtLm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKHBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xuICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IG51bGxcbiAgfVxufVxuXG5mdW5jdGlvbiBvcGVuQ291bnRlcihidG4sIGNvdW50ZXIpIHtcbiAgYnRuLmNsYXNzTGlzdC5hZGQoXCJub3QtYWN0aXZlXCIpO1xuICBjb3VudGVyLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbn1cblxuZnVuY3Rpb24gY2xvc2VDb3VudGVyKGJ0biwgY291bnRlcikge1xuICBidG4uY2xhc3NMaXN0LnJlbW92ZShcIm5vdC1hY3RpdmVcIik7XG4gIGNvdW50ZXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VDb3VudGVyKHNwYW4sIGJ0biwgY291bnRlciwgb3BlcmF0b3IpIHtcblxuICBsZXQgbnVtID0gTnVtYmVyKHNwYW4udGV4dENvbnRlbnQpO1xuXG4gIGlmIChvcGVyYXRvciA9PT0gXCJwbHVzXCIpIHtcbiAgICBudW0gKz0gMVxuICB9IGVsc2Uge1xuICAgIG51bSAtPTFcbiAgfVxuXG4gIG51bSA8IDEgPyBjbG9zZUNvdW50ZXIoYnRuLCBjb3VudGVyKSA6IHNwYW4udGV4dENvbnRlbnQgPSBudW1cbn1cblxuZnVuY3Rpb24gcHJvZHVjdENhcmQoKSB7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1jYXJkXCIpO1xuICBjYXJkcy5mb3JFYWNoKGVsZW0gPT4ge1xuICAgIGNvbnN0IGJ0bldyYXAgPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1idG5zXCIpXG4gICAgY29uc3QgYnRuID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtYWRkXCIpXG4gICAgY29uc3QgY291bnRlciA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLWNvdW50ZXJcIilcbiAgICBjb25zdCBjb3VudCA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4gICAgY29uc3QgbWludXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1taW51c1wiKTtcbiAgICBjb25zdCBwbHVzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtcGx1c1wiKTtcblxuICAgIGJ0bldyYXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7b3BlbkNvdW50ZXIoYnRuLCBjb3VudGVyKX0pO1xuXG4gICAgbWludXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtjaGFuZ2VDb3VudGVyKGNvdW50LCBidG4sIGNvdW50ZXIsIFwibWludXNcIil9KVxuXG4gICAgcGx1cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2NoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJwbHVzXCIpfSlcbiAgfSlcbn0iXX0=
