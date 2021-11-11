


var randomNumber =Math.floor(Math.random()*100)

if(randomNumber>50 && randomNumber<89 )
{
    document.querySelector("p").innerHTML=("You are falling in love");
}
else if(randomNumber>90)
{
    document.querySelector("p").innerHTML=("True love is there");
}
else{
    document.querySelector("p").innerHTML=("Fake love!!");
}
