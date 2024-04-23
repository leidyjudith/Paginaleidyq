document.addEventListener('DOMContentLoaded', function () {
    function handleFormSubmit(event) {
        event.preventDefault();

        const name = document.getElementById('Nombre').value;
        const email = document.getElementById('Correo').value;
        const beneficio = document.getElementById('1').value;
        const etiquetas = document.getElementById('2').value;
        const comentarios = document.getElementById('Comentarios').value;

        // Puedes hacer lo que quieras con estos valores, por ahora, solo mostrar una alerta
        alert('Mensaje enviado con éxito');
    }

    const form = document.querySelector('.contact_section form'); // Reemplaza '.contact_section form' con el selector correcto de tu formulario
    form.addEventListener('submit', handleFormSubmit);
});