$(document).ready(function(){
    $("#inp-usr").focus(function(){
        $(this).css('background','rgba(255, 255, 255, 0.1)');
        /*$(this).css('outline','none');*/
        $(this).css('color','white');
    }),
    $("#inp-pwd").focus(function(){
        $(this).css('background','rgba(255, 255, 255, 0.1)');
        $(this).css('color','white');
    }),
    $("#brown").click(function(){
        $("body").css('background','brown');
        $("#circle-1").css('background','red');
        $("#circle-2").css('background','red');
        $(".btn").css('background-color','red');
        $(".btn").css('color','white');
        $("#title").css('color','white');
        $("#text-light1").css('color','white');
        $("#text-light2").css('color','white');

    }),
    $("#heavy-blue").click(function(){
        $("body").css('background','rgb(44, 44, 87)');
        $("#circle-1").css('background','rgb(62, 88, 173)');
        $("#circle-2").css('background','rgb(62, 88, 173)');
        $(".btn").css('background-color','rgb(62, 88, 173)');
        $(".btn").css('color','white');
        $("#title").css('color','white');
        $("#text-light1").css('color','white');
        $("#text-light2").css('color','white');

    }),
    $("#grey-black").click(function(){
        $("body").css('background','rgb(66, 56, 56)');
        $("#circle-1").css('background','rgb(206, 61, 8)');
        $("#circle-2").css('background','rgb(206, 61, 8)');
        $(".btn").css('background-color','rgb(206, 61, 8)');
        $(".btn").css('color','white');
        $("#title").css('color','white');
        $("#text-light1").css('color','white');
        $("#text-light2").css('color','white');

    }),
    $("#sandle").click(function(){
        $("body").css('background','sandybrown');
        $("#circle-1").css('background','rgb(247, 107, 92)');
        $("#circle-2").css('background','rgb(247, 107, 92)');
        $(".btn").css('background-color','rgb(247, 107, 92)');
        $(".btn").css('color','black');
        $("#title").css('color','black');
        $("#text-light1").css('color','black');
        $("#text-light2").css('color','black');
    }),
    $("#orange").click(function(){
        $("body").css('background','rgb(236, 124, 104)');
        $("#circle-1").css('background','rgb(94, 41, 41)');
        $("#circle-2").css('background','rgb(94, 41, 41)');
        $(".btn").css('background-color','rgb(146, 74, 74)');
        $(".btn").css('color','rgb(94, 41, 41)');
        $("#title").css('color','rgb(94, 41, 41)');
        $("#text-light1").css('color','rgb(94, 41, 41)');
        $("#text-light2").css('color','rgb(94, 41, 41)');
    })


})