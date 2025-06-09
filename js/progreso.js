// Este script maneja la barra de progreso y el envío del formulario
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('formEvento');
  const campos = [
    form.nombre,
    form.email,
    form.pais,
    form.tema,
    form.acepto
  ];
  const barra = document.getElementById('barraProgreso');
  const resultado = document.getElementById('resultado');

  function actualizarProgreso() {
    let llenos = 0;
    campos.forEach(campo => {
      if (
        (campo.type === "checkbox" && campo.checked) ||
        (campo.type !== "checkbox" && campo.value.trim() !== "")
      ) {
        llenos++;
      }
    });
    const porcentaje = Math.round((llenos / campos.length) * 100);
    barra.value = porcentaje;
  }

  campos.forEach(campo => {
    campo.addEventListener('input', actualizarProgreso);
    campo.addEventListener('change', actualizarProgreso);
  });

  actualizarProgreso();

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Tomar los valores del formulario
    const nombre = form.nombre.value;
    const email = form.email.value;
    const pais = form.pais.value;
    const tema = form.tema.value;
    const comentarios = form.comentarios ? form.comentarios.value : '';
    // Mostrar los datos en el output
    resultado.innerHTML = `
      <strong>Datos enviados:</strong><br>
      Nombre: ${nombre}<br>
      Email: ${email}<br>
      País: ${pais}<br>
      Edad: ${form.edad.value}<br>
      Experiencia: ${tema}<br>
      Comentarios: ${comentarios}
    `;
    resultado.style.display = 'block';
    alert('¡Formulario enviado correctamente! 🎉\nDebajo del botón "Enviar registro" podrás observar los datos enviados.');
  });
});