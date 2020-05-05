# JAVASCRIPT Reference vs Copying

- 13번째 챌린지 JAVASCRIPT Reference vs Copying
   + 자바스크립트의 참조와 복사를 알아보자.

## 1.
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
 
 --진행중--
