let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};
let items = document.querySelectorAll('li');
items.forEach((li) => {
  li.addEventListener('click', function (e) {
    console.log(e.target);  
    document.getElementById('action').style.left = e.target.offsetLeft + "px";
    items.forEach(li_hide => {
      li_hide.classList.remove('active');
    });
    this.classList.add("active");
  });
});

// window.onscroll = () => {
//   menu.classList.remove("fa-times");
//   navbar.classList.remove("active");

//   if (window.scrollY > 60) {
//     document.querySelector("#scroll-top").classList.add("active");
//   } else {
//     document.querySelector("#scroll-top").classList.remove("active");
//   }
// };
// function loader() {
//   document.querySelector(".loader-container").classList.add("fade-out");
// }

// function fadeOut() {
//   setInterval(loader, 2000);
// }

// window.onload = fadeOut();
