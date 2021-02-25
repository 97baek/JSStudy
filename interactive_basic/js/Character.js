function Character(info) {
  this.mainElem = document.createElement('div');
  this.mainElem.classList.add('character');
  this.mainElem.innerHTML = `
        <div class="character-face-con character-head">
        <div class="character-face character-head-face face-front"></div>
        <div class="character-face character-head-face face-back"></div>
        </div>
        <div class="character-face-con character-torso">
        <div class="character-face character-torso-face face-front"></div>
        <div class="character-face character-torso-face face-back"></div>
        </div>
        <div class="character-face-con character-arm character-arm-right">
        <div class="character-face character-arm-face face-front"></div>
        <div class="character-face character-arm-face face-back"></div>
        </div>
        <div class="character-face-con character-arm character-arm-left">
        <div class="character-face character-arm-face face-front"></div>
        <div class="character-face character-arm-face face-back"></div>
        </div>
        <div class="character-face-con character-leg character-leg-left">
        <div class="character-face character-leg-face face-front"></div>
        <div class="character-face character-leg-face face-back"></div>
        </div>
        <div class="character-face-con character-leg character-leg-right">
        <div class="character-face character-leg-face face-front"></div>
        <div class="character-face character-leg-face face-back"></div>
        </div>
  `;

  document.querySelector('.stage').appendChild(this.mainElem);

  this.mainElem.style.left = `${info.xPos}%`;
  this.scrollState = false; // 스크롤중인 상태를 체크
  this.lastYOffset = 0; // 바로 이전 스크롤 위치
  this.xPos = info.xPos;
  this.direction;
  this.speed = Math.random() * 0.3 + 0.2;
  this.keydownState = false; // 키가 눌려있는지 아닌지를 체크
  this.rafId;
  this.init();
}

Character.prototype = {
  constructor: Character,
  init: function () {
    const self = this;
    window.addEventListener('scroll', function () {
      clearTimeout(self.scrollState);

      if (!self.scrollState) {
        self.mainElem.classList.add('running');
        console.log('러닝');
      }

      self.scrollState = setTimeout(function () {
        self.scrollState = false;
        self.mainElem.classList.remove('running');
      }, 500);

      if (self.lastYOffset < pageYOffset) {
        // 스크롤 내렸을 때
        self.mainElem.dataset.direction = 'forward';
      } else {
        // 스크롤 올렸을 때
        self.mainElem.dataset.direction = 'backward';
      }
      self.lastYOffset = pageYOffset;
    });
    window.addEventListener('keydown', function (e) {
      if (self.keydownState) return;
      if (e.keyCode === 37) {
        self.mainElem.dataset.direction = 'left';
        self.mainElem.classList.add('running');
        self.direction = 'left';
        self.run();
        self.keydownState = true;
      } else if (e.keyCode === 39) {
        self.mainElem.dataset.direction = 'right';
        self.mainElem.classList.add('running');
        self.direction = 'right';
        self.run();
        self.keydownState = true;
      }
    });
    window.addEventListener('keyup', function (e) {
      self.mainElem.classList.remove('running');
      cancelAnimationFrame(self.rafId);
      self.keydownState = false;
    });
  },
  run: function () {
    const self = this;

    if (self.direction === 'left') {
      self.xPos -= self.speed;
    } else if (self.direction === 'right') {
      self.xPos += self.speed;
    }

    if (self.xPos < 2) {
      self.xPos = 2;
    } else if (self.xPos > 88) {
      self.xPos = 88;
    }

    self.mainElem.style.left = `${self.xPos}%`;

    self.rafId = requestAnimationFrame(self.run.bind(self));
  },
};
