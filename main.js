


const button = document.getElementById('button1');

button.addEventListener('click', event => {
  button.innerHTML = `Nombre de clics : ${event.detail}`;
});






let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox.png') {
      myImage.setAttribute('src', 'images/firefox2.png');
    } else {
      myImage.setAttribute('src', 'images/firefox.png');
    }
});



let myButton = document.getElementById('button1');    //referencer sur le bouton crée
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


let myvariable=document.querySelector ('html');
function visitwebsite()
{  let Mychoice = prompt ('voulez vous visiter le fameux site xxxvidsxxx? o/n'); 
   localStorage.setItem('reponse',Mychoice);


}
visitwebsite();
let choice=localStorage.getItem('reponse');


if (choice ==='o') { window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); } 

