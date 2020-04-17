# CSS variable with JS
- 3번째 챌린지 CSS variable with JS
  + CSS에서 변수를 만드는 기능을 이용해보자.
  + Link http://chicori3.github.io/LearnJS/css_variable_js

## 1. CSS 변수 선언

```css
  :root {
  --base: #ffc600;
  --spacing: 10px;
  --blur: 10px;
}
```

  - _:root_ 는 문서 트리의 루트 요소를 선택합니다. HTML에서는 html 선택자와 같다.
  - _--base_ 등은 CSS의 변수 선언이다.
  - _:root_ 에 변수를 선언한 것은 _전역 변수_ 라는 뜻이다.
  
## 2. CSS 변수로 효과 지정

```css
  img {
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}
```

  - CSS에서 변수를 불러오는 문법은 _var(--spacing)_ 이다.
  - 효과를 줄 _spacing_ _base_ _blur_ 를 설정한다.
  
## 3. JS 코드 생성

```javascript
  const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
```

  - html _controls class_ 의 _input class_ 를 변수 _inputs_ 로 선언한다.
  - _suffix_ 변수는 _input_ 에 _data-sizing_ 또는 공백을 담게 한다.
  - 문서의 요소(html)에 style을 추가하고 _this.value_ 를 담게 한다.
  - _addEventListner_ 에 _change_ _mousemove_ 이벤트를 추가해 실행되도록 한다.
