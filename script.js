document.addEventListener("keydown",function(event){
    const key= event.key.toLowerCase();
    switch(key){
        case 'a':
            document.getElementById("audioA").currentTime=0;
            document.getElementById("audioA").play(key);
            break;
        case 's':
                document.getElementById("audioS").currentTime=0;
                document.getElementById("audioS").play(key);
                break;
        case 'd':
                document.getElementById("audioD").currentTime=0;
                document.getElementById("audioD").play(key);
                break;
        case 'f':
                document.getElementById("audioF").currentTime=0;
                document.getElementById("audioF").play(key);
                break;
        case 'g':
                document.getElementById("audioG").currentTime=0;
                document.getElementById("audioG").play(key);
                break;
        case 'h':
                document.getElementById("audioH").currentTime=0;
                document.getElementById("audioH").play(key);
                break;
        case 'j':
                document.getElementById("audioJ").currentTime=0;
                document.getElementById("audioJ").play(key);
                break;
    }
    let A = document.querySelector("#box1P");
    A.addEventListener("click",function(){
        document.getElementById("audioA").currentTime=0;
        document.getElementById("audioA").play(key);
    })
    let S = document.querySelector("#box2P");
    S.addEventListener("click",function(){
        document.getElementById("audioS").currentTime=0;
        document.getElementById("audioS").play(key);
    })
    let D = document.querySelector("#box3P");
    D.addEventListener("click",function(){
        document.getElementById("audioD").currentTime=0;
        document.getElementById("audioD").play(key);
    })
    let F = document.querySelector("#box4P");
    F.addEventListener("click",function(){
        document.getElementById("audioF").currentTime=0;
        document.getElementById("audioF").play(key);
    })
    let G = document.querySelector("#box5P");
    G.addEventListener("click",function(){
        document.getElementById("audioG").currentTime=0;
        document.getElementById("audioG").play(key);
    })
    let H = document.querySelector("#box6P");
    H.addEventListener("click",function(){
        document.getElementById("audioH").currentTime=0;
        document.getElementById("audioH").play(key);
    })
    let J = document.querySelector("#box7P");
    J.addEventListener("click",function(){
        document.getElementById("audioJ").currentTime=0;
        document.getElementById("audioJ").play(key);
    })
    
})
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
// 1. Mapping keys to their corresponding box IDs


// 2. Function to add and remove the "pressed" effect
function triggerPressEffect(element) {
  element.classList.add("pressed");
  setTimeout(() => {
    element.classList.remove("pressed");
  }, 100);
}

// 3. Add keydown event listener for keyboard input
document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  const boxId = keyMap[key];
  if (boxId) {
    const box = document.getElementById(boxId);
    if (box) triggerPressEffect(box);
  }
});

// 4. Add mousedown event listeners for mouse clicks
Object.values(keyMap).forEach(id => {
  const box = document.getElementById(id);
  if (box) {
    box.addEventListener("mousedown", () => triggerPressEffect(box));
  }
});
