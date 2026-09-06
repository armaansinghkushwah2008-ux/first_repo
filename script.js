// Display course message
function showMessage(course) {
    alert(
        "You selected " +
        course +
        ". More information will be available soon!"
    );
}

// Contact form interaction
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    alert("Thank you, " + name + "! Your message has been submitted.");

    document.getElementById("contactForm").reset();
});
