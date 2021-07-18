var name=prompt("Tell me your name!")
$("h1").text("Hello There "+ name)
$(".thanku").text("Thank You"+ name )

$(".numberbutton").on("click", function(){
    alert("Is the entered number correct?")
    var num=$(".num").val()
    $(".tag").empty()
    for(var i=0; i<=num; i++){
        $(".tag").append(i+"<br>");
    }
        
    
})

$(".numberbuttontwo").on("click", function(){
    alert("Is the entered number correct?")
    var num=$(".numtwo").val()
    $(".tagtwo").empty()
    for(var i=0; i<=num; i+=2){
        $(".tagtwo").append(i+"<br>");
    }
        
    
})