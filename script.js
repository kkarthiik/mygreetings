const countdown = document.getElementById('countdown');
const friendshipDay = new Date('2024-08-03T00:00:00');

function updateCountdown() {
  const now = new Date();
  const timeDiff = friendshipDay - now;
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  countdown.textContent = `Only ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds left until Friendship Day!`;
}

setInterval(updateCountdown, 1000);