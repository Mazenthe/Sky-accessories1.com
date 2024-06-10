function addToCart(productName) {
    alert(productName + ' has been added to your cart!');
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});
function addToCart(productName) {
    alert(productName + ' has been added to your cart!');
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        message: message
    })
    .then(function(response) {
       alert('Thank you for your message!');
    }, function(error) {
       alert('Failed to send message. Please try again later.');
    });
});
