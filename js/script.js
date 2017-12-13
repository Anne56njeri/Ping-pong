//userinterface logic
$(document).ready(function(){
  $("form#firstnumber").submit(function(event){
    event.preventDefault();
    var pingpong= $("#submitted").val();
    var result= firstnumber(pingpong);
  result.forEach(function(element){
    $("#result").append("<li>"+element);
  })
  });
});
//business logic
function firstnumber(pingpong){
  var result=[];
  for(i=1; i<=pingpong;i++){
    if (i%15===0){
      result.push("ping pong");
    }
else if (i%5===0){
    result.push("pong");
  }else if (i%3===0){
    result.push("ping");
  }
   else{
     result.push(i);
   }
}
 return result;
}
