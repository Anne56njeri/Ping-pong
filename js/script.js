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
  } else
  return "pong";
};
