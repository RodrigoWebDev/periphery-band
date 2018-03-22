$(function(){
    //Dropdown da barra de navegação na versão mobile
    $(".bars").click(function(){
        $(".dropdown-ul").toggle();
    });
    
    //slide
    let index = 0;
    let img = $(".slide img");
    function nextSlide(){
        index += 1;
        if(index > 3){
            index = 0;
        }
        img.attr("src", "img/slide" + index + ".jpg");
        console.log(img);
    }
    
    setInterval(function(){ 
        nextSlide();
    }, 3000);

});