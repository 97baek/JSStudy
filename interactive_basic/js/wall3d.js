(() => {
  const houseElem = document.querySelector('.house');
  const stageElem = document.querySelector('.stage');
  const progressBar = document.querySelector('.progress-bar');
  const selectBtn = document.querySelector('.select-character');
  const mousePos = { x: 0, y: 0 };
  let maxScrollValue = 0;

  function scrollHandler() {
    const scrollPer = pageYOffset / maxScrollValue;
    const zMove = scrollPer * 970 - 490;

    houseElem.style.transform = `translateZ(${zMove}vw)`;
    progressBar.style.width = `${scrollPer * 100}%`;
  }

  function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }

  function mousemoveHandler(e) {
    mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
    mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
    stageElem.style.transform = `rotateX(${mousePos.y * 5}deg) rotateY(${mousePos.x * 5}deg)`;
  }

  function characterMakeHandler(e) {
    new Character({
      xPos: (e.clientX / window.innerWidth) * 100,
    });
  }

  function clickBtnHandler(e) {
    document.body.dataset.char = e.target.dataset.char;
  }

  function init() {
    window.addEventListener('scroll', scrollHandler);
    window.addEventListener('resize', resizeHandler);
    window.addEventListener('mousemove', mousemoveHandler);
    stageElem.addEventListener('click', characterMakeHandler);
    selectBtn.addEventListener('click', clickBtnHandler);
    resizeHandler();
  }

  init();
})();
