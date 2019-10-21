// in Ex9 to Ex15, change the name of the following function properly
function fibonacci() {
  
  /* this statement defines an object reference to the 
     html element that its ID is "output".
	 Every time you want to output something, use outputObj */
  var outputObj=document.getElementById("output");

  // this statement receives some data and parses it to integer
  var a = parseInt(prompt("Please enter a number: ", ""));
 
 
  /* this statement add some message to our output Object
     you would need to change the message to be appropriate in Ex10 to E15*/

  // translate rest of your flowcharts to js here:
   var output1 = [0];
   var f1=0;
   var f2=1;
   var next = 0;
   for (i=1; i<a; i=i+1) {
      output1.push(f2);
      next = f1+f2;
      f1=f2;
      f2=next; 
   }
   var output2 = output1.join();
   outputObj.innerHTML="number: "+a+" \n Fibonacci: "+output2;





  
  
  
  
  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}