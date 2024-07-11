/*document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

    if(!firstName.value) {
        firstName.classList.add('error-message');
        firstName.nextElementSibling.style.display = 'block';
        isValid = false;
    } else {
        firstName.classList.remove('error-message', 'error-alert');
        firstName.nextElementSibling.style.display = 'none';
    }

    if(!lastName.value) {
        lastName.classList.add('error-message');
        lastName.nextElementSibling.style.display = 'block';
        isValid = false;
    } else {
        lastName.classList.remove('error-message');
        lastName.nextElementSibling.style.display = 'none';
    }

    if(!email.value || !validateEmail(email.value)) {
        email.classList.add('error-message');
        email.nextElementSibling.style.display = 'block';
        isValid = false;
    } else {
        email.classList.remove('error-message');
        email.nextElementSibling.style.display = 'none';
    }

    if (!password.value) {
        password.classList.add('error-message');
        password.nextElementSibling.style.display = 'block';
        isValid = false;
    } else {
        password.classList.remove('error-message');
        password.nextElementSibling.style.display = 'none';
    }
});*/

document.getElementById('signup-form').addEventListener('submit', function(event) {
    var firstNameInput = document.getElementById('first-name');
    var lastNameInput = document.getElementById('last-name');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');

    validateFirstName(firstNameInput);
    validateLastName(lastNameInput);
    validateEmail(emailInput);
    validatePassword(passwordInput);

    function validateFirstName(input) {
        var errorMessage = input.nextElementSibling;

        if(!input.value.trim()) {
            errorMessage.style.display = 'block';
            input.classList.add('error-form');
            event.preventDefault();
        } else {
            errorMessage.style.display = 'none';
            input.classList.remove('error-form');
        }
    }

    function validateLastName(input) {
        var errorMessage = input.nextElementSibling;

        if(!input.value.trim()) {
            errorMessage.style.display = 'block';
            input.classList.add('error-form');
            event.preventDefault();
        } else {
            errorMessage.style.display = 'none';
            input.classList.remove('error-form');
        }
    }

    function validateEmail(input) {
        var errorMessage = input.nextElementSibling;

        if(!isValidEmail(input.value.trim())) {
            errorMessage.style.display = 'block';
            input.classList.add('error-form');
            event.preventDefault();   
        } else {
            errorMessage.style.display = 'none';
            input.classList.remove('error-form');
        }
    }

    function validatePassword(input) {
        var errorMessage = input.nextElementSibling;

        if(input.value.trim().length < 6) {
            errorMessage.style.display = 'block';
            input.classList.add('error-form');
            event.preventDefault();
        } else {
            errorMessage.style.display = 'none';
            input.classList.remove('error-form');
        }
    }
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }    
});




/*document.getElementById('signup-form').addEventListener('submit', function(event) {
    var firstNameInput = document.getElementById('first-name');
    var lastNameInput = document.getElementById('last-name');
    var emailInput = document.getElementById('email');
    var passwordInput = document.getElementById('password');

    validateFirstName(firstNameInput);
    validateLastName(lastNameInput);
    validateEmail(emailInput);
    validatePassword(passwordInput);

    function validateFirstName(input) {
        var errorMessage = input.nextElementSibling;

        if(!input.value.trim()) {
            errorMessage.style.display = 'block';
            input.classList.add('error-form');
            event.preventDefault(); 
        } else {
            errorMessage.style.display = 'none';
            input.classList.remove('error-form');
        }
    }

    function validateLastName(input) {
        var errorMessage = input.nextElementSibling;

        if(!input.value.trim()) {
            errorMessage.style.display = 'block';
            input.classList.add('error-form');
            event.preventDefault();
        } else {
            errorMessage.style.display = 'none';
            input.classList.remove('error-form');
        }
    }

    function validateEmail(input) {
        var errorMessage = input.nextElementSibling;

        if(!isValidEmail(input.value.trim())) {
            errorMessage.style.display = 'block';
            input.classList.add('error-form');
            event.preventDefault();
        } else {
            errorMessage.style.display = 'none';
            input.classList.remove('error-form');
        }
    }
    
    function validatePassword(input) {
        var errorMessage = input.nextElementSibling;

        if(input.value.trim().length < 6) {
            errorMessage.style.display = 'block';
            input.classList.add('error-form');
            event.preventDefault();
        } else {
            errorMessage.style.display = 'none';
            input.classList.remove('error-form');
        }
    }
    function isValidEmail(email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
  });*/


