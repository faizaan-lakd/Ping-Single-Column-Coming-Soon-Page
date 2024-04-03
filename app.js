let notifyButton = document.querySelector('.notifyBtn');
let emailInput = document.querySelector('.inputEmail');
let desktopError = document.querySelector('.error-desktop');
let emailValidationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

notifyButton.addEventListener('click', (e) => {
    if (emailInput.value.length === 0 || emailInput.value.length < 6 || emailValidationRegex.test(emailInput.value) === false) {
        desktopError.style.display = 'block';
        emailInput.style.borderColor = 'hsl(354, 100%, 66%)';
    } else {
        desktopError.style.display = 'none';
        emailInput.style.borderColor = 'hsl(0, 0%, 59%, 0.5)';
    }
});