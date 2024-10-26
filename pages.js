// pages.js

// Function to open the selected page
function openPage(pageNumber) {
    // Replace this with the actual URLs of your pages
    const pageUrls = [
      "file:///C:/Users/blusk/Desktop/Test%20Website/index.htm#",
      "page2.html",
      "page3.html",
      "page4.html",
      // Add more page URLs here as needed
    ];
  
    // Check if the selected page number is valid
    if (pageNumber >= 1 && pageNumber <= pageUrls.length) {
      const pageUrl = pageUrls[pageNumber - 1];
      window.location.href = pageUrl; // Open the page in the same tab
    }
  }
  
  // Add click event listener to each page link
  const pageLinks = document.querySelectorAll(".page-link");
  pageLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const pageNumber = parseInt(this.textContent.trim().split(" ")[1], 10);
      openPage(pageNumber);
    });
  });
  