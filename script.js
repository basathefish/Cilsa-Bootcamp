document.getElementById('cambiarEstilo').addEventListener('click', function() {
    const formContainer = document.querySelector('.form-container');
    
    if (formContainer.classList.contains('simple')) {
        formContainer.classList.remove('simple');
        formContainer.classList.add('highContrast');
    } else {
        formContainer.classList.remove('highContrast');
        formContainer.classList.add('simple');
    }
});