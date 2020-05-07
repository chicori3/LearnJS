# JAVASCRIPT Reference vs Copying

- 13번째 챌린지 JAVASCRIPT Reference vs Copying
   + 자바스크립트의 참조와 복사를 알아보자.

## 1. String, Number, Boolean
  ```javascript
   let age = 100;
   let age2 = age;
   console.log(age, age2); // 100, 100
   age = 200;
   console.log(age, age2); // 200, 100

   let name = 'Gi';
   let name2 = name;
   console.log(name, name2); // Gi, Gi
   name = 'GiChul';
   console.log(name, name2); // Gi, GiChul
  ```
   - _string_ _number_ _boolean_ 은 copy 된다.
   - age의 값이 변했다고 age2의 값이 변하진 않는다.
 
## 2. Array
```javascript
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players;

console.log(players, team);
// ['Wes', 'Sarah', 'Ryan', 'Poppy'],['Wes', 'Sarah', 'Ryan', 'Poppy']

team[3] = 'Lux';
console.log(players, team);
// ['Wes', 'Sarah', 'Ryan', 'Lux'],['Wes', 'Sarah', 'Ryan', 'Lux']

//방법
//const team2 = players.slice();
//const team3 = [].concat(players);
//const team4 = [...players];
//const team5 = Array.from(players);
```
   - 배열은 위와 다르게 _players_ 와 _team_ 이 둘 다 변한다.
   - _slice()_ 는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환한다. 원본 배열은 바뀌지 않는다.
   - _concat()_ 는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환한다.
   - 전개구문을 이용한다.
   - _Array.from()_ 는 유사 배열 객체나 반복 가능한 객체를 얕게 복사해 새로운 배열 객체를 만든다.

## 3. Object
```javascript
const person = {
   name: 'Wes Bos', age: 80
};
const captain = person;
captain.number = 99;
console.log(person) // {name: 'Wes Bos', age: 80, number: 99}

//방법
//const cap2 = Object.assign({}, person, { number: 99, age: 12 });
//const cap3 = {...person};
```
   - 객체 또한 배열처럼 두 변수가 연결되어 있다.
   - _Object.assign()_ 는 열거할 수 있는 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사할 때 사용하며 대상 객체를 반환한다.
   - 전개구문을 이용한다.

## 4. Obejct > something
```javascript
const wes = {
   name: 'Wes',
   age: 100,
   social: {
      twitter: '@wesbos',
      facebook: 'wesbos.developer'
   }
};
const dev2 = JSON.parse(JSON.stringify(wes));
dev2.social.twitter = 'Hi'
```
   - 객체 안의 객체나 배열은 복사가 아닌 참조가 된다.
   - _JSON_ 을 파싱하는 방법을 이용하면 복사를 할 수 있다.
