function compute()
{
    //Getting values from input fields
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    // Input Field validation 
    if(principal==0 || principal < 0){
        alert('Enter a positive number');
        document.getElementById("principal").focus()

    }
    else {
        
        document.getElementById('result').innerHTML= 'if you deposit '
        + principal+',<br/>at an interest rate of '
        + rate + '%.<br/>You will recieve an amount of ' 
        + interest + ',<br/>in the year ' + year ;
        document.getElementById("principal").focus();
        }
}
//Check the slider is working properly
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}        



        