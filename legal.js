<script>
// Smooth scroll for navbar links
document.querySelectorAll('.navbar-nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.hash !== '') {
                e.preventDefault();
                const target = document.querySelector(this.hash);
                target && target.scrollIntoView({ behavior: 'smooth' });
            }
        });
});

// Change navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Floating label animation (optional enhancement)
document.querySelectorAll('.form-control').forEach(input => {
        input.addEventListener('focus', () => {
            input.previousElementSibling.classList.add('active-label');
        });
    input.addEventListener('blur', () => {
        if (input.value === '') {
        input.previousElementSibling.classList.remove('active-label');
        }
    });
});

// Form validation + fake submit animation
document.querySelector('.btn.wid').addEventListener('click', () => {
    const name = document.getElementById('fullName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');

    if (!name.value || !email.value || !phone.value || !message.value) {
        alert('Please fill in all fields.');
    return;
    }

    // Fake sending animation
    const button = document.querySelector('.btn.wid');
    button.innerHTML = 'Sending...';
    button.disabled = true;

    setTimeout(() => {
        button.innerHTML = 'Message Sent!';
    button.classList.add('btn-success');

        setTimeout(() => {
        button.innerHTML = 'Send';
    button.classList.remove('btn-success');
    button.disabled = false;
        }, 3000);

    // Clear form
    name.value = '';
    email.value = '';
    phone.value = '';
    message.value = '';
    }, 2000);
});
</script>
