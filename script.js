
$(document).ready(function(){

    // 1️⃣ Element Selector
    $("p").click(function(){
        $(this).addClass("highlight");
    });

    // 2️⃣ ID Selector
    $("#btn").click(function(){
        $("#heading").hide();
    });

    // 3️⃣ Class Selector
    $(".text").dblclick(function(){
        $(this).hide();
    });

    // 4️⃣ Multiple Selector
    $("h1, p").mouseenter(function(){
        $(this).css("background-color", "yellow");
    });

});