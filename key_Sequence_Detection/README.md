# Key Sequence Detection

- 12번째 챌린지 Key Sequence Detection
   + 특정 키 조합을 타이핑하면 이벤트가 실행된다.
   
```html
   <head>
     <meta charset="UTF-8">
     <title>Key Detection</title>
     <script type="text/javascript" src="https://www.cornify.com/js/cornify.js"></script>
   </head>
   <body>
   <script>
   const pressed = [];
   const secretCode = 'wesbos';

   window.addEventListener('keyup', (e) => {
     console.log(e.key);
     pressed.push(e.key);
     pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
     if (pressed.join('').includes(secretCode)) {
       console.log('DING DING!');
       cornify_add();
     }
     console.log(pressed);
   });
   </script>
```
## 1. 상수 선언
  ```javascript
   const pressed = [];
   const secretCode = 'wesbos';
  ```
   - 빈 배열과 이벤트 실행에 필요한 비밀암호를 선언한다.
  
## 2. 누른 키를 배열에 추가하고 비밀암호와 일치하면 이벤트 실행
  ```javascript
   window.addEventListener("keyup", (e) => {
     console.log(e.key);
     pressed.push(e.key);
     pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
     if (pressed.join("").includes(secretCode)) {
       console.log("Ding Ding!");
       cornify_add();
     }
     console.log(pressed);
   });
  ```
   - 입력한 키를 빈 배열에 _push_ 한다.
   - splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다.
   - 배열의 길이를 비밀암호의 길이와 일치하도록 설정한다.
   - join() 메서드는 배열의 모든 요소를 연결해 하나의 문자열로 만든다.
   - includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별한다.
   - 배열에 추가된 키 값이 비밀암호와 일치하면 설정한 이벤트가 실행된다.
