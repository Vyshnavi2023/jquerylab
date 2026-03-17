
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


// 1️⃣ Parent Child (all children inside parent)
$("#container p").click(function(){
    $(this).css("color", "blue");
});

// 2️⃣ Direct Child only
$("#container > p").dblclick(function(){
    $(this).css("background-color", "lightgreen");
});

// 3️⃣ Adjacent sibling (next only)
$("h2 + p").click(function(){
    $(this).hide();
});

// 4️⃣ General siblings (all next)
$("h2 ~ p").mouseenter(function(){
    $(this).css("border", "2px solid red");
});