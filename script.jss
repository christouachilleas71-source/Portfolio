// Toggle project details
const buttons = document.querySelectorAll('.details-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const details = btn.nextElementSibling;
    if(details.style.display === 'block'){
      details.style.display = 'none';
      btn.textContent = 'See More';
    } else {
      details.style.display = 'block';
      btn.textContent = 'See Less';
    }
  });
});
