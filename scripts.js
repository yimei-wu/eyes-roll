const screenCenter = window.innerWidth / 2;
const eyes = document.querySelectorAll(".js-eyes");

document.addEventListener("mousemove", (event) => {
  eyes.forEach((eye) => {
    const pupil = eye.querySelector("ellipse");

    if (pupil) {
      let eyeRect = eye.getBoundingClientRect();
      let eyeX = eyeRect.left + eyeRect.width / 2;
      let eyeY = eyeRect.top + eyeRect.height / 2;
      let mouseX = event.clientX - eyeX;
      let mouseY = event.clientY - eyeY;
      let angle = Math.atan2(mouseY, mouseX);
      let pupilPosition = {
        x: Math.cos(angle) * (eyeRect.width * 0.4),
        y: Math.sin(angle) * (eyeRect.height * 0.4),
      };
      pupil.style.transform = `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`;
    }
  });
});
