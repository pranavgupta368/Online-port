const revealOnScroll = () => {
  const sections = document.querySelectorAll(".container");
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((section) => {
    const boxTop = section.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      section.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
