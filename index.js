// selecting button 
const generateBtn = document.querySelector("#generate");


// for verification of presence of input value 
let myInput =document.querySelector(".input");

// as a default we are setting button to disable
generateBtn.disabled = true;

myInput.addEventListener("change", stateHandle);

function stateHandle() {
    if(document.querySelector(".input").value==="") {
        generateBtn.disabled = true;
        resetBtn.disabled=true;
    } else {
        generateBtn.disabled = false;
        resetBtn.disabled=false;
    }
}

// for reset button

const resetBtn=document.querySelector("#reset");
resetBtn.disabled=true;
resetBtn.addEventListener("click",()=>
{
    {
        document.getElementById("myForm").reset();  
        generateBtn.disabled = true;
        resetBtn.disabled=true;
        document.querySelector("p").innerHTML="";
        document.querySelector('img').src="https://c.tenor.com/Gj7mlQDKYqAAAAAC/white-cat-grey-cat.gif";


    } 
});




// for genrating random number creating a function named generateBtn 
generateBtn.addEventListener("click",() => {
    var randomNumber =Math.floor(Math.random()*100);
    console.log(randomNumber);

// for showing gif 
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

});
