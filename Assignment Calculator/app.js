function userButton(e){
    var userInput = document.getElementById("display");
    userInput.value  += e;
}
function clearAll (){
    var userInput = document.getElementById("display");
    userInput.value = "";
}
function clearOne (){
    var userInput = document.getElementById("display");
    userInput.value = userInput.value.slice(0,-1);
}
function calculateResult(){
   try{ var result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;}
    catch(error){
        var userInput = document.getElementById("display")
            userInput.value = "error";

    }
}