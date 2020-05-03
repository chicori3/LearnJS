# Side in on scroll

- 13번째 챌린지 Side in on scroll
   + 스크롤을 하면 이미지가 나오게 만들어 보자.
   + Link [Scroll](https://chicori3.github.io/LearnJS/side_in_on_scroll/)
```html
<div class="site-wrap">
   <h1>Slide in on Scroll</h1>
   <img src="http://unsplash.it/400/400" class="align-left slide-in">
   <p>Lorem ipsum</p>
</div>
```
## 1. 이벤트 실행 빈도 설정
  ```javascript
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
  ```
   - 이벤트 발생에 딜레이를 주기 위해 함수 생성
   - wait = 20은 20ms
   - 이벤트 발생 시 _callNow_ 가 _false_ 가 되어 마지막 if문이 실행되지 않는다
   - wait의 값만큼 _clearTimeOut(timeout)_ 이 걸리고 지나면 다시 이벤트가 실행될 수 있다
  
## 2. 그리기 효과를 실시간으로 변경하기 위한 변수 설정
  ```javascript
const sliderImages = document.querySelectorAll(".slide-in");

function checkSlide() {
  sliderImages.forEach((sliderImage) => {
    const slideInAt =
      window.scrollY + window.innerHeight - sliderImage.height / 2;
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add("active");
    } else {
      sliderImage.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", debounce(checkSlide));
  ```
   - 화면에서 이미지가 나올 때의 값을 설정
   - 이미지의 중간 쯤 위치에서 아래로 스크롤을 했을 때 클래스를 추가
   - 이벤트리스너를 설정하여 스크롤 시 발생하고 _debounce(checkSlide)_ 함수가 실행
