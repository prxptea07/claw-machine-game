function dropClaw() {
  const claw = document.getElementById('claw');
  claw.style.top = '400px';

  setTimeout(() => {
    const success = Math.random() > 0.4;
    if (success) {
      alert("🧸 You caught a prize!");
    } else {
      alert("😢 No prize this time. Try again!");
    }
    claw.style.top = '0px';
  }, 1000);
}
