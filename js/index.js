document.addEventListener("DOMContentLoaded", function() {
    // Navbar
    const menuToggle = document.getElementById("menu-toggle");
    const menuIcon = document.querySelector(".menu-toggle-icon i");
    const navbarPhone = document.querySelector(".navbar-phone");

    // Cambia el ícono y cierra el menú al hacer click en el menú hamburguesa
    menuToggle.addEventListener("click", function() {
        if (menuToggle.checked) {
            // Checkbox marcado, muestra la X
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-times");
        } else {
            // Checkbox no marcado, muestra el ícono de menú
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");
        }
    });

    // Cierra el menú cuando se hace click en cualquier otro espacio de la página
    document.addEventListener("click", function(event) {
        if (!navbarPhone.contains(event.target) && event.target !== menuToggle && event.target !== menuIcon) {
            menuToggle.checked = false;
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");
        }
    });

    // Cierra el menú cuando se hace click en una opción del menú
    const navbarLinks = document.querySelectorAll(".navbar-phone a");
    navbarLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            menuToggle.checked = false;
            menuIcon.classList.remove("fa-times");
            menuIcon.classList.add("fa-bars");
        });
    });

    // Botón volver arriba
    const scrollToTopButton = document.getElementById("scrollToTopButton");
    scrollToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Muestra/oculta botón volver arriba al hacer scroll
    window.onscroll = function() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    };

    // Validación del formulario de Reservas
    const form = document.getElementById('form-reservas');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;
        
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email-txt');
    const date = document.getElementById('date');
    const hours = document.getElementById('hours');
    const numPeople = document.getElementById('num-people');
    const successMessage = document.getElementById('success-message');

    // Limpia mensajes de error previos
    clearErrors();

    // Valida el nombre
        if (!firstName.value.trim()) {
            isValid = false;
            showError(firstName, 'Debe completar este campo');
        } else if (!/^[a-zA-Z\s]+$/.test(firstName.value.trim())) {
            isValid = false;
            showError(firstName, 'Ingrese solo letras');
        }

    // Valida el apellido
        if (!lastName.value.trim()) {
            isValid = false;
            showError(lastName, 'Debe completar este campo');
        } else if (!/^[a-zA-Z\s]+$/.test(lastName.value.trim())) {
            isValid = false;
            showError(lastName, 'Ingrese solo letras');
        }

    // Valida el número de teléfono
        if (!phone.value.trim()) {
            isValid = false;
            showError(phone, 'Debe completar este campo');
        } else if (!/^\d+$/.test(phone.value.trim())) {
            isValid = false;
            showError(phone, 'Ingrese solo números');   
        } else if (phone.value.trim().length !== 10) {
            isValid = false;
            showError(phone, 'Debe tener 10 dígitos');
        }

    // Valida el e-mail
    const emailPattern = /^\w+([\.-]?\w+)*@(?:hotmail|outlook|yahoo|live|gmail|edu)\.(?:com|ar)$/;
        if (!email.value.trim()) {
            isValid = false;
            showError(email, 'Debe completar este campo');
        } else if (!emailPattern.test(email.value.trim())) {
            isValid = false;
            showError(email, 'Correo no válido');
        }

    // Valida la fecha
        if (!date.value) {
            isValid = false;
            showError(date, 'Seleccione una fecha');
        }

    // Valida el horario
        if (!hours.value) {
            isValid = false;
            showError(hours, 'Seleccione un horario');
        }

    // Valida el número de personas
        if (!numPeople.value) {
            isValid = false;
            showError(numPeople, 'Seleccione el número de personas');
        }
        
    // Si todos los campos son válidos
        if (isValid) {
            successMessage.textContent = 'Formulario enviado con éxito. ¡Gracias por elegirnos!';
            setTimeout(function() {
                successMessage.textContent = '';
            }, 10000);
            form.reset();
        } else {
            successMessage.textContent = '';
        }
    });

    function showError(input, message) {
        const errorDiv = input.nextElementSibling;
        input.classList.add('error');
        errorDiv.textContent = message;
    }

    function clearErrors() {
        const inputs = document.querySelectorAll('.form-control input, .form-control select');
        inputs.forEach(function(input) {
            input.classList.remove('error');
            const errorDiv = input.nextElementSibling;
            errorDiv.textContent = '';
        });
    }
});
    
// Menú 
// Muestra los ingredientes 
function toggleIngredients(ingredientId) {
    const ingredient = document.getElementById(ingredientId);
    const display = window.getComputedStyle(ingredient).getPropertyValue('display');
    if (display === "block") {
        ingredient.style.display = "none";
    } else {
        ingredient.style.display = "block";
    }
}

    




