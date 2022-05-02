let show = document.querySelector(".show");
let class_detail_img = document.querySelector(".class_detail_img");
let caption = document.querySelectorAll(".caption");
let space_text = document.querySelectorAll(".space_text");
let p = document.getElementsByTagName("p");
let class_detail_text = document.querySelector(".class_detail_text");

//target을 대상으로 한 논리연산자를 이용해 조건식을 만들어 클릭시 적용한 컨텐츠에 이벤트를 발생하게 한다.
//caption만 타겟 조건식으로 지정하면 p와 space_text가 else문에 의해서 적용한 컨텐츠에 이벤트가 삭제된다.(논리연산자 꼭 필요!)

show.addEventListener("click", function (e) {
  for (i = 0; i < caption.length; i++){
    if (e.target.contains(space_text[i]) || e.target.contains(caption[i]) || e.target.contains(p[i])) {
      class_detail_img.classList.add(`Space_${i}`);
    } else {
      class_detail_img.classList.remove(`Space_${i}`);
    }
  }
})