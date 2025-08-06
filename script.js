const keyMap = {
    'a': 'box1P',
    's': 'box2P',
    'd': 'box3P',
    'f': 'box4P',
    'g': 'box5P',
    'h': 'box6P',
    'j': 'box7P',
    'w': 'box8P',
    'e': 'box9P',
    't': 'box10P',
    'y': 'box11P',
    'u': 'box12P'
  };

  function triggerPressEffect(element) {
    element.classList.add("pressed");
    setTimeout(() => {
      element.classList.remove("pressed");
    }, 100);
  }

  document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();
    const boxId = keyMap[key];
    if (boxId) {
      const box = document.getElementById(boxId);
      if (box) triggerPressEffect(box);
    }
});

  Object.values(keyMap).forEach(id => {
    const box = document.getElementById(id);
    if (box) {
      box.addEventListener("mousedown", () => triggerPressEffect(box));
    }
  });
