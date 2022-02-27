export const gotoSection = () => {
  const links = document.querySelectorAll("[data-goto-section]");
  const header = document.querySelector(".fixed");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      if (link.dataset.gotoSection) {
        e.preventDefault();
        const section = document.querySelector(e.target.dataset.gotoSection);
        const sectionTop = header
          ? section.getBoundingClientRect().top - header.offsetHeight
          : section.getBoundingClientRect().top;

        if (
          document
            .querySelector(".menu__icon")
            .classList.contains("menu__icon--lock")
        ) {
          document.body.classList.remove("page__body--lock");
          const iconMenu = document
            .querySelector(".menu__icon")
            .classList.remove("menu__icon--active");
          const menuBody = document
            .querySelector(".menu__body")
            .classList.remove("menu__body--active");
        }

        window.scrollBy({
          top: sectionTop,
          behavior: "smooth",
        });
      }
    });
  });
};
