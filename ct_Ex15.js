// in Ex9 to Ex15, change the name of the following function properly
function triangle() {
  
  /* this statement defines an object reference to the 
     html element that its ID is "output".
    Every time you want to output something, use outputObj */
  document.getElementById("output").style.textAlign = "left"; 
  var outputObj=document.getElementById("output");

  // this statement receives some data and parses it to integer
  var a = parseInt(prompt("Please enter a number: ", ""));
 
 
  /* this statement add some message to our output Object
     you would need to change the message to be appropriate in Ex10 to E15*/

  // translate rest of your flowcharts to js here:
   var output1 = "";
   var character = " XX ";
   var i = 1;
   var b=0;
   while (i<=a) {
      outputObj.innerHTML=outputObj.innerHTML+"<br><br>"
      b=0;
      while (b<i) {
         outputObj.innerHTML=outputObj.innerHTML+character;
         b=b+1;
      }
      i=i+1;
   }
   
   






  
  
  
  
  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}