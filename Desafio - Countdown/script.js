const finalDate = new Date('2023-12-31T17:00:00').getTime();

function openModal() {
  var modal = document.getElementById('submitModal')
  modal.style.display = 'block';
}

function closeModal() {
  var modal = document.getElementById('submitModal')
  modal.style.display = 'none';
}

function submitForm() {
  var nome = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  closeModal();
}

function formatWZero (value) {
  return value < 10 ? '0' + value : value;
}

function updateWatch () {
  const todayDate = new Date().getTime();

  const diff = finalDate - todayDate;

  const days = formatWZero(Math.floor(diff / (1000 * 60 * 60 * 24)));
  const hours = formatWZero(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const minutes = formatWZero(Math.floor((diff % (1000 * 60 * 60 )) / (1000 * 60)));
  const seconds = formatWZero(Math.floor((diff % (1000 * 60 )) / 1000));

  document.getElementById('watch').innerHTML = '<span>'+days+'</span>:<span>'+hours+'</span>:<span>'+minutes+'</span>:<span>'+seconds+'</span>';
}

updateWatch();

setInterval(updateWatch, 1000);
