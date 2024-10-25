const savedLanguage = localStorage.getItem("language") || "tr";

// Підключення i18next
i18next.use(i18nextXHRBackend).init(
  {
    lng: savedLanguage,
    fallbackLng: "tr",
    debug: true,
    backend: {
      loadPath: "./locales/{{lng}}.json",
      loadPath: "../locales/{{lng}}.json",
    },
  },
  function (err, t) {
    updateContent();
    updateActiveLanguage(savedLanguage);
  }
);

// Оновлення контенту при зміні мови
function updateContent() {
  document.querySelectorAll("[data-translate]").forEach(function (element) {
    const key = element.getAttribute("data-translate");
    element.textContent = i18next.t(key);
  });
}

// Функція для зміни мови
function changeLanguage(language) {
  i18next.changeLanguage(language, () => {
    localStorage.setItem("language", language); // Зберігаємо вибір мови
    updateContent();
    updateActiveLanguage(language); // Оновлюємо активну мову
  });
}

// Оновлення активної мови у випадаючому списку
function updateActiveLanguage(language) {
  document.getElementById("language-dropdown").value = language;
}

// Додаємо подію до випадаючого списку для зміни мови
document.getElementById("language-dropdown").addEventListener("change", function () {
  const selectedLanguage = this.value;
  changeLanguage(selectedLanguage); // Зміна мови при виборі
});

// Встановлюємо вибрану мову у випадаючий список після завантаження сторінки
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("language-dropdown").value = savedLanguage;
});
