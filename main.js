window.addEventListener("scroll", function() {
  let mainNav = document.getElementById("mainNav");

  if (window.pageYOffset > 0) {
    mainNav.classList.add("is-sticky");
  } else {
    mainNav.classList.remove("is-sticky");
  }
});
