# Custom Video Player

- 11번째 챌린지 Custom Video Player
   + HTML Viedo Player를 Custom 해보자
   + Link [Custom_Video](https://chicori3.github.io/LearnJS/custom_video/)
```html
<div class="player">
      <video class="player__video viewer" src="652333414.mp4"></video>

      <div class="player__controls">
        <div class="progress">
          <div class="progress__filled"></div>
        </div>
        <button class="player__button toggle" title="Toggle Play">►</button>
        <input
          type="range"
          name="volume"
          class="player__slider"
          min="0"
          max="1"
          step="0.05"
          value="1"
        />
        <input
          type="range"
          name="playbackRate"
          class="player__slider"
          min="0.5"
          max="2"
          step="0.1"
          value="1"
        />
        <button data-skip="-10" class="player__button">« 10s</button>
        <button data-skip="25" class="player__button">25s »</button>
      </div>
    </div>
```
## 1. Video Element 상수 선언
  ```javascript
  const player = document.querySelector(".player");
  const video = player.querySelector(".viewer");
  const progress = player.querySelector(".progress");
  const progressBar = player.querySelector(".progress__filled");
  const toggle = player.querySelector(".toggle");
  const skipButtons = player.querySelectorAll("[data-skip]");
  const ranges = player.querySelectorAll(".player__slider");
  ```
   - Video custom에 필요한 모든 Element를 상수로 선언한다.
  
## 2. Video를 실행시키는 함수, 이벤트 생성
  ```javascript
  function togglePlay() {
    const method = video.paused ? "play" : "pause";
    video[method]();
  }
  
  video.addEventListener("click", togglePlay);
  ```
   - _method_ 는 Video가 멈춰 있을 때는 play, 실행 중일때는 pasue를 하는 조건문.
   - 이벤트리스너를 추가해 click 이벤트 발생 시 togglePlay 함수가 실행된다.
  
## 3. Video 상태에 따라 버튼 변경
  ```javascript
  function updateButton() {
    const icon = this.paused ? "▶️" : "❚ ❚";
    toggle.textContent = icon;
  }

  video.addEventListener("play", updateButton);
  video.addEventListener("pause", updateButton);
  ```
   - _icon_ 상수에 버튼이 바뀌는 조건문을 선언한다.
   - 이벤트리스너를 추가해 play, pause가 될 때마다 updateButton 함수를 실행한다.
   
## 4. 스킵 기능 추가
  ```javascript
  function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
  }
  
  skipButtons.forEach((button) => button.addEventListener("click", skip));
  ```
   - _parseFloat()_ 함수는 문자열을 실수로 반환한다.
   
## 4. 볼륨, 속도를 조절하는 range 추가
  ```javascript
  function handleRangeUpdate() {
    video[this.name] = this.value;
  }
  
  ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
  ranges.forEach((range) => range.addEventListener("mousemove", handleRangeUpdate));
  ```
   - range-bar에 이벤트리스너를 추가한다.

## 5. 재생 시간에 따른 재생 바 추가
  ```javascript
  function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
  }

  video.addEventListener("timeupdate", handleProgress);
  ```
   - Video의 남은 시간을 percent로 치환하여 업데이트한다.
   
## 6. 재생 바 이벤트 추가
  ```javascript
  function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }

  let mousedown = false;
  progress.addEventListener("click", scrub);
  progress.addEventListener("mousemove", () => mousedown && scrub(e));
  progress.addEventListener("mousedown", () => (mousedown = true));
  progress.addEventListener("mousedown", () => (mousedown = false));
  ```
   - 이벤트 발생 시 scrub() 함수가 실행된다.
   - 재생 바를 옮기거나 원하는 위치를 누르면 실시간으로 변경된다.
