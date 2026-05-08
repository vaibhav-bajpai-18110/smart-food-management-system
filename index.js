const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    console.log(`Navigating to ${link.textContent}`);
  });
});

const donationForm = document.querySelector('form');

donationForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const donorName = document.querySelector('input[type="text"]').value;

  if (donorName === '') {
    alert('Please enter donor name');
    return;
  }

  alert('Thank you! Your food donation has been submitted successfully.');

  donationForm.reset();
});

const counters = document.querySelectorAll('.impact-box h2');

counters.forEach(counter => {
  let count = 0;
  const target = parseInt(counter.innerText);

  const updateCounter = () => {
    if (count < target) {
      count += Math.ceil(target / 100);
      counter.innerText = count + '+';
      setTimeout(updateCounter, 30);
    } else {
      counter.innerText = target + '+';
    }
  };

  updateCounter();
});