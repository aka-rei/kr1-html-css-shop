// Открытие и закрытие модального окна на странице товаров.
const modal = document.getElementById("order-modal");
const openButton = document.getElementById("open-modal");
const closeButton = document.getElementById("close-modal");

if (modal && openButton && closeButton) {
  openButton.addEventListener("click", function () {
    modal.showModal();
  });

  closeButton.addEventListener("click", function () {
    modal.close();
  });
}

// Учебная форма проверяется браузером и не отправляет данные на сервер.
const form = document.getElementById("order-form");
const message = document.getElementById("form-message");

if (form && message) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;

    form.reset();
    message.hidden = false;
    message.focus();
  });

  form.addEventListener("input", function () {
    message.hidden = true;
  });
}
