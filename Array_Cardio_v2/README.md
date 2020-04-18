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

## 1. Array.prototype.some()

- 19세 이상이 한 사람이라도 있는가   

```javascript
const isAdult = people.some(
  (person) => new Date().getFullYear() - person.year >= 19
);

console.log({ isAdult });
```

- _some()_ 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트한다.
- 빈 배열에서는 무조건 _false_ 를 반환한다.

## 2. Array.prototype.every()

- inventor의 first와 last를 배열로 뽑기<br>

```javascript
const allAdult = people.every(
  (person) => new Date().getFullYear() - person.year >= 19
);

console.log({ allAdult });
```

- _every()_ 메서드는 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트한다.
- 빈 배열에서는 무조건 _true_ 를 반환한다.

## 3. Array.prototype.find()

- ID 823423의 comment 찾기

```javascript
const comment = comments.find((comment) => comment.id === 823423);

console.log(comment);
```
- _find()_ 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환한다.
- 그런 요소가 없다면 _undefined_ 를 반환한다.

## 4. Array.prototype.findIndex()

- ID 823423의 comment 지우기

```javascript
const index = comments.findIndex((comment) => comment.id === 823423);

console.log(index);

const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];

console.table(newComments);

```

- _findIndex()_ 메서드는 주어진 판별 함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환한다.
- 만족하는 요소가 없으면 -1을 반환한다.
