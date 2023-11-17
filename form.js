function validarFormulario() {
  let nombre = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let asunto = document.getElementById("subject").value;
  let mensaje = document.getElementById("message").value;

  if (nombre == "") {
    alert("Debes ingresar tu nombre");
    return false;
  }

  if (email == "") {
    alert("Debes ingresar tu correo electrónico");
    return false;
  }

  if (asunto == "") {
    alert("Debes ingresar un asunto");
    return false;
  }

  if (mensaje == "") {
    alert("Debes ingresar un mensaje");
    return false;
  }

  return true;
}