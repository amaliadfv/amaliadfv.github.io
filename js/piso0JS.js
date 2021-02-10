$("#newNext").click(function(){
    let newImgActive = $(".newActive");
    $(newImgActive).removeClass("newActive");
    let newNextImg = $(newImgActive).next();
    $(newNextImg).addClass("newActive");
    $("#newPrev").addClass("activeInput");
    let newLastImgNumber = $(".newImgSlider").length -1 
    let newLastImg = $(".newImgSlider")[newLastImgNumber];
    if($(newLastImg).hasClass("newActive")){
        $("#newNext").removeClass("activeInput");
    }
});
$("#newPrev").click(function(){
    let newImgActive = $(".newActive");
    $(newImgActive).removeClass("newActive");
    let newLastImg = $(newImgActive).prev();
    $(newLastImg).addClass("newActive");
    $("#newNext").addClass("activeInput");
    let newFirstImg = $(".newImgSlider")[0];
    if($(newFirstImg).hasClass("newActive")){
        $("#newPrev").removeClass("activeInput");
    }
});
