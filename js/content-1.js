window.addEventListener("load", function () {
 
  const inner = document.querySelector(".inner");
  let pageNum = 0;
  const li = document.querySelectorAll(".inner-li");
  const totalNum = li.length; //5
  const C1_PREV = document.querySelector(".C1-PREV");
  const C1_NEXT = document.querySelector(".C1-NEXT");
  let currentNum = 0;

  // C1_PREV.addEventListener("click", prev_update());
  
  const next_update = () => {
    if (pageNum < totalNum-1) {
      pageNum++;
      inner.style.transform = `translateX(-${pageNum * 600}px)`
      currentNum = pageNum;
    } else {
      inner.style.transform = `translateX(${0}px)`
      currentNum = 0;
      pageNum = 0;
    }
  }
  
  setInterval(next_update, 2000);

  const prev_update = () => {
    if (pageNum > 0) {
      pageNum--;
      inner.style.transform = `translateX(-${pageNum * 600}px)`
    }
  }

  C1_NEXT.addEventListener("click",next_update);
  C1_PREV.addEventListener("click", prev_update);

// -----------------------------------------------------------------

  //버튼 클릭시 명언 사라짐
  let saying = document.querySelector(".saying");
  let buttonClick = document.querySelector(".saying_button");
  var section = document.getElementsByTagName("section")

  buttonClick.addEventListener("click", function () {
    saying.classList.add("vanish");
    setTimeout(movement, 600);
  })

  let movement = ()=>{
    window.scrollTo({
      top: section[1].offsetTop,
      behavior: "smooth"
    })
  }

// -----------------------------------------------------------------
  // D-day계산기
  var dday = new Date("2022,10,13").getTime();
  var dday_2 = new Date("2022,10,27").getTime();

  setInterval(() => {
    var today = new Date().getTime();

    var gap = dday - today;
    var day = Math.ceil(gap / (1000 * 60 * 60 * 24));
    var hour = Math.ceil((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.ceil((gap % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.ceil((gap % (1000 * 60)) / 1000);

    var gap_2 = dday_2 - today;
    var day2 = Math.ceil(gap_2 / (1000 * 60 * 60 * 24));
    var hour2 = Math.ceil((gap_2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min2 = Math.ceil((gap_2 % (1000 * 60 * 60)) / (1000 * 60));
    var sec2 = Math.ceil((gap_2 % (1000 * 60)) / 1000);

    document.querySelector(".timer .Economic").innerHTML = `<img src="images/study.jpeg" style= "border-radius : 50%" /><h2>Programming Test</h2><br>D-${day}일 ${hour}시간 ${min}분 ${sec}초 남았습니다.`;
    document.querySelector(".timer .middle").innerHTML = `<h2>Programming Test2</h2><br>D-${day2}일 ${hour2}시간 ${min2}분 ${sec2}초 남았습니다.`;
  }, 1000);
// -----------------------------------------------------------------
  const pointWrap_li = document.querySelectorAll(".pointWrap li");
  console.log(section); //버튼클릭시 명언 사라짐에서 section정의
  let pointNum = 0;

  console.log(pointWrap_li);

  for (let i = 0; i < pointWrap_li.length; i++){
    pointWrap_li[i].addEventListener("click", ()=>{
      pageNum = i;
      window.scrollTo({
        top: section[pageNum].offsetTop,
        behavior: 'smooth'
      })
    })
  }
})
