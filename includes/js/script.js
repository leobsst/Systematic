//FONCTION DIV SUIVANTE
var isIE = document.all;
var mouseX = 0;
var mouseY = 0;

const bulledivo = document.getElementById('bullenone');
const divmouse = document.getElementById('img_idx_ctn');

divmouse.addEventListener('mouseenter', (event) => {
  bulledivo.classList.add("bullediv");

  divmouse.addEventListener('mousemove', (event) => {

    posY = 8 + event.pageY;
    posX = 8 + event.pageX;
    posMouse = "left:"+posX+"px;top:"+posY+"px";

    document.querySelector('.bullediv').setAttribute("style", posMouse);
  });
});

divmouse.addEventListener('mouseleave', (event) => {
  bulledivo.classList.remove("bullediv");
});

//FONCTION ALERTE

function NewsletterAlert() {
  alert("Vous êtes maintenant inscrit à la newsletter !");
};

//FONCTION TEXT

const targettext = document.querySelector('.idx_rgt_sct_p');
let array = ["venir", "voir", "découvrir"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement('span');
  targettext.appendChild(letter);

  letter.textContent = array[wordIndex] [letterIndex];

  setTimeout(() => {
    letter.remove(); 
  }, 2000);
}

const loop = () => {
  setTimeout(() => {
    if(wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if(letterIndex < array[wordIndex].length){
      createLetter();
      letterIndex++;
      loop()
    }else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 60)
}
loop();



//BTN TOP PAGE

 const up = document.querySelector('.up_page');
 window.addEventListener('scroll', checkheight);

 function checkheight() {
  if(window.scrollY > 600) {
    up.style.display = "block";

  }else {
    up.style.display = "none";
  }
 }

 up.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
 })