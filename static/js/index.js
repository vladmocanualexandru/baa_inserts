window.addEventListener('scroll',(event) => {
    if (window.scrollY>80) {
        $("#logoSheep").addClass("collapsed");
        $("#logoText").addClass("collapsed");
        $("#navbar").addClass("collapsed");
    } else {
        $("#logoSheep").removeClass("collapsed");
        $("#logoText").removeClass("collapsed");
        $("#navbar").removeClass("collapsed");
    }

});