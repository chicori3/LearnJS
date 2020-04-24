# Type Ahead

+ 9번째 챌린지 DevToolsDomination
  - 콘솔창을 가지고 놀아보자
```html
<p onClick="makeGreen()">×BREAK×DOWN×</p>
```
```javascript
const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

```
## 1. Regular, Interpolated, Styled

```javascript
  console.log("hello"); // Regular
  
  console.log("hello i am a %s string!", "😃"); // Interpolated
  
  console.log(
    "%c i am some great text",
    "font-size:30px; background:red; text-shadow:10px 10px 0 blue"
  ); // Styled
```

  + _Regular_ 기본적인 콘솔 출력 방법
  + _Interpolated_ %s 자리에 ,뒤의 값이 들어감 (형식 지정자)
  + _Styled_ %c를 붙이면 , 뒤에 style 추가 가능
  
## 2. Warning, Error, Info

```javascript
  console.warn("OH NOOO"); // Warning
  
  console.error("OMG"); // Error
  
  console.info("Crocodiles eat 3-4 people per year"); // Info
```

  + _Waring_ 노란 경고 표시
  + _Error_ 빨간 오류 표시
  + _Info_ 파란 느낌표 표시
  
## 3. Testing, Clearing, Viewing DOM Elements

```javascript
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "that is wrong!"); // Testing

console.clear(); // Clearing

console.log(p);
console.dir(p); // Viewing DOM Elements
```

  + _Testing_ _p class_ 에 "ouch"가 포함되어 있지 않으면 "that is wrong!" 출력
  + _Clearing_ 콘솔창의 내용을 지운다
  + _Viewing DOM Elements_ _log_ 는 해당 Element를, _dir_ 는 해당 Element의 모든 property를 보여준다
  
## 4. Grouping together, Counting, Timing

```javascript
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`this is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
}); // Grouping together

console.count("wes");
console.count("wes");
console.count("steve");
console.count("wes");
console.count("steve");
console.count("steve");
console.count("wes");
console.count("steve"); // Counting

console.time("fetching data");

fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });

console.table(dogs); // Timing
```

  + _Grouping together_ groupCollapsed와 groupEnd 사이에 새 그룹 로깅을 작성
  + _Counting_ 입력된 텍스트로 몇 번 카운트되었는지 출력
  + _Timing_ time과 timeEnd 사이에 데이터를 받아와 타이머를 작동
