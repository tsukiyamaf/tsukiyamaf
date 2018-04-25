$(document).ready(function() {
     const distanceToNextImage = -450;
     let currentImageNumber = 0;
     $('#lightbox').hide();

     $('.item').click(function () {
          currentImageNumber = parseInt($(this).attr('id'));
          $('#carousel-strip').css('left', `${currentImageNumber * distanceToNextImage}px`);
          $('#lightbox').show();
     });

     // YOUR CODE HERE
     $('#right').click(function () {
          currentImageNumber = (currentImageNumber + 1) % 9;
          $('#carousel-strip').css('left', `${currentImageNumber * distanceToNextImage}px`);
     });
     $('#left').click(function () {
          currentImageNumber = currentImageNumber === 0 ? 8 : (currentImageNumber - 1);
          $('#carousel-strip').css('left', `${currentImageNumber * distanceToNextImage}px`);
     });

     
     $("#overlay, #close").click(function() {
          $("#lightbox").hide();
     })
});