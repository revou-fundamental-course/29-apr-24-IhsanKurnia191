
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light");

//  js code tombol dark dan light mode
      modeToggle.addEventListener("click" , ()=>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");
      });