$("document").ready(function () {
    var interval = setInterval(function() {
        var picTop = $("#pic").offset().top;
        var picDown = picTop + $("#pic").height();
        var groundTop = $("#ground").offset().top;
        var groundDown = groundTop + $("#ground").height();
        if(picDown >= groundTop) {
            clearInterval(interval);}
        $("#pic").css("top", $("#pic").offset().top + 20)
        ;}, 1000);
})