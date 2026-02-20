// HEADER
const headerPlaceholder = document.getElementById("header-container");

fetch("../includes/header.html")
  .then((response) => response.text())
  .then((data) => {
    headerPlaceholder.innerHTML = data;
  })
  .catch((err) => console.error("Error loading header:", err));

// FOOTER
const footerPlaceholder = document.getElementById("footer-container");

fetch("../includes/footer.html")
  .then((response) => response.text())
  .then((data) => {
    footerPlaceholder.innerHTML = data;
  })
  .catch((err) => console.error("Error loading footer:", err));
