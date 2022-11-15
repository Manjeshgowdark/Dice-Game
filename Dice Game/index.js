var randomnumber1=Math.floor(Math.random()*6)+1; //1-6

var randomdiceImage = "dice"+randomnumber1+".png"; //dice1.png - dice6.png

var randomImageSource="images/"+randomdiceImage;//images/dice1.png-images/dice2.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);

var randomnumber2=Math.floor(Math.random()*6)+1;

var randomdiceImage = "dice"+randomnumber2+".png"; //dice1.png - dice6.png

var randomImageSource2="images/"+randomdiceImage;//images/dice1.png-images/dice2.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageSource2);

var randomnumber2 = Math.floor(Math.random()*6)+1;

var randomnumber3 = Math.floor(Math.random()*6)+1;



if(randomnumber1 > randomnumber2){
  document.querySelector("h1").innerHTML=" Player 1 Wins 🏆";

}
else if(randomnumber2>randomnumber1){
  document.querySelector("h1").innerHTML = "Player 2 Wins 🏆";
}
else{
  document.querySelector("h1").innerHTML="Draw 😄";
}
