document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Зупиняємо стандартну поведінку сабміту форми

    // Збираємо дані з форми
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Створюємо об'єкт з даними форми
    const formData = {
      name: name,
      email: email,
      message: message,
    };

    // Логіку можна налаштувати для відправки даних на сервер (наприклад, через fetch)
    // Тут ми просто виводимо дані в консоль для тестування
    console.log("Form Data:", formData);

    // Після успішного збирання даних виконуємо перенаправлення на сторінку "thank-you"
    window.location.href = "./thank-you.html";
  });
