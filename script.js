function checkForm() {
  const inputs = document.querySelectorAll('input');

  inputs.forEach(input => {
    if (input.value.trim() === '') {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });
}