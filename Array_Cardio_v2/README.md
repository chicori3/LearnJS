# Array Cardio V2

- 6번째 챌린지 Array Cardio V1
  - Array의 Object들을 다루는 다양한 방법을 학습

```javascript
const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];
```

## 1. Array.prototype.filter()

- 1500년도에 태어난 inventors를 추려내기<br>

```javascript
const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);

console.table(fifteen);
```

- filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.

## 2. Array.prototype.map()

- inventor의 first와 last를 배열로 뽑기<br>

```javascript
const fullName = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);

console.log(fullName);
```

- map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환한다.

## 3. Array.prototype.sort()

1.  inventor의 생년을 기준으로 늙은 순으로 정렬<br>

```javascript
const age = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

console.table(age);
```

2.  inventor의 살아온 햇수 구하기<br>

```javascript
const oldest = inventors.sort(function (a, b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1;
});

console.table(oldest);
```

- sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환한다.

## 4. Array.prototype.reduce()

- 모든 inventor의 나이의 합 구하기<br>

```javascript
const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);
```

- reduce() 메서드는 배열의 각 요소에 대해 주어진 reduce 함수를 실행하고, 하나의 결과값을 반환다.
