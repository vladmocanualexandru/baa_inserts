$("img.zoomable").click(function(elem){
    $("#zoomedImg").attr("src", elem.currentTarget.src)
    $("#zoomedImgContainer").show();
})

$("#zoomedImg").click(function(elem){
    $("#zoomedImgContainer").hide();
})