# Drum_kit
- 1번째 챌린지 Drum Kit
  + JAVASCRIPT를이용해 해당 키를 누르면 지정된 소리가 나게 하자
  + Link https://chicori3.github.io/LearnJS/drum_kit

## 1. 해당 키의 효과음을 불러오는 함수 생성
```javascript
function playSound(a) {
  const audio = document.querySelector(`audio[data-key="${a.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${a.keyCode}"]`);
  
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.toggle("playing");
}
```

   - 해당 키의 keyCode를 가진 변수 _audio_, _key_ 를 선언한다.<br>
   - _audio_ 가 false라면 바로 return을 하고 true라면 _playing_ class를 추가한다.<br>
   - 딜레이 없이 소리가 나도록 지연시간을 0으로 설정한다.<br>
   
## 2. transition을 해제하는 함수 생성
```javascript
function removeTransition(a) {
  if (a.propertyName !== "transform") return;
  this.classList.remove("playing");
}
```

   - 누른 키가 transform 속성을 가지고 잇다면 _playing_ class를 제거한다.<br>
   
 ## 3. 웹으로 연동하기
```javascript
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
```

   - DOM의 모든 _key_ class를 _keys_ 에 배열로 담는다.<br>
   - _forEach_ 를 이용해 요소의 변화가 종료되면 _removeTransition_ 함수를 실행한다.
   - _keydown_ 을 이용해 해당 키를 누르면 _playSound_ 함수를 실행한다.
