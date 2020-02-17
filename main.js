

const button = document.querySelector('button');

button.addEventListener('click', event => {
  button.innerHTML = `Nombre de clics : ${event.detail}`;
});






let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'firefox.png') {
      myImage.setAttribute('src', 'firefox2.png');
    } else {
      myImage.setAttribute('src', 'firefox.png');
    }
});



let myButton = document.querySelector('button');    //referencer sur le bouton crée
let myHeading = document.querySelector('h1');      //referencer sur le titre de la page


function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Mozilla est cool, ' + myName;
  }

  if (!localStorage.getItem('nom')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Mozilla est cool, ' + storedName;
  } 
 
  myButton.addEventListener('click', function() {
    setUserName();
  });





