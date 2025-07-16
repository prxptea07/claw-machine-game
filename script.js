let position = 130;
let score = 0;
let inventory = [];

function moveClaw(direction) {
  if (direction === 'left' && position > 0) {
    position -= 50;
  } else if (direction === 'right' && position < 260) {
    position += 50;
  }
  document.getElementById('claw').style.left = position + 'px';
}

function dropClaw() {
  const claw = document.getElementById('claw');
  const grabSound = document.getElementById('grab-sound');
  claw.style.top = '400px';
  grabSound.play();

  setTimeout(() => {
    claw.style.top = '0px';
    const prizes = document.querySelectorAll('.prize');
    prizes.forEach(prize => {
      const prizeLeft = parseInt(prize.style.left);
      if (Math.abs(prizeLeft - position) < 30 && Math.random() > 0.3) {
        const name = prize.getAttribute('data-name');
        if (!inventory.includes(name)) {
          inventory.push(name);
          score += 10;
          prize.remove();
        }
      }
    });
    document.getElementById('score').innerText = "Score: " + score;
    document.getElementById('inventory').innerText = "Inventory: " + (inventory.length ? inventory.join(', ') : "None");
  }, 1000);
}
