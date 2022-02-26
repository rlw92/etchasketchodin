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
let s = 16;
//mww can be main window width//
let mww = 2*(11*s);
// mw is gonna access main window of the grid
let mw = document.querySelector(".main");
mw.style.width = mww+"px";
//loop can be the total amount of boxes needed so s*s or ://
let loop = s**2;


for(i=0;i<loop;i++){
let div = document.createElement("div");
div.className="grids";
div.style.cssText ="border:solid 1px black;flex:auto;padding:10px";
let grids = document.querySelectorAll(".grids");

main.appendChild(div);
}

    let color = "green";
    let grids = document.querySelectorAll(".grids");
for (let i = 0; i < grids.length; i++) {
   grids[i].addEventListener("mouseover",()=>{grids[i].style.cssText = "border:solid 1px black;flex:auto;padding:10px;background-color:" + color});
  }






//grids[i].addEventListener("mouseover",()=>{grids[i].style.cssText ="border:solid 1px black;flex:auto;padding:10px;background-color:black;";});//
//grids.addEventListener("mouseover",()=>{grids.style.cssText ="border:solid 1px black;flex:auto;padding:10px;background-color:black;";})//




