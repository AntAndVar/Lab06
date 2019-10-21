// in Ex9 to Ex15, change the name of the following function properly
function problem_12() {
  
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
  var numlist1 = [];
  numlist1 = a.toString(10).replace(/\D/g, '0').split('').map(Number);
  var numlist2 = [];
  numlist2 = numlist1.slice();
  numlist2.reverse();
  var final=1;
  while (i<numlist1.length) {
    if (numlist1[i] != numlist2[i]) {
       final=0;
       break;
    }
    i=i+1;
  }
  var answer="yes";
  if (final == 0) {
    answer="no";
  }
   outputObj.innerHTML="number: "+a+"\n \n \n equal to its reverse? "+answer;





  
  
  
  
  //the following statements inform the user that the program ended
  //and disable the button
  outputObj.innerHTML=outputObj.innerHTML+"<br><br>"+"program ended";
  document.getElementsByTagName("button")[0].setAttribute("disabled","true");
}