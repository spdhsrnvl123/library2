//scroll값에 따른 이벤트
window.onload = function () {
  var menu = document.querySelector(".menu");
  var content_3_1 = document.querySelector(".content-3-1");
  var content_3_2 = document.querySelector(".content-3-2");
  var content_3_3 = document.querySelector(".content-3-3");
  var timer = document.querySelector(".timer");
  var pointBtn = document.querySelectorAll(".pointWrap li");
  var pageNum = 0;

  
  for (let i = 0; i < pointBtn.length; i++) {
    pointBtn[i].addEventListener("click", function () {
      pageNum = i;
      window.scrollTo({
        top: section[pageNum].offsetTop,
        behavior: 'smooth'
      })
    })
  }

  window.addEventListener("scroll", () => {
    section1_scroll();
    section2_scroll();
  })
  
  //section[1] 스크롤 이벤트(timer)
  function section1_scroll() {
    const scroll = window.scrollY;
    if (scroll >= section[1].offsetTop - window.innerHeight / 2 && scroll <= section[1].offsetTop + section[1].offsetHeight - window.innerHeight / 2) {
      timer.classList.remove("display");
      timer.classList.add("black");
    } else if (scroll >= section[0].offsetTop - window.innerHeight / 2 && scroll <= section[0].offsetTop + section[0].offsetHeight - window.innerHeight / 2) {
      timer.classList.remove("display");
      timer.classList.remove("black");
    } else if (scroll >= section[2].offsetTop - window.innerHeight / 2 && scroll <= section[2].offsetTop + section[2].offsetHeight - window.innerHeight / 2) {
      timer.classList.add("display");
    }
  }
  section1_scroll();
  //section[2] 스크롤 이벤트
  function section2_scroll() {
    const scroll = window.scrollY;
    if (scroll >= section[2].offsetTop) {
      content_3_1.classList.add("content3-1_appear");
      content_3_2.classList.add("content3-2_appear");
      content_3_3.classList.add("content3-3_appear");
    }
  }
  section2_scroll();

  
}
