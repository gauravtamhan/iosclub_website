$( document ).ready(function() {

    var tag = $(".post-content").children().last().children();
    $(".pill").append(tag);
    $(".pill").children().text("Next");

})