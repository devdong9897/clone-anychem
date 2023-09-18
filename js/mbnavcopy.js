window.addEventListener("load", function () {
  const mbNav = document.querySelector(".mb-nav");
  const mbNavActive = "mb-nav-active";
  const mbWrap = document.querySelector(".mb-wrap");
  const mbWrapActive = "mb-wrap-active";
  const mbWidth = 1024;

  mbNav.addEventListener("click", function () {
    let checkActive = mbNav.classList.contains(mbNavActive);
    if (checkActive === false) {
      mbNav.classList.add(mbNavActive);
      mbWrap.classList.add(mbWrapActive);
    } else {
      mbNav.classList.remove(mbNavActive);
      mbWrap.classList.remove(mbWrapActive);
    }
    resetSubMenu();

    sideOpenIndex = undefined;
  });

  //   화면의 리사이즈를 체그해서 저리
  //   이 의미는 화면의 가로 사이즈가 1024 이상일때 모바일 메뉴가 없어지는 코드

  window.addEventListener("resize", function () {
    let windWidth = window.innerWidth;
    if (windWidth > mbWidth) {
      mbNav.classList.remove(mbNavActive);
      mbWrap.classList.remove(mbWrapActive);

      resetSubMenu();

      sideOpenIndex = undefined;
    }
  });

  //   이것은 화면을 닫는데 필요한 코드이다.

  //   이것은 mb-gnb를 클릭 했을때 이벤트를 예외처리 하는 것이다.
  //   그러니까 이것은 암전된 뒷배경 말고 모바일 메뉴가 클릭을 했을때
  // 아래의 모바일 메뉴가 꺼지는 기능을 이 mb-gnb 에 적용하지 못하도록 막아주는 것이다~.
  const mbGnb = document.querySelector(".mb-gnb");
  mbGnb.addEventListener("click", function (event) {
    event.stopPropagation();
    // 이벤트를 막겠다 하는 의미이다.
  });

  //   이것은 mbWrap 의 암전된 뒷배경을 클릭 했을때 모바일 메뉴가 꺼지는 기능이다~!
  mbWrap.addEventListener("click", function () {
    // 리셋하겠다.
    mbNav.classList.remove(mbNavActive);
    mbWrap.classList.remove(mbWrapActive);
  });

  //   모바일 아코디언 메뉴를 구현합니다.
  const sideLis = document.querySelectorAll(".side-menu > li");
  const sideMenuA = document.querySelectorAll(".side-menu > li > a ");
  const sideSubMenu = document.querySelectorAll("side-menu > li > .submenu");
  //   이 52은 side menu 의 li의 초기값이다.
  const sideMenuOffset = 53;
  let sideOpenIndex;

  const mobileMenuHeight = [];
  sideSubMenu.forEach((item, index) => {
    mobileMenuHeight[index] = item.scrollHeight + sideMenuOffset;
  });

  //   클릭 처리 시작
  sideMenuA.forEach((item, index) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
    });
  });

  //  모든걸 리셋하는 코드
  function resetSubMenu() {
    sideLis.forEach((item) => {
      anime({
        targets: item,
        height: sideMenuOffset,
        easing: "easeInOutQuad",
        duration: 300,
      });
    });
  }

  function showSubMenu(_showNumber) {
    // 모든 li의 높이를 53으로 하겠다잉
    // 모든걸 리셋하겠다
    if (_showNumber === sideOpenIndex) {
      // 펼침 기록 변수 초기화
      sideOpenIndex = undefined;
      //   항수 중단
    }
    return;

    sideLis.forEach((item, index) => {
      if (_showNumber === index) {
        // item.style.height = sideOpenHeightArray[_showNumber] + "px";
        anime({
          targets: item,
          height: sideOpenHeightArray[_showNumber],
          easing: "easeInOutQuad",
          duration: 300,
        });
      }
    });

    sideOpenIndex = _showNumber;
  }
});
