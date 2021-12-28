$(function(){
      //mune+nav
      $('.menu').on("click", function(){
          let x = $('i').attr('class') == 'fas fa-bars';
          if(x){
               $('nav').css('left','0');
               $('i').attr('class', 'fas fa-times');
          } 
          else{
               $('nav').css('left','-150%');
               $('i').attr('class', 'fas fa-bars');
          }
      });

     //  section.myReason 
     // .myReason_question
     $(window).scroll(function(){
          var myReason = $('.myReason_answer');
          var myScroll = myReason.offset().top;
          var list = $('.answer3');
          var listScroll = list.offset().top;
          var question = $('.myReason_question');
          // console.log(listScroll);

          var window_scroll = $(this).scrollTop();
          // console.log(window_scroll);

          if(window_scroll >= myScroll){
               question.css({
                    'position' : 'fixed',
                    'top' : '50px',
                    'opacity' : 1
               });

               if(window_scroll >= listScroll){
                    question.css({
                         'opacity' : 0
                    });
               }
          }else{
               question.css({
                    'position' : 'absolute',
                    'opacity' : 1
               });
          }
     });


     //fly
     $(window).scroll(function(){
          var contact = $('.training');
          var contact_scroll = contact.offset().top;
          console.log(contact_scroll);

          var window_scroll = $(this).scrollTop();
          console.log(window_scroll);

          if(window_scroll >= contact_scroll){
               $('.contact_anime').addClass('animeFly');
          }
     });

     
     // fly > toTop
     $('.contact_anime').on('click', function(){
          $("body,html").stop().animate({
			scrollTop:$($('.logo')).offset().top
		});
     });
});