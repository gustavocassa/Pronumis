// Archivo JSON simulado (puedes usar un servidor para cargarlo dinámicamente)
const users = [
  { username: "admin", password: "1234", redirect: "admin.html" },
  { username: "user1", password: "abcd", redirect: "user1.html" },
  { username: "user2", password: "5678", redirect: "user2.html" }
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
