
var n1=Math.random();
n1=Math.floor(6*n1+1);
document.querySelectorAll("img")[0].setAttribute("src","dice"+n1+".png");
var n2=Math.random();
n2=Math.floor(6*n2+1);
document.querySelectorAll("img")[1].setAttribute("src","dice"+n2+".png");

if(n1>n2){
    document.querySelector("h1").innerHTML="Player1 wins🏆";
}
else if(n2>n1){
    document.querySelector("h1").innerHTML="Player2 wins🏆";
}
else{
    document.querySelector("h1").innerHTML="Draw😊";
}