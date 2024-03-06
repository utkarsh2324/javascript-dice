var random1= Math.random();
random1=random1*6;
random1=Math.floor(random1)+1;
var randomimage="./image/"+"dice"+random1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimage);

var random2=Math.floor(Math.random()*6)+1;
var randomimage2="./image/"+"dice"+random2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimage2);
if(random1>random2){
    document.querySelector("h1").innerHTML="🚩Player1 Wins";
}
else if(random2>random1){
    document.querySelector("h1").innerHTML="🚩Player2 Wins";
}
else {
    document.querySelector("h1").innerHTML="🚩DRAW";
}