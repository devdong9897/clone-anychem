window.onload = function () {
  let mbNav = document.querySelector(".mb-nav");
  mbNav.addEventListener("click", function() {

    // 현재 mbNav에 mb-nav-active를 가지고 있는지 검토
    let hasActive = true;
    if(hasActive === false) {
      mbNav.classList.add("mb-nav-active");
    }else {
      mbNav.classList.remove("mb-nav-active");
    }
  });
};
