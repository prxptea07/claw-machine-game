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
  const claw = document.getElementById("claw");
let clawPosition = 1; // start at middle
const clawX = [60, 160, 260]; // left/mid/right above columns

function moveClaw(direction) {
  if (direction === "left" && clawPosition > 0) {
    clawPosition--;
  } else if (direction === "right" && clawPosition < 2) {
    clawPosition++;
  }
  claw.style.left = clawX[clawPosition] + "px";
}

function dropClaw() {
  const grabSound = document.getElementById("grab-sound");
  grabSound.play();

  claw.style.top = "200px"; // drop
  setTimeout(() => {
    claw.style.top = "60px"; // reset

    const prizes = document.querySelectorAll(".prize");
    const targetLeft = clawX[clawPosition];

    prizes.forEach((prize) => {
      const prizeLeft = prize.offsetLeft;
      if (Math.abs(prizeLeft - targetLeft) < 40) {
        document.getElementById("inventory").innerText = "Inventory: " + prize.dataset.name;
        document.getElementById("score").innerText = "Score: 1";
        prize.remove();
      }
    });
  }, 1000);
}

    document.getElementById('score').innerText = "Score: " + score;
    document.getElementById('inventory').innerText = "Inventory: " + (inventory.length ? inventory.join(', ') : "None");
  }, 1000);
}
