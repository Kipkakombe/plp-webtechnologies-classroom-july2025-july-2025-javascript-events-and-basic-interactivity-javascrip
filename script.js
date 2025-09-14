// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    //A simple event listener to show reactivity when the mouse hovers on the h1
    const mainHeader = document.getElementById('main-header');

    // Change h1 color on mouseover and mouseout
    mainHeader.addEventListener('mouseover', () => {
        mainHeader.style.color = '#007bff';
    });

    mainHeader.addEventListener('mouseout', () => {
        mainHeader.style.color = '#212529';
    });
    //Form Validation
    const form = document.getElementById('feedbackform');
    const ownerName = document.getElementById('ownername');
    const contactPermission = document.getElementById('contactpermission');
    const successMessage = document.getElementById('successmessage');

    //function to show an error message
    const showError = (input, message) => {
        const formGroup = input.parentElement;
        const errorDiv = formGroup.querySelector('.errormessage');
        
        input.classList.remove('success');
        input.classList.add('error');
        errorDiv.textContent = message;
    };

    //function to show success
    const showSuccess = (input) => {
        const formGroup = input.parentElement;
        const errorDiv = formGroup.querySelector('.error-message');

        input.classList.remove('error');
        input.classList.add('success');
        errorDiv.textContent = '';
    };
    // Main validation function
    const validateForm = () => {
        let isValid = true;

        // Validate Owner Name
        if (ownerName.value.trim() === '') {
            showError(ownerName, 'Your name is required.');
            isValid = false;
        } else {
            showSuccess(ownerName);
        }
        //Validate Contact Permission Checkbox
        if (!contactPermission.checked) {
            showError(contactPermission, 'You must agree to be contacted.');
            isValid = false;
        } else {
            showSuccess(contactPermission);
        }

        return isValid;
    };

    form.addEventListener('submit', (e) => {
        // Prevent the default form submission
        e.preventDefault();

        if (validateForm()) {
            // If the form is valid, hide it and show the success message
            console.log('Form submitted successfully!');
            form.classList.add('hidden');
            successMessage.classList.remove('hidden');
        } else {
            console.log('Form validation failed.');
        }
    });
});