if (Meteor.isClient) {
  //esto es con jquery.
  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    //Llamamos a la clase .nombre y la mueve con translate. Donde el 1º valor corresponde a horizontal y el 2º a vertical
    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

    $('.back-bird').css({
      'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });

    $('.fore-bird').css({
      'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
    });

    // Animacón para el set de fotos.
    if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

      $('.clothes-pics figure').each(function(i){

        setTimeout(function(){
          $('.clothes-pics figure').eq(i).addClass('is-showing');
        }, 150 * (i+1));
        
      });

    }

  });
}

if (Meteor.isServer) {

}
