function compute()
{
   // Create variables and assign the to html values
   var principal = document.getElementById("principal").value;
   var rate = document.getElementById("rate").value;
   var years = document.getElementById("years").value;
 
   //Validation for 'Principal' input box
   if(principal <= 0){
      window.alert("Enter a positive number");
      // Focus user on principal input box
      document.getElementById("principal").focus();
   }
   else{
     var interest = principal * years * rate /100;
     // Convert No of years into year in the future
     var year = new Date().getFullYear() + parseInt(years);
     document.getElementById("result").innerHTML = "If you deposit "+'<mark>'+principal+'</mark>'+",\<br\>at an interest rate of "+'<mark>'+rate+"%"+'</mark>'+"\<br\>You will receive an amount of "+'<mark>'+interest+'</mark>'+",\<br\>in the year "+'<mark>'+year+'</mark>'+"\<br\>";
   }

  }

// Reads value of range slider and displays it 
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
        