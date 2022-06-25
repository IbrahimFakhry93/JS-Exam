import { ShowMovie } from "./ShowMovie.js";

let showMovie=new ShowMovie;

import { Validation} from "./validation.js";
let validation=new Validation;


let boxWidth=$('#navList').innerWidth();
$('#navbar').css('left',`-${boxWidth}px`);





$('#toggle-btn').click(function(e){
  let boxOffset=$('#navList').offset().left;
  //console.log(boxOffset);
  let boxWidth=$('#navList').innerWidth();
  //  console.log(boxWidth);
    if(boxOffset==0){
      $("#xMark").fadeOut(100,()=>{
        $("#toggle").fadeIn(100);
    })
  
     $('#navbar').animate({left:`-${boxWidth}px`},1000);
     //closing
    }
    else{
      $("#toggle").fadeOut(100,()=>{
        $("#xMark").fadeIn(100);
    }) 
        $('#navbar').animate({left:0},1000);
      
        //opening
    }
  })

  $('#xbtn').click(function(e){
    let boxOffset=$('#navList').offset().left;
    //console.log(boxOffset);
    let boxWidth=$('#navList').innerWidth();
    //  console.log(boxWidth);
      if(boxOffset==0){
        $("#xMark").fadeOut(100,()=>{
          $("#toggle").fadeIn(100);
      })
    //    console.log("hi there");
       $('#navbar').animate({left:`-${boxWidth}px`},1000);
       //closing
      }
      else{
         //to open
        $("#toggle").fadeOut(100,()=>{
          $("#xMark").fadeIn(100);
      }) 
          $('#navbar').animate({left:0},1000);
         
      }
    })