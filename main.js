


const button = document.getElementById('button1');

button.addEventListener('click', event => {
    button.innerHTML = `Nombre de clics : ${event.detail}`;   //nombre de click  
});






let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/beauty.png') {
      myImage.setAttribute('src', 'images/beauty2.png');    //chagement d'image
    } else {
      myImage.setAttribute('src', 'images/beauty.png');
    }
});



let myButton = document.getElementById('button1');    //reference sur le bouton crée
let myHeading = document.querySelector('h1');      //reference sur le titre de la page


function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);                                // demander à l'utilisateur de saisir son nom
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






setTimeout(function visitwebsite()
{  let Mychoice = prompt ('voulez vous visiter le fameux site xxxvidsxxx? o/n'); 
   localStorage.setItem('reponse',Mychoice);
                                                                                        //visiter le site ou non

},10000);
visitwebsite();
let choice=localStorage.getItem('reponse');

if (choice ==='o') { window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); } //redirect vers youtube









let Mypolice=document.getElementById('police');

function changepolice ()
{document.querySelector('p').style.color='blue' ;            //changer la police des titres et paragraphe
                                                                           
document.querySelector('h2').style.color='green' ;  
document.querySelector('p').style.fontFamily ='courier' ; 
document.querySelector('h2').style.fontFamily ='Comic Sans'; 
document.getElementsByClassName("troisiemetitre").style.color='green' ;}

Mypolice.addEventListener ('click' , function() { 
  changepolice ();

});




