    // Находим ссылку "Оставить заявку" по id
  var openModalBtn = document.getElementById('openModal');
  // Находим модальное окно
  var modal = document.getElementById("myModal");
  // Находим элемент для закрытия модального окна
  var closeBtn = document.getElementsByClassName("close")[0];

  // Добавляем обработчик события клика на ссылку "Оставить заявку"
  openModalBtn.onclick = function() {
    modal.style.display = "block"; // Показываем модальное окно
  }

  // Добавляем обработчик события клика на элемент для закрытия модального окна
  closeBtn.onclick = function() {
    modal.style.display = "none"; // Скрываем модальное окно
  }

  // Добавляем обработчик события клика за пределами модального окна, чтобы закрывать его
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
// Находим форму
var requestForm = document.getElementById("requestForm");

// Добавляем обработчик события отправки формы
requestForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Предотвращаем отправку формы по умолчанию
  // Получаем данные из полей формы
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  
  // Делаем что-то с этими данными (например, отправляем на сервер или обрабатываем локально)
  
  // После отправки формы, скрываем модальное окно
  modal.style.display = "none";
});
   
   // Добавляем обработчик события клика на ссылку "Оставить заявку"
    openModalBtn.onclick = function() {
        modal.style.display = "block"; // Показываем модальное окно
        modal.classList.remove("fadeOut"); // Удаляем класс анимации исчезновения (если он есть)
        modal.classList.add("fadeIn"); // Добавляем класс анимации появления
      }
      
      // Добавляем обработчик события клика на элемент для закрытия модального окна
      closeBtn.onclick = function() {
        modal.classList.remove("fadeIn"); // Удаляем класс анимации появления
        modal.classList.add("fadeOut"); // Добавляем класс анимации исчезновения
        // Через 0.3 секунды (время анимации), скрываем модальное окно
        setTimeout(function() {
          modal.style.display = "none";
          modal.classList.remove("fadeOut"); // Удаляем класс анимации исчезновения
        }, 300);
      }
      