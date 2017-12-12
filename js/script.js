//userinterface logic
$(document).ready(function(){
  $("form#firstnumber").submit(function(event){
    event.preventDefault();
    var submitted = parseInt($("input#submitted").val());
    var result= firstnumber(submitted);
    $("#result").text(result);

  });
});
//business logic
var firstnumber =function(submitted){
  if (submitted%3===0){
    return "ping";
  } else if(submitted%5===0){
    return "pong";
  } else if (submitted%15===0) {
    return "ping pong";
  }else{
    return "you lose"
  }

};
