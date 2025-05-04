// Import the EmailJS library
import emailjs from 'emailjs-com';


// Replace 'YOUR_PUBLIC_KEY' with your actual Public Key
emailjs.init('desG5B5sH6mY5bCTj');

// Function to send email
function sendEmail(event) {
    event.preventDefault();

    emailjs.sendForm('service_fa43xnh', 'template_btd4e8a', event.target)
        .then((result) => {
            console.log('Email sent successfully:', result.status, result.text);
        }, (error) => {
            console.error('Error sending email:', error);
        });
}

// Attach the function to the form submit event
document.querySelector("form").addEventListener("submit", sendEmail);
