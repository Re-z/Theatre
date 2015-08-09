/**
 * Created by admin on 09.08.2015.
 */
$('document').ready(function (){
    var currentSlide=1;
    var sliderImgWidth=600;
    $('.slider__btn_left').click(function(){
        if(currentSlide===1)
        {
            currentSlide=9;
            $('#slider_lab').animate(
                {
                    'margin-left': '-'+sliderImgWidth*(currentSlide-1)
                },1000);
            return;
        }
        currentSlide--;
        $('#slider_lab').animate(
            {
                'margin-left': '+='+sliderImgWidth
            }, 1000);
    });


    $('.slider__btn_right').click(function()
    {
        if(currentSlide===9)
        {
            currentSlide=1;
            $('#slider_lab').animate({
                'margin-left': 0
            }, 1000);
            return;
        }
        currentSlide++;
        $('#slider_lab').animate({
            'margin-left': '-='+sliderImgWidth
        },1000)
    })

});