function scrollToSecondDiv() {
    var elmnt = document.querySelector(".page2");
    elmnt.scrollIntoView({ behavior: "smooth", block: "start" });
  }

function scrollToFirstDiv() {
    var elmnt = document.querySelector(".page1");
    elmnt.scrollIntoView({ behavior: "smooth", block: "start" });
  }

function scrollToThirdDiv() {
    var elmnt = document.querySelector(".page3");
    elmnt.scrollIntoView({ behavior: "smooth", block: "start" });
  }