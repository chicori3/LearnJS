# Type Ahead

+ 6번째 챌린지 Type Ahead
  - 웹에서 정보를 받아 Search 기능을 만들어보자.
  - 이해하기 어려운 것들이 많았다.
  - Link https://chicori3.github.io/LearnJS/type_ahead

## 1. 데이터 이용하기

```javascript
  const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

  const cities = [];

  fetch(endpoint)
    .then((blob) => blob.json())
    .then((data) => cities.push(...data));
```

  + 변수 _endpoint_ 의 데이터를 _fetch()_ 로 불러와 _cities_ 배열에 추가한다.
  + _fetch()_ 는 비동기 함수, _then()_ 은 콜백함수를 실행시킨다.
  + _(...data)_ 는 전개 구문으로 배열의 값을 변환하는데 사용한다.

## 2. 데이터와 검색어가 일치하는지 확인하는 함수 생성

```javascript
  function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}
```

  + _filter()_ 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환한다.
  + _"gi"_ 는 _global match_ 와 _ignore case_ 를 뜻한다.
  + 검색한 단어가 도시나 주의 _regex_ 값을 만족시킬 때 _return_ 한다. 
  
## 3. 입력한 단어로 결과값 찾기

```javascript
function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
    <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
    </li>
    `;
    })
    .join("");
  suggestions.innerHTML = html;
}
```

  + _findMatches()_ 를 먼저 호출하여 일치하는 값을 _matchArray_ 에 담는다.
  + _map()_ 을 이용해 _matchArray_ 의 값을 새로운 배열로 추가한다.
  + _join()_ 은 배열의 모든 요소를 연결해 하나의 문자열로 만들어준다.
  + 도시와 주의 검색결과를 _html_ 의 요소를 변형시켜 대입하게 하고 인구수를 표시하게 한다.
  
## 4. 이벤트를 추가한다

```javascript
  const searchInput = document.querySelector(".search");
  const suggestions = document.querySelector(".suggestions");

  searchInput.addEventListener("change", displayMatches);
  searchInput.addEventListener("keyup", displayMatches);
```

  + _change_ _keyup_ 이벤트가 발생하면 _displayMatches_ 가 실행된다.
