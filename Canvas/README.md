# Canvas

- 8번째 챌린지 Canvas
   + HTML에 Canvas를 만들어보자
   + Link [Canvas](https://chicori3.github.io/LearnJS/Canvas/)
```html
<canvas id="draw" width="800" height="800"></canvas>
```
## 1. Canvas 설정
  ```javascript
   const canvas = document.querySelector("#draw");
   const ctx = canvas.getContext("2d");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   ctx.strokeStyle = "#BADA55";
   ctx.lineJoin = "round";
   ctx.lineCap = "round";
   ctx.lineWidth = 100;
  ```
   - _canvas_ 는 기본적으로 비어있어 설정이 필요하다.
   - 입체적이지 않은 그림판으로 활용할 것이기에 _getContext("2d")_ 를 설정한다.
  
## 2. 그리기 효과를 실시간으로 변경하기 위한 변수 설정
  ```javascript
   let isDrawing = false;
   let lastX = 0;
   let lastY = 0;
   let hue = 0;
   let direction = true;
  ```
   - 첫번째 줄은 현재 Drawing 중인지 판단한다.
   - _lastX,Y_ 는 시작 지점의 좌표를 뜻한다.
   - _hue_ 는 기본 색상을 뜻하며 _direction_ 은 선의 넓이를 뜻한다.
  
## 3. 그리기 효과를 실시간으로 변경하기 위한 함수 작성
  ```javascript
   function draw(e) {
      if (!isDrawing) return; // stop the fn from running when they are not moused down
      console.log(e);
      ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
      ctx.beginPath(); // start from
      ctx.moveTo(lastX, lastY); // go to
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      [lastX, lastY] = [e.offsetX, e.offsetY];
      hue++;
      if (hue >= 360) {
       hue = 0;
      }
      if (ctx.lineWidth >= 150 || ctx.lineWidth <= 1) {
       direction = !direction;
      }

      if (direction) {
       ctx.lineWidth++;
      } else {
       ctx.lineWidth--;
      }
   }
  ```
   - _(!isDrawing)_ 은 마우스를 누르고 있지 않을 때를 뜻한다.
   - _strokeStyle_ 은 선의 특징을 설정하는 데 여기선 _hue_ 를 변하게 설정했다.
   - _beginPath()_ 는 선의 시작을 알리고 _moveTo_ _lineTo_ 로 그리는 좌표의 시작과 끝을 설정한다.
   - _hue++_ 를 작성해 색상의 값이 증가하게 했고 _if_ 문을 사용하여 색상이 계속해서 변하게 했다.
   - _if(direction)_ 을 추가해 선의 굵기도 변하도록 설정했다.
 
## 4. 그리기 효과를 적용하기 위한 이벤트 등록.
  ```javascript
   canvas.addEventListener("mousedown", (e) => {
   isDrawing = true;
   [lastX, lastY] = [e.offsetX, e.offsetY];
   });
   canvas.addEventListener("mousemove", draw);
   canvas.addEventListener("mouseup", () => (isDrawing = false));
   canvas.addEventListener("mouseout", () => (isDrawing = false));
  ```
   - _mousedown_ 이벤트를 걸어 마우스를 누르면 _isDrawing_ 이 _true_ 가 된다.
   - _mouseup_ _mouseout_ 이벤트로 마우스를 떼거나 설정한 Canvas를 벗어나면 이벤트가 종료되게 설정한다.
