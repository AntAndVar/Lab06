// in Ex9 to Ex15, change the name of the following function properly
function problem_11() {
  
  /* this statement defines an object reference to the 
     html element that its ID is "output".
	 Every time you want to output something, use outputObj */
  var outputObj=document.getElementById("output");

  // this statement receives some data and parses it to integer
  var a = parseInt(prompt("Please enter a number: ", ""));
 
 
  /* this statement add some message to our output Object
     you would need to change the message to be appropriate in Ex10 to E15*/

  // translate rest of your flowcharts to js here:
   var i = 0;
   var numlist = [];
   var numlist = a.toString(10).replace(/\D/g, '0').split('').map(Number);
   var final=0;
   while (i<numlist.length) {
      final = final + numlist[i];
      i=i+1;
   }
   outputObj.innerHTML="number: "+a+"\n \n \n sum of digits: "+final;





  
  
  
  
  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}