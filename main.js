var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Java Developer", "Web Developer"],
    typeSpeed: 10,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Form ko submit hone se roken
    var submitButton = document.getElementById('submitButton');
    var loadingIndicator = document.getElementById('loading');

    // Button ko disable karein aur loading spinner dikhayein


    // Form ko submit karein
    this.submit();

    // Form ko reset karein
    this.reset();
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Form ko submit hone se roken
    var submitButton = document.getElementById('submitButton');
    var loadingIndicator = document.getElementById('loading');

    // Button ko disable karein aur loading spinner dikhayein
    submitButton.disabled = true;
    loadingIndicator.style.display = 'inline-block'; // Spinner ko dikhayein

    // Form ko submit karein
    this.submit();

    // Form ko reset karein
    this.reset();
});
