// scripts.js
document.getElementById('contactUsButton').addEventListener('click', function() {
    document.getElementById('contactModal').style.display = 'flex';
});

document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('contactModal').style.display = 'none';
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

   
    const name = document.getElementById('name').value;
    if (!name) {
        isValid = false;
        showError('nameError', 'Name is required');
    } else {
        hideError('nameError');
    }

   
    const address = document.getElementById('address').value;
    if (!address) {
        isValid = false;
        showError('addressError', 'Address is required');
    } else {
        hideError('addressError');
    }

    
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^\+94\d{9}$/;
    if (!phoneRegex.test(phone)) {
        isValid = false;
        showError('phoneError', 'Phone number must start with +94 and be followed by 9 digits');
    } else {
        hideError('phoneError');
    }

    
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        showError('emailError', 'Invalid email format');
    } else {
        hideError('emailError');
    }

   
    const message = document.getElementById('message').value;
    if (message.length < 10) {
        isValid = false;
        showError('messageError', 'Message must be at least 10 characters long');
    } else {
        hideError('messageError');
    }

    if (isValid) {
        const contactData = {
            name,
            address,
            phone,
            email,
            message
        };
        localStorage.setItem('contactData', JSON.stringify(contactData));
        alert('Your message has been submitted successfully!');
        document.getElementById('contactModal').style.display = 'none';
    }
});

function showError(elementId, message) {
    const element = document.getElementById(elementId);
    element.innerText = message;
    element.style.display = 'block';
}

function hideError(elementId) {
    const element = document.getElementById(elementId);
    element.style.display = 'none';
}
