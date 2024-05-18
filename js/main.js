"use strict";

if (document.getElementById("index")) {
  initArraySwiper();
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
  initArraySwiper();
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
  initArraySwiper();
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
  initArraySwiper();

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

  _btnSort.addEventListener('click', function (e) {
    e.stopPropagation();
    openModal(_sortModal);
    document.body.classList.add('lock');

    if (_filterModal.classList.contains("active")) {
      _filterModal.classList.remove("active");
    }
  });

  _btnFilter.addEventListener('click', function (e) {
    e.stopPropagation();
    openModal(_filterModal);
    document.body.classList.add('lock');

    if (_sortModal.classList.contains("active")) {
      _sortModal.classList.remove("active");
    }
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

  initArraySwiper();
}

if (document.getElementById("product")) {
  var swiper = new Swiper(".product__top-swiper", {
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
  initArraySwiper();
} // Функции


function initSwiper(container) {
  return new Swiper(container, {
    slidesPerView: "auto",
    spaceBetween: 20
  });
}

function initArraySwiper() {
  if (document.querySelector(".js-swiper-init")) {
    var swiperBlock = document.querySelectorAll(".js-swiper-init");
    swiperBlock.forEach(function (elem) {
      var swiper = initSwiper(elem);
    });
  }
}

function stopPropagation(event) {
  event.stopPropagation();
}

function handleTouchStart(event) {
  this.startY = event.touches[0].clientY;
} // function handleTouchMove(event) {
//   let endY = event.touches[0].clientY;
//   let deltaY = endY - this.startY;
//   if (deltaY > 0) {
//     this.style.bottom = -deltaY + "px";
//   } else if (deltaY > 200) {
//     this.classList.remove("active");
//     document.body.classList.remove("lock")
//   }
//   this.startY = null
// }


function handleTouchMove(event) {
  var endY = event.touches[0].clientY;

  if (endY > this.startY) {
    this.classList.remove("active");
    setTimeout(function () {
      document.body.classList.remove("lock");
    }, 300);
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
  scroll.addEventListener("touchmove", stopPropagation);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImluaXRBcnJheVN3aXBlciIsImJ0blNvcnQiLCJxdWVyeVNlbGVjdG9yIiwic29ydE1vZGFsIiwic2Nyb2xsU29ydCIsImJ0bkZpbHRlciIsImZpbHRlck1vZGFsIiwic2Nyb2xsRmlsdGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJvcGVuTW9kYWwiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwiY29udGFpbnMiLCJyZW1vdmUiLCJzZXR1cE1vZGFsRXZlbnRzIiwiY29uc29sZSIsImxvZyIsImZpbHRlckJ0biIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnRuIiwiZWxlbSIsInJlc3RhdXJhbnRzRmlsdGVyQnRuIiwiaW5wdXRTZWFyY2giLCJidG5DbGVhclNlYXJjaCIsInNob3dDbGVhciIsImNsZWFySW5wdXQiLCJhZGRyZXNzQnRuIiwiYWRkQnRuIiwiYWRkcmVzc1NlYXJjaCIsInBhcmVudEVsZW1lbnQiLCJhY2NvcmRpb25Ob3RBY3RpdmUiLCJhY2NvcmRpb25BY3RpdmUiLCJ0YXJnZXQiLCJ0ZWwiLCJpbnB1dFBob25lIiwib25lUGhvbmVLZXlEb3duIiwiYmFza2V0RGVsZXRlIiwibW9kYWxEZWxldGUiLCJib290c3RyYXAiLCJNb2RhbCIsImNhcmRzIiwiY291bnQiLCJjYXJkIiwiY291bnRlciIsImdvb2RzIiwiY291bnRDaGFuZ2UiLCJzaG93IiwibW9kYWxQaG9uZSIsImNoYW5nZVBob25lQnRuIiwicGhvbmVOdW0iLCJpbnB1dFRlbCIsImlucHV0QnRuIiwia2V5Q29kZSIsInRleHRDb250ZW50IiwidmFsdWUiLCJidG5zIiwiaW5kZXgiLCJpbmRleEVsZW0iLCJhZGRBZGRyZXNzIiwibW9kYWwiLCJpbnB1dFNlYXJjaEJ0biIsIm1vZGFsTmFtZSIsImNoYW5nZU5hbWVCdG4iLCJuYW1lU3BhbiIsImlucHV0TmFtZSIsImtleSIsInByb2R1Y3RDYXJkIiwic3dpcGVyIiwiU3dpcGVyIiwic2xpZGVzUGVyVmlldyIsInNwYWNlQmV0d2VlbiIsIm1pbnVzIiwicGx1cyIsIm9wZW5Db3VudGVyIiwiY2hhbmdlQ291bnRlciIsImluaXRTd2lwZXIiLCJjb250YWluZXIiLCJzd2lwZXJCbG9jayIsImV2ZW50IiwiaGFuZGxlVG91Y2hTdGFydCIsInN0YXJ0WSIsInRvdWNoZXMiLCJjbGllbnRZIiwiaGFuZGxlVG91Y2hNb3ZlIiwiZW5kWSIsInNldFRpbWVvdXQiLCJoYW5kbGVNb3VzZURvd24iLCJpc0RyYWdnaW5nIiwiaGFuZGxlTW91c2VNb3ZlIiwiZGVsdGFZIiwic3R5bGUiLCJib3R0b20iLCJoYW5kbGVNb3VzZVVwIiwic2Nyb2xsIiwicmVnUGhvbmUiLCJpbnB1dCIsInJlcGxhY2UiLCJpbnB1dE51bWJlclZhbHVlIiwiZm9ybWF0dGVkSW5wdXRWYWx1ZSIsInNlbGVjdGlvblN0YXJ0IiwibGVuZ3RoIiwiZGF0YSIsInRlc3QiLCJpbmNsdWRlcyIsImZpcnN0U3ltYm9sIiwic3Vic3RyaW5nIiwiZGlzYWJsZWQiLCJzcGFuIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJsYXN0RWxlbWVudENoaWxkIiwibnVtIiwiTnVtYmVyIiwiZGlzYWJsZWRNaW51cyIsIml0ZW0iLCJwYW5lbCIsIm5leHRFbGVtZW50U2libGluZyIsIm1heEhlaWdodCIsInNjcm9sbEhlaWdodCIsImNsb3NlQ291bnRlciIsIm9wZXJhdG9yIiwiYnRuV3JhcCIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFKLEVBQXNDO0VBQ3BDQyxlQUFlO0VBRWYsSUFBTUMsT0FBTyxHQUFHSCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsb0JBQXZCLENBQWhCO0VBQ0EsSUFBTUMsU0FBUyxHQUFHTCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBbEI7RUFD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QixLQUFLLENBQUNuRSxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxZQUFNO01BQUNzRSxhQUFhLENBQUNqQyxLQUFELEVBQVF0QixHQUFSLEVBQWF3QixPQUFiLEVBQXNCLE9BQXRCLENBQWI7SUFBNEMsQ0FBbkY7SUFFQTZCLElBQUksQ0FBQ3BFLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQU07TUFBQ3NFLGFBQWEsQ0FBQ2pDLEtBQUQsRUFBUXRCLEdBQVIsRUFBYXdCLE9BQWIsRUFBc0IsTUFBdEIsQ0FBYjtJQUEyQyxDQUFqRjtFQUNELENBaEJEO0FBaUJEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbmRleFwiKSkge1xuICBpbml0QXJyYXlTd2lwZXIoKTtcblxuICBjb25zdCBidG5Tb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50c19fc29ydFwiKTtcbiAgY29uc3Qgc29ydE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nXCIpO1xuICBjb25zdCBzY3JvbGxTb3J0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zb3J0aW5nX19ib3hcIilcbiAgY29uc3QgYnRuRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50c19fZmlsdGVyXCIpO1xuICBjb25zdCBmaWx0ZXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyXCIpO1xuICBjb25zdCBzY3JvbGxGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcl9fYm94XCIpO1xuICBidG5Tb3J0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgb3Blbk1vZGFsKHNvcnRNb2RhbClcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICAgIGlmIChmaWx0ZXJNb2RhbC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHtcbiAgICAgIGZpbHRlck1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9XG4gIH0pXG4gIGJ0bkZpbHRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIG9wZW5Nb2RhbChmaWx0ZXJNb2RhbClcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICAgIGlmIChzb3J0TW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBzb3J0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgIH1cbiAgfSlcblxuICBzZXR1cE1vZGFsRXZlbnRzKHNvcnRNb2RhbCwgc2Nyb2xsU29ydClcbiAgc2V0dXBNb2RhbEV2ZW50cyhmaWx0ZXJNb2RhbCwgc2Nyb2xsRmlsdGVyKVxuICBjb25zb2xlLmxvZyhzY3JvbGxTb3J0KVxuXG4gIGNvbnN0IGZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5maWx0ZXJfX2J0bicpO1xuXG4gIGZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZmlsdGVyQnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgY29uc3QgcmVzdGF1cmFudHNGaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVzdGF1cmFudHNfX2ZpbHRlcnMtYnRuJylcblxuICByZXN0YXVyYW50c0ZpbHRlckJ0bi5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChlbGVtID0+IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKSlcbiAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpXG4gICAgfSlcbiAgfSlcblxuICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2lucHV0Jyk7XG4gIGNvbnN0IGJ0bkNsZWFyU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VhcmNoLWNsZWFyJylcbiAgaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7c2hvd0NsZWFyKGlucHV0U2VhcmNoLCBidG5DbGVhclNlYXJjaCl9KVxuICBidG5DbGVhclNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNsZWFySW5wdXQoaW5wdXRTZWFyY2gpXG4gICAgc2hvd0NsZWFyKGlucHV0U2VhcmNoLCBidG5DbGVhclNlYXJjaClcbiAgfSlcblxuICBjb25zdCBhZGRyZXNzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYWRkcmVzcy1idG4nKVxuICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19hZGRyZXNzLWFkZCcpXG4gIGNvbnN0IGFkZHJlc3NTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19hZGRyZXNzLXNlYXJjaCcpXG5cbiAgYWRkcmVzc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRyZXNzQnRuLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtc2hvd1wiKSA/IGFjY29yZGlvbk5vdEFjdGl2ZShhZGRyZXNzQnRuKSA6IGFjY29yZGlvbkFjdGl2ZShhZGRyZXNzQnRuKVxuICB9KVxuXG4gIGFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBhZGRyZXNzU2VhcmNoLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIXNvcnRNb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWJ0blNvcnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBzb3J0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFmaWx0ZXJNb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWJ0bkZpbHRlci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGZpbHRlck1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghYWRkcmVzc0J0bi5wYXJlbnRFbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgYWNjb3JkaW9uTm90QWN0aXZlKGFkZHJlc3NCdG4pXG4gICAgICBhZGRyZXNzU2VhcmNoLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXV0aG9yaXphdGlvblwiKSkge1xuICBjb25zdCB0ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmF1dGhvcml6YXRpb25fX2lucHV0W3R5cGU9J3RlbCddXCIpO1xuICB0ZWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7aW5wdXRQaG9uZShlKX0pXG4gIHRlbC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge29uZVBob25lS2V5RG93bihlKX0pXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhc2tldFwiKSkge1xuICBjb25zdCBiYXNrZXREZWxldGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFza2V0X19oZWFkZXItZGVsZXRlJyk7XG4gIGNvbnN0IG1vZGFsRGVsZXRlID0gbmV3IGJvb3RzdHJhcC5Nb2RhbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmpzLW1vZGFsLWRlbGV0ZVwiKSlcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYmFza2V0X19zZWxlY3RlZC1pdGVtJylcblxuICBjb25zdCBjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRfX2NvdW50LWNvdW50JylcblxuICBjYXJkcy5mb3JFYWNoKGNhcmQgPT4ge1xuICAgIGNvbnN0IGNvdW50ZXIgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRfX3NlbGVjdGVkLWl0ZW0tY291bnRlcicpXG4gICAgY29uc3QgZ29vZHMgPSBjYXJkLnF1ZXJ5U2VsZWN0b3IoJy5iYXNrZXRfX3NlbGVjdGVkLWl0ZW0tY291bnQnKVxuICAgIGNvdW50Q2hhbmdlKGNvdW50ZXIsIGdvb2RzKTtcbiAgfSlcblxuICBiYXNrZXREZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7bW9kYWxEZWxldGUuc2hvdygpfSlcblxuICBpbml0QXJyYXlTd2lwZXIoKTtcblxuICBjb3VudENoYW5nZShjb3VudClcblxuICBjb25zdCBtb2RhbFBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tbW9kYWxcIilcbiAgY29uc3QgY2hhbmdlUGhvbmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJhc2tldF9fY29uZmlybS1waG9uZVwiKVxuICBjb25zdCBwaG9uZU51bSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLXBob25lLW51bVwiKVxuICBjb25zdCBpbnB1dFRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFza2V0X19jb25maXJtLW1vZGFsLWlucHV0XCIpXG4gIGNvbnN0IGlucHV0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYXNrZXRfX2NvbmZpcm0tbW9kYWwtYnRuXCIpXG5cbiAgaW5wdXRUZWwuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChlKSA9PiB7aW5wdXRQaG9uZShlKX0pXG4gIGlucHV0VGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgb25lUGhvbmVLZXlEb3duKGUpXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgIHBob25lTnVtLnRleHRDb250ZW50ID0gaW5wdXRUZWwudmFsdWVcbiAgICAgIGlucHV0VGVsLnZhbHVlID0gJydcbiAgICAgIG1vZGFsUGhvbmUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG4gIGlucHV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgcGhvbmVOdW0udGV4dENvbnRlbnQgPSBpbnB1dFRlbC52YWx1ZVxuICAgIGlucHV0VGVsLnZhbHVlID0gJydcbiAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgY2hhbmdlUGhvbmVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKCFtb2RhbFBob25lLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhY2hhbmdlUGhvbmVCdG4uY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBtb2RhbFBob25lLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWNjZXNzXCIpKSB7XG4gIGluaXRBcnJheVN3aXBlcigpO1xuICBjb25zdCBidG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1Y2Nlc3NfX2dyYWRlLXN0YXInKTtcbiAgYnRucy5mb3JFYWNoKChidG4sIGluZGV4KSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgYnRucy5mb3JFYWNoKChlbGVtLCBpbmRleEVsZW0pID0+IHtcbiAgICAgICAgaWYgKGluZGV4RWxlbSA8PSBpbmRleCkge1xuICAgICAgICAgIGVsZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgfSBlbHNlICB7XG4gICAgICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY2NvdW50XCIpKSB7XG4gIGNvbnN0IGFkZEFkZHJlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fYWRkcmVzcy1hZGQnKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fYWRkcmVzcy1zZWFyY2gnKTtcbiAgY29uc3QgaW5wdXRTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWNjb3VudF9fYWRkcmVzcy1zZWFyY2gtaW5wdXQnKVxuICBjb25zdCBpbnB1dFNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY2NvdW50X19hZGRyZXNzLXNlYXJjaC1idG4nKVxuXG4gIGFkZEFkZHJlc3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbiAgfSlcblxuICBpbnB1dFNlYXJjaC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHNob3dDbGVhcihpbnB1dFNlYXJjaCwgaW5wdXRTZWFyY2hCdG4pKVxuICBpbnB1dFNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjbGVhcklucHV0KGlucHV0U2VhcmNoKVxuICAgIHNob3dDbGVhcihpbnB1dFNlYXJjaCwgaW5wdXRTZWFyY2hCdG4pXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmICghbW9kYWwuY29udGFpbnMoZS50YXJnZXQpICYmICFhZGRBZGRyZXNzLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgbW9kYWxOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW1vZGFsXCIpXG4gIGNvbnN0IGNoYW5nZU5hbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFjY291bnRfX2luZm8tbmFtZS13cmFwXCIpXG4gIGNvbnN0IG5hbWVTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW5hbWVcIilcbiAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW1vZGFsLWlucHV0XCIpXG4gIGNvbnN0IGlucHV0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hY2NvdW50X19pbmZvLW1vZGFsLWJ0blwiKVxuXG4gIGlucHV0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBpbnB1dE5hbWUudmFsdWVcbiAgICBpbnB1dE5hbWUudmFsdWUgPSBcIlwiO1xuICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGlucHV0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgbmFtZVNwYW4udGV4dENvbnRlbnQgPSBpbnB1dE5hbWUudmFsdWVcbiAgICAgIGlucHV0TmFtZS52YWx1ZSA9IFwiXCI7XG4gICAgICBtb2RhbE5hbWUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pXG5cbiAgY2hhbmdlTmFtZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmICghbW9kYWxOYW1lLmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhY2hhbmdlTmFtZUJ0bi5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIG1vZGFsTmFtZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSlcbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3RvY2tcIikpIHtcbiAgaW5pdEFycmF5U3dpcGVyKCk7XG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZFwiKSkge1xuICAgIHByb2R1Y3RDYXJkKCk7XG4gIH1cblxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZXN0YXVyYW50XCIpKSB7XG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZFwiKSkge1xuICAgIHByb2R1Y3RDYXJkKCk7XG4gIH1cblxuICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudF9fc2V0dGluZ3Mtc2VhcmNoLWlucHV0XCIpXG4gIGNvbnN0IGlucHV0U2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXVyYW50X19zZXR0aW5ncy1zZWFyY2gtYnRuXCIpXG4gIGNvbnN0IGJ0blNvcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhdXJhbnRfX3NldHRpbmdzLXNvcnRcIik7XG4gIGNvbnN0IHNvcnRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ1wiKTtcbiAgY29uc3Qgc2Nyb2xsU29ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc29ydGluZ19fYm94XCIpXG4gIGNvbnN0IGJ0bkZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGF1cmFudF9fc2V0dGluZ3MtZmlsdGVyXCIpO1xuICBjb25zdCBmaWx0ZXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmlsdGVyXCIpO1xuICBjb25zdCBzY3JvbGxGaWx0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZpbHRlcl9fYm94XCIpO1xuXG5cbiAgaW5wdXRTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGlucHV0U2VhcmNoQnRuKSlcbiAgaW5wdXRTZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJJbnB1dChpbnB1dFNlYXJjaClcbiAgICBzaG93Q2xlYXIoaW5wdXRTZWFyY2gsIGlucHV0U2VhcmNoQnRuKVxuICB9KVxuXG5cbiAgYnRuU29ydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKVxuICAgIG9wZW5Nb2RhbChzb3J0TW9kYWwpXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2NrJylcbiAgICBpZiAoZmlsdGVyTW9kYWwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBmaWx0ZXJNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG4gICAgfVxuICB9KVxuICBidG5GaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBvcGVuTW9kYWwoZmlsdGVyTW9kYWwpXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2NrJylcbiAgICBpZiAoc29ydE1vZGFsLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgc29ydE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICB9XG4gIH0pXG5cbiAgc2V0dXBNb2RhbEV2ZW50cyhzb3J0TW9kYWwsIHNjcm9sbFNvcnQpXG4gIHNldHVwTW9kYWxFdmVudHMoZmlsdGVyTW9kYWwsIHNjcm9sbEZpbHRlcilcblxuICBjb25zdCBmaWx0ZXJCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZmlsdGVyX19idG4nKTtcblxuICBmaWx0ZXJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGZpbHRlckJ0bi5mb3JFYWNoKGVsZW0gPT4gZWxlbS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpKVxuICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIilcbiAgICB9KVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoIXNvcnRNb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWJ0blNvcnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICBzb3J0TW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH1cbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKCFmaWx0ZXJNb2RhbC5jb250YWlucyhlLnRhcmdldCkgJiYgIWJ0bkZpbHRlci5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgIGZpbHRlck1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIilcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcblxuICAgIH1cbiAgfSlcblxuICBjb25zdCByZXN0YXVyYW50c0ZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXN0YXVyYW50X19zZXR0aW5ncy1maWx0ZXJzLWJ0bicpXG5cbiAgcmVzdGF1cmFudHNGaWx0ZXJCdG4uZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlc3RhdXJhbnRzRmlsdGVyQnRuLmZvckVhY2goZWxlbSA9PiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIikpXG4gICAgICBidG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxuICAgIH0pXG4gIH0pXG5cbiAgaW5pdEFycmF5U3dpcGVyKCk7XG5cbn1cblxuaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvZHVjdFwiKSkge1xuICBjb25zdCBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLnByb2R1Y3RfX3RvcC1zd2lwZXJcIiwge1xuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIHNwYWNlQmV0d2VlbjogMTBcbiAgfSlcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkXCIpKSB7XG4gICAgcHJvZHVjdENhcmQoKTtcbiAgfVxuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZHVjdF9fdG9wLWFkZFwiKVxuICBjb25zdCBjb3VudGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9kdWN0X190b3AtY291bnRlclwiKVxuICBjb25zdCBjb3VudCA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcInNwYW5cIik7XG4gIGNvbnN0IG1pbnVzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1jb3VudGVyLW1pbnVzXCIpO1xuICBjb25zdCBwbHVzID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwiLnByb2R1Y3RfX3RvcC1jb3VudGVyLXBsdXNcIik7XG5cbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7b3BlbkNvdW50ZXIoYnRuLCBjb3VudGVyKX0pO1xuXG4gIG1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7Y2hhbmdlQ291bnRlcihjb3VudCwgYnRuLCBjb3VudGVyLCBcIm1pbnVzXCIpfSlcblxuICBwbHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7Y2hhbmdlQ291bnRlcihjb3VudCwgYnRuLCBjb3VudGVyLCBcInBsdXNcIil9KVxuXG4gIGluaXRBcnJheVN3aXBlcigpO1xufVxuLy8g0KTRg9C90LrRhtC40LhcbmZ1bmN0aW9uIGluaXRTd2lwZXIoY29udGFpbmVyKSB7XG4gIHJldHVybiBuZXcgU3dpcGVyKGNvbnRhaW5lciwge1xuICAgIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxuICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgfSlcbn1cblxuZnVuY3Rpb24gaW5pdEFycmF5U3dpcGVyKCkge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5qcy1zd2lwZXItaW5pdFwiKSkge1xuICAgIGNvbnN0IHN3aXBlckJsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5qcy1zd2lwZXItaW5pdFwiKTtcbiAgICBzd2lwZXJCbG9jay5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgY29uc3Qgc3dpcGVyID0gaW5pdFN3aXBlcihlbGVtKVxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RvcFByb3BhZ2F0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0KGV2ZW50KSB7XG4gIHRoaXMuc3RhcnRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xufVxuXG4vLyBmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmUoZXZlbnQpIHtcbi8vICAgbGV0IGVuZFkgPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFk7XG4vLyAgIGxldCBkZWx0YVkgPSBlbmRZIC0gdGhpcy5zdGFydFk7XG4vLyAgIGlmIChkZWx0YVkgPiAwKSB7XG4vLyAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSAtZGVsdGFZICsgXCJweFwiO1xuLy8gICB9IGVsc2UgaWYgKGRlbHRhWSA+IDIwMCkge1xuLy8gICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbi8vICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJsb2NrXCIpXG4vLyAgIH1cbi8vICAgdGhpcy5zdGFydFkgPSBudWxsXG4vLyB9XG5cbmZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZShldmVudCkge1xuICBsZXQgZW5kWSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcbiAgaWYgKGVuZFkgPiB0aGlzLnN0YXJ0WSkge1xuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImxvY2tcIilcbiAgICB9LCAzMDApXG4gIH1cbn1cblxuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZURvd24oZXZlbnQpIHtcbiAgdGhpcy5zdGFydFkgPSBldmVudC5jbGllbnRZO1xuICB0aGlzLmlzRHJhZ2dpbmcgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmUoZXZlbnQpIHtcbiAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xuICAgIGxldCBlbmRZID0gZXZlbnQuY2xpZW50WTtcbiAgICBsZXQgZGVsdGFZID0gZW5kWSAtIHRoaXMuc3RhcnRZO1xuICAgIGlmIChkZWx0YVkgPiAwKSB7XG4gICAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IC1kZWx0YVkgKyBcInB4XCI7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoZXZlbnQpIHtcbiAgaWYgKHRoaXMuaXNEcmFnZ2luZykge1xuICAgIGxldCBlbmRZID0gZXZlbnQuY2xpZW50WTtcbiAgICBsZXQgZGVsdGFZID0gZW5kWSAtIHRoaXMuc3RhcnRZO1xuICAgIGlmIChkZWx0YVkgPiA1MCkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibG9ja1wiKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0eWxlLmJvdHRvbSA9IFwiMFwiO1xuICAgIH1cbiAgICB0aGlzLmlzRHJhZ2dpbmcgPSBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXR1cE1vZGFsRXZlbnRzKG1vZGFsLCBzY3JvbGwpIHtcblxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3RvcFByb3BhZ2F0aW9uKTtcbiAgc2Nyb2xsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHN0b3BQcm9wYWdhdGlvbilcbiAgc2Nyb2xsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RvcFByb3BhZ2F0aW9uKVxuICBzY3JvbGwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBzdG9wUHJvcGFnYXRpb24pXG5cbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgaGFuZGxlVG91Y2hTdGFydCk7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgaGFuZGxlVG91Y2hNb3ZlKTtcblxuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZU1vdXNlRG93bik7XG4gIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgaGFuZGxlTW91c2VNb3ZlKTtcbiAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgaGFuZGxlTW91c2VVcCk7XG59XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbCkge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJsb2NrXCIpXG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gIG1vZGFsLnN0eWxlLmJvdHRvbSA9IFwiMFwiXG59XG5cbmZ1bmN0aW9uIHJlZ1Bob25lKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC52YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpO1xufVxuXG5mdW5jdGlvbiBpbnB1dFBob25lKGUpIHtcbiAgbGV0IGlucHV0ID0gZS50YXJnZXQ7XG4gIGxldCBpbnB1dE51bWJlclZhbHVlID0gcmVnUGhvbmUoaW5wdXQpO1xuICBsZXQgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9ICcnO1xuICBsZXQgc2VsZWN0aW9uU3RhcnQgPSBpbnB1dC5zZWxlY3Rpb25TdGFydFxuICAvLyDQldGB0LvQuCDQsiDQuNC90L/Rg9GCINCy0LLQtdC00LXQvdGLINGB0LjQvNC+0LLQu9GLINC90LUg0YHQvtC+0YLQstC10YLRgdCy0YPRjtGJ0LjQtSDRgNC10LPRg9C70Y/RgNC60LgsINGC0L4g0LfQvdCw0YfQtdC90LjQtSDQuNC90L/Rg9GC0LAg0YHRgtCw0L3QvtCy0LjRgtGB0Y8g0L/Rg9GB0YLRi9C8XG4gIGlmICghaW5wdXROdW1iZXJWYWx1ZSkgcmV0dXJuIGlucHV0LnZhbHVlID0gJydcbiAgLy8g0JIg0Y3RgtC+0Lkg0YfQsNGB0YLQuCDRjyDQvdC1INGB0L7QstGB0LXQvCDQv9C+0L3QuNC80LDRjiDRh9GC0L4g0L/RgNC+0LjRgdGF0L7QtNC40YJcbiAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCAhPSBzZWxlY3Rpb25TdGFydCkge1xuICAgIGlmIChlLmRhdGEgJiYgL1xcRC9nLnRlc3QoZS5kYXRhKSkge1xuICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dE51bWJlclZhbHVlXG4gICAgfVxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKFsnNycsICc4JywgJzknXS5pbmNsdWRlcyhpbnB1dE51bWJlclZhbHVlWzBdKSkge1xuICAgIC8vINCV0YHQu9C4INC/0LXRgNCy0LDRjyDRhtC40YTRgNCwINC00LXQstGP0YLRjCwg0YLQvtCz0LTQsCDQvNGLINC30LDQvNC10L3Rj9C10Lwg0L/QtdGA0LLRg9GOINGG0LjRhNGA0YMg0L3QsCA3INC4INC00LXQstGP0YLQutGDINC00LXQu9Cw0LXQvCDQstGC0L7RgNC+0Lkg0YbQuNGE0YDQvtC5XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWVbMF0gPT0gJzknKSBpbnB1dE51bWJlclZhbHVlID0gJzcnICsgaW5wdXROdW1iZXJWYWx1ZTtcbiAgICBpZiAoaW5wdXROdW1iZXJWYWx1ZVswXSA9PSAnOCcpIGlucHV0TnVtYmVyVmFsdWUgPSAnNydcbiAgICAvLyDQldGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCA3LCDRgtC+0LPQtNCwINC30L3QsNGH0LXQvdC40LUg0LjQvdC/0YPRgtCwINC90LDRh9C40L3QsNC10YLRgdGPINGBICs3LCDQtdGB0LvQuCDQv9C10YDQstCw0Y8g0YbQuNGE0YDQsCA4LCDRgtC+0LPQtNCwINC30L3QsNGH0LXQvdC40LUg0L3QsNGH0LjQvdCw0LXRgtGB0Y8g0YEgOFxuICAgIGxldCBmaXJzdFN5bWJvbCA9ICcrNyc7XG4gICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSA9IGZpcnN0U3ltYm9sICsgJyAnO1xuICAgIC8vINCV0YHQu9C4INCyINC40L3Qv9GD0YLQtSDQsdC+0LvRjNGI0LUg0L7QtNC90L7QuSDRhtC40YTRgNGLINC00L7QsdCw0LLQu9GP0LXQvCDRgdC60L7QsdC60YMg0L7RgtC60YDRi9GC0LjRjyDQuCDRgtCw0Log0LTQsNC70LXQtVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+IDEpIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJygnICsgaW5wdXROdW1iZXJWYWx1ZS5zdWJzdHJpbmcoMSwgNClcbiAgICB9XG4gICAgaWYgKGlucHV0TnVtYmVyVmFsdWUubGVuZ3RoID49IDUpIHtcbiAgICAgIGZvcm1hdHRlZElucHV0VmFsdWUgKz0gJykgJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDQsIDcpXG4gICAgfVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+PSA4KSB7XG4gICAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlICs9ICctJyArIGlucHV0TnVtYmVyVmFsdWUuc3Vic3RyaW5nKDcsIDkpXG4gICAgfVxuICAgIGlmIChpbnB1dE51bWJlclZhbHVlLmxlbmd0aCA+PSAxMCkge1xuICAgICAgZm9ybWF0dGVkSW5wdXRWYWx1ZSArPSAnLScgKyBpbnB1dE51bWJlclZhbHVlLnN1YnN0cmluZyg5LCAxMSk7XG4gICAgfVxuICB9IGVsc2UgeyAvL9CV0YHQu9C4INCy0LLQvtC00LjQvNC+0LUg0YfQuNGB0LvQviDQvdC1IDcsIDgg0LjQu9C4IDkg0YLQvtCz0LTQsCDQtNC+0LHQsNCy0LvRj9C10LwgK9C4INC00L7QsdCw0LLQu9GP0LXQvCDQstCy0LXQtNC10L3QvtC1INGH0LjRgdC70L5cbiAgICBmb3JtYXR0ZWRJbnB1dFZhbHVlID0gJys3ICg5JyArIGlucHV0TnVtYmVyVmFsdWU7XG4gIH1cbiAgaW5wdXQudmFsdWUgPSBmb3JtYXR0ZWRJbnB1dFZhbHVlXG59XG5cbmZ1bmN0aW9uIG9uZVBob25lS2V5RG93biAoZSkge1xuICBsZXQgaW5wdXQgPSBlLnRhcmdldDtcbiAgaWYgKHJlZ1Bob25lKGlucHV0KS5sZW5ndGggPT0gMSAmJiBlLmtleUNvZGUgPT09IDgpIHtcbiAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dDbGVhcihpbnB1dCwgYnRuKSB7XG4gIGlmIChpbnB1dC52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgYnRuLmRpc2FibGVkID0gZmFsc2VcbiAgfSBlbHNlIHtcbiAgICBidG4uZGlzYWJsZWQgPSB0cnVlXG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYXJJbnB1dChpbnB1dCkge1xuICBpbnB1dC52YWx1ZSA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNvdW50Q2hhbmdlKGNvdW50LCBnb29kcykge1xuICBjb25zdCBzcGFuID0gY291bnQucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuICBjb25zdCBtaW51cyA9IGNvdW50LmZpcnN0RWxlbWVudENoaWxkO1xuICBjb25zdCBwbHVzID0gY291bnQubGFzdEVsZW1lbnRDaGlsZDtcblxuICBtaW51cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoc3Bhbi50ZXh0Q29udGVudCkgLSAxXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IG51bTtcbiAgICBpZiAoISFnb29kcykge1xuICAgICAgZ29vZHMudGV4dENvbnRlbnQgPSBgJHtudW19INGI0YIuYFxuICAgIH1cbiAgICBkaXNhYmxlZE1pbnVzKG51bSwgbWludXMpXG4gIH0pXG5cbiAgcGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoc3Bhbi50ZXh0Q29udGVudCkgKyAxXG4gICAgc3Bhbi50ZXh0Q29udGVudCA9IG51bTtcbiAgICBpZiAoISFnb29kcykge1xuICAgICAgZ29vZHMudGV4dENvbnRlbnQgPSBgJHtudW19INGI0YIuYFxuICAgIH1cbiAgICBkaXNhYmxlZE1pbnVzKG51bSwgbWludXMpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRpc2FibGVkTWludXMobnVtLCBidG4pIHtcbiAgaWYgKG51bSA8IDEpIHtcbiAgICBidG4uZGlzYWJsZWQgPSB0cnVlXG4gIH0gZWxzZSB7XG4gICAgYnRuLmRpc2FibGVkID0gZmFsc2VcbiAgfVxufVxuXG5mdW5jdGlvbiBhY2NvcmRpb25BY3RpdmUoaXRlbSkge1xuICBpdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImlzLXNob3dcIik7XG4gIGxldCBwYW5lbCA9IGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICBpZiAoIXBhbmVsLnN0eWxlLm1heEhlaWdodCkge1xuICAgIHBhbmVsLnN0eWxlLm1heEhlaWdodCA9IHBhbmVsLnNjcm9sbEhlaWdodCArIFwicHhcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBhY2NvcmRpb25Ob3RBY3RpdmUoaXRlbSkge1xuICBpdGVtLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImlzLXNob3dcIik7XG4gIGxldCBwYW5lbCA9IGl0ZW0ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICBpZiAocGFuZWwuc3R5bGUubWF4SGVpZ2h0KSB7XG4gICAgcGFuZWwuc3R5bGUubWF4SGVpZ2h0ID0gbnVsbFxuICB9XG59XG5cbmZ1bmN0aW9uIG9wZW5Db3VudGVyKGJ0biwgY291bnRlcikge1xuICBidG4uY2xhc3NMaXN0LmFkZChcIm5vdC1hY3RpdmVcIik7XG4gIGNvdW50ZXIuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKVxufVxuXG5mdW5jdGlvbiBjbG9zZUNvdW50ZXIoYnRuLCBjb3VudGVyKSB7XG4gIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwibm90LWFjdGl2ZVwiKTtcbiAgY291bnRlci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpXG59XG5cbmZ1bmN0aW9uIGNoYW5nZUNvdW50ZXIoc3BhbiwgYnRuLCBjb3VudGVyLCBvcGVyYXRvcikge1xuXG4gIGxldCBudW0gPSBOdW1iZXIoc3Bhbi50ZXh0Q29udGVudCk7XG5cbiAgaWYgKG9wZXJhdG9yID09PSBcInBsdXNcIikge1xuICAgIG51bSArPSAxXG4gIH0gZWxzZSB7XG4gICAgbnVtIC09MVxuICB9XG5cbiAgbnVtIDwgMSA/IGNsb3NlQ291bnRlcihidG4sIGNvdW50ZXIpIDogc3Bhbi50ZXh0Q29udGVudCA9IG51bVxufVxuXG5mdW5jdGlvbiBwcm9kdWN0Q2FyZCgpIHtcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmpzLWNhcmRcIik7XG4gIGNhcmRzLmZvckVhY2goZWxlbSA9PiB7XG4gICAgY29uc3QgYnRuV3JhcCA9IGVsZW0ucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLWJ0bnNcIilcbiAgICBjb25zdCBidG4gPSBlbGVtLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1hZGRcIilcbiAgICBjb25zdCBjb3VudGVyID0gZWxlbS5xdWVyeVNlbGVjdG9yKFwiLmpzLWNhcmQtY291bnRlclwiKVxuICAgIGNvbnN0IGNvdW50ID0gY291bnRlci5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbiAgICBjb25zdCBtaW51cyA9IGNvdW50ZXIucXVlcnlTZWxlY3RvcihcIi5qcy1jYXJkLW1pbnVzXCIpO1xuICAgIGNvbnN0IHBsdXMgPSBjb3VudGVyLnF1ZXJ5U2VsZWN0b3IoXCIuanMtY2FyZC1wbHVzXCIpO1xuXG4gICAgYnRuV3JhcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtvcGVuQ291bnRlcihidG4sIGNvdW50ZXIpfSk7XG5cbiAgICBtaW51cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2NoYW5nZUNvdW50ZXIoY291bnQsIGJ0biwgY291bnRlciwgXCJtaW51c1wiKX0pXG5cbiAgICBwbHVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7Y2hhbmdlQ291bnRlcihjb3VudCwgYnRuLCBjb3VudGVyLCBcInBsdXNcIil9KVxuICB9KVxufSJdfQ==
