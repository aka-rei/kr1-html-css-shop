// Открытие и закрытие модального окна на странице товаров.
const modal = document.getElementById("order-modal");
const openButton = document.getElementById("open-modal");
const closeButton = document.getElementById("close-modal");

openButton.addEventListener("click", function () {
  modal.showModal();
});

closeButton.addEventListener("click", function () {
  modal.close();
});
