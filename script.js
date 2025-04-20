document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.show-details');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const details = button.nextElementSibling;
            if (details.style.display === 'block') {
                details.style.display = 'none';
                button.textContent = 'Show Details';
            } else {
                details.style.display = 'block';
                button.textContent = 'Hide Details';
            }
           
        });
    });

    const toggle = document.getElementById('darkModeToggle');
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });
});
