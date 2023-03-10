let head = document.querySelector("#header");
let logo = document.querySelector(".logo img ");
let a = document.querySelectorAll("#list li a");
let list = document.querySelector("#list");
// list.style.cssText = `transform: translate(-50%, -500px);`

let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;
let scroller = document.querySelector(".scroller");

window.addEventListener("scroll", function () {
  let top = document.documentElement.scrollTop;
  scroller.style.width = `${(top / height) * 100}%`;
});

logo.onclick = function () {
  window.location.href = "#home";
};

window.addEventListener("scroll", function () {
  console.log(this.scrollY)
  if (window.scrollY >= 100) {
    list.style.backgroundColor = "white";
    a.forEach(function (ele) {
      ele.style.color = "black";
    });
    head.style.position = "fixed";
    head.style.backgroundColor = "white";
    head.style.boxShadow = "0 0 15px #ddd";
    logo.style.width = "120px";
  } else if (window.scrollY <= 100) {
    list.style.backgroundColor = "transparent";
    a.forEach(function (ele) {
      ele.style.color = "white";
    });
    head.style.position = "absolute";
    head.style.boxShadow = "0 0 0 transparent";
    head.style.backgroundColor = "transparent";
    logo.style.width = "200px";
  }
});

let price = document.querySelector(".p_list");
let contact = document.querySelector(".contact");
let service = document.querySelector(".service");
let h = document.querySelector(".h_list");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    a.forEach(function (ele) {
      ele.classList.remove("active");
    });
    h.classList.add("active");
  } else {
    h.classList.remove("active");
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY <= 1735 && window.scrollY >= 893) {
    a.forEach(function (ele) {
      ele.classList.remove("active");
    });
    service.classList.add("active");
  } else {
    service.classList.remove("active");
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY <= 2306 && window.scrollY >= 1735) {
    a.forEach(function (ele) {
      ele.classList.remove("active");
    });
    price.classList.add("active");
  } else {
    price.classList.remove("active");
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= 2306) {
    a.forEach(function (ele) {
      ele.classList.remove("active");
    });
    contact.classList.add("active");
  } else {
    contact.classList.remove("active");
  }
});
