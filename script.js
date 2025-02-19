// Archivo JSON simulado (puedes usar un servidor para cargarlo dinámicamente)
const users = [
  { username: "alvaro", password: "1234", redirect: "https://gustavocassa.github.io/Anime-Diary/prueba.html" },
  { username: "ivan", password: "1234", redirect: "https://gustavocassa.github.io/Anime-Diary/pagina-ivan.html" },
  { username: "gustavo", password: "1234", redirect: "https://gustavocassa.github.io/Anime-Diary/pagina-gustavo.html" },

];

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Evitar el envío del formulario

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Buscar el usuario en el archivo JSON
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    // Redirigir a la página correspondiente
    window.location.href = user.redirect;
  } else {
    // Mostrar mensaje de error
    errorMessage.textContent = "Usuario o contraseña incorrectos.";
  }
});
