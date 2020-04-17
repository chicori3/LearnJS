# JS Clock
- 3번째 챌린지 JS Clock
  + JAVASCRIPT와 CSS로 현재 시간을 알려주는 아날로그 시계를 만들자
  + Link http://chicori3.github.io/LearnJS/js_clock/index.html

## 1. 시계바늘 만들기

```css
.hand {
  width: 50%;
  height: 6px;
  background: black;
  position: absolute;
  top: 50%;
  transform-origin: 100%;
  transform: rotate(90deg);
  transition: all 0.05s;
  transition-timing-function: ease-in-out;
}
```

- 시계바늘을 중앙을 축으로 회전하도록 설정한다.   
- _transition_ 으로 바늘이 움직일 시에 효과를 준다.

## 2. 시계바늘 변수 선언

```javascript
  const secondHand = document.querySelector(".second-hand");
  const minHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");
```

- html의 시침, 분침, 초침을 변수로 선언한다.

## 3. 현재 시간에 맞게 설정

```javascript
  function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
```

- _Date_ 생성자는 시간의 특정 지점을 나타내는 _Date 객체_ 를 생성한다.
- _getSeconds_ 등은 초, 분, 시 등을 가져온다.
- html의 class에 _transform:rotate_ 속성을 추가해 변형하도록 한다.
- _setInterval_ 은 _setDate_ 를 1000ms(1초)마다 실행한다.
