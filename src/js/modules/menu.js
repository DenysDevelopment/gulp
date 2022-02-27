import { isMobile } from "./diviceTest.js";
export const menu = () => {
  if (isMobile.any()) {
    document.body.classList.add("page__body--touch");

    const menuArrow = document.querySelectorAll(".menu__arrow");

    menuArrow.forEach((arrow) => {
      arrow.addEventListener("click", () => {
        arrow.parentElement.classList.toggle("menu__item--active");
      });
    });
  } else {
    document.body.classList.add("page__body--pc");
  }

  const iconMenu = document.querySelector(".menu__icon");
  if (iconMenu != null) {
    const menuBody = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", () => {
      document.body.classList.toggle("page__body--lock");
      iconMenu.classList.toggle("menu__icon--active");
      menuBody.classList.toggle("menu__body--active");
    });
  }
};
