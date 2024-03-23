document.addEventListener('DOMContentLoaded', function() {
  // Obtener todos los botones de carátula
  const caratulaButtons = document.querySelectorAll('.caratula');

  // Obtener todos los modales de película
  const modals = document.querySelectorAll('.modal-pelicula');

  // Función para mostrar el modal correspondiente al botón
  function mostrarModal(event) {
    const button = event.currentTarget;
    const modalId = button.id;
    const modal = document.getElementById(modalId);
    modal.classList.add('active');
  }

  // Función para ocultar el modal
  function ocultarModal(event) {
    const modal = event.currentTarget.closest('.modal-pelicula');
    modal.classList.remove('active'); 
  }

  // Agregar evento de clic a cada botón de carátula
  caratulaButtons.forEach(button => {
    button.addEventListener('click', mostrarModal);
  });

  // Agregar evento de clic a cada botón de cierre
  const closeButtons = document.querySelectorAll('.modal-pelicula button');
  closeButtons.forEach(button => {
    button.addEventListener('click', ocultarModal);
  });

  console.log(caratulaButtons);
  console.log(modals);
});