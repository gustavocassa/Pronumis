// Simulación de usuarios y redirecciones
const users = [
  { username: "ivan", password: "1234", redirect: "pagina-ivan.html" },
  { username: "gustavo", password: "1234", redirect: "pagina-gustavo.html" },
  { username: "prueba", password: "1234", redirect: "prueba.html" }
];

// Manejo del formulario de inicio de sesión
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Evitar el envío del formulario

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Buscar el usuario en la lista
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    // Guardar el usuario en el almacenamiento local
    localStorage.setItem("loggedInUser", username);

    // Redirigir a la página correspondiente
    window.location.href = user.redirect;
  } else {
    // Mostrar mensaje de error
    errorMessage.textContent = "Usuario o contraseña incorrectos.";
  }
});

// Mostrar el usuario en la esquina superior derecha si está logueado
const loggedInUser = localStorage.getItem("loggedInUser");
if (loggedInUser) {
  document.getElementById("user-info").textContent = `Usuario: ${loggedInUser}`;
}
