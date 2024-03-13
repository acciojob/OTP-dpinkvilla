//your JS code here. If required.
const inputFields = document.querySelectorAll('.code');

inputFields.forEach((code, index) => {
  code.addEventListener('keydown', function(event) {
    if (event.key === 'Backspace' && code.selectionStart === 0) {
      event.preventDefault(); // Prevents default backspace behavior (like navigating back in the browser)
      if (index > 0) {
        inputFields[index - 1].focus(); // Focuses on the previous input field
        inputFields[index - 1].value = ''; // Clears the value of the previous input field
      }
    }
  });
});
