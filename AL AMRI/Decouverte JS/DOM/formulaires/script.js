// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const country = document.getElementById('country').value;
    const subscribe = document.getElementById('subscribe').checked;
    
    // Log form values to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Country:', country);
    console.log('Subscribe:', subscribe);
    
    // Add more logic here to handle the form data, such as sending it to a server.
});

// Add checkbox for newsletter subscription
const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.id = 'subscribe';
checkbox.checked = true; // Set checked by default

const label = document.createElement('label');
label.htmlFor = 'subscribe';
label.appendChild(document.createTextNode("S’abonner à la newsletter"));

const form = document.getElementById('contactForm');
form.appendChild(checkbox);
form.appendChild(label);

// Add a paragraph to display the subscription message
const subscriptionMessage = document.createElement('p');
form.appendChild(subscriptionMessage);

// Function to update the subscription message based on checkbox state
function updateSubscriptionMessage() {
    subscriptionMessage.textContent = checkbox.checked ? 
        "Merci de vous être abonné(e) !" : 
        "Abonnez-vous pour recevoir nos actualités.";
}

// Initial subscription message update
updateSubscriptionMessage();

// Event listener for checkbox state change
checkbox.addEventListener('change', updateSubscriptionMessage);

// Event listeners for name input field
const input = document.getElementById('name');
input.addEventListener('input', function() {
    console.log(input.value);
});

input.addEventListener('change', function() {
    console.log(input.value);
});

// Event listener for country selection change
const select = document.getElementById('country');

select.addEventListener('change', function() {
    const selectedOption = select.options[select.selectedIndex];
    console.log('Selected option text:', selectedOption.text);
    console.log('Selected option value:', selectedOption.value);

    // Remove existing background color classes
    select.classList.remove('select-france', 'select-germany', 'select-spain');

    // Add new background color class based on selected value
    select.classList.add(`select-${selectedOption.value}`);
});

// Event listener for validate button click
document.getElementById('validateButton').addEventListener('click', function() {
    let isValid = true;

    // Get form values
    const name = document.getElementById('name').value;
    const country = document.getElementById('country').value;
    const subscribe = document.getElementById('subscribe').checked;

    // Get error message elements
    const nameError = document.getElementById('nameError');
    const countryError = document.getElementById('countryError');
    const subscribeError = document.getElementById('subscribeError');
    const successMessage = document.getElementById('successMessage');

    // Clear previous error messages
    nameError.textContent = '';
    countryError.textContent = '';
    subscribeError.textContent = '';
    successMessage.textContent = '';

    // Validate form fields
    if (!name) {
        nameError.textContent = 'Veuillez saisir un nom.';
        isValid = false;
    }

    if (!country) {
        countryError.textContent = 'Veuillez choisir un pays.';
        isValid = false;
    }

    if (!subscribe) {
        subscribeError.textContent = "Veuillez cocher la case pour confirmer l'abonnement.";
        isValid = false;
    }

    // Display success message if form is valid
    if (isValid) {
        successMessage.textContent = 'Formulaire envoyé avec succès !';
    }
});

// Event listeners for name input validation
const nameInput = document.getElementById('name');
const nameError = document.getElementById('nameError');

nameInput.addEventListener('input', function() {
    nameError.textContent = nameInput.value.length < 2 ? 
        'Le nom doit contenir au moins 2 caractères.' : 
        '';
    nameInput.classList.add('typing');
});

nameInput.addEventListener('blur', function() {
    nameInput.classList.remove('typing');
});


