# Array Cardio V1

- 4번째 챌린지 Array Cardio V1
   + Array의 Object들을 다루는 다양한 방법을 학습
```javascript
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];
```
## 1. Array.prototype.filter()
   + 1500년도에 태어난 inventors를 추려내기<br>
  ```javascript
  const fifteen = inventors.filter(
    inventor => (inventor.year >= 1500 && inventor.year < 1600)
  );

  console.table(fifteen);
  ```
   - filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
  
## 2. Array.prototype.map()
   + inventor의 first와 last를 배열로 뽑기<br>
  ```javascript
  const fullName = inventors.map(
    inventor => `${inventor.first} ${inventor.last}`
  );

console.log(fullName);
  ```
   - map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
  
## 3. Array.prototype.sort()
   1. inventor의 생년을 기준으로 늙은 순으로 정렬<br>
  ```javascript
  const age = inventors.sort(
    (a, b) => (a.year > b.year ? 1 : -1)
   );

  console.table(age);
  ```
   2. inventor의 살아온 햇수 구하기<br>
  ```javascript
  const oldest = inventors.sort(function(a, b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1;
  });

  console.table(oldest);
  ```
  - sort() 메서드는 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환합니다.
 
## 4. Array.prototype.reduce()
   + 모든 inventor의 나이의 합 구하기<br>
  ```javascript
  const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
  }, 0);
  
  console.log(totalYears);
  ```
   - reduce() 메서드는 배열의 각 요소에 대해 주어진 reduce 함수를 실행하고, 하나의 결과값을 반환합니다.
