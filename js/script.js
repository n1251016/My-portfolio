
// ハンバーガーメニュー

function toggleMenu() {
  const menu = document.querySelector("#hamburger-links");
  const icon = document.querySelector(".hamburger-icon");
  const content = document.querySelector(".page-content");
  const body = document.body;
  const html = document.documentElement;

  menu.classList.toggle("open");
  icon.classList.toggle("open");
  content.classList.toggle("blur");
  body.classList.toggle("no-scroll");
  html.classList.toggle("no-scroll");
}