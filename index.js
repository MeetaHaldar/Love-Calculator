


var randomNumber =Math.floor(Math.random()*100)

if(randomNumber>50 && randomNumber<89 )
{
    document.querySelector("p").innerHTML=("You are falling in love = ") + randomNumber+"%";
    document.querySelector('img').src='https://thumbs.gfycat.com/EllipticalSnoopyCrocodile-size_restricted.gif';

}
else if(randomNumber>90)
{
    document.querySelector("p").innerHTML=("True love is there = ") + randomNumber+"%";
    document.querySelector('img').src='https://c.tenor.com/0aJdWy--KOcAAAAC/turulove-true-love.gif';

}
else{
    document.querySelector("p").innerHTML=("Fake love!! = ") + randomNumber+"%";
    document.querySelector('img').src='https://i0.wp.com/www.eventstodayz.com/wp-content/uploads/2020/01/Heart-broken-gif.gif?fit=220%2C203&ssl=1';

}
