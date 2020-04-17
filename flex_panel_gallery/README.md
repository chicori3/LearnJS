# Flex Panel Gallery

+ 5번째 챌린지 Flex Panel Gallery
  - Flex-box의 기능을 배워보자.
  - Link https://chicori3.github.io/LearnJS/flex_panel_gallery

## 1. Panel에 Flex 적용

```css
  .panel{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
    }
```
  - _display:flex_ 는 부모에게 부여해야 한다.
  - _flex box_ 는 유연한 레이아웃을 잡기 편하다.
  - _direction_ 은 방향, _align_items_ 와 _justify-content_ 는 정렬에 관한 속성이다.
  - _flex:1_ 은 각 _panel class_ 의 크기를 브라우저의 크기와 균등하게 맞추는 속성이다. 

## 2. Panel에 효과 적용

```css
  .panel > *:first-child {
  transform: translateY(-100%);
}

.panel.open-active > *:first-child {
  transform: translateY(0);
}

.panel > *:last-child {
  transform: translateY(100%);
}

.panel.panel.open-active > *:last-child {
  transform: translateY(0);
}
```

  - 각 _panel_ 에 _transform:translateY(-100%)_ 를 설정해 보이지 않게 한다.
  - _open-active_ 속성이 추가되면 _transform_ 의 값을 초기화해 위에서 아래로 내려오도록 한다.
  
## 3. Javascript로 효과 적용

```javascript
  const panels = document.querySelectorAll(".panel");

  function toggleOpen() {
    this.classList.toggle("open");
  }

  function toggleActive(e) {
    if (e.propertyName.includes("flex")) {
      this.classList.toggle("open-active");
    }
  }

  panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
  panels.forEach((panel) =>
    panel.addEventListener("transitionend", toggleActive)
  );
```

  - _toggleOpen_ 함수는 이벤트 발생 시 _open class_ 를 toggle 한다.
  - _toggleActive_ 함수는 _flex_ 속성을 가졌다면 _open-active class_ 를 toggle 하게 한다.
  - _panel_ 을 클릭 시 _toggleOpen_ 함수를 실행, _transitionend_ 가 되면 _toggleActive_ 가 실행되게 한다.
