const toggleNavbar = (n: number) => {
  const nav = document.querySelector("nav");
  if (window.screen.width <= 768 && nav) {
    if (nav.style.height == "64px") {
      nav.style.height = `${64 * n + 178}px`;
    } else {
      nav.style.height = "64px";
    }
  }
};

export default toggleNavbar;
