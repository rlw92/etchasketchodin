let main = document.querySelector(".main");



//options for sizing: 16*16=256  32*32=1024   64*64=4096
//padding =10px we have a border of 1px space=11px
/*to align the boxes the main window width 
needs to be 2*(11*sizingnumber) */
//so for 16*16 width would be 2*(11*16), for 32 2*(11*32) etc
/*we would then put another variable as the multipled return
to keep the function below looping */
/*we need to make this into an equation that works and can be 
altered in the web page*/

//let s be the amount you want, 7 for example would be a 7*7 grid//
let s =  16;
/* commented out to try create a fixed width window
//mww can be main window width//
let mww = 2*(11*s); */
// mw is gonna access main window of the grid
let mw = document.querySelector(".main");
//mw.style.width = mww+"px";
mainWidth = 350 
mw.style.width = mainWidth +"px";



let div = document.querySelector(".grids");

//create makes the grid and squares and is immediately called
function create(){
  //loop can be the total amount of boxes needed so s*s or ://
let loop = s**2;
//padding is the size of the squares keep in mind the 1px for the border, mainWidth is the current width of the main//

padding = (mainWidth/2)/s-1;
for(i=0;i<loop;i++){
let div = document.createElement("div");
div.className="grids";
div.style.cssText ="border:solid 1px black;flex:auto;padding:" + padding + "px";
main.appendChild(div);
}
}
create();


//paint allows us to paint the grid squares
let color = "red";
function paint(){
    
    let grids = document.querySelectorAll(".grids");
for (let i = 0; i < grids.length; i++) {
   grids[i].addEventListener("mouseover",()=>{grids[i].style.cssText = "border:solid 1px black;flex:auto;padding:" + padding + "px;background-color:" + color});
  }
}
paint();


  //a function to change the color of the hovered squares//
function colorChange(){
  color=prompt("Type in the color you want");
  paint();}
//white function to use cursor as an eraser turning squares back to white, clear was a fail because it is a reserved word//
function white() {
  
  color="white";
  paint();}

//a function that deletes all the grid squares for the sizing function
function del(){
  let loop = s**2;
  for (i=0;i<loop;i++){main.removeChild(main.firstElementChild);}}
// a function to fill all squares to white
function clearup(){
  del();
  create();
paint();}
//function to clear the grid and input the amount of squares going across and down
function sizing(){
  del();
  s=+prompt("ENTER HOW MANY SQUARES IN EACH ROW AND COLUMN YOU NEED");
  if(s>50){alert("Apologies but the squares must be below 50*50. Please pick a smaller number");s=16;}  
  create();
  paint();
   }
   //function that turns the color to random each time it passes through
   
   function random(){ 
     randomColor ="#" + Math.floor(Math.random()*16777215).toString(16);  
    color = randomColor;
    paint();
    console.log(randomColor);
    
    
   }
   
   //rainbow function lets the cursor cycle through random  colors on each square
   function rainbow(){
    let grids = document.querySelectorAll(".grids");
    for (let i = 0; i < grids.length; i++) {
    grids[i].addEventListener("mouseover",()=>{grids[i].style.cssText = "border:solid 1px black;flex:auto;padding:" + padding + "px;background-color:" + "#" + Math.floor(Math.random()*16777215).toString(16);})
      
    }
   }

console.log(color);




//grids[i].addEventListener("mouseover",()=>{grids[i].style.cssText ="border:solid 1px black;flex:auto;padding:10px;background-color:black;";});//
//grids.addEventListener("mouseover",()=>{grids.style.cssText ="border:solid 1px black;flex:auto;padding:10px;background-color:black;";})//




