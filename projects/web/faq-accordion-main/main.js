const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);
accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", () => {
    accordionItemHeader.classList.toggle("active");
    accordionItemHeader.nextElementSibling.classList.toggle("active");
    // displaying the text in acoordeion-item-body after user clicks on the plus sign
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.display = "block";
    } else {
      accordionItemBody.style.display = "none";
    }
  });
});

 function myFunction() {
   let x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
     x.className += " responsive";
   } else {
     x.className = "topnav";
   }
 }