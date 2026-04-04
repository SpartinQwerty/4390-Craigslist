document.addEventListener('DOMContentLoaded', function() {
  fetch('header.html')
    .then(response => response.text())
    .then(data => {
      const placeholder = document.getElementById('header-placeholder');
      if (placeholder) {
        placeholder.insertAdjacentHTML('beforebegin', data);
      }
    })
    .catch(error => console.error('Error loading header:', error));
});
