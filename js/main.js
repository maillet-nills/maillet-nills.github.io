// HEADER
const headerContainer = document.getElementById("header-container");

fetch("../includes/header.html")
  .then((response) => response.text())
  .then((data) => {
    headerContainer.innerHTML = data;
  })
  .catch((err) => console.error("Error loading header:", err));

// FOOTER
const footerContainer = document.getElementById("footer-container");

fetch("../includes/footer.html")
  .then((response) => response.text())
  .then((data) => {
    footerContainer.innerHTML = data;
  })
  .catch((err) => console.error("Error loading footer:", err));
