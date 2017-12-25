$( document ).ready(function() {

    var tag = $(".post-content").children().last().children();
    $(".pill").append(tag);
    $(".pill").children().text("Next");

    var clicked = false;
    $(function() {
        $("#expand-icon").click(function() {
            clicked = !clicked;
            if (clicked) {
                $(this).children().addClass("clicked")
            } else {
                $(this).children().removeClass("clicked")
            }
        })
    });

})