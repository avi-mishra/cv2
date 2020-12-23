
// for(var i=0; i<document.querySelectorAll("button").length; i++)
// document.querySelectorAll("button")[i].addEventListener("click", function () {
// this.style.color="white"; //this selects the button that gets clicked
// });


/* var houseKeeper{                    object-housekeeper
    name="jane",                         //property1
    age=21,                              //property2 
    cleans=["bedrooms","lobby"]          //property3
} */
/* to create a no. of housekeepers, we create a constructor fn.
function HouseKeeper(name,age,cleans) {     //name of fn.is capatilised
    this.name=name;
    this.age=age;
    this.cleans=cleans;
}
var houseKeeper=new HouseKeeper("timmy",19,["bedroom","lobby"]);
 */

 for(var i=0; i<document.querySelectorAll("button").length; i++)
 document.querySelectorAll("button")[i].addEventListener("click", function() {
     var buttonInnerHtml= this.innerHTML;   //gives one out of w,a,s,d,j,k,l
     switch(buttonInnerHtml) {
         case "w":
             var crash=new Audio('sounds/crash.mp3');
             crash.play();
             break;
        case "a":
             var kickBass=new Audio('sounds/kick-bass.mp3');
             kickBass.play();
             break;
        case "s":
             var snare=new Audio('sounds/snare.mp3');
            snare.play();
            break;    
        case "d":
             var tom1=new Audio('sounds/tom-1.mp3');
             tom1.play();
             break;
        case "j":
             var tom2=new Audio('sounds/tom-2.mp3');
             tom2.play();
             break;
        case "k":
             var tom3=new Audio('sounds/tom-3.mp3');
             tom3.play();
             break;
         case "l":
             var tom4=new Audio('sounds/tom-4.mp3');
             tom4.play();
             break;
        default:
            console.log(buttonInnerHtml);
     }
     
 });