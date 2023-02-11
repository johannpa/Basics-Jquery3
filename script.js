$(document).ready(function(){
    let click = false;
    $("li").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(this).css("background-color", "white");
        }
    });
    $("#option1").click(function(){
        if(click === false){
            click=true;
            $(this).css("backgroun-color", "green");
            $("#happy").animate({
                fontSize: '5em'
            });
            $(this).mouseleave(function(){
                $(this).css("background-color", "green");
            });
        }
    });
    $("#option2").click(function(){
        if(click === false){
            click=true;
            $(this).css("backgroun-color", "red");
            $("#sad").animate({
                fontSize: '5em'
            });
            $(this).mouseleave(function(){
                $(this).css("background-color", "red");
            });
        }
    });
});